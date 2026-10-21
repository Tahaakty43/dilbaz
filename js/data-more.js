// Dilbaz — ek konular ve örnekler
// 1) Mevcut ünitelere yeni cümle ve diyaloglar
// 2) Her bölümün sonuna yeni üniteler

const EXTRA = {
  'Selamlaşma': {
    sentences: [
      { en: 'Have a nice day!', tr: 'İyi günler!', alt: ['İyi bir gün geçir!'] },
      { en: 'You are welcome.', tr: 'Rica ederim.', altEn: ["You're welcome."] },
      { en: 'Sorry, I am late.', tr: 'Özür dilerim, geç kaldım.', alt: ['Pardon, geç kaldım.', 'Kusura bakma, geç kaldım.'], altEn: ["Sorry, I'm late."] },
    ],
    dialogs: [
      ['How are you?', 'Nasılsın?', 'I am fine, thanks. And you?', 'İyiyim, teşekkürler. Ya sen?'],
      ['Thank you!', 'Teşekkürler!', "You're welcome.", 'Rica ederim.'],
      ['Good morning!', 'Günaydın!', 'Morning! How are you today?', 'Günaydın! Bugün nasılsın?'],
      ['See you tomorrow!', 'Yarın görüşürüz!', 'Bye! Have a nice day.', 'Hoşça kal! İyi günler.'],
      ['Sorry, I am late.', 'Özür dilerim, geç kaldım.', 'No problem.', 'Sorun değil.'],
    ],
  },
  'Tanışma': {
    sentences: [
      { en: 'How old are you?', tr: 'Kaç yaşındasın?', alt: ['Kaç yaşındasınız?'] },
      { en: 'I am twenty years old.', tr: 'Yirmi yaşındayım.', alt: ['Ben yirmi yaşındayım.'], altEn: ["I'm twenty years old.", 'I am twenty.'] },
      { en: 'He is my teacher.', tr: 'O benim öğretmenim.', alt: ['O öğretmenim.'] },
    ],
    dialogs: [
      ['What is your name?', 'Adın ne?', 'My name is Elif.', 'Benim adım Elif.'],
      ['Where are you from?', 'Nerelisin?', 'I am from Ankara.', 'Ankaralıyım.'],
      ['Are you a student?', 'Öğrenci misin?', 'Yes, I am.', 'Evet, öyleyim.'],
      ['Nice to meet you.', 'Tanıştığımıza memnun oldum.', 'Nice to meet you too.', 'Ben de memnun oldum.'],
      ['How old are you?', 'Kaç yaşındasın?', 'I am twenty years old.', 'Yirmi yaşındayım.'],
    ],
  },
  'Aile': {
    sentences: [
      { en: 'My mother is a doctor.', tr: 'Annem bir doktor.', alt: ['Benim annem bir doktor.', 'Annem doktor.'] },
      { en: 'I have two brothers.', tr: 'İki erkek kardeşim var.', alt: ['Benim iki erkek kardeşim var.', 'İki kardeşim var.'] },
      { en: 'Her daughter is very smart.', tr: 'Onun kızı çok akıllı.', alt: ['Kızı çok akıllı.'] },
    ],
    dialogs: [
      ['Do you have any brothers or sisters?', 'Kardeşin var mı?', 'Yes, I have one sister.', 'Evet, bir kız kardeşim var.'],
      ['Who is this?', 'Bu kim?', 'This is my father.', 'Bu benim babam.'],
      ['Is your family big?', 'Ailen kalabalık mı?', 'No, it is small.', 'Hayır, küçük.'],
      ['How old is your brother?', 'Erkek kardeşin kaç yaşında?', 'He is twelve.', 'On iki yaşında.'],
    ],
  },
  'Yiyecek ve İçecek': {
    sentences: [
      { en: 'I want a glass of water.', tr: 'Bir bardak su istiyorum.', alt: ['Bir bardak su isterim.'] },
      { en: 'We eat dinner at eight.', tr: 'Akşam yemeğini sekizde yeriz.', alt: ['Sekizde akşam yemeği yeriz.', 'Saat sekizde akşam yemeği yeriz.'] },
      { en: 'He does not drink milk.', tr: 'O süt içmez.', alt: ['Süt içmez.', 'O süt içmiyor.'], altEn: ["He doesn't drink milk."] },
    ],
    dialogs: [
      ['Are you hungry?', 'Aç mısın?', 'Yes, very hungry.', 'Evet, çok açım.'],
      ['Do you want some tea?', 'Biraz çay ister misin?', 'Yes, please.', 'Evet, lütfen.'],
      ['What do you eat for breakfast?', 'Kahvaltıda ne yersin?', 'Bread, cheese and eggs.', 'Ekmek, peynir ve yumurta.'],
      ['Do you like coffee?', 'Kahve sever misin?', 'No, I prefer tea.', 'Hayır, çayı tercih ederim.'],
    ],
  },
  'Renkler ve Sayılar': {
    sentences: [
      { en: 'My favorite color is green.', tr: 'En sevdiğim renk yeşil.', altEn: ['My favourite color is green.', 'My favourite colour is green.'] },
      { en: 'There are ten students in the class.', tr: 'Sınıfta on öğrenci var.' },
      { en: 'The yellow car is mine.', tr: 'Sarı araba benim.' },
    ],
    dialogs: [
      ['What color is your car?', 'Araban ne renk?', 'It is red.', 'Kırmızı.'],
      ['How many apples do you want?', 'Kaç elma istiyorsun?', 'Three, please.', 'Üç tane, lütfen.'],
      ['What is your favorite color?', 'En sevdiğin renk ne?', 'I love blue.', 'Maviyi çok severim.'],
      ['How many cats do you have?', 'Kaç kedin var?', 'I have two cats.', 'İki kedim var.'],
    ],
  },
  'Hayvanlar': {
    sentences: [
      { en: 'My cat sleeps all day.', tr: 'Kedim bütün gün uyur.', alt: ['Kedim bütün gün uyuyor.', 'Benim kedim bütün gün uyur.'] },
      { en: 'Cows give milk.', tr: 'İnekler süt verir.' },
      { en: 'The rabbit is white.', tr: 'Tavşan beyaz.' },
    ],
    dialogs: [
      ['Do you have a pet?', 'Evcil hayvanın var mı?', 'Yes, I have a cat.', 'Evet, bir kedim var.'],
      ['What is your favorite animal?', 'En sevdiğin hayvan ne?', 'I love horses.', 'Atlara bayılırım.'],
      ['Is your dog big?', 'Köpeğin büyük mü?', 'No, it is very small.', 'Hayır, çok küçük.'],
      ['Can fish fly?', 'Balıklar uçabilir mi?', 'No, they can swim.', 'Hayır, yüzebilirler.'],
    ],
  },
  'Günlük Rutin': {
    sentences: [
      { en: 'I have breakfast at eight.', tr: 'Sekizde kahvaltı yaparım.', alt: ['Saat sekizde kahvaltı yaparım.', 'Sekizde kahvaltı ederim.'] },
      { en: 'She takes a shower every morning.', tr: 'O her sabah duş alır.', alt: ['Her sabah duş alır.'] },
      { en: 'I watch TV in the evening.', tr: 'Akşamları televizyon izlerim.', alt: ['Akşam televizyon izlerim.'] },
    ],
    dialogs: [
      ['What time do you wake up?', 'Saat kaçta uyanırsın?', "At seven o'clock.", 'Saat yedide.'],
      ['Do you work or study?', 'Çalışıyor musun, okuyor musun?', 'I am a student.', 'Öğrenciyim.'],
      ['What do you do in the evening?', 'Akşamları ne yaparsın?', 'I usually read a book.', 'Genelde kitap okurum.'],
      ['Are you tired?', 'Yorgun musun?', 'Yes, I need to sleep.', 'Evet, uyumam lazım.'],
    ],
  },
  'Şehirde': {
    sentences: [
      { en: 'The bank is next to the market.', tr: 'Banka marketin yanında.' },
      { en: 'Excuse me, where is the station?', tr: 'Affedersiniz, istasyon nerede?', alt: ['Pardon, istasyon nerede?'] },
      { en: 'Take the first street on the right.', tr: 'Sağdaki ilk sokağa gir.', alt: ['Sağdan ilk sokağa gir.', 'Sağdaki ilk sokağa dön.'] },
    ],
    dialogs: [
      ['Excuse me, where is the bank?', 'Affedersiniz, banka nerede?', 'It is next to the hospital.', 'Hastanenin yanında.'],
      ['Is it far?', 'Uzak mı?', 'No, it is very near.', 'Hayır, çok yakın.'],
      ['How can I get to the station?', 'İstasyona nasıl gidebilirim?', 'Take the bus number five.', 'Beş numaralı otobüse bin.'],
      ['Is there a market near here?', 'Buralarda market var mı?', 'Yes, on the left.', 'Evet, solda.'],
    ],
  },
  'Zaman ve Günler': {
    sentences: [
      { en: 'My birthday is in May.', tr: 'Doğum günüm mayısta.', alt: ['Benim doğum günüm mayısta.'] },
      { en: 'I am free on Sunday.', tr: 'Pazar günü boşum.', alt: ['Pazar boşum.', 'Pazar günü müsaitim.'] },
      { en: 'There are seven days in a week.', tr: 'Bir haftada yedi gün vardır.', alt: ['Bir haftada yedi gün var.', 'Haftada yedi gün var.'] },
    ],
    dialogs: [
      ['What day is it today?', 'Bugün günlerden ne?', 'It is Friday.', 'Cuma.'],
      ['When is your birthday?', 'Doğum günün ne zaman?', 'It is in May.', 'Mayısta.'],
      ['What time is it now?', 'Şimdi saat kaç?', 'It is half past two.', 'Saat iki buçuk.'],
      ['Are you free tomorrow?', 'Yarın boş musun?', 'Yes, I am free.', 'Evet, boşum.'],
    ],
  },
  'Duygular ve Hava': {
    sentences: [
      { en: 'It is very hot today.', tr: 'Bugün hava çok sıcak.', alt: ['Bugün çok sıcak.'], altEn: ["It's very hot today."] },
      { en: 'I am sad because it is raining.', tr: 'Yağmur yağdığı için üzgünüm.', alt: ['Üzgünüm çünkü yağmur yağıyor.'] },
      { en: 'Are you happy?', tr: 'Mutlu musun?', alt: ['Mutlu musunuz?'] },
    ],
    dialogs: [
      ['How do you feel today?', 'Bugün nasıl hissediyorsun?', 'I feel great!', 'Harika hissediyorum!'],
      ['What is the weather like?', 'Hava nasıl?', 'It is sunny and warm.', 'Güneşli ve ılık.'],
      ['Why are you angry?', 'Neden kızgınsın?', 'I lost my keys.', 'Anahtarlarımı kaybettim.'],
      ['Is it cold outside?', 'Dışarısı soğuk mu?', 'Yes, take your coat.', 'Evet, montunu al.'],
    ],
  },
  'Alışveriş': {
    sentences: [
      { en: 'Where is the fitting room?', tr: 'Deneme kabini nerede?', alt: ['Soyunma kabini nerede?'] },
      { en: 'Do you have this in blue?', tr: 'Bunun mavisi var mı?', alt: ['Bunun mavi rengi var mı?'] },
      { en: 'Can I get a discount?', tr: 'İndirim yapabilir misiniz?', alt: ['İndirim alabilir miyim?'] },
    ],
  },
  'Restoranda': {
    sentences: [
      { en: 'Can we sit by the window?', tr: 'Pencere kenarına oturabilir miyiz?', alt: ['Cam kenarına oturabilir miyiz?'] },
      { en: 'I would like my steak well done.', tr: 'Bifteğimi iyi pişmiş istiyorum.', alt: ['Bifteğim iyi pişmiş olsun.'] },
      { en: 'Is service included?', tr: 'Servis ücreti dahil mi?', alt: ['Servis dahil mi?'] },
    ],
  },
  'Seyahat': {
    sentences: [
      { en: 'I would like to check in, please.', tr: 'Giriş yapmak istiyorum, lütfen.', alt: ['Check-in yapmak istiyorum, lütfen.'] },
      { en: 'My luggage is lost.', tr: 'Bagajım kayboldu.', alt: ['Valizim kayboldu.'] },
      { en: 'Can you call a taxi for me?', tr: 'Benim için bir taksi çağırabilir misiniz?', alt: ['Bana bir taksi çağırabilir misiniz?', 'Benim için taksi çağırır mısınız?'] },
    ],
  },
  'Geçmişte Ne Yaptın?': {
    sentences: [
      { en: 'We had a great time at the party.', tr: 'Partide çok eğlendik.', alt: ['Partide harika vakit geçirdik.'] },
      { en: 'I did not sleep well last night.', tr: 'Dün gece iyi uyumadım.', alt: ['Dün gece iyi uyuyamadım.'], altEn: ["I didn't sleep well last night."] },
      { en: 'Where were you yesterday?', tr: 'Dün neredeydin?', alt: ['Dün neredeydiniz?'] },
    ],
  },
  'Doktorda': {
    sentences: [
      { en: 'I have a pain in my back.', tr: 'Sırtımda bir ağrı var.', alt: ['Sırtım ağrıyor.'] },
      { en: 'Do I need a prescription?', tr: 'Reçeteye ihtiyacım var mı?', alt: ['Reçete gerekiyor mu?'] },
      { en: 'Drink a lot of water and rest.', tr: 'Bol su iç ve dinlen.', alt: ['Bol bol su iç ve dinlen.', 'Bol su için ve dinlenin.'] },
    ],
  },
  'Hobiler': {
    sentences: [
      { en: 'I am learning to play the piano.', tr: 'Piyano çalmayı öğreniyorum.' },
      { en: 'Reading is my favourite hobby.', tr: 'Okumak en sevdiğim hobi.', alt: ['Kitap okumak en sevdiğim hobi.'], altEn: ['Reading is my favorite hobby.'] },
      { en: 'We go camping every summer.', tr: 'Her yaz kampa gideriz.', alt: ['Her yaz kampa gidiyoruz.'] },
    ],
  },
  'Gelecek Planları': {
    sentences: [
      { en: 'I think it will be sunny tomorrow.', tr: 'Sanırım yarın hava güneşli olacak.', alt: ['Bence yarın hava güneşli olacak.', 'Sanırım yarın güneşli olacak.'] },
      { en: 'They are getting married next year.', tr: 'Gelecek yıl evleniyorlar.', alt: ['Seneye evleniyorlar.', 'Önümüzdeki yıl evlenecekler.'] },
      { en: 'I am going to start a new job.', tr: 'Yeni bir işe başlayacağım.' },
    ],
  },
  'İş Hayatı': {
    sentences: [
      { en: 'Could we move the meeting to Thursday?', tr: 'Toplantıyı perşembeye alabilir miyiz?', alt: ['Toplantıyı perşembeye kaydırabilir miyiz?'] },
      { en: 'I am sorry, I missed the deadline.', tr: 'Üzgünüm, teslim tarihini kaçırdım.', alt: ['Özür dilerim, son teslim tarihini kaçırdım.'] },
      { en: 'My colleagues are very helpful.', tr: 'İş arkadaşlarım çok yardımsever.' },
    ],
  },
  'Telefonda': {
    sentences: [
      { en: 'Who is speaking, please?', tr: 'Kiminle görüşüyorum, lütfen?', alt: ['Kiminle görüşüyorum?'] },
      { en: 'I will text you the address.', tr: 'Adresi sana mesaj atacağım.', alt: ['Adresi sana mesajla göndereceğim.'] },
      { en: 'My phone is on silent.', tr: 'Telefonum sessizde.' },
    ],
  },
  'Fikrini Söyle': {
    sentences: [
      { en: 'I see what you mean, but I disagree.', tr: 'Ne demek istediğini anlıyorum ama katılmıyorum.' },
      { en: 'It depends on the situation.', tr: 'Duruma bağlı.', alt: ['Bu duruma bağlı.'] },
      { en: 'You are absolutely right.', tr: 'Kesinlikle haklısın.', alt: ['Tamamen haklısın.', 'Kesinlikle haklısınız.'], altEn: ["You're absolutely right."] },
    ],
  },
  'Rica ve Öneri': {
    sentences: [
      { en: 'Could you speak more slowly, please?', tr: 'Daha yavaş konuşabilir misiniz, lütfen?', alt: ['Daha yavaş konuşur musun, lütfen?', 'Daha yavaş konuşabilir misin, lütfen?'] },
      { en: 'Shall we meet at the café?', tr: 'Kafede buluşalım mı?' },
      { en: 'Do you mind if I sit here?', tr: 'Buraya oturmamın sakıncası var mı?', alt: ['Buraya oturabilir miyim?'] },
    ],
  },
  'Deneyimler': {
    sentences: [
      { en: 'I have been to Italy twice.', tr: "İtalya'ya iki kez gittim.", alt: ["İtalya'da iki kez bulundum.", "İtalya'ya iki defa gittim."] },
      { en: 'Have you ever met a famous person?', tr: 'Hiç ünlü biriyle tanıştın mı?' },
      { en: 'I have known him for ten years.', tr: 'Onu on yıldır tanıyorum.' },
    ],
  },
  'Sorunlar ve Şikayetler': {
    sentences: [
      { en: 'This is not what I ordered.', tr: 'Bu benim sipariş ettiğim şey değil.', alt: ['Ben bunu sipariş etmedim.', 'Bu sipariş ettiğim şey değil.'], altEn: ["This isn't what I ordered."] },
      { en: 'The internet in my room does not work.', tr: 'Odamdaki internet çalışmıyor.', altEn: ["The internet in my room doesn't work."] },
      { en: 'Could you fix it as soon as possible?', tr: 'Mümkün olan en kısa sürede tamir edebilir misiniz?', alt: ['En kısa sürede tamir edebilir misiniz?'] },
    ],
  },
  'Sohbet': {
    sentences: [
      { en: 'How was your day?', tr: 'Günün nasıl geçti?', alt: ['Günün nasıldı?'] },
      { en: "Let's keep in touch.", tr: 'İletişimde kalalım.', alt: ['İletişimi koparmayalım.', 'Görüşmeye devam edelim.'] },
      { en: 'I have heard a lot about you.', tr: 'Senin hakkında çok şey duydum.', alt: ['Hakkında çok şey duydum.', 'Sizin hakkınızda çok şey duydum.'] },
    ],
  },
  'Hayaller ve Şartlar': {
    sentences: [
      { en: 'If I had more time, I would learn to dance.', tr: 'Daha fazla zamanım olsaydı dans etmeyi öğrenirdim.', alt: ['Daha çok zamanım olsaydı dans etmeyi öğrenirdim.', 'Daha fazla zamanım olsa dans etmeyi öğrenirdim.'] },
      { en: 'Unless you hurry, you will miss the bus.', tr: 'Acele etmezsen otobüsü kaçıracaksın.', alt: ['Acele etmezsen otobüsü kaçırırsın.'] },
      { en: 'I wish I lived near the sea.', tr: 'Keşke deniz kenarında yaşasam.', alt: ['Keşke denize yakın yaşasam.'] },
    ],
  },
};

