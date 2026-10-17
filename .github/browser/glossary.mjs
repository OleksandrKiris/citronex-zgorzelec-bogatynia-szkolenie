// User-authorized Actions browser acceptance, never a local browser substitute.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

assert.equal(process.env.GITHUB_ACTIONS, 'true', 'Run only in authorized GitHub Actions');
const { chromium } = createRequire(import.meta.url)(process.env.PLAYWRIGHT_PACKAGE);
const reportDir = resolve(process.env.BROWSER_REPORT);
await mkdir(reportDir, { recursive: true });
const hash = b => createHash('sha256').update(b).digest('hex');
const git = (...args) => execFileSync('git', args);
const report = { head: process.env.TESTED_HEAD, base: process.env.TESTED_BASE,
  checkout: git('rev-parse', 'HEAD').toString().trim(), started: new Date().toISOString(),
  files: {}, results: [], requests: [], blocked: [], errors: [],
  limits: ['Desktop Chromium; narrow viewport is not a physical phone.',
    'Only glossary/text routes are accepted, not all training photos/audio/PDFs.',
    'No external navigation, messages, calls or submissions.',
    'First installation requires HTTP access; file:// and never-opened-device offline are not promised.'] };
const current = new Map(), previous = new Map();
const files = git('ls-tree', '-r', '--name-only', report.head).toString().trim().split('\n').filter(p =>
  /^(?:[^/]+\.html|sw\.js|manifest\.webmanifest|assets\/(?:js|css)\/[^/]+\.(?:js|css)|assets\/primserv-logo\.svg)$/.test(p));
for (const file of files) {
  const bytes = await readFile(file);
  assert.equal(hash(bytes), hash(git('show', `${report.head}:${file}`)), `Exact head: ${file}`);
  current.set(file, bytes); previous.set(file, git('show', `${report.base}:${file}`));
  report.files[file] = { bytes: bytes.length, sha256: hash(bytes) };
}
let oldVersion = false, activeMode = 'bogatynia';
const prefix = '/citronex-zgorzelec-bogatynia-szkolenie/';
const types = { html: 'text/html', js: 'application/javascript', css: 'text/css', svg: 'image/svg+xml', webmanifest: 'application/manifest+json' };
const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  report.requests.push({ path: url.pathname, method: req.method, version: oldVersion ? 'base' : 'head' });
  const file = url.pathname.startsWith(prefix) ? url.pathname.slice(prefix.length) || 'index.html' : '';
  const bytes = (oldVersion ? previous : current).get(file);
  if (!['GET', 'HEAD'].includes(req.method) || !bytes) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': types[file.split('.').at(-1)], 'Content-Length': bytes.length, 'Cache-Control': 'no-store' });
  res.end(req.method === 'HEAD' ? undefined : bytes);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = server.address().port, base = `http://127.0.0.1:${port}${prefix}`;
