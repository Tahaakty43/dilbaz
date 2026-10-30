// Dilbaz — B2 ek üniteler
// dialogs: [soru, soru (TR), cevap, cevap (TR)]

UNITS.push(
  {
    level: 'B2', title: 'Deyimsel Fiiller 2', desc: 'İş ve sohbette sık geçen ileri phrasal verb’ler.', icon: '🧲', color: '#40407A',
    tip: `
      <p>Üç parçalı olanlar ayrılmaz: <b>come up with</b> (bulmak, akla getirmek), <b>put up with</b> (katlanmak), <b>look up to</b> (saygı duymak).</p>
      <p><b>put off</b> = ertelemek, <b>turn down</b> = reddetmek, <b>carry out</b> = yürütmek, gerçekleştirmek.</p>
      <p><b>bring up</b> iki anlamlıdır: bir konuyu açmak ve çocuk yetiştirmek.</p>`,
    words: [
      { en: 'carry out', tr: 'yürütmek/gerçekleştirmek', emoji: '🧪' },
      { en: 'come up with', tr: 'bulmak/akla getirmek', emoji: '💡' },
      { en: 'put off', tr: 'ertelemek', emoji: '📆' },
      { en: 'turn down', tr: 'reddetmek', emoji: '👎🏼' },
      { en: 'bring up', tr: 'konuyu açmak/yetiştirmek', emoji: '🗣️' },
      { en: 'figure out', tr: 'çözmek/anlamak', emoji: '🧩' },
      { en: 'get over', tr: 'atlatmak', emoji: '🌈' },
      { en: 'point out', tr: 'dikkat çekmek', emoji: '☝️' },
      { en: 'set up', tr: 'kurmak', emoji: '🏗️' },
      { en: 'rely on', tr: 'güvenmek/bel bağlamak', emoji: '🫂' },
    ],
    sentences: [
      { en: 'We need to come up with a better plan.', tr: 'Daha iyi bir plan bulmamız gerekiyor.' },
      { en: 'Never put off until tomorrow what you can do today.', tr: 'Bugünün işini yarına bırakma.' },
      { en: 'She turned down the job offer.', tr: 'İş teklifini reddetti.' },
      { en: 'It took him months to get over the shock.', tr: 'Şoku atlatması aylar sürdü.' },
      { en: 'They set up their own company in 2019.', tr: "2019'da kendi şirketlerini kurdular." },
      { en: 'You can always rely on me.', tr: 'Bana her zaman güvenebilirsin.' },
      { en: 'I cannot figure out how this works.', tr: 'Bunun nasıl çalıştığını çözemiyorum.' },
      { en: 'He pointed out a mistake in the report.', tr: 'Rapordaki bir hataya dikkat çekti.' },
    ],
    dialogs: [
      ['Did you accept their offer?', 'Tekliflerini kabul ettin mi?', 'No, I turned it down.', 'Hayır, reddettim.'],
      ['Who will carry out the research?', 'Araştırmayı kim yürütecek?', 'A team from the university.', 'Üniversiteden bir ekip.'],
      ['Can we put off the meeting?', 'Toplantıyı erteleyebilir miyiz?', 'Sure, how about next Tuesday?', 'Tabii, gelecek salıya ne dersin?'],
      ['How did you come up with that idea?', 'O fikri nasıl buldun?', 'It came to me in the shower.', 'Duşta aklıma geldi.'],
      ['Where were you brought up?', 'Nerede büyüdün?', 'In a small town near the coast.', 'Sahile yakın küçük bir kasabada.'],
      ['Have you got over your cold?', 'Soğuk algınlığını atlattın mı?', 'Almost, I still have a cough.', 'Neredeyse, hâlâ öksürüğüm var.'],
    ],
  },
  {
    level: 'B2', title: 'Yaptırmak', desc: 'Bir işi başkasına yaptırmayı anlat.', icon: '🧑‍🔧', color: '#218C74',
    tip: `
      <p><b>have + nesne + V3</b>: <i>I <b>had my hair cut</b>.</i> (Saçımı kestirdim.) Daha gündelik: <b>get</b> → <i>I <b>got my car fixed</b>.</i></p>
      <p>Birine yaptırmak: <b>make</b> + kişi + yalın fiil (zorla), <b>let</b> + kişi + yalın fiil (izin verme), <b>get</b> + kişi + <b>to</b> + fiil (ikna).</p>
      <p><i>She <b>made</b> me <b>wait</b>. They <b>let</b> us <b>leave</b>. I <b>got</b> him <b>to help</b>.</i></p>`,
    words: [
      { en: 'haircut', tr: 'saç kesimi', emoji: '💇' },
      { en: 'renovate', tr: 'yenilemek', emoji: '🏚️' },
      { en: 'plumber', tr: 'tesisatçı', emoji: '🪠' },
      { en: 'electrician', tr: 'elektrikçi', emoji: '🔌' },
      { en: 'install', tr: 'kurmak/yüklemek', emoji: '🧰' },
      { en: 'fix', tr: 'tamir etmek', emoji: '🪛' },
      { en: 'decorate', tr: 'dekore etmek', emoji: '🎨' },
      { en: 'inspect', tr: 'denetlemek', emoji: '🔬' },
      { en: 'estimate', tr: 'fiyat tahmini/tahmin etmek', emoji: '🧮' },
      { en: 'leak', tr: 'sızıntı/sızmak', emoji: '💧' },
    ],
    sentences: [
      { en: 'I had my hair cut yesterday.', tr: 'Dün saçımı kestirdim.' },
      { en: 'We are having the kitchen renovated.', tr: 'Mutfağı yeniletiyoruz.' },
      { en: 'You should get your eyes tested.', tr: 'Gözlerini muayene ettirmelisin.' },
      { en: 'My parents made me study every evening.', tr: 'Ailem bana her akşam ders çalıştırırdı.' },
      { en: 'They let us leave early.', tr: 'Erken çıkmamıza izin verdiler.' },
      { en: 'I got my brother to help me.', tr: 'Erkek kardeşimi bana yardım etmeye ikna ettim.' },
      { en: 'There is a leak under the sink.', tr: 'Lavabonun altında bir sızıntı var.' },
      { en: 'The plumber gave us an estimate.', tr: 'Tesisatçı bize bir fiyat tahmini verdi.' },
    ],
    dialogs: [
      ['Did you paint the house yourself?', 'Evi kendin mi boyadın?', 'No, we had it painted.', 'Hayır, boyattık.'],
      ['You look different today.', 'Bugün farklı görünüyorsun.', 'Yes, I have just had a haircut.', 'Evet, az önce saçımı kestirdim.'],
      ['Who installed the new system?', 'Yeni sistemi kim kurdu?', 'We got an electrician to do it.', 'Bir elektrikçiye yaptırdık.'],
      ['How much will the repair cost?', 'Tamir ne kadar tutar?', 'I can give you an estimate tomorrow.', 'Yarın size bir tahmin verebilirim.'],
      ['Did your boss let you go home?', 'Patronun eve gitmene izin verdi mi?', 'Yes, but he made me finish first.', 'Evet, ama önce bitirmemi sağladı.'],
      ['When was the building last inspected?', 'Bina en son ne zaman denetlendi?', 'About a year ago, as far as I know.', 'Bildiğim kadarıyla yaklaşık bir yıl önce.'],
    ],
  },
  {
    level: 'B2', title: 'Karışık Koşullar', desc: 'Unless, as long as ve karışık koşul cümleleri.', icon: '🔀', color: '#B33771',
    tip: `
      <p><b>Karışık koşul</b>: geçmiş → şimdi: <i>If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.</i></p>
      <p><b>unless</b> = if not: <i>I won't go <b>unless</b> you come.</i></p>
      <p><b>as long as / provided that</b> (-mek şartıyla), <b>in case</b> (ihtimaline karşı): <i>Take an umbrella <b>in case</b> it rains.</i></p>`,
    words: [
      { en: 'unless', tr: '-medikçe', emoji: '🚧' },
      { en: 'as long as', tr: '-diği sürece', emoji: '♾️' },
      { en: 'in case', tr: '-e karşı/ihtimaline karşı', emoji: '🌂' },
      { en: 'provided that', tr: '-mek şartıyla', emoji: '📜' },
      { en: 'assume', tr: 'varsaymak', emoji: '🤔' },
      { en: 'outcome', tr: 'sonuç', emoji: '🎬' },
      { en: 'risk', tr: 'risk', emoji: '🎲' },
      { en: 'scenario', tr: 'senaryo', emoji: '🎞️' },
      { en: 'alternative', tr: 'alternatif', emoji: '🔃' },
      { en: 'situation', tr: 'durum', emoji: '🌐' },
    ],
    sentences: [
      { en: 'If I had studied medicine, I would be a doctor now.', tr: 'Tıp okusaydım şimdi doktor olurdum.' },
      { en: 'We will miss the train unless we hurry.', tr: 'Acele etmezsek treni kaçıracağız.' },
      { en: 'You can stay as long as you are quiet.', tr: 'Sessiz olduğun sürece kalabilirsin.' },
      { en: 'Take a coat in case it gets cold.', tr: 'Hava soğur diye palto al.' },
      { en: 'I will lend you the money provided that you pay it back.', tr: 'Geri ödemen şartıyla sana parayı ödünç vereceğim.' },
      { en: 'I assume you have read the report.', tr: 'Raporu okuduğunu varsayıyorum.' },
      { en: 'What is the worst possible scenario?', tr: 'Olabilecek en kötü senaryo nedir?' },
      { en: 'There is no alternative in this situation.', tr: 'Bu durumda başka alternatif yok.' },
    ],
    dialogs: [
      ['Should I call you?', 'Seni arayayım mı?', 'Not unless it is urgent.', 'Acil olmadıkça hayır.'],
      ['Can I borrow your car?', 'Arabanı ödünç alabilir miyim?', 'As long as you drive carefully.', 'Dikkatli sürdüğün sürece.'],
      ['Why are you bringing so much food?', 'Neden bu kadar yemek getiriyorsun?', 'In case more people come.', 'Daha çok kişi gelir diye.'],
      ['Do you regret not moving abroad?', 'Yurt dışına taşınmadığına pişman mısın?', 'If I had gone, I would be happier now.', 'Gitseydim şimdi daha mutlu olurdum.'],
      ['Is it worth the risk?', 'Riske değer mi?', 'It depends on the outcome.', 'Sonuca bağlı.'],
      ['What should we do if the plan fails?', 'Plan başarısız olursa ne yapmalıyız?', 'We will need an alternative.', 'Bir alternatife ihtiyacımız olacak.'],
    ],
  },
  {
    level: 'B2', title: 'Hukuk ve Suç', desc: 'Adliye dili ve "It is said that" yapısı.', icon: '⚖️', color: '#2C3A47',
    tip: `
      <p>Haber dili: <b>It is said / believed / reported that…</b> ya da <b>He is said to be…</b> → <i>He <b>is believed to have</b> left the country.</i></p>
      <p>Geçmiş için <b>to have + V3</b>: <i>She is said <b>to have stolen</b> it.</i></p>
      <p>Suç fiilleri: <b>commit</b> a crime, <b>arrest</b> someone, <b>accuse</b> someone <b>of</b> + -ing.</p>`,
    words: [
      { en: 'crime', tr: 'suç', emoji: '🚔' },
      { en: 'court', tr: 'mahkeme', emoji: '🏛️' },
      { en: 'judge', tr: 'hâkim', emoji: '👩‍⚖️' },
      { en: 'guilty', tr: 'suçlu', emoji: '😔' },
      { en: 'innocent', tr: 'masum', emoji: '😇' },
      { en: 'arrest', tr: 'tutuklamak', emoji: '🚓' },
      { en: 'suspect', tr: 'şüpheli/şüphelenmek', emoji: '🕶️' },
      { en: 'trial', tr: 'duruşma', emoji: '🔨' },
      { en: 'accuse', tr: 'suçlamak', emoji: '🫵🏼' },
      { en: 'prison', tr: 'hapishane', emoji: '⛓️' },
    ],
    sentences: [
      { en: 'It is believed that the suspect has left the country.', tr: 'Şüphelinin ülkeyi terk ettiğine inanılıyor.' },
      { en: 'He is said to be very rich.', tr: 'Çok zengin olduğu söyleniyor.' },
      { en: 'The police arrested two men last night.', tr: 'Polis dün gece iki adamı tutukladı.' },
      { en: 'She was accused of stealing the money.', tr: 'Parayı çalmakla suçlandı.' },
      { en: 'The judge found him guilty.', tr: 'Hâkim onu suçlu buldu.' },
      { en: 'I am innocent until proven guilty.', tr: 'Suçum kanıtlanana kadar masumum.' },
      { en: 'The trial will begin next month.', tr: 'Duruşma gelecek ay başlayacak.' },
      { en: 'He spent ten years in prison.', tr: 'On yıl hapis yattı.' },
    ],
    dialogs: [
      ['What was he charged with?', 'Neyle suçlandı?', 'He was accused of fraud.', 'Dolandırıcılıkla suçlandı.'],
      ['Did she commit the crime?', 'Suçu o mu işledi?', 'The court decided she was innocent.', 'Mahkeme masum olduğuna karar verdi.'],
      ['When is the trial?', 'Duruşma ne zaman?', 'It has been postponed until June.', 'Hazirana ertelendi.'],
      ['Have they caught the thief?', 'Hırsızı yakaladılar mı?', 'He is reported to have escaped.', 'Kaçtığı bildiriliyor.'],
      ['What did the judge say?', 'Hâkim ne dedi?', 'That the evidence was not enough.', 'Delillerin yeterli olmadığını.'],
      ['Do you need a lawyer?', 'Avukata ihtiyacın var mı?', 'Yes, I would like to speak to one.', 'Evet, biriyle konuşmak isterim.'],
    ],
  },
  {
    level: 'B2', title: 'Sağlık Sistemi', desc: 'Tanı, tedavi ve uzman görüşmeleri.', icon: '🩺', color: '#009688',
    tip: `
      <p>Doktorla: <i>I've been having <b>symptoms</b> for a week. What are the <b>side effects</b>?</i></p>
      <p><b>undergo surgery</b> (ameliyat olmak), <b>be diagnosed with</b> (teşhis konmak).</p>
      <p>Tavsiye dili: <b>It is advisable to…</b> / <b>You ought to…</b> (-meli, should'dan daha resmi).</p>`,
    words: [
      { en: 'symptom', tr: 'belirti', emoji: '🤒' },
      { en: 'diagnosis', tr: 'teşhis', emoji: '📋' },
      { en: 'treatment', tr: 'tedavi', emoji: '💊' },
      { en: 'surgery', tr: 'ameliyat', emoji: '🔪' },
      { en: 'prescription', tr: 'reçete', emoji: '📄' },
      { en: 'patient', tr: 'hasta/sabırlı', emoji: '🛌' },
      { en: 'specialist', tr: 'uzman', emoji: '🧑‍⚕️' },
      { en: 'vaccine', tr: 'aşı', emoji: '💉' },
      { en: 'chronic', tr: 'kronik', emoji: '♾️' },
      { en: 'side effect', tr: 'yan etki', emoji: '⚠️' },
    ],
    sentences: [
      { en: 'I have had these symptoms for a week.', tr: 'Bir haftadır bu belirtiler var.' },
      { en: 'He was diagnosed with diabetes.', tr: 'Ona diyabet teşhisi kondu.' },
      { en: 'The treatment takes about six months.', tr: 'Tedavi yaklaşık altı ay sürüyor.' },
      { en: 'She needs surgery on her knee.', tr: 'Dizinden ameliyat olması gerekiyor.' },
      { en: 'You cannot buy this without a prescription.', tr: 'Bunu reçetesiz alamazsın.' },
      { en: 'The doctor referred me to a specialist.', tr: 'Doktor beni bir uzmana sevk etti.' },
      { en: 'This medicine may have side effects.', tr: 'Bu ilacın yan etkileri olabilir.' },
      { en: 'Vaccines save millions of lives.', tr: 'Aşılar milyonlarca hayat kurtarır.' },
    ],
    dialogs: [
      ['What seems to be the problem?', 'Sorun nedir?', 'I have had chest pain since Monday.', 'Pazartesiden beri göğüs ağrım var.'],
      ['Is it serious?', 'Ciddi mi?', 'We will know after the tests.', 'Tahlillerden sonra bileceğiz.'],
      ['Are there any side effects?', 'Yan etkileri var mı?', 'It might make you feel sleepy.', 'Uykunuzu getirebilir.'],
      ['Do I need surgery?', 'Ameliyat gerekiyor mu?', 'Not at this stage.', 'Bu aşamada hayır.'],
      ['How is the patient today?', 'Hasta bugün nasıl?', 'She is recovering well.', 'İyi bir şekilde iyileşiyor.'],
      ['Have you had your vaccine?', 'Aşını oldun mu?', 'Yes, I got it last week.', 'Evet, geçen hafta oldum.'],
    ],
  },
  {
    level: 'B2', title: 'Medya ve Gerçekler', desc: 'Haberi sorgula, kaynak ve önyargıyı tartış.', icon: '📰', color: '#8854D0',
    tip: `
      <p>Tartışmalı bilgi: <b>according to</b> (-e göre), <b>allegedly</b> (iddiaya göre).</p>
      <p>Şüphe bildirme: <i>I <b>doubt</b> whether that's true. It <b>seems</b> biased to me.</i></p>
      <p><b>so that</b> amaç bildirir: <i>They publish it <b>so that</b> people will click.</i></p>`,
    words: [
      { en: 'journalist', tr: 'gazeteci', emoji: '🎙️' },
      { en: 'source', tr: 'kaynak', emoji: '🔗' },
      { en: 'reliable', tr: 'güvenilir', emoji: '✔️' },
      { en: 'biased', tr: 'taraflı', emoji: '⚖️' },
      { en: 'fake', tr: 'sahte', emoji: '🎭' },
      { en: 'advertisement', tr: 'reklam', emoji: '📢' },
      { en: 'audience', tr: 'izleyici kitlesi', emoji: '👥' },
      { en: 'influence', tr: 'etkilemek/etki', emoji: '🌊' },
      { en: 'publish', tr: 'yayımlamak', emoji: '🗞️' },
      { en: 'according to', tr: '-e göre', emoji: '📖' },
    ],
    sentences: [
      { en: 'According to the report, prices will rise.', tr: 'Rapora göre fiyatlar yükselecek.' },
      { en: 'You should always check your sources.', tr: 'Kaynaklarını her zaman kontrol etmelisin.' },
      { en: 'Is this website reliable?', tr: 'Bu web sitesi güvenilir mi?' },
      { en: 'That news story turned out to be fake.', tr: 'O haberin sahte olduğu ortaya çıktı.' },
      { en: 'The article seems biased to me.', tr: 'Makale bana taraflı görünüyor.' },
      { en: 'Advertisements influence what we buy.', tr: 'Reklamlar ne satın aldığımızı etkiler.' },
      { en: 'The journalist refused to name her source.', tr: 'Gazeteci kaynağının adını vermeyi reddetti.' },
      { en: 'The book was published for a young audience.', tr: 'Kitap genç bir kitle için yayımlandı.' },
    ],
    dialogs: [
      ['Where did you read that?', 'Bunu nerede okudun?', 'In a post on social media.', 'Sosyal medyadaki bir paylaşımda.'],
      ['Do you believe everything you read?', 'Okuduğun her şeye inanır mısın?', 'No, I always look for a second source.', 'Hayır, her zaman ikinci bir kaynak ararım.'],
      ['Why do they publish such stories?', 'Neden böyle haberler yayımlıyorlar?', 'So that people will click on them.', 'İnsanlar tıklasın diye.'],
      ['Is that newspaper reliable?', 'O gazete güvenilir mi?', 'I doubt it, it is very biased.', 'Sanmıyorum, çok taraflı.'],
      ['Who is the audience for this show?', 'Bu programın izleyici kitlesi kim?', 'Mostly people in their twenties.', 'Çoğunlukla yirmili yaşlarındaki insanlar.'],
      ['Does advertising influence you?', 'Reklamlar seni etkiliyor mu?', 'More than I would like to admit.', 'Kabul etmek istediğimden fazla.'],
    ],
  },
  {
    level: 'B2', title: 'Bilim ve Keşif', desc: 'Araştırma, deney ve bulguları anlat.', icon: '🔬', color: '#0FB9B1',
    tip: `
      <p>Bulgu aktarma: <b>The study shows that…</b> / <b>Researchers have found that…</b> / <b>It has been proved that…</b></p>
      <p>Neden-sonuç: <b>lead to</b> (yol açmak), <b>result in</b> (sonuçlanmak), <b>be caused by</b> (-den kaynaklanmak).</p>
      <p><b>the + karşılaştırma</b>: <i><b>The more</b> we learn, <b>the less</b> we know.</i></p>`,
    words: [
      { en: 'research', tr: 'araştırma', emoji: '📚' },
      { en: 'experiment', tr: 'deney', emoji: '🧪' },
      { en: 'theory', tr: 'teori', emoji: '🌌' },
      { en: 'scientist', tr: 'bilim insanı', emoji: '🧑‍🔬' },
      { en: 'prove', tr: 'kanıtlamak', emoji: '✅' },
      { en: 'laboratory', tr: 'laboratuvar', emoji: '⚗️' },
      { en: 'discovery', tr: 'keşif', emoji: '🔭' },
      { en: 'gene', tr: 'gen', emoji: '🧬' },
      { en: 'planet', tr: 'gezegen', emoji: '🪐' },
      { en: 'lead to', tr: 'yol açmak', emoji: '➡️' },
    ],
    sentences: [
      { en: 'Researchers have found a new treatment.', tr: 'Araştırmacılar yeni bir tedavi buldu.' },
      { en: 'The experiment did not prove the theory.', tr: 'Deney teoriyi kanıtlamadı.' },
      { en: 'Scientists are looking for life on other planets.', tr: 'Bilim insanları başka gezegenlerde hayat arıyor.' },
      { en: 'Too much sugar can lead to serious illness.', tr: 'Çok fazla şeker ciddi hastalıklara yol açabilir.' },
      { en: 'The more we learn, the less we know.', tr: 'Öğrendikçe daha az bildiğimizi görürüz.', alt: ['Ne kadar çok öğrenirsek o kadar az biliriz.'] },
      { en: 'Eye colour is determined by genes.', tr: 'Göz rengi genler tarafından belirlenir.' },
      { en: 'This discovery changed medicine forever.', tr: 'Bu keşif tıbbı sonsuza dek değiştirdi.' },
      { en: 'The work is carried out in a laboratory.', tr: 'Çalışma bir laboratuvarda yürütülüyor.' },
    ],
    dialogs: [
      ['What does the study show?', 'Araştırma neyi gösteriyor?', 'That sleep improves memory.', 'Uykunun hafızayı güçlendirdiğini.'],
      ['Has the theory been proved?', 'Teori kanıtlandı mı?', 'Not yet, more research is needed.', 'Henüz değil, daha çok araştırma gerekiyor.'],
      ['What caused the problem?', 'Soruna ne sebep oldu?', 'It was caused by a change in temperature.', 'Sıcaklık değişikliğinden kaynaklandı.'],
      ['Is there life on other planets?', 'Başka gezegenlerde hayat var mı?', 'Nobody knows for certain.', 'Kimse kesin olarak bilmiyor.'],
      ['What was the biggest discovery of the century?', 'Yüzyılın en büyük keşfi neydi?', 'I would say antibiotics.', 'Antibiyotikler derdim.'],
      ['How was the experiment carried out?', 'Deney nasıl yürütüldü?', 'We tested it on two groups.', 'İki grup üzerinde test ettik.'],
    ],
  },
  {
    level: 'B2', title: 'Zihin ve Duygular', desc: 'Stres, özgüven ve ruh hâli hakkında derin konuş.', icon: '🧘', color: '#7158E2',
    tip: `
      <p>Başa çıkmak: <b>cope with</b>, <b>deal with</b>, <b>overcome</b>: <i>How do you <b>cope with</b> stress?</i></p>
      <p>Duygu sıfatları ile edatlar: <i>anxious <b>about</b>, proud <b>of</b>, fed up <b>with</b>.</i></p>
      <p><b>the way</b> ile anlatım: <i>I don't like <b>the way</b> he talks to me.</i></p>`,
    words: [
      { en: 'anxiety', tr: 'kaygı', emoji: '😰' },
      { en: 'confidence', tr: 'özgüven/güven', emoji: '🦸' },
      { en: 'motivation', tr: 'motivasyon', emoji: '🚀' },
      { en: 'mood', tr: 'ruh hâli', emoji: '🌦️' },
      { en: 'behaviour', tr: 'davranış', emoji: '🐾' },
      { en: 'overcome', tr: 'üstesinden gelmek', emoji: '🧗‍♀️' },
      { en: 'cope with', tr: 'başa çıkmak', emoji: '🛟' },
      { en: 'burnout', tr: 'tükenmişlik', emoji: '🥱' },
      { en: 'empathy', tr: 'empati', emoji: '🫀' },
      { en: 'fed up', tr: 'bıkmış', emoji: '😤' },
    ],
    sentences: [
      { en: 'How do you cope with stress?', tr: 'Stresle nasıl başa çıkıyorsun?' },
      { en: 'She has overcome her fear of flying.', tr: 'Uçma korkusunun üstesinden geldi.' },
      { en: 'I am in a good mood today.', tr: 'Bugün keyfim yerinde.' },
      { en: 'Exercise helps to reduce anxiety.', tr: 'Egzersiz kaygıyı azaltmaya yardımcı olur.' },
      { en: 'He lost all his motivation after the failure.', tr: 'Başarısızlıktan sonra tüm motivasyonunu kaybetti.' },
      { en: 'I am fed up with this job.', tr: 'Bu işten bıktım.' },
      { en: 'Good leaders show empathy.', tr: 'İyi liderler empati gösterir.' },
      { en: 'I do not like the way he talks to me.', tr: 'Benimle konuşma şeklini sevmiyorum.' },
    ],
    dialogs: [
      ['You seem down. What is wrong?', 'Keyifsiz görünüyorsun. Ne oldu?', 'I have been feeling anxious lately.', 'Son zamanlarda kaygılı hissediyorum.'],
      ['How can I build my confidence?', 'Özgüvenimi nasıl artırabilirim?', 'Start with small goals.', 'Küçük hedeflerle başla.'],
      ['Are you working too hard?', 'Çok mu çalışıyorsun?', 'Yes, I think I am close to burnout.', 'Evet, sanırım tükenmeye yakınım.'],
      ['Why is he behaving like that?', 'Neden öyle davranıyor?', 'He is under a lot of pressure.', 'Üzerinde çok baskı var.'],
      ['Have you talked to someone about it?', 'Bunu biriyle konuştun mu?', 'Yes, I am seeing a therapist.', 'Evet, bir terapiste gidiyorum.'],
      ['How do you stay motivated?', 'Motivasyonunu nasıl koruyorsun?', 'I remind myself why I started.', 'Neden başladığımı kendime hatırlatırım.'],
    ],
  },
  {
    level: 'B2', title: 'Sunum Yapmak', desc: 'Sunumu aç, verileri anlat, soruları karşıla.', icon: '📊', color: '#3C6382',
    tip: `
      <p>Açılış: <b>Today I'd like to talk about…</b> Geçiş: <b>Let's move on to…</b> Kapanış: <b>To sum up,…</b></p>
      <p>Grafik dili: <b>rise / increase</b> (artmak), <b>fall / decrease</b> (azalmak), <b>remain stable</b> (sabit kalmak).</p>
      <p>Vurgu: <i>The key point <b>is that</b>…; As you can see from this chart,…</i></p>`,
    words: [
      { en: 'presentation', tr: 'sunum', emoji: '📽️' },
      { en: 'slide', tr: 'slayt', emoji: '🖼️' },
      { en: 'summarise', tr: 'özetlemek', emoji: '📝' },
      { en: 'highlight', tr: 'vurgulamak', emoji: '🖍️' },
      { en: 'outline', tr: 'taslak/ana hatlar', emoji: '🗒️' },
      { en: 'conclusion', tr: 'sonuç/kapanış', emoji: '🔚' },
      { en: 'statistics', tr: 'istatistik', emoji: '📈' },
      { en: 'trend', tr: 'eğilim', emoji: '📉' },
      { en: 'increase', tr: 'artmak/artış', emoji: '⬆️' },
      { en: 'decrease', tr: 'azalmak/azalış', emoji: '🔽' },
    ],
    sentences: [
      { en: 'Today I would like to talk about our sales.', tr: 'Bugün satışlarımız hakkında konuşmak istiyorum.' },
      { en: 'Let me start with a short outline.', tr: 'Kısa bir ana hatla başlayayım.' },
      { en: 'As you can see on this slide, sales increased.', tr: 'Bu slaytta görebileceğiniz gibi satışlar arttı.' },
      { en: 'Let us move on to the next point.', tr: 'Bir sonraki noktaya geçelim.', altEn: ["Let's move on to the next point."] },
      { en: 'The statistics show a clear trend.', tr: 'İstatistikler net bir eğilim gösteriyor.' },
      { en: 'Costs decreased by ten percent.', tr: 'Maliyetler yüzde on azaldı.' },
      { en: 'I would like to highlight two key points.', tr: 'İki önemli noktayı vurgulamak istiyorum.' },
      { en: 'To sum up, the project was a success.', tr: 'Özetle, proje başarılı oldu.' },
    ],
    dialogs: [
      ['Can you summarise the main points?', 'Ana noktaları özetleyebilir misin?', 'Of course, there are three.', 'Tabii, üç tane var.'],
      ['What do these figures mean?', 'Bu rakamlar ne anlama geliyor?', 'They show a steady increase.', 'Düzenli bir artış gösteriyorlar.'],
      ['How long will your presentation take?', 'Sunumun ne kadar sürecek?', 'About twenty minutes.', 'Yaklaşık yirmi dakika.'],
      ['May I ask a question?', 'Bir soru sorabilir miyim?', 'Yes, please go ahead.', 'Evet, buyurun.'],
      ['What is your conclusion?', 'Sonucunuz nedir?', 'We should invest more in training.', 'Eğitime daha fazla yatırım yapmalıyız.'],
      ['Could you go back to the last slide?', 'Son slayta dönebilir misiniz?', 'Sure, here it is.', 'Tabii, işte burada.'],
    ],
  },
  {
    level: 'B2', title: 'Yaygın Deyimler', desc: 'Ana dili İngilizce olanların her gün kullandığı deyimler.', icon: '🎭', color: '#CC8E35',
    tip: `
      <p>Deyimler kelime kelime çevrilmez: <i>It's <b>a piece of cake</b></i> = çok kolay.</p>
      <p>Çoğu gündelik konuşmada kullanılır, resmi yazıda kaçınılır.</p>
      <p>Türkçe karşılığı olanları eşleştirerek öğren: <i><b>cost an arm and a leg</b></i> = "dudak uçuklatan fiyat".</p>`,
    words: [
      { en: 'a piece of cake', tr: 'çok kolay iş', emoji: '🍰' },
      { en: 'break the ice', tr: 'buzları eritmek', emoji: '🧊' },
      { en: 'under the weather', tr: 'keyifsiz/biraz hasta', emoji: '🤧' },
      { en: 'cost an arm and a leg', tr: 'çok pahalıya mal olmak', emoji: '💸' },
      { en: 'once in a blue moon', tr: 'kırk yılda bir', emoji: '🌕' },
      { en: 'on the same page', tr: 'aynı fikirde', emoji: '📖' },
      { en: 'the last straw', tr: 'bardağı taşıran son damla', emoji: '🌾' },
      { en: 'call it a day', tr: 'o günlük bırakmak', emoji: '🌆' },
      { en: 'keep an eye on', tr: 'göz kulak olmak', emoji: '👁️‍🗨️' },
      { en: 'get cold feet', tr: 'son anda korkmak', emoji: '🥶' },
    ],
    sentences: [
      { en: 'The exam was a piece of cake.', tr: 'Sınav çok kolaydı.' },
      { en: 'That car cost an arm and a leg.', tr: 'O araba çok pahalıya mal oldu.' },
      { en: 'I am feeling a bit under the weather.', tr: 'Kendimi biraz keyifsiz hissediyorum.' },
      { en: 'We only see each other once in a blue moon.', tr: 'Birbirimizi kırk yılda bir görüyoruz.' },
      { en: 'It is late, so let us call it a day.', tr: 'Geç oldu, bugünlük bu kadar yeter.' },
      { en: 'Can you keep an eye on my bag?', tr: 'Çantama göz kulak olabilir misin?' },
      { en: 'He got cold feet before the wedding.', tr: 'Düğünden önce son anda korktu.' },
      { en: 'That was the last straw for me.', tr: 'Bu benim için bardağı taşıran son damla oldu.' },
    ],
    dialogs: [
      ['How was the test?', 'Sınav nasıldı?', 'It was a piece of cake.', 'Çok kolaydı.'],
      ['Do you go to the cinema often?', 'Sık sinemaya gider misin?', 'No, only once in a blue moon.', 'Hayır, kırk yılda bir.'],
      ['Are you all right?', 'İyi misin?', 'I am a little under the weather.', 'Biraz keyifsizim.'],
      ['Shall we keep working?', 'Çalışmaya devam edelim mi?', 'No, let us call it a day.', 'Hayır, bugünlük bırakalım.'],
      ['Why did you quit?', 'Neden bıraktın?', 'The new rule was the last straw.', 'Yeni kural bardağı taşıran son damla oldu.'],
      ['Are we on the same page about this?', 'Bu konuda aynı fikirde miyiz?', 'Yes, I completely agree with you.', 'Evet, sana tamamen katılıyorum.'],
    ],
  },
);
