'use strict';
/* ==========================================================
   Dilbaz — İngilizce öğrenme uygulaması
   Tamamen istemci tarafında çalışır; ilerleme localStorage'da tutulur.
   ========================================================== */

// ---------- Yardımcılar ----------
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
// Türkçe karşılıkları birbirinden farklı olan n kelime seç
const distinctWords = (list, n, w) => {
  const seen = new Set([firstTr(w.tr)]), out = [];
  for (const o of shuffle(list)) {
    const k = firstTr(o.tr);
    if (o.en === w.en || seen.has(k)) continue;
    seen.add(k); out.push(o);
    if (out.length === n) break;
  }
  return out;
};
const pickOne = a => a[Math.floor(Math.random() * a.length)];
const firstTr = s => s.split('/')[0].trim();
const altsOf = s => s.split('/').map(x => x.trim());
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const LPU = 4; // ünite başına ders
const TOTAL_LESSONS = UNITS.length * LPU;
const STORE_KEY = 'dilbaz-v1';
const PRAISE = ['Harika!', 'Mükemmel!', 'Süper!', 'Aferin!', 'Çok iyi!', 'Tam isabet!'];
const DAYS_TR = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
const KEEP_CASE = new Set(['I', 'Ali', 'Turkey', 'Monday', 'Friday', 'Türkiyeliyim', "Türkiye'denim",
  'Mr', 'Brown', 'Bay', 'London', "Londra'ya", "Londra'da", 'English', 'İngilizce', 'İngilizceyi', 'Spanish', 'İspanyolca', 'Antalya', "Antalya'ya", 'Sarah', 'Izmir', 'Turkish', 'Türk',
  'Elif', 'Ankara', 'TV', 'May', 'Sunday', 'Germany', "Almanya'ya", "İzmir'e", 'Wi-Fi', 'ATM', 'Italy', "İtalya'ya", "İtalya'da", 'Bayram', 'New', 'Year', 'Thursday']);
const keepCase = t => KEEP_CASE.has(t) || /^I'/.test(t);
UNITS.forEach(u => { u.level = u.level || 'A1'; u.dialogs = u.dialogs || []; });
const LEVEL_NUM = { A1: 1, A2: 2, B1: 3 };
const sectionOfUnit = ui => SECTIONS.findIndex(s => s.level === UNITS[ui].level);
const sectionStartUnit = si => UNITS.findIndex(u => u.level === SECTIONS[si].level);
const lessonNames = ui => UNITS[ui].level === 'A1' ? LESSON_NAMES : ['Kelimeler ve kalıplar', 'Cümleler', 'Gerçek diyaloglar', 'Ünite tekrarı'];
const lessonXp = (ui, li) => (UNITS[ui].level === 'A1' ? 10 : UNITS[ui].level === 'A2' ? 15 : 20) + (li === LPU - 1 ? 5 : 0);

// ---------- İkonlar ----------
const ICON = {
  speaker: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 4V5L7 9H3z"/><path d="M15.5 8.5a5 5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M18 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  turtle: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="11" cy="13" rx="7" ry="5"/><circle cx="19.5" cy="12" r="2.5"/><rect x="5" y="16" width="3" height="4" rx="1.5"/><rect x="13" y="16" width="3" height="4" rx="1.5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.5L12 17.3l-5.9 3.2 1.3-6.5L2.5 9.4l6.6-.8z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5 10-11"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2.6"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v6a5 5 0 0 1-10 0z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="10.5" y="13" width="3" height="4"/><rect x="7" y="17" width="10" height="3" rx="1.5"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-9.6-9.4C.9 8.1 3 4 6.9 4c2.2 0 3.7 1.2 5.1 3 1.4-1.8 2.9-3 5.1-3C21 4 23.1 8.1 21.6 11.6 19.5 16.4 12 21 12 21z"/></svg>',
  fire: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 3.5 5.5 6 5.5 11a5.5 5.5 0 0 1-11 0c0-2.4 1.2-4 2.4-5.2.2 1.7.9 2.8 2.1 3.4C10.5 8 11 5 12 2z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2L4 13.5h6.5L9.5 22 20 9.5h-6.6z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/><path d="M9 7h6"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.9l10-6.5a1 1 0 0 0 0-1.7l-10-6.6A1 1 0 0 0 8 5.5z"/></svg>',
  replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',
  guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V4.5c-3-.5-6 0-8 1.5z"/><path d="M12 6v14.5"/></svg>',
};

