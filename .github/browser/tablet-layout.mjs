// Personal, read-only diagnostic. Only the authorized Linux Actions runner starts this origin.
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
const git=(...a)=>execFileSync('git',a);const hash=b=>createHash('sha256').update(b).digest('hex');
const head=process.env.TESTED_HEAD,base=process.env.TESTED_BASE;
assert.equal(git('rev-parse','HEAD').toString().trim(),head);
const report={head,base,diagnostic:false,acceptance:false,files:{},titles:[],notes:[],startup:[],errors:[],blocked:[],requests:[],limits:['Chromium screens; no physical iPhone or native-speaker approval.','Original operating text, maps, source photos/PDFs and stored answers must remain unchanged.']};
const tracked=new Set(git('ls-tree','-r','--name-only',head).toString().trim().split('\n'));
const cache=new Map();let sourceRef=head;
const OLD_LAYOUT='5e1bb670da23947a7b9e901a81c9e211deb48729';const OLD_PINS={"tablet.html": "1ed66fe9e70a55e414ee4d81357b16ba870562c6b5a87e3853b1c65419221798", "assets/css/training.css": "262d5ce2b5f03d86239b22de1b6e27d88e2e62a6b836578cc60ec886c7dee0ea", "assets/css/primserv.css": "f9e2c5326bbf33c36e55ea9325bb5f21053234cfc2b6b14fdd1f8a1f2a2e4062", "assets/js/training-app.js": "66514f7d8da8bdb93a65c3a8a79f3bdf0431a383077964bb522b5138faebe40c", "assets/js/training-data.js": "9aca0086b79e9bcad299bfaaba37622ab4a46136283943a7297eebd73dbcea5f", "assets/js/location-custom.js": "ab8668b1e7ee9838c84eae712be07396da35f3d1542ee4ac03faa7cad4a9ef53", "assets/js/instruction-update.js": "2a84024f071f936363ab3dca0e93396711211869450e248fa44d6a2aee6ee36b", "sw.js": "1bb4f5470a9a1ecfa1519053c6874628e59b0e4fec3a6322c6854d5192ade538"};
report.historicalLayout={ref:OLD_LAYOUT,eventBase:base,files:{},titles:[]};
for(const [p,digest] of Object.entries(OLD_PINS))assert.equal(hash(git('show',`${OLD_LAYOUT}:${p}`)),digest,`Pinned original layout: ${p}`);
function source(path){
 assert(tracked.has(path));const key=`${sourceRef}:${path}`;if(!cache.has(key)){const b=git('show',key);cache.set(key,b);(sourceRef===head?report.files:report.historicalLayout.files)[path]={bytes:b.length,sha256:hash(b)};}return cache.get(key);
}
const window={};const dataContext=vm.createContext({window});
for(const file of ['assets/js/training-data.js','assets/js/location-custom.js','assets/js/instruction-update.js'])vm.runInContext(source(file).toString(),dataContext,{timeout:3000});
const D=window.CX_DATA;assert(D.meta.location.includes('Bogatynia'));
const prefix='/citronex-zgorzelec-bogatynia-szkolenie/';
const mime={html:'text/html',js:'application/javascript',css:'text/css',svg:'image/svg+xml',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webmanifest:'application/manifest+json',pdf:'application/pdf'};
const server=createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');const file=url.pathname.startsWith(prefix)?decodeURIComponent(url.pathname.slice(prefix.length))||'index.html':'';
 report.requests.push({file,method:req.method,sourceRef});
 if(!['GET','HEAD'].includes(req.method)||!tracked.has(file)||!/^([^/]+\.(html|js|webmanifest)|assets\/)/.test(file)){res.writeHead(404).end();return;}
 const b=source(file);res.writeHead(200,{'Content-Type':mime[file.split('.').pop()]||'application/octet-stream','Content-Length':b.length,'Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:b);
});
await new Promise(done=>server.listen(0,'127.0.0.1',done));
const origin=`http://127.0.0.1:${server.address().port}`,url=origin+prefix;
const contexts=[];let browser,page;
const twoFrames=p=>p.evaluate(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))));
async function center(el){await el.evaluate(e=>e.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'}));await twoFrames(el.page());}
async function textGeometry(el){return el.evaluate(node=>{
 const range=document.createRange();range.selectNodeContents(node);
 const lines=[...range.getClientRects()].filter(r=>r.width&&r.height).map(r=>({left:r.left,right:r.right,top:r.top,bottom:r.bottom,exposed:[.05,.25,.5,.75,.95].every(t=>{const x=r.left+r.width*t,y=(r.top+r.bottom)/2;return x>=0&&x<document.documentElement.clientWidth&&y>=0&&y<innerHeight&&node.contains(document.elementFromPoint(x,y));})}));
 const r=node.getBoundingClientRect();return {text:node.textContent.trim(),left:r.left,right:r.right,width:document.documentElement.clientWidth,rootScroll:document.documentElement.scrollWidth,lines};
});}
try{
 browser=await chromium.launch({headless:true});report.browser=browser.version();
 sourceRef=OLD_LAYOUT;
 for(const lang of ['en','ru']){
  const ctx=await browser.newContext({viewport:{width:320,height:900}});contexts.push(ctx);ctx.setDefaultTimeout(12000);await ctx.tracing.start({screenshots:true,snapshots:true});
  await ctx.route('**/*',route=>{const r=route.request();if(new URL(r.url()).origin!==origin||!['GET','HEAD'].includes(r.method())){report.blocked.push(r.url());return route.abort();}return route.continue();});
  page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));await page.goto(url+`tablet.html?lang=${lang}&mode=bogatynia`);await page.locator('#langSelect').waitFor();
  for(let i=0;i<13;i++){const summary=page.locator('.tablet-step').nth(i).locator('summary'),title=summary.locator('span').nth(1);await center(title);const geometry=await textGeometry(title);const padding=await summary.evaluate(el=>parseFloat(getComputedStyle(el).paddingInlineEnd));report.historicalLayout.titles.push({lang,index:i,geometry,padding,exposed:geometry.lines.length>0&&geometry.lines.every(r=>r.exposed)});await summary.screenshot({path:join(output,`old-layout-320-${lang}-title-${i}.png`)});}
  await ctx.tracing.stop({path:join(output,`old-layout-${lang}-trace.zip`)});await ctx.close();
 }
 assert.equal(report.historicalLayout.titles.length,26);assert(report.historicalLayout.titles.every(r=>r.padding<52),'Original phone styles remove the disclosure reserve');assert(report.historicalLayout.titles.some(r=>r.lang==='ru'&&!r.exposed),'Original Russian title is actually occluded');report.historicalLayout.reproduced=true;sourceRef=head;
 const langs=(process.env.TABLET_LANGS||'pl,en,ua,ru,az,es,fil,id,ne').split(',');report.languages=langs;report.modes=(process.env.TABLET_MODES||'first,bogatynia,zgorzelec').split(',');assert(report.modes.length&&new Set(report.modes).size===report.modes.length&&report.modes.every(m=>['first','bogatynia','zgorzelec'].includes(m)),'Only distinct original modes are allowed');
 for(const mode of report.modes)for(const width of [320,1280])for(const lang of langs){
  const ctx=await browser.newContext({viewport:{width,height:900}});contexts.push(ctx);ctx.setDefaultTimeout(12000);await ctx.tracing.start({screenshots:true,snapshots:true});
  await ctx.route('**/*',route=>{const r=route.request();if(new URL(r.url()).origin!==origin||!['GET','HEAD'].includes(r.method())){report.blocked.push(r.url());return route.abort();}return route.continue();});
  page=await ctx.newPage();page.on('pageerror',e=>report.errors.push(e.message));
  await page.goto(url+`test.html?lang=${lang}&mode=${mode}`);await page.locator('input[name="testAnswer"][value="1"]').check();await page.locator('#testNext').click();
  await page.goto(url+`tablet.html?lang=${lang}&mode=${mode}`);await page.locator('#langSelect').waitFor();
  await page.waitForFunction(lang=>document.documentElement.lang===(lang==='ua'?'uk':lang),lang);
  assert.equal(await page.locator('#langSelect').inputValue(),lang);
  const saved=await page.evaluate(()=>Object.fromEntries(Object.keys(localStorage).filter(k=>k.startsWith('primserv:training-test:')).map(k=>[k,localStorage.getItem(k)])));
  assert(Object.keys(saved).length>0,'Real saved quiz answers must exist');
  const startup=page.locator('.reader-step');assert.equal(await startup.count(),3);
  for(let i=0;i<3;i++){const para=startup.nth(i).locator('p');await center(para);const geometry=await textGeometry(para),item=D.tabletStartup.steps[i];assert.equal(geometry.text,(item.text||item)[lang]);void 0;await para.screenshot({path:join(output,`${mode}-${width}-${lang}-startup-${i}.png`)});report.startup.push({mode,width,lang,index:i,geometry});}
  const expected=[...D.tabletGuide.steps,...D.tabletWorkshop.steps];const steps=page.locator('.tablet-step');assert.equal(await steps.count(),13);
  await page.screenshot({path:join(output,`${mode}-${width}-${lang}-initial.png`)});
  for(let i=0;i<13;i++){
   const step=steps.nth(i),summary=step.locator('summary'),title=summary.locator('span').nth(1);await center(title);
   assert.equal((await title.innerText()).trim(),expected[i].title[lang]);
   const geometry=await textGeometry(title);const box=await summary.evaluate(el=>{const r=el.getBoundingClientRect(),p=getComputedStyle(el,'::after');return {paddingEnd:parseFloat(getComputedStyle(el).paddingInlineEnd),iconLeft:r.right-parseFloat(p.right)-parseFloat(p.width),contentVisibility:getComputedStyle(el.parentElement).contentVisibility};});
   report.titles.push({mode,width,lang,index:i,geometry,...box,exposed:geometry.lines.length>0&&geometry.lines.every(r=>r.exposed),reserved:box.paddingEnd>=52&&geometry.right<=box.iconLeft-8});
   await summary.screenshot({path:join(output,`${mode}-${width}-${lang}-title-${i}.png`)});
   await summary.click();assert.equal(await step.getAttribute('open'),'');const note=step.locator('.tablet-step-body > p');await center(note);
   assert.equal((await note.innerText()).trim(),expected[i].note[lang]);const noteGeometry=await textGeometry(note);void 0;const image=step.locator('img');await image.evaluate(el=>el.decode());assert(await image.evaluate(el=>el.naturalWidth>0));
   report.notes.push({mode,width,lang,index:i,image:await image.getAttribute('src'),geometry:noteGeometry});
   await note.screenshot({path:join(output,`${mode}-${width}-${lang}-note-${i}.png`)});
   if(mode==='bogatynia'&&width===320&&lang==='en'&&i<8)await step.screenshot({path:join(output,`original-photo-${i}.png`)});
   await summary.click();assert.equal(await step.getAttribute('open'),null);
  }
  assert.deepEqual(await page.evaluate(()=>Object.fromEntries(Object.keys(localStorage).filter(k=>k.startsWith('primserv:training-test:')).map(k=>[k,localStorage.getItem(k)]))),saved);
  await ctx.tracing.stop({path:join(output,`${mode}-${width}-${lang}-trace.zip`)});await ctx.close();
 }
 assert.equal(report.titles.length,report.modes.length*langs.length*2*13);assert.equal(report.notes.length,report.titles.length);assert.equal(report.startup.length,report.modes.length*langs.length*2*3);assert.deepEqual(report.errors,[]);assert.deepEqual(report.blocked,[]);
 report.diagnosticCompleted=true;report.unreserved=report.titles.filter(r=>!r.reserved).length;report.occluded=report.titles.filter(r=>!r.exposed).length;
 report.unreadableNotes=report.notes.filter(r=>!r.geometry.lines.length||r.geometry.lines.some(l=>!l.exposed)||r.geometry.left<0||r.geometry.right>r.geometry.width||r.geometry.rootScroll>r.geometry.width).length;report.unreadableStartup=report.startup.filter(r=>!r.geometry.lines.length||r.geometry.lines.some(l=>!l.exposed)).length;
 assert.equal(report.unreserved,0,'Every title reserves space for its disclosure control');
 assert.equal(report.occluded,0,'Every title is visible at phone and desktop widths');
 assert.equal(report.unreadableNotes,0);assert.equal(report.unreadableStartup,0);report.acceptance=true;
}catch(error){report.failure=error.stack;process.exitCode=1;if(page&&!page.isClosed())await page.screenshot({path:join(output,'failure.png'),fullPage:true}).catch(()=>{});}
finally{
 await browser?.close();server.closeAllConnections();await new Promise(done=>server.close(done));report.finished=new Date().toISOString();await writeFile(join(output,'tablet-report.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify({head,diagnosticCompleted:report.diagnosticCompleted,unreserved:report.unreserved,occluded:report.occluded,failure:report.failure,acceptance:report.acceptance}));
}
