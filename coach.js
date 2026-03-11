<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="N·TRACKER">
<meta name="theme-color" content="#f8fafc">
<title>N·TRACKER</title>
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
html,body{background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',sans-serif;color:#0f172a;overscroll-behavior:none;-webkit-font-smoothing:antialiased;}
:root{
  --red:#FF6B35;--orange:#FF9500;--green:#34C759;--blue:#007AFF;
  --purple:#5856D6;--teal:#30B0C7;--gray:#8E8E93;
  --card:#fff;--border:#e2e8f0;--muted:#94a3b8;--sub:#64748b;--text:#0f172a;
  --st:env(safe-area-inset-top,0px);--sb:env(safe-area-inset-bottom,0px);
}
#hdr{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(248,250,252,0.94);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);padding:12px 18px;padding-top:calc(12px + var(--st));display:flex;align-items:center;justify-content:space-between;}
.logo{font-size:18px;font-weight:900;letter-spacing:-.3px;}
.wk-pill{background:var(--red);color:#fff;font-size:9px;font-weight:700;letter-spacing:1.5px;padding:5px 11px;border-radius:20px;}
#content{padding:16px;padding-top:calc(64px + var(--st) + 6px);padding-bottom:calc(68px + var(--sb) + 12px);max-width:520px;margin:0 auto;}
#nav{position:fixed;bottom:0;left:0;right:0;z-index:100;background:rgba(255,255,255,0.96);-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-top:1px solid var(--border);display:flex;padding-bottom:var(--sb);}
.nb{flex:1;background:none;border:none;color:var(--muted);padding:8px 2px 8px;font-size:6.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;-webkit-appearance:none;transition:color .2s;}
.nb.on{color:var(--text);}
.nb.on .ni{color:var(--red);}
.ni{font-size:20px;line-height:1;}
.card{background:var(--card);border-radius:18px;padding:18px;margin-bottom:12px;box-shadow:0 1px 2px rgba(0,0,0,0.06),0 3px 10px rgba(0,0,0,0.04);}
.lbl{font-size:8px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--muted);margin-bottom:8px;display:block;}
.big{font-size:28px;font-weight:900;letter-spacing:-.5px;line-height:1;}
.unit{font-size:13px;color:var(--muted);font-weight:600;}
.sub{color:var(--muted);font-size:10px;margin-top:3px;}
.section-title{font-size:20px;font-weight:800;letter-spacing:-.3px;margin-bottom:14px;}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;}
.pb{margin-bottom:11px;}
.pb-row{display:flex;justify-content:space-between;margin-bottom:5px;}
.pb-bg{height:7px;background:#f1f5f9;border-radius:99px;overflow:hidden;}
.pb-fill{height:100%;border-radius:99px;transition:width .8s ease;}
.btn{background:var(--red);border:none;color:#fff;padding:14px;font-size:13px;font-weight:700;cursor:pointer;border-radius:13px;width:100%;-webkit-appearance:none;transition:opacity .15s,transform .1s;font-family:inherit;}
.btn:active{opacity:.82;transform:scale(.98);}
.btn.green{background:var(--green);}
.btn.ghost{background:rgba(0,0,0,.05);color:var(--sub);}
.btn.sm{padding:9px 16px;font-size:11px;width:auto;border-radius:10px;}
.inp{background:#f8fafc;border:1.5px solid var(--border);color:var(--text);padding:13px 14px;font-size:16px;width:100%;border-radius:13px;outline:none;-webkit-appearance:none;font-family:inherit;transition:border-color .2s;}
.inp:focus{border-color:var(--red);}
.inp::placeholder{color:rgba(0,0,0,.2);}
.inps{width:52px;text-align:center;padding:9px 4px;font-size:14px;font-weight:700;background:#f8fafc;border:1.5px solid var(--border);color:var(--text);border-radius:10px;outline:none;-webkit-appearance:none;font-family:inherit;}
.inps:focus{border-color:var(--red);}
.pills{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px;}
.pill{background:#f1f5f9;border:1.5px solid transparent;color:var(--sub);padding:9px 14px;font-size:11px;font-weight:700;cursor:pointer;border-radius:10px;-webkit-appearance:none;transition:all .15s;font-family:inherit;}
.pill.on{color:#fff;}
.cbar{height:30px;display:flex;border-radius:10px;overflow:hidden;margin-bottom:8px;}
canvas.chart{width:100%;height:160px;display:block;}
.tbl{width:100%;border-collapse:collapse;font-size:12px;}
.tbl th{text-align:left;padding:7px 8px;border-bottom:2px solid #f1f5f9;font-size:8px;letter-spacing:2px;color:var(--muted);font-weight:700;text-transform:uppercase;}
.tbl td{padding:9px 8px;border-bottom:1px solid #f8fafc;vertical-align:top;}
.sess-card{background:var(--card);border-radius:16px;padding:15px;margin-bottom:10px;box-shadow:0 1px 3px rgba(0,0,0,.06);border-left:4px solid var(--red);}
.stat-sm{background:var(--card);border-radius:16px;padding:14px;box-shadow:0 1px 3px rgba(0,0,0,.05);}
.banner{background:linear-gradient(135deg,#FF6B35,#FF9500);border-radius:18px;padding:18px;margin-bottom:12px;box-shadow:0 4px 20px rgba(255,107,53,.28);}
.hint{display:flex;gap:10px;margin-bottom:9px;font-size:13px;color:var(--sub);align-items:flex-start;line-height:1.4;}
.field{margin-bottom:12px;}
.field-lbl{font-size:12px;color:var(--sub);font-weight:600;margin-bottom:5px;}
.badge{display:inline-block;padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700;}

/* ── TIMER ── */
.timer-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:500;display:flex;align-items:center;justify-content:center;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);}
.timer-box{background:#1e293b;border-radius:28px;padding:36px 40px;text-align:center;min-width:260px;box-shadow:0 20px 60px rgba(0,0,0,.5);}
.timer-ring{position:relative;width:160px;height:160px;margin:0 auto 20px;}
.timer-ring svg{transform:rotate(-90deg);}
.timer-ring circle{fill:none;stroke-width:8;}
.timer-ring .bg{stroke:#2d3f5e;}
.timer-ring .fg{stroke:var(--green);stroke-linecap:round;transition:stroke-dashoffset .5s linear;}
.timer-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:42px;font-weight:900;color:#fff;letter-spacing:-1px;}
.timer-lbl-top{font-size:10px;font-weight:700;letter-spacing:2px;color:#64748b;text-transform:uppercase;margin-bottom:16px;}
.timer-ex{font-size:15px;font-weight:700;color:#fff;margin-bottom:6px;}
.timer-set{font-size:12px;color:#94a3b8;margin-bottom:20px;}
.timer-btns{display:flex;gap:10px;justify-content:center;}
.t-btn{border:none;border-radius:12px;padding:12px 20px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;-webkit-appearance:none;}
.t-btn.skip{background:#334155;color:#94a3b8;}
.t-btn.stop{background:#FF6B35;color:#fff;}
.t-btn.add{background:#1e40af;color:#fff;}

/* ── SET ROWS (in session) ── */
.ex-block{background:#f8fafc;border-radius:14px;padding:14px;margin-bottom:10px;}
.ex-block-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
.set-row{display:grid;grid-template-columns:28px 1fr 1fr 1fr auto;gap:6px;align-items:center;margin-bottom:7px;}
.set-num{width:28px;height:28px;border-radius:8px;background:var(--red);color:#fff;font-size:11px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.set-done{background:var(--green)!important;}
.set-check{width:32px;height:32px;border-radius:9px;border:none;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;-webkit-appearance:none;}
.set-check.done{background:#f0fdf4;color:var(--green);}
.set-check.undone{background:#f1f5f9;color:var(--muted);}

/* ── EXERCISE EDITOR ── */
.edit-ex-row{display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f1f5f9;}
.edit-ex-inp{flex:1;background:#f8fafc;border:1.5px solid var(--border);color:var(--text);padding:9px 12px;font-size:14px;border-radius:10px;outline:none;font-family:inherit;}
.edit-ex-inp:focus{border-color:var(--red);}
.del-btn{width:32px;height:32px;background:#fff0ee;border:none;border-radius:8px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;-webkit-appearance:none;flex-shrink:0;}

/* ── MACROS ── */
.macro-bar-wrap{margin-bottom:14px;}
.macro-bar-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}
.macro-bar-bg{height:10px;background:#f1f5f9;border-radius:99px;overflow:hidden;}
.macro-bar-fill{height:100%;border-radius:99px;transition:width .5s ease;}
.macro-card{background:var(--card);border-radius:16px;padding:14px 16px;text-align:center;}
.food-row{display:flex;align-items:center;gap:8px;padding:10px 0;border-bottom:1px solid #f8fafc;}
.food-name{flex:1;font-size:13px;color:#334155;font-weight:500;}
.food-macros{font-size:11px;color:var(--muted);font-family:monospace;}
.food-del{width:28px;height:28px;background:#fff0ee;border:none;border-radius:7px;cursor:pointer;font-size:13px;-webkit-appearance:none;flex-shrink:0;}

/* ── AI COACH ── */
#chat-wrap{display:flex;flex-direction:column;height:calc(100vh - 64px - var(--st) - 68px - var(--sb));position:relative;}
#chat-msgs{flex:1;overflow-y:auto;padding:12px 0;-webkit-overflow-scrolling:touch;}
.msg{display:flex;gap:10px;margin-bottom:14px;align-items:flex-end;}
.msg.user{flex-direction:row-reverse;}
.msg-bubble{max-width:78%;padding:12px 15px;border-radius:18px;font-size:14px;line-height:1.55;word-break:break-word;}
.msg.ai .msg-bubble{background:#fff;color:#0f172a;border-bottom-left-radius:5px;box-shadow:0 1px 3px rgba(0,0,0,.08);}
.msg.user .msg-bubble{background:linear-gradient(135deg,#FF6B35,#FF9500);color:#fff;border-bottom-right-radius:5px;}
.msg-av{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;}
.msg-av.ai-av{background:linear-gradient(135deg,#FF6B35,#FF9500);}
.msg-av.user-av{background:#e2e8f0;}
#chat-inp-wrap{display:flex;gap:8px;padding:10px 0;background:transparent;}
#chat-inp{flex:1;background:#fff;border:1.5px solid var(--border);color:var(--text);padding:12px 16px;font-size:15px;border-radius:24px;outline:none;-webkit-appearance:none;font-family:inherit;resize:none;max-height:100px;}
#chat-inp:focus{border-color:var(--red);}
#chat-send{width:44px;height:44px;background:var(--red);border:none;border-radius:50%;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0;-webkit-appearance:none;transition:opacity .15s;}
#chat-send:active{opacity:.8;}
.typing{display:flex;gap:5px;padding:12px 15px;background:#fff;border-radius:18px;border-bottom-left-radius:5px;width:56px;box-shadow:0 1px 3px rgba(0,0,0,.08);}
.typing span{width:7px;height:7px;background:#cbd5e1;border-radius:50%;animation:bounce .8s infinite;}
.typing span:nth-child(2){animation-delay:.15s;}
.typing span:nth-child(3){animation-delay:.3s;}
@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}

/* ── TOAST ── */
#toast{position:fixed;bottom:calc(68px + var(--sb) + 14px);left:50%;transform:translateX(-50%) translateY(16px);background:var(--green);color:#fff;padding:11px 24px;font-size:11px;font-weight:700;letter-spacing:1px;border-radius:24px;opacity:0;transition:all .3s;z-index:999;white-space:nowrap;box-shadow:0 4px 20px rgba(52,199,89,.4);}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
@keyframes fu{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.fade{animation:fu .28s ease-out;}
::-webkit-scrollbar{display:none;}
</style>
</head>
<body>

<div id="hdr">
  <div class="logo">N<span style="color:var(--red)">·</span>TRACKER</div>
  <div class="wk-pill" id="wk-pill">SEM — / 16</div>
</div>

<div id="content"><div id="app" class="fade"></div></div>

<nav id="nav">
  <button class="nb on" onclick="go('dash')"  id="t-dash"><span class="ni">◈</span>BOARD</button>
  <button class="nb"    onclick="go('log')"   id="t-log"><span class="ni">⚖</span>PESÉE</button>
  <button class="nb"    onclick="go('sess')"  id="t-sess"><span class="ni">🏋️</span>SÉANCE</button>
  <button class="nb"    onclick="go('macro')" id="t-macro"><span class="ni">🥗</span>MACROS</button>
  <button class="nb"    onclick="go('coach')" id="t-coach"><span class="ni">🤖</span>COACH</button>
  <button class="nb"    onclick="go('hist')"  id="t-hist"><span class="ni">📋</span>HIST.</button>
</nav>

<div id="toast"></div>

<script>
/* ══════════════════════ CONSTANTS ══════════════════════ */
const SW=87.05,SMG=16,GMG=11,TW=16;
const SD=new Date("2026-03-10"),ED=new Date("2026-07-02");
const PLAN=["PUSH 1","PULL 1","LEGS 1","PUSH 2","PULL 2","LEGS 2","REPOS"];
const MACRO_TARGETS={kcal:2700,p:200,g:275,l:77};// Nicolas: recompo

const EX_DEFAULT={
  "PUSH 1":["Développé couché haltères","Développé couché incliné barre","Pecs machine","Triceps cordes","Dips"],
  "PUSH 2":["Développé couché haltères","Développé couché incliné barre","Pecs machine","Triceps cordes","Dips"],
  "PULL 1":["Tractions lestées","Rowing barre","Tirage vertical large","Rowing haltère unilatéral","Face pulls","Curl barre EZ","Curl marteau"],
  "PULL 2":["SDT roumain","Tirage prise serrée","Rowing machine","Pull-over câble","Curl concentré","Shrugs haltères"],
  "LEGS 1":["Squat barre","Leg press 45°","Fentes marchées","Extension quadriceps","Hip thrust barre","Mollets debout"],
  "LEGS 2":["Leg curl","SDT jambes tendues","Hack squat","Abducteurs machine","Planche dynamique","Crunchs câble","Relevé de jambes","Russian twists","Mollets assis"],
  "REPOS":[]
};
const TC={"PUSH 1":"#FF6B35","PUSH 2":"#FF9500","PULL 1":"#007AFF","PULL 2":"#5856D6","LEGS 1":"#34C759","LEGS 2":"#30B0C7","REPOS":"#8E8E93"};
const MOTIVS=["La transformation se construit rep après rep.","Chaque séance te rapproche de la meilleure version de toi.","La régularité bat l'intensité. Montre-toi chaque jour.","Le miroir change avant la balance. Trust the process.","10% MG. Ce n'est pas un rêve, c'est un plan.","Pas de raccourcis. Du travail. Des résultats.","Forge-toi. Chaque jour compte."];

/* ══════════════════════ STORAGE ══════════════════════ */
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
const ld=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}};

let entries  = ld("n:e",[]);
let sessions = ld("n:s",[]);
let EX       = ld("n:ex", EX_DEFAULT);
let foods    = ld("n:f",{});     // {date: [{name,kcal,p,g,l}]}
let chatHist = [];                // AI chat history (session only)
let sType    = null;
let activeSets = {};             // {exIdx: [{reps,weight,done}]}
let timerInt = null, timerLeft = 0, timerTotal = 0, timerCb = null;
let editMode = false;

/* ══════════════════════ UTILS ══════════════════════ */
const fmt   = n => typeof n==="number" ? n.toFixed(1) : "—";
const tday  = () => new Date().toISOString().slice(0,10);
const wn    = () => Math.min(TW,Math.max(1,Math.ceil((new Date()-SD)/(7*864e5))));
const wl    = () => Math.max(0,Math.ceil((ED-new Date())/(7*864e5)));
const todayP= () => {const d=new Date().getDay(); return PLAN[d===0?6:d-1];};
const cw    = () => {const e=entries.length?entries[entries.length-1]:null; return e?e.weight:SW;};
const cm    = () => {const e=entries.length?entries[entries.length-1]:null; return e&&e.mg!=null?e.mg:SMG;};
const pct   = (c,s,g) => Math.min(100,Math.max(0,Math.round(((s-c)/(s-g))*100)));
const todayFoods = () => foods[tday()]||[];
const todayMacros= () => todayFoods().reduce((a,f)=>({kcal:a.kcal+f.kcal,p:a.p+f.p,g:a.g+f.g,l:a.l+f.l}),{kcal:0,p:0,g:0,l:0});

function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}
function updateHeader(){document.getElementById("wk-pill").textContent=`SEM ${wn()} / ${TW}`;}

/* ══════════════════════ CHART ══════════════════════ */
function drawChart(id,data,color,refLines=[],yMin,yMax){
  const c=document.getElementById(id); if(!c||data.length<2)return;
  const dpr=window.devicePixelRatio||1,W=c.offsetWidth,H=c.offsetHeight;
  c.width=W*dpr; c.height=H*dpr;
  const ctx=c.getContext("2d"); ctx.scale(dpr,dpr);
  const p={t:10,r:12,b:26,l:38},pw=W-p.l-p.r,ph=H-p.t-p.b;
  const vs=data.map(d=>d.y),mn=yMin!=null?yMin:Math.min(...vs)-.5,mx=yMax!=null?yMax:Math.max(...vs)+.5;
  const xO=i=>p.l+(i/(data.length-1))*pw, yO=v=>p.t+ph-((v-mn)/(mx-mn))*ph;
  ctx.clearRect(0,0,W,H);
  for(let i=0;i<=3;i++){const v=mn+((mx-mn)/3)*i,y=yO(v);ctx.beginPath();ctx.strokeStyle="rgba(0,0,0,.05)";ctx.lineWidth=1;ctx.moveTo(p.l,y);ctx.lineTo(p.l+pw,y);ctx.stroke();ctx.fillStyle="#94a3b8";ctx.font="9px -apple-system";ctx.textAlign="right";ctx.fillText(v.toFixed(1),p.l-3,y+3);}
  refLines.forEach(({val,col})=>{const y=yO(val);ctx.beginPath();ctx.strokeStyle=col;ctx.lineWidth=1.5;ctx.setLineDash([5,4]);ctx.moveTo(p.l,y);ctx.lineTo(p.l+pw,y);ctx.stroke();ctx.setLineDash([]);});
  const g=ctx.createLinearGradient(0,p.t,0,p.t+ph);g.addColorStop(0,color+"22");g.addColorStop(1,color+"00");
  ctx.beginPath();ctx.moveTo(xO(0),yO(data[0].y));data.forEach((d,i)=>{if(i>0)ctx.lineTo(xO(i),yO(d.y));});ctx.lineTo(xO(data.length-1),p.t+ph);ctx.lineTo(xO(0),p.t+ph);ctx.closePath();ctx.fillStyle=g;ctx.fill();
  ctx.beginPath();ctx.strokeStyle=color;ctx.lineWidth=2.5;ctx.lineJoin="round";data.forEach((d,i)=>i===0?ctx.moveTo(xO(i),yO(d.y)):ctx.lineTo(xO(i),yO(d.y)));ctx.stroke();
  data.forEach((d,i)=>{ctx.beginPath();ctx.arc(xO(i),yO(d.y),3.5,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.strokeStyle=color;ctx.lineWidth=2;ctx.stroke();});
  ctx.fillStyle="#94a3b8";ctx.font="9px -apple-system";ctx.textAlign="center";const step=Math.max(1,Math.ceil(data.length/5));data.forEach((d,i)=>{if(i===0||i===data.length-1||i%step===0)ctx.fillText(d.x,xO(i),H-4);});
}

/* ══════════════════════ TIMER ══════════════════════ */
function startTimer(seconds, exName, setLabel, onDone){
  timerLeft = seconds; timerTotal = seconds; timerCb = onDone;
  const C = 2*Math.PI*68;
  document.body.insertAdjacentHTML("beforeend",`
  <div class="timer-overlay" id="tmr-overlay">
    <div class="timer-box">
      <div class="timer-lbl-top">⏱ REPOS ENTRE SÉRIES</div>
      <div class="timer-ex">${exName}</div>
      <div class="timer-set">${setLabel}</div>
      <div class="timer-ring">
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle class="bg" cx="80" cy="80" r="68" stroke-dasharray="${C}" stroke-dashoffset="0"/>
          <circle class="fg" id="tmr-fg" cx="80" cy="80" r="68" stroke-dasharray="${C}" stroke-dashoffset="0"/>
        </svg>
        <div class="timer-num" id="tmr-num">${seconds}</div>
      </div>
      <div class="timer-btns">
        <button class="t-btn add" onclick="addTimerTime(30)">+30s</button>
        <button class="t-btn skip" onclick="skipTimer()">Passer ⏭</button>
        <button class="t-btn stop" onclick="stopTimer()">Stop ✕</button>
      </div>
    </div>
  </div>`);
  timerInt = setInterval(()=>{
    timerLeft--;
    const el=document.getElementById("tmr-num"); if(el) el.textContent=timerLeft;
    const fg=document.getElementById("tmr-fg");
    if(fg) fg.style.strokeDashoffset = C*(timerLeft/timerTotal);
    if(timerLeft<=3&&timerLeft>0) { try{new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAA").play();}catch(e){} }
    if(timerLeft<=0){ clearInterval(timerInt); removeTimer(); if(timerCb) timerCb(); }
  },1000);
}
function removeTimer(){const o=document.getElementById("tmr-overlay");if(o)o.remove();}
function skipTimer(){clearInterval(timerInt);removeTimer();if(timerCb)timerCb();}
function stopTimer(){clearInterval(timerInt);timerCb=null;removeTimer();}
function addTimerTime(s){timerLeft+=s;timerTotal+=s;const el=document.getElementById("tmr-num");if(el)el.textContent=timerLeft;}

/* ══════════════════════ TABS ══════════════════════ */
let cur="dash";
function go(tab){
  cur=tab;
  document.querySelectorAll(".nb").forEach(b=>b.classList.remove("on"));
  document.getElementById("t-"+tab).classList.add("on");
  const app=document.getElementById("app");
  app.innerHTML=""; void app.offsetWidth; app.className="fade";
  window.scrollTo(0,0); R[tab](); updateHeader();
}

/* ══════════════════════ DASHBOARD ══════════════════════ */
function R_dash(){
  const w=cw(),m=cm(),fat=(m/100)*w,lean=w-fat,leanS=SW*(1-SMG/100);
  const mgP=pct(m,SMG,GMG),wkP=Math.round(((wn()-1)/TW)*100);
  const plan=todayP(),hasSess=sessions.some(s=>s.date===tday());
  const dW=w-SW,dM=m-SMG,motiv=MOTIVS[wn()%MOTIVS.length];
  const mac=todayMacros();
  const pP=Math.min(100,Math.round((mac.p/MACRO_TARGETS.p)*100));

  document.getElementById("app").innerHTML=`
  <div style="margin-bottom:14px">
    <div style="font-size:22px;font-weight:900;letter-spacing:-.3px">Bonjour, Nicolas 👋</div>
    <div style="font-size:13px;color:var(--sub);margin-top:3px">${new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}</div>
  </div>
  <div class="banner">
    <div style="font-size:8px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,.65);margin-bottom:6px;text-transform:uppercase">Motivation</div>
    <div style="color:#fff;font-size:14px;line-height:1.55;font-weight:500">"${motiv}"</div>
  </div>
  <div class="g2">
    <div class="card" style="border-top:3px solid var(--red)">
      <span class="lbl">Poids</span>
      <div class="big" style="color:var(--red)">${fmt(w)}<span class="unit"> kg</span></div>
      <div class="sub">départ : ${SW} kg</div>
      ${dW<0?`<div class="badge" style="margin-top:6px;background:#fff7f4;color:var(--red)">−${fmt(Math.abs(dW))} kg</div>`:""}
    </div>
    <div class="card" style="border-top:3px solid var(--orange)">
      <span class="lbl">Masse grasse</span>
      <div class="big" style="color:var(--orange)">${fmt(m)}<span class="unit"> %</span></div>
      <div class="sub">${fmt(fat)} kg de graisse</div>
      ${dM<0?`<div class="badge" style="margin-top:6px;background:#fff9f0;color:var(--orange)">−${fmt(Math.abs(dM))}%</div>`:""}
    </div>
    <div class="card" style="border-top:3px solid var(--green)">
      <span class="lbl">Masse maigre</span>
      <div class="big" style="color:var(--green)">${fmt(lean)}<span class="unit"> kg</span></div>
      <div class="sub">départ : ${fmt(leanS)} kg</div>
      ${lean>leanS?`<div class="badge" style="margin-top:6px;background:#f0fdf4;color:var(--green)">+${fmt(lean-leanS)} kg</div>`:""}
    </div>
    <div class="card" style="border-top:3px solid var(--blue)">
      <span class="lbl">Semaine</span>
      <div class="big" style="color:var(--blue)">${wn()}<span class="unit"> / ${TW}</span></div>
      <div class="sub">${wl()} sem. restantes</div>
    </div>
  </div>
  <!-- Mini macros today -->
  <div class="card" onclick="go('macro')" style="cursor:pointer">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <span class="lbl" style="margin-bottom:0">Macros aujourd'hui</span>
      <span style="font-size:11px;color:var(--red);font-weight:700">${mac.kcal} / ${MACRO_TARGETS.kcal} kcal</span>
    </div>
    ${[{lbl:"Protéines",v:mac.p,t:MACRO_TARGETS.p,c:"#FF6B35",u:"g"},{lbl:"Glucides",v:mac.g,t:MACRO_TARGETS.g,c:"#FF9500",u:"g"},{lbl:"Lipides",v:mac.l,t:MACRO_TARGETS.l,c:"#5856D6",u:"g"}].map(m=>`
    <div style="margin-bottom:8px">
      <div style="display:flex;justify-content:space-between;margin-bottom:4px"><span style="font-size:11px;color:var(--sub)">${m.lbl}</span><span style="font-size:11px;font-weight:700;color:${m.c}">${Math.round(m.v)}g / ${m.t}g</span></div>
      <div class="pb-bg"><div class="pb-fill" style="width:${Math.min(100,Math.round((m.v/m.t)*100))}%;background:${m.c}"></div></div>
    </div>`).join("")}
    <div style="text-align:center;margin-top:4px;font-size:10px;color:var(--muted)">Toucher pour ajouter des aliments →</div>
  </div>
  <div class="card">
    <span class="lbl">Progression objectif</span>
    <div class="pb">
      <div class="pb-row"><span style="font-size:11px;color:var(--sub)">MG : ${fmt(m)}% → 10–12%</span><span style="font-size:11px;font-weight:700;color:var(--orange)">${mgP}%</span></div>
      <div class="pb-bg"><div class="pb-fill" style="width:${mgP}%;background:var(--orange)"></div></div>
    </div>
    <div class="pb" style="margin-bottom:0">
      <div class="pb-row"><span style="font-size:11px;color:var(--sub)">Programme</span><span style="font-size:11px;font-weight:700;color:var(--blue)">${wkP}%</span></div>
      <div class="pb-bg"><div class="pb-fill" style="width:${wkP}%;background:linear-gradient(90deg,var(--red),var(--orange))"></div></div>
      <div style="display:flex;justify-content:space-between;margin-top:3px"><span class="sub">10 mars 2026</span><span class="sub">2 juillet 2026</span></div>
    </div>
  </div>
  <div class="card" style="background:${hasSess?"#f0fdf4":"#fff"};border:1.5px solid ${hasSess?"#bbf7d0":"#ffe0d4"}">
    <span class="lbl">Séance du jour</span>
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div style="flex:1;min-width:0">
        <div style="font-size:20px;font-weight:900;color:${TC[plan]};margin-bottom:4px">${plan}</div>
        <div style="font-size:11px;color:var(--sub);line-height:1.6">${plan!=="REPOS"?(EX[plan]||[]).join(" · "):"Repos actif — marche + mobilité + étirements"}</div>
      </div>
      ${hasSess?`<div style="background:#bbf7d0;color:#15803d;font-weight:800;font-size:11px;padding:8px 14px;border-radius:20px;flex-shrink:0">✓ FAIT</div>`:
      `<button class="btn" style="background:${TC[plan]};width:auto;padding:10px 18px;font-size:12px;flex-shrink:0" onclick="go('sess')">Enregistrer</button>`}
    </div>
  </div>
  <div style="text-align:center;padding:6px 0 2px"><span class="sub">${entries.length} pesées · ${sessions.length} séances</span></div>
  `;
}

/* ══════════════════════ PESÉE ══════════════════════ */
function R_log(){
  document.getElementById("app").innerHTML=`
  <div class="section-title">⚖ Enregistrer une pesée</div>
  <div class="card">
    <div class="field"><div class="field-lbl">Poids (kg) *</div><input class="inp" id="iw" type="number" step="0.05" inputmode="decimal" placeholder="ex : 86.4"></div>
    <div class="field"><div class="field-lbl">Masse grasse % — optionnel</div><input class="inp" id="img" type="number" step="0.1" inputmode="decimal" placeholder="ex : 15.2"></div>
    <div class="field"><div class="field-lbl">Note</div><input class="inp" id="inote" type="text" placeholder="lendemain cheat, bonne nuit…"></div>
    <button class="btn" id="wbtn" onclick="svW()">Enregistrer la pesée</button>
  </div>
  <div class="card" style="background:linear-gradient(135deg,#fff7f4,#fff9f0);border:1px solid #ffe0d4">
    <span class="lbl">Protocole pesée</span>
    ${[["📅","Le mardi matin uniquement"],["🚿","À jeun, après les toilettes"],["💧","Avant de manger ou boire"],["⚖️","Toujours la même balance"],["😌","±0.5 kg = fluctuation normale"],["📸","Photo progrès 1× / 2 semaines"]].map(([i,t])=>`<div class="hint"><span>${i}</span><span>${t}</span></div>`).join("")}
  </div>`;
}
function svW(){
  const w=parseFloat(document.getElementById("iw").value);
  if(isNaN(w)||w<40||w>200){alert("Poids invalide");return;}
  const mg=parseFloat(document.getElementById("img").value),note=document.getElementById("inote").value.trim();
  entries=[...entries.filter(e=>e.date!==tday()),{date:tday(),weight:w,mg:isNaN(mg)?null:mg,note}].sort((a,b)=>a.date.localeCompare(b.date));
  sv("n:e",entries);
  ["iw","img","inote"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
  const b=document.getElementById("wbtn");b.textContent="✓ Pesée enregistrée !";b.classList.add("green");
  setTimeout(()=>{b.textContent="Enregistrer la pesée";b.classList.remove("green");},2200);
  toast("✓ PESÉE ENREGISTRÉE");
}

/* ══════════════════════ SÉANCE (with sets + timer + edit) ══════════════════════ */
function R_sess(){
  if(!sType){const d=new Date().getDay();sType=PLAN[d===0?6:d-1];}
  const exList=EX[sType]||[];
  // Init activeSets if needed
  if(!activeSets[sType]){
    activeSets[sType]={};
    exList.forEach((ex,i)=>{activeSets[sType][i]=[{reps:"",weight:"",done:false},{reps:"",weight:"",done:false},{reps:"",weight:"",done:false}];});
  }

  document.getElementById("app").innerHTML=`
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
    <div class="section-title" style="margin-bottom:0">🏋️ Séance</div>
    <button class="btn sm ghost" onclick="toggleEditMode()">${editMode?"✓ Terminer":"✏️ Modifier"}</button>
  </div>
  <div class="card" style="margin-bottom:12px">
    <span class="lbl">Type de séance</span>
    <div class="pills">
      ${Object.keys(EX).map(s=>`<button class="pill${s===sType?" on":""}" style="${s===sType?"background:"+TC[s]+";":""}" onclick="setST('${s}')">${s}</button>`).join("")}
    </div>
    <div style="font-size:11px;color:var(--muted)">Aujourd'hui : <strong style="color:${TC[todayP()]}">${todayP()}</strong></div>
  </div>

  ${editMode ? renderEditMode() : renderSetsMode(exList)}

  ${!editMode&&exList.length>0?`
  <div style="display:flex;gap:10px;margin-bottom:12px">
    <button class="btn ghost" style="flex:1" onclick="resetSets()">🔄 Reset séries</button>
    <button class="btn" style="flex:1" id="sbtn" onclick="svS()">Enregistrer 💾</button>
  </div>`:""}
  `;
}

function renderSetsMode(exList){
  if(exList.length===0) return `<div class="card" style="text-align:center;padding:24px"><div style="font-size:32px;margin-bottom:8px">🧘</div><div style="font-size:14px;font-weight:700">Repos actif</div><div style="font-size:12px;color:var(--muted);margin-top:4px">Marche 30–45 min · Mobilité · Étirements</div></div>`;
  const sets=activeSets[sType]||{};
  return exList.map((ex,i)=>{
    const exSets=sets[i]||[];
    const doneCount=exSets.filter(s=>s.done).length;
    return `
    <div class="ex-block">
      <div class="ex-block-title">
        <div>
          <div style="font-size:14px;font-weight:700;color:#0f172a">${ex}</div>
          <div style="font-size:10px;color:var(--muted);margin-top:2px">${doneCount}/${exSets.length} séries complétées</div>
        </div>
        <button class="btn sm" style="background:${TC[sType]}" onclick="addSet(${i})">+ Série</button>
      </div>
      <!-- Header -->
      <div style="display:grid;grid-template-columns:28px 1fr 1fr 1fr 32px;gap:6px;padding:0 0 6px;border-bottom:1px solid #e2e8f0;margin-bottom:6px">
        ${["#","Reps","Poids kg","Repos",""].map(h=>`<div style="font-size:8px;font-weight:700;letter-spacing:1.5px;color:var(--muted);text-transform:uppercase;text-align:center">${h}</div>`).join("")}
      </div>
      ${exSets.map((s,j)=>`
      <div class="set-row" id="sr-${i}-${j}">
        <div class="set-num ${s.done?"set-done":""}">${j+1}</div>
        <input class="inps" type="number" inputmode="numeric" value="${s.reps||""}" placeholder="—" onchange="updateSet(${i},${j},'reps',this.value)" style="width:100%">
        <input class="inps" type="number" inputmode="decimal" step="0.5" value="${s.weight||""}" placeholder="—" onchange="updateSet(${i},${j},'weight',this.value)" style="width:100%">
        <button onclick="launchTimer(${i},${j},'${ex.replace(/'/g,"\\'")}',90)" style="background:${s.done?"#f0fdf4":"#f1f5f9"};color:${s.done?"var(--green)":"var(--muted)"};border:none;border-radius:8px;padding:6px 4px;font-size:10px;font-weight:700;cursor:pointer;font-family:inherit;width:100%">⏱90s</button>
        <button class="set-check ${s.done?"done":"undone"}" onclick="toggleSet(${i},${j})">${s.done?"✓":"○"}</button>
      </div>`).join("")}
    </div>`;
  }).join("");
}

function renderEditMode(){
  const exList=EX[sType]||[];
  return `
  <div class="card">
    <span class="lbl">Modifier les exercices · ${sType}</span>
    <div id="edit-list">
      ${exList.map((ex,i)=>`
      <div class="edit-ex-row" id="edit-row-${i}">
        <input class="edit-ex-inp" value="${ex}" onchange="updateExName(${i},this.value)" placeholder="Nom de l'exercice">
        <button class="del-btn" onclick="deleteEx(${i})">🗑</button>
      </div>`).join("")}
    </div>
    <button class="btn ghost" onclick="addEx()" style="margin-top:10px">+ Ajouter un exercice</button>
    <button class="btn green" onclick="saveExercises()" style="margin-top:8px">✓ Sauvegarder les exercices</button>
  </div>`;
}

function toggleEditMode(){editMode=!editMode;R_sess();}
function updateExName(i,v){EX[sType][i]=v;}
function deleteEx(i){EX[sType].splice(i,1);sv("n:ex",EX);R_sess();}
function addEx(){EX[sType].push("Nouvel exercice");sv("n:ex",EX);R_sess();}
function saveExercises(){sv("n:ex",EX);editMode=false;activeSets[sType]={};R_sess();toast("✓ EXERCICES SAUVEGARDÉS");}

function addSet(exIdx){
  if(!activeSets[sType])activeSets[sType]={};
  if(!activeSets[sType][exIdx])activeSets[sType][exIdx]=[];
  activeSets[sType][exIdx].push({reps:"",weight:"",done:false});
  R_sess();
}
function updateSet(exIdx,setIdx,field,val){
  activeSets[sType][exIdx][setIdx][field]=val;
}
function toggleSet(exIdx,setIdx){
  const s=activeSets[sType][exIdx][setIdx];
  s.done=!s.done;
  const num=document.querySelector(`#sr-${exIdx}-${setIdx} .set-num`);
  const chk=document.querySelector(`#sr-${exIdx}-${setIdx} .set-check`);
  if(num){num.classList.toggle("set-done",s.done);}
  if(chk){chk.className="set-check "+(s.done?"done":"undone");chk.textContent=s.done?"✓":"○";}
  // Update counter
  const exSets=activeSets[sType][exIdx]||[];
  const block=document.querySelectorAll(".ex-block")[exIdx];
  if(block){const sub=block.querySelector(".ex-block-title .sub,div[style*='margin-top:2px']");if(sub)sub.textContent=`${exSets.filter(s=>s.done).length}/${exSets.length} séries complétées`;}
}
function launchTimer(exIdx,setIdx,exName,secs){
  startTimer(secs, exName, `Série ${setIdx+1} terminée — récupération`, ()=>{
    toast("⏱ REPOS TERMINÉ — Prochaine série !");
  });
}
function resetSets(){activeSets[sType]={};(EX[sType]||[]).forEach((ex,i)=>{activeSets[sType][i]=[{reps:"",weight:"",done:false},{reps:"",weight:"",done:false},{reps:"",weight:"",done:false}];});R_sess();}

function setST(t){sType=t;editMode=false;R_sess();}
function svS(){
  const exList=EX[sType]||[];
  const sets=activeSets[sType]||{};
  const ex=exList.map((name,i)=>{
    const s=sets[i]||[];
    return {name, sets:s.filter(s=>s.reps||s.weight).map(s=>({reps:s.reps,weight:s.weight,done:s.done}))};
  }).filter(e=>e.sets.length>0);
  sessions.push({date:tday(),type:sType,exercises:ex,note:""});
  sv("n:s",sessions);
  const b=document.getElementById("sbtn");
  if(b){b.textContent="✓ Séance enregistrée !";b.classList.add("green");setTimeout(()=>{b.textContent="Enregistrer 💾";b.classList.remove("green");},2200);}
  toast("✓ SÉANCE ENREGISTRÉE 💪");
}

/* ══════════════════════ MACROS ══════════════════════ */
function R_macro(){
  const mac=todayMacros(),fd=todayFoods();
  document.getElementById("app").innerHTML=`
  <div class="section-title">🥗 Macros du jour</div>

  <!-- Kcal big card -->
  <div class="banner" style="text-align:center;padding:20px">
    <div style="font-size:9px;font-weight:700;letter-spacing:2px;color:rgba(255,255,255,.65);margin-bottom:4px;text-transform:uppercase">Calories aujourd'hui</div>
    <div style="font-size:42px;font-weight:900;color:#fff;letter-spacing:-1px">${Math.round(mac.kcal)}</div>
    <div style="font-size:13px;color:rgba(255,255,255,.75);margin-top:2px">/ ${MACRO_TARGETS.kcal} kcal objectif</div>
    <div style="height:8px;background:rgba(255,255,255,.25);border-radius:99px;margin-top:14px;overflow:hidden">
      <div style="height:100%;width:${Math.min(100,Math.round((mac.kcal/MACRO_TARGETS.kcal)*100))}%;background:#fff;border-radius:99px;transition:width .8s"></div>
    </div>
  </div>

  <!-- Macro bars -->
  <div class="card">
    <span class="lbl">Macronutriments</span>
    ${[
      {lbl:"🥩 Protéines",v:mac.p,t:MACRO_TARGETS.p,c:"#FF6B35",unit:"g"},
      {lbl:"🍚 Glucides",v:mac.g,t:MACRO_TARGETS.g,c:"#FF9500",unit:"g"},
      {lbl:"🥑 Lipides",v:mac.l,t:MACRO_TARGETS.l,c:"#5856D6",unit:"g"},
    ].map(m=>{
      const p=Math.min(100,Math.round((m.v/m.t)*100));
      const over=m.v>m.t;
      return `
      <div class="macro-bar-wrap">
        <div class="macro-bar-row">
          <span style="font-size:13px;font-weight:600;color:var(--text)">${m.lbl}</span>
          <span style="font-size:13px;font-weight:800;color:${over?"#ef4444":m.c}">${Math.round(m.v)} / ${m.t}${m.unit} ${over?"⚠️":""}</span>
        </div>
        <div class="macro-bar-bg">
          <div class="macro-bar-fill" style="width:${p}%;background:${m.c}"></div>
        </div>
        <div style="font-size:10px;color:var(--muted);margin-top:3px">${p}% atteint · reste ${Math.max(0,m.t-Math.round(m.v))}${m.unit}</div>
      </div>`;
    }).join("")}
  </div>

  <!-- Add food -->
  <div class="card">
    <span class="lbl">Ajouter un aliment</span>
    <div class="field"><div class="field-lbl">Nom</div><input class="inp" id="fn" placeholder="ex : Poulet grillé 150g" type="text"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;margin-bottom:12px">
      ${[["Kcal","fkcal","numeric"],["Prot. g","fp","decimal"],["Gluc. g","fg","decimal"],["Lip. g","fl","decimal"]].map(([l,id,mode])=>`
      <div><div class="field-lbl" style="text-align:center">${l}</div><input class="inps" style="width:100%" type="number" id="${id}" inputmode="${mode}" placeholder="0"></div>`).join("")}
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn ghost" onclick="addQuickFood('Whey 30g',120,25,4,2)" style="flex:1;font-size:11px">🥤 Whey</button>
      <button class="btn ghost" onclick="addQuickFood('Poulet 150g',165,31,0,3.6)" style="flex:1;font-size:11px">🍗 Poulet</button>
      <button class="btn ghost" onclick="addQuickFood('Riz cuit 150g',174,3.5,38,0.3)" style="flex:1;font-size:11px">🍚 Riz</button>
    </div>
    <button class="btn" onclick="addFood()" style="margin-top:10px">+ Ajouter</button>
  </div>

  <!-- Food list -->
  ${fd.length>0?`
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <span class="lbl" style="margin-bottom:0">Aliments enregistrés</span>
      <button class="btn sm ghost" onclick="clearFoods()">Tout effacer</button>
    </div>
    ${fd.map((f,i)=>`
    <div class="food-row">
      <div class="food-name">${f.name}</div>
      <div class="food-macros">${f.kcal}kcal · P${f.p}g · G${f.g}g · L${f.l}g</div>
      <button class="food-del" onclick="delFood(${i})">✕</button>
    </div>`).join("")}
  </div>`:""}
  `;
}

function addFood(){
  const name=document.getElementById("fn").value.trim();
  if(!name){alert("Donne un nom à l'aliment");return;}
  const kcal=parseFloat(document.getElementById("fkcal").value)||0;
  const p=parseFloat(document.getElementById("fp").value)||0;
  const g=parseFloat(document.getElementById("fg").value)||0;
  const l=parseFloat(document.getElementById("fl").value)||0;
  const d=tday();
  if(!foods[d])foods[d]=[];
  foods[d].push({name,kcal,p,g,l});
  sv("n:f",foods);
  toast("✓ ALIMENT AJOUTÉ");
  R_macro();
}
function addQuickFood(name,kcal,p,g,l){
  const d=tday();
  if(!foods[d])foods[d]=[];
  foods[d].push({name,kcal,p,g,l});
  sv("n:f",foods);
  toast(`✓ ${name} ajouté`);
  R_macro();
}
function delFood(i){
  const d=tday();
  if(foods[d]){foods[d].splice(i,1);sv("n:f",foods);R_macro();}
}
function clearFoods(){
  if(confirm("Effacer tous les aliments d'aujourd'hui ?")){
    foods[tday()]=[];sv("n:f",foods);R_macro();
  }
}

/* ══════════════════════ AI COACH ══════════════════════ */
const COACH_SYS=`Tu es le coach personnel de Nicolas, expert en recomposition corporelle et nutrition sportive.
PROFIL NICOLAS:
- Taille: 192cm, Poids départ: 87.05kg, MG départ: 16%
- Objectif: 10-12% MG + masse musculaire maximale pour le 2 juillet 2026
- Programme: PPL x2 (6 jours/semaine), 16 semaines depuis le 10 mars 2026
- Nutrition: ~2700 kcal/jour, 200g protéines, 275g glucides, 77g lipides
- Suppléments: Whey, Caséine, Créatine 5g/j, Oméga-3, Magnésium, Vit D3+K2
- Séances PUSH: Développé couché haltères, Développé couché incliné barre, Pecs machine, Triceps cordes, Dips

Tu réponds toujours en français, de façon précise, motivante et personnalisée. Tu rappelles les points clés du programme quand c'est pertinent. Sois direct et concis sur mobile.`;

function R_coach(){
  document.getElementById("app").innerHTML=`
  <div id="chat-wrap">
    <div id="chat-msgs">
      ${chatHist.length===0?`
      <div style="padding:20px 0;text-align:center">
        <div style="font-size:36px;margin-bottom:10px">🤖</div>
        <div style="font-size:15px;font-weight:700;margin-bottom:6px">Coach IA · Nicolas</div>
        <div style="font-size:12px;color:var(--muted);max-width:260px;margin:0 auto;line-height:1.6">Pose-moi n'importe quelle question sur ta nutrition, tes séances, ta récupération ou ta progression.</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding:0 0 14px">
        ${["Optimise ma nutrition post-workout","Comment améliorer mon squat ?","Que manger avant de dormir ?","Analyse ma progression"].map(q=>`
        <button onclick="quickQ(this.textContent)" style="background:#fff;border:1.5px solid var(--border);border-radius:20px;padding:8px 14px;font-size:12px;color:var(--sub);font-weight:600;cursor:pointer;font-family:inherit">${q}</button>`).join("")}
      </div>`:
      chatHist.map(m=>renderMsg(m)).join("")}
    </div>
    <div id="chat-inp-wrap">
      <textarea id="chat-inp" rows="1" placeholder="Pose ta question…" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();sendMsg();}"></textarea>
      <button id="chat-send" onclick="sendMsg()">↑</button>
    </div>
  </div>
  `;
  const msgs=document.getElementById("chat-msgs");
  if(msgs)msgs.scrollTop=msgs.scrollHeight;
}

function renderMsg(m){
  return `<div class="msg ${m.role==="user"?"user":"ai"}">
    <div class="msg-av ${m.role==="user"?"user-av":"ai-av"}">${m.role==="user"?"👤":"🤖"}</div>
    <div class="msg-bubble">${m.content.replace(/\n/g,"<br>")}</div>
  </div>`;
}

async function sendMsg(){
  const inp=document.getElementById("chat-inp");
  const txt=inp?inp.value.trim():"";
  if(!txt)return;
  inp.value="";
  chatHist.push({role:"user",content:txt});
  const msgs=document.getElementById("chat-msgs");
  if(msgs){
    msgs.insertAdjacentHTML("beforeend",renderMsg({role:"user",content:txt}));
    msgs.insertAdjacentHTML("beforeend",`<div class="msg ai" id="typing-ind"><div class="msg-av ai-av">🤖</div><div class="typing"><span></span><span></span><span></span></div></div>`);
    msgs.scrollTop=msgs.scrollHeight;
  }
  document.getElementById("chat-send").disabled=true;
  try{
    const res=await fetch("/.netlify/functions/coach",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        system:COACH_SYS,
        messages:chatHist.map(m=>({role:m.role,content:m.content}))
      })
    });
    const data=await res.json();
    const reply=data.content?.[0]?.text||"Désolé, je n'ai pas pu répondre. Réessaie.";
    chatHist.push({role:"assistant",content:reply});
    const ti=document.getElementById("typing-ind");if(ti)ti.remove();
    if(msgs){msgs.insertAdjacentHTML("beforeend",renderMsg({role:"assistant",content:reply}));msgs.scrollTop=msgs.scrollHeight;}
  }catch(e){
    const ti=document.getElementById("typing-ind");if(ti)ti.remove();
    const errMsg="Erreur de connexion. Vérifie ta connexion internet.";
    chatHist.push({role:"assistant",content:errMsg});
    if(msgs){msgs.insertAdjacentHTML("beforeend",renderMsg({role:"assistant",content:errMsg}));msgs.scrollTop=msgs.scrollHeight;}
  }
  document.getElementById("chat-send").disabled=false;
}
function quickQ(q){const inp=document.getElementById("chat-inp");if(inp){inp.value=q;sendMsg();}}

/* ══════════════════════ PROGRÈS ══════════════════════ */
function R_prog(){
  if(!entries.length){
    document.getElementById("app").innerHTML=`
    <div class="section-title">📈 Progrès</div>
    <div class="card" style="text-align:center;padding:40px 20px">
      <div style="font-size:40px;margin-bottom:12px">📊</div>
      <div style="font-size:15px;font-weight:700;margin-bottom:6px">Aucune pesée encore</div>
      <button class="btn" onclick="go('log')" style="margin-top:14px;width:auto;padding:12px 24px">Ma première pesée</button>
    </div>`;return;
  }
  const lat=entries[entries.length-1],dW=lat.weight-SW,dM=(lat.mg??SMG)-SMG,hasMG=entries.some(e=>e.mg);
  document.getElementById("app").innerHTML=`
  <div class="section-title">📈 Progrès</div>
  <div class="g2">
    <div class="card" style="border-top:3px solid var(--red)">
      <span class="lbl">Poids</span>
      <div class="big" style="color:var(--red)">${fmt(lat.weight)}<span class="unit"> kg</span></div>
      <div class="badge" style="margin-top:6px;background:${dW<0?"#fff7f4":"#f1f5f9"};color:${dW<0?"var(--red)":"var(--muted)"}">${dW<0?"−"+fmt(Math.abs(dW)):"+"+fmt(dW)} kg</div>
    </div>
    <div class="card" style="border-top:3px solid var(--orange)">
      <span class="lbl">Masse grasse</span>
      <div class="big" style="color:var(--orange)">${fmt(lat.mg??SMG)}<span class="unit"> %</span></div>
      <div class="badge" style="margin-top:6px;background:${dM<0?"#fff9f0":"#f1f5f9"};color:${dM<0?"var(--orange)":"var(--muted)"}">${dM<0?"−"+fmt(Math.abs(dM)):"+"+fmt(dM)}%</div>
    </div>
  </div>
  <div class="card"><span class="lbl">Évolution du poids (kg)</span><canvas class="chart" id="cw"></canvas></div>
  ${hasMG?`<div class="card"><span class="lbl">Masse grasse (%)</span><canvas class="chart" id="cmg"></canvas></div>`:""}
  <div class="card">
    <span class="lbl">Historique</span>
    <div style="overflow-x:auto">
      <table class="tbl">
        <thead><tr><th>Date</th><th>Poids</th><th>Δ</th><th>MG</th><th>Note</th></tr></thead>
        <tbody>${[...entries].reverse().map((e,i,arr)=>{const prev=arr[i+1],d=prev?e.weight-prev.weight:null;return`
          <tr><td style="color:var(--sub)">${e.date.slice(5)}</td><td style="font-weight:800">${fmt(e.weight)}</td>
          <td style="font-weight:700;color:${d===null?"var(--muted)":d<0?"var(--green)":"var(--red)"}">${d===null?"—":(d>0?"+":"")+d.toFixed(2)}</td>
          <td style="color:var(--orange)">${e.mg?fmt(e.mg)+"%":"—"}</td>
          <td style="color:var(--muted);font-size:10px">${e.note||"—"}</td></tr>`;}).join("")}
        </tbody>
      </table>
    </div>
  </div>`;
  requestAnimationFrame(()=>{
    const wD=entries.map(e=>({x:e.date.slice(5),y:e.weight}));
    const mn=Math.min(...wD.map(d=>d.y))-.5,mx=Math.max(...wD.map(d=>d.y))+.5;
    drawChart("cw",wD,"#FF6B35",[{val:SW,col:"rgba(255,107,53,.3)"},{val:82,col:"rgba(52,199,89,.4)"}],mn,mx);
    if(hasMG){const mD=entries.filter(e=>e.mg).map(e=>({x:e.date.slice(5),y:e.mg}));drawChart("cmg",mD,"#FF9500",[{val:12,col:"rgba(52,199,89,.45)"},{val:SMG,col:"rgba(255,107,53,.3)"}],8,20);}
  });
}

/* ══════════════════════ HISTORIQUE ══════════════════════ */
function R_hist(){
  if(!sessions.length){
    document.getElementById("app").innerHTML=`
    <div class="section-title">📋 Historique</div>
    <div class="card" style="text-align:center;padding:40px 20px">
      <div style="font-size:40px;margin-bottom:12px">🏋️</div>
      <div style="font-size:15px;font-weight:700;margin-bottom:6px">Aucune séance encore</div>
      <button class="btn" onclick="go('sess')" style="margin-top:14px;width:auto;padding:12px 24px">Ma première séance</button>
    </div>`;return;
  }
  const thisWeek=sessions.filter(s=>(new Date()-new Date(s.date))<7*864e5).length;
  const streak=(()=>{let c=0;for(let i=0;i<14;i++){const d=new Date(Date.now()-i*864e5).toISOString().slice(0,10);if(sessions.some(s=>s.date===d&&s.type!=="REPOS"))c++;else break;}return c;})();
  document.getElementById("app").innerHTML=`
  <div class="section-title">📋 Historique</div>
  <div class="g3">
    ${[{l:"Total",v:sessions.length,c:"var(--red)"},{l:"Ce sem.",v:thisWeek,c:"var(--blue)"},{l:"Streak",v:streak+"j",c:"var(--green)"}].map(s=>`
    <div class="stat-sm"><span class="lbl">${s.l}</span><div style="font-size:24px;font-weight:900;color:${s.c}">${s.v}</div></div>`).join("")}
  </div>
  ${[...sessions].reverse().map(s=>`
  <div class="sess-card" style="border-left-color:${TC[s.type]||"var(--red)"}">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:${s.exercises?.length?"9px":"0"}">
      <span style="color:${TC[s.type]||"var(--red)"};font-weight:800;font-size:14px">${s.type}</span>
      <span style="color:var(--muted);font-size:10px">${s.date}</span>
    </div>
    ${(s.exercises||[]).map(ex=>`
    <div style="margin-bottom:7px">
      <div style="font-size:12px;font-weight:700;color:#334155;margin-bottom:3px">${ex.name}</div>
      ${(ex.sets||[]).map((set,j)=>`
      <div style="display:flex;gap:8px;padding:2px 0;font-size:11px;color:var(--muted);font-family:monospace">
        <span style="color:var(--muted)">Série ${j+1}</span>
        <span style="color:var(--text)">${set.reps||"—"} reps × ${set.weight||"—"} kg</span>
        ${set.done?`<span style="color:var(--green)">✓</span>`:`<span style="color:#f87171">✗</span>`}
      </div>`).join("")}
    </div>`).join("")}
    ${s.note?`<div style="margin-top:7px;font-size:11px;color:var(--sub);font-style:italic">"${s.note}"</div>`:""}
  </div>`).join("")}
  `;
}

const R={dash:R_dash,log:R_log,sess:R_sess,macro:R_macro,coach:R_coach,prog:R_prog,hist:R_hist};
updateHeader(); R_dash();
</script>
</body>
</html>