report.url = base;
async function offline(ctx, value) {
  await ctx.setOffline(value);
  // Also stop the origin: Chromium offline emulation alone can leave SW fetch online.
  if (value && server.listening) { server.closeAllConnections(); await new Promise(r => server.close(r)); }
  if (!value && !server.listening) await new Promise(r => server.listen(port, '127.0.0.1', r));
}
let browser, activePage;
const contexts = [];
async function context(width, storage = '') {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, locale: 'en-US' });
  contexts.push(ctx); ctx.setDefaultTimeout(12000);
  await ctx.tracing.start({ screenshots: true, snapshots: true });
  await ctx.route('**/*', route => {
    const r = route.request();
    if (!['GET', 'HEAD'].includes(r.method()) || new URL(r.url()).origin !== new URL(base).origin) {
      report.blocked.push({ method: r.method(), url: r.url() }); return route.abort();
    }
    return route.continue();
  });
  if (storage === 'denied') await ctx.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Fixture denial', 'SecurityError'); } });
    history.replaceState = () => { throw new DOMException('Fixture denial', 'SecurityError'); };
  });
  if (storage === 'corrupt') await ctx.addInitScript(() => {
    localStorage.setItem('cx-lang', '{broken'); localStorage.setItem('unrelated', 'keep');
    localStorage.setItem('primserv:training-test:v1:/citronex-zgorzelec-bogatynia-szkolenie/:', '{broken');
  });
  const page = activePage = await ctx.newPage();
  page.on('pageerror', e => report.errors.push(e.message));
  return { ctx, page };
}
const input = '[data-glossary-search]';
async function ready(page) { await page.locator(input).waitFor({ state: 'visible' }); }
async function controlled(page) {
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
}
async function retained(page) {
  assert.equal(new URL(page.url()).searchParams.get('mode'), activeMode);
  await ready(page); assert.equal(await page.locator(input).inputValue(), 'reader');
  const matches = await page.locator('[data-glossary-card]:not(.is-hidden)').count();
  assert.ok(matches > 0 && matches < 54); assert.ok(await page.locator('[data-glossary-card]:visible').count() > 0);
  await page.waitForTimeout(75); // Drain real asynchronous details toggle events.
  assert.equal(await page.locator('[data-glossary-card]:visible').count(), matches, 'Every search match remains expanded');
}
async function keyboardFocus(page, selector) {
  for (let n = 0; n < 45; n++) {
    if (await page.locator(selector).evaluate(el => el === document.activeElement)) return;
    await page.keyboard.press('Tab');
  }
  throw Error(`Unreachable by Tab: ${selector}`);
}
async function shot(page, name) {
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Horizontal overflow');
  await page.screenshot({ path: join(reportDir, `${activeMode}-${name}.png`), fullPage: true });
}
async function closeContext(ctx) {
  await ctx.tracing.stop({ path: join(reportDir, `trace-${contexts.indexOf(ctx)}.zip`) });
  await ctx.close();
}
async function language(page, lang) {
  await page.locator('#langSelect').selectOption(lang);
  await page.waitForURL(url => url.searchParams.get('lang') === lang);
  await retained(page); assert.equal(await page.locator('html').getAttribute('lang'), lang === 'ua' ? 'uk' : lang);
}
try {
  browser = await chromium.launch({ headless: true });
  report.browser = `Chromium ${browser.version()} / Playwright 1.56.1`;
  for (const mode of ['bogatynia', 'zgorzelec']) for (const width of [1280, 320]) {
    activeMode = mode;
    const { ctx, page } = await context(width);
    await page.goto(`${base}slownik.html?mode=${activeMode}&lang=ua&from=fixture#terms`); await ready(page); await controlled(page);
    const historyLength = await page.evaluate(() => history.length);
    await page.evaluate(() => history.replaceState({ keep: true }, '', location.href));
    await keyboardFocus(page, input); await page.keyboard.type('reader'); await retained(page);
    assert.equal(await page.locator(input).evaluate(el => el === document.activeElement), true);
    assert.equal(await page.evaluate(() => history.length), historyLength);
    assert.equal(await page.evaluate(() => history.state.keep), true);
    assert.equal(new URL(page.url()).hash, '#terms');
    for (const lang of ['pl', 'en', 'ua', 'ru', 'az', 'es', 'fil', 'id', 'ne']) {
      await language(page, lang); await page.reload(); await retained(page);
      await shot(page, `language-${lang}-${width}`);
    }
    await keyboardFocus(page, '.top-nav-link[href*="kontakty.html"]'); await page.keyboard.press('Enter');
    await page.waitForURL(/kontakty\.html/);
    await page.locator('h1').waitFor({ state: 'visible' });
    assert.equal(new URL(page.url()).searchParams.get('mode'), mode);
    await page.goBack(); await retained(page);
    await page.locator(input).fill('no-such-term-xyz');
    await page.locator('[data-glossary-empty][role="status"]').waitFor({ state: 'visible' });
    await shot(page, `empty-${width}`);
    await page.locator(input).fill('');
    assert.equal(new URL(page.url()).searchParams.has('q'), false);
    assert.equal(await page.locator('[data-glossary-card]:not(.is-hidden)').count(), 54);
    assert.equal(new URL(page.url()).searchParams.get('from'), 'fixture');
    await page.locator(input).fill('reader');
    await offline(ctx, true); await page.reload(); await retained(page);
    assert.equal(await page.evaluate(() => navigator.onLine), false);
    await language(page, 'ua'); await page.reload(); await retained(page); await shot(page, `offline-${width}`);
    await offline(ctx, false);
    await page.goto(`${base}slownik.html?mode=${activeMode}&lang=ka&q=reader`); await retained(page);
    assert.equal(await page.locator('#langSelect').inputValue(), 'en');
    assert.match(await page.locator('.primserv-language-fallback').innerText(), /English/);
    await shot(page, `fallback-${width}`);
    report.results.push({ scenario: 'keyboard/search, nine languages/reload, contacts/Back, empty/clear, offline reload/language, ka fallback', width, mode, pass: true });
    await closeContext(ctx);
  }
  for (const storage of ['corrupt', 'denied']) {
    const { ctx, page } = await context(320, storage);
    await page.goto(`${base}slownik.html?mode=${activeMode}&lang=en`); await ready(page);
    await keyboardFocus(page, input); await page.keyboard.type('reader'); await retained(page);
    await language(page, 'ua'); await page.reload(); await retained(page);
    if (storage === 'corrupt') assert.equal(await page.evaluate(() => localStorage.getItem('unrelated')), 'keep');
    await shot(page, `storage-${storage}`);
    report.results.push({ scenario: `${storage} storage/history: filter, language and URL reload`, pass: true });
    await closeContext(ctx);
  }
  activeMode = 'bogatynia'; oldVersion = true;
  const { ctx, page } = await context(320);
  await page.goto(`${base}test.html?mode=${activeMode}&lang=ua`);
  await page.locator('input[name="testAnswer"][value="1"]').check();
  await page.locator('#testNext').click(); await controlled(page);
  const saved = await page.evaluate(() => Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])));
  assert.ok(Object.keys(saved).some(k => k.startsWith('primserv:training-test:')), 'Real legacy quiz progress');
  await page.goto(`${base}slownik.html?mode=${activeMode}&lang=ua&q=reader`); await ready(page);
  assert.equal(await page.locator(input).inputValue(), '', 'Base reproduces missing query restoration');
  await page.evaluate(async () => { localStorage.setItem('unrelated', 'keep'); await caches.open('unrelated-cache'); });
  oldVersion = false;
  await page.evaluate(async () => {
    const changed = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(Error('No new SW controller')), 12000);
      navigator.serviceWorker.addEventListener('controllerchange', () => { clearTimeout(timer); resolve(); }, { once: true });
    });
    const reg = await navigator.serviceWorker.ready; await reg.update(); await changed;
  });
  await page.waitForFunction(async () => {
    const keys = await caches.keys(); return keys.includes('citronex-zgorzelec-bogatynia-szkolenie-20261017-glossary-context1') && !keys.includes('citronex-zgorzelec-bogatynia-szkolenie-20261016-reader-context1');
  });
  await page.reload(); await retained(page); await controlled(page);
  for (const [key, value] of Object.entries(saved)) assert.equal(await page.evaluate(k => localStorage.getItem(k), key), value);
  assert.equal(await page.evaluate(() => localStorage.getItem('unrelated')), 'keep');
  assert.ok((await page.evaluate(() => caches.keys())).includes('unrelated-cache'));
  await offline(ctx, true); await page.reload(); await retained(page); await shot(page, 'upgrade-offline');
  await page.goto(`${base}test.html?mode=${activeMode}&lang=ua`); await page.locator('#testResume').click();
  assert.match(await page.locator('#testProgressText').innerText(), /2\/30/);
  report.cache = await page.evaluate(async () => {
    const c = await caches.open('citronex-zgorzelec-bogatynia-szkolenie-20261017-glossary-context1'); const rows = [];
    for (const req of await c.keys()) { const res = await c.match(req); rows.push({ url: req.url, bytes: (await res.arrayBuffer()).byteLength }); }
    return rows;
  });
  report.results.push({ scenario: 'actual base → head SW, old defect reproduced, glossary restored, legacy quiz/unrelated storage and cache preserved, offline quiz resume', pass: true });
  await offline(ctx, false);
  for (const mode of ['bogatynia', 'zgorzelec']) {
    await page.goto(`${base}index.html?lang=en&mode=${mode}`);
    await page.locator('.mode-summary').waitFor({ state: 'visible' });
    const reader = page.locator('.tiles a[href*="reader.html"]');
    assert.equal(await reader.count(), mode === 'bogatynia' ? 1 : 0);
    await page.goto(`${base}magazyn.html?lang=en&mode=${mode}`);
    assert.match(await page.locator('body').innerText(), /Do not use Bogatynia reader\/tablet instructions/);
  }
  report.results.push({ scenario: 'mode-specific home tiles and warehouse routing warning retained', pass: true });
  assert.deepEqual(report.errors, []); assert.deepEqual(report.blocked, []);
  report.pass = true;
} catch (err) {
  report.pass = false; report.failure = err.stack; process.exitCode = 1;
  if (activePage) await activePage.screenshot({ path: join(reportDir, 'failure.png'), fullPage: true }).catch(() => {});
} finally {
  for (const [i, ctx] of contexts.entries()) await ctx.tracing.stop({ path: join(reportDir, `trace-${i}.zip`) }).catch(() => {});
  await browser?.close(); if (server.listening) await new Promise(r => server.close(r));
  report.finished = new Date().toISOString();
  await writeFile(join(reportDir, 'acceptance.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ pass: report.pass, head: report.head, results: report.results, failure: report.failure }));
}
