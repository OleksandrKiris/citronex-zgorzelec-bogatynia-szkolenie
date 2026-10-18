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
    'Glossary, location policy, Q1/history and home text routes; not all training photos/audio/PDFs.',
    'No external navigation, messages, calls or submissions.',
    'First installation requires HTTP access; file:// and never-opened-device offline are not promised.'] };
assert.equal(report.checkout,report.head,'Acceptance must run the exact PR head');
const current = new Map(), previous = new Map();
const files = git('ls-tree', '-r', '--name-only', report.head).toString().trim().split('\n').filter(p =>
  /^(?:[^/]+\.html|sw\.js|manifest\.webmanifest|assets\/(?:js|css)\/[^/]+\.(?:js|css)|assets\/primserv-logo\.svg)$/.test(p));
for (const file of files) {
  const bytes = await readFile(file);
  assert.equal(hash(bytes), hash(git('show', `${report.head}:${file}`)), `Exact head: ${file}`);
  current.set(file, bytes); previous.set(file, git('show', `${report.base}:${file}`));
  report.files[file] = { bytes: bytes.length, sha256: hash(bytes) };
}
const workerCacheName = bytes => {
  const text=bytes.toString();
  return text.match(/const CACHE_PREFIX = "([^"]+)"/)[1]+text.match(/const CACHE_NAME = CACHE_PREFIX \+ "([^"]+)"/)[1];
};
const oldCacheName=workerCacheName(previous.get('sw.js')),headCacheName=workerCacheName(current.get('sw.js'));
const appVersion=current.get('test.html').toString().match(/training-app\.js\?v=([^"&]+)/)[1];
assert.notEqual(oldCacheName,headCacheName,'A new question bank needs a fresh shell cache');
report.policyRows=[];report.migrations=[];report.quizStorage=[];
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
async function approvedPolicy(page,mode,lang) {
  return page.evaluate(({mode,lang})=>{
    const data=window.CX_DATA,locations=data.warehouseLocations;
    const get=value=>value[lang]||value.en;
    if(mode==='bogatynia')return get(data.pages.reader.lead);
    if(mode==='zgorzelec')return get(locations.find(x=>x.key==='zgorzelec-banana').lead);
    return get(locations.find(x=>x.key==='bogatynia-priva').lead)+' '+get(locations.find(x=>x.key==='zgorzelec-banana').lead);
  },{mode,lang});
}
async function quizResume(page) {
  await page.locator('#testForm').waitFor();
  if(await page.locator('#testResume').count())await page.locator('#testResume').click();
  await page.locator('#testQuestionTitle').waitFor({state:'visible'});
}
async function exactCachedApp(page) {
  await page.waitForFunction(async expected=>{
    if(!(await caches.keys()).includes(expected.cache))return false;
    const cache=await caches.open(expected.cache),response=await cache.match(new URL('assets/js/training-app.js?v='+expected.version,location.href).href);
    if(!response)return false;const bytes=await response.arrayBuffer();
    const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(x=>x.toString(16).padStart(2,'0')).join('');
    return bytes.byteLength===expected.bytes&&digest===expected.hash;
  },{cache:headCacheName,version:appVersion,bytes:current.get('assets/js/training-app.js').length,hash:hash(current.get('assets/js/training-app.js'))});
}
try {
  browser = await chromium.launch({ headless: true });
  report.browser = `Chromium ${browser.version()} / Playwright 1.56.1`;
  for (const mode of ['first','bogatynia', 'zgorzelec']) for (const width of [1280, 320]) {
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
      const expected=await approvedPolicy(page,mode,lang);
      assert.equal(await page.locator('.glossary-site-policy p').innerText(),expected);
      await page.locator(input).fill('ładowarka');
      assert.equal(await page.locator('[data-glossary-card]:not(.is-hidden)').count(),1);
      await page.locator('[data-glossary-card]:not(.is-hidden)').scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>document.querySelector('[data-glossary-card]:not(.is-hidden)')?.innerText.includes('ładowarka'));
      assert.match(await page.locator('[data-glossary-card]:not(.is-hidden)').innerText(),/ładowarka/);
      assert.equal(await page.locator('.glossary-site-policy p').innerText(),expected,'Generic examples retain the selected site policy');
      const sourceLink=new URL(await page.locator('.glossary-site-policy a').getAttribute('href'),base);
      assert.equal(sourceLink.searchParams.get('mode'),mode);assert.equal(sourceLink.searchParams.get('lang'),lang);
      await page.goto(`${base}test.html?mode=${mode}&lang=${lang}`);await quizResume(page);
      assert.equal(await page.locator('#testQuestionTitle').innerText(),'1. '+expected);
      assert.equal(await page.locator('[data-q="0"]').getAttribute('data-ok'),'1');
      await page.locator('input[name="testAnswer"][value="1"]').check();await page.locator('#testNext').click();
      await page.reload();await quizResume(page);assert.match(await page.locator('#testProgressText').innerText(),/2\/30/);
      await page.locator('#testPrev').click();assert.equal(await page.locator('input[name="testAnswer"][value="1"]').isChecked(),true);
      if(lang==='ru')await shot(page,`Q1-${width}`);
      report.policyRows.push({mode,width,lang,pass:true,genericQuery:'ładowarka',sourceMode:true,quizReload:true});
      await page.goto(`${base}slownik.html?mode=${mode}&lang=${lang}&q=reader&from=fixture#terms`);await retained(page);
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
  for(const mode of ['first','bogatynia','zgorzelec'])for(const width of [1280,320])for(const completed of [false,true]) {
    activeMode=mode;oldVersion=true;
    const {ctx,page}=await context(width);
    await page.goto(`${base}test.html?mode=${mode}&lang=ua`);await quizResume(page);await controlled(page);
    const oldQuestions=await page.evaluate(()=>window.CX_DATA.test.map(item=>({ok:item.ok,text:item.text.ua})));
    for(let i=0;i<(completed?30:3);i++) {
      const value=completed?oldQuestions[i].ok:(i===1?!oldQuestions[i].ok:oldQuestions[i].ok);
      await page.locator(`input[name="testAnswer"][value="${value?'1':'0'}"]`).check();await page.locator('#testNext').click();
    }
    if(completed)assert.match(await page.locator('#testResult').innerText(),/30\/30/);
    const key=`primserv:training-test:v1:${prefix}:${mode}`,newKey=key.replace(':v1:',':v2:');
    const raw=await page.evaluate(key=>localStorage.getItem(key),key);assert.ok(raw);
    const legacy=JSON.parse(raw);assert.equal(legacy.completed,completed);
    await page.goto(`${base}slownik.html?mode=${mode}&lang=ua&q=reader`);await retained(page);
    const oldReader=page.locator('[data-glossary-card]').filter({has:page.getByText('reader',{exact:true})});
    assert.equal(await oldReader.count(),1);
    const oldMeaning=await oldReader.locator('p').innerText(),expected=await approvedPolicy(page,mode,'ua');
    assert.notEqual(oldMeaning,expected,'The current published base exposes the location-policy contradiction');
    await page.evaluate(async()=>{localStorage.setItem('unrelated','keep');await caches.open('unrelated-cache');});
    oldVersion=false;
    await page.evaluate(async()=>{
      const changed=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('No new SW controller')),12000);
        navigator.serviceWorker.addEventListener('controllerchange',()=>{clearTimeout(timer);resolve();},{once:true});});
      const reg=await navigator.serviceWorker.ready;await reg.update();await changed;
    });
    await exactCachedApp(page);
    assert.equal(await page.evaluate(name=>caches.has(name),oldCacheName),false);
    assert.equal(await page.evaluate(()=>localStorage.getItem('unrelated')),'keep');
    assert.equal(await page.evaluate(()=>caches.has('unrelated-cache')),true);
    await page.reload();await retained(page);assert.equal(await page.locator('.glossary-site-policy p').innerText(),expected);
    await offline(ctx,true);await page.reload();await retained(page);
    await page.goto(`${base}test.html?mode=${mode}&lang=ua`);await page.locator('#testForm').waitFor();
    assert.match(await page.locator('main > p.notice[role="status"]').innerText(),/Питання 1 виправлено/);
    await page.locator('main > details.notice summary').click();
    assert.match(await page.locator('main > details.notice').innerText(),completed?/30\/30/:/3\/30/);
    assert.equal((await page.locator('#testResult').innerText()).trim(),'');
    await quizResume(page);assert.match(await page.locator('#testProgressText').innerText(),/1\/30/);
    assert.equal(await page.locator('input[name="testAnswer"]:checked').count(),0);
    assert.equal(await page.locator('#testQuestionTitle').innerText(),'1. '+expected);
    const wrongFeedback=mode==='bogatynia'&&width===320&&completed;
    await page.locator(`input[name="testAnswer"][value="${wrongFeedback?'0':'1'}"]`).check();await page.locator('#testNext').click();
    const saved=JSON.parse(await page.evaluate(key=>localStorage.getItem(key),newKey));
    assert.equal(saved.questionBankVersion,'reader-location-v2');assert.equal(saved.answers[0],!wrongFeedback);
    assert.deepEqual(saved.answers.slice(1),legacy.answers.slice(1));assert.equal(saved.current,1);assert.equal(saved.completed,false);
    assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),raw,'Legacy record is byte-identical');
    await page.reload();await quizResume(page);assert.match(await page.locator('#testProgressText').innerText(),/2\/30/);
    if(wrongFeedback) {
      for(let i=1;i<30;i++)await page.locator('#testNext').click();
      assert.match(await page.locator('#testResult').innerText(),/29\/30/);
      assert.equal(await page.locator('.test-review-item').count(),1);
      const source=new URL(await page.locator('.test-review-item a').getAttribute('href'),base);
      assert.equal(source.pathname,prefix+'magazyn.html');assert.equal(source.searchParams.get('mode'),mode);
      await page.locator('main > details.notice summary').click();await shot(page,'historical30-current29-'+width);
      await page.reload();await page.locator('#testRestart').click();
      await page.reload();await page.locator('#testQuestionTitle').waitFor();
      assert.equal(await page.locator('input[name="testAnswer"]:checked').count(),0);
      assert.equal(await page.locator('main > p.notice[role="status"]').count(),0,'An empty v2 restart must not remigrate v1');
      assert.ok(JSON.parse(await page.evaluate(key=>localStorage.getItem(key),newKey)).answers.every(x=>x===null));
    }
    assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),raw);
    await shot(page,`legacy-${completed?'completed':'partial'}-${width}`);
    report.migrations.push({mode,width,completed,pass:true,oldMeaning,expected,newAppSHA256:hash(current.get('assets/js/training-app.js')),legacyBytesPreserved:true,other29Preserved:true,offline:true,wrongFeedbackAndRestart:wrongFeedback});
    await offline(ctx,false);await closeContext(ctx);
  }
  for(const state of ['denied','quota','corrupt','future']) {
    activeMode='bogatynia';const {ctx,page}=await context(320,state==='denied'?'denied':'');
    const key=`primserv:training-test:v2:${prefix}:bogatynia`,legacyKey=key.replace(':v2:',':v1:');
    const raw=state==='corrupt'?'{broken':JSON.stringify({questionBankVersion:'future-bank',sentinel:'keep'});
    if(state==='corrupt'||state==='future')await ctx.addInitScript(({key,legacyKey,raw})=>{
      if(localStorage.getItem('unrelated')!=='keep'){
        localStorage.setItem(key,raw);localStorage.setItem(legacyKey,'legacy-marker-keep');localStorage.setItem('unrelated','keep');
      }
    },{key,legacyKey,raw});
    if(state==='quota')await ctx.addInitScript(()=>{
      const set=Storage.prototype.setItem;Storage.prototype.setItem=function(key,value){
        if(key.startsWith('primserv:training-test:'))throw new DOMException('Fixture quota','QuotaExceededError');return set.call(this,key,value);
      };
    });
    await page.goto(`${base}test.html?mode=bogatynia&lang=en`);await quizResume(page);
    await page.locator('input[name="testAnswer"][value="1"]').check();await page.locator('#testNext').click();
    assert.match(await page.locator('#testProgressText').innerText(),/2\/30/);
    assert.match(await page.locator('main').innerText(),/not saved|works in memory/);
    if(state==='corrupt'||state==='future') {
      assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),raw);
      assert.equal(await page.evaluate(key=>localStorage.getItem(key),legacyKey),'legacy-marker-keep');
      await page.reload();await page.locator('#testRecover').click();await page.reload();
      assert.ok(JSON.parse(await page.evaluate(key=>localStorage.getItem(key),key)).answers.every(x=>x===null));
      assert.equal(await page.evaluate(key=>localStorage.getItem(key),legacyKey),'legacy-marker-keep');
      assert.equal(await page.evaluate(()=>localStorage.getItem('unrelated')),'keep');
    } else {await page.reload();await quizResume(page);assert.match(await page.locator('#testProgressText').innerText(),/1\/30/);}
    await shot(page,'quiz-storage-'+state);report.quizStorage.push({state,pass:true});await closeContext(ctx);
  }
  for (const width of [1280, 320]) {
    const {ctx: homeCtx, page: home} = await context(width);
    await home.goto(`${base}index.html?lang=en`); await controlled(home);
    await home.locator('.mode-selector').waitFor({state: 'visible'});
    assert.equal(await home.locator('.tiles a').count(), 0, 'Choose location before showing instruction tiles');
    await shot(home, `home-empty-${width}`);
    for (const mode of ['first', 'bogatynia', 'zgorzelec']) {
      activeMode = mode;
      const choice = `.mode-card[href*="mode=${mode}"]`;
      await keyboardFocus(home, choice); await home.keyboard.press('Enter');
      await home.waitForURL(url => url.searchParams.get('mode') === mode);
      for (const lang of ['pl', 'en', 'ua', 'ru', 'az', 'es', 'fil', 'id', 'ne']) {
        await home.locator('#langSelect').selectOption(lang);
        await home.waitForURL(url => url.searchParams.get('lang') === lang);
        await home.reload();
        await home.locator('.mode-summary').waitFor({state: 'visible'});
        assert.equal(new URL(home.url()).searchParams.get('mode'), mode);
        assert.equal(await home.locator('.mode-card.is-active').count(), 1);
        const expected = await home.evaluate(mode => window.CX_DATA.homeModes.find(item => item.id === mode).pages, mode);
        const links = await home.locator('.tiles a').evaluateAll(els => els.map(el => el.href));
        for (const link of links) {
          const target = new URL(link);
          if (target.origin === new URL(base).origin) {
            assert.ok(expected.includes(target.pathname.split('/').pop().replace('.html', '')));
            assert.equal(target.searchParams.get('mode'), mode);
          }
        }
        assert.equal(await home.locator('.tiles a[href*="reader.html"]').count(), mode === 'bogatynia' ? 1 : 0);
        if (lang === 'en' || lang === 'ua') await shot(home, `home-${lang}-${width}`);
      }
      await keyboardFocus(home, '.top-nav-link[href*="kontakty.html"]'); await home.keyboard.press('Enter');
      await home.waitForURL(/kontakty\.html/); await home.goBack();
      await home.locator('.mode-summary').waitFor({state: 'visible'});
      assert.equal(new URL(home.url()).searchParams.get('mode'), mode);
      await offline(homeCtx, true); await home.reload();
      await home.locator('.mode-summary').waitFor({state: 'visible'});
      assert.equal(await home.evaluate(() => navigator.onLine), false);
      await shot(home, `home-offline-${width}`); await offline(homeCtx, false);
    }
    await home.goto(`${base}magazyn.html?lang=en&mode=zgorzelec`);
    assert.match(await home.locator('body').innerText(), /Do not use Bogatynia reader\/tablet instructions/);
    await home.goto(`${base}index.html?lang=ka&mode=bogatynia`);
    await home.locator('.mode-summary').waitFor({state: 'visible'});
    assert.equal(await home.locator('#langSelect').inputValue(), 'en');
    assert.match(await home.locator('.primserv-language-fallback').innerText(), /English/);
    await shot(home, `home-fallback-${width}`);
    await closeContext(homeCtx);
  }
  report.results.push({ scenario: 'home: empty selection, keyboard mode selection, primary/More links isolated, nine languages/reload, contacts/Back, real offline, ka fallback, warehouse warning; 1280 and 320', pass: true });
  assert.equal(report.policyRows.length,54,'All three modes, two widths and nine languages');
  assert.equal(report.migrations.length,12,'All modes/widths and partial/completed actual-base histories');
  assert.equal(report.migrations.filter(row=>row.wrongFeedbackAndRestart).length,1);
  assert.equal(report.quizStorage.length,4,'Denied, quota, corrupt and future storage');
  assert.equal(report.results.length,9,'Six glossary, two storage and one complete home matrix');
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
