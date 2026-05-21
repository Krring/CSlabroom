// Aj. Kring Labroom — KU_KPS — Shared Data & Utilities

const LAB = { name: 'Aj. Kring Labroom', sub: 'KU_KPS · Kasetsart University' };

const USERS = {
  advisor: { name:'อ.ฉัตรสุดา จีระพันธุ', role:'หัวหน้าแล็บ', level:'admin', av:'ฉจ', avbg:'#e6f1fb', avc:'#0c447c', pass:'854545' },
  ra1:     { name:'มินตรา ช่วยดี',        role:'ผู้ช่วยวิจัย',  level:'ra',    av:'มช', avbg:'#e1f5ee', avc:'#0f6e56', pass:'1234' },
  ra2:     { name:'ธนกฤต ขยันมาก',       role:'นิสิต ป.โท',   level:'master', av:'ธข', avbg:'#eeedfe', avc:'#534ab7', pass:'1234' },
  ra3:     { name:'ปาริชาติ ใฝ่รู้',      role:'นิสิต ป.เอก',  level:'phd',   av:'ปร', avbg:'#faeeda', avc:'#854f0b', pass:'1234' }
};

const KEYS = {
  session: 'kring_session',
  notebook: uid => 'kring_nb_'+uid,
  plans:    uid => 'kring_plans_'+uid,
  thesis:   uid => 'kring_thesis_'+uid,
  tasks:    'kring_tasks',
  finance:  'kring_finance',
  chem:     'kring_chem',
  pending:  'kring_pending',
  members:  'kring_members',
  notifs:   'kring_notifs',
};

function getSession()  { try { return JSON.parse(localStorage.getItem(KEYS.session)); } catch { return null; } }
function setSession(u) { localStorage.setItem(KEYS.session, JSON.stringify({uid:u,time:Date.now()})); }
function clearSession(){ localStorage.removeItem(KEYS.session); }
function requireLogin(adminOnly){ const s=getSession(); if(!s){location.href='index.html';return null;} if(adminOnly&&USERS[s.uid]?.level!=='admin'){location.href='dashboard.html';return null;} return s.uid; }
function load(k,d=[]){ try{return JSON.parse(localStorage.getItem(k))??d;}catch{return d;} }
function save(k,v){ localStorage.setItem(k,JSON.stringify(v)); }
function fmt(n){ return Number(n).toLocaleString('th-TH'); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function nowTH(){ const n=new Date(); return n.toLocaleDateString('th-TH',{day:'2-digit',month:'2-digit',year:'numeric'})+' '+n.toLocaleTimeString('th-TH',{hour:'2-digit',minute:'2-digit'}); }
function showToast(msg){ let t=document.getElementById('_toast'); if(!t){t=document.createElement('div');t.id='_toast';t.style.cssText='position:fixed;bottom:20px;right:20px;padding:9px 16px;border-radius:8px;font-size:13px;font-family:Karla,sans-serif;background:#1a1a18;color:#fff;display:none;align-items:center;gap:8px;z-index:9999;';document.body.appendChild(t);} t.innerHTML='<i class="ti ti-check"></i> '+msg; t.style.display='flex'; setTimeout(()=>t.style.display='none',2500); }
const LOGO_SVG=`<svg width="32" height="32" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#F1EFE8"/><rect x="19" y="14" width="10" height="10" rx="3" fill="#F5C4B3"/><rect x="19" y="13" width="10" height="4" rx="2" fill="#444441"/><rect x="18" y="14" width="3" height="5" rx="1" fill="#444441"/><rect x="21" y="18" width="2" height="2" rx="1" fill="#2C2C2A"/><rect x="25" y="18" width="2" height="2" rx="1" fill="#2C2C2A"/><rect x="22" y="21" width="4" height="1" rx="0.5" fill="#993C1D"/><rect x="16" y="24" width="16" height="12" rx="2" fill="#1D9E75"/><rect x="15" y="24" width="4" height="10" rx="1" fill="#fff"/><rect x="29" y="24" width="4" height="10" rx="1" fill="#fff"/><rect x="18" y="35" width="4" height="5" rx="1" fill="#185FA5"/><rect x="26" y="35" width="4" height="5" rx="1" fill="#185FA5"/><rect x="17" y="38" width="5" height="3" rx="1" fill="#2C2C2A"/><rect x="25" y="38" width="5" height="3" rx="1" fill="#2C2C2A"/></svg>`;
