const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const pages=$$('.page').map(p=>p.id);

/* ---------- YOUR LINKS: edit only this block ---------- */
const LINKS={email:'txrou2004@gmail.com',phone:'+60 11-39531085',instagram:'xin_r0u',linkedin:'tan-xin-rou-083b98390',github:'txrou2004-crypto'};
const CV_URL='https://drive.google.com/file/d/1GrVhROM5w_8I1kC5Wgpop0BGTTh38CKd/view?usp=sharing';
const URLS={email:v=>'mailto:'+v,phone:v=>'tel:'+v.replace(/[^+\d]/g,''),instagram:v=>'https://instagram.com/'+v,linkedin:v=>'https://www.linkedin.com/in/'+v,github:v=>'https://github.com/'+v};
const SHOW={email:v=>v,phone:v=>v,instagram:v=>'@'+v,linkedin:v=>'linkedin.com/in/'+v,github:v=>'github.com/'+v};
$$('[data-link]').forEach(a=>{const k=a.dataset.link;a.href=URLS[k](LINKS[k]);if(k!=='email'&&k!=='phone'){a.target='_blank';a.rel='noopener'}});
$$('[data-text]').forEach(el=>{const k=el.dataset.text;el.textContent=SHOW[k](LINKS[k])});


/* ---------- routing ---------- */
function route(){
  let h=location.hash.slice(1); if(!pages.includes(h))h='home';
  $$('.page').forEach(p=>p.classList.toggle('show',p.id===h));
  $$('nav a.l').forEach(a=>a.classList.toggle('on',a.dataset.p===h));
  $('#lk').classList.remove('open'); window.scrollTo(0,0);
  document.title='Rou · '+h[0].toUpperCase()+h.slice(1);
  if(h==='home'){count();if(window.lanKick)lanKick()}
  setTimeout(tlp,80);
}
addEventListener('hashchange',route);
$('#mb').onclick=()=>$('#lk').classList.toggle('open');
$('#tg').onclick=()=>{
  const r=document.documentElement;
  const dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
  r.dataset.theme=dark?'light':'dark';
};

/* ---------- typing roles ---------- */
const roles=['Software Developer','UI/UX Enthusiast','Flutter Builder','Problem Solver'];
let ri=0,ci=0,del=false;
(function ty(){
  const w=roles[ri]; ci+=del?-1:1; $('#ty').textContent=w.slice(0,ci);
  let t=del?40:90;
  if(!del&&ci===w.length){del=true;t=1400}
  else if(del&&ci===0){del=false;ri=(ri+1)%roles.length;t=300}
  setTimeout(ty,t);
})();

/* ---------- counters ---------- */
function count(){
  $$('[data-n]').forEach(el=>{
    const n=+el.dataset.n; let i=0;
    const id=setInterval(()=>{el.textContent=(++i)+'+'; if(i>=n)clearInterval(id)},1200/n);
  });
}

/* ---------- coursework marquee ---------- */
const CW=['Programming Technique','Multimedia System','Computer Organization and Architecture','Data Structure and Algorithm','Software Engineering','Database','Object-Oriented Programming','Operating System','Algorithm Analysis','Database Design','Artificial Intelligence','Data Communication and Networking','Distributed Application Development','Software Requirement and Design','Software Verification and Validation','Human Computer Interaction'];
const mqSet=CW.map(c=>`<span>${c}</span><i>✦</i>`).join('');
$('#mt').innerHTML=mqSet+mqSet;

