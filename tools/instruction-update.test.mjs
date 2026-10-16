import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const read = p => fs.readFileSync(new URL(p, root), 'utf8');
const data = read('assets/js/training-data.js');
const custom = fs.existsSync(new URL('assets/js/location-custom.js', root)) ? read('assets/js/location-custom.js') : '';
const update = read('assets/js/instruction-update.js');
const app = read('assets/js/training-app.js');
const instrumented = app.replace(/  renderPage\(\);\n  upgradeCache\(\);\n\}\)\(\);\s*$/, '  window.testInstructions = { renderReader, renderTablet };\n})();');
assert.notEqual(instrumented, app);
function fixture(lang = 'pl', page = 'reader') {
  const node = {innerHTML: '', querySelectorAll: () => []};
  const context = vm.createContext({
    window: {}, location: new URL(`https://example.test/${page}.html?lang=${lang}`), URL, URLSearchParams,
    navigator: {language: lang, languages: [lang]}, localStorage: {getItem: () => null},
    document: {documentElement: {}, body: {dataset: {page}}, getElementById: () => node}
  });
  vm.runInContext(data, context);
  if (custom) vm.runInContext(custom, context);
  const before = JSON.parse(JSON.stringify(context.window.CX_DATA));
  vm.runInContext(update, context);
  vm.runInContext(instrumented, context);
  return {context, before, D: context.window.CX_DATA, node};
}
for (const lang of ['pl','en','ua','ru','az','es','fil','id','ne']) {
  test(`${lang}: every reader section and tablet procedure renders without network or operational actions`, () => {
    const f = fixture(lang);
    for (const tab of f.D.readerTabs) {
      f.context.window.testInstructions.renderReader(tab.id);
      assert.ok(f.node.innerHTML.includes('2026-10-16'));
      assert.ok(f.node.innerHTML.includes(`data-reader-tab="${tab.id}"`));
      assert.ok(!f.node.innerHTML.includes('undefined'));
    }
    f.context.window.testInstructions.renderReader();
    assert.match(f.node.innerHTML, /data-reader-tab="prepare"/);
    f.context.window.testInstructions.renderTablet();
    assert.match(f.node.innerHTML, /15–25/);
    assert.match(f.node.innerHTML, /PRIVA/);
    const documentLang = ['pl','en','ua'].includes(lang) ? lang : 'en';
    assert.ok(f.node.innerHTML.includes(`assets/instructions/priva-${documentLang}.pdf`));
    assert.ok(f.node.innerHTML.includes(`assets/instructions/workshop-${documentLang}.pdf`));
    f.context.window.testInstructions.renderReader('restart');
    assert.ok(f.node.innerHTML.includes(`assets/instructions/restart-${documentLang}.pdf`));
    f.context.window.testInstructions.renderTablet();
    assert.equal((f.node.innerHTML.match(/class="tablet-step"/g) || []).length, 13);
    if (!['pl','en','ua'].includes(lang)) assert.match(f.node.innerHTML, /Updated steps: English/);
    else assert.ok(!f.node.innerHTML.includes('[English]'));
  });
}
test('owner-confirmed details: personal-tag window, start/end codes, charging, breaks, trolley sequence and restart', () => {
  const {D} = fixture(); const tabs = Object.fromEntries(D.readerTabs.map(t=>[t.id,t]));
  for (const lang of ['pl','en','ua']) {
    for (const v of [tabs.start.steps[1],tabs.rows.sections[0].steps[0],tabs.outside.sections[0].steps[0]]) assert.match(v[lang], /05:50.*06:00/);
    assert.match(tabs.start.steps[0][lang], /3/);
    assert.match(tabs.start.steps[2][lang], /900/);
    assert.match(tabs.start.steps[7][lang], /110/);
    assert.match(tabs.outside.sections[3].steps[1][lang], /110/);
    assert.ok(tabs.rows.tips.at(-1)[lang]);
    assert.ok(tabs.carts.tips.at(-1)[lang]);
    assert.ok(tabs.restart.steps[6][lang]);
  }
  assert.match(tabs.rows.sections[2].steps[2].en, /activity again/);
  assert.match(tabs.rows.sections[3].steps[2].en, /End Social Break.*activity again/);
  assert.match(tabs.outside.sections[3].steps[1].en, /activity first/);
  assert.match(tabs.carts.steps[1].en, /cart tag.*once/);
  assert.match(tabs.carts.steps[2].en, /row tag.*once.*twice/);
  assert.match(tabs.restart.steps[3].en, /five times/);
  assert.match(tabs.restart.steps[6].en, /replace.*foreman/);
});
test('production corrections follow Polish original and screenshots; workshop has five steps', () => {
  const {D} = fixture();
  assert.match(D.tabletGuide.steps[5].note.en, /activity/i);
  assert.match(D.tabletGuide.steps[7].note.en, /log out/i);
  assert.match(D.tabletGuide.steps[5].note.ua, /дію/);
  assert.match(D.tabletGuide.steps[7].note.ua, /[Вв]ийти/);
  assert.equal(D.tabletWorkshop.steps.length, 5);
  assert.equal(D.tabletWorkshop.steps[3], D.tabletGuide.steps[6]);
  assert.equal(D.tabletWorkshop.steps[4], D.tabletGuide.steps[7]);
});
test('unrelated content, nine languages, existing media and existing reader IDs remain intact; update is idempotent', () => {
  const {D,before,context} = fixture();
  for (const k of Object.keys(before).filter(k=>k!=='readerTabs')) assert.equal(JSON.stringify(D[k]), JSON.stringify(before[k]), k);
  assert.equal(D.languages.length, 9);
  for (const tab of before.readerTabs) {
    const after = D.readerTabs.find(t=>t.id===tab.id);
    assert.equal(JSON.stringify(after.image),JSON.stringify(tab.image));
    assert.equal(JSON.stringify(after.images),JSON.stringify(tab.images));
  }
  const once=JSON.stringify(D);vm.runInContext(update,context);assert.equal(JSON.stringify(D),once);
});
test('instruction update is loaded after local data and before renderer only on reader/tablet; cache uses new asset keys', () => {
  for (const page of ['reader','tablet']) {
    const html=read(`${page}.html`);
    assert.ok(html.indexOf('training-data.js') < html.indexOf('instruction-update.js'));
    if (custom) assert.ok(html.indexOf('location-custom.js') < html.indexOf('instruction-update.js'));
    assert.ok(html.indexOf('instruction-update.js') < html.indexOf('training-app.js'));
    assert.match(html,/instruction-update.js\?v=20261016-instructions1/);
    assert.match(html,/training-app.js\?v=20261016-search1/);
  }
  assert.ok(!read('index.html').includes('instruction-update.js'));
  assert.match(read('sw.js'),/instruction-update.js\?v=20261016-instructions1/);
  assert.match(read('sw.js'),/CACHE_PREFIX \+ "20261016-search1"/);
});
