// Dilbaz — A1 ek üniteler: temel dilbilgisini tamamlar
// dialogs: [soru, soru (TR), cevap, cevap (TR)]

const NEW_UNITS_A1 = [
  {
    level: 'A1', title: 'Soru Kelimeleri', desc: 'Kim, ne, ne zaman, neden diye sor.', icon: '❓', color: '#8E44AD',
    tip: `
      <p>Soru kelimeleri: <b>what</b> (ne), <b>who</b> (kim), <b>when</b> (ne zaman), <b>why</b> (neden), <b>how</b> (nasıl).</p>
      <p>Soru kelimesinden sonra yardımcı fiil gelir: <i>Where <b>do</b> you live? What <b>is</b> this?</i></p>
      <p><b>How many</b> (kaç tane), <b>how old</b> (kaç yaşında).</p>`,
    words: [
      { en: 'what', tr: 'ne', emoji: '❓' },
      { en: 'who', tr: 'kim', emoji: '🙋' },
      { en: 'when', tr: 'ne zaman', emoji: '🕒' },
      { en: 'why', tr: 'neden/niçin', emoji: '🤔' },
      { en: 'how', tr: 'nasıl', emoji: '🛠️' },
      { en: 'which', tr: 'hangi', emoji: '👉' },
      { en: 'live', tr: 'yaşamak/oturmak', emoji: '🏘️' },
      { en: 'like', tr: 'sevmek/hoşlanmak', emoji: '❤️' },
      { en: 'know', tr: 'bilmek', emoji: '💡' },
      { en: 'old', tr: 'yaşlı/eski', emoji: '👴' },
    ],
    sentences: [
      { en: 'What is your name?', tr: 'Adın ne?', alt: ['Senin adın ne?'] },
      { en: 'Where do you live?', tr: 'Nerede yaşıyorsun?', alt: ['Nerede oturuyorsun?'] },
      { en: 'Who is that man?', tr: 'O adam kim?', alt: ['Şu adam kim?'] },
      { en: 'When is your birthday?', tr: 'Doğum günün ne zaman?' },
      { en: 'Why are you sad?', tr: 'Neden üzgünsün?', alt: ['Niçin üzgünsün?'] },
      { en: 'How old are you?', tr: 'Kaç yaşındasın?' },
      { en: 'Which book do you like?', tr: 'Hangi kitabı seviyorsun?' },
      { en: 'I do not know the answer.', tr: 'Cevabı bilmiyorum.', altEn: ["I don't know the answer."] },
    ],
    dialogs: [
      ['What is this?', 'Bu ne?', 'It is a pen.', 'Bu bir kalem.'],
      ['Who is she?', 'O kim?', 'She is my sister.', 'O benim kız kardeşim.'],
      ['Why are you late?', 'Neden geç kaldın?', 'I missed the bus.', 'Otobüsü kaçırdım.'],
      ['How are you today?', 'Bugün nasılsın?', 'I am very well, thanks.', 'Çok iyiyim, teşekkürler.'],
      ['Where do you work?', 'Nerede çalışıyorsun?', 'I work in a bank.', 'Bir bankada çalışıyorum.'],
      ['When do you go home?', 'Eve ne zaman gidiyorsun?', 'I go home at five.', 'Saat beşte eve gidiyorum.'],
    ],
  },
  {
    level: 'A1', title: 'Olumsuz Cümleler', desc: "Don't ve doesn't ile 'yapmıyorum' de.", icon: '🚫', color: '#C0392B',
    tip: `
      <p>Geniş zamanda olumsuz: <b>I/you/we/they + don't</b> → <i>I <b>don't</b> eat meat.</i></p>
      <p><b>he/she/it + doesn't</b> ve fiil yalın kalır: <i>She <b>doesn't</b> drink tea.</i> ("doesn't drinks" yanlıştır.)</p>
      <p>Soru için <b>do/does</b> başa gelir: <i><b>Does</b> he work here?</i></p>`,
    words: [
      { en: 'meat', tr: 'et', emoji: '🥩' },
      { en: 'want', tr: 'istemek', emoji: '🙏' },
      { en: 'understand', tr: 'anlamak', emoji: '🧠' },
      { en: 'need', tr: 'ihtiyaç duymak', emoji: '🆘' },
      { en: 'car', tr: 'araba', emoji: '🚗' },
      { en: 'smoke', tr: 'sigara içmek', emoji: '🚬' },
      { en: 'watch', tr: 'izlemek', emoji: '📺' },
      { en: 'play', tr: 'oynamak/çalmak', emoji: '🎮' },
      { en: 'much', tr: 'çok (sayılamayan)', emoji: '📈' },
      { en: 'now', tr: 'şimdi', emoji: '⏰' },
    ],
    sentences: [
      { en: 'I do not eat meat.', tr: 'Et yemem.', alt: ['Et yemiyorum.', 'Ben et yemem.'], altEn: ["I don't eat meat."] },
      { en: 'She does not want coffee.', tr: 'O kahve istemiyor.', alt: ['Kahve istemiyor.'], altEn: ["She doesn't want coffee."] },
      { en: 'We do not have a car.', tr: 'Arabamız yok.', alt: ['Bizim arabamız yok.'], altEn: ["We don't have a car."] },
      { en: 'He does not smoke.', tr: 'O sigara içmez.', alt: ['Sigara içmiyor.', 'Sigara içmez.'], altEn: ["He doesn't smoke."] },
      { en: 'I do not understand.', tr: 'Anlamıyorum.', altEn: ["I don't understand."] },
      { en: 'They do not watch TV.', tr: 'Onlar televizyon izlemez.', alt: ['Televizyon izlemiyorlar.'], altEn: ["They don't watch TV."] },
      { en: 'Does he play football?', tr: 'O futbol oynar mı?', alt: ['Futbol oynuyor mu?'] },
      { en: 'Do you need help?', tr: 'Yardıma ihtiyacın var mı?' },
    ],
    dialogs: [
      ['Do you like fish?', 'Balık sever misin?', 'No, I do not like fish.', 'Hayır, balık sevmem.'],
      ['Does she speak English?', 'O İngilizce konuşuyor mu?', 'Yes, she does.', 'Evet, konuşuyor.'],
      ['Do you have a car?', 'Araban var mı?', 'No, I do not.', 'Hayır, yok.'],
      ['Do you understand?', 'Anlıyor musun?', 'Yes, I understand now.', 'Evet, şimdi anlıyorum.'],
      ['Does he work on Sunday?', 'O pazar günü çalışıyor mu?', 'No, he does not.', 'Hayır, çalışmıyor.'],
      ['Do you want some tea?', 'Biraz çay ister misin?', 'No, thank you. I do not want much.', 'Hayır, teşekkürler. Çok istemiyorum.'],
    ],
  },
  {
    level: 'A1', title: 'Bu, Şu ve Sahiplik', desc: "This, that ve Ali'nin kitabı gibi yapılar.", icon: '👈', color: '#16A085',
    tip: `
      <p><b>this</b> (bu, yakın) / <b>that</b> (şu, uzak). Çoğulları: <b>these</b> (bunlar) / <b>those</b> (şunlar).</p>
      <p>Sahiplik için <b>'s</b>: <i>Ali<b>'s</b> book</i> (Ali'nin kitabı), <i>my mother<b>'s</b> car.</i></p>
      <p>Zamirler: <b>mine</b> (benimki), <b>yours</b> (seninki). <i>This book is <b>mine</b>.</i></p>`,
    words: [
      { en: 'this', tr: 'bu', emoji: '👇' },
      { en: 'that', tr: 'şu/o', emoji: '👉' },
      { en: 'these', tr: 'bunlar', emoji: '🫳' },
      { en: 'those', tr: 'şunlar', emoji: '🫴' },
      { en: 'mine', tr: 'benimki', emoji: '🙋‍♂️' },
      { en: 'yours', tr: 'seninki', emoji: '🫵' },
      { en: 'key', tr: 'anahtar', emoji: '🔑' },
      { en: 'umbrella', tr: 'şemsiye', emoji: '☂️' },
      { en: 'wallet', tr: 'cüzdan', emoji: '👛' },
      { en: 'new', tr: 'yeni', emoji: '✨' },
    ],
    sentences: [
      { en: 'This is my new phone.', tr: 'Bu benim yeni telefonum.' },
      { en: 'That is not my car.', tr: 'O benim arabam değil.', alt: ['Şu benim arabam değil.'], altEn: ["That isn't my car."] },
      { en: 'These shoes are new.', tr: 'Bu ayakkabılar yeni.' },
      { en: 'Those keys are mine.', tr: 'Şu anahtarlar benim.', alt: ['O anahtarlar benim.', 'Şu anahtarlar benimki.'] },
      { en: 'Is this umbrella yours?', tr: 'Bu şemsiye senin mi?' },
      { en: "This is my mother's wallet.", tr: 'Bu annemin cüzdanı.' },
      { en: "My father's car is black.", tr: 'Babamın arabası siyah.' },
      { en: 'Whose bag is this?', tr: 'Bu kimin çantası?' },
    ],
    dialogs: [
      ['Is this your key?', 'Bu senin anahtarın mı?', 'Yes, it is mine.', 'Evet, benim.'],
      ['Whose coat is that?', 'O kimin paltosu?', "It is my brother's coat.", 'O erkek kardeşimin paltosu.'],
      ['Are these your socks?', 'Bunlar senin çorapların mı?', 'No, they are not mine.', 'Hayır, benim değil.'],
      ['What is that?', 'O ne?', 'That is a new school.', 'O yeni bir okul.'],
      ['Is that wallet yours?', 'O cüzdan senin mi?', 'No, I think it is hers.', 'Hayır, sanırım onun.'],
      ['Who are those people?', 'Şu insanlar kim?', 'They are my friends.', 'Onlar benim arkadaşlarım.'],
    ],
  },
  {
    level: 'A1', title: 'Şu An Ne Yapıyorsun?', desc: 'Şimdiki zamanla şu anda olanları anlat.', icon: '🏃', color: '#E67E22',
    tip: `
      <p>Şimdiki zaman: <b>am/is/are + fiil-ing</b> → <i>I <b>am reading</b>. She <b>is cooking</b>.</i></p>
      <p>Olumsuz: <i>He <b>isn't</b> working.</i> Soru: <i><b>Are</b> you listening?</i></p>
      <p>Geniş zamanla farkı: <i>I work every day</i> (her gün) – <i>I am working now</i> (şu an).</p>`,
    words: [
      { en: 'run', tr: 'koşmak', emoji: '🏃' },
      { en: 'walk', tr: 'yürümek', emoji: '🚶' },
      { en: 'sit', tr: 'oturmak', emoji: '🪑' },
      { en: 'stand', tr: 'ayakta durmak', emoji: '🧍' },
      { en: 'listen', tr: 'dinlemek', emoji: '🎧' },
      { en: 'look', tr: 'bakmak', emoji: '👀' },
      { en: 'study', tr: 'ders çalışmak', emoji: '📚' },
      { en: 'talk', tr: 'konuşmak', emoji: '💬' },
      { en: 'laugh', tr: 'gülmek', emoji: '😂' },
      { en: 'cry', tr: 'ağlamak', emoji: '😢' },
    ],
    sentences: [
      { en: 'I am studying now.', tr: 'Şimdi ders çalışıyorum.', altEn: ["I'm studying now."] },
      { en: 'She is listening to music.', tr: 'O müzik dinliyor.', alt: ['Müzik dinliyor.'], altEn: ["She's listening to music."] },
      { en: 'The children are running.', tr: 'Çocuklar koşuyor.' },
      { en: 'He is not sitting.', tr: 'O oturmuyor.', alt: ['Oturmuyor.'], altEn: ["He isn't sitting."] },
      { en: 'Why is the baby crying?', tr: 'Bebek neden ağlıyor?' },
      { en: 'We are walking to school.', tr: 'Okula yürüyoruz.', altEn: ["We're walking to school."] },
      { en: 'Are you talking to me?', tr: 'Benimle mi konuşuyorsun?' },
      { en: 'Look at the bird!', tr: 'Kuşa bak!' },
    ],
    dialogs: [
      ['What are you doing?', 'Ne yapıyorsun?', 'I am reading a book.', 'Kitap okuyorum.'],
      ['Where is your brother?', 'Erkek kardeşin nerede?', 'He is sleeping in his room.', 'Odasında uyuyor.'],
      ['Are you listening to me?', 'Beni dinliyor musun?', 'Yes, I am listening.', 'Evet, dinliyorum.'],
      ['Why are they laughing?', 'Neden gülüyorlar?', 'They are watching a funny film.', 'Komik bir film izliyorlar.'],
      ['Is it raining now?', 'Şimdi yağmur yağıyor mu?', 'No, it is not raining.', 'Hayır, yağmur yağmıyor.'],
      ['Is she cooking?', 'O yemek mi yapıyor?', 'Yes, she is making soup.', 'Evet, çorba yapıyor.'],
    ],
  },
  {
    level: 'A1', title: 'Yapabilirim', desc: 'Can ile yetenek, izin ve rica.', icon: '💪', color: '#27AE60',
    tip: `
      <p><b>can</b> her özneyle aynı kalır, fiil yalın gelir: <i>She <b>can swim</b>.</i> ("can swims" yanlış)</p>
      <p>Olumsuz: <b>can't</b> (cannot): <i>I <b>can't</b> drive.</i> Soru: <i><b>Can</b> you help me?</i></p>
      <p>Geçmişte: <b>could</b> → <i>I <b>could</b> run fast when I was young.</i></p>`,
    words: [
      { en: 'drive', tr: 'araba kullanmak', emoji: '🚙' },
      { en: 'ride', tr: 'sürmek/binmek', emoji: '🚲' },
      { en: 'sing', tr: 'şarkı söylemek', emoji: '🎤' },
      { en: 'jump', tr: 'zıplamak', emoji: '🦘' },
      { en: 'climb', tr: 'tırmanmak', emoji: '🧗' },
      { en: 'carry', tr: 'taşımak', emoji: '📦' },
      { en: 'hear', tr: 'duymak', emoji: '👂' },
      { en: 'see', tr: 'görmek', emoji: '👁️' },
      { en: 'well', tr: 'iyi (zarf)', emoji: '👌' },
      { en: 'fast', tr: 'hızlı', emoji: '⚡' },
    ],
    sentences: [
      { en: 'I can speak a little English.', tr: 'Biraz İngilizce konuşabilirim.' },
      { en: 'She can sing very well.', tr: 'O çok iyi şarkı söyleyebilir.', alt: ['Çok iyi şarkı söyleyebiliyor.'] },
      { en: 'I cannot drive a car.', tr: 'Araba kullanamam.', alt: ['Araba kullanamıyorum.'], altEn: ["I can't drive a car.", 'I cannot drive a car.'] },
      { en: 'Can you ride a bike?', tr: 'Bisiklet sürebilir misin?' },
      { en: 'Can you help me?', tr: 'Bana yardım edebilir misin?' },
      { en: 'He can run very fast.', tr: 'O çok hızlı koşabilir.', alt: ['Çok hızlı koşabiliyor.'] },
      { en: 'I cannot hear you.', tr: 'Seni duyamıyorum.', altEn: ["I can't hear you.", 'I cannot hear you.'] },
      { en: 'Can I sit here?', tr: 'Buraya oturabilir miyim?' },
    ],
    dialogs: [
      ['Can you swim?', 'Yüzebilir misin?', 'Yes, I can swim very well.', 'Evet, çok iyi yüzebilirim.'],
      ['Can you carry this bag?', 'Bu çantayı taşıyabilir misin?', 'Sure, no problem.', 'Tabii, sorun değil.'],
      ['Can I open the window?', 'Pencereyi açabilir miyim?', 'Yes, of course.', 'Evet, tabii ki.'],
      ['Can your sister drive?', 'Kız kardeşin araba kullanabiliyor mu?', 'No, she cannot.', 'Hayır, kullanamıyor.'],
      ['Can you see the sea?', 'Denizi görebiliyor musun?', 'Yes, I can see it from here.', 'Evet, buradan görebiliyorum.'],
      ['Can we go now?', 'Şimdi gidebilir miyiz?', 'Not yet. Please wait a minute.', 'Henüz değil. Lütfen bir dakika bekle.'],
    ],
  },
  {
    level: 'A1', title: 'Beni, Seni, Onu', desc: 'Nesne zamirleri ve kısa cevaplar.', icon: '🫂', color: '#2980B9',
    tip: `
      <p>Özne → nesne: <b>I → me</b>, <b>you → you</b>, <b>he → him</b>, <b>she → her</b>, <b>we → us</b>, <b>they → them</b>.</p>
      <p><i><b>She</b> loves <b>him</b>. <b>He</b> loves <b>her</b>.</i> Türkçede "o" tek kelimedir, İngilizcede cinsiyet önemlidir.</p>
      <p>Edattan sonra nesne zamiri gelir: <i>Come with <b>me</b>.</i></p>`,
    words: [
      { en: 'me', tr: 'beni/bana', emoji: '🙋' },
      { en: 'him', tr: 'onu (erkek)/ona', emoji: '👦' },
      { en: 'her', tr: 'onu (kadın)/ona', emoji: '👧' },
      { en: 'us', tr: 'bizi/bize', emoji: '👨‍👩‍👧' },
      { en: 'them', tr: 'onları/onlara', emoji: '👥' },
      { en: 'love', tr: 'sevmek/aşk', emoji: '💕' },
      { en: 'give', tr: 'vermek', emoji: '🎁' },
      { en: 'tell', tr: 'söylemek/anlatmak', emoji: '🗣️' },
      { en: 'come', tr: 'gelmek', emoji: '🚪' },
      { en: 'with', tr: 'ile/birlikte', emoji: '🤝' },
    ],
    sentences: [
      { en: 'She loves him very much.', tr: 'O onu çok seviyor.', alt: ['Onu çok seviyor.'] },
      { en: 'Please give me the book.', tr: 'Lütfen bana kitabı ver.', alt: ['Lütfen kitabı bana ver.'] },
      { en: 'Come with us!', tr: 'Bizimle gel!' },
      { en: 'I know them.', tr: 'Onları tanıyorum.', alt: ['Onları biliyorum.'] },
      { en: 'Can you tell me your name?', tr: 'Bana adını söyleyebilir misin?', alt: ['Adını bana söyleyebilir misin?'] },
      { en: 'I see her every day.', tr: 'Onu her gün görüyorum.' },
      { en: 'He is looking at us.', tr: 'O bize bakıyor.', alt: ['Bize bakıyor.'] },
      { en: 'This gift is for you.', tr: 'Bu hediye senin için.' },
    ],
    dialogs: [
      ['Do you know him?', 'Onu tanıyor musun?', 'Yes, he is my neighbour.', 'Evet, o benim komşum.'],
      ['Can you help us?', 'Bize yardım edebilir misin?', 'Of course I can.', 'Tabii ki edebilirim.'],
      ['Where are your friends?', 'Arkadaşların nerede?', 'I cannot see them.', 'Onları göremiyorum.'],
      ['Who is this gift for?', 'Bu hediye kimin için?', 'It is for her.', 'Onun için.'],
      ['Are you coming with me?', 'Benimle geliyor musun?', 'Yes, wait for me!', 'Evet, beni bekle!'],
      ['Did she tell you?', 'Sana söyledi mi?', 'No, she did not tell me.', 'Hayır, bana söylemedi.'],
    ],
  },
  {
    level: 'A1', title: 'Aylar ve Mevsimler', desc: 'Tarih söyle, mevsimleri ve büyük sayıları öğren.', icon: '📅', color: '#D35400',
    tip: `
      <p>Aylar ve mevsimlerle <b>in</b>: <i>in June, in winter.</i> Günler ve tarihlerle <b>on</b>: <i>on Monday, on 5 May.</i></p>
      <p>Aylar büyük harfle yazılır, mevsimler küçük: <i>January, summer.</i></p>
      <p>Büyük sayılar: <b>twenty</b> (20), <b>fifty</b> (50), <b>a hundred</b> (100), <b>a thousand</b> (1000).</p>`,
    words: [
      { en: 'January', tr: 'ocak', emoji: '🎆' },
      { en: 'April', tr: 'nisan', emoji: '🌷' },
      { en: 'August', tr: 'ağustos', emoji: '🏖️' },
      { en: 'winter', tr: 'kış', emoji: '⛄' },
      { en: 'spring', tr: 'ilkbahar', emoji: '🌸' },
      { en: 'summer', tr: 'yaz', emoji: '🌞' },
      { en: 'autumn', tr: 'sonbahar', emoji: '🍂' },
      { en: 'twenty', tr: 'yirmi', emoji: '🔢' },
      { en: 'hundred', tr: 'yüz (sayı)', emoji: '💯' },
      { en: 'thousand', tr: 'bin', emoji: '🧮' },
    ],
    sentences: [
      { en: 'My birthday is in April.', tr: 'Doğum günüm nisanda.' },
      { en: 'It is very hot in August.', tr: 'Ağustosta hava çok sıcak.', alt: ['Ağustosta çok sıcak.'] },
      { en: 'I love spring.', tr: 'İlkbaharı çok severim.', alt: ['İlkbaharı seviyorum.'] },
      { en: 'It snows in winter.', tr: 'Kışın kar yağar.' },
      { en: 'We go to the beach in summer.', tr: 'Yazın plaja gideriz.' },
      { en: 'The leaves fall in autumn.', tr: 'Sonbaharda yapraklar düşer.', alt: ['Yapraklar sonbaharda düşer.'] },
      { en: 'This book costs twenty dollars.', tr: 'Bu kitap yirmi dolar.' },
      { en: 'There are a thousand students here.', tr: 'Burada bin öğrenci var.' },
    ],
    dialogs: [
      ['When is your birthday?', 'Doğum günün ne zaman?', 'It is in January.', 'Ocakta.'],
      ['What is your favourite season?', 'En sevdiğin mevsim hangisi?', 'I like summer best.', 'En çok yazı severim.'],
      ['How much is this bag?', 'Bu çanta ne kadar?', 'It is one hundred dollars.', 'Yüz dolar.'],
      ['Is it cold in autumn here?', 'Burada sonbaharda hava soğuk mu?', 'No, it is quite warm.', 'Hayır, oldukça ılık.'],
      ['When do you go on holiday?', 'Ne zaman tatile gidiyorsun?', 'We usually go in August.', 'Genellikle ağustosta gideriz.'],
      ['How many people live in your town?', 'Kasabanda kaç kişi yaşıyor?', 'About twenty thousand.', 'Yaklaşık yirmi bin.'],
    ],
  },
  {
    level: 'A1', title: 'Markette', desc: 'Some, any ve alışveriş listesi.', icon: '🛒', color: '#1ABC9C',
    tip: `
      <p>Olumlu cümlede <b>some</b>, olumsuz ve soruda <b>any</b>: <i>I have <b>some</b> eggs. I don't have <b>any</b> rice.</i></p>
      <p>Çoğul eki: <i>tomato → tomato<b>es</b>, cherry → cherr<b>ies</b>, knife → kni<b>ves</b>.</i></p>
      <p>Ölçüler: <b>a bottle of</b> water, <b>a kilo of</b> rice, <b>a packet of</b> tea.</p>`,
    words: [
      { en: 'rice', tr: 'pirinç', emoji: '🍚' },
      { en: 'tomato', tr: 'domates', emoji: '🍅' },
      { en: 'potato', tr: 'patates', emoji: '🥔' },
      { en: 'banana', tr: 'muz', emoji: '🍌' },
      { en: 'orange', tr: 'portakal', emoji: '🍊' },
      { en: 'butter', tr: 'tereyağı', emoji: '🧈' },
      { en: 'oil', tr: 'yağ', emoji: '🫒' },
      { en: 'bottle', tr: 'şişe', emoji: '🍾' },
      { en: 'shop', tr: 'dükkân', emoji: '🏪' },
      { en: 'some', tr: 'biraz/birkaç', emoji: '🤏' },
    ],
    sentences: [
      { en: 'I need some rice.', tr: 'Biraz pirince ihtiyacım var.' },
      { en: 'We do not have any butter.', tr: 'Hiç tereyağımız yok.', altEn: ["We don't have any butter."] },
      { en: 'Do you have any oranges?', tr: 'Hiç portakalınız var mı?', alt: ['Portakalınız var mı?'] },
      { en: 'Can I have a bottle of water?', tr: 'Bir şişe su alabilir miyim?' },
      { en: 'A kilo of tomatoes, please.', tr: 'Bir kilo domates, lütfen.' },
      { en: 'The shop is closed today.', tr: 'Dükkân bugün kapalı.' },
      { en: 'There are some bananas on the table.', tr: 'Masanın üstünde birkaç muz var.', alt: ['Masada birkaç muz var.'] },
      { en: 'I want two kilos of potatoes.', tr: 'İki kilo patates istiyorum.' },
    ],
    dialogs: [
      ['Do we have any milk?', 'Hiç sütümüz var mı?', 'No, we need some.', 'Hayır, biraz lazım.'],
      ['Anything else?', 'Başka bir şey?', 'No, that is all, thanks.', 'Hayır, hepsi bu, teşekkürler.'],
      ['How much are the bananas?', 'Muzlar ne kadar?', 'Two dollars a kilo.', 'Kilosu iki dolar.'],
      ['Where is the oil?', 'Yağ nerede?', 'It is next to the rice.', 'Pirincin yanında.'],
      ['Do you need a bag?', 'Poşet ister misiniz?', 'Yes, one bag, please.', 'Evet, bir poşet lütfen.'],
      ['Is this shop open on Sunday?', 'Bu dükkân pazar günü açık mı?', 'Yes, it opens at ten.', 'Evet, saat onda açılıyor.'],
    ],
  },
];

NEW_UNITS_A1.forEach(nu => {
  let last = -1;
  UNITS.forEach((u, i) => { if ((u.level || 'A1') === nu.level) last = i; });
  UNITS.splice(last + 1, 0, nu);
});