/* ---------- projects ---------- */
// "[planned] " at the start of a bullet adds a Planned tag. repo = your GitHub repository name.
const P=[
{n:'CampusFlow – Campus Timetable Management System',cat:'Mobile App',yr:'2026',repo:'smartcampus-connect-',
 desc:'A campus timetable management system that helps students and lecturers manage class schedules and stay informed about timetable changes.',
 problem:['Students may not receive timely updates about class cancellations or venue changes.','Managing timetable information manually can lead to confusion and outdated schedules.'],
 solution:['Provides a centralised platform for managing and viewing class timetables.','Allows lecturers to publish class cancellations and venue updates.','Enables students to access the latest timetable information.'],
 tools:['Flutter','Dart','Supabase']},
{n:'TravelMind – Smart Travel Planning System',cat:'Mobile App',yr:'2026',repo:'Smart-Travel-Planning-System-TravelMind-',
 desc:'A smart travel planning application designed to help travellers organise trips, discover attractions and manage their travel plans in one place.',
 problem:['Planning a trip often requires switching between multiple platforms for attractions, itineraries and travel budgets.','Travellers may struggle to organise activities efficiently, especially when visiting unfamiliar destinations.'],
 solution:['Provides a centralised platform for travel planning and itinerary management.','Helps users explore attractions and organise travel activities.','Supports travel budget planning and personalised itinerary recommendations.'],
 tools:['Flutter','Dart','Supabase']},
{n:'Blood Bank Management System',cat:'Software Engineering',yr:'2025',repo:'blood-bank-management-system',
 desc:'A blood bank management system developed to manage blood donation records, donor information and blood inventory.',
 problem:['Managing donor records and blood stock manually can be time-consuming.','Difficulty tracking available blood types may affect the efficiency of blood inventory management.'],
 solution:['Maintains organised donor and blood donation records.','Manages blood stock information and availability.','Supports efficient retrieval and updating of blood bank records.'],
 tools:['C++','MySQL']},
{n:'VIP Guestlist Management System',cat:'Mobile App',yr:'2026',repo:'VIP-guestlist-app',
 desc:'A mobile-based guestlist management application designed to organise VIP guest information and simplify event guest management.',
 problem:['Manual guestlist management can make it difficult to organise and retrieve guest information.','Event organisers may face challenges keeping guest records organised and updated.'],
 solution:['Provides a digital platform for managing VIP guest information.','Organises guest records for easier access and management.','Simplifies the process of maintaining event guestlists.'],
 tools:['Flutter','Dart']},
{n:'SmartCampus Connect – Distributed Backend Platform',cat:'Backend Systems',yr:'2026',repo:'smartcampus-connect-',
 desc:'A distributed backend platform designed to support essential university operations through a collection of independently deployable services.',
 problem:['Centralised backend systems can make it difficult to maintain, update and scale individual university services independently.','Different university operations may require different services to communicate and exchange information reliably.'],
 solution:['Uses independently deployable services to support different university operations.','Integrates services through REST APIs, SOAP/WSDL and event-driven messaging.','Uses a shared database technology to manage application data.'],
 tools:['REST API','MySQL','Maven','Postman']}];
const chipsOf=a=>a.map(t=>`<span class="chip">${t}</span>`).join('');
$('#pj').innerHTML=P.map((p,i)=>`<article class="card pcard" tabindex="0" role="button" aria-haspopup="dialog" data-i="${i}"><div class="pmeta"><span>${p.cat}</span><span>${p.yr}</span></div><h3>${p.n}</h3><p>${p.desc}</p><div class="chips">${chipsOf(p.tools)}</div><div class="pfoot"><span>Open case study</span><span class="go" aria-hidden="true">↗</span></div></article>`).join('');

/* project details pop-up */
const pm=$('#pm'),pb=$('#pm-b');let lastCard=null;
const li=a=>a.map(t=>t.startsWith('[planned] ')?`<li>${t.slice(10)}<span class="plan">Planned</span></li>`:`<li>${t}</li>`).join('');
const ico=d=>`<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
function openP(i,el){
  const p=P[i]; lastCard=el;
  pb.innerHTML=`<div class="pcat">${p.cat} · ${p.yr}</div><h2 id="pm-t">${p.n}</h2><p class="lead">${p.desc}</p>
