// Dilbaz — B1 ek üniteler
// dialogs: [soru, soru (TR), cevap, cevap (TR)]

const NEW_UNITS_B1 = [
  {
    level: 'B1', title: 'Who, Which, That', desc: 'Sıfat cümleleriyle kişi ve şeyleri tanımla.', icon: '🧷', color: '#5758BB',
    tip: `
      <p>Kişiler için <b>who</b>, şeyler için <b>which</b>, ikisi için <b>that</b>: <i>the man <b>who</b> called, the book <b>which</b> I read.</i></p>
      <p>Yerler için <b>where</b>: <i>the town <b>where</b> I grew up.</i> Sahiplik için <b>whose</b>: <i>the girl <b>whose</b> father is a doctor.</i></p>
      <p>Türkçedeki "-en/-an, -dığı" eki buna karşılık gelir ve İngilizcede isimden <b>sonra</b> gelir.</p>`,
    words: [
      { en: 'whose', tr: 'kimin/ki onun', emoji: '🏷️' },
      { en: 'person', tr: 'kişi', emoji: '🧑' },
      { en: 'thing', tr: 'şey', emoji: '📎' },
      { en: 'place', tr: 'yer', emoji: '📍' },
      { en: 'building', tr: 'bina', emoji: '🏢' },
      { en: 'owner', tr: 'sahip', emoji: '🗝️' },
      { en: 'stranger', tr: 'yabancı (kişi)', emoji: '🕵️' },
      { en: 'relative', tr: 'akraba', emoji: '👪' },
      { en: 'tool', tr: 'alet', emoji: '🔧' },
      { en: 'describe', tr: 'tarif etmek', emoji: '📝' },
    ],
    sentences: [
      { en: 'The man who called you is my uncle.', tr: 'Seni arayan adam benim amcam.', alt: ['Seni arayan adam amcam.'] },
      { en: 'This is the book that I told you about.', tr: 'Bu, sana bahsettiğim kitap.' },
      { en: 'That is the town where I grew up.', tr: 'Orası büyüdüğüm kasaba.', alt: ['O, büyüdüğüm kasaba.'] },
      { en: 'I met a girl whose father is a pilot.', tr: 'Babası pilot olan bir kızla tanıştım.' },
      { en: 'A hammer is a tool which we use for building.', tr: 'Çekiç, inşa etmek için kullandığımız bir alettir.' },
      { en: 'The owner of the building lives abroad.', tr: 'Binanın sahibi yurt dışında yaşıyor.' },
      { en: 'Do not talk to strangers.', tr: 'Yabancılarla konuşma.', altEn: ["Don't talk to strangers."] },
      { en: 'Can you describe the person who took it?', tr: 'Onu alan kişiyi tarif edebilir misin?' },
    ],
    dialogs: [
      ['Who is Ayşe?', 'Ayşe kim?', "She is the woman who lives next door.", 'Yan dairede oturan kadın.'],
      ['What is a dentist?', 'Dişçi nedir?', 'Someone who takes care of your teeth.', 'Dişlerinle ilgilenen kişi.'],
      ['Which coat is yours?', 'Hangi palto senin?', 'The one that is on the chair.', 'Sandalyenin üstünde olan.'],
      ['Is this the place you told me about?', 'Bana bahsettiğin yer burası mı?', 'Yes, this is where we first met.', 'Evet, ilk tanıştığımız yer burası.'],
      ['Do you have many relatives here?', 'Burada çok akraban var mı?', 'Only an aunt who lives nearby.', 'Sadece yakında oturan bir teyzem var.'],
      ['Do you know the owner?', 'Sahibini tanıyor musun?', 'Yes, he is the man whose car is outside.', 'Evet, arabası dışarıda olan adam.'],
    ],
  },
  {
    level: 'B1', title: '-ing mi, to mu?', desc: 'Fiillerden sonra hangi yapının geldiğini öğren.', icon: '🧬', color: '#00B894',
    tip: `
      <p><b>-ing</b> alan fiiller: <i>enjoy, finish, avoid, mind, keep, suggest.</i> → <i>I enjoy <b>reading</b>.</i></p>
      <p><b>to</b> alan fiiller: <i>want, need, decide, hope, plan, promise, learn.</i> → <i>I decided <b>to leave</b>.</i></p>
      <p>Edattan sonra daima <b>-ing</b>: <i>I'm good at <b>cooking</b>. Thanks for <b>coming</b>.</i></p>
      <p>Anlam değişir: <i>stop <b>smoking</b></i> (sigarayı bırakmak) – <i>stop <b>to smoke</b></i> (sigara içmek için durmak).</p>`,
    words: [
      { en: 'enjoy', tr: 'keyif almak', emoji: '😌' },
      { en: 'finish', tr: 'bitirmek', emoji: '🏁' },
      { en: 'keep', tr: 'sürdürmek/tutmak', emoji: '🔒' },
      { en: 'mind', tr: 'sakınca görmek/zihin', emoji: '🧠' },
      { en: 'learn', tr: 'öğrenmek', emoji: '🎓' },
      { en: 'forgive', tr: 'affetmek', emoji: '🕊️' },
      { en: 'manage', tr: 'başarmak/yönetmek', emoji: '🗂️' },
      { en: 'refuse to', tr: '-meyi reddetmek', emoji: '🙅' },
      { en: 'look forward to', tr: 'dört gözle beklemek', emoji: '🤩' },
      { en: 'give up', tr: 'vazgeçmek/bırakmak', emoji: '🏳️' },
    ],
    sentences: [
      { en: 'I enjoy walking by the sea.', tr: 'Deniz kenarında yürümekten keyif alırım.' },
      { en: 'He decided to leave his job.', tr: 'İşinden ayrılmaya karar verdi.' },
      { en: 'Have you finished reading that book?', tr: 'O kitabı okumayı bitirdin mi?' },
      { en: 'I want to learn how to swim.', tr: 'Yüzmeyi öğrenmek istiyorum.' },
      { en: 'She keeps asking the same question.', tr: 'Aynı soruyu sormaya devam ediyor.', alt: ['Aynı soruyu sorup duruyor.'] },
      { en: 'Thank you for helping me.', tr: 'Bana yardım ettiğin için teşekkür ederim.' },
      { en: 'I look forward to seeing you.', tr: 'Seni görmeyi dört gözle bekliyorum.' },
      { en: 'Never give up trying.', tr: 'Denemekten asla vazgeçme.' },
    ],
    dialogs: [
      ['Do you mind waiting a little?', 'Biraz beklemenin sakıncası var mı?', 'No, I do not mind at all.', 'Hayır, hiç sakıncası yok.'],
      ['Did you manage to find a flat?', 'Bir daire bulmayı başardın mı?', 'Yes, I found one last week.', 'Evet, geçen hafta buldum.'],
      ['Why did you stop smoking?', 'Sigarayı neden bıraktın?', 'My doctor told me to.', 'Doktorum öyle söyledi.'],
      ['What are you good at?', 'Neyde iyisin?', 'I am good at drawing.', 'Resim çizmekte iyiyim.'],
      ['Are you going to the concert?', 'Konsere gidiyor musun?', 'Yes, I am really looking forward to it.', 'Evet, dört gözle bekliyorum.'],
      ['Can you forgive him?', 'Onu affedebilir misin?', 'I will try to forget about it.', 'Bunu unutmaya çalışacağım.'],
    ],
  },
  {
    level: 'B1', title: 'Deyimsel Fiiller 1', desc: 'Günlük konuşmanın vazgeçilmez phrasal verb’leri.', icon: '🧲', color: '#0984E3',
    tip: `
      <p><b>Phrasal verb</b> = fiil + edat; anlamı çoğu zaman tamamen değişir: <i>look</i> (bakmak), <i>look <b>after</b></i> (bakmak, ilgilenmek).</p>
      <p>Çoğu ayrılabilir: <i>turn <b>it</b> off</i>. Zamir her zaman arada: "turn off it" yanlıştır.</p>
      <p>Bunlar dili doğal kılar, sözlük anlamıyla çözülemez; kalıp olarak öğren.</p>`,
    words: [
      { en: 'look after', tr: 'ilgilenmek/bakmak', emoji: '🍼' },
      { en: 'look for', tr: 'aramak', emoji: '🔎' },
      { en: 'turn on', tr: 'açmak (cihaz)', emoji: '💡' },
      { en: 'turn off', tr: 'kapatmak (cihaz)', emoji: '📴' },
      { en: 'get up', tr: 'kalkmak', emoji: '🛏️' },
      { en: 'pick up', tr: 'almak/yerden kaldırmak', emoji: '🚘' },
      { en: 'put on', tr: 'giymek', emoji: '🧥' },
      { en: 'take off', tr: 'çıkarmak/kalkmak (uçak)', emoji: '🛫' },
      { en: 'find out', tr: 'öğrenmek/ortaya çıkarmak', emoji: '🕵️‍♀️' },
      { en: 'run out of', tr: 'tükenmek/bitmek', emoji: '🪫' },
    ],
    sentences: [
      { en: 'Can you look after my cat?', tr: 'Kedime bakabilir misin?' },
      { en: 'I am looking for my glasses.', tr: 'Gözlüğümü arıyorum.', altEn: ["I'm looking for my glasses."] },
      { en: 'Please turn off your phones.', tr: 'Lütfen telefonlarınızı kapatın.' },
      { en: 'I usually get up at seven.', tr: 'Genellikle yedide kalkarım.' },
      { en: 'I will pick you up at the station.', tr: 'Seni istasyondan alacağım.', altEn: ["I'll pick you up at the station."] },
      { en: 'Put on your coat, it is cold.', tr: 'Paltonu giy, hava soğuk.' },
      { en: 'We have run out of milk.', tr: 'Sütümüz bitti.' },
      { en: 'I need to find out the truth.', tr: 'Gerçeği öğrenmem gerekiyor.' },
    ],
    dialogs: [
      ['What time does the plane take off?', 'Uçak saat kaçta kalkıyor?', 'At half past six.', 'Altı buçukta.'],
      ['Can you turn on the light?', 'Işığı açabilir misin?', 'Sure, it is dark in here.', 'Tabii, burası karanlık.'],
      ['Who looks after your children?', 'Çocuklarınla kim ilgileniyor?', 'My mother does.', 'Annem ilgileniyor.'],
      ['What are you looking for?', 'Ne arıyorsun?', 'My keys. I cannot find them.', 'Anahtarlarımı. Bulamıyorum.'],
      ['Why did the car stop?', 'Araba neden durdu?', 'We ran out of petrol.', 'Benzinimiz bitti.'],
      ['Could you pick up the kids?', 'Çocukları alabilir misin?', 'Yes, I will get them after work.', 'Evet, işten sonra alırım.'],
    ],
  },
  {
    level: 'B1', title: 'Yapıldı, Edildi', desc: 'Geçmiş ve gelecek edilgen yapılar.', icon: '🏗️', color: '#636E72',
    tip: `
      <p>Edilgen = <b>be + V3</b>. Zamanı <b>be</b> gösterir:</p>
      <p><i>It <b>is made</b> in Turkey. It <b>was built</b> in 1900. It <b>will be finished</b> soon.</i></p>
      <p>Yapan önemliyse <b>by</b>: <i>This book was written <b>by</b> Orhan Pamuk.</i></p>`,
    words: [
      { en: 'build', tr: 'inşa etmek', emoji: '🧱' },
      { en: 'invent', tr: 'icat etmek', emoji: '💡' },
      { en: 'discover', tr: 'keşfetmek', emoji: '🗺️' },
      { en: 'produce', tr: 'üretmek', emoji: '🏭' },
      { en: 'destroy', tr: 'yok etmek', emoji: '💥' },
      { en: 'deliver', tr: 'teslim etmek', emoji: '🚚' },
      { en: 'century', tr: 'yüzyıl', emoji: '🏰' },
      { en: 'bottom', tr: 'dip/alt', emoji: '⬇️' },
      { en: 'prize', tr: 'ödül', emoji: '🏅' },
      { en: 'translate', tr: 'çevirmek (dil)', emoji: '🈯' },
    ],
    sentences: [
      { en: 'This bridge was built in the last century.', tr: 'Bu köprü geçen yüzyılda inşa edildi.' },
      { en: 'The telephone was invented by Bell.', tr: "Telefon Bell tarafından icat edildi.", alt: ["Telefonu Bell icat etti."] },
      { en: 'These cars are produced in Turkey.', tr: "Bu arabalar Türkiye'de üretiliyor." },
      { en: 'The book has been translated into ten languages.', tr: 'Kitap on dile çevrildi.' },
      { en: 'Your order will be delivered tomorrow.', tr: 'Siparişiniz yarın teslim edilecek.' },
      { en: 'The city was destroyed by a big fire.', tr: 'Şehir büyük bir yangınla yok oldu.', alt: ['Şehir büyük bir yangın tarafından yok edildi.'] },
      { en: 'She was given a prize for her work.', tr: 'Çalışması için ona ödül verildi.' },
      { en: 'The bill is at the bottom of the bag.', tr: 'Fatura çantanın dibinde.' },
    ],
    dialogs: [
      ['When was this house built?', 'Bu ev ne zaman inşa edildi?', 'It was built in 1950.', "1950'de inşa edildi."],
      ['Who was America discovered by?', 'Amerika kim tarafından keşfedildi?', 'By Columbus, as we learned at school.', 'Okulda öğrendiğimize göre Kolomb tarafından.'],
      ['Where are these shoes made?', 'Bu ayakkabılar nerede yapılıyor?', 'They are made in Italy.', "İtalya'da yapılıyor."],
      ['Has my parcel been delivered?', 'Kolim teslim edildi mi?', 'Not yet, it will arrive on Monday.', 'Henüz değil, pazartesi gelecek.'],
      ['Was anyone injured in the fire?', 'Yangında yaralanan oldu mu?', 'No, everyone was saved.', 'Hayır, herkes kurtarıldı.'],
      ['Who is this film directed by?', 'Bu film kim tarafından yönetildi?', 'I think by a young Turkish director.', 'Sanırım genç bir Türk yönetmen tarafından.'],
    ],
  },
  {
    level: 'B1', title: 'Dedi ki...', desc: 'Birinin söylediğini başkasına aktar.', icon: '🗯️', color: '#A29BFE',
    tip: `
      <p>Aktarırken zaman bir geri gider: <i>"I am tired." → She said she <b>was</b> tired.</i></p>
      <p><b>say</b> + cümle, <b>tell</b> + kişi: <i>He <b>said</b> that… / He <b>told me</b> that…</i></p>
      <p>Soru aktarma: düz sıra kullanılır: <i>She asked where I <b>lived</b>.</i> Evet-hayır soruları <b>if</b> ile: <i>He asked <b>if</b> I was ready.</i></p>`,
    words: [
      { en: 'said', tr: 'dedi (say)', emoji: '🗨️' },
      { en: 'ask', tr: 'sormak/istemek', emoji: '🙋🏽' },
      { en: 'explain', tr: 'açıklamak', emoji: '👩‍🏫' },
      { en: 'reply', tr: 'yanıtlamak', emoji: '↩️' },
      { en: 'advise', tr: 'tavsiye etmek', emoji: '🧑‍⚖️' },
      { en: 'mention', tr: 'bahsetmek', emoji: '🔖' },
      { en: 'rumour', tr: 'söylenti', emoji: '🐝' },
      { en: 'secret', tr: 'sır', emoji: '🤐' },
      { en: 'truth', tr: 'gerçek/doğru', emoji: '⚖️' },
      { en: 'lie', tr: 'yalan/yalan söylemek', emoji: '🤥' },
    ],
    sentences: [
      { en: 'She said she was tired.', tr: 'Yorgun olduğunu söyledi.' },
      { en: 'He told me that he would come.', tr: 'Bana geleceğini söyledi.' },
      { en: 'They asked me where I lived.', tr: 'Bana nerede yaşadığımı sordular.' },
      { en: 'I asked him if he was ready.', tr: 'Ona hazır olup olmadığını sordum.' },
      { en: 'My doctor advised me to rest.', tr: 'Doktorum dinlenmemi tavsiye etti.' },
      { en: 'He did not mention the price.', tr: 'Fiyattan bahsetmedi.', altEn: ["He didn't mention the price."] },
      { en: 'She told me a secret.', tr: 'Bana bir sır söyledi.' },
      { en: 'Is that the truth or just a rumour?', tr: 'Bu gerçek mi yoksa sadece bir söylenti mi?' },
    ],
    dialogs: [
      ['What did he say?', 'O ne dedi?', 'He said he would be late.', 'Geç kalacağını söyledi.'],
      ['Did you ask her about the job?', 'Ona işi sordun mu?', 'Yes, she said it was still open.', 'Evet, hâlâ açık olduğunu söyledi.'],
      ['Can you explain this to me?', 'Bunu bana açıklayabilir misin?', 'Sure, it is really simple.', 'Tabii, aslında çok basit.'],
      ['Are you telling me the truth?', 'Bana doğruyu mu söylüyorsun?', 'Yes, I would never lie to you.', 'Evet, sana asla yalan söylemem.'],
      ['Did the teacher tell you the results?', 'Öğretmen sonuçları söyledi mi?', 'She told us to wait until Monday.', 'Pazartesiye kadar beklememizi söyledi.'],
      ['Who told you that?', 'Bunu sana kim söyledi?', 'I cannot say. It is a secret.', 'Söyleyemem. Bu bir sır.'],
    ],
  },
  {
    level: 'B1', title: 'Olmuş, Bitmiş', desc: 'Past Perfect ve Present Perfect Continuous.', icon: '🕰️', color: '#6D4C41',
    tip: `
      <p><b>Past Perfect</b> (had + V3): geçmişteki bir olaydan daha önce olan: <i>When I arrived, she <b>had left</b>.</i></p>
      <p><b>Present Perfect Continuous</b> (have been + -ing): geçmişte başlayıp hâlâ süren: <i>I <b>have been learning</b> English <b>for</b> two years.</i></p>
      <p><b>for</b> + süre (two years), <b>since</b> + başlangıç noktası (2020).</p>`,
    words: [
      { en: 'recently', tr: 'son zamanlarda', emoji: '🗓️' },
      { en: 'by the time', tr: '-diğinde/-e kadar', emoji: '⌛' },
      { en: 'earlier', tr: 'daha önce', emoji: '⏪' },
      { en: 'miss', tr: 'özlemek/kaçırmak', emoji: '🥺' },
      { en: 'leave', tr: 'ayrılmak/bırakmak', emoji: '👋' },
      { en: 'finally', tr: 'sonunda', emoji: '🎯' },
      { en: 'still', tr: 'hâlâ', emoji: '🗿' },
      { en: 'anymore', tr: 'artık', emoji: '🚮' },
      { en: 'practise', tr: 'pratik yapmak', emoji: '🎹' },
      { en: 'recover', tr: 'iyileşmek', emoji: '🩹' },
    ],
    sentences: [
      { en: 'When I arrived, the train had left.', tr: 'Vardığımda tren gitmişti.' },
      { en: 'I have been learning English for two years.', tr: 'İki yıldır İngilizce öğreniyorum.' },
      { en: 'She has been working here since 2020.', tr: "2020'den beri burada çalışıyor." },
      { en: 'I had never seen the sea before.', tr: 'Daha önce hiç deniz görmemiştim.' },
      { en: 'By the time we got there, the film had started.', tr: 'Oraya vardığımızda film başlamıştı.' },
      { en: 'He does not live here anymore.', tr: 'O artık burada yaşamıyor.', altEn: ["He doesn't live here anymore."] },
      { en: 'I am still waiting for your answer.', tr: 'Hâlâ cevabını bekliyorum.' },
      { en: 'I have recovered from the flu.', tr: 'Gripten iyileştim.' },
    ],
    dialogs: [
      ['How long have you been waiting?', 'Ne zamandır bekliyorsun?', 'For about twenty minutes.', 'Yaklaşık yirmi dakikadır.'],
      ['Why were you so hungry?', 'Neden bu kadar açtın?', 'I had not eaten since morning.', 'Sabahtan beri yemek yememiştim.'],
      ['Have you been running?', 'Koşuyor muydun?', 'Yes, that is why I am so hot.', 'Evet, bu yüzden bu kadar terledim.'],
      ['Did you catch the bus?', 'Otobüse yetiştin mi?', 'No, it had already gone.', 'Hayır, çoktan gitmişti.'],
      ['Do you still play the piano?', 'Hâlâ piyano çalıyor musun?', 'I practise every evening.', 'Her akşam pratik yapıyorum.'],
      ['Have you seen Ali recently?', 'Son zamanlarda Ali’yi gördün mü?', 'No, I really miss him.', 'Hayır, onu çok özledim.'],
    ],
  },
  {
    level: 'B1', title: 'Belki, Herhalde', desc: 'May, might, could ile olasılık; too ve enough.', icon: '🎲', color: '#FD79A8',
    tip: `
      <p>Olasılık: <b>may / might / could</b> + fiil: <i>It <b>might</b> rain.</i> (Yağabilir.)</p>
      <p><b>too + sıfat</b> (fazla, olumsuz): <i>It's <b>too</b> expensive.</i> <b>sıfat + enough</b> (yeterince): <i>old <b>enough</b>.</i></p>
      <p><b>so + sıfat</b> / <b>such a + isim</b>: <i>It's <b>so</b> nice. It's <b>such a</b> nice day.</i></p>`,
    words: [
      { en: 'perhaps', tr: 'belki', emoji: '🤷‍♀️' },
      { en: 'certain', tr: 'kesin/emin', emoji: '💯' },
      { en: 'likely', tr: 'muhtemel', emoji: '📊' },
      { en: 'unlikely', tr: 'pek olası değil', emoji: '📉' },
      { en: 'guess', tr: 'tahmin etmek', emoji: '🎯' },
      { en: 'expect', tr: 'beklemek/ummak', emoji: '👀' },
      { en: 'worried', tr: 'endişeli', emoji: '😟' },
      { en: 'afraid', tr: 'korkmuş', emoji: '😨' },
      { en: 'heavy', tr: 'ağır', emoji: '🪨' },
      { en: 'light', tr: 'hafif/ışık', emoji: '🪶' },
    ],
    sentences: [
      { en: 'It might rain this afternoon.', tr: 'Bu öğleden sonra yağmur yağabilir.' },
      { en: 'She may be at home.', tr: 'Evde olabilir.' },
      { en: 'This bag is too heavy for me.', tr: 'Bu çanta benim için çok ağır.' },
      { en: 'He is not old enough to drive.', tr: 'Araba kullanacak yaşta değil.', altEn: ["He isn't old enough to drive."] },
      { en: 'I am worried about my exam.', tr: 'Sınavım için endişeliyim.' },
      { en: 'It is unlikely that he will come.', tr: 'Gelmesi pek olası değil.' },
      { en: 'It was such a good party.', tr: 'O kadar güzel bir partiydi ki.', alt: ['Çok güzel bir partiydi.'] },
      { en: 'I did not expect to see you here.', tr: 'Seni burada görmeyi beklemiyordum.', altEn: ["I didn't expect to see you here."] },
    ],
    dialogs: [
      ['Are you coming tonight?', 'Bu akşam geliyor musun?', 'I am not sure. I might.', 'Emin değilim. Gelebilirim.'],
      ['Where is Mehmet?', 'Mehmet nerede?', 'I guess he is still at work.', 'Sanırım hâlâ işte.'],
      ['Can you lift this box?', 'Bu kutuyu kaldırabilir misin?', 'No, it is too heavy.', 'Hayır, çok ağır.'],
      ['Why do you look so worried?', 'Neden bu kadar endişeli görünüyorsun?', 'I may lose my job.', 'İşimi kaybedebilirim.'],
      ['Is it likely to snow?', 'Kar yağması muhtemel mi?', 'Perhaps, it is very cold.', 'Belki, hava çok soğuk.'],
      ['Are you afraid of dogs?', 'Köpeklerden korkar mısın?', 'A little, especially big ones.', 'Biraz, özellikle büyüklerden.'],
    ],
  },
  {
    level: 'B1', title: 'Ev Aramak', desc: 'Emlak, kira, taşınma ve komşuluk.', icon: '🏠', color: '#E17055',
    tip: `
      <p><b>move</b> (taşınmak): <i>We <b>moved to</b> Izmir last year. <b>move in / move out</b></i> (eve taşınmak / evden çıkmak).</p>
      <p><b>landlord</b> ev sahibi, <b>tenant</b> kiracı. <i>rent <b>includes</b> bills.</i></p>
      <p>Bir işi başkasına yaptırmak: <b>have + nesne + V3</b> → <i>We <b>had the walls painted</b>.</i></p>`,
    words: [
      { en: 'landlord', tr: 'ev sahibi', emoji: '🤵' },
      { en: 'tenant', tr: 'kiracı', emoji: '🧳' },
      { en: 'deposit', tr: 'depozito', emoji: '💵' },
      { en: 'move', tr: 'taşınmak/hareket etmek', emoji: '📦' },
      { en: 'floor', tr: 'kat/yer', emoji: '🪜' },
      { en: 'balcony', tr: 'balkon', emoji: '🌇' },
      { en: 'heating', tr: 'ısıtma', emoji: '♨️' },
      { en: 'include', tr: 'içermek/dahil etmek', emoji: '🧾' },
      { en: 'bills', tr: 'faturalar', emoji: '📑' },
      { en: 'spacious', tr: 'ferah/geniş', emoji: '🛋️' },
    ],
    sentences: [
      { en: 'We are moving to a new flat next month.', tr: 'Gelecek ay yeni bir daireye taşınıyoruz.' },
      { en: 'The landlord asked for two months of deposit.', tr: 'Ev sahibi iki aylık depozito istedi.' },
      { en: 'Does the rent include bills?', tr: 'Kiraya faturalar dahil mi?' },
      { en: 'The heating is not working.', tr: 'Isıtma çalışmıyor.' },
      { en: 'We live on the third floor.', tr: 'Üçüncü katta oturuyoruz.' },
      { en: 'The flat has a large balcony.', tr: 'Dairenin büyük bir balkonu var.' },
      { en: 'This room is bright and spacious.', tr: 'Bu oda aydınlık ve ferah.' },
      { en: 'We had the walls painted.', tr: 'Duvarları boyattık.' },
    ],
    dialogs: [
      ['How much is the rent?', 'Kira ne kadar?', 'It is eight hundred a month.', 'Aylık sekiz yüz.'],
      ['When can I move in?', 'Ne zaman taşınabilirim?', 'From the first of next month.', 'Gelecek ayın birinden itibaren.'],
      ['Is the flat furnished?', 'Daire eşyalı mı?', 'No, but the kitchen is fully equipped.', 'Hayır, ama mutfak tam donanımlı.'],
      ['Is there a lift?', 'Asansör var mı?', 'Yes, but it is often broken.', 'Evet, ama sık sık bozuluyor.'],
      ['Are the neighbours noisy?', 'Komşular gürültücü mü?', 'No, they are all very quiet.', 'Hayır, hepsi çok sessiz.'],
      ['Can I get my deposit back?', 'Depozitomu geri alabilir miyim?', 'Yes, when you move out.', 'Evet, evden çıktığında.'],
    ],
  },
  {
    level: 'B1', title: 'Yolda ve Araba', desc: 'Araç kullanımı, trafik, tamir ve yol tarifi.', icon: '🚘', color: '#34495E',
    tip: `
      <p><b>get on / off</b> (otobüs, tren), <b>get in / out of</b> (araba, taksi).</p>
      <p>Bozulmak: <i>My car <b>broke down</b>.</i> Lastik patlaması: <i>I have <b>a flat tyre</b>.</i></p>
      <p>Tavsiye: <i>You <b>had better</b> slow down.</i> (Yavaşlasan iyi olur.) <b>had better</b> + yalın fiil.</p>`,
    words: [
      { en: 'petrol', tr: 'benzin', emoji: '⛽' },
      { en: 'engine', tr: 'motor', emoji: '🔩' },
      { en: 'tyre', tr: 'lastik', emoji: '🛞' },
      { en: 'brake', tr: 'fren', emoji: '🛑' },
      { en: 'mechanic', tr: 'tamirci', emoji: '🧑‍🔧' },
      { en: 'motorway', tr: 'otoyol', emoji: '🛣️' },
      { en: 'speed', tr: 'hız', emoji: '🏎️' },
      { en: 'break down', tr: 'bozulmak', emoji: '🚗💨' },
      { en: 'overtake', tr: 'sollamak', emoji: '🏁' },
      { en: 'crossroads', tr: 'kavşak', emoji: '🚏' },
    ],
    sentences: [
      { en: 'My car broke down on the motorway.', tr: 'Arabam otoyolda bozuldu.' },
      { en: 'We need to get some petrol.', tr: 'Biraz benzin almamız gerekiyor.' },
      { en: 'The mechanic is checking the engine.', tr: 'Tamirci motoru kontrol ediyor.' },
      { en: 'You had better slow down.', tr: 'Yavaşlasan iyi olur.' },
      { en: 'Turn right at the crossroads.', tr: 'Kavşakta sağa dön.' },
      { en: 'Do not overtake on a bridge.', tr: 'Köprüde sollama yapma.', altEn: ["Don't overtake on a bridge."] },
      { en: 'What is the speed limit here?', tr: 'Buradaki hız sınırı ne?' },
      { en: 'I have a flat tyre.', tr: 'Lastiğim patladı.' },
    ],
    dialogs: [
      ['What is wrong with your car?', 'Arabanın nesi var?', 'The brakes are not working properly.', 'Frenler düzgün çalışmıyor.'],
      ['Can you fix it today?', 'Bugün tamir edebilir misiniz?', 'I am afraid it will take two days.', 'Korkarım iki gün sürer.'],
      ['Which way should we go?', 'Hangi yoldan gitmeliyiz?', 'The motorway is faster.', 'Otoyol daha hızlı.'],
      ['Why did you stop?', 'Neden durdun?', 'We have run out of petrol.', 'Benzinimiz bitti.'],
      ['Are you driving too fast?', 'Çok mu hızlı gidiyorsun?', 'No, I am under the limit.', 'Hayır, sınırın altındayım.'],
      ['Where can I park?', 'Nereye park edebilirim?', 'There is a car park behind the hotel.', 'Otelin arkasında bir otopark var.'],
    ],
  },
  {
    level: 'B1', title: 'İnternetten Alışveriş', desc: 'Sipariş, iade, kargo ve dijital hayat.', icon: '📦', color: '#FF7675',
    tip: `
      <p>Sipariş: <b>place an order</b>, <b>track</b> a parcel, <b>return</b> an item.</p>
      <p>Değişiklik isteme: <i>I would like to <b>exchange</b> this for a larger size.</i></p>
      <p>Az önce olmuş: <i>I'<b>ve just</b> ordered it.</i> Henüz olmamış: <i>It <b>hasn't</b> arrived <b>yet</b>.</i></p>`,
    words: [
      { en: 'delivery', tr: 'teslimat', emoji: '📬' },
      { en: 'track', tr: 'takip etmek', emoji: '🛰️' },
      { en: 'return', tr: 'iade etmek/dönmek', emoji: '🔙' },
      { en: 'discount', tr: 'indirim', emoji: '🏷️' },
      { en: 'customer', tr: 'müşteri', emoji: '🧍‍♀️' },
      { en: 'website', tr: 'web sitesi', emoji: '💻' },
      { en: 'credit card', tr: 'kredi kartı', emoji: '💳' },
      { en: 'damaged', tr: 'hasarlı', emoji: '🩹' },
      { en: 'out of stock', tr: 'stokta yok', emoji: '🚫' },
      { en: 'receipt', tr: 'fiş/makbuz', emoji: '🧾' },
    ],
    sentences: [
      { en: 'I have just placed an order.', tr: 'Az önce sipariş verdim.', altEn: ["I've just placed an order."] },
      { en: 'My order has not arrived yet.', tr: 'Siparişim henüz gelmedi.', altEn: ["My order hasn't arrived yet."] },
      { en: 'Delivery takes three days.', tr: 'Teslimat üç gün sürüyor.' },
      { en: 'This item is out of stock.', tr: 'Bu ürün stokta yok.' },
      { en: 'The box arrived damaged.', tr: 'Kutu hasarlı geldi.' },
      { en: 'Keep the receipt in case you need to return it.', tr: 'İade etmen gerekirse diye fişi sakla.' },
      { en: 'You can track your parcel on the website.', tr: 'Kolini web sitesinden takip edebilirsin.' },
      { en: 'Customers get a ten percent discount today.', tr: 'Müşteriler bugün yüzde on indirim alıyor.' },
    ],
    dialogs: [
      ['Can I return these shoes?', 'Bu ayakkabıları iade edebilir miyim?', 'Yes, within thirty days.', 'Evet, otuz gün içinde.'],
      ['How can I pay?', 'Nasıl ödeyebilirim?', 'By credit card or cash on delivery.', 'Kredi kartıyla ya da kapıda nakit.'],
      ['Where is my order?', 'Siparişim nerede?', 'It left our warehouse this morning.', 'Bu sabah depomuzdan çıktı.'],
      ['Do you have this in blue?', 'Bunun mavisi var mı?', 'Sorry, it is out of stock.', 'Üzgünüm, stokta yok.'],
      ['Is delivery free?', 'Teslimat ücretsiz mi?', 'Only for orders over fifty dollars.', 'Sadece elli doları aşan siparişlerde.'],
      ['Do you have a receipt?', 'Fişiniz var mı?', 'Yes, here you are.', 'Evet, buyurun.'],
    ],
  },
  {
    level: 'B1', title: 'İlişkiler', desc: 'Arkadaşlık, aşk, tartışma ve barışma.', icon: '💞', color: '#E056FD',
    tip: `
      <p>Phrasal verb'ler: <b>get on with</b> (iyi geçinmek), <b>fall out with</b> (bozuşmak), <b>make up</b> (barışmak), <b>break up</b> (ayrılmak).</p>
      <p><b>each other</b> = birbiri: <i>We love <b>each other</b>.</i></p>
      <p>Dönüşlü zamir <b>-self</b>: <i>Be <b>yourself</b>. I did it <b>myself</b>.</i></p>`,
    words: [
      { en: 'relationship', tr: 'ilişki', emoji: '💑' },
      { en: 'trust', tr: 'güvenmek/güven', emoji: '🤝🏼' },
      { en: 'argue', tr: 'tartışmak', emoji: '🗯️' },
      { en: 'get on with', tr: 'iyi geçinmek', emoji: '😄' },
      { en: 'break up', tr: 'ayrılmak (çift)', emoji: '💔🏻' },
      { en: 'make up', tr: 'barışmak', emoji: '🫶' },
      { en: 'jealous', tr: 'kıskanç', emoji: '😒' },
      { en: 'loyal', tr: 'sadık', emoji: '🐕' },
      { en: 'support', tr: 'desteklemek/destek', emoji: '🫱' },
      { en: 'each other', tr: 'birbiri', emoji: '🔄' },
    ],
    sentences: [
      { en: 'I get on well with my colleagues.', tr: 'İş arkadaşlarımla iyi geçinirim.' },
      { en: 'They broke up last year.', tr: 'Geçen yıl ayrıldılar.' },
      { en: 'We argued, but we made up the next day.', tr: 'Tartıştık ama ertesi gün barıştık.' },
      { en: 'Good friends support each other.', tr: 'İyi arkadaşlar birbirini destekler.' },
      { en: 'Trust is the basis of any relationship.', tr: 'Güven her ilişkinin temelidir.' },
      { en: 'He is jealous of his brother.', tr: 'Erkek kardeşini kıskanıyor.' },
      { en: 'Just be yourself.', tr: 'Sadece kendin ol.' },
      { en: 'She is a very loyal friend.', tr: 'O çok sadık bir arkadaş.' },
    ],
    dialogs: [
      ['How long have you known each other?', 'Ne zamandır birbirinizi tanıyorsunuz?', 'Since we were at school.', 'Okuldan beri.'],
      ['Are you two still together?', 'Hâlâ birlikte misiniz?', 'No, we broke up in May.', 'Hayır, mayısta ayrıldık.'],
      ['Do you get on with your sister?', 'Kız kardeşinle iyi geçinir misin?', 'Most of the time, yes.', 'Çoğu zaman, evet.'],
      ['Why are you upset?', 'Neden üzgünsün?', 'I had an argument with my best friend.', 'En yakın arkadaşımla tartıştım.'],
      ['Do you trust her?', 'Ona güveniyor musun?', 'Completely. She has never let me down.', 'Tamamen. Beni hiç yarı yolda bırakmadı.'],
      ['Did you two make up?', 'Barıştınız mı?', 'Yes, I said I was sorry.', 'Evet, özür diledim.'],
    ],
  },
  {
    level: 'B1', title: 'Yeni Yaşam, Yurt Dışı', desc: 'Vize, göç, kültür şoku ve uyum.', icon: '🛂', color: '#0097A7',
    tip: `
      <p><b>get used to + -ing</b> (alışmak): <i>I'm <b>getting used to living</b> here.</i> <b>used to</b> ile karıştırma: <i>I <b>used to live</b> here</i> (eskiden).</p>
      <p>İstek: <i>I'd rather stay.</i> (Kalmayı tercih ederim.) <b>would rather</b> + yalın fiil.</p>
      <p>İşlem kelimeleri: <b>apply for</b> a visa, <b>fill in</b> a form.</p>`,
    words: [
      { en: 'visa', tr: 'vize', emoji: '🛂' },
      { en: 'immigrant', tr: 'göçmen', emoji: '🧳' },
      { en: 'embassy', tr: 'büyükelçilik', emoji: '🏛️' },
      { en: 'permit', tr: 'izin belgesi', emoji: '📋' },
      { en: 'homesick', tr: 'memleket hasreti çeken', emoji: '🏠' },
      { en: 'get used to', tr: '-e alışmak', emoji: '🌱' },
      { en: 'fill in', tr: 'doldurmak (form)', emoji: '🖊️' },
      { en: 'citizen', tr: 'vatandaş', emoji: '🪪' },
      { en: 'accent', tr: 'aksan', emoji: '🗣️' },
      { en: 'settle', tr: 'yerleşmek', emoji: '🏕️' },
    ],
    sentences: [
      { en: 'I applied for a visa last month.', tr: 'Geçen ay vize başvurusu yaptım.' },
      { en: 'Please fill in this form.', tr: 'Lütfen bu formu doldurun.' },
      { en: 'I am getting used to the weather here.', tr: 'Buradaki havaya alışıyorum.' },
      { en: 'I often feel homesick.', tr: 'Sık sık memleketimi özlüyorum.' },
      { en: 'She speaks English with a strong accent.', tr: 'İngilizceyi güçlü bir aksanla konuşuyor.' },
      { en: 'They decided to settle in Canada.', tr: "Kanada'ya yerleşmeye karar verdiler." },
      { en: 'You need a work permit.', tr: 'Çalışma iznine ihtiyacın var.' },
      { en: 'I would rather stay here.', tr: 'Burada kalmayı tercih ederim.', altEn: ["I'd rather stay here."] },
    ],
    dialogs: [
      ['Where is the embassy?', 'Büyükelçilik nerede?', 'It is in the city centre.', 'Şehir merkezinde.'],
      ['How long does a visa take?', 'Vize ne kadar sürer?', 'Usually about two weeks.', 'Genellikle yaklaşık iki hafta.'],
      ['Do you like living abroad?', 'Yurt dışında yaşamayı seviyor musun?', 'Yes, but I miss my family.', 'Evet, ama ailemi özlüyorum.'],
      ['Is it hard to get used to the food?', 'Yemeklere alışmak zor mu?', 'At first, but now I love it.', 'Başta, ama şimdi bayılıyorum.'],
      ['Are you a citizen here?', 'Burada vatandaş mısınız?', 'Not yet, I have a residence permit.', 'Henüz değil, oturma iznim var.'],
      ['Would you rather live here or at home?', 'Burada mı yoksa memlekette mi yaşamayı tercih edersin?', 'I would rather go back home one day.', 'Bir gün memlekete dönmeyi tercih ederim.'],
    ],
  },
];

NEW_UNITS_B1.forEach(nu => {
  let last = -1;
  UNITS.forEach((u, i) => { if ((u.level || 'A1') === nu.level) last = i; });
  UNITS.splice(last + 1, 0, nu);
});
