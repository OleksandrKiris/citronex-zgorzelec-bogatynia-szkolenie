import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const source = fs.readFileSync(process.env.TRAINING_APP_SOURCE_FILE || new URL('assets/js/training-app.js', root), 'utf8');
const instrumented = source.replace(/  renderPage\(\);\n  upgradeCache\(\);\n\}\)\(\);\s*$/, '  window.quizTest = { createTestSession, renderTest, reloadWithLanguage, quizQuestions, readerLocationPolicy, renderGlossary };\n})();');
assert.notEqual(instrumented, source);
const langs = ['pl', 'en', 'ua', 'ru', 'az', 'es', 'fil', 'id', 'ne'];
function harness({lang='en', saved=new Map(), blocked=false, blockedWrites=false, path='location', mode=''}={}) {
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
      querySelectorAll() { return this.inputs; }, querySelector() { return null; }
    };
  }
  nodes.set('app',node('app'));
  document={ documentElement:{}, body:{dataset:{page:'test'}}, currentScript:{src:'https://example.test/training-app.js?v=fixture'}, getElementById:id=>nodes.get(id)||null };
  const location=new URL(`https://example.test/${path}/test.html?lang=${lang}${mode?'&mode='+mode:''}`);
  const localStorage={getItem(k){if(blocked)throw Error('denied');return saved.get(k)||null;},setItem(k,v){if(blocked||blockedWrites)throw Error('denied');saved.set(k,v);},removeItem(k){if(blocked)throw Error('denied');saved.delete(k);}};
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
 for(const name of fs.readdirSync(root).filter(x=>x.endsWith('.html'))){const html=fs.readFileSync(new URL(name,root),'utf8');if(!html.includes('assets/js/training-app.js?'))continue;const fallback=html.match(/<section id="trainingFallback"[\s\S]*?<\/section>/)?.[0];assert.ok(fallback,name);for(const dest of ['https://www.primserv.pl/','https://oleksandrkiris.github.io/citronex-hydra-project/','https://oleksandrkiris.github.io/kiris-jobs/','https://t.me/KirisWorkPoland_bot?start=flow_contacts','tel:+48502251384'])assert.ok(fallback.includes(dest),name+dest);assert.ok(html.includes('training-app.js?v=20261018-reader-policy1'));}
 const paths=JSON.parse(source.match(/const sourcePages = (\[[^;]+\]);/)[1]);assert.equal(paths.length,30);for(const p of paths)assert.ok(fs.existsSync(new URL((p==='home'?'index':p)+'.html',root)),p);
});

for (const mode of ['bogatynia','zgorzelec']) for (const lang of langs) test(`${mode}/${lang}: reader glossary and quiz reuse the same approved location policy`,()=>{
 const h=harness({mode,lang});
 const policy=h.api.readerLocationPolicy();
 const expected=mode==='bogatynia'?h.window.CX_DATA.pages.reader.lead:h.window.CX_DATA.warehouseLocations.find(x=>x.key==='zgorzelec-banana').lead;
 assert.equal(JSON.stringify(policy.meaning),JSON.stringify(expected));
 const questions=h.api.quizQuestions();
 assert.equal(JSON.stringify(questions[0].text),JSON.stringify(expected));
 assert.equal(questions[0].ok,true);
 assert.equal(JSON.stringify(questions.slice(1)),JSON.stringify(h.window.CX_DATA.test.slice(1)));
 h.render();assert.match(h.nodes.get('testForm').html,/data-ok="1"/);
 h.api.renderGlossary();
 const reader=h.nodes.get('app').html.match(/<article class="glossary-card"[^>]*>[\s\S]*?<span class="glossary-term">reader<\/span>[\s\S]*?<\/article>/)?.[0];
 assert.ok(reader);assert.ok(reader.includes('magazyn.html?lang='+lang+'&amp;mode='+mode));
 if(lang==='en')assert.ok(!reader.includes('Readers are not used in the warehouse.'));
});

for(const mode of ['bogatynia','zgorzelec','first'])for(const lang of langs)test(`${mode}/${lang}: generic reader vocabulary keeps the selected site's instruction context outside filtered results`,()=>{
 const h=harness({mode,lang});h.location.searchParams.set('q','ładowarka');const original=JSON.stringify(h.window.CX_DATA);
 h.api.renderGlossary();const html=h.nodes.get('app').html;
 const banner=html.match(/<section class="card blue glossary-site-policy">[\s\S]*?<\/section>/)?.[0];
 assert.ok(banner,'A generic charger/work-start match must not hide the location policy');
 const policy=h.api.readerLocationPolicy();assert.ok(banner.includes(policy.meaning[lang]||policy.meaning.en));
 assert.ok(banner.includes('magazyn.html?lang='+lang+'&amp;mode='+mode));
 assert.ok(html.indexOf(banner)<html.indexOf('data-glossary-search'),'Policy stays outside the searchable card list');
 assert.equal(JSON.stringify(h.window.CX_DATA),original,'Approved vocabulary and instructions remain unchanged');
});

for(const mode of ['first',''])test(`${mode||'unselected'}: reader policy names both locations rather than inventing a global warehouse rule`,()=>{
 const h=harness({mode});const policy=h.api.readerLocationPolicy();
 assert.match(policy.meaning.en,/Bogatynia/);assert.match(policy.meaning.en,/Zgorzelec/);
 assert.match(policy.example.en,/First choose/);
});

for(const mode of ['bogatynia','zgorzelec'])test(`${mode}: grading, feedback and source agree with the displayed location statement`,()=>{
 const h=harness({mode});const questions=h.api.quizQuestions();h.render();
 for(let i=0;i<questions.length;i++){h.answer(i===0?false:questions[i].ok);h.click('testNext');}
 const result=h.nodes.get('testResult').html;
 assert.match(result,/29\/30/);assert.match(result,/Your answer: No/);assert.match(result,/Correct answer: Yes/);
 assert.ok(result.includes(mode==='bogatynia'?'Reader applies to Bogatynia':'Zgorzelec: banana warehouse only'));
 assert.ok(result.includes('magazyn.html?lang=en&amp;mode='+mode));
 assert.ok(!result.includes('Readers are not used in the warehouse.'));
});

function oldAttempt({mode='bogatynia',completed=false}={}) {
 const h=harness({mode});const answers=completed?h.window.CX_DATA.test.map(q=>q.ok):[true,false,true,...Array(27).fill(null)];
 const record={answers,current:completed?29:2,completed,signature:JSON.stringify(h.window.CX_DATA.test.map(q=>[q.text.pl,q.ok])),savedAt:Date.now()};
 const key=`primserv:training-test:v1:/location/:${mode}`;
 const raw=JSON.stringify(record);return {saved:new Map([[key,raw]]),key,raw,record};
}

for(const completed of [false,true])test(`legacy ${completed?'completed result':'partial attempt'}: reanswer corrected question, retain all other answers and untouched historical result`,()=>{
 const old=oldAttempt({completed});const h=harness({mode:'bogatynia',saved:old.saved});const session=h.api.createTestSession();
 assert.equal(session.migrated,true);assert.equal(session.state.completed,false);assert.equal(session.state.current,0);assert.equal(session.state.answers[0],null);
 assert.equal(JSON.stringify(session.state.answers.slice(1)),JSON.stringify(old.record.answers.slice(1)));
 h.render();assert.match(h.nodes.get('app').html,/Question 1 was corrected/);assert.match(h.nodes.get('app').html,/Previous question version/);
 if(completed)assert.match(h.nodes.get('app').html,/Score: 30\/30/);
 h.click('testResume');assert.match(h.nodes.get('testProgressText').textContent,/1\/30/);assert.equal(h.nodes.get('testForm').inputs.some(i=>i.checked),false);
 h.answer(true);h.click('testNext');assert.equal(h.saved.get(old.key),old.raw);
 const fresh=harness({mode:'bogatynia',lang:'ru',saved:h.saved});const next=fresh.api.createTestSession();
 assert.equal(next.migrated,false);assert.equal(next.state.answers[0],true);assert.equal(next.state.current,1);assert.equal(next.state.completed,false);
 assert.equal(h.saved.get(old.key),old.raw);
});

test('restart writes an empty new-bank attempt without deleting or remigrating old results',()=>{
 const old=oldAttempt({completed:true});const h=harness({mode:'bogatynia',saved:old.saved});h.render();h.click('testRestart');
 const next=harness({mode:'bogatynia',saved:h.saved}).api.createTestSession();assert.equal(next.migrated,false);assert.equal(next.restored,false);assert.ok(next.state.answers.every(x=>x===null));assert.equal(h.saved.get(old.key),old.raw);
});

test('new-bank progress stays isolated by mode through language switch and reload',()=>{
 const h=harness({mode:'bogatynia'});h.render();h.answer(true);h.click('testNext');h.api.reloadWithLanguage('ua');
 const other=harness({mode:'zgorzelec',lang:'ua',saved:h.saved});assert.equal(other.api.createTestSession().restored,false);assert.match(other.api.quizQuestions()[0].text.en,/Zgorzelec: banana/);
 const back=harness({mode:'bogatynia',lang:'ru',saved:h.saved}).api.createTestSession();assert.equal(back.state.current,1);assert.equal(back.state.answers[0],true);
});

for(const lang of ['ka','tr','hy'])test(`${lang}: corrected location content remains honest existing English, not a fabricated translation`,()=>{
 const h=harness({mode:'bogatynia',lang});h.render();assert.equal(h.document.documentElement.lang,'en');assert.match(h.nodes.get('testForm').html,/Reader applies to Bogatynia: greenhouse and warehouse/);h.api.renderGlossary();assert.ok(!h.nodes.get('app').html.includes('Readers are not used in the warehouse.'));
});

test('quota failure keeps original history intact and reports memory-only changes',()=>{
 const old=oldAttempt({completed:true});const h=harness({mode:'bogatynia',saved:old.saved,blockedWrites:true});h.render();h.click('testResume');h.answer(true);
 assert.match(h.nodes.get('testStorageStatus').textContent,/works in memory/);assert.equal(h.saved.get(old.key),old.raw);assert.equal(h.saved.size,1);
});

test('unknown current-bank data is not overwritten while answering; only explicit restart replaces it',()=>{
 const key='primserv:training-test:v2:/location/:bogatynia';const raw='{unknown';const saved=new Map([[key,raw]]);
 const h=harness({mode:'bogatynia',saved});h.render();h.answer(true);assert.equal(saved.get(key),raw);assert.match(h.nodes.get('testStorageStatus').textContent,/works in memory/);
 h.click('testRecover');assert.ok(JSON.parse(saved.get(key)).answers.every(x=>x===null));
});

test('a future bank marker remains untouched even if its question signature matches',()=>{
 const h=harness({mode:'bogatynia'});h.render();h.answer(true);
 const key=[...h.saved.keys()].find(k=>k.startsWith('primserv:training-test:v2:'));
 const record=JSON.parse(h.saved.get(key));record.questionBankVersion='future-bank';const raw=JSON.stringify(record);h.saved.set(key,raw);
 const next=harness({mode:'bogatynia',saved:h.saved});next.render();next.answer(false);
 assert.equal(h.saved.get(key),raw);assert.match(next.nodes.get('testStorageStatus').textContent,/works in memory/);
});