<h4>${ico('<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/>')}The problem</h4><ul>${li(p.problem)}</ul>
<h4>${ico('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>')}The solution</h4><ul>${li(p.solution)}</ul>
<h4>${ico('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>')}Tools used</h4><div class="chips">${chipsOf(p.tools)}</div>
<div class="actions"><a class="btn o" href="${URLS.github(LINKS.github)}/${p.repo}" target="_blank" rel="noopener">${ico('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>')}Source code</a></div>`;
  pm.hidden=false; document.body.style.overflow='hidden';
  pm.querySelector('.mp').scrollTop=0; $('#pm-x').focus();
}
function closeP(){pm.hidden=true;document.body.style.overflow='';if(lastCard)lastCard.focus()}
$$('.pcard').forEach(c=>{
  c.onclick=()=>openP(+c.dataset.i,c);
  c.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openP(+c.dataset.i,c)}};
});
$('#pm-x').onclick=closeP;
pm.onclick=e=>{if(e.target===pm)closeP()};
addEventListener('keydown',e=>{
  if(pm.hidden)return;
  if(e.key==='Escape')closeP();
  if(e.key==='Tab'){const f=[...pm.querySelectorAll('a[href],button')],a=f[0],z=f[f.length-1];
    if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}
    else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
});
addEventListener('hashchange',()=>{if(!pm.hidden){pm.hidden=true;document.body.style.overflow=''}});

/* ---------- services ---------- */
const SI={
ux:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
web:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
mobile:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
edu:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
admin:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'};
const S=[
['ux','UI/UX Design & Prototyping','Creating user-friendly digital interfaces and interactive prototypes with a focus on usability, accessibility and visual consistency.',['Figma','Canva'],['Wireframing','UI design','UX design','Interactive prototyping']],
['web','Web Development','Building responsive and functional websites with clean layouts, intuitive navigation and features tailored to different user needs.',['HTML','CSS','JavaScript','React','VS Code'],['Frontend development','Responsive web design','Website development']],
['mobile','Mobile App Development','Developing functional mobile applications with user-friendly interfaces and practical features to improve everyday experiences.',['Flutter','Dart','Android Studio','VS Code'],['Mobile application development','UI implementation','App functionality']],
['db','Backend & Database Development','Setting up databases, managing application data and implementing backend functionality to support reliable application operations.',['Supabase','PostgreSQL','MySQL','C++'],['Database design','CRUD operations','Authentication','Data management','Backend integration']],
['edu','Tutoring & Educational Support','Providing personalized learning assistance, academic guidance and simplified explanations to help students understand concepts and improve their learning experience.',['Microsoft PowerPoint','Canva','Microsoft Word'],['Coding and basic programming','Primary school syllabus','Secondary school syllabus','Learning guidance and revision support']],
['admin','Administrative & Event Assistance','Supporting event planning, scheduling, registration management and administrative tasks to ensure smooth coordination and organization.',['Microsoft Word','Excel','PowerPoint','Google Forms','Canva'],['Event planning assistance','Scheduling and coordination','Registration management','Event material preparation','Administrative support']]];
const ck=a=>`<ul class="sck">${a.map(t=>`<li>${t}</li>`).join('')}</ul>`;
$('#sv').innerHTML=S.map((s,i)=>`<article class="card scard"><span class="sn" aria-hidden="true">0${i+1}</span><svg class="si" viewBox="0 0 24 24" aria-hidden="true">${SI[s[0]]}</svg><h3>${s[1]}</h3><p>${s[2]}</p><span class="sl">Tools</span>${ck(s[3])}<span class="sl">Areas</span>${ck(s[4])}</article>`).join('');

/* ---------- contact form ---------- */
const T=m=>{const t=$('#toast');t.textContent=m;t.classList.add('s');setTimeout(()=>t.classList.remove('s'),3000)};
$('#m').oninput=e=>$('#c').textContent=e.target.value.length+'/500';
function chk(el,ok,msg){el.classList.toggle('bad',!ok);el.nextElementSibling.textContent=ok?'':msg;return ok}
$('#fm').onsubmit=ev=>{
  ev.preventDefault();
  const a=chk($('#n'),$('#n').value.trim().length>1,'Please enter your name.'),
        b=chk($('#e'),/^\S+@\S+\.\S+$/.test($('#e').value),'Enter a valid email address.'),
        c=chk($('#m'),$('#m').value.trim().length>=10,'Message must be at least 10 characters.');
  if(!(a&&b&&c))return T('⚠️ Please fix the highlighted fields');
  const s=$('#sb'); s.disabled=true; s.textContent='Sending…';
  setTimeout(()=>{s.disabled=false;s.textContent='Send message';$('#fm').reset();$('#c').textContent='0/500';T('✅ Message sent! I’ll reply soon.')},1200);
};

/* ---------- scroll reveal ---------- */
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}}),{threshold:.1});
  $$('.grid .card,.pq .card,.row,.scard,.quote,.pcard,.xp-item,.tool,.tl .it,.stat').forEach(el=>{el.classList.add('rv');io.observe(el)});
}

/* ---------- lanyard badge (swing, drag, flip) ---------- */
(function(){
  const lan=$('#lan'); if(!lan)return;
  const swing=$('#swing'),pivot=$('#pivot');
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const G=12,C=.5,MAXA=.9;
  let th=0,w=0,ph=0,pv=0,wPrev=0,idle=0,last=0,drag=null;

  // QR code for the CV
  const qr=$('#qr');
  if(window.QRCode){new QRCode(qr,{text:CV_URL,width:154,height:154,colorDark:'#1d1b2e',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});qr.removeAttribute('title')}
  else qr.textContent='CV';

  const apply=()=>{swing.style.transform=`rotate(${th}rad)`;pivot.style.transform=`rotate(${ph}rad)`};
  const sign=()=>Math.random()<.5?-1:1;
  window.lanKick=()=>{if(!reduce&&!drag)w=2.1*sign()};   // swings when you arrive on Home

  function step(t){
    const dt=Math.min((t-last)/1000||0,1/30); last=t;
    if(lan.offsetParent&&!document.hidden){
      if(!drag){
        w+=(-G*Math.sin(th)-C*w)*dt; th+=w*dt;
        idle=(Math.abs(th)<.04&&Math.abs(w)<.15)?idle+dt:0;
        if(!reduce&&idle>4){w=1.5*sign();idle=0}          // gentle nudge to show it moves
      }
      const acc=dt?(w-wPrev)/dt:0; wPrev=w;                // card lags behind the strap
      pv+=(-40*ph-5*pv-.6*acc)*dt; ph=Math.max(-.6,Math.min(.6,ph+pv*dt));
      apply();
    }
    requestAnimationFrame(step);
  }

  function flip(){
    const f=lan.classList.toggle('flipped'); pivot.setAttribute('aria-pressed',f);
    if(!reduce)w+=.9*sign();
  }

  lan.addEventListener('pointerdown',e=>{
    if(!e.target.closest('.rope,.pivot'))return;
    const r=lan.getBoundingClientRect(),ax=r.left+r.width/2,ay=r.top;
    const a0=Math.atan2(e.clientX-ax,Math.max(e.clientY-ay,40));
    drag={ax,ay,off:th-a0,x0:e.clientX,y0:e.clientY,t0:performance.now(),lt:performance.now(),moved:0,onCard:!!e.target.closest('.pivot')};
    lan.setPointerCapture(e.pointerId); lan.classList.add('grab'); w=0;
  });
  lan.addEventListener('pointermove',e=>{
    if(!drag)return;
    drag.moved=Math.max(drag.moved,Math.hypot(e.clientX-drag.x0,e.clientY-drag.y0));
    const a=Math.atan2(e.clientX-drag.ax,Math.max(e.clientY-drag.ay,40))+drag.off;
    const n=Math.max(-MAXA,Math.min(MAXA,a)),now=performance.now(),dt=(now-drag.lt)/1000;
    if(dt>0)w=w*.6+((n-th)/dt)*.4;
    th=n; drag.lt=now;
  });
  function end(){
    if(!drag)return;
    const d=drag; drag=null; lan.classList.remove('grab');
    if(performance.now()-d.lt>80)w=0;
    w=Math.max(-5,Math.min(5,w));
    if(d.moved<6&&performance.now()-d.t0<600&&d.onCard)flip();
  }
  lan.addEventListener('pointerup',end);
  lan.addEventListener('pointercancel',end);
  pivot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}});
  pivot.addEventListener('click',e=>{if(e.detail===0)flip()});   // assistive tech

  requestAnimationFrame(step);
})();

/* ---------- education timeline follows scroll ---------- */
function tlp(){
  const tl=$('#education .tl');
  if(!tl||!tl.offsetParent)return;
  const its=$$('#education .tl .it'), H=its[its.length-1].offsetTop;
  tl.style.setProperty('--h',H+'px');
  const y=innerHeight*.6-tl.getBoundingClientRect().top-30;
  tl.style.setProperty('--f',Math.max(0,Math.min(H,y))+'px');
  its.forEach(it=>it.classList.toggle('on',it.offsetTop<=y));
}
addEventListener('scroll',tlp,{passive:true});
addEventListener('resize',tlp);
addEventListener('load',tlp);
route();