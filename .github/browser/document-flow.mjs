// Runs only on the authorized Linux Actions origin. No real form submissions.
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {createServer} from 'node:http';
import {mkdir,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import vm from 'node:vm';
assert.equal(process.env.GITHUB_ACTIONS,'true');
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_PACKAGE);
const output=resolve(process.env.BROWSER_REPORT);await mkdir(output,{recursive:true});
const git=(...a)=>execFileSync('git',a),hash=b=>createHash('sha256').update(b).digest('hex');
const head=process.env.TESTED_HEAD,base=process.env.TESTED_BASE;
assert.equal(git('rev-parse','HEAD').toString().trim(),head);
const mode=process.env.DOCUMENT_MODE;assert(['first','bogatynia','zgorzelec'].includes(mode));
const report={head,base,mode,acceptance:false,files:{},flows:[],requests:[],errors:[],blocked:[],limits:['Actual Chromium built-in PDF viewer; not physical iPhone Safari.','Original PDFs have PL/EN/UA editions only. Other text locales explicitly link the English original.','PDF content review is separately bound to the exact original PDF hashes; HTTP success alone is not a screen review.']};
const tracked=new Set(git('ls-tree','-r','--name-only',head).toString().trim().split('\n')),cache=new Map();
function source(path){assert(tracked.has(path));if(!cache.has(path)){const b=git('show',`${head}:${path}`);cache.set(path,b);report.files[path]={bytes:b.length,sha256:hash(b)};}return cache.get(path);}
const window={},context=vm.createContext({window});
for(const p of ['assets/js/training-data.js','assets/js/location-custom.js','assets/js/instruction-update.js'])vm.runInContext(source(p).toString(),context,{timeout:3000});
const D=window.CX_DATA,langs=['pl','en','ua','ru','az','es','fil','id','ne'];
assert.deepEqual(Array.from(D.instructionSourceLanguages),['pl','en','ua']);assert.deepEqual(Array.from(D.languages,x=>x.id),langs);
const prefix='/citronex-zgorzelec-bogatynia-szkolenie/';
const mime={html:'text/html',js:'application/javascript',css:'text/css',svg:'image/svg+xml',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',pdf:'application/pdf',webmanifest:'application/manifest+json'};
const server=createServer((req,res)=>{
 const u=new URL(req.url,'http://localhost'),p=u.pathname.startsWith(prefix)?decodeURIComponent(u.pathname.slice(prefix.length))||'index.html':'';
 report.requests.push({path:p,method:req.method});
 if(!['GET','HEAD'].includes(req.method)||!tracked.has(p)||!/^([^/]+\.(html|js|webmanifest)|assets\/)/.test(p)){res.writeHead(404).end();return;}
 const b=source(p);Object.assign(report.requests.at(-1),{bytes:b.length,sha256:hash(b)});res.writeHead(200,{'Content-Type':mime[p.split('.').pop()]||'application/octet-stream','Content-Length':b.length,'Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:b);
});
await new Promise(done=>server.listen(0,'127.0.0.1',done));
const origin=`http://127.0.0.1:${server.address().port}`,url=origin+prefix;
const savedAnswers=page=>page.evaluate(()=>Object.fromEntries(Object.keys(localStorage).filter(k=>k.startsWith('primserv:training-test:')).sort().map(k=>[k,localStorage.getItem(k)])));
async function center(link){await link.evaluate(e=>e.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'}));await link.page().evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));}
async function geometry(link){return link.evaluate(e=>{const r=e.getBoundingClientRect(),range=document.createRange();range.selectNodeContents(e);const lines=[...range.getClientRects()].filter(x=>x.width&&x.height);return {text:e.textContent.trim(),left:r.left,right:r.right,width:document.documentElement.clientWidth,rootScroll:document.documentElement.scrollWidth,lineCount:lines.length,exposed:lines.length>0&&lines.every(x=>[.05,.25,.5,.75,.95].every(t=>{const px=x.left+x.width*t,py=(x.top+x.bottom)/2;return px>=0&&px<document.documentElement.clientWidth&&py>=0&&py<innerHeight&&e.contains(document.elementFromPoint(px,py));}))};});}
let browser,page,popup,ctx;
try{
 // Full Chromium's new headless mode includes the real PDF viewer; headless-shell does not.
 browser=await chromium.launch({channel:'chromium',headless:true});report.browser=browser.version();
 for(const width of [320,1280])for(const lang of langs){
  ctx=await browser.newContext({viewport:{width,height:900}});ctx.setDefaultTimeout(15000);await ctx.tracing.start({screenshots:true,snapshots:true});
  await ctx.route('**/*',route=>{const r=route.request();if(new URL(r.url()).origin!==origin||!['GET','HEAD'].includes(r.method())){report.blocked.push({url:r.url(),method:r.method()});return route.abort();}return route.continue();});
  page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));
  await page.goto(url+`test.html?lang=${lang}&mode=${mode}`);await page.locator('input[name="testAnswer"][value="1"]').check();await page.locator('#testNext').click();
  const saved=await savedAnswers(page);assert(Object.keys(saved).length>0);assert(Object.values(saved).some(s=>JSON.parse(s).answers?.some(a=>typeof a==='boolean')),'An actual quiz answer is required');
  for(const kind of ['priva','workshop','restart']){
   if(kind==='priva')await page.goto(url+`tablet.html?lang=${lang}&mode=${mode}`);
   if(kind==='restart'){
    await page.goto(url+`reader.html?lang=${lang}&mode=${mode}`);
    await page.locator('[data-reader-tab="restart"]').click();assert.equal(new URL(page.url()).searchParams.get('topic'),'restart');
   }
   const sourceLang=['pl','en','ua'].includes(lang)?lang:'en',sourceName={pl:'Polski',en:'English',ua:'Українська'}[sourceLang];
   const file=`assets/instructions/${kind}-${sourceLang}.pdf`,link=page.locator(`a[href="${file}"]`);assert.equal(await link.count(),1);
   assert.equal(await page.locator('#langSelect').inputValue(),lang);assert.equal(await page.locator('html').getAttribute('lang'),lang==='ua'?'uk':lang);
   assert.equal(new URL(page.url()).searchParams.get('mode'),mode);assert.equal(new URL(page.url()).searchParams.get('lang'),lang);
   assert.equal(await link.getAttribute('hreflang'),sourceLang==='ua'?'uk':sourceLang);assert.equal(await link.getAttribute('target'),'_blank');
   assert((await link.getAttribute('rel')).split(/\s+/).includes('noopener'));
   await center(link);const visible=await geometry(link);assert(visible.text.endsWith(` · PDF · ${sourceName}`));assert(visible.exposed&&visible.left>=0&&visible.right<=width&&visible.rootScroll<=width,'The full PDF button text is visible');
   const stem=`${mode}-${width}-${lang}-${kind}`;await link.screenshot({path:join(output,`${stem}-link.png`)});await page.screenshot({path:join(output,`${stem}-parent.png`)});
   const parentURL=page.url(),parentScroll=await page.evaluate(()=>scrollY),pagesBefore=ctx.pages().length;
   const newPage=ctx.waitForEvent('page');await link.click();popup=await newPage;popup.on('pageerror',e=>report.errors.push(e.message));
   await popup.waitForURL(url+file);await popup.waitForLoadState('load');
   assert.equal(ctx.pages().length,pagesBefore+1);assert.equal(await popup.evaluate(()=>window.opener===null),true);
   await popup.locator('embed[type="application/pdf"]').waitFor({state:'visible'});
   // The built-in viewer runs in an extension subframe. Wait for its real document-load signal.
   await popup.waitForFunction(()=>document.querySelector('embed[type="application/pdf"]')?.clientHeight>0);
   const viewerFrame=await (async()=>{for(let i=0;i<100;i++){const f=popup.frames().find(f=>f.url().startsWith('chrome-extension://'));if(f)return f;await new Promise(r=>setTimeout(r,100));}throw new Error('Chromium PDF viewer frame did not open');})();
   await viewerFrame.waitForFunction(()=>{const v=document.querySelector('pdf-viewer');return v?.loaded===true||v?.loadState==='success';});
   const viewer=await viewerFrame.evaluate(()=>{const v=document.querySelector('pdf-viewer');return {url:location.href,loaded:v?.loaded,loadState:v?.loadState,plugin:!!v?.shadowRoot?.querySelector('#plugin'),text:document.title};});
   await popup.screenshot({path:join(output,`${stem}-pdf.png`)});
   // Bind the bytes actually requested by the viewer to the tracked original, without replacing navigation.
   const response=await ctx.request.get(url+file);assert.equal(response.status(),200);assert.match(response.headers()['content-type'],/^application\/pdf/);const fetched=await response.body();assert.equal(hash(fetched),hash(source(file)));assert.equal(fetched.subarray(0,5).toString(),'%PDF-');
   await popup.close();popup=null;await page.bringToFront();assert.equal(page.url(),parentURL);assert.equal(await page.locator('#langSelect').inputValue(),lang);assert.equal(await page.evaluate(()=>scrollY),parentScroll);assert.deepEqual(await savedAnswers(page),saved);assert.equal(ctx.pages().length,pagesBefore);
   assert((await geometry(link)).exposed,'Return keeps the original PDF control visible');
   report.flows.push({mode,width,lang,kind,file,sourceLang,label:visible.text,geometry:visible,viewer,parentURL,parentScroll,answersPreserved:true,openerNull:true,pdfBytes:fetched.length,pdfSHA256:hash(fetched),screens:{link:`${stem}-link.png`,parent:`${stem}-parent.png`,pdf:`${stem}-pdf.png`}});
  }
  await page.goto(url+`test.html?lang=${lang}&mode=${mode}`);assert.deepEqual(await savedAnswers(page),saved);assert.equal(await page.locator('#langSelect').inputValue(),lang);
  await ctx.tracing.stop({path:join(output,`${mode}-${width}-${lang}-trace.zip`)});await ctx.close();ctx=null;
 }
 assert.equal(report.flows.length,54);assert.deepEqual(report.errors,[]);assert.deepEqual(report.blocked,[]);report.acceptance=true;
}catch(e){report.failure=e.stack;process.exitCode=1;if(popup&&!popup.isClosed()){await popup.screenshot({path:join(output,'failure-popup.png')}).catch(()=>{});report.failureFrames=await Promise.all(popup.frames().map(async f=>({url:f.url(),html:await f.content().catch(()=>null)})));}if(page&&!page.isClosed())await page.screenshot({path:join(output,'failure-parent.png')}).catch(()=>{});}
finally{if(ctx){await ctx.tracing.stop({path:join(output,'failure-trace.zip')}).catch(()=>{});await ctx.close();}await browser?.close();server.closeAllConnections();await new Promise(done=>server.close(done));report.finished=new Date().toISOString();await writeFile(join(output,'document-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({head,mode,flows:report.flows.length,acceptance:report.acceptance,failure:report.failure}));}
