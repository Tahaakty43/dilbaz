// Dilbaz — Cümle hata analizcisi
// Kullanıcının kurduğu/söylediği/seçtiği cümleyi doğrusuyla karşılaştırır:
// hangi kelime eksik, fazla, yanlış yerde ya da yanlış biçimde, bulur ve Türkçe kuralını açıklar.

const W_BE = ['am', 'is', 'are', 'was', 'were'];
const W_AUX = ['do', 'does', 'did', 'is', 'are', 'am', 'was', 'were', 'can', 'could', 'will', 'would', 'should', 'have', 'has', 'had', 'may', 'might', 'must', 'shall'];
const W_WH = ['what', 'where', 'when', 'why', 'who', 'how', 'which', 'whose'];
const W_SUBJ = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'there'];
const W_ART = ['a', 'an', 'the'];
const W_PREP = ['in', 'on', 'at', 'to', 'for', 'from', 'with', 'by', 'of', 'about', 'into', 'until', 'since', 'during', 'after', 'before'];
const W_FREQ = ['always', 'usually', 'often', 'sometimes', 'never', 'rarely', 'seldom', 'already', 'just', 'still', 'also', 'ever', 'hardly'];
const W_TIME = ['yesterday', 'tomorrow', 'today', 'tonight', 'now', 'ago', 'soon', 'later', 'tomorrow', 'everyday'];
const W_MODAL = ['can', 'could', 'will', 'would', 'should', 'must', 'may', 'might'];
const W_GROUPS = [['am', 'is', 'are'], ['was', 'were'], ['do', 'does', 'did'], ['has', 'have', 'had'], ['a', 'an', 'the'],
  ['this', 'these', 'that', 'those'], ['my', 'your', 'his', 'her', 'our', 'their', 'its'], ['i', 'me', 'my'], ['he', 'him', 'his'],
  ['she', 'her'], ['we', 'us', 'our'], ['they', 'them', 'their'], ['much', 'many'], ['some', 'any'], ['will', 'would'], ['can', 'could']];
const W_IRREG = { went: 'go', saw: 'see', ate: 'eat', had: 'have', did: 'do', made: 'make', took: 'take', came: 'come', got: 'get',
  bought: 'buy', gave: 'give', said: 'say', told: 'tell', wrote: 'write', met: 'meet', left: 'leave', found: 'find', thought: 'think',
  knew: 'know', felt: 'feel', ran: 'run', sat: 'sit', slept: 'sleep', spoke: 'speak', drank: 'drink', drove: 'drive', began: 'begin',
  broke: 'break', brought: 'bring', chose: 'choose', forgot: 'forget', lost: 'lose', paid: 'pay', sold: 'sell', sent: 'send',
  spent: 'spend', stood: 'stand', taught: 'teach', understood: 'understand', woke: 'wake', won: 'win', wore: 'wear', flew: 'fly',
  fell: 'fall', heard: 'hear', kept: 'keep', became: 'become', built: 'build', caught: 'catch', swam: 'swim', sang: 'sing',
  was: 'be', were: 'be', gone: 'go', seen: 'see', eaten: 'eat', done: 'do', taken: 'take', given: 'give',
  written: 'write', spoken: 'speak', known: 'know', been: 'be', broken: 'break', chosen: 'choose', forgotten: 'forget', driven: 'drive' };
const W_PARTICIPLE = new Set(['gone', 'seen', 'eaten', 'done', 'taken', 'given', 'written', 'spoken', 'known', 'been', 'broken', 'chosen', 'forgotten', 'driven']);
const W_PREP_WHY = {
  in: "'in' içinde demektir; aylar, yıllar, şehirler, ülkeler ve 'in the morning/evening' kalıbıyla kullanılır.",
  on: "'on' üstünde demektir; günler, tarihler ve 'on the bus, on holiday, on the phone' kalıplarıyla kullanılır.",
  at: "'at' belli bir nokta ya da saat için kullanılır: at 7 o'clock, at home, at work, at the station.",
  to: "'to' yön ve hedef bildirir: go to school, talk to me, from 9 to 5.",
  for: "'for' için ya da süre bildirir: for you, for two hours.",
  from: "'from' -den/-dan demektir: I'm from Turkey, from Monday.",
  with: "'with' ile demektir: with my friend, coffee with milk.",
  of: "'of' -in/-ın anlamında aitlik bildirir: a cup of tea, the end of the film.",
  by: "'by' ile ulaşım ya da -e kadar anlamı verir: by bus, by Friday.",
  about: "'about' hakkında demektir: talk about it.",
};