// Yüzde halkası (SVG)
function ring(pct, size = 120, stroke = 12, inner = '') {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - clamp(pct, 0, 100) / 100);
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="var(--ring-bg)" stroke-width="${stroke}"/>
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="url(#ringGrad)" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
    <defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--brand-2)"/><stop offset="1" stop-color="var(--brand)"/></linearGradient></defs></svg>
    <div class="ring-in">${inner}</div></div>`;
}

// Ünite kartının üstündeki resimli sahne
const ART_SPOTS = [[10, 18, 30, -12], [74, 14, 34, 10], [84, 58, 26, -6], [16, 62, 24, 14], [48, 70, 22, 0]];
function unitArt(u, locked) {
  const decor = u.words.filter(w => w.emoji).slice(0, 5).map((w, i) => {
    const [x, y, sz, rot] = ART_SPOTS[i];
    return `<span class="ua-e" style="left:${x}%;top:${y}%;font-size:${sz}px;transform:rotate(${rot}deg)">${w.emoji}</span>`;
  }).join('');
  return `<div class="uart ${locked ? 'locked' : ''}" style="--u:${u.color}">
    <span class="ua-blob b1"></span><span class="ua-blob b2"></span>${decor}<span class="ua-main">${u.icon}</span></div>`;
}

// Cümledeki kelimelerin emojilerinden küçük bir sahne
function scene(e) {
  const em = [...new Set((e.words || []).map(w => (findWord(w) || {}).emoji).filter(Boolean))].slice(0, 4);
  return em.length ? `<div class="scene">${em.map(x => `<span>${x}</span>`).join('')}</div>` : '';
}

// Özgün maskot: "Pıtır" — petrol yeşili bir konuşma balonu
function mascot(mood = 'happy', cls = '') {
  const mouth = {
    happy: '<path d="M46 64q14 13 28 0" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>',
    sad: '<path d="M47 71q13-10 26 0" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>',
    wow: '<ellipse cx="60" cy="68" rx="7" ry="8" fill="#13233F"/>',
    calm: '<path d="M50 66h20" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>',
  }[mood] || '';
  return `<svg class="mascot ${cls}" viewBox="0 0 120 120" aria-hidden="true">
    <path d="M22 14H98A16 16 0 0 1 114 30V74A16 16 0 0 1 98 90H56L36 108V90H22A16 16 0 0 1 6 74V30A16 16 0 0 1 22 14Z" fill="#0E9F8B"/>
    <path d="M22 14H98A16 16 0 0 1 114 30V40C80 30 40 30 6 40V30A16 16 0 0 1 22 14Z" fill="#3FD3BE" opacity=".5"/>
    <g class="eye"><circle cx="43" cy="46" r="11" fill="#fff"/><circle cx="45" cy="48" r="5.5" fill="#13233F"/><circle cx="47" cy="45.5" r="1.8" fill="#fff"/></g>
    <g class="eye"><circle cx="77" cy="46" r="11" fill="#fff"/><circle cx="79" cy="48" r="5.5" fill="#13233F"/><circle cx="81" cy="45.5" r="1.8" fill="#fff"/></g>
    <circle cx="30" cy="64" r="6" fill="#FF7A59" opacity=".75"/><circle cx="90" cy="64" r="6" fill="#FF7A59" opacity=".75"/>
    ${mouth}
  </svg>`;
}

// ---------- Durum (state) ----------
const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const daysAgoKey = n => { const d = new Date(); d.setDate(d.getDate() - n); return dayKey(d); };

const defaultState = () => ({
  name: 'Öğrenci', xp: 0, streak: 0, bestStreak: 0, lastActive: null,
  progress: 0, completed: {}, lessonsDone: 0,
  words: {}, daily: {}, goal: 30,
  sound: true, theme: 'auto',
  achievements: {}, tab: 'learn', onboarded: false, placement: null,
  srs: {}, mistakes: {},
});

let S = load();
migrateLayout();

// Üniteler eklendiğinde/yer değiştirdiğinde ilerlemeyi ünite adına göre yeni sıraya taşır
function migrateLayout() {
  const OLD_ORDER = ['Selamlaşma', 'Tanışma', 'Aile', 'Yiyecek ve İçecek', 'Renkler ve Sayılar', 'Hayvanlar', 'Günlük Rutin', 'Şehirde', 'Zaman ve Günler', 'Duygular ve Hava',
    'Alışveriş', 'Restoranda', 'Seyahat', 'Geçmişte Ne Yaptın?', 'Doktorda', 'Hobiler', 'Gelecek Planları', 'İş Hayatı',
    'Telefonda', 'Fikrini Söyle', 'Rica ve Öneri', 'Deneyimler', 'Sorunlar ve Şikayetler', 'Sohbet', 'Hayaller ve Şartlar'];
  const now = UNITS.map(u => u.title);
  const old = S.layout || OLD_ORDER;
  if (old.join('|') === now.join('|')) return;
  const map = g => {
    const oi = Math.floor(g / LPU);
    if (oi >= old.length) {
      const lastNew = Math.max(...old.map(t => now.indexOf(t)));
      return (lastNew + 1) * LPU;
    }
    const ni = now.indexOf(old[oi]);
    return ni < 0 ? g : ni * LPU + (g % LPU);
  };
  if (S.progress > 0) S.progress = map(S.progress);
  const completed = {};
  Object.entries(S.completed || {}).forEach(([g, n]) => { completed[map(+g)] = n; });
  S.completed = completed;
  S.layout = now;
  save();
}
function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { /* depolama yok */ }
  return defaultState();
}
function save() { S.layout = UNITS.map(u => u.title); try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* yoksay */ } }

function checkStreak() {
  if (S.lastActive && S.lastActive !== dayKey() && S.lastActive !== daysAgoKey(1) && S.streak) {
    S.streak = 0; save();
  }
}
const todayXp = () => S.daily[dayKey()] || 0;
const wordsLearned = () => Object.values(S.words).filter(w => w.c > 0).length;
// ---------- Aralıklı tekrar (Leitner kutuları) ----------
// Kutu 0–5; doğru cevap kelimeyi bir üst kutuya taşır (günde en fazla bir kez),
// yanlış cevap en başa döndürür. Tekrar aralıkları gün cinsinden:
const SRS_DAYS = [0, 1, 3, 7, 14, 30];
const dayNum = (d = new Date()) => Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
function srsUpdate(en, ok) {
  const k = en.toLowerCase(), today = dayNum();
  const c = S.srs[k] || { b: 0, d: today, l: -1 };
  if (ok) {
    if (c.l !== today) c.b = Math.min(5, c.b + 1);
    c.d = today + SRS_DAYS[Math.max(1, c.b)];
  } else {
    c.b = 0; c.d = today;
  }
  c.l = today;
  S.srs[k] = c;
}
function srsOf(en) {
  const k = en.toLowerCase();
  if (S.srs[k]) return S.srs[k];
  // Eski kayıtlar: görülmüş ama tekrar bilgisi olmayan kelimeler bugün tekrar edilir
  return S.words[k] ? { b: 1, d: dayNum(), l: -1 } : null;
}
function dueWords() {
  const today = dayNum();
  return learnedContent().words.filter(w => { const c = srsOf(w.en); return c && c.d <= today; })
    .sort((a, b) => srsOf(a.en).d - srsOf(b.en).d);
}
function dueLabel(en) {
  const c = srsOf(en);
  if (!c) return '';
  const diff = c.d - dayNum();
  return diff <= 0 ? 'bugün' : diff === 1 ? 'yarın' : `${diff} gün sonra`;
}
function strength(en) {
  const c = srsOf(en);
  if (!c) return 0;
  return [1, 1, 2, 3, 4, 4][c.b];
}

// ---------- Hata defteri ----------
function recordMistake(src, why) {
  const k = norm(src.en, 'en');
  const m = S.mistakes[k] || { ...src, fix: 0, n: 0 };
  m.n++; m.fix = 0; m.t = Date.now();
  if (why) m.why = why.replace(/^💡\s*/, '');
  S.mistakes[k] = m;
}
const mistakeList = () => Object.values(S.mistakes).sort((a, b) => b.t - a.t);
function applyTheme() {
  if (S.theme === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', S.theme);
}

// ---------- Ses ----------
let actx = null;
function beep(notes, type = 'sine', vol = 0.12) {
  if (!S.sound) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    let t = actx.currentTime;
    notes.forEach(([f, d]) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
      o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t + d);
      t += d * 0.75;
    });
  } catch (e) { /* ses desteklenmiyor */ }
}
const sfx = {
  ok: () => beep([[784, .12], [1175, .22]]),
  bad: () => beep([[220, .16], [175, .26]], 'triangle', .16),
  tap: () => beep([[520, .05]], 'sine', .05),
  win: () => beep([[523, .14], [659, .14], [784, .14], [1047, .4]]),
};

let voices = [];
function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  voices = speechSynthesis.getVoices().filter(v => /^en(-|_)/i.test(v.lang));
}
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function speak(text, slow = false) {
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = slow ? 0.55 : 0.92;
    const v = voices.find(v => /en-US/i.test(v.lang) && /natural|google|samantha|aria|jenny/i.test(v.name)) || voices.find(v => /en-US/i.test(v.lang)) || voices[0];
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) { /* yoksay */ }
}
const LISTEN_TYPES = ['listen', 'listenPick', 'listenWord'];

// ---------- Metin karşılaştırma ----------
// İngilizce kısaltmaları açar: "I'm" = "I am", "don't" = "do not" gibi
const CONTRACTIONS = [
  [/\bcan't\b/g, 'can not'], [/\bcannot\b/g, 'can not'], [/\bwon't\b/g, 'will not'], [/\bshan't\b/g, 'shall not'],
  [/\b(\w+)n't\b/g, '$1 not'], [/\bi'm\b/g, 'i am'], [/\blet's\b/g, 'let us'],
  [/\b(you|we|they|who|what)'re\b/g, '$1 are'],
  [/\b(he|she|it|that|what|there|here|who|where|how)'s\b/g, '$1 is'],
  [/\b(\w+)'ll\b/g, '$1 will'], [/\b(\w+)'ve\b/g, '$1 have'], [/\b(i|you|he|she|we|they)'d\b/g, '$1 would'],
  [/\bmr\b/g, 'mr'], [/\bfavor\b/g, 'favour'], [/\bneighbor\b/g, 'neighbour'], [/\bok\b/g, 'okay'],
];
function norm(s, lang) {
  let t = String(s).replace(/[’`´]/g, "'");
  t = lang === 'tr' ? t.toLocaleLowerCase('tr-TR') : t.toLowerCase();
  if (lang !== 'tr') CONTRACTIONS.forEach(([re, rep]) => { t = t.replace(re, rep); });
  t = t.replace(/[.,!?;:"'¿¡\-]/g, ' ');
  return t.replace(/\s+/g, ' ').trim();
}
// Kesme işaretlerini tamamen silerek karşılaştırma ("dont" = "don't")
const loose = s => s.replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u').replace(/â/g, 'a');
const exactMatch = (input, answers, lang) => answers.some(a => norm(a, lang) === norm(input, lang));
const tokens = s => s.replace(/[.,!?;:"]/g, '').split(/\s+/).filter(Boolean);
function tileTokens(s, lang) {
  return tokens(s).map((t, i) => (i === 0 && !keepCase(t))
    ? t.charAt(0).toLocaleLowerCase(lang === 'tr' ? 'tr-TR' : 'en-US') + t.slice(1) : t);
}
function wordsIn(sentence, pool) {
  const n = ' ' + norm(sentence, 'en') + ' ';
  return pool.filter(w => n.includes(' ' + norm(w.en, 'en') + ' ')).map(w => w.en);
}

// ---------- Egzersiz üretimi ----------
const unitOf = g => Math.floor(g / LPU);
const allWords = () => UNITS.flatMap(u => u.words);

function lessonContent(ui, li) {
  const u = UNITS[ui], d = u.dialogs;
  if (li === 0) return { words: u.words.slice(0, 5), sents: u.sentences.slice(0, 3), dialogs: d.slice(0, 2) };
  if (li === 1) return { words: u.words.slice(5, 10), sents: u.sentences.slice(3, 6), dialogs: d.slice(2, 4) };
  if (li === 2) return { words: u.words, sents: u.sentences.slice(6).concat(u.sentences.slice(0, 2)), dialogs: d };
  return { words: u.words, sents: u.sentences, dialogs: d };
}
const allDialogs = () => UNITS.flatMap(u => u.dialogs);
const allSentences = () => UNITS.flatMap(u => u.sentences);

// Bir cümlenin dilbilgisi, kelime ya da kelime sırası bozulmuş "tuzak" versiyonlarını
// üretir. Her tuzak, neden yanlış olduğunu anlatan bir açıklamayla birlikte gelir.
const GRAMMAR_FLIP = { is: 'are', are: 'is', am: 'is', do: 'does', does: 'do', has: 'have', have: 'has', was: 'were', were: 'was', an: 'a', a: 'an', in: 'on', on: 'in', at: 'in', to: 'at', my: 'your', your: 'my', will: 'did', did: 'will', this: 'these', these: 'this' };
const FLIP_WHY = [
  [['is', 'are', 'am'], () => "'to be' özneye göre seçilir: I → am, he/she/it ve tekil isimler → is, you/we/they ve çoğul isimler → are."],
  [['do', 'does'], () => "'does' he/she/it ile, 'do' I/you/we/they ile kullanılır."],
  [['has', 'have'], () => "'has' he/she/it ile, 'have' I/you/we/they ile kullanılır."],
  [['was', 'were'], () => "'was' I/he/she/it ile, 'were' you/we/they ile kullanılır."],
  [['a', 'an'], () => "'an' sesli harfle başlayan kelimelerden önce (an apple), 'a' sessiz harfle başlayanlardan önce (a table) gelir."],
  [['in', 'on', 'at', 'to'], orig => `Bu kalıpta doğru edat '${orig}'. Edatlar kalıp olarak öğrenilir: in the morning, on holiday, at seven, go to school.`],
  [['my', 'your'], () => "'my' = benim, 'your' = senin/sizin. Bu kelime cümlenin anlamını değiştiriyor."],
  [['will', 'did'], () => "'will' gelecek zamanı, 'did' geçmiş zamanı bildirir. Türkçe cümlenin zamanına dikkat et."],
  [['this', 'these'], () => "'this' tekil (bu), 'these' çoğul (bunlar) isimlerle kullanılır."],
];
const flipWhy = orig => { const g = FLIP_WHY.find(([ws]) => ws.includes(orig.toLowerCase())); return g ? g[1](orig.toLowerCase()) : ''; };
const SWAP_WHY = 'Kelime sırası yanlış. İngilizcede temel sıra özne + fiil + nesnedir; soru cümlelerinde yardımcı fiil başa gelir.';
const capFirst = w => w.charAt(0).toUpperCase() + w.slice(1);
const findWord = en => allWords().find(w => norm(w.en, 'en') === norm(en, 'en'));
function sentenceVariants(en, answers, wordPool) {
  const m = en.match(/^(.*?)([.!?]*)$/);
  const core = m[1].split(' '), end = m[2];
  const build = arr => capFirst(arr.join(' ')) + end;
  const vocab = (wordPool || []).filter(x => !x.en.includes(' '));
  const grammar = [], words = [], swaps = [];
  core.forEach((w, i) => {
    const bareW = w.replace(/,$/, ''), comma = w.endsWith(',') ? ',' : '';
    const flip = GRAMMAR_FLIP[bareW.toLowerCase()];
    if (flip) { const c = [...core]; c[i] = flip + comma; grammar.push({ text: build(c), why: flipWhy(bareW) }); }
    const origWord = vocab.find(x => norm(x.en, 'en') === norm(bareW, 'en'));
    if (origWord) {
      const other = pickOne(vocab.filter(x => norm(x.en, 'en') !== norm(bareW, 'en')));
      if (other) {
        const c = [...core]; c[i] = other.en + comma;
        words.push({ text: build(c), why: `'${other.en}' = ${firstTr(other.tr)}. Bu cümlede '${origWord.en}' (${firstTr(origWord.tr)}) olmalı.` });
      }
    }
  });
  for (let i = 0; i < core.length - 1; i++) {
    if (/,$/.test(core[i]) || /,$/.test(core[i + 1])) continue;
    const c = core.map((w, k) => (k === 0 && !keepCase(w)) ? w.toLowerCase() : w);
    [c[i], c[i + 1]] = [c[i + 1], c[i]];
    swaps.push({ text: build(c), why: SWAP_WHY });
  }
  const seen = new Set(answers.map(a => norm(a, 'en')));
  const uniq = list => shuffle(list).filter(v => { const k = norm(v.text, 'en'); if (seen.has(k)) return false; seen.add(k); return true; });
  // Önce dilbilgisi ve kelime tuzakları, sonra kelime sırası
  return [...uniq(grammar), ...uniq(words), ...uniq(swaps)].slice(0, 4);
}
// Seçenek listesinden egzersiz alanlarını kurar: options (metin), reasons (yanlışların açıklaması)
function withOptions(list, correctItem) {
  const sh = shuffle(list);
  return { options: sh.map(o => o.text), reasons: sh.map(o => o.why || null), correct: sh.indexOf(correctItem) };
}
const dialogTr = text => { const d = allDialogs().find(x => x[2] === text); return d ? d[3].replace(/[.!?]+$/, '') : ''; };

const ex = {
  pick(w, pool) {
    // Resimleri (emoji) birbirinden farklı seçenekler seç
    const emojis = new Set([w.emoji]), others = [];
    for (const o of distinctWords(pool.filter(o => o.emoji), 20, w)) {
      if (emojis.has(o.emoji)) continue;
      emojis.add(o.emoji); others.push(o);
      if (others.length === 2) break;
    }
    const options = shuffle([w, ...others]);
    return { type: 'pick', prompt: firstTr(w.tr), options, correct: options.indexOf(w), answerText: w.en, words: [w.en],
      reasons: options.map(o => o === w ? null : `“${o.en}” = ${firstTr(o.tr)}`) };
  },
  choice(w, pool) {
    const others = distinctWords(pool, 3, w);
    const options = shuffle([w, ...others]);
    return { type: 'choice', word: w, options: options.map(o => firstTr(o.tr)), correct: options.indexOf(w), answerText: firstTr(w.tr), words: [w.en],
      reasons: options.map(o => o === w ? null : `“${firstTr(o.tr)}” İngilizcede “${o.en}” demektir.`) };
  },
  choiceRev(w, pool) {
    const others = distinctWords(pool, 3, w);
    const options = shuffle([w, ...others]);
    return { type: 'choiceRev', prompt: firstTr(w.tr), options: options.map(o => o.en), correct: options.indexOf(w), answerText: w.en, words: [w.en],
      reasons: options.map(o => o === w ? null : `“${o.en}” = ${firstTr(o.tr)}`) };
  },
  // Duyduğun kelimenin anlamını seç
  listenWord(w, pool) {
    pool = pool || UNITS.find(u => u.words.includes(w)).words;
    const options = shuffle([w, ...distinctWords(pool, 3, w)]);
    return { type: 'listenWord', audio: w.en, options: options.map(o => firstTr(o.tr)), correct: options.indexOf(w), answerText: `${w.en} = ${firstTr(w.tr)}`, words: [w.en],
      reasons: options.map(o => o === w ? null : `Seçtiğin “${firstTr(o.tr)}” İngilizcede “${o.en}” demektir.`) };
  },
  match(words, pool) {
    let list = sample(words, 5);
    if (list.length < 5) list = list.concat(sample(pool.filter(p => !list.includes(p)), 5 - list.length));
    // Aynı Türkçe karşılığa sahip kelimeleri ayıkla
    const seen = new Set();
    list = list.filter(w => { const k = firstTr(w.tr); if (seen.has(k)) return false; seen.add(k); return true; });
    return { type: 'match', pairs: list.map(w => ({ en: w.en, tr: firstTr(w.tr) })), answerText: '', words: list.map(w => w.en) };
  },
  build(s, sentPool, wordPool, dir, kind = 'build') {
    const target = dir === 'en' ? s.en : s.tr;
    const lang = dir === 'en' ? 'en' : 'tr';
    const answers = [target, ...((dir === 'en' ? s.altEn : s.alt) || [])];
    const ans = tileTokens(target, lang);
    const used = new Set(ans.map(t => norm(t, lang)));
    const extra = [];
    shuffle(sentPool.filter(p => p !== s)).forEach(p => {
      tileTokens(dir === 'en' ? p.en : p.tr, lang).forEach(t => {
        const k = norm(t, lang);
        if (!used.has(k) && !/^[A-ZÇĞİÖŞÜ]/.test(t)) { used.add(k); extra.push(t); }
      });
    });
    const nDist = clamp(Math.round(ans.length * 0.6) + 1, 2, 5);
    const tiles = shuffle([...ans, ...extra.slice(0, nDist)]);
    return {
      type: kind, dir, prompt: dir === 'en' ? s.tr : s.en, audio: s.en, tiles, answers, lang,
      answerText: target, meaning: kind === 'listen' ? s.tr : null, words: wordsIn(s.en, wordPool), src: { en: s.en, tr: s.tr },
    };
  },
  fill(s, wordPool) {
    const toks = tokens(s.en);
    const single = wordPool.filter(w => !w.en.includes(' '));
    let idx = toks.findIndex(t => single.some(w => norm(w.en, 'en') === norm(t, 'en')));
    if (idx < 0) idx = toks.findIndex(t => t.length > 3);
    if (idx < 0) return null;
    const blank = toks[idx];
    const bl = norm(blank, 'en');
    const distractW = sample(allWords().filter(w => !w.en.includes(' ') && norm(w.en, 'en') !== bl && !toks.some(t => norm(t, 'en') === norm(w.en, 'en'))), 3);
    const shownBlank = idx === 0 && !keepCase(blank) ? blank.toLowerCase() : blank;
    const right = { text: shownBlank };
    const fw = findWord(blank);
    const { options, reasons, correct } = withOptions([right, ...distractW.map(w => ({ text: w.en, why: `“${w.en}” = ${firstTr(w.tr)}. Doğru kelime “${shownBlank}”${fw ? ` (${firstTr(fw.tr)})` : ''}.` }))], right);
    // Cümleyi noktalama işaretleriyle birlikte göster
    const raw = s.en.split(/\s+/);
    return {
      type: 'fill', parts: raw, blankIdx: idx, options, reasons, correct,
      hint: s.tr, audio: s.en, answerText: s.en, words: wordsIn(s.en, wordPool), src: { en: s.en, tr: s.tr },
    };
  },
  // Diyalog: karşı tarafın sözüne uygun cevabı seç
  reply(d, unitDialogs, showHint) {
    const [q, qtr, a, atr] = d;
    const pickFrom = (list, n, taken) => shuffle(list.map(x => x[2]).filter(t => !taken.includes(t))).slice(0, n);
    const opts = [a];
    opts.push(...pickFrom(unitDialogs.filter(x => x !== d), 1, opts));
    opts.push(...pickFrom(allDialogs().filter(x => !unitDialogs.includes(x)), 3 - opts.length, opts));
    if (opts.length < 3) opts.push(...pickFrom(unitDialogs, 3 - opts.length, opts));
    const options = shuffle(opts);
    return { type: 'reply', q, qtr: showHint ? qtr : null, options, correct: options.indexOf(a), answerText: a, meaning: atr, audio: a, words: [],
      reasons: options.map(o => o === a ? null : `“${o}” = ${dialogTr(o)}. Bu, “${q}” sorusuna uygun bir cevap değil.`),
      src: { en: a, tr: atr, q, qtr } };
  },
  // Türkçe cümlenin doğru çevirisini seç (yanlışlardan biri "tuzak" cümle)
  sentChoice(s, wordPool) {
    const answers = [s.en, ...(s.altEn || [])];
    const traps = sentenceVariants(s.en, answers, wordPool);
    const others = shuffle(allSentences().filter(o => o.en !== s.en && !answers.some(a => norm(a, 'en') === norm(o.en, 'en'))))
      .map(o => ({ text: o.en, why: `Bu cümle farklı bir anlama geliyor: “${o.tr}”` }));
    const right = { text: s.en };
    const opts = [right, ...traps.slice(0, 1)];
    const rest = shuffle([...traps.slice(1, 3), ...others.slice(0, 2)]);
    while (opts.length < 3 && rest.length) opts.push(rest.shift());
    return { type: 'sentChoice', prompt: s.tr, ...withOptions(opts, right), answerText: s.en, audio: s.en, words: wordsIn(s.en, wordPool), src: { en: s.en, tr: s.tr } };
  },
  // Duyduğun cümleyi birbirine çok benzeyen seçenekler arasından bul
  listenPick(s, wordPool) {
    const answers = [s.en, ...(s.altEn || [])];
    const traps = sentenceVariants(s.en, answers, wordPool);
    const others = shuffle(allSentences().filter(o => o.en !== s.en)).map(o => ({ text: o.en, why: 'Bu cümle hiç okunmadı. Sesi tekrar dinle.' }));
    const right = { text: s.en };
    const opts = [right, ...traps.slice(0, 2).map(t => ({ text: t.text, why: `Duyduğun cümle bu değildi. ${t.why}` }))];
    while (opts.length < 3) opts.push(others.shift());
    return { type: 'listenPick', audio: s.en, ...withOptions(opts, right), answerText: s.en, meaning: s.tr, words: wordsIn(s.en, wordPool), src: { en: s.en, tr: s.tr } };
  },
  // Diyalog cümlesini kelime kartlarıyla kur
  replyBuild(d, sentPool, wordPool) {
    const [q, qtr, a, atr] = d;
    const e = ex.build({ en: a, tr: atr }, sentPool, wordPool, 'en');
    return Object.assign(e, { type: 'build', prompt: atr, context: q });
  },
};

function genLesson(ui, li) {
  if (UNITS[ui].level !== 'A1') return genAdvanced(ui, li);
  const u = UNITS[ui];
  const { words, sents, dialogs } = lessonContent(ui, li);
  const wordPool = u.words;
  const sentPool = UNITS.slice(Math.max(0, ui - 1), ui + 1).flatMap(x => x.sentences);
  const pool = ui > 0 ? [...u.words, ...UNITS[ui - 1].words] : u.words;
  const ws = shuffle(words);
  const ss = shuffle(sents);
  const S_ = i => ss[i % ss.length];
  const W_ = i => ws[i % ws.length];
  const intro = [], rest = [];
  const review = li === 3;

  if (!review) {
    for (let i = 0; i < 3; i++) intro.push(W_(i).emoji ? ex.pick(W_(i), pool) : ex.choice(W_(i), pool));
    rest.push(ex.choice(W_(3), pool), ex.choiceRev(W_(4), pool), ex.match(words, pool));
    rest.push(ex.build(S_(0), sentPool, wordPool, 'en'), ex.build(S_(1), sentPool, wordPool, 'en'));
    rest.push(ex.build(S_(2), sentPool, wordPool, 'tr'));
    rest.push(ex.build(S_(1), sentPool, wordPool, 'en', 'listen'));
    rest.push(ex.fill(S_(0), wordPool) || ex.build(S_(0), sentPool, wordPool, 'tr'));
    rest.push(ex.listenWord(W_(1), pool));
    if (dialogs.length) rest.push(ex.reply(pickOne(dialogs), u.dialogs, true));
  } else {
    intro.push(ex.choice(W_(0), pool), ex.choiceRev(W_(1), pool));
    rest.push(ex.choice(W_(2), pool), ex.match(ws.slice(0, 5), pool), ex.match(ws.slice(5, 10), pool));
    for (let i = 0; i < 3; i++) rest.push(ex.build(S_(i), sentPool, wordPool, 'en'));
    for (let i = 3; i < 5; i++) rest.push(ex.build(S_(i), sentPool, wordPool, 'tr'));
    for (let i = 5; i < 7; i++) rest.push(ex.build(S_(i), sentPool, wordPool, 'en', 'listen'));
    rest.push(ex.fill(S_(7), wordPool) || ex.build(S_(7), sentPool, wordPool, 'en'));
    rest.push(ex.listenWord(W_(3), pool), ex.listenWord(W_(4), pool));
    sample(u.dialogs, 2).forEach(d => rest.push(ex.reply(d, u.dialogs, true)));
  }
  return [...intro, ...shuffle(rest)];
}

// A2 / B1: daha çok yazma, dikte ve gerçek diyalog; daha az ipucu
function genAdvanced(ui, li) {
  const u = UNITS[ui];
  const b1 = u.level === 'B1';
  const { words, sents, dialogs } = lessonContent(ui, li);
  const wordPool = u.words;
  const sentPool = UNITS.slice(Math.max(0, ui - 1), ui + 1).flatMap(x => x.sentences.concat(x.dialogs.map(d => ({ en: d[2], tr: d[3] }))));
  const pool = [...u.words, ...UNITS[ui - 1].words];
  const ws = shuffle(words), ss = shuffle(sents), ds = shuffle(dialogs);
  const W = i => ws[i % ws.length], Sn = i => ss[i % ss.length], D = i => ds[i % ds.length];
  const hint = !b1;
  const intro = [], rest = [];
  const fill = i => ex.fill(Sn(i), wordPool) || ex.sentChoice(Sn(i), wordPool);

  if (li === 3) {
    intro.push(ex.choice(W(0), pool), ex.match(ws.slice(0, 5), pool));
    rest.push(ex.match(ws.slice(5, 10), pool));
    for (let i = 0; i < (b1 ? 4 : 3); i++) rest.push(ex.sentChoice(Sn(i), wordPool));
    for (let i = 4; i < (b1 ? 7 : 6); i++) rest.push(ex.listenPick(Sn(i), wordPool));
    for (let i = 0; i < (b1 ? 4 : 3); i++) rest.push(ex.reply(D(i), u.dialogs, hint));
    rest.push(ex.build(Sn(6), sentPool, wordPool, 'tr'), ex.build(Sn(7), sentPool, wordPool, b1 ? 'tr' : 'en'));
    rest.push(fill(1), ex.listenWord(W(2), pool), ex.listenWord(W(3), pool));
  } else if (li === 2) {
    intro.push(ex.reply(D(0), u.dialogs, hint), ex.reply(D(1), u.dialogs, hint));
    rest.push(ex.reply(D(2), u.dialogs, hint), ex.reply(D(3), u.dialogs, hint));
    rest.push(ex.replyBuild(D(4), sentPool, wordPool), ex.replyBuild(D(5), sentPool, wordPool));
    for (let i = 0; i < (b1 ? 3 : 2); i++) rest.push(ex.sentChoice(Sn(i), wordPool));
    rest.push(ex.listenPick(Sn(3), wordPool));
    rest.push(b1 ? ex.listenPick(Sn(4), wordPool) : ex.build(Sn(4), sentPool, wordPool, 'en', 'listen'));
    rest.push(ex.match(sample(words, 5), pool));
  } else if (!b1) {
    intro.push(W(0).emoji ? ex.pick(W(0), pool) : ex.choice(W(0), pool), ex.choice(W(1), pool));
    rest.push(ex.choiceRev(W(2), pool), ex.match(words, pool));
    rest.push(ex.build(Sn(0), sentPool, wordPool, 'en'), ex.build(Sn(1), sentPool, wordPool, 'tr'));
    rest.push(ex.build(Sn(2), sentPool, wordPool, 'en', 'listen'), ex.sentChoice(Sn(1), wordPool));
    rest.push(ex.reply(D(0), u.dialogs, true), ex.reply(D(1), u.dialogs, true));
    rest.push(fill(2), ex.listenWord(W(3), pool), ex.listenPick(Sn(0), wordPool));
  } else {
    intro.push(ex.choice(W(0), pool), ex.choiceRev(W(1), pool));
    rest.push(ex.match(words, pool), ex.sentChoice(Sn(0), wordPool), ex.sentChoice(Sn(1), wordPool));
    rest.push(ex.listenPick(Sn(2), wordPool), ex.build(Sn(0), sentPool, wordPool, 'tr'));
    rest.push(ex.reply(D(0), u.dialogs, false), ex.reply(D(1), u.dialogs, false), ex.replyBuild(D(1), sentPool, wordPool));
    rest.push(fill(1), ex.listenWord(W(2), pool), ex.listenWord(W(3), pool));
  }
  return [...intro, ...shuffle(rest)];
}

// Pratik içeriği: tamamlanmış derslerin kelime ve cümleleri
function learnedContent() {
  const words = [], sents = [], dialogs = [];
  for (let g = 0; g < S.progress && g < TOTAL_LESSONS; g++) {
    const c = lessonContent(unitOf(g), g % LPU);
    c.words.forEach(w => { if (!words.includes(w)) words.push(w); });
    c.sents.forEach(s => { if (!sents.includes(s)) sents.push(s); });
    c.dialogs.forEach(d => { if (!dialogs.includes(d)) dialogs.push(d); });
  }
  return { words, sents, dialogs };
}

// Seviye atlama sınavı: hedef bölümden önceki tüm içerikten, ağırlıklı olarak bir önceki bölümden
function genTest(si) {
  const prevUnits = UNITS.map((u, i) => i).filter(i => sectionOfUnit(i) < si);
  const lastSec = prevUnits.filter(i => sectionOfUnit(i) === si - 1);
  const words = lastSec.flatMap(i => UNITS[i].words);
  const sents = prevUnits.flatMap(i => UNITS[i].sentences);
  const lastSents = lastSec.flatMap(i => UNITS[i].sentences);
  const dialogs = lastSec.flatMap(i => UNITS[i].dialogs);
  const list = [];
  sample(words, 3).forEach(w => list.push(ex.choiceRev(w, words)));
  sample(lastSents, 4).forEach(s => list.push(ex.sentChoice(s, words)));
  sample(sents, 3).forEach(s => list.push(ex.listenPick(s, words)));
  sample(lastSents, 2).forEach(s => list.push(ex.build(s, sents, words, 'tr')));
  if (dialogs.length) sample(dialogs, 3).forEach(d => list.push(ex.reply(d, dialogs, false)));
  else sample(lastSents, 2).forEach(s => list.push(ex.build(s, sents, words, 'en', 'listen')));
  return shuffle(list);
}

function genPractice(kind) {
  const { words, sents, dialogs } = learnedContent();
  const pool = words.length >= 6 ? words : allWords().slice(0, 20);
  const list = [];
  if (kind === 'review') {
    // Tekrar zamanı gelen kelimeler (yoksa en zayıflar)
    let due = dueWords().slice(0, 10);
    if (due.length < 4) due = due.concat([...words].sort((a, b) => strength(a.en) - strength(b.en)).filter(w => !due.includes(w)).slice(0, 6 - due.length));
    const kinds = [ex.choice, ex.choiceRev, ex.listenWord];
    due.forEach((w, i) => list.push(w.emoji && i % 4 === 3 ? ex.pick(w, pool) : kinds[i % 3](w, pool)));
    if (due.length >= 4) list.push(ex.match(due, pool));
    const ss = shuffle(sents.filter(s => due.some(w => wordsIn(s.en, [w]).length))).slice(0, 3);
    ss.forEach((s, i) => list.push(i % 2 ? ex.sentChoice(s, pool) : ex.build(s, sents, pool, 'en')));
    return list;
  } else if (kind === 'mistakes') {
    const ws = allWords();
    mistakeList().slice(0, 10).forEach((m, i) => {
      if (m.q) list.push(i % 2 ? ex.reply([m.q, m.qtr, m.en, m.tr], allDialogs(), false) : ex.replyBuild([m.q, m.qtr, m.en, m.tr], allSentences(), ws));
      else list.push(i % 2 ? ex.sentChoice(m, ws) : ex.build(m, allSentences(), ws, 'en'));
    });
  } else if (kind === 'dialog') {
    sample(dialogs, 7).forEach(d => list.push(ex.reply(d, dialogs, false)));
    sample(dialogs, 3).forEach(d => list.push(ex.replyBuild(d, sents, pool)));
  } else if (kind === 'write') {
    sample(sents, 4).forEach(s => list.push(ex.build(s, sents, pool, 'en')));
    sample(sents, 2).forEach(s => list.push(ex.build(s, sents, pool, 'tr')));
    sample(sents, 4).forEach(s => list.push(ex.sentChoice(s, pool)));
  } else if (kind === 'listen') {
    sample(sents, 8).forEach(s => list.push(ex.build(s, sents, pool, 'en', 'listen')));
  } else if (kind === 'match') {
    for (let i = 0; i < 3; i++) list.push(ex.match(sample(words, 5), pool));
    sample(words, 4).forEach((w, i) => list.push(i % 2 ? ex.choice(w, pool) : ex.choiceRev(w, pool)));
  } else {
    // Zayıf kelimeler: en çok hata yapılan / en az pratik edilenler
    const score = w => { const s = S.words[w.en.toLowerCase()] || { c: 0, w: 0 }; return s.w * 2 - s.c + Math.random(); };
    const weak = [...words].sort((a, b) => score(b) - score(a)).slice(0, 6);
    weak.forEach((w, i) => list.push([ex.choice, ex.choiceRev, ex.listenWord][i % 3](w, pool)));
    const weakSents = sents.filter(s => weak.some(w => wordsIn(s.en, [w]).length));
    const ss = shuffle(weakSents.length >= 3 ? weakSents : sents).slice(0, 4);
    ss.forEach((s, i) => list.push(ex.build(s, sents, pool, i % 2 ? 'tr' : 'en', i === 2 ? 'listen' : 'build')));
    list.push(ex.match(weak, pool));
  }
  return shuffle(list);
}

// ---------- Modal & toast ----------
function openModal(html, cls = '') {
  const root = $('#modal-root');
  root.innerHTML = `<div class="modal-back"><div class="modal ${cls}" role="dialog" aria-modal="true">${html}</div></div>`;
  $('.modal-back', root).addEventListener('click', e => { if (e.target.classList.contains('modal-back')) closeModal(); });
  return $('.modal', root);
}
function closeModal() { $('#modal-root').innerHTML = ''; }
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.innerHTML = msg;
  $('#toast-root').appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

// ==========================================================
//   ANA EKRAN
// ==========================================================
const TABS = [
  { id: 'learn', icon: 'home', label: 'Öğren' },
  { id: 'practice', icon: 'target', label: 'Pratik' },
  { id: 'words', icon: 'book', label: 'Kelimeler' },
  { id: 'profile', icon: 'user', label: 'Profil' },
];

function renderApp() {
  L = null;
  if (!S.onboarded) {
    if (S.progress > 0 || S.xp > 0) { S.onboarded = true; save(); }
    else { renderWelcome(); return; }
  }
  checkStreak();
  const tabs = cls => TABS.map(t => `<button class="${cls} ${S.tab === t.id ? 'active' : ''}" data-tab="${t.id}">${ICON[t.icon]}<span>${t.label}</span></button>`).join('');
  $('#app').innerHTML = `
    <div class="app">
      <header class="topbar"><div class="tb-inner">
        <div class="brand">${mascot('happy')}<span>Dilbaz</span></div>
        <nav class="tabs">${tabs('tab')}</nav>
        ${topStats()}
      </div></header>
      <div class="layout">
        <main class="main" id="page"></main>
        <aside class="side" id="rightbar">${rightbar()}</aside>
      </div>
      <nav class="tabbar">${tabs('tb')}</nav>
    </div>`;
  $$('[data-tab]').forEach(b => b.addEventListener('click', () => { S.tab = b.dataset.tab; save(); renderApp(); window.scrollTo(0, 0); }));
  ({ learn: renderLearn, practice: renderPractice, words: renderWords, profile: renderProfile }[S.tab] || renderLearn)();
  bindWordOfDay();
}

const currentLevel = () => UNITS[unitOf(Math.min(S.progress, TOTAL_LESSONS - 1))].level;
function topStats() {
  return `<div class="chips">
    <span class="chip level" title="Şu anki seviyen">${currentLevel()}</span>
    <span class="chip fire ${S.streak ? '' : 'off'}" title="Günlük seri">${ICON.fire}<b>${S.streak}</b></span>
    <span class="chip xp" title="Toplam XP">${ICON.star}<b>${S.xp}</b></span>
  </div>`;
}

// Son 7 günün aktiflik noktaları
function weekDots() {
  return [...Array(7)].map((_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const on = (S.daily[dayKey(d)] || 0) > 0;
    return `<div class="wd ${on ? 'on' : ''} ${i === 6 ? 'today' : ''}"><i>${on ? '🔥' : ''}</i><span>${DAYS_TR[d.getDay()][0]}</span></div>`;
  }).join('');
}

function rightbar() {
  const goalPct = clamp(todayXp() / S.goal * 100, 0, 100);
  const wod = wordOfDay();
  return `
    <div class="panel goal-panel">
      ${ring(goalPct, 92, 10, `<b>${todayXp()}</b><small>/ ${S.goal} XP</small>`)}
      <div><h3>Günlük hedef</h3><p class="muted">${goalPct >= 100 ? 'Bugünkü hedefini tamamladın! 🎉' : `Hedefe ${Math.max(0, S.goal - todayXp())} XP kaldı.`}</p></div>
    </div>
    <div class="panel">
      <h3>🔥 ${S.streak} günlük seri</h3>
      <div class="week">${weekDots()}</div>
      <p class="muted">${S.lastActive === dayKey() ? 'Bugünkü dersini yaptın, harika!' : 'Seriyi sürdürmek için bugün bir ders bitir.'}</p>
    </div>
    ${S.progress > 0 ? `<div class="panel mini-stats">
      <div><b>${dueWords().length}</b><span>tekrar bekleyen kelime</span></div>
      <div><b>${Object.keys(S.mistakes).length}</b><span>hata defterinde</span></div>
    </div>` : ''}
    ${wod ? `<div class="panel wod">
      <div class="wod-art">${wod.emoji || '💬'}</div>
      <div style="flex:1;min-width:0"><div class="kicker">Günün kelimesi</div><div class="wod-en">${esc(wod.en)}</div><div class="muted">${esc(altsOf(wod.tr).join(', '))}</div></div>
      <button class="speaker mini" data-wod="${esc(wod.en)}" aria-label="Dinle">${ICON.speaker}</button>
    </div>` : ''}`;
}
function wordOfDay() {
  const pool = UNITS.slice(0, unitOf(Math.min(S.progress, TOTAL_LESSONS - 1)) + 1).flatMap(u => u.words);
  if (!pool.length) return null;
  const d = new Date(); const seed = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
  return pool[seed % pool.length];
}
function bindWordOfDay() { $$('[data-wod]').forEach(b => b.addEventListener('click', () => speak(b.dataset.wod))); }

// ---------- Öğren sekmesi (metro hattı) ----------
function reviewCard() {
  if (S.progress <= 0) return '';
  const due = dueWords().length;
  if (!due) return `<div class="review-card done"><div class="rc-icon">🧠</div><div class="rc-text"><b>Tekrarların tamam</b><span>Kelimelerin hafızanda taze. Yeni bir derse geçebilirsin.</span></div></div>`;
  return `<div class="review-card"><div class="rc-icon">🧠</div><div class="rc-text"><b>Tekrar zamanı: ${due} kelime</b><span>Bu kelimeler unutulmak üzere. 2 dakikada tazele.</span></div><button class="btn gold sm" data-review>Tekrar et</button></div>`;
}

function heroCard() {
  const h = new Date().getHours();
  const greet = h < 12 ? 'Günaydın' : h < 18 ? 'İyi günler' : 'İyi akşamlar';
  const done = S.progress >= TOTAL_LESSONS;
  const g = Math.min(S.progress, TOTAL_LESSONS - 1), ui = unitOf(g), li = g % LPU;
  return `<section class="hero">
    <div class="hero-text">
      <div class="kicker">${greet}, ${esc(S.name)} 👋</div>
      <h1>${done ? 'Tüm hattı tamamladın!' : `Sıradaki durak: ${esc(UNITS[ui].title)}`}</h1>
      <p>${done ? 'Pratik bölümünden tekrar yaparak bildiklerini taze tut.' : `${UNITS[ui].level} · ${esc(lessonNames(ui)[li])} · +${lessonXp(ui, li)} XP`}</p>
      ${done ? '' : `<button class="btn primary" data-continue>${ICON.play} Derse devam et</button>`}
    </div>
    <div class="hero-art">${mascot('happy', 'bounce')}<span class="ha-e e1">📚</span><span class="ha-e e2">💬</span><span class="ha-e e3">⭐</span></div>
  </section>`;
}

function renderLearn() {
  const page = $('#page');
  let html = heroCard() + reviewCard();
  UNITS.forEach((u, ui) => {
    const unitLocked = ui * LPU > S.progress;
    const si = sectionOfUnit(ui);
    if (sectionStartUnit(si) === ui) {
      const sec = SECTIONS[si];
      const secUnits = UNITS.filter(x => x.level === sec.level).length;
      if (si > 0) html += '</div>';
      html += `<div class="line-head ${unitLocked ? 'locked' : ''}" data-line="${si}">
        <div class="level-badge">${sec.level}</div>
        <div class="lh-text"><div class="kicker">${sec.level} hattı · ${secUnits} durak</div><h2>${esc(sec.title)}</h2><p>${esc(sec.desc)}</p></div>
        ${unitLocked ? `<button class="btn ghost sm" data-test="${si}">Seviyeyi atla</button>` : ''}
      </div><div class="track" data-line="${si}">`;
    }
    const doneCount = clamp(S.progress - ui * LPU, 0, LPU);
    const state = unitLocked ? 'locked' : doneCount >= LPU ? 'done' : 'active';
    html += `<article class="stop ${state}" style="--u:${u.color}">
      <div class="stop-dot">${state === 'done' ? ICON.check : state === 'locked' ? ICON.lock : `<span>${ui + 1}</span>`}</div>
      <div class="ucard">
        ${unitArt(u, unitLocked)}
        <div class="ucard-body">
          <div class="ucard-head">
            <div style="min-width:0"><div class="kicker">Durak ${ui + 1} · ${u.level}</div><h3>${esc(u.title)}</h3><p>${esc(u.desc)}</p></div>
            <button class="icon-btn guide" data-guide="${ui}" title="Ünite rehberi">${ICON.guide}<span>Rehber</span></button>
          </div>
          <div class="uprog"><div class="bar"><div style="width:${doneCount / LPU * 100}%"></div></div><span>${doneCount}/${LPU}</span></div>
          <div class="lessons">${lessonNames(ui).map((name, li) => {
            const g = ui * LPU + li;
            const st = g < S.progress ? 'done' : g === S.progress ? 'current' : 'locked';
            const ic = st === 'done' ? ICON.check : st === 'locked' ? ICON.lock : ICON.play;
            return `<button class="ltile ${st} ${li === LPU - 1 ? 'review' : ''}" data-lesson="${g}">
              <span class="lt-num">${li === LPU - 1 ? '🏆' : li + 1}</span>
              <span class="lt-name">${esc(name)}</span>
              <span class="lt-meta">${st === 'done' ? 'Tekrar · +5 XP' : `+${lessonXp(ui, li)} XP`}</span>
              <span class="lt-ic">${ic}</span>
            </button>`;
          }).join('')}</div>
        </div>
      </div>
    </article>`;
  });
  html += '</div>';
  if (S.progress >= TOTAL_LESSONS) {
    html += `<div class="panel finish-card">${mascot('wow', 'bounce')}<h2>Tüm durakları geçtin! 🎉</h2><p class="muted">Pratik sekmesinden tekrar yaparak öğrendiklerini pekiştirebilirsin.</p></div>`;
  }
  page.innerHTML = html;

  $$('[data-guide]', page).forEach(b => b.addEventListener('click', () => showGuide(+b.dataset.guide)));
  $$('[data-review]', page).forEach(b => b.addEventListener('click', () => startPractice('review')));
  $$('[data-test]', page).forEach(b => b.addEventListener('click', () => showTestIntro(+b.dataset.test)));
  $$('[data-continue]', page).forEach(b => b.addEventListener('click', () => { const g = S.progress; startLesson(unitOf(g), g % LPU); }));
  $$('[data-lesson]', page).forEach(b => b.addEventListener('click', () => {
    const g = +b.dataset.lesson;
    if (g > S.progress) { toast('🔒 Bu dersi açmak için önceki dersleri bitir.'); return; }
    startLesson(unitOf(g), g % LPU);
  }));

  const cur = $('.ltile.current', page);
  if (cur && S.progress > 0) setTimeout(() => cur.closest('.stop').scrollIntoView({ block: 'center', behavior: 'smooth' }), 60);
}

function showGuide(ui) {
  const u = UNITS[ui];
  const m = openModal(`
    <div class="ex-kind">Ünite ${ui + 1} rehberi</div>
    <h2>${u.icon} ${esc(u.title)}</h2>
    <div class="guide-tip">${u.tip}</div>
    <h3 class="section-title">Anahtar cümleler</h3>
    ${u.sentences.map(s => `<div class="phrase"><button class="speaker mini" data-say="${esc(s.en)}" aria-label="Dinle">${ICON.speaker}</button><div><div class="pen">${esc(s.en)}</div><div class="ptr">${esc(s.tr)}</div></div></div>`).join('')}
    ${u.dialogs.length ? `<h3 class="section-title" style="margin-top:18px">Örnek diyaloglar</h3>
    ${u.dialogs.map(d => `<div class="phrase dialog"><div style="flex:1">
      <div class="dl"><button class="speaker mini" data-say="${esc(d[0])}" aria-label="Dinle">${ICON.speaker}</button><div><div class="pen">— ${esc(d[0])}</div><div class="ptr">${esc(d[1])}</div></div></div>
      <div class="dl me"><button class="speaker mini" data-say="${esc(d[2])}" aria-label="Dinle">${ICON.speaker}</button><div><div class="pen">— ${esc(d[2])}</div><div class="ptr">${esc(d[3])}</div></div></div>
    </div></div>`).join('')}` : ''}
    <h3 class="section-title" style="margin-top:18px">Kelimeler</h3>
    ${u.words.map(w => `<div class="phrase"><button class="speaker mini" data-say="${esc(w.en)}" aria-label="Dinle">${ICON.speaker}</button><div><div class="pen">${w.emoji || ''} ${esc(w.en)}</div><div class="ptr">${esc(altsOf(w.tr).join(', '))}</div></div></div>`).join('')}
    <div class="modal-actions" style="margin-top:20px"><button class="btn block" data-close>Tamam</button></div>`);
  $$('[data-say]', m).forEach(b => b.addEventListener('click', () => speak(b.dataset.say)));
  $('[data-close]', m).addEventListener('click', closeModal);
}

function showTestIntro(si) {
  const sec = SECTIONS[si];
  const m = openModal(`${mascot('wow')}
    <h2>${sec.level} seviyesine atla</h2>
    <p class="mtext">Önceki seviyeleri zaten biliyor musun? Bu sınavı geçersen <b>${esc(sec.title)}</b> bölümü ve öncesindeki tüm dersler açılır.<br><br>
    📝 ${genTest(si).length} soru · ❌ 3 hata hakkı</p>
    <div class="modal-actions"><button class="btn gold" data-go>Sınava başla</button><button class="btn ghost" data-close>Vazgeç</button></div>`, 'center');
  $('[data-close]', m).addEventListener('click', closeModal);
  $('[data-go]', m).addEventListener('click', () => startSession({ mode: 'test', si, exercises: genTest(si), lives: 3 }));
}

// ---------- Pratik sekmesi ----------
function renderPractice() {
  const ready = S.progress > 0;
  $('#page').innerHTML = `
    <h1 class="page-title">Pratik</h1>
    <div class="practice-hero panel">${mascot('happy', 'bounce')}<div>
      <h3>Tekrar, öğrenmenin anahtarıdır!</h3>
      <p class="muted">Öğrendiklerini pekiştir. Her pratik oturumu <b>+5 XP</b> kazandırır.</p>
    </div></div>
    ${ready ? '' : '<p class="locked-note" style="margin-bottom:14px">Pratik yapabilmek için önce ilk dersini tamamla.</p>'}
    <div class="practice-grid">
      <button class="practice-card featured" data-prac="review" ${ready ? '' : 'disabled'}><div class="pi">🧠</div><div><h3>Akıllı tekrar</h3><p>${ready ? `${dueWords().length} kelimenin tekrar zamanı geldi.` : 'Ders yaptıkça kelimelerin burada birikir.'} Unutmadan önce tazele.</p></div><span class="reward">+5 XP</span></button>
      <button class="practice-card" data-notebook ${mistakeList().length ? '' : 'disabled'}><div class="pi">📕</div><div><h3>Hata defteri (${mistakeList().length})</h3><p>${mistakeList().length ? 'Yanlış yaptığın cümleleri gör ve çalış.' : 'Henüz hata yok. Yanlış yaptığın cümleler buraya eklenir.'}</p></div><span class="reward">+5 XP</span></button>
      <button class="practice-card" data-prac="weak" ${ready ? '' : 'disabled'}><div class="pi">🎯</div><div><h3>Zayıf kelimeler</h3><p>En çok zorlandığın kelimeleri tekrar et.</p></div><span class="reward">+5 XP</span></button>
      <button class="practice-card" data-prac="listen" ${ready ? '' : 'disabled'}><div class="pi">🎧</div><div><h3>Dinleme pratiği</h3><p>Duyduğun cümleleri bul ve kur, kulağını alıştır.</p></div><span class="reward">+5 XP</span></button>
      <button class="practice-card" data-prac="match" ${ready ? '' : 'disabled'}><div class="pi">🧩</div><div><h3>Hızlı eşleştirme</h3><p>Kelimeleri anlamlarıyla eşleştir.</p></div><span class="reward">+5 XP</span></button>
      <button class="practice-card" data-prac="write" ${S.progress >= 4 ? '' : 'disabled'}><div class="pi">🧱</div><div><h3>Cümle ustası</h3><p>Cümle kur ve doğru çeviriyi bul. ${S.progress >= 4 ? '' : '(1 ünite bitirince açılır)'}</p></div><span class="reward">+5 XP</span></button>
      <button class="practice-card" data-prac="dialog" ${learnedContent().dialogs.length >= 4 ? '' : 'disabled'}><div class="pi">🗣️</div><div><h3>Konuşma simülasyonu</h3><p>Gerçek hayattan diyaloglarda doğru cevabı ver. ${learnedContent().dialogs.length >= 4 ? '' : '(A2 bölümünde açılır)'}</p></div><span class="reward">+5 XP</span></button>
    </div>`;
  $$('[data-prac]').forEach(b => b.addEventListener('click', () => startPractice(b.dataset.prac)));
  $$('[data-notebook]').forEach(b => b.addEventListener('click', showNotebook));
}

function showNotebook() {
  const list = mistakeList();
  const m = openModal(`
    <div class="ex-kind">📕 Hata defteri</div>
    <h2>${list.length} cümle</h2>
    <p class="mtext">Bir cümleyi pratikte <b>iki kez</b> doğru yapınca defterden silinir.</p>
    <div class="modal-actions" style="margin-bottom:16px"><button class="btn ok" data-go>Hatalarımı çalış</button></div>
    ${list.map(x => `<div class="phrase nb"><button class="speaker mini" data-say="${esc(x.en)}" aria-label="Dinle">${ICON.speaker}</button><div style="flex:1;min-width:0">
      ${x.q ? `<div class="ptr">— ${esc(x.q)}</div>` : ''}
      <div class="pen">${esc(x.en)}</div><div class="ptr">${esc(x.tr)}</div>
      ${x.why ? `<div class="nb-why">💡 ${esc(x.why)}</div>` : ''}
    </div>${x.n > 1 ? `<span class="nb-count" title="Yanlış sayısı">×${x.n}</span>` : ''}</div>`).join('')}
    <div class="modal-actions" style="margin-top:16px"><button class="btn ghost" data-close>Kapat</button></div>`);
  $$('[data-say]', m).forEach(b => b.addEventListener('click', () => speak(b.dataset.say)));
  $('[data-close]', m).addEventListener('click', closeModal);
  $('[data-go]', m).addEventListener('click', () => startPractice('mistakes'));
}

// ---------- Kelimeler sekmesi ----------
function renderWords() {
  const openUnits = Math.min(UNITS.length, unitOf(Math.min(S.progress, TOTAL_LESSONS - 1)) + 1);
  $('#page').innerHTML = `
    <h1 class="page-title">Kelimeler</h1>
    <input class="search" id="wsearch" type="search" placeholder="Kelime ara (İngilizce veya Türkçe)…" autocomplete="off">
    <div id="wlist"></div>`;
  const draw = q => {
    const nq = norm(q, 'tr');
    let html = '';
    UNITS.slice(0, openUnits).forEach((u, ui) => {
      const ws = u.words.filter(w => !nq || norm(w.en, 'en').includes(nq) || norm(w.tr, 'tr').includes(nq) || loose(norm(w.tr, 'tr')).includes(loose(nq)));
      if (!ws.length) return;
      html += `<div class="word-group"><h3>Ünite ${ui + 1} · ${esc(u.title)}</h3><div class="word-list">
        ${ws.map(w => {
          const st = strength(w.en);
          return `<div class="word-row"><div class="we">${w.emoji || '💬'}</div>
            <div class="wt"><div class="wen">${esc(w.en)}</div><div class="wtr">${esc(altsOf(w.tr).join(', '))}${dueLabel(w.en) ? ` · 🔁 ${dueLabel(w.en)}` : ''}</div></div>
            <div class="strength" title="Güç: ${st}/4">${[1, 2, 3, 4].map(i => `<i class="${i <= st ? 'on' : ''}"></i>`).join('')}</div>
            <button class="speaker mini" data-say="${esc(w.en)}" aria-label="Dinle">${ICON.speaker}</button></div>`;
        }).join('')}
      </div></div>`;
    });
    if (!html) html = '<p class="locked-note">Sonuç bulunamadı.</p>';
    if (openUnits < UNITS.length && !nq) html += `<p class="locked-note">🔒 ${UNITS.length - openUnits} ünite daha var. Derslere devam ederek yeni kelimelerin kilidini aç.</p>`;
    $('#wlist').innerHTML = html;
    $$('[data-say]', $('#wlist')).forEach(b => b.addEventListener('click', () => speak(b.dataset.say)));
  };
  draw('');
  $('#wsearch').addEventListener('input', e => draw(e.target.value));
}

// ---------- Profil sekmesi ----------
function renderProfile() {
  const days = [...Array(7)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (6 - i)); return { label: DAYS_TR[d.getDay()], xp: S.daily[dayKey(d)] || 0, today: i === 6 }; });
  const maxXp = Math.max(S.goal, ...days.map(d => d.xp));
  $('#page').innerHTML = `
    <div class="profile-head">
      <div class="avatar">${esc((S.name.trim()[0] || '?').toLocaleUpperCase('tr-TR'))}</div>
      <div style="flex:1;min-width:0"><input class="name-input" id="pname" value="${esc(S.name)}" maxlength="24" aria-label="Adın">
      <div class="muted" style="padding:0 8px;color:var(--muted)">İngilizce · Seviye ${currentLevel()} · ${esc(SECTIONS[SECTIONS.findIndex(x => x.level === currentLevel())].title)}</div></div>
    </div>
    <h2 class="section-title">İstatistikler</h2>
    <div class="stat-grid">
      <div class="stat-card"><div class="si">🔥</div><div><div class="sv">${S.streak}</div><div class="sk">Günlük seri</div></div></div>
      <div class="stat-card"><div class="si">⚡</div><div><div class="sv">${S.xp}</div><div class="sk">Toplam XP</div></div></div>
      <div class="stat-card"><div class="si">📘</div><div><div class="sv">${S.lessonsDone}</div><div class="sk">Tamamlanan ders</div></div></div>
      <div class="stat-card"><div class="si">📚</div><div><div class="sv">${wordsLearned()}</div><div class="sk">Öğrenilen kelime</div></div></div>
      <div class="stat-card"><div class="si">🏅</div><div><div class="sv">${S.bestStreak}</div><div class="sk">En uzun seri</div></div></div>
      <div class="stat-card"><div class="si">🗺️</div><div><div class="sv">${Math.min(UNITS.length, Math.floor(S.progress / LPU))} / ${UNITS.length}</div><div class="sk">Biten ünite</div></div></div>
    </div>
    <h2 class="section-title">Son 7 gün</h2>
    <div class="panel" style="margin-bottom:26px"><div class="chart">
      ${days.map(d => `<div class="col ${d.today ? 'today' : ''}"><div class="cv">${d.xp}</div><div class="colbar" style="height:${Math.round(d.xp / maxXp * 100)}%"></div><div class="cl">${d.label}</div></div>`).join('')}
    </div></div>
    <h2 class="section-title">Başarımlar</h2>
    <div class="ach-grid">
      ${ACHIEVEMENTS.map(a => `<div class="ach ${S.achievements[a.id] ? '' : 'off'}"><div class="ai">${a.icon}</div><h4>${esc(a.title)}</h4><p>${esc(a.desc)}</p></div>`).join('')}
    </div>
    <h2 class="section-title">Ayarlar</h2>
    <div class="panel settings">
      <label class="setting"><div><div>Ses efektleri</div><div class="sd">Doğru/yanlış sesleri</div></div><input type="checkbox" class="toggle" id="s-sound" ${S.sound ? 'checked' : ''}></label>
      <div class="setting"><div><div>Günlük hedef</div><div class="sd">Her gün kazanmak istediğin XP</div></div>
        <select class="select" id="s-goal">${[[10, 'Rahat'], [20, 'Normal'], [30, 'Ciddi'], [50, 'Yoğun']].map(([v, l]) => `<option value="${v}" ${S.goal === v ? 'selected' : ''}>${l} · ${v} XP</option>`).join('')}</select></div>
      <div class="setting"><div><div>Tema</div><div class="sd">Açık / koyu görünüm</div></div>
        <select class="select" id="s-theme">${[['auto', 'Sistem'], ['light', 'Açık'], ['dark', 'Koyu']].map(([v, l]) => `<option value="${v}" ${S.theme === v ? 'selected' : ''}>${l}</option>`).join('')}</select></div>
      <div class="setting"><div><div>Seviye tespit sınavı</div><div class="sd">${S.placement ? `Son sonuç: ${S.placement.level} (${S.placement.date})` : 'Henüz yapılmadı'}</div></div><button class="btn gold sm" id="s-place">${S.placement ? 'Tekrar yap' : 'Başla'}</button></div>
      <div class="setting"><div><div>İlerlemeyi sıfırla</div><div class="sd">Tüm verilerin silinir</div></div><button class="btn bad sm" id="s-reset">Sıfırla</button></div>
    </div>`;
  $('#pname').addEventListener('change', e => { S.name = e.target.value.trim() || 'Öğrenci'; save(); renderApp(); });
  $('#s-sound').addEventListener('change', e => { S.sound = e.target.checked; save(); });
  $('#s-goal').addEventListener('change', e => { S.goal = +e.target.value; save(); renderApp(); });
  $('#s-theme').addEventListener('change', e => { S.theme = e.target.value; save(); applyTheme(); });
  $('#s-place').addEventListener('click', startPlacement);
  $('#s-reset').addEventListener('click', () => {
    const m = openModal(`${mascot('sad')}<h2>Emin misin?</h2><p class="mtext">Tüm XP, seri ve ders ilerlemen kalıcı olarak silinecek.</p>
      <div class="modal-actions"><button class="btn bad" data-yes>Evet, sıfırla</button><button class="btn ghost" data-close>Vazgeç</button></div>`, 'center');
    $('[data-close]', m).addEventListener('click', closeModal);
    $('[data-yes]', m).addEventListener('click', () => { const theme = S.theme; S = defaultState(); S.theme = theme; save(); closeModal(); renderApp(); toast('İlerleme sıfırlandı.'); });
  });
}

// ==========================================================
//   DERS MOTORU
// ==========================================================
let L = null;

function startLesson(ui, li) {
  const g = ui * LPU + li;
  startSession({ mode: 'lesson', ui, li, g, exercises: genLesson(ui, li), replay: g < S.progress });
}
function startPractice(kind) {
  if (S.progress <= 0 && kind !== 'mistakes') { toast('Önce ilk dersini tamamla!'); return; }
  const exercises = genPractice(kind);
  if (!exercises.length) { toast('Şu an çalışılacak bir şey yok.'); return; }
  startSession({ mode: 'practice', kind, exercises });
}

function startSession(cfg) {
  closeModal();
  L = Object.assign(cfg, {
    queue: cfg.exercises.map(e => ({ ...e, tries: 0 })), total: cfg.exercises.length,
    done: 0, mistakes: 0, combo: 0, maxCombo: 0, start: Date.now(), cur: null, phase: 'answer', evaluate: null,
  });
  $('#app').innerHTML = `
    <div class="lesson">
      <header class="lesson-top">
        <button class="icon-btn close" id="quit" aria-label="Dersten çık">${ICON.cross}</button>
        <div class="lt-mid">
          <div class="lt-row"><span class="pl-tag" id="pltag">${L.mode === 'placement' ? '' : L.mode === 'test' ? 'Seviye atlama sınavı' : L.mode === 'practice' ? 'Pratik' : `${esc(UNITS[L.ui].title)} · ${esc(lessonNames(L.ui)[L.li])}`}</span><span class="pcount" id="pcount"></span></div>
          <div class="progress"><div class="progress-fill" id="pfill"></div></div>
        </div>
        <div class="lesson-hearts" id="lhearts" ${L.mode === 'test' ? '' : 'hidden'}>${ICON.cross}<span>${L.lives || 0}</span></div>
        <div id="combo"></div>
      </header>
      <div class="lesson-body"><div class="ex" id="ex"></div></div>
      <footer class="lesson-foot" id="foot">
        <div class="foot-inner">
          <div class="foot-msg" id="fmsg"></div>
          <div class="foot-actions">
            <button class="btn ghost" id="skip">Geç</button>
            <button class="btn ok" id="check" disabled>Kontrol et</button>
          </div>
        </div>
      </footer>
    </div>`;
  window.scrollTo(0, 0);
  $('#quit').addEventListener('click', confirmQuit);
  $('#check').addEventListener('click', onMainButton);
  $('#skip').addEventListener('click', onSkip);
  next();
}

function confirmQuit() {
  const m = openModal(`${mascot('sad')}<h2>Bekle, gitme!</h2><p class="mtext">Şimdi çıkarsan bu dersteki ilerlemen kaybolacak.</p>
    <div class="modal-actions"><button class="btn primary" data-stay>Öğrenmeye devam et</button><button class="btn ghost" data-leave>Dersten çık</button></div>`, 'center');
  $('[data-stay]', m).addEventListener('click', closeModal);
  $('[data-leave]', m).addEventListener('click', () => { closeModal(); try { speechSynthesis.cancel(); } catch (e) { /* yoksay */ } renderApp(); });
}

const api = {
  ready(v) { if (L && L.phase === 'answer') $('#check').disabled = !v; },
  submit() { if (L && L.phase === 'answer' && !$('#check').disabled) doCheck(); },
  complete() { if (L && L.phase === 'answer') handleResult({ correct: true }); },
};

function next() {
  if (!L.queue.length && L.mode === 'placement' && placementAdvance()) return next();
  if (!L.queue.length) return finish();
  clearTimeout(L.autoNext);
  L.cur = L.queue.shift();
  L.phase = 'answer'; L.evaluate = null;
  const foot = $('#foot');
  foot.className = 'lesson-foot';
  $('#fmsg').innerHTML = '';
  const check = $('#check');
  check.textContent = 'Kontrol et'; check.className = 'btn ok'; check.disabled = true;
  const skip = $('#skip');
  skip.style.display = L.cur.type === 'match' ? 'none' : '';
  skip.textContent = L.mode === 'placement' ? 'Bilmiyorum' : LISTEN_TYPES.includes(L.cur.type) && L.mode !== 'test' ? 'Şu an dinleyemiyorum' : 'Geç';
  check.style.display = L.cur.type === 'match' || L.cur.options ? 'none' : '';
  const root = $('#ex');
  root.className = 'ex';
  void root.offsetWidth; // animasyonu yeniden başlat
  root.innerHTML = '';
  R[L.cur.type](L.cur, root);
  updateProgress();
}

function updateProgress() {
  if (L.mode === 'placement') {
    const p = L.pl, size = p.stage === 'ext' ? 9 : 6;
    $('#pfill').style.width = `${Math.min(100, ((p.li + p.asked / size) / SECTIONS.length) * 100)}%`;
    $('#pltag').textContent = `Seviye tespiti · ${SECTIONS[p.li].level} soruları`;
    $('#pcount').textContent = '';
    return;
  }
  $('#pfill').style.width = `${(L.done / L.total) * 100}%`;
  $('#pcount').textContent = `${Math.min(L.done, L.total)} / ${L.total}`;
}

function doCheck() {
  if (!L.evaluate) return;
  const r = L.evaluate();
  if (L.mode === 'placement') $$('.is-correct, .is-wrong', $('#ex')).forEach(b => b.classList.remove('is-correct', 'is-wrong'));
  handleResult(r);
}

function onMainButton() {
  if (!L) return;
  if (L.phase === 'answer') doCheck();
  else if (L.mode === 'test' && L.lives <= 0) testFailed();
  else next();
}

function onSkip() {
  if (!L || L.phase !== 'answer') return;
  if (L.mode === 'placement') { handleResult({ correct: false, skipped: true }); return; }
  const group = LISTEN_TYPES;
  if (group.includes(L.cur.type) && L.mode !== 'test') {
    // Ceza yok: bu türdeki kalan egzersizleri bu oturumdan çıkar
    const removed = L.queue.filter(e => group.includes(e.type)).length;
    L.queue = L.queue.filter(e => !group.includes(e.type));
    L.total -= removed + 1;
    if (L.total < 1) L.total = 1;
    toast('Dinleme egzersizleri bu ders için kapatıldı.');
    next();
    return;
  }
  handleResult({ correct: false, skipped: true });
}

function markWords(list, ok) {
  (list || []).forEach(en => {
    const k = en.toLowerCase();
    const w = S.words[k] || (S.words[k] = { c: 0, w: 0 });
    if (ok) w.c++; else w.w++;
    srsUpdate(en, ok);
  });
}

function handleResult(r) {
  L.phase = 'feedback';
  const e = L.cur;
  $('#ex').classList.add('locked');
  if (L.mode === 'placement') {
    // Sınavda doğru/yanlış gösterilmez; cevap kaydedilip sıradaki soruya geçilir
    L.pl.asked++; if (r.correct) L.pl.correct++;
    $('#check').disabled = true; $('#skip').style.display = 'none';
    sfx.tap();
    setTimeout(() => { if (L && L.mode === 'placement') next(); }, 350);
    return;
  }
  markWords(e.words, r.correct);
  const foot = $('#foot');
  const check = $('#check');
  $('#skip').style.display = 'none';
  check.style.display = '';
  check.disabled = false;
  check.textContent = 'Devam';
  const replay = e.audio ? `<button class="speaker mini" id="fb-say" aria-label="Tekrar dinle" style="margin-left:6px;vertical-align:middle">${ICON.speaker}</button>` : '';

  if (r.correct) {
    L.done++; L.combo++; L.maxCombo = Math.max(L.maxCombo, L.combo);
    if (L.kind === 'mistakes' && e.src) {
      const k = norm(e.src.en, 'en'), m = S.mistakes[k];
      if (m && ++m.fix >= 2) delete S.mistakes[k];
    }
    foot.className = 'lesson-foot correct';
    check.className = 'btn ok';
    const body = [r.note, e.meaning ? `Anlamı: ${esc(e.meaning)}` : ''].filter(Boolean).join('<br>');
    $('#fmsg').innerHTML = `<div class="fm-icon">${ICON.check}</div><div><h3>${pickOne(PRAISE)} ${replay}</h3>${body ? `<div class="fm-body">${body}</div>` : ''}</div>`;
    sfx.ok();
    if (e.audio && e.type !== 'listen') speak(e.audio);
    L.autoNext = setTimeout(() => { if (L && L.phase === 'feedback' && L.cur === e) next(); }, 550);
    if ([3, 5, 10, 15].includes(L.combo)) {
      $('#combo').innerHTML = `<div class="combo-tag">🔥 Üst üste ${L.combo} doğru!</div>`;
      setTimeout(() => { const c = $('#combo'); if (c) c.innerHTML = ''; }, 1800);
    }
  } else {
    L.mistakes++; L.combo = 0;
    if (e.src && !r.skipped) { recordMistake(e.src, r.note); L.newMistakes = (L.newMistakes || 0) + 1; }
    foot.className = 'lesson-foot wrong';
    check.className = 'btn bad';
    const body = `<b>${esc(e.answerText)}</b>${e.meaning ? `<small>Anlamı: ${esc(e.meaning)}</small>` : ''}${r.note ? `<small>${r.note}</small>` : ''}`;
    $('#fmsg').innerHTML = `<div class="fm-icon">${ICON.cross}</div><div><h3>${r.skipped ? 'Doğru cevap' : 'Tam olmadı'} ${replay}</h3><div class="fm-body">${body}</div></div>`;
    sfx.bad();
    if (L.mode === 'test' && !e.noPenalty) {
      L.lives--;
      const lh = $('#lhearts');
      lh.querySelector('span').textContent = L.lives;
      lh.classList.remove('shake'); void lh.offsetWidth; lh.classList.add('shake');
    }
    // Yanlış cevaplanan soruyu sona ekle (en fazla 2 kez)
    if (e.tries < 2 && L.mode !== 'test') L.queue.push({ ...e, tries: e.tries + 1 });
    else L.done++;
  }
  save();
  updateProgress();
  const fb = $('#fb-say');
  if (fb) fb.addEventListener('click', ev => { ev.stopPropagation(); speak(e.audio); });
}

function testFailed() {
  const m = openModal(`${mascot('sad')}<h2>Bu sefer olmadı</h2>
    <p class="mtext">Hata hakkın bitti. Endişelenme: dersleri sırayla yaparak bu seviyeye adım adım ulaşabilir, sınavı istediğin zaman tekrar deneyebilirsin.</p>
    <div class="modal-actions"><button class="btn primary" data-home>Ana sayfaya dön</button></div>`, 'center');
  $('[data-home]', m).addEventListener('click', () => { closeModal(); renderApp(); });
}

function finish() {
  if (L.mode === 'placement') return finishPlacement();
  const secs = Math.round((Date.now() - L.start) / 1000);
  const firstTry = L.exercises.length;
  const acc = Math.round(firstTry / (firstTry + L.mistakes) * 100);
  const perfect = L.mistakes === 0;
  let xp;
  if (L.mode === 'practice') xp = 5;
  else if (L.mode === 'test') xp = 25;
  else if (L.replay) xp = 5;
  else xp = lessonXp(L.ui, L.li);
  if (perfect && L.mode === 'lesson') xp += 5;

  const today = dayKey();
  const goalBefore = todayXp() >= S.goal;
  S.xp += xp;
  S.daily[today] = (S.daily[today] || 0) + xp;
  const goalNow = !goalBefore && todayXp() >= S.goal;

  let streakUp = false;
  if (S.lastActive !== today) {
    S.streak = S.lastActive === daysAgoKey(1) ? S.streak + 1 : 1;
    S.lastActive = today; streakUp = true;
  }
  S.bestStreak = Math.max(S.bestStreak, S.streak);
  S.lessonsDone++;

  let unitDone = false;
  let testPassed = null;
  if (L.mode === 'test') {
    const start = sectionStartUnit(L.si) * LPU;
    if (S.progress < start) S.progress = start;
    testPassed = SECTIONS[L.si];
  } else if (L.mode === 'lesson') {
    S.completed[L.g] = (S.completed[L.g] || 0) + 1;
    if (L.g === S.progress) { S.progress++; unitDone = L.li === LPU - 1; }
  }

  // Başarımlar
  const unlocked = [];
  const award = (id, cond) => { if (cond && !S.achievements[id]) { S.achievements[id] = today; unlocked.push(ACHIEVEMENTS.find(a => a.id === id)); } };
  award('first', L.mode === 'lesson');
  award('perfect', perfect && L.mode === 'lesson');
  award('combo10', L.maxCombo >= 10);
  award('unit', S.progress >= LPU);
  award('streak3', S.streak >= 3);
  award('streak7', S.streak >= 7);
  award('xp100', S.xp >= 100);
  award('xp500', S.xp >= 500);
  award('words50', wordsLearned() >= 50);
  award('practice', L.mode === 'practice');
  award('test', L.mode === 'test');
  award('xp2000', S.xp >= 2000);
  SECTIONS.forEach((sec, si) => {
    const nextStart = si + 1 < SECTIONS.length ? sectionStartUnit(si + 1) * LPU : TOTAL_LESSONS;
    award(sec.level.toLowerCase(), S.progress >= nextStart && L.mode !== 'test');
  });
  save();

  sfx.win();
  const mode = L.mode, ui = L.ui, newMistakes = L.newMistakes || 0, maxCombo = L.maxCombo;
  L = null;
  const extras = [];
  if (streakUp) extras.push(`<div class="panel"><div class="big-emoji">🔥</div><div><b>${S.streak} günlük seri!</b><div class="muted">Yarın da gel, seriyi koru.</div></div></div>`);
  if (goalNow) extras.push(`<div class="panel"><div class="big-emoji">🎯</div><div><b>Günlük hedef tamamlandı!</b><div class="muted">Bugün ${todayXp()} XP kazandın.</div></div></div>`);
  if (newMistakes) extras.push(`<div class="panel"><div class="big-emoji">📕</div><div><b>${newMistakes} cümle hata defterine eklendi</b><div class="muted">Pratik sekmesinden tekrar çalışabilirsin.</div></div></div>`);
  if (testPassed) extras.push(`<div class="panel"><div class="big-emoji">🚀</div><div><b>${testPassed.level} seviyesi açıldı!</b><div class="muted">${esc(testPassed.title)} bölümünden devam edebilirsin.</div></div></div>`);
  if (unitDone) extras.push(`<div class="panel"><div class="big-emoji">🏆</div><div><b>${esc(UNITS[ui].title)} ünitesi bitti!</b><div class="muted">${ui + 1 < UNITS.length ? `Sıradaki: ${esc(UNITS[ui + 1].title)}` : 'Tüm üniteleri tamamladın!'}</div></div></div>`);
  unlocked.forEach(a => extras.push(`<div class="panel"><div class="big-emoji">${a.icon}</div><div><b>Yeni başarım: ${esc(a.title)}</b><div class="muted">${esc(a.desc)}</div></div></div>`));

  $('#app').innerHTML = `
    <div class="result">
      <div class="result-card">
        <div class="rc-head">${mascot(perfect ? 'wow' : 'happy', 'bounce')}<div>
          <div class="kicker">${mode === 'practice' ? 'Pratik' : mode === 'test' ? 'Seviye sınavı' : 'Ders'} tamamlandı</div>
          <h1>${testPassed ? 'Sınavı geçtin!' : perfect ? 'Kusursuz!' : acc >= 80 ? 'Harika iş çıkardın!' : 'Tebrikler, bitirdin!'}</h1>
        </div></div>
        <div class="rc-main">
          ${ring(acc, 140, 14, `<b>%${acc}</b><small>doğruluk</small>`)}
          <div class="rc-stats">
            <div><span>⭐</span><b>+${xp}</b><small>XP</small></div>
            <div><span>⏱</span><b>${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</b><small>süre</small></div>
            <div><span>🔥</span><b>${maxCombo}</b><small>en uzun seri</small></div>
          </div>
        </div>
        <div class="result-extra">${extras.join('')}</div>
      </div>
      <div class="result-foot"><button class="btn primary" id="rdone">Devam et</button></div>
    </div>`;
  confetti();
  $('#rdone').addEventListener('click', () => { S.tab = 'learn'; save(); renderApp(); });
}

function confetti() {
  const c = document.createElement('div');
  c.className = 'confetti';
  const colors = ['#0E9F8B', '#FF7A59', '#F5B700', '#3FD3BE', '#13233F', '#FFB4A2'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = pickOne(colors);
    p.style.animationDuration = 1.8 + Math.random() * 1.8 + 's';
    p.style.animationDelay = Math.random() * 0.6 + 's';
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    c.appendChild(p);
  }
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 4500);
}

