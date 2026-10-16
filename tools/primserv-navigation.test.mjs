import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import vm from "node:vm";
import crypto from "node:crypto";

const root = new URL("../", import.meta.url);
const source = await fs.readFile(new URL("assets/js/training-app.js", root), "utf8");
const data = await fs.readFile(new URL("assets/js/training-data.js", root), "utf8");
const custom = await fs.readFile(new URL("assets/js/location-custom.js", root), "utf8");
const worker = await fs.readFile(new URL("sw.js", root), "utf8");
const instrumented = source.replace(/  renderPage\(\);\n  upgradeCache\(\);\n\}\)\(\);\s*$/, "  window.navigationTest = { renderHeader, reloadWithLanguage, href, getHomeMode, modeFilteredTiles };\n})();");
assert.notEqual(source, instrumented, "Only instrument startup; never execute operational UI, audio or network actions");
const langs = ["pl", "en", "ua", "ru", "az", "es", "fil", "id", "ne"];

function header(lang, page = "home", blockedStorage = false) {
  const location = new URL(`https://oleksandrkiris.github.io/citronex-zgorzelec-bogatynia-szkolenie/${page === "home" ? "index" : page}.html?lang=${lang}&section=fixture#wanted`);
  const document = {
    documentElement: {}, currentScript: { src: `${location.origin}/assets/js/training-app.js?v=release` },
    body: { dataset: { page }, insertAdjacentHTML(_position, html) { this.html = html; } },
    getElementById: () => ({ addEventListener() {} })
  };
  const localStorage = {
    getItem() { if (blockedStorage) throw new Error("Storage blocked"); return "pl"; },
    setItem() { if (blockedStorage) throw new Error("Storage blocked"); }
  };
  const window = {};
  const context = vm.createContext({ window, document, location, localStorage, URL, URLSearchParams, navigator: { language: "pl", languages: ["pl"] } });
  vm.runInContext(data, context);
  vm.runInContext(custom, context);
  assert.ok(window.CX_DATA.meta.location.includes("Zgorzelec / Bogatynia"));
  const original = JSON.stringify(window.CX_DATA);
  vm.runInContext(instrumented, context);
  window.navigationTest.renderHeader();
  assert.equal(JSON.stringify(window.CX_DATA), original);
  return { window, document, location, html: document.body.html };
}

for (const lang of langs) test(`${lang}: header links on home, map and contacts use supported languages`, () => {
  for (const page of ["home", "mapa", "kontakty"]) {
    const c = header(lang, page);
    assert.ok(c.html.includes('alt="PrimServ"'));
    assert.ok(c.html.includes("PrimServ · HYDRA"));
    assert.ok(c.html.includes(`citronex-hydra-project/?lang=${lang}`));
    assert.ok(c.html.includes(`kiris-jobs/?lang=${lang === "ua" ? "uk" : lang}`));
    assert.ok(c.html.includes('href="https://www.primserv.pl/"'));
    assert.ok(c.html.includes('href="https://t.me/KirisWorkPoland_bot"'));
    assert.ok(c.html.includes(`kontakty.html?lang=${lang}`));
    for (const match of c.html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) assert.ok(match[0].includes('rel="noopener noreferrer"'));
    assert.equal(c.document.documentElement.lang, lang === "ua" ? "uk" : lang);
    assert.equal(c.html.includes("English (EN)"), false);
  }
});

for (const alias of ["uk", "ka", "hy"]) test(`${alias}: explicit language beats saved Polish with truthful fallback`, () => {
  const c = header(alias);
  const actual = alias === "uk" ? "ua" : "en";
  assert.ok(c.html.includes(`citronex-hydra-project/?lang=${actual}`));
  assert.equal(c.html.includes("English (EN)"), alias !== "uk");
});

test("blocked storage does not prevent opening or changing language; query/hash survive", () => {
  const c = header("ua", "mapa", true);
  c.window.navigationTest.reloadWithLanguage("ru");
  const url = new URL(c.location.href);
  assert.equal(url.searchParams.get("lang"), "ru");
  assert.equal(url.searchParams.get("section"), "fixture");
  assert.equal(url.hash, "#wanted");
});

test("Zgorzelec stays warehouse-only; Bogatynia retains its greenhouse, reader and tablet", () => {
  const c = header("ua");
  const api = c.window.navigationTest;
  const zgorzelec = api.modeFilteredTiles("zgorzelec").map(tile => tile.page);
  const bogatynia = api.modeFilteredTiles("bogatynia").map(tile => tile.page);
  assert.ok(zgorzelec.includes("magazyn"));
  for (const page of ["szklarnia", "reader", "tablet"]) {
    assert.equal(zgorzelec.includes(page), false);
    assert.equal(bogatynia.includes(page), true);
  }
});

test("work-city selection and language changes survive denied storage without changing mode", () => {
  const c = header("ua", "home", true);
  assert.equal(c.window.navigationTest.getHomeMode(), "");
  for (const mode of ["zgorzelec", "bogatynia"]) {
    c.location.searchParams.set("mode", mode);
    assert.equal(c.window.navigationTest.getHomeMode(), mode);
    c.window.navigationTest.reloadWithLanguage("en");
    assert.equal(new URL(c.location.href).searchParams.get("mode"), mode);
  }
});