Object.entries(EXTRA).forEach(([title, add]) => {
  const u = UNITS.find(x => x.title === title);
  if (!u) return;
  u.sentences.push(...(add.sentences || []));
  u.dialogs = (u.dialogs || []).concat(add.dialogs || []);
});

const NEW_UNITS = [
  // ---------------- A1 ----------------
  {
    level: 'A1', title: 'Evim', desc: 'Odaları ve eşyaları tanı, evini anlat.', icon: '🏡', color: '#E67E22',
    tip: `
      <p>Bir şeyin var olduğunu söylemek için <b>There is</b> (tekil) / <b>There are</b> (çoğul): <i>There is a sofa. There are two bedrooms.</i></p>
      <p>Yer edatları: <b>in</b> (içinde), <b>on</b> (üstünde), <b>under</b> (altında), <b>next to</b> (yanında).</p>`,
    words: [
      { en: 'kitchen', tr: 'mutfak', emoji: '🍳' },
      { en: 'bedroom', tr: 'yatak odası', emoji: '🛏️' },
      { en: 'bathroom', tr: 'banyo', emoji: '🛁' },
      { en: 'door', tr: 'kapı', emoji: '🚪' },
      { en: 'window', tr: 'pencere', emoji: '🪟' },
      { en: 'chair', tr: 'sandalye', emoji: '🪑' },
      { en: 'bed', tr: 'yatak', emoji: '🛌' },
      { en: 'sofa', tr: 'kanepe/koltuk', emoji: '🛋️' },
      { en: 'lamp', tr: 'lamba', emoji: '💡' },
      { en: 'garden', tr: 'bahçe', emoji: '🌳' },
    ],
    sentences: [
      { en: 'There is a sofa in the living room.', tr: 'Oturma odasında bir kanepe var.', alt: ['Salonda bir kanepe var.', 'Oturma odasında bir koltuk var.'] },
      { en: 'The kitchen is small.', tr: 'Mutfak küçük.' },
      { en: 'There are two bedrooms.', tr: 'İki yatak odası var.' },
      { en: 'The lamp is on the table.', tr: 'Lamba masanın üstünde.', alt: ['Lamba masada.'] },
      { en: 'The cat is under the bed.', tr: 'Kedi yatağın altında.' },
      { en: 'Please close the window.', tr: 'Lütfen pencereyi kapat.', alt: ['Pencereyi kapat, lütfen.', 'Lütfen pencereyi kapatın.'] },
      { en: 'We have a big garden.', tr: 'Büyük bir bahçemiz var.', alt: ['Bizim büyük bir bahçemiz var.'] },
      { en: 'Where is the bathroom?', tr: 'Banyo nerede?', alt: ['Tuvalet nerede?'] },
      { en: 'The chair is next to the door.', tr: 'Sandalye kapının yanında.' },
    ],
    dialogs: [
      ['Where is the bathroom?', 'Banyo nerede?', 'It is next to the kitchen.', 'Mutfağın yanında.'],
      ['How many rooms are there?', 'Kaç oda var?', 'There are three rooms.', 'Üç oda var.'],
      ['Do you live in a house?', 'Müstakil bir evde mi yaşıyorsun?', 'No, I live in a flat.', 'Hayır, bir dairede yaşıyorum.'],
      ['Is your house big?', 'Evin büyük mü?', 'No, but it has a garden.', 'Hayır ama bahçesi var.'],
      ['Can I open the window?', 'Pencereyi açabilir miyim?', 'Sure, it is hot in here.', 'Tabii, burası sıcak.'],
    ],
  },
  {
    level: 'A1', title: 'Vücudumuz', desc: 'Vücudun bölümlerini öğren, birini tarif et.', icon: '🖐️', color: '#FD79A8',
    tip: `
      <p>Bazı kelimelerin çoğulu düzensizdir: <b>foot → feet</b>, <b>tooth → teeth</b>.</p>
      <p>Birini tarif ederken <b>has</b> kullanılır: <i>She <b>has</b> long hair. He <b>has</b> blue eyes.</i></p>
      <p><b>hair</b> (saç) genellikle tekil kullanılır: <i>Her hair <b>is</b> long.</i></p>`,
    words: [
      { en: 'head', tr: 'baş/kafa', emoji: '🙆' },
      { en: 'eye', tr: 'göz', emoji: '👁️' },
      { en: 'ear', tr: 'kulak', emoji: '👂' },
      { en: 'nose', tr: 'burun', emoji: '👃' },
      { en: 'mouth', tr: 'ağız', emoji: '👄' },
      { en: 'hand', tr: 'el', emoji: '✋' },
      { en: 'arm', tr: 'kol', emoji: '💪' },
      { en: 'leg', tr: 'bacak', emoji: '🦵' },
      { en: 'foot', tr: 'ayak', emoji: '🦶' },
      { en: 'hair', tr: 'saç', emoji: '💇' },
    ],
    sentences: [
      { en: 'I have two hands.', tr: 'İki elim var.', alt: ['Benim iki elim var.'] },
      { en: 'She has long hair.', tr: 'Onun uzun saçları var.', alt: ['Uzun saçları var.', 'Onun saçı uzun.', 'Saçları uzun.'] },
      { en: 'My eyes are brown.', tr: 'Gözlerim kahverengi.', alt: ['Benim gözlerim kahverengi.'] },
      { en: 'Wash your hands.', tr: 'Ellerini yıka.', alt: ['Ellerinizi yıkayın.'] },
      { en: 'My leg hurts.', tr: 'Bacağım ağrıyor.', alt: ['Bacağım acıyor.'] },
      { en: 'The baby has small feet.', tr: 'Bebeğin küçük ayakları var.', alt: ['Bebeğin ayakları küçük.'] },
      { en: 'Open your mouth, please.', tr: 'Ağzını aç, lütfen.', alt: ['Lütfen ağzını aç.', 'Ağzınızı açın, lütfen.'] },
      { en: 'He has blue eyes.', tr: 'Onun mavi gözleri var.', alt: ['Mavi gözleri var.', 'Onun gözleri mavi.'] },
    ],
    dialogs: [
      ['What color are your eyes?', 'Gözlerin ne renk?', 'They are green.', 'Yeşil.'],
      ['What happened to your arm?', 'Koluna ne oldu?', 'I fell down.', 'Düştüm.'],
      ['Does your head hurt?', 'Başın ağrıyor mu?', 'Yes, I need some medicine.', 'Evet, biraz ilaca ihtiyacım var.'],
      ['Is your hair long?', 'Saçın uzun mu?', 'No, it is short.', 'Hayır, kısa.'],
    ],
  },
  {
    level: 'A1', title: 'Giysiler', desc: 'Kıyafetleri öğren, ne giydiğini söyle.', icon: '👕', color: '#00CEC9',
    tip: `
      <p>Şu an üzerinde olan kıyafetler için şimdiki zaman: <i>She <b>is wearing</b> a red dress.</i></p>
      <p><b>jeans, glasses, socks</b> gibi çift parçalı şeyler çoğul kullanılır: <i>These jeans <b>are</b> small.</i></p>
      <p>Gözlük için <b>wear</b> denir: <i>He <b>wears</b> glasses.</i> (gözlük takar)</p>`,
    words: [
      { en: 'dress', tr: 'elbise', emoji: '👗' },
      { en: 'coat', tr: 'mont/palto', emoji: '🧥' },
      { en: 'hat', tr: 'şapka', emoji: '👒' },
      { en: 'jeans', tr: 'kot pantolon/kot', emoji: '👖' },
      { en: 'socks', tr: 'çorap/çoraplar', emoji: '🧦' },
      { en: 'jacket', tr: 'ceket', emoji: '🥼' },
      { en: 'scarf', tr: 'atkı/eşarp', emoji: '🧣' },
      { en: 'bag', tr: 'çanta', emoji: '👜' },
      { en: 'wear', tr: 'giymek/takmak', emoji: '👚' },
      { en: 'glasses', tr: 'gözlük', emoji: '👓' },
    ],
    sentences: [
      { en: 'She is wearing a red dress.', tr: 'O kırmızı bir elbise giyiyor.', alt: ['Kırmızı bir elbise giyiyor.', 'O kırmızı elbise giyiyor.'] },
      { en: 'It is cold, wear your coat.', tr: 'Hava soğuk, montunu giy.', alt: ['Soğuk, montunu giy.', 'Hava soğuk, paltonu giy.'] },
      { en: 'I need new socks.', tr: 'Yeni çoraplara ihtiyacım var.', alt: ['Yeni çorap lazım.', 'Yeni çoraplar lazım.'] },
      { en: 'These jeans are too small.', tr: 'Bu kot pantolon çok küçük.', alt: ['Bu kot çok küçük.', 'Bu kot pantolon fazla küçük.'] },
      { en: 'My father wears glasses.', tr: 'Babam gözlük takar.', alt: ['Benim babam gözlük takar.', 'Babam gözlük kullanır.'] },
      { en: 'Where is my black hat?', tr: 'Siyah şapkam nerede?' },
      { en: 'I like your scarf.', tr: 'Atkını beğendim.', alt: ['Atkını sevdim.', 'Atkın çok güzel.'] },
      { en: 'This bag is very nice.', tr: 'Bu çanta çok güzel.' },
    ],
    dialogs: [
      ['What are you wearing to the party?', 'Partiye ne giyiyorsun?', 'A black dress.', 'Siyah bir elbise.'],
      ['Is this your jacket?', 'Bu senin ceketin mi?', 'No, mine is blue.', 'Hayır, benimki mavi.'],
      ['Do I need a coat today?', 'Bugün monta ihtiyacım var mı?', 'Yes, it is very cold.', 'Evet, hava çok soğuk.'],
      ['Do you like my new hat?', 'Yeni şapkamı beğendin mi?', 'Yes, it looks great!', 'Evet, harika görünüyor!'],
    ],
  },
  {
    level: 'A1', title: 'Okulda', desc: 'Sınıfta kullanılan kelime ve kalıpları öğren.', icon: '✏️', color: '#6AB04C',
    tip: `
      <p>Sınıfta sık duyulan emir cümleleri: <i><b>Open</b> your books. <b>Listen</b>. <b>Write</b> your name.</i></p>
      <p>İzin istemek için <b>Can I…?</b> → <i>Can I ask a question?</i></p>
      <p>Bir kelimenin anlamını sormak: <i>What does this word <b>mean</b>?</i></p>`,
    words: [
      { en: 'class', tr: 'sınıf', emoji: '🧑‍🏫' },
      { en: 'lesson', tr: 'ders', emoji: '📚' },
      { en: 'homework', tr: 'ödev', emoji: '📝' },
      { en: 'pen', tr: 'kalem/tükenmez kalem', emoji: '🖊️' },
      { en: 'pencil', tr: 'kurşun kalem', emoji: '✏️' },
      { en: 'notebook', tr: 'defter', emoji: '📓' },
      { en: 'desk', tr: 'sıra/çalışma masası', emoji: '🗄️' },
      { en: 'exam', tr: 'sınav', emoji: '📄' },
      { en: 'question', tr: 'soru', emoji: '❓' },
      { en: 'answer', tr: 'cevap/cevaplamak', emoji: '💬' },
    ],
    sentences: [
      { en: 'Open your books, please.', tr: 'Kitaplarınızı açın, lütfen.', alt: ['Lütfen kitaplarınızı açın.', 'Kitaplarını aç, lütfen.'] },
      { en: 'I have a lot of homework.', tr: 'Çok ödevim var.', alt: ['Çok fazla ödevim var.'] },
      { en: 'Can I ask a question?', tr: 'Bir soru sorabilir miyim?', alt: ['Soru sorabilir miyim?'] },
      { en: 'The exam is on Monday.', tr: 'Sınav pazartesi.', alt: ['Sınav pazartesi günü.'] },
      { en: 'I need a pencil.', tr: 'Bir kurşun kaleme ihtiyacım var.', alt: ['Kurşun kaleme ihtiyacım var.', 'Bir kurşun kalem lazım.'] },
      { en: 'What is the answer?', tr: 'Cevap ne?', alt: ['Cevap nedir?'] },
      { en: 'Our teacher is very kind.', tr: 'Öğretmenimiz çok nazik.', alt: ['Bizim öğretmenimiz çok nazik.'] },
      { en: 'Please write your name.', tr: 'Lütfen adını yaz.', alt: ['Lütfen adınızı yazın.', 'Adını yaz, lütfen.'] },
    ],
    dialogs: [
      ['Can I borrow a pen?', 'Bir kalem ödünç alabilir miyim?', 'Sure, here you are.', 'Tabii, buyur.'],
      ['Did you do your homework?', 'Ödevini yaptın mı?', 'Yes, it was easy.', 'Evet, kolaydı.'],
      ['When is the exam?', 'Sınav ne zaman?', 'It is on Friday.', 'Cuma günü.'],
      ['What does this word mean?', 'Bu kelime ne anlama geliyor?', 'It means happy.', '"Mutlu" demek.'],
    ],
  },
  // ---------------- A2 ----------------
  {
    level: 'A2', title: 'Ulaşım ve Biletler', desc: 'Bilet al, peron sor, toplu taşımayı kullan.', icon: '🚉', color: '#4834D4',
    tip: `
      <p>Bilet alırken: <b>single</b> (tek yön) / <b>return</b> (gidiş-dönüş) ticket.</p>
      <p>Toplu taşıma saatleri için geniş zaman kullanılır: <i>The train <b>leaves</b> at nine.</i></p>
      <p>Süre sormak: <i>How long <b>does</b> the journey <b>take</b>?</i></p>`,
    words: [
      { en: 'station', tr: 'istasyon/gar', emoji: '🚉' },
      { en: 'platform', tr: 'peron', emoji: '🛤️' },
      { en: 'taxi', tr: 'taksi', emoji: '🚕' },
      { en: 'subway', tr: 'metro', emoji: '🚇' },
      { en: 'driver', tr: 'şoför/sürücü', emoji: '🧑‍✈️' },
      { en: 'stop', tr: 'durak/durmak', emoji: '🚏' },
      { en: 'fare', tr: 'ücret/bilet ücreti', emoji: '💲' },
      { en: 'seat', tr: 'koltuk/yer', emoji: '💺' },
      { en: 'map', tr: 'harita', emoji: '🗺️' },
      { en: 'arrive', tr: 'varmak/gelmek', emoji: '🏁' },
    ],
    sentences: [
      { en: 'Which platform does the train leave from?', tr: 'Tren hangi perondan kalkıyor?', alt: ['Tren hangi perondan kalkar?'] },
      { en: 'A return ticket to Izmir, please.', tr: "İzmir'e gidiş dönüş bir bilet, lütfen.", alt: ["İzmir'e gidiş dönüş bilet, lütfen."] },
      { en: 'How long does the journey take?', tr: 'Yolculuk ne kadar sürüyor?', alt: ['Yolculuk ne kadar sürer?'] },
      { en: 'Is this seat free?', tr: 'Bu koltuk boş mu?', alt: ['Bu yer boş mu?'] },
      { en: 'Where is the nearest bus stop?', tr: 'En yakın otobüs durağı nerede?' },
      { en: 'The taxi is waiting outside.', tr: 'Taksi dışarıda bekliyor.' },
      { en: 'You need to change trains at the next station.', tr: 'Bir sonraki istasyonda tren değiştirmen gerekiyor.', alt: ['Sonraki istasyonda tren değiştirmelisin.', 'Bir sonraki istasyonda aktarma yapman gerekiyor.'] },
      { en: 'What time does the bus arrive?', tr: 'Otobüs saat kaçta geliyor?', alt: ['Otobüs saat kaçta varıyor?', 'Otobüs kaçta gelir?'] },
    ],
    dialogs: [
      ['Where would you like to go?', 'Nereye gitmek istersiniz?', 'To the airport, please.', 'Havalimanına, lütfen.'],
      ['Single or return?', 'Tek yön mü, gidiş dönüş mü?', 'Return, please.', 'Gidiş dönüş, lütfen.'],
      ['Does this bus go to the city centre?', 'Bu otobüs şehir merkezine gidiyor mu?', 'No, you need the number ten.', 'Hayır, on numaralı otobüse binmelisin.'],
      ['How much is the fare?', 'Ücret ne kadar?', 'Twenty lira.', 'Yirmi lira.'],
      ['Is this seat taken?', 'Bu koltuk dolu mu?', 'No, please sit down.', 'Hayır, lütfen oturun.'],
      ['When does the next train leave?', 'Bir sonraki tren ne zaman kalkıyor?', 'In fifteen minutes.', 'On beş dakika sonra.'],
    ],
  },
  {
    level: 'A2', title: 'Ev İşleri ve Kiralama', desc: 'Ev işlerini paylaş, ev kirala.', icon: '🧹', color: '#B8860B',
    tip: `
      <p>Ev işlerinde <b>do</b> ve <b>make</b> kalıplarına dikkat: <i><b>do</b> the dishes, <b>do</b> the laundry, <b>make</b> the bed.</i></p>
      <p>Zorunluluk için <b>have to</b>: <i>I <b>have to</b> clean my room.</i> (Odamı temizlemem gerekiyor.)</p>`,
    words: [
      { en: 'clean', tr: 'temizlemek/temiz', emoji: '🧽' },
      { en: 'cook', tr: 'yemek pişirmek/pişirmek', emoji: '👨‍🍳' },
      { en: 'wash', tr: 'yıkamak', emoji: '🧼' },
      { en: 'rent', tr: 'kira/kiralamak', emoji: '🔑' },
      { en: 'flat', tr: 'daire', emoji: '🏢' },
      { en: 'furniture', tr: 'mobilya', emoji: '🛋️' },
      { en: 'dishes', tr: 'bulaşık/tabaklar', emoji: '🍽️' },
      { en: 'laundry', tr: 'çamaşır', emoji: '🧺' },
      { en: 'tidy', tr: 'toplamak/düzenli', emoji: '🗂️' },
      { en: 'repair', tr: 'tamir etmek/onarmak', emoji: '🔧' },
    ],
    sentences: [
      { en: 'I have to clean my room.', tr: 'Odamı temizlemem gerekiyor.', alt: ['Odamı temizlemem lazım.', 'Odamı temizlemek zorundayım.'] },
      { en: 'Who is going to do the dishes?', tr: 'Bulaşıkları kim yıkayacak?' },
      { en: 'My mother cooks very well.', tr: 'Annem çok iyi yemek yapar.', alt: ['Annem çok güzel yemek yapar.', 'Annem çok iyi yemek pişirir.'] },
      { en: 'The rent is too high.', tr: 'Kira çok yüksek.', alt: ['Kira fazla yüksek.'] },
      { en: 'I am looking for a flat with two bedrooms.', tr: 'İki yatak odalı bir daire arıyorum.' },
      { en: 'Can you help me tidy the living room?', tr: 'Salonu toplamama yardım edebilir misin?', alt: ['Oturma odasını toplamama yardım edebilir misin?'] },
      { en: 'The washing machine is broken.', tr: 'Çamaşır makinesi bozuk.', alt: ['Çamaşır makinesi bozuldu.'] },
      { en: 'We need someone to repair the door.', tr: 'Kapıyı tamir edecek birine ihtiyacımız var.', alt: ['Kapıyı tamir edecek biri lazım.'] },
    ],
    dialogs: [
      ['Is the flat furnished?', 'Daire eşyalı mı?', 'Yes, it has all the furniture.', 'Evet, bütün mobilyaları var.'],
      ['How much is the rent?', 'Kira ne kadar?', 'It is five hundred dollars a month.', 'Aylık beş yüz dolar.'],
      ['Can you do the laundry today?', 'Bugün çamaşırları yıkayabilir misin?', 'Sure, after lunch.', 'Tabii, öğle yemeğinden sonra.'],
      ['What is for dinner?', 'Akşam yemeğinde ne var?', 'I am cooking pasta.', 'Makarna pişiriyorum.'],
      ['Is the kitchen clean?', 'Mutfak temiz mi?', 'Not yet, I am washing the dishes.', 'Henüz değil, bulaşıkları yıkıyorum.'],
      ['When can I move in?', 'Ne zaman taşınabilirim?', 'From the first of next month.', 'Gelecek ayın birinden itibaren.'],
    ],
  },
  {
    level: 'A2', title: 'Teknoloji', desc: 'Telefon, internet ve uygulamalar hakkında konuş.', icon: '💻', color: '#0652DD',
    tip: `
      <p>Teknolojide sık kullanılan fiiller: <b>download</b> (indirmek), <b>send</b> (göndermek), <b>charge</b> (şarj etmek), <b>log in</b> (giriş yapmak).</p>
      <p>"Bozuk / çalışmıyor" demek için: <i>My computer <b>isn't working</b>.</i></p>`,
    words: [
      { en: 'phone', tr: 'telefon', emoji: '☎️' },
      { en: 'computer', tr: 'bilgisayar', emoji: '💻' },
      { en: 'internet', tr: 'internet', emoji: '🌐' },
      { en: 'password', tr: 'şifre/parola', emoji: '🔐' },
      { en: 'download', tr: 'indirmek', emoji: '⬇️' },
      { en: 'battery', tr: 'pil/batarya/şarj', emoji: '🔋' },
      { en: 'screen', tr: 'ekran', emoji: '🖥️' },
      { en: 'app', tr: 'uygulama', emoji: '📲' },
      { en: 'charger', tr: 'şarj aleti/şarj cihazı', emoji: '🔌' },
      { en: 'send', tr: 'göndermek/yollamak', emoji: '📨' },
    ],
    sentences: [
      { en: 'My phone battery is dead.', tr: 'Telefonumun şarjı bitti.', alt: ['Telefonumun pili bitti.'] },
      { en: 'What is the Wi-Fi password?', tr: 'Wi-Fi şifresi ne?', alt: ['İnternet şifresi ne?', 'Wi-Fi şifresi nedir?'], altEn: ["What's the Wi-Fi password?"] },
      { en: 'Can I borrow your charger?', tr: 'Şarj aletini ödünç alabilir miyim?', alt: ['Şarj cihazını ödünç alabilir miyim?', 'Şarj aletini alabilir miyim?'] },
      { en: 'I will send you the photos.', tr: 'Sana fotoğrafları göndereceğim.', alt: ['Fotoğrafları sana göndereceğim.', 'Fotoğrafları sana atacağım.'] },
      { en: 'You should download this app.', tr: 'Bu uygulamayı indirmelisin.' },
      { en: 'The internet is very slow today.', tr: 'İnternet bugün çok yavaş.', alt: ['Bugün internet çok yavaş.'] },
      { en: 'My computer is not working.', tr: 'Bilgisayarım çalışmıyor.', altEn: ["My computer isn't working."] },
      { en: 'I forgot my password.', tr: 'Şifremi unuttum.', alt: ['Parolamı unuttum.'] },
    ],
    dialogs: [
      ['Can I use your Wi-Fi?', "Wi-Fi'ınızı kullanabilir miyim?", 'Of course, the password is on the card.', 'Tabii, şifre kartın üzerinde.'],
      ['Why are you not answering your phone?', 'Neden telefonunu açmıyorsun?', 'Sorry, my battery died.', 'Üzgünüm, şarjım bitti.'],
      ['Did you get my message?', 'Mesajımı aldın mı?', 'Yes, I will answer soon.', 'Evet, birazdan cevap vereceğim.'],
      ['Do you know a good app for learning English?', 'İngilizce öğrenmek için iyi bir uygulama biliyor musun?', 'Yes, I use one every day.', 'Evet, her gün birini kullanıyorum.'],
      ['Is your computer new?', 'Bilgisayarın yeni mi?', 'No, it is very old and slow.', 'Hayır, çok eski ve yavaş.'],
      ['Can you send me the file?', 'Dosyayı bana gönderebilir misin?', 'I sent it an hour ago.', 'Bir saat önce gönderdim.'],
    ],
  },
  {
    level: 'A2', title: 'Bankada ve Postanede', desc: 'Hesap aç, para bozdur, kargo gönder.', icon: '📮', color: '#218C74',
    tip: `
      <p>Bankada kibar istek: <i><b>I'd like to</b> open an account.</i></p>
      <p><b>exchange</b> (bozdurmak), <b>withdraw</b> (çekmek), <b>deposit</b> (yatırmak).</p>
      <p>Bir yere bir şey göndermek: <i>send a parcel <b>to</b> Germany</i>.</p>`,
    words: [
      { en: 'account', tr: 'banka hesabı/hesap', emoji: '🏦' },
      { en: 'coin', tr: 'madeni para/bozuk para', emoji: '🪙' },
      { en: 'withdraw', tr: 'para çekmek/çekmek', emoji: '🏧' },
      { en: 'exchange', tr: 'bozdurmak/değiştirmek', emoji: '💱' },
      { en: 'parcel', tr: 'paket/koli', emoji: '📦' },
      { en: 'stamp', tr: 'pul', emoji: '📮' },
      { en: 'letter', tr: 'mektup', emoji: '✉️' },
      { en: 'address', tr: 'adres', emoji: '📫' },
      { en: 'form', tr: 'form', emoji: '📋' },
      { en: 'sign', tr: 'imzalamak/imza atmak', emoji: '🖋️' },
    ],
    sentences: [
      { en: 'I would like to open a bank account.', tr: 'Banka hesabı açmak istiyorum.', alt: ['Bir banka hesabı açmak istiyorum.'] },
      { en: 'Where can I exchange money?', tr: 'Nerede para bozdurabilirim?', alt: ['Nerede döviz bozdurabilirim?', 'Parayı nerede değiştirebilirim?'] },
      { en: 'The cash machine is not working.', tr: 'Bankamatik çalışmıyor.', alt: ['ATM çalışmıyor.'], altEn: ["The cash machine isn't working."] },
      { en: 'I want to send this parcel to Germany.', tr: "Bu paketi Almanya'ya göndermek istiyorum.", alt: ["Bu koliyi Almanya'ya göndermek istiyorum."] },
      { en: 'How much is a stamp?', tr: 'Bir pul ne kadar?', alt: ['Pul ne kadar?'] },
      { en: 'Please sign here.', tr: 'Lütfen buraya imzalayın.', alt: ['Lütfen burayı imzalayın.', 'Buraya imza atın, lütfen.'] },
      { en: 'Can you write your address on the form?', tr: 'Adresinizi forma yazabilir misiniz?', alt: ['Adresini forma yazabilir misin?'] },
      { en: 'I need to withdraw some money.', tr: 'Biraz para çekmem gerekiyor.', alt: ['Biraz para çekmem lazım.'] },
    ],
    dialogs: [
      ['How can I help you today?', 'Bugün size nasıl yardımcı olabilirim?', 'I would like to change dollars to lira.', 'Dolarları liraya çevirmek istiyorum.'],
      ['Do you have an ID card?', 'Kimlik kartınız var mı?', 'Yes, and my passport too.', 'Evet, pasaportum da var.'],
      ['How would you like to send it?', 'Nasıl göndermek istersiniz?', 'By express mail, please.', 'Ekspres postayla, lütfen.'],
      ['What is in the parcel?', 'Pakette ne var?', 'Just some books.', 'Sadece birkaç kitap.'],
      ['When will it arrive?', 'Ne zaman ulaşır?', 'In three or four days.', 'Üç dört gün içinde.'],
      ['Would you like small notes?', 'Küçük banknot ister misiniz?', 'Yes, please. Tens and twenties.', 'Evet, lütfen. Onluk ve yirmilik.'],
    ],
  },
  // ---------------- B1 ----------------
  {
    level: 'B1', title: 'İş Görüşmesi', desc: 'Kendini tanıt, güçlü yönlerini anlat, soru sor.', icon: '🤝', color: '#2C3A47',
    tip: `
      <p>İş görüşmesinde deneyimleri <b>Present Perfect</b> ile anlat: <i>I <b>have worked</b> in sales for five years.</i></p>
      <p>Yeteneklerini anlatmak: <i>I'm <b>good at</b> solving problems. I'm <b>responsible for</b> the team.</i></p>
      <p>Resmi ve kibar ol: <i>I <b>would like to</b> know more about the position.</i></p>`,
    words: [
      { en: 'interview', tr: 'mülakat/görüşme', emoji: '🎙️' },
      { en: 'skill', tr: 'beceri/yetenek', emoji: '🛠️' },
      { en: 'apply', tr: 'başvurmak', emoji: '📝' },
      { en: 'position', tr: 'pozisyon/kadro', emoji: '🪪' },
      { en: 'strength', tr: 'güçlü yön/güç', emoji: '🏋️' },
      { en: 'weakness', tr: 'zayıf yön/zayıflık', emoji: '🩹' },
      { en: 'team', tr: 'ekip/takım', emoji: '👥' },
      { en: 'responsible', tr: 'sorumlu', emoji: '🧭' },
      { en: 'hire', tr: 'işe almak', emoji: '🤝' },
      { en: 'career', tr: 'kariyer', emoji: '📈' },
    ],
    sentences: [
      { en: 'I am applying for the manager position.', tr: 'Müdür pozisyonu için başvuruyorum.', alt: ['Yönetici pozisyonuna başvuruyorum.', 'Müdürlük pozisyonuna başvuruyorum.'] },
      { en: 'Tell me about yourself.', tr: 'Bana kendinden bahset.', alt: ['Bana kendinizden bahsedin.', 'Kendinden bahset.'] },
      { en: 'I have worked in a team for five years.', tr: 'Beş yıldır bir ekipte çalışıyorum.', alt: ['Beş yıl bir ekipte çalıştım.'] },
      { en: 'My greatest strength is solving problems.', tr: 'En güçlü yönüm sorun çözmek.', alt: ['En büyük gücüm problem çözmek.', 'En güçlü yanım sorun çözmektir.'] },
      { en: 'Why do you want to work here?', tr: 'Neden burada çalışmak istiyorsun?', alt: ['Neden burada çalışmak istiyorsunuz?'] },
      { en: 'I am responsible for the sales team.', tr: 'Satış ekibinden sorumluyum.' },
      { en: 'Where do you see yourself in five years?', tr: 'Kendini beş yıl sonra nerede görüyorsun?', alt: ['Beş yıl sonra kendinizi nerede görüyorsunuz?', 'Kendinizi beş yıl sonra nerede görüyorsunuz?'] },
      { en: 'We would like to hire you.', tr: 'Sizi işe almak istiyoruz.', alt: ['Seni işe almak istiyoruz.'] },
    ],
    dialogs: [
      ['What are your strengths?', 'Güçlü yönleriniz neler?', 'I am organised and I learn quickly.', 'Düzenliyim ve hızlı öğrenirim.'],
      ['What is your biggest weakness?', 'En büyük zayıf yönünüz nedir?', 'Sometimes I work too much.', 'Bazen çok fazla çalışırım.'],
      ['Why did you leave your last job?', 'Son işinizden neden ayrıldınız?', 'I wanted a new experience.', 'Yeni bir deneyim istedim.'],
      ['Do you have any questions for us?', 'Bize sormak istediğiniz bir şey var mı?', 'Yes, when can I start?', 'Evet, ne zaman başlayabilirim?'],
      ['What salary do you expect?', 'Ne kadar maaş bekliyorsunuz?', 'Something similar to my current salary.', 'Şu anki maaşıma benzer bir şey.'],
      ['Can you work under pressure?', 'Baskı altında çalışabilir misiniz?', 'Yes, I am used to tight deadlines.', 'Evet, kısa teslim sürelerine alışkınım.'],
    ],
  },
  {
    level: 'B1', title: 'Doğa ve Çevre', desc: 'Çevre sorunlarını tartış, çözüm öner.', icon: '🌿', color: '#27AE60',
    tip: `
      <p>Edilgen yapı (Passive): <b>be + V3</b> → <i>Plastic <b>is recycled</b>. Forests <b>are being destroyed</b>.</i></p>
      <p>Öneri ve zorunluluk: <b>should</b> (-meli, tavsiye), <b>must</b> (-mak zorunda, güçlü zorunluluk).</p>`,
    words: [
      { en: 'environment', tr: 'çevre', emoji: '🌎' },
      { en: 'pollution', tr: 'kirlilik', emoji: '🏭' },
      { en: 'recycle', tr: 'geri dönüştürmek', emoji: '♻️' },
      { en: 'plastic', tr: 'plastik', emoji: '🧴' },
      { en: 'forest', tr: 'orman', emoji: '🌲' },
      { en: 'climate', tr: 'iklim', emoji: '🌡️' },
      { en: 'nature', tr: 'doğa', emoji: '🌿' },
      { en: 'protect', tr: 'korumak', emoji: '🛡️' },
      { en: 'waste', tr: 'atık/israf etmek', emoji: '🗑️' },
      { en: 'energy', tr: 'enerji', emoji: '🔆' },
    ],
    sentences: [
      { en: 'We should recycle plastic bottles.', tr: 'Plastik şişeleri geri dönüştürmeliyiz.' },
      { en: 'Air pollution is a big problem in cities.', tr: 'Hava kirliliği şehirlerde büyük bir sorun.', alt: ['Şehirlerde hava kirliliği büyük bir sorun.'] },
      { en: 'Turn off the lights to save energy.', tr: 'Enerji tasarrufu için ışıkları kapat.', alt: ['Enerji tasarrufu yapmak için ışıkları kapat.'] },
      { en: 'The climate is changing fast.', tr: 'İklim hızla değişiyor.', alt: ['İklim hızlı değişiyor.'] },
      { en: 'Many forests are being destroyed.', tr: 'Birçok orman yok ediliyor.', alt: ['Pek çok orman yok ediliyor.'] },
      { en: 'We must protect nature.', tr: 'Doğayı korumalıyız.', alt: ['Doğayı korumak zorundayız.'] },
      { en: 'Please do not waste water.', tr: 'Lütfen suyu israf etmeyin.', alt: ['Lütfen suyu boşa harcama.', 'Lütfen suyu israf etme.'], altEn: ["Please don't waste water."] },
      { en: 'If we use less plastic, the sea will be cleaner.', tr: 'Daha az plastik kullanırsak deniz daha temiz olur.', alt: ['Daha az plastik kullanırsak deniz daha temiz olacak.'] },
    ],
    dialogs: [
      ['Do you recycle at home?', 'Evde geri dönüşüm yapıyor musun?', 'Yes, we separate paper and plastic.', 'Evet, kağıt ve plastiği ayırıyoruz.'],
      ['What can we do to help the environment?', 'Çevreye yardım etmek için ne yapabiliriz?', 'We can use public transport more.', 'Toplu taşımayı daha çok kullanabiliriz.'],
      ['Why is the river so dirty?', 'Nehir neden bu kadar kirli?', 'Factories throw waste into it.', 'Fabrikalar içine atık atıyor.'],
      ['Do you prefer the city or nature?', 'Şehri mi doğayı mı tercih edersin?', 'Nature, definitely.', 'Kesinlikle doğayı.'],
      ['Is it going to be hot this summer?', 'Bu yaz sıcak olacak mı?', 'Probably, summers are getting hotter.', 'Muhtemelen, yazlar giderek ısınıyor.'],
      ['Should we take the car?', 'Arabayı alalım mı?', "Let's walk, it's not far.", 'Yürüyelim, uzak değil.'],
    ],
  },
  {
    level: 'B1', title: 'Kültür ve Kutlamalar', desc: 'Bayramları, gelenekleri ve özel günleri anlat.', icon: '🎊', color: '#E84118',
    tip: `
      <p>Geçmişteki alışkanlıklar için <b>used to</b>: <i>We <b>used to</b> make cakes together.</i> (Birlikte kek yapardık.)</p>
      <p>Tebrik kalıpları: <b>Congratulations on</b> your wedding! / <b>Happy</b> birthday! / <b>Happy</b> New Year!</p>`,
    words: [
      { en: 'festival', tr: 'festival/şenlik', emoji: '🎪' },
      { en: 'tradition', tr: 'gelenek', emoji: '🏮' },
      { en: 'celebrate', tr: 'kutlamak', emoji: '🎉' },
      { en: 'gift', tr: 'hediye', emoji: '🎁' },
      { en: 'wedding', tr: 'düğün', emoji: '💒' },
      { en: 'guest', tr: 'misafir/konuk', emoji: '🙋‍♀️' },
      { en: 'culture', tr: 'kültür', emoji: '🎭' },
      { en: 'custom', tr: 'adet/örf', emoji: '🧿' },
      { en: 'anniversary', tr: 'yıl dönümü', emoji: '🥂' },
      { en: 'congratulate', tr: 'tebrik etmek/kutlamak', emoji: '👏' },
    ],
    sentences: [
      { en: 'We celebrate the New Year with our family.', tr: 'Yeni yılı ailemizle kutlarız.', alt: ['Yılbaşını ailemizle kutlarız.'] },
      { en: 'It is a tradition to visit older relatives.', tr: 'Yaşlı akrabaları ziyaret etmek bir gelenektir.', alt: ['Yaşlı akrabaları ziyaret etmek gelenektir.', 'Büyükleri ziyaret etmek bir gelenektir.'] },
      { en: 'Congratulations on your wedding!', tr: 'Düğününüz kutlu olsun!', alt: ['Evliliğiniz kutlu olsun!', 'Düğününüzü tebrik ederim!'] },
      { en: 'This gift is for you.', tr: 'Bu hediye senin için.', alt: ['Bu hediye sizin için.'] },
      { en: 'There were more than two hundred guests.', tr: 'İki yüzden fazla misafir vardı.', alt: ['İki yüzden fazla konuk vardı.'] },
      { en: 'When I was a child, we used to make cakes together.', tr: 'Ben çocukken birlikte kek yapardık.', alt: ['Çocukken birlikte kek yapardık.', 'Ben çocukken beraber kek yapardık.'] },
      { en: 'Every culture has its own customs.', tr: 'Her kültürün kendi adetleri vardır.', alt: ['Her kültürün kendine özgü adetleri vardır.', 'Her kültürün kendi gelenekleri vardır.'] },
      { en: 'Today is our tenth anniversary.', tr: 'Bugün onuncu yıl dönümümüz.' },
    ],
    dialogs: [
      ['How do you celebrate Bayram?', 'Bayramı nasıl kutlarsınız?', 'We visit our grandparents and eat sweets.', 'Büyükanne ve büyükbabamızı ziyaret eder, tatlı yeriz.'],
      ['Are you coming to the wedding?', 'Düğüne geliyor musun?', "Of course, I wouldn't miss it!", 'Tabii ki, kaçırmam!'],
      ['What should I bring as a gift?', 'Hediye olarak ne getirmeliyim?', 'Flowers are always nice.', 'Çiçek her zaman güzeldir.'],
      ['I passed my exam!', 'Sınavımı geçtim!', 'Congratulations! Well done!', 'Tebrikler! Aferin!'],
      ['Is there a festival in your town?', 'Şehrinde bir festival var mı?', 'Yes, a music festival every summer.', 'Evet, her yaz bir müzik festivali var.'],
      ['What did you use to do as a child?', 'Çocukken ne yapardın?', 'I used to play in the street all day.', 'Bütün gün sokakta oynardım.'],
    ],
  },
  {
    level: 'B1', title: 'Haberler ve Olaylar', desc: 'Bir olayı anlat, haberleri konuş.', icon: '📰', color: '#535C68',
    tip: `
      <p>Olay anlatırken arka plan için <b>Past Continuous</b> (was/were + -ing), kısa ve ani olay için <b>Simple Past</b>:</p>
      <p><i>I <b>was driving</b> home when it <b>started</b> to rain.</i></p>
      <p>Hikâyeyi bağlayan kelimeler: <b>suddenly</b> (aniden), <b>then</b> (sonra), <b>luckily</b> (neyse ki).</p>`,
    words: [
      { en: 'news', tr: 'haber/haberler', emoji: '📰' },
      { en: 'accident', tr: 'kaza', emoji: '🚑' },
      { en: 'happen', tr: 'olmak/meydana gelmek', emoji: '❗' },
      { en: 'suddenly', tr: 'aniden/birden', emoji: '💥' },
      { en: 'police', tr: 'polis', emoji: '🚓' },
      { en: 'witness', tr: 'tanık/şahit', emoji: '🕵️' },
      { en: 'storm', tr: 'fırtına', emoji: '⛈️' },
      { en: 'injured', tr: 'yaralı/yaralanmış', emoji: '🤕' },
      { en: 'report', tr: 'bildirmek/rapor', emoji: '📑' },
      { en: 'headline', tr: 'manşet', emoji: '🗞️' },
    ],
    sentences: [
      { en: 'I was driving home when it started to rain.', tr: 'Yağmur başladığında eve araba sürüyordum.', alt: ['Yağmur başladığında arabayla eve gidiyordum.', 'Yağmur yağmaya başladığında eve arabayla gidiyordum.'] },
      { en: 'What happened last night?', tr: 'Dün gece ne oldu?', alt: ['Dün akşam ne oldu?'] },
      { en: 'There was a car accident on the main road.', tr: 'Ana yolda bir araba kazası oldu.', alt: ['Ana yolda bir trafik kazası oldu.', 'Ana yolda bir araba kazası vardı.'] },
      { en: 'Nobody was injured.', tr: 'Kimse yaralanmadı.' },
      { en: 'Suddenly, the lights went out.', tr: 'Aniden ışıklar söndü.', alt: ['Birden ışıklar söndü.', 'Aniden elektrikler kesildi.'] },
      { en: 'The police are looking for witnesses.', tr: 'Polis tanık arıyor.', alt: ['Polis tanıkları arıyor.', 'Polis şahit arıyor.'] },
      { en: 'Did you hear the news?', tr: 'Haberleri duydun mu?', alt: ['Haberi duydun mu?'] },
      { en: 'A big storm is coming tomorrow.', tr: 'Yarın büyük bir fırtına geliyor.', alt: ['Yarın büyük bir fırtına gelecek.'] },
    ],
    dialogs: [
      ['Did you see the news today?', 'Bugün haberleri gördün mü?', 'No, what happened?', 'Hayır, ne oldu?'],
      ['What were you doing when I called?', 'Seni aradığımda ne yapıyordun?', 'I was taking a shower.', 'Duş alıyordum.'],
      ['Was anyone hurt?', 'Yaralanan oldu mu?', 'Luckily, no.', 'Neyse ki hayır.'],
      ['How did it happen?', 'Nasıl oldu?', 'The driver was using his phone.', 'Sürücü telefonunu kullanıyordu.'],
      ['Is the road open now?', 'Yol şimdi açık mı?', 'Not yet, the police closed it.', 'Henüz değil, polis kapattı.'],
      ['Did you hear the storm last night?', 'Dün geceki fırtınayı duydun mu?', 'Yes, I could not sleep.', 'Evet, uyuyamadım.'],
    ],
  },
];

// Her yeni üniteyi kendi seviyesinin son ünitesinden sonra ekle
NEW_UNITS.forEach(nu => {
  let last = -1;
  UNITS.forEach((u, i) => { if ((u.level || 'A1') === nu.level) last = i; });
  UNITS.splice(last + 1, 0, nu);
});