// ==========================================================
//   EGZERSİZ GÖRÜNÜMLERİ
// ==========================================================
const R = {};

function bindOptions(root, selector, onPick) {
  const btns = $$(selector, root);
  btns.forEach((b, i) => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.remove('selected'));
    b.classList.add('selected');
    onPick(i, b);
    setTimeout(() => api.submit(), 60);
  }));
  return btns;
}
function optResult(e, sel) {
  const correct = sel === e.correct;
  const why = !correct && e.reasons && e.reasons[sel];
  return { correct, note: why ? `💡 ${esc(why)}` : undefined };
}
function markOptions(btns, sel, correct) {
  btns[correct] && btns[correct].classList.add('is-correct');
  if (sel !== correct && btns[sel]) btns[sel].classList.add('is-wrong');
}

R.pick = (e, root) => {
  root.innerHTML = `<div class="ex-kind">✨ Yeni kelime</div>
    <h2 class="ex-title">“${esc(e.prompt)}” hangisi?</h2>
    <div class="cards">${e.options.map((o, i) => `<button class="card-opt" data-key><span class="kbd">${i + 1}</span><span class="card-emoji">${o.emoji}</span><span>${esc(o.en)}</span></button>`).join('')}</div>`;
  let sel = -1;
  const btns = bindOptions(root, '.card-opt', i => { sel = i; speak(e.options[i].en); api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

R.choice = (e, root) => {
  root.innerHTML = `<div class="ex-kind">📝 Anlamını seç</div>
    <h2 class="ex-title">Bu kelimenin anlamı ne?</h2>
    <div class="word-hero"><button class="speaker" data-say aria-label="Dinle">${ICON.speaker}</button><span class="w">${esc(e.word.en)}</span><span class="e">${e.word.emoji || ''}</span></div>
    <div class="opts">${e.options.map((o, i) => `<button class="opt" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  $('[data-say]', root).addEventListener('click', () => speak(e.word.en));
  speak(e.word.en);
  let sel = -1;
  const btns = bindOptions(root, '.opt', i => { sel = i; api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

R.choiceRev = (e, root) => {
  root.innerHTML = `<div class="ex-kind">🔁 İngilizcesini seç</div>
    <h2 class="ex-title">“${esc(e.prompt)}” İngilizcede nasıl söylenir?</h2>
    <div class="opts">${e.options.map((o, i) => `<button class="opt" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  let sel = -1;
  const btns = bindOptions(root, '.opt', i => { sel = i; speak(e.options[i]); api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

function tileExercise(e, root, header) {
  root.innerHTML = `${header}
    <div class="answer-zone" id="az"></div>
    <div class="bank" id="bank">${e.tiles.map((t, i) => `<button class="tile" data-t="${i}">${esc(t)}</button>`).join('')}</div>`;
  const az = $('#az', root);
  const chosen = [];
  const bankBtns = $$('#bank .tile', root);
  const redraw = () => {
    az.innerHTML = chosen.map(i => `<button class="tile" data-c="${i}">${esc(e.tiles[i])}</button>`).join('');
    bankBtns.forEach((b, i) => b.classList.toggle('ghosted', chosen.includes(i)));
    $$('[data-c]', az).forEach(b => b.addEventListener('click', () => {
      chosen.splice(chosen.indexOf(+b.dataset.c), 1); sfx.tap(); redraw();
    }));
    api.ready(chosen.length > 0);
    if (L.mode !== 'placement' && chosen.length && exactMatch(chosen.map(i => e.tiles[i]).join(' '), e.answers, e.lang)) setTimeout(() => api.submit(), 120);
  };
  bankBtns.forEach((b, i) => b.addEventListener('click', () => {
    if (chosen.includes(i)) return;
    chosen.push(i); sfx.tap();
    if (e.lang === 'en' && e.type !== 'listen') speak(e.tiles[i]);
    redraw();
  }));
  L.evaluate = () => ({ correct: exactMatch(chosen.map(i => e.tiles[i]).join(' '), e.answers, e.lang) });
}

R.build = (e, root) => {
  const promptHtml = e.dir === 'tr'
    ? `<button class="speaker mini" data-say aria-label="Dinle">${ICON.speaker}</button><span>${e.prompt.split(/\s+/).map(w => `<span class="hint-word" data-w="${esc(w)}">${esc(w)}</span>`).join(' ')}</span>`
    : esc(e.prompt);
  const ctx = e.context ? `<div class="chat"><div class="chat-avatar">🧑</div><div class="bubble"><button class="speaker mini" data-ctx aria-label="Dinle">${ICON.speaker}</button>${esc(e.context)}</div></div>` : '';
  tileExercise(e, root, `<div class="ex-kind">${e.context ? '🗣️ Cevap ver' : '🧱 Cümle kur'}</div>
    <h2 class="ex-title">${e.context ? 'Cevabını İngilizce kur' : e.dir === 'en' ? 'Bu cümleyi İngilizceye çevir' : 'Bu cümleyi Türkçeye çevir'}</h2>
    ${ctx}
    ${e.dir === 'en' ? scene(e) : ''}
    <div class="bubble-row">${mascot('happy')}<div class="bubble">${promptHtml}</div></div>`);
  if (e.context) {
    $('[data-ctx]', root).addEventListener('click', () => speak(e.context));
    setTimeout(() => speak(e.context), 200);
  }
  if (e.dir === 'tr') {
    $('[data-say]', root).addEventListener('click', () => speak(e.prompt));
    $$('.hint-word', root).forEach(w => w.addEventListener('click', () => speak(w.dataset.w.replace(/[.,!?]/g, ''))));
    speak(e.prompt);
  }
};

R.listen = (e, root) => {
  tileExercise(e, root, `<div class="ex-kind">🎧 Dinle</div>
    <h2 class="ex-title">Duyduğunu oluştur</h2>
    <div class="listen-row">
      <button class="speaker" data-say aria-label="Dinle">${ICON.speaker}</button>
      <button class="speaker slow" data-slow aria-label="Yavaş dinle">${ICON.turtle}</button>
    </div>`);
  $('[data-say]', root).addEventListener('click', () => speak(e.audio));
  $('[data-slow]', root).addEventListener('click', () => speak(e.audio, true));
  setTimeout(() => speak(e.audio), 250);
};

R.fill = (e, root) => {
  const sentence = e.parts.map((p, i) => {
    if (i !== e.blankIdx) return esc(p);
    const punct = (p.match(/[.,!?]+$/) || [''])[0];
    return `<span class="blank" id="blank">&nbsp;</span>${esc(punct)}`;
  }).join(' ');
  root.innerHTML = `<div class="ex-kind">🧩 Boşluğu doldur</div>
    <h2 class="ex-title">Doğru kelimeyi seç</h2>
    <div class="fill-sentence">${sentence}</div>
    <div class="fill-hint">💡 ${esc(e.hint)}</div>
    <div class="pills">${e.options.map((o, i) => `<button class="pill" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  let sel = -1;
  const btns = bindOptions(root, '.pill', i => { sel = i; $('#blank', root).textContent = e.options[i]; api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

R.reply = (e, root) => {
  root.innerHTML = `<div class="ex-kind">🗣️ Diyalog</div>
    <h2 class="ex-title">En uygun cevabı seç</h2>
    <div class="chat">
      <div class="chat-avatar">🧑</div>
      <div class="bubble"><button class="speaker mini" data-say aria-label="Dinle">${ICON.speaker}</button>
        <div><div>${esc(e.q)}</div>${e.qtr ? `<div class="chat-hint">${esc(e.qtr)}</div>` : ''}</div></div>
    </div>
    <div class="opts">${e.options.map((o, i) => `<button class="opt" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  $('[data-say]', root).addEventListener('click', () => speak(e.q));
  setTimeout(() => speak(e.q), 200);
  let sel = -1;
  const btns = bindOptions(root, '.opt', i => { sel = i; speak(e.options[i]); api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

R.sentChoice = (e, root) => {
  root.innerHTML = `<div class="ex-kind">🔍 Doğru çeviri</div>
    <h2 class="ex-title">Doğru İngilizce çeviriyi seç</h2>
    ${scene(e)}
    <div class="bubble-row">${mascot('happy')}<div class="bubble">${esc(e.prompt)}</div></div>
    <div class="opts">${e.options.map((o, i) => `<button class="opt" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  let sel = -1;
  const btns = bindOptions(root, '.opt', i => { sel = i; api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

function listenHeader(kind, title) {
  return `<div class="ex-kind">${kind}</div>
    <h2 class="ex-title">${title}</h2>
    <div class="listen-row">
      <button class="speaker" data-say aria-label="Dinle">${ICON.speaker}</button>
      <button class="speaker slow" data-slow aria-label="Yavaş dinle">${ICON.turtle}</button>
    </div>`;
}
function bindListen(e, root) {
  $('[data-say]', root).addEventListener('click', () => speak(e.audio));
  $('[data-slow]', root).addEventListener('click', () => speak(e.audio, true));
  setTimeout(() => speak(e.audio), 250);
}

R.listenPick = (e, root) => {
  root.innerHTML = `${listenHeader('🎧 Dinle ve bul', 'Duyduğun cümleyi seç')}
    <div class="opts">${e.options.map((o, i) => `<button class="opt" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  bindListen(e, root);
  let sel = -1;
  const btns = bindOptions(root, '.opt', i => { sel = i; api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

R.listenWord = (e, root) => {
  root.innerHTML = `${listenHeader('🎧 Dinle', 'Duyduğun kelimenin anlamı ne?')}
    <div class="opts">${e.options.map((o, i) => `<button class="opt" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  bindListen(e, root);
  let sel = -1;
  const btns = bindOptions(root, '.opt', i => { sel = i; api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

R.match = (e, root) => {
  const left = shuffle(e.pairs.map((p, i) => ({ i, t: p.en })));
  const right = shuffle(e.pairs.map((p, i) => ({ i, t: p.tr })));
  root.innerHTML = `<div class="ex-kind">🔗 Eşleştir</div>
    <h2 class="ex-title">Eşleri bul</h2>
    <div class="match-grid">
      <div class="match-col">${left.map(x => `<button class="match-btn" data-side="l" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>
      <div class="match-col">${right.map(x => `<button class="match-btn" data-side="r" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>
    </div>`;
  let selL = null, selR = null, matched = 0, wrongs = 0;
  const tryMatch = () => {
    if (!selL || !selR) return;
    const a = selL, b = selR; selL = selR = null;
    a.classList.remove('selected'); b.classList.remove('selected');
    if (a.dataset.i === b.dataset.i) {
      a.classList.add('flash-ok'); b.classList.add('flash-ok'); sfx.ok();
      setTimeout(() => { a.classList.add('matched'); b.classList.add('matched'); }, 280);
      if (++matched === e.pairs.length) setTimeout(() => api.complete(), 450);
    } else {
      wrongs++;
      a.classList.add('flash-bad'); b.classList.add('flash-bad'); sfx.bad();
      markWords([e.pairs[+a.dataset.i].en], false);
      setTimeout(() => { a.classList.remove('flash-bad'); b.classList.remove('flash-bad'); }, 450);
    }
  };
  $$('.match-btn', root).forEach(btn => btn.addEventListener('click', () => {
    if (btn.classList.contains('matched')) return;
    if (btn.dataset.side === 'l') {
      if (selL) selL.classList.remove('selected');
      selL = btn; speak(btn.textContent);
    } else {
      if (selR) selR.classList.remove('selected');
      selR = btn;
    }
    btn.classList.add('selected'); sfx.tap();
    tryMatch();
  }));
  L.evaluate = null;
};

// ==========================================================
//   SEVİYE TESPİTİ
// ==========================================================
ex.mcq = item => {
  const [text, correct, ...wrong] = item;
  const options = shuffle([correct, ...wrong]);
  return { type: 'mcq', text, options, correct: options.indexOf(correct), answerText: text.replace('___', correct), words: [] };
};

R.mcq = (e, root) => {
  const [before, after] = e.text.split('___');
  root.innerHTML = `<div class="ex-kind">📐 Dilbilgisi</div>
    <h2 class="ex-title">Boşluğa uygun olanı seç</h2>
    <div class="fill-sentence">${esc(before)}<span class="blank" id="blank">&nbsp;</span>${esc(after)}</div>
    <div class="pills" style="margin-top:26px">${e.options.map((o, i) => `<button class="pill" data-key><span class="kbd">${i + 1}</span>${esc(o)}</button>`).join('')}</div>`;
  let sel = -1;
  const btns = bindOptions(root, '.pill', i => { sel = i; $('#blank', root).textContent = e.options[i]; api.ready(true); });
  L.evaluate = () => { markOptions(btns, sel, e.correct); return optResult(e, sel); };
};

const hasTTS = () => 'speechSynthesis' in window && voices.length > 0;

// Bir seviye için karma soru bloğu: dilbilgisi, kelime, dinleme, diyalog, yazma
function placementBlock(li, ext) {
  const lvl = SECTIONS[li].level;
  const units = UNITS.filter(u => u.level === lvl);
  const words = units.flatMap(u => u.words);
  const sents = units.flatMap(u => u.sentences);
  const dialogs = units.flatMap(u => u.dialogs);
  const used = L.pl.used;
  const mcq = () => {
    const free = PLACEMENT_BANK[lvl].filter(q => !used.has(q[0]));
    const q = pickOne(free.length ? free : PLACEMENT_BANK[lvl]);
    used.add(q[0]);
    return ex.mcq(q);
  };
  const sent = () => { const free = sents.filter(s => !used.has(s.en)); const s = pickOne(free.length ? free : sents); used.add(s.en); return s; };
  const list = [];
  if (ext) {
    list.push(mcq(), mcq(), lvl === 'A1' ? ex.build(sent(), sents, words, 'en') : ex.sentChoice(sent(), words));
  } else if (lvl === 'A1') {
    list.push(mcq(), mcq(), mcq(), ex.choice(pickOne(words), words));
    list.push(hasTTS() ? ex.build(sent(), sents, words, 'en', 'listen') : mcq());
    list.push(ex.build(sent(), sents, words, 'en'));
  } else {
    list.push(mcq(), mcq(), ex.choiceRev(pickOne(words), words));
    list.push(ex.reply(pickOne(dialogs), dialogs, false));
    list.push(hasTTS() ? ex.listenPick(sent(), words) : mcq());
    list.push(ex.sentChoice(sent(), words));
  }
  return shuffle(list).map(e => ({ ...e, tries: 0 }));
}

function startPlacement() {
  closeModal();
  const cfg = { mode: 'placement', exercises: [] };
  // startSession'dan önce blok üretebilmek için geçici oturum
  L = { pl: { li: 0, stage: 'main', asked: 0, correct: 0, passed: -1, scores: [], used: new Set() } };
  cfg.exercises = placementBlock(0, false);
  const pl = L.pl;
  startSession(Object.assign(cfg, { pl }));
}

// Sıradaki bloğa geçilecekse true döner
function placementAdvance() {
  const p = L.pl;
  let verdict;
  if (p.stage === 'main') verdict = p.correct >= 5 ? 'pass' : p.correct <= 3 ? 'fail' : 'ext';
  else verdict = p.correct >= 7 ? 'pass' : 'fail';
  if (verdict === 'ext') { p.stage = 'ext'; L.queue.push(...placementBlock(p.li, true)); return true; }
  p.scores.push({ level: SECTIONS[p.li].level, correct: p.correct, total: p.asked, passed: verdict === 'pass' });
  if (verdict === 'fail') return false;
  p.passed = p.li;
  if (p.li + 1 >= SECTIONS.length) return false;
  Object.assign(p, { li: p.li + 1, stage: 'main', asked: 0, correct: 0 });
  L.queue.push(...placementBlock(p.li, false));
  return true;
}

function finishPlacement() {
  const p = L.pl;
  const secs = Math.round((Date.now() - L.start) / 1000);
  L = null;
  const result = PLACEMENT_LEVELS[p.passed + 1];
  const startSec = p.passed + 1; // başlanacak bölüm
  const target = startSec >= SECTIONS.length ? TOTAL_LESSONS : sectionStartUnit(startSec) * LPU;
  const lower = target < S.progress;
  const rows = SECTIONS.map(sec => {
    const sc = p.scores.find(x => x.level === sec.level);
    if (!sc) return `<div class="pl-row off"><span class="pl-lvl">${sec.level}</span><div class="bar"><div style="width:0"></div></div><span class="pl-res">—</span></div>`;
    const pct = Math.round(sc.correct / sc.total * 100);
    return `<div class="pl-row"><span class="pl-lvl">${sec.level}</span><div class="bar"><div style="width:${pct}%;background:${sc.passed ? 'var(--ok)' : 'var(--bad)'}"></div></div><span class="pl-res">${sc.correct}/${sc.total} ${sc.passed ? '✅' : '❌'}</span></div>`;
  }).join('');
  const startLabel = startSec >= SECTIONS.length ? 'Tüm dersler açık, devam et' : `${SECTIONS[startSec].level} seviyesinden başla`;

  sfx.win();
  $('#app').innerHTML = `
    <div class="result">
      ${mascot('wow', 'bounce')}
      <div class="ex-kind" style="justify-content:center">Seviye tespiti tamamlandı</div>
      <div class="pl-badge">${result.code}</div>
      <h1>${esc(result.title)}</h1>
      <p class="muted" style="max-width:440px;color:var(--muted)">${esc(result.desc)}</p>
      <div class="panel pl-table">${rows}<div class="bar-label"><span>${p.scores.reduce((a, b) => a + b.total, 0)} soru</span><span>⏱ ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}</span></div></div>
      ${lower ? '<p class="muted" style="color:var(--muted)">Mevcut ilerlemen bu seviyenin üstünde, o yüzden korunacak.</p>' : ''}
      <div class="result-foot" style="flex-direction:column;align-items:center;gap:10px">
        <button class="btn primary" id="pl-go">${startLabel}</button>
        ${startSec > 0 && !lower ? '<button class="btn ghost" id="pl-zero" style="width:100%;max-width:420px">A1\'den baştan başla</button>' : ''}
      </div>
    </div>`;
  confetti();
  const apply = prog => {
    S.onboarded = true;
    S.placement = { level: result.code, date: dayKey() };
    S.progress = Math.max(S.progress, prog);
    S.tab = 'learn';
    save(); renderApp();
    if (prog > 0) toast(`🎯 ${result.code} seviyesi kaydedildi. Önceki dersler açıldı!`);
  };
  $('#pl-go').addEventListener('click', () => apply(target));
  const z = $('#pl-zero');
  if (z) z.addEventListener('click', () => apply(0));
}

function renderWelcome() {
  $('#app').innerHTML = `
    <div class="welcome">
      ${mascot('happy', 'bounce')}
      <h1>Merhaba! Ben Pıtır 👋</h1>
      <p class="muted">Dilbaz ile İngilizceyi oyun oynar gibi öğreneceksin. Önce nereden başlayacağımıza karar verelim.</p>
      <div class="welcome-cards">
        <button class="practice-card" id="w-new"><div class="pi">🌱</div><div><h3>İngilizceye yeni başlıyorum</h3><p>En temelden, A1 seviyesinden başla.</p></div></button>
        <button class="practice-card" id="w-test"><div class="pi">🎯</div><div><h3>Biraz İngilizce biliyorum</h3><p>Kısa bir seviye tespit sınavına gir, sana uygun seviyeden başla.</p></div></button>
      </div>
      <p class="welcome-note">Sınav yaklaşık 5–10 dakika sürer. Soruların zorluğu cevaplarına göre ayarlanır: başarılı oldukça daha zor sorular gelir. Bilmediğin soruda tahmin etme, <b>Bilmiyorum</b>'a bas; sonuç daha doğru çıkar.</p>
    </div>`;
  $('#w-new').addEventListener('click', () => { S.onboarded = true; save(); renderApp(); });
  $('#w-test').addEventListener('click', startPlacement);
}

// ---------- Klavye kısayolları ----------
document.addEventListener('keydown', ev => {
  if (!L || $('#modal-root').children.length) return;
  const inInput = /INPUT|TEXTAREA|SELECT/.test(document.activeElement && document.activeElement.tagName);
  if (ev.key === 'Enter' && !inInput) {
    ev.preventDefault();
    const c = $('#check');
    if (c && !c.disabled && c.style.display !== 'none') c.click();
  } else if (!inInput && L.phase === 'answer' && /^[1-9]$/.test(ev.key)) {
    const opts = $$('[data-key]', $('#ex'));
    const b = opts[+ev.key - 1];
    if (b) b.click();
  }
});

// ---------- Başlat ----------
applyTheme();
renderApp();
