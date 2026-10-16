import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const source = fs.readFileSync(new URL('assets/js/training-app.js', root), 'utf8');
const instrumented = source.replace(/  renderPage\(\);\n  upgradeCache\(\);\n\}\)\(\);\s*$/, '  window.quizTest = { createTestSession, renderTest, reloadWithLanguage };\n})();');
assert.notEqual(instrumented, source);
const langs = ['pl', 'en', 'ua', 'ru', 'az', 'es', 'fil', 'id', 'ne'];
function harness({lang='en', saved=new Map(), blocked=false, path='location', mode=''}={}) {
  const nodes = new Map();
  let document;
  function node(id='') {
    return { id, style:{}, handlers:{}, html:'', inputs:[],
      addEventListener(type,fn) { this.handlers[type]=fn; },
      focus() { document.activeElement=this; }, scrollIntoView() {},
      set innerHTML(html) {
        this.html=html;
        for(const m of html.matchAll(/\bid="([^"]+)"/g)) nodes.set(m[1],node(m[1]));
        this.inputs=[...html.matchAll(/<input type="radio" name="testAnswer" value="([01])"([^>]*)>/g)].map(m=>{
          const radio=node(); radio.value=m[1]; radio.checked=m[2].includes('checked');
          const label={classList:{toggle(_name,value){label.picked=value;}}};
          radio.closest=()=>label; return radio;
        });
      },
      get innerHTML() { return this.html; },
      querySelectorAll() { return this.inputs; }
    };
  }
  nodes.set('app',node('app'));
  document={ documentElement:{}, body:{dataset:{page:'test'}}, currentScript:{src:'https://example.test/training-app.js?v=fixture'}, getElementById:id=>nodes.get(id)||null };
  const location=new URL(`https://example.test/${path}/test.html?lang=${lang}${mode?'&mode='+mode:''}`);
  const localStorage={getItem(k){if(blocked)throw Error('denied');return saved.get(k)||null;},setItem(k,v){if(blocked)throw Error('denied');saved.set(k,v);},removeItem(k){if(blocked)throw Error('denied');saved.delete(k);}};
  const window={};
  const forbidden=()=>{throw Error('Network, messages and speech forbidden');};
  const context=vm.createContext({window,document,location,URL,URLSearchParams,localStorage,navigator:{language:lang},fetch:forbidden,open:forbidden});
  vm.runInContext(fs.readFileSync(new URL('assets/js/training-data.js',root),'utf8'),context);
  const custom=new URL('assets/js/location-custom.js',root);
  if(fs.existsSync(custom))vm.runInContext(fs.readFileSync(custom,'utf8'),context);
  vm.runInContext(instrumented,context);
  const original=JSON.stringify(window.CX_DATA);
  return {window,document,location,nodes,saved,api:window.quizTest,
    render(){window.quizTest.renderTest();assert.equal(JSON.stringify(window.CX_DATA),original);},
    click(id){assert.ok(nodes.get(id)?.handlers.click,id);nodes.get(id).handlers.click();},
    answer(value){const inputs=nodes.get('testForm').inputs;for(const i of inputs)i.checked=i.value===(value?'1':'0');const i=inputs.find(i=>i.checked);i.focus();i.handlers.change();assert.equal(document.activeElement,i,'Selecting an answer must retain keyboard focus');}
  };
}
for(const lang of langs)test(`${lang}: answer, navigate, switch language, reload and resume`,()=>{
 const h=harness({lang});h.render();h.answer(true);h.click('testNext');
 h.api.reloadWithLanguage('ua');assert.equal(new URL(h.location.href).searchParams.get('lang'),'ua');
 const next=harness({lang:'ua',saved:h.saved});next.render();assert.match(next.nodes.get('testForm').html,/testResume/);
 next.click('testResume');assert.match(next.nodes.get('testProgressText').textContent,/2\/30/);
 next.click('testPrev');assert.equal(next.nodes.get('testForm').inputs[0].checked,true);
 assert.match(next.nodes.get('testForm').html,/role="radiogroup" aria-labelledby="testQuestionTitle"/);
});
test('storage denied: answering and restarting remain usable',()=>{const h=harness({blocked:true});h.render();h.answer(false);h.click('testNext');assert.match(h.nodes.get('testProgressText').textContent,/2\/30/);const s=h.api.createTestSession();s.reset();s.save();});
test('progress is isolated by site and mode, and restart removes only its own answers',()=>{
 const saved=new Map([['unrelated','keep']]);const h=harness({saved,mode:'bogatynia'});h.render();h.answer(true);
 assert.equal(harness({saved,path:'another',mode:'bogatynia'}).api.createTestSession().restored,false);
 if(h.window.CX_DATA.homeModes)assert.equal(harness({saved,mode:'zgorzelec'}).api.createTestSession().restored,false);
 const n=harness({saved,mode:'bogatynia'});n.render();n.click('testRestart');assert.equal(n.nodes.get('testForm').inputs.some(x=>x.checked),false);assert.equal(saved.get('unrelated'),'keep');
});
test('changed questions, malformed answers, invalid positions and expired state are rejected',()=>{
 for(const mutate of [s=>s.signature='old',s=>s.answers[0]='yes',s=>s.current=NaN,s=>s.current=-1,s=>s.current=999,s=>s.savedAt=Date.now()-8*86400000,s=>s.savedAt=Date.now()+86400000,s=>s.completed=true]){
  const h=harness();h.render();h.answer(true);const key=[...h.saved.keys()].find(x=>x.startsWith('primserv:training-test:'));const s=JSON.parse(h.saved.get(key));mutate(s);h.saved.set(key,JSON.stringify(s));assert.equal(harness({saved:h.saved}).api.createTestSession().restored,false);
 }
 const h=harness({saved:new Map([['primserv:training-test:v1:/location/:','{invalid']])});assert.equal(h.api.createTestSession().restored,false);
});
test('completion reviews wrong answers against existing keys and keeps source links in selected language',()=>{
 const h=harness({lang:'ua'});h.render();for(let i=0;i<h.window.CX_DATA.test.length;i++){h.answer(i===0?!h.window.CX_DATA.test[i].ok:h.window.CX_DATA.test[i].ok);h.click('testNext');}
 const result=h.nodes.get('testResult').html;assert.match(result,/29\/30/);assert.equal((result.match(/class="test-review-item"/g)||[]).length,1);assert.match(result,/magazyn.html\?lang=ua/);
 const next=harness({lang:'ru',saved:h.saved});next.render();next.click('testResume');assert.match(next.nodes.get('testResult').html,/29\/30/);assert.match(next.nodes.get('testResult').html,/magazyn.html\?lang=ru/);
 next.click('testRestart');assert.equal(next.nodes.get('testResult').html,'');assert.match(next.nodes.get('testProgressText').textContent,/1\/30/);
});
test('finish with unanswered questions returns to the first missing answer',()=>{const h=harness();h.render();for(let i=0;i<30;i++){if(i!==2)h.answer(true);h.click('testNext');}assert.match(h.nodes.get('testProgressText').textContent,/3\/30/);assert.equal(h.document.activeElement.id,'testQuestionTitle');assert.ok(h.nodes.get('testResult').html.includes('notice'));});
test('every entry has static recovery and every review link resolves to an existing page',()=>{
 for(const name of fs.readdirSync(root).filter(x=>x.endsWith('.html'))){const html=fs.readFileSync(new URL(name,root),'utf8');if(!html.includes('assets/js/training-app.js?'))continue;const fallback=html.match(/<section id="trainingFallback"[\s\S]*?<\/section>/)?.[0];assert.ok(fallback,name);for(const dest of ['https://www.primserv.pl/','https://oleksandrkiris.github.io/citronex-hydra-project/','https://oleksandrkiris.github.io/kiris-jobs/','https://t.me/KirisWorkPoland_bot?start=flow_contacts','tel:+48502251384'])assert.ok(fallback.includes(dest),name+dest);assert.ok(html.includes('training-app.js?v=20261016-reader-context1'));}
 const paths=JSON.parse(source.match(/const sourcePages = (\[[^;]+\]);/)[1]);assert.equal(paths.length,30);for(const p of paths)assert.ok(fs.existsSync(new URL((p==='home'?'index':p)+'.html',root)),p);
});