for (const lang of langs) test(`${lang}: internal links retain the selected city without storage`, () => {
  const c = header(lang, "home", true);
  for (const mode of ["first", "zgorzelec", "bogatynia"]) {
    c.location.searchParams.set("mode", mode);
    const original = JSON.stringify(c.window.CX_DATA);
    for (const page of ["mapa", "kontakty", "magazyn", "home"]) {
      const target = new URL(c.window.navigationTest.href(page), c.location.href);
      assert.equal(target.searchParams.get("mode"), mode);
      assert.equal(target.searchParams.get("lang"), lang);
      c.location.href = target.href;
      assert.equal(c.window.navigationTest.getHomeMode(), mode, "The destination can recover the city from its URL");
    }
    assert.equal(JSON.stringify(c.window.CX_DATA), original);
  }
});

test("unknown city values are not propagated and external 3D destination is unchanged", () => {
  const c = header("ua", "home", true);
  c.location.searchParams.set("mode", "not-a-city<script>");
  const target = new URL(c.window.navigationTest.href("home"), c.location.href);
  assert.equal(target.searchParams.has("mode"), false);
  assert.equal(c.window.navigationTest.href("szklarnia3d"), "https://oleksandrkiris.github.io/citronex-szklarnia-3d/");
});

test("original instruction data and location customizations remain byte-for-byte unchanged", () => {
  const blob = value => crypto.createHash("sha1").update("blob " + Buffer.byteLength(value) + "\0").update(value).digest("hex");
  assert.equal(blob(data), "32d9b1650b156ea498e44727082e9dd8db99d8be");
  assert.equal(blob(custom), "e7c569a8e76a96788344a5f4e35bacdcfa986b56");
});

test("official logo and every production page use the new worker/UI entry", async () => {
  const logo = await fs.readFile(new URL("assets/primserv-logo.svg", root));
  assert.equal(crypto.createHash("sha256").update(logo).digest("hex"), "1a29802a4a0065ad84e8f8dbdd5bc46dcb9b67bbecb2190de6a99464feaf5157");
  for (const file of (await fs.readdir(root)).filter(p => p.endsWith(".html"))) {
    const html = await fs.readFile(new URL(file, root), "utf8");
    assert.ok(html.includes('href="assets/primserv-logo.svg"'), file);
    assert.match(html, /<title>[^<]*PrimServ<\/title>/, file);
    if (html.includes('data-standalone-tool=')) continue;
    assert.ok(html.includes('property="og:site_name"'), file);
    assert.ok(html.includes("assets/js/training-app.js?v=20261016-instructions1"), file);
    assert.ok(html.includes("assets/css/primserv.css?v=20261016-primserv-zgorzelec-bogatynia2"), file);
    assert.match(html, /assets\/js\/training-data\.js\?v=[^\"\s]+/, file);
  }
  const css = await fs.readFile(new URL("assets/css/primserv.css", root), "utf8");
  assert.ok(css.includes("min-height: 44px"));
  assert.ok(css.includes(":focus-visible"));
});

function workerHarness() {
  const origin = "https://oleksandrkiris.github.io";
  const scope = `${origin}/citronex-zgorzelec-bogatynia-szkolenie/`;
  const handlers = {}, added = [], copied = [], deleted = [], lifecycle = [];
  const context = vm.createContext({
    self: { location: { origin }, addEventListener(name, handler) { handlers[name] = handler; }, skipWaiting() { lifecycle.push("skip"); }, clients: { claim() { lifecycle.push("claim"); } } },
    caches: {
      async open() { return { async add(request) { added.push(request.url); }, async put(request) { copied.push(request.url); } }; },
      async match(request) { return (request.url.includes("primserv") || request.url.includes("20261016-instructions1")) ? null : new Response("old valid asset"); },
      async keys() { return ["unrelated", "citronex-zgorzelec-bogatynia-szkolenie-older", "citronex-zgorzelec-bogatynia-szkolenie-another", vm.runInContext("CACHE_NAME", context)]; },
      async delete(name) { deleted.push(name); }
    },
    Request: class extends Request { constructor(input, options) { super(new URL(input, scope), options); } },
    URL, Response,
    fetch() { throw new Error("Network must not run in tests"); }
  });
  vm.runInContext(worker, context);
  return { added, copied, deleted, lifecycle, async run(name) { let promise; handlers[name]({ waitUntil(value) { promise = value; } }); await promise; } };
}

test("worker migrates exact unchanged cached assets but refreshes documents and changed assets", async () => {
  const w = workerHarness();
  await w.run("install");
  assert.ok(w.copied.some(url => url.endsWith("/assets/orientation/sklarnia-etap-excel.png")));
  assert.ok(w.copied.some(url => url.endsWith("/assets/css/training.css?v=20260718-greenhouse-separate1")));
  assert.ok(w.copied.some(url => url.endsWith("/assets/js/location-custom.js?v=20260718-greenhouse-separate1")));
  assert.ok(w.added.some(url => url.endsWith("/index.html")));
  assert.ok(w.added.some(url => url.endsWith("/manifest.webmanifest")));
  assert.ok(w.added.some(url => url.endsWith("/assets/js/training-app.js?v=20261016-instructions1")));
  assert.ok(w.added.some(url => url.endsWith("/assets/js/instruction-update.js?v=20261016-instructions1")));
  assert.ok(w.added.some(url => url.endsWith("/assets/primserv-logo.svg")));
  assert.equal(w.added.some(url => url.includes(".mp3")), false);
  assert.ok(w.lifecycle.includes("skip"));
});

test("activation clears only old location caches", async () => {
  const w = workerHarness();
  await w.run("activate");
  assert.deepEqual(w.deleted, ["citronex-zgorzelec-bogatynia-szkolenie-older", "citronex-zgorzelec-bogatynia-szkolenie-another"]);
  assert.ok(w.lifecycle.includes("claim"));
});