function whyTok(s) { return norm(s, 'en').split(' ').filter(Boolean); }
// Gösterim için: normalleştirilmiş kelimeyi asıl yazımına (büyük harf) geri çevir
function whyDisplayMap(...strs) {
  const m = {};
  strs.forEach(s => tokens(String(s).replace(/[’`´]/g, "'")).forEach(r => { const k = norm(r, 'en'); if (k && !k.includes(' ') && !(k in m) && r !== r.toLowerCase()) m[k] = r; }));
  m.i = 'I';
  return m;
}
function whyLCS(a, b) {
  const dp = [...Array(a.length + 1)].map(() => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const ma = new Set(), mb = new Set();
  for (let i = a.length, j = b.length; i && j;) {
    if (a[i - 1] === b[j - 1]) { ma.add(i - 1); mb.add(j - 1); i--; j--; } else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--;
  }
  return { ma, mb, len: dp[a.length][b.length] };
}
const wMean = w => { const x = typeof findWord === 'function' ? findWord(w) : null; return x ? ` (${firstTr(x.tr)})` : ''; };
const q = w => `‘${w}’`;

// İki kelime arasındaki biçim ilişkisini açıklar (said: yanlış yazılan, ans: olması gereken)
function whyPair(bad, good, ansT, gi) {
  const prev = ansT[gi - 1] || '', before = ansT.slice(0, gi);
  const head = `${q(bad)} değil ${q(good)} olmalı. `;
  if (W_PREP.includes(bad) && W_PREP.includes(good)) return head + (W_PREP_WHY[good] || 'Edatlar kalıp olarak öğrenilir.');
  const grp = W_GROUPS.find(g => g.includes(bad) && g.includes(good));
  if (grp) {
    if (grp[0] === 'am') return head + "‘to be’ özneye göre seçilir: I → am, he/she/it ve tekil isimler → is, you/we/they ve çoğullar → are.";
    if (grp[0] === 'was') return head + "Geçmişte I/he/she/it → was, you/we/they ve çoğullar → were.";
    if (grp[0] === 'do') return head + (good === 'did' ? 'Cümle geçmiş zamanda; yardımcı fiil ‘did’ olur.' : "Geniş zamanda he/she/it → does, I/you/we/they → do; geçmişte hepsi did.");
    if (grp[0] === 'has') return head + (good === 'had' || bad === 'had' ? "‘had’ geçmiş zamandır; şimdiki durum için have/has kullanılır." : "he/she/it → has, I/you/we/they → have.");
    if (grp[0] === 'a') return head + (good === 'the' ? "‘the’ bilinen, daha önce sözü geçen ya da tek olan şey için kullanılır." : good === 'an' ? "Sesli harfle (a, e, i, o, u sesi) başlayan kelimeden önce ‘an’ gelir: an apple, an hour." : bad === 'the' ? "İlk kez bahsedilen, herhangi bir şey için ‘a/an’ kullanılır." : "Sessiz harfle başlayan kelimeden önce ‘a’ gelir: a car, a university.");
    if (grp[0] === 'this') return head + "this/that tekil, these/those çoğul isimle kullanılır; this/these yakın, that/those uzak için.";
    if (['i', 'he', 'she', 'we', 'they'].includes(grp[0])) return head + "Özne olarak I/he/she/we/they, fiilden sonra nesne olarak me/him/her/us/them, sahiplik için my/his/her/our/their kullanılır.";
    if (grp[0] === 'much') return head + "‘much’ sayılamayan (water, time, money), ‘many’ sayılabilen çoğul isimlerle (people, books) kullanılır.";
    if (grp[0] === 'some') return head + "‘some’ olumlu cümlelerde ve ikramlarda, ‘any’ olumsuz ve soru cümlelerinde kullanılır.";
    return head + `${q(good)}${wMean(good)} bu cümlenin anlamına uyan biçim.`;
  }
  // -s / -es / -ies
  const plusS = (b, g) => g === b + 's' || g === b + 'es' || (b.endsWith('y') && g === b.slice(0, -1) + 'ies');
  if (plusS(bad, good)) {
    if (['he', 'she', 'it'].includes(prev) || (prev && !W_SUBJ.includes(prev) && !W_ART.includes(prev) && before.length === 1 && !W_AUX.includes(prev)))
      return head + 'He/she/it ile geniş zamanda fiile -s eklenir: he works, she goes, it costs.';
    return head + 'Sondaki -s eki gerekli: he/she/it ile fiile, birden fazla şeyden bahsederken isme -s eklenir.';
  }
  if (plusS(good, bad)) {
    if (before.some(w => ['do', 'does', 'did', 'not', 'can', 'will', 'to', 'should', 'must'].includes(w)) && !W_ART.includes(prev))
      return head + 'do/does/did, not, to ve can/will/must gibi kelimelerden sonra fiil yalın kalır, -s almaz.';
    return head + 'Burada -s eki olmamalı: I/you/we/they ile fiil -s almaz; tek bir şeyden bahsederken isim de -s almaz.';
  }
  // -ing
  if (good.endsWith('ing') && (good.startsWith(bad.replace(/e$/, '')) && good.length - bad.length <= 4))
    return head + "am/is/are + fiil-ing şimdiki zamanı yapar (I am working); like, love, enjoy, stop gibi fiillerden sonra da -ing gelir.";
  if (bad.endsWith('ing') && bad.startsWith(good.replace(/e$/, '')) && bad.length - good.length <= 4)
    return head + "Burada -ing olmaz: can/will/do/to gibi kelimelerden sonra ya da geniş zamanda fiil yalın kullanılır.";
  // Geçmiş zaman
  if (good === bad + 'ed' || good === bad + 'd' || (bad.endsWith('y') && good === bad.slice(0, -1) + 'ied'))
    return head + 'Cümle geçmiş zamanda: düzenli fiillere -ed eklenir (work → worked, live → lived).';
  if (W_IRREG[good] === bad) {
    if (W_PARTICIPLE.has(good)) return head + `have/has/had’den sonra fiilin 3. hali gelir: ${bad} → ${good}.`;
    return head + `Cümle geçmiş zamanda. ${q(bad)} düzensiz bir fiildir; geçmiş hali ${q(good)}.`;
  }
  if (W_IRREG[bad] === good || bad === good + 'ed' || bad === good + 'd') {
    if (before.includes('did') || before.includes('not')) return head + "‘did/didn’t’ zaten geçmişi gösterir; ondan sonra fiil yalın halde kalır: Did you go? I didn't see.";
    return head + `Bu cümle geçmiş zamanda değil; fiilin yalın hali ${q(good)} kullanılır.`;
  }
  if (W_IRREG[bad] && W_IRREG[bad] === W_IRREG[good]) return head + (W_PARTICIPLE.has(good) ? 'have/has’ten sonra fiilin 3. hali gelir.' : 'Geçmiş zamanda fiilin 2. hali kullanılır.');
  // Karşılaştırma
  if (good === bad + 'er' || good === bad + 'r' || good === bad.replace(/y$/, 'ier')) return head + 'İki şeyi karşılaştırırken sıfata -er eklenir: bigger, cheaper (than ile).';
  if (good === bad + 'est' || good === bad + 'st' || good === bad.replace(/y$/, 'iest')) return head + 'En üstünlük için ‘the + sıfat-est’ kullanılır: the biggest, the cheapest.';
  return `${q(bad)}${wMean(bad)} değil, ${q(good)}${wMean(good)} olmalı.`;
}

function whyMissing(w, ansT, i, raw) {
  const next = ansT[i + 1] || '', past = ansT.some(x => ['was', 'were', 'did', 'yesterday', 'ago'].includes(x));
  if (W_BE.includes(w)) return `${q(w)} eksik. Türkçede “öğrenciyim, yorgunum, evde” gibi cümlelerde ‘olmak’ fiili görünmez ama İngilizcede am/is/are (geçmişte was/were) mutlaka yazılır.`;
  if (w === 'a' || w === 'an') return `${q(w)} eksik. Tekil ve sayılabilen bir isimden önce a/an gerekir (a ticket, an apple). Türkçede ‘bir’ söylenmese de İngilizcede şarttır.`;
  if (w === 'the') return `${q('the')} eksik. Bilinen, belirli ya da tek olan şeylerden önce ‘the’ gelir: the station, the bill, the city centre.`;
  if (w === 'not') return `${q('not')} eksik. Türkçedeki -me/-ma olumsuzluk eki İngilizcede ayrı bir kelimedir: do not, is not, can not.`;
  if (['do', 'does', 'did'].includes(w)) return next === 'not'
    ? `${q(w)} eksik. Asıl fiili olumsuz yaparken ${w} + not gerekir: I do not know, she does not work, we did not go.`
    : `${q(w)} eksik. Asıl fiilli sorularda Do/Does/Did başa gelir: Do you like…? Where did you go?`;
  if (w === 'will') return `${q('will')} eksik. Gelecek zaman ya da anlık karar için fiilden önce ‘will’ gerekir: I will call you.`;
  if (['have', 'has'].includes(w) && next && (W_PARTICIPLE.has(next) || next.endsWith('ed'))) return `${q(w)} eksik. Present perfect: have/has + fiilin 3. hali (I have seen, she has finished).`;
  if (w === 'to') return `${q('to')} eksik. want, need, would like, try, decide gibi fiillerden sonra ikinci fiil ‘to’ ile gelir (I want to go); yön bildirirken de ‘go to’ denir.`;
  if (w === 'it') return `${q('it')} eksik. Hava, saat, mesafe ve genel durumlardan bahsederken özne olarak ‘it’ yazılır: It is cold. It's ten o'clock.`;
  if (w === 'there') return `${q('there')} eksik. “Var/yok” demek için there is / there are kullanılır: There is a bank near here.`;
  if (W_SUBJ.includes(w)) return `${q(w)} eksik. Türkçede “geliyorum” kelimesi özneyi kendi içinde taşır; İngilizcede özne (I, you, he, we…) her zaman ayrıca yazılır.`;
  if (w === 's') return `${q("'s")} eksik. Sahiplik ismin sonuna ’s eklenerek yapılır: Tom’s car, my mother’s house.`;
  if (W_PREP.includes(w)) return `${q(w)} edatı eksik. ${W_PREP_WHY[w] || 'İngilizcede Türkçedeki hal eklerinin (-e, -de, -den) yerini edatlar tutar.'}`;
  if (W_MODAL.includes(w)) return `${q(w)} eksik. ${w === 'can' || w === 'could' ? 'Yetenek, izin ya da rica için' : 'Bu anlam için'} fiilden önce ‘${w}’ gelir.`;
  return `${q(w)}${wMean(w)} eksik.`;
}

function whyExtra(w, ansT, saidT) {
  if (W_BE.includes(w) && !ansT.some(x => W_BE.includes(x))) return `${q(w)} fazla. Cümlede asıl bir fiil varsa geniş ve geçmiş zamanda am/is/are kullanılmaz: I work (I am work değil), she lives.`;
  if (W_ART.includes(w)) return `${q(w)} fazla. Genel anlamda konuşurken, çoğul ya da sayılamayan isimlerde (water, money), my/your gibi sahiplik sözcüklerinden ve şehir/ülke adlarından önce artikel kullanılmaz.`;
  if (w === 'to' && ansT.some(x => W_MODAL.includes(x))) return `${q('to')} fazla. can, must, should, will, would gibi kelimelerden sonra fiil doğrudan gelir: I can swim (I can to swim değil).`;
  if (w === 'to') return `${q('to')} fazla. Bu kalıpta ‘to’ kullanılmaz (ör. go home, call me, let me go).`;
  if (['do', 'does', 'did'].includes(w)) return `${q(w)} fazla. am/is/are, can, will gibi yardımcı fiili olan cümlelerde ve düz olumlu cümlelerde do/does/did kullanılmaz.`;
  if (w === 'not') return `${q('not')} fazla. Cümle olumlu, olumsuzluk yok.`;
  if (W_SUBJ.includes(w) && saidT.filter(x => x === w).length > 1) return `${q(w)} iki kez kullanılmış.`;
  return `${q(w)}${wMean(w)} bu cümlede yok, fazladan eklenmiş.`;
}

function whyOrder(saidT, ansT, moved, rawAns) {
  const out = [];
  const isQ = /\?\s*$/.test(rawAns);
  const auxPos = t => { const s = W_WH.includes(t[0]) ? 1 : 0; return W_AUX.includes(t[s]) ? s : -1; };
  const ap = auxPos(ansT), sp = auxPos(saidT);
  if (isQ && ap >= 0 && sp < 0) out.push(`Soru cümlesinde yardımcı fiil (${ansT[ap]}) özneden önce gelir: “${ansT[ap] === 'do' ? 'Do you…?' : ansT[ap] === 'is' ? 'Is it…? / Where is…?' : 'Can you…? / Are you…?'}”. Türkçedeki -mi eki yerine sıra değişir.`);
  else if (!isQ && ap < 0 && sp >= 0 && W_AUX.includes(saidT[sp])) out.push(`Bu bir soru değil, düz cümle: önce özne, sonra yardımcı fiil gelir (I can…, she is…). “Do you know where it is?” gibi dolaylı sorularda da ikinci kısım düz sıradadır.`);
  const qRule = out.length > 0;
  const near = w => { const i = ansT.indexOf(w); return [ansT[i - 1], ansT[i + 1]]; };
  const freq = moved.map(w => W_FREQ.includes(w) ? w : W_AUX.includes(w) ? near(w).find(x => W_FREQ.includes(x)) : null).find(Boolean);
  if (freq) out.push(`${q(freq)} yanlış yerde. Sıklık zarfları asıl fiilden önce, am/is/are’dan sonra gelir: I always walk, she is never late.`);
  moved.forEach(w => {
    if (out.length >= 2 || qRule || freq) return;
    const si = saidT.indexOf(w), ai = ansT.indexOf(w);
    if (W_FREQ.includes(w)) out.push(`${q(w)} yanlış yerde. Sıklık zarfları asıl fiilden önce, am/is/are’dan sonra gelir: I always walk, she is never late.`);
    else if (W_TIME.includes(w) || ['every', 'last', 'next'].includes(w)) out.push(`${q(w)} yanlış yerde. Zaman ifadeleri (yesterday, tomorrow, every day, last week) genellikle cümlenin sonunda ya da başında durur.`);
    else if (w === 'not') out.push(`${q('not')} yanlış yerde. ‘not’ yardımcı fiilden hemen sonra gelir: I do not, she is not, they can not.`);
    else if (ai > 0 && ai <= 3 && si > ai && (W_SUBJ.includes(ansT[ai - 1]) || (W_FREQ.includes(ansT[ai - 1]) && W_SUBJ.includes(ansT[ai - 2]))) && ansT.length > 3) out.push(`${q(w)} geride kalmış. Türkçede fiil sonda olur ama İngilizcede fiil özneden hemen sonra gelir: I drink coffee (I coffee drink değil).`);
    else if (W_PREP.includes(w)) out.push(`${q(w)} yanlış yerde. Edat, bağlı olduğu ismin önüne gelir: in the kitchen, to the station (Türkçedeki ‘mutfakta’ gibi sona değil).`);
    else if (ai >= 0) {
      const ctx = ansT.slice(Math.max(0, ai - 1), ai + 2).map(x => x === 'i' ? 'I' : x).join(' ');
      out.push(`${q(w)} yanlış yerde. Doğru sırada “… ${ctx} …” şeklinde gelir.`);
    }
  });
  if (!out.length) out.push('Kelimeler doğru ama sıraları yanlış. İngilizcede temel sıra: özne + fiil + nesne + yer + zaman (I bought a coat in London yesterday).');
  return out;
}

// Ana fonksiyon: { html, text, reasons, score }
function explainSentence(said, answer, lang) {
  lang = lang || 'en';
  const tok = s => norm(s, lang).split(' ').filter(Boolean);
  const S = tok(said), A = tok(answer);
  if (!S.length || !A.length) return null;
  const { ma, mb, len } = whyLCS(S, A);
  const score = (2 * len) / (S.length + A.length);
  let extra = S.map((w, i) => ma.has(i) ? null : { w, i }).filter(Boolean);
  let miss = A.map((w, i) => mb.has(i) ? null : { w, i }).filter(Boolean);
  // Hem fazla hem eksik görünen aynı kelime = yeri yanlış
  const moved = [];
  miss = miss.filter(m => { const k = extra.findIndex(x => x.w === m.w); if (k < 0) return true; moved.push(m.w); extra.splice(k, 1); return false; });
  const movedSet = new Set(moved);
  const reasons = [];
  if (lang === 'en') {
    // Eksik/fazla eşleştirmesi: aynı konumdaki ikisi büyük ihtimalle yanlış biçim
    const usedE = new Set(), usedM = new Set();
    miss.forEach((m, mi) => {
      let best = -1, bestD = 99;
      extra.forEach((x, xi) => {
        if (usedE.has(xi)) return;
        const related = W_GROUPS.some(g => g.includes(x.w) && g.includes(m.w)) || (W_PREP.includes(x.w) && W_PREP.includes(m.w))
          || x.w.slice(0, 3) === m.w.slice(0, 3) || W_IRREG[x.w] === m.w || W_IRREG[m.w] === x.w || (W_IRREG[x.w] && W_IRREG[x.w] === W_IRREG[m.w]);
        const d = Math.abs(x.i / S.length - m.i / A.length);
        if ((related || (miss.length === 1 && extra.length === 1)) && d < bestD) { bestD = d; best = xi; }
      });
      if (best >= 0) { usedE.add(best); usedM.add(mi); reasons.push(whyPair(extra[best].w, m.w, A, m.i)); }
    });
    miss.forEach((m, mi) => { if (!usedM.has(mi)) reasons.push(whyMissing(m.w, A, m.i, answer)); });
    extra.forEach((x, xi) => { if (!usedE.has(xi)) reasons.push(whyExtra(x.w, A, S)); });
    const orderWrong = moved.length || (!miss.length && !extra.length && S.join(' ') !== A.join(' '));
    if (orderWrong) reasons.push(...whyOrder(S, A, moved, answer));
  } else {
    if (miss.length) reasons.push(`Eksik: ${miss.map(m => q(m.w)).join(', ')}.`);
    if (extra.length) reasons.push(`Fazla: ${extra.map(x => q(x.w)).join(', ')}.`);
    if (moved.length || (!miss.length && !extra.length)) reasons.push('Kelimelerin sırası yanlış. Türkçede yüklem (fiil) genellikle cümlenin sonunda yer alır.');
  }
  const uniq = [...new Set(reasons)].slice(0, 3);
  const dm = lang === 'en' ? whyDisplayMap(said, answer) : {};
  const show = (w, i) => { const d = dm[w] || w; return i === 0 ? d.charAt(0).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US') + d.slice(1) : d; };
  const extraSet = new Set(extra.map(x => x.i));
  const missSet = new Set(miss.map(m => m.i));
  const mine = S.map((w, i) => `<span class="${ma.has(i) ? '' : extraSet.has(i) ? 'w-bad' : 'w-move'}">${esc(show(w, i))}</span>`).join(' ');
  const right = A.map((w, i) => `<span class="${missSet.has(i) ? 'w-add' : (!mb.has(i) && movedSet.has(w)) ? 'w-move' : ''}">${esc(show(w, i))}</span>`).join(' ');
  const html = `<span class="why-diff"><span class="wd-row"><em>Senin:</em> ${mine}</span><span class="wd-row"><em>Doğrusu:</em> ${right}</span></span>`
    + uniq.map(r => `<span class="why-r">💡 ${esc(r)}</span>`).join('');
  return { html, text: uniq.join(' '), reasons: uniq, score };
}

// Birden çok doğru cevap varsa söylenene en yakın olanı seçer
function closestAnswer(said, answers, lang) {
  let best = answers[0], bs = -1;
  answers.forEach(a => { const s = whyLCS(norm(said, lang).split(' '), norm(a, lang).split(' ')).len / Math.max(1, norm(a, lang).split(' ').length); if (s > bs) { bs = s; best = a; } });
  return best;
}
