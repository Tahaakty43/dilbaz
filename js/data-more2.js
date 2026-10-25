// Dilbaz — mevcut seviyelere ek üniteler (A1, A2, B1)

const NEW_UNITS_2 = [
  // ---------------- A1 ----------------
  {
    level: 'A1', title: 'Meslekler', desc: 'Meslekleri öğren, kimin ne iş yaptığını söyle.', icon: '👩‍⚕️', color: '#9B59B6',
    tip: `
      <p>Meslekten önce <b>a</b> ya da <b>an</b> kullanılır: <i>She is <b>a</b> nurse. He is <b>an</b> engineer.</i></p>
      <p>Meslek sormak için: <i>What is your job?</i> / <i>What do you do?</i></p>
      <p>Gelecekteki hayalin için: <i>I want <b>to be</b> a pilot.</i> (Pilot olmak istiyorum.)</p>`,
    words: [
      { en: 'nurse', tr: 'hemşire', emoji: '👩‍⚕️' },
      { en: 'engineer', tr: 'mühendis', emoji: '👷' },
      { en: 'chef', tr: 'aşçı/şef', emoji: '👨‍🍳' },
      { en: 'farmer', tr: 'çiftçi', emoji: '🧑‍🌾' },
      { en: 'pilot', tr: 'pilot', emoji: '🧑‍✈️' },
      { en: 'lawyer', tr: 'avukat', emoji: '👩‍⚖️' },
      { en: 'dentist', tr: 'diş hekimi/dişçi', emoji: '🦷' },
      { en: 'artist', tr: 'sanatçı/ressam', emoji: '👩‍🎨' },
      { en: 'singer', tr: 'şarkıcı', emoji: '🎤' },
      { en: 'factory', tr: 'fabrika', emoji: '🏭' },
    ],
    sentences: [
      { en: 'My mother is a nurse.', tr: 'Annem bir hemşire.', alt: ['Annem hemşire.', 'Benim annem bir hemşire.'] },
      { en: 'He is an engineer.', tr: 'O bir mühendis.', alt: ['O mühendis.'] },
      { en: 'The chef cooks in a big restaurant.', tr: 'Aşçı büyük bir restoranda yemek yapar.', alt: ['Şef büyük bir restoranda yemek pişirir.', 'Aşçı büyük bir restoranda yemek pişirir.'] },
      { en: 'My uncle is a farmer.', tr: 'Amcam bir çiftçi.', alt: ['Amcam çiftçi.', 'Dayım bir çiftçi.'] },
      { en: 'The pilot is in the plane.', tr: 'Pilot uçakta.', alt: ['Pilot uçağın içinde.'] },
      { en: 'I want to be a dentist.', tr: 'Diş hekimi olmak istiyorum.', alt: ['Dişçi olmak istiyorum.'] },
      { en: 'She works in a factory.', tr: 'O bir fabrikada çalışıyor.', alt: ['Bir fabrikada çalışıyor.', 'O bir fabrikada çalışır.'] },
      { en: 'The singer is very famous.', tr: 'Şarkıcı çok ünlü.' },
    ],
    dialogs: [
      ['What is your job?', 'Mesleğin ne?', 'I am a nurse.', 'Hemşireyim.'],
      ['Where does your father work?', 'Baban nerede çalışıyor?', 'He works in a hospital.', 'Bir hastanede çalışıyor.'],
      ['Do you like your job?', 'İşini seviyor musun?', 'Yes, I love it.', 'Evet, çok seviyorum.'],
      ['What do you want to be?', 'Ne olmak istiyorsun?', 'I want to be a pilot.', 'Pilot olmak istiyorum.'],
    ],
  },
  {
    level: 'A1', title: 'Ülkeler ve Diller', desc: 'Ülkeleri, dilleri ve milliyetleri öğren.', icon: '🌐', color: '#1ABC9C',
    tip: `
      <p>Ülke, dil ve milliyet isimleri İngilizcede <b>büyük harfle</b> yazılır: <i>Italy, Italian.</i></p>
      <p>Nereli olduğunu söylemek: <i>I am <b>from</b> Turkey.</i> Dil için: <i>I <b>speak</b> Turkish.</i></p>
      <p>Ülke → dil: <i>Japan → Japanese, France → French, Germany → German, Spain → Spanish.</i></p>`,
    words: [
      { en: 'Japan', tr: 'Japonya', emoji: '🗾' },
      { en: 'Italy', tr: 'İtalya', emoji: '🍕' },
      { en: 'Spain', tr: 'İspanya', emoji: '💃' },
      { en: 'France', tr: 'Fransa', emoji: '🗼' },
      { en: 'Germany', tr: 'Almanya', emoji: '🥨' },
      { en: 'England', tr: 'İngiltere', emoji: '💂' },
      { en: 'China', tr: 'Çin', emoji: '🐉' },
      { en: 'language', tr: 'dil', emoji: '🗣️' },
      { en: 'speak', tr: 'konuşmak', emoji: '💬' },
      { en: 'foreign', tr: 'yabancı', emoji: '🛂' },
    ],
    sentences: [
      { en: 'I speak Turkish and English.', tr: 'Türkçe ve İngilizce konuşuyorum.', alt: ['Türkçe ve İngilizce konuşurum.', 'Ben Türkçe ve İngilizce konuşuyorum.'] },
      { en: 'She is from France.', tr: "O Fransa'dan.", alt: ['O Fransız.', "Fransa'dan."] },
      { en: 'Do you speak German?', tr: 'Almanca konuşuyor musun?', alt: ['Almanca konuşur musun?', 'Almanca biliyor musun?'] },
      { en: 'The capital of Japan is Tokyo.', tr: "Japonya'nın başkenti Tokyo.", alt: ["Japonya'nın başkenti Tokyo'dur."] },
      { en: 'I want to visit Spain.', tr: "İspanya'yı ziyaret etmek istiyorum.", alt: ["İspanya'ya gitmek istiyorum."] },
      { en: 'English is a world language.', tr: 'İngilizce bir dünya dili.' },
      { en: 'My friend lives in England.', tr: "Arkadaşım İngiltere'de yaşıyor.", alt: ["Arkadaşım İngiltere'de yaşar."] },
      { en: 'Learning a foreign language is fun.', tr: 'Yabancı bir dil öğrenmek eğlenceli.', alt: ['Yabancı dil öğrenmek eğlenceli.'] },
    ],
    dialogs: [
      ['Which country are you from?', 'Hangi ülkedensin?', 'I am from Turkey.', 'Türkiyeliyim.'],
      ['How many languages do you speak?', 'Kaç dil konuşuyorsun?', 'I speak three languages.', 'Üç dil konuşuyorum.'],
      ['Do you like Italian food?', 'İtalyan yemeklerini sever misin?', 'Yes, I love pizza.', 'Evet, pizzaya bayılırım.'],
      ['Is Japanese difficult?', 'Japonca zor mu?', 'Yes, but it is interesting.', 'Evet ama ilginç.'],
    ],
  },
  // ---------------- A2 ----------------
  {
    level: 'A2', title: 'Mutfakta', desc: 'Tarif oku, malzemeleri ve miktarları söyle.', icon: '🥘', color: '#F0932B',
    tip: `
      <p>Tarifler <b>emir kipiyle</b> yazılır: <i><b>Cut</b> the onions. <b>Add</b> salt. <b>Mix</b> well.</i></p>
      <p>Miktar sormak: sayılamayanlar için <b>How much</b> (<i>How much sugar?</i>), sayılabilenler için <b>How many</b> (<i>How many eggs?</i>).</p>
      <p><b>a little</b> (biraz, sayılamayan) / <b>a few</b> (birkaç, sayılabilen).</p>`,
    words: [
      { en: 'recipe', tr: 'tarif', emoji: '📜' },
      { en: 'cut', tr: 'kesmek/doğramak', emoji: '🔪' },
      { en: 'boil', tr: 'kaynatmak', emoji: '🫕' },
      { en: 'mix', tr: 'karıştırmak', emoji: '🌀' },
      { en: 'add', tr: 'eklemek', emoji: '➕' },
      { en: 'oven', tr: 'fırın', emoji: '♨️' },
      { en: 'salt', tr: 'tuz', emoji: '🧂' },
      { en: 'sugar', tr: 'şeker', emoji: '🍬' },
      { en: 'onion', tr: 'soğan', emoji: '🧅' },
      { en: 'spoon', tr: 'kaşık', emoji: '🥄' },
    ],
    sentences: [
      { en: 'Cut the onions into small pieces.', tr: 'Soğanları küçük parçalara kes.', alt: ['Soğanları küçük parçalar halinde kes.', 'Soğanları küçük küçük doğra.'] },
      { en: 'Boil the water for ten minutes.', tr: 'Suyu on dakika kaynat.' },
      { en: 'Add a little salt.', tr: 'Biraz tuz ekle.', alt: ['Az tuz ekle.'] },
      { en: 'Mix the eggs and the sugar.', tr: 'Yumurtaları ve şekeri karıştır.', alt: ['Yumurtalarla şekeri karıştır.'] },
      { en: 'Put the cake in the oven.', tr: 'Keki fırına koy.', alt: ['Pastayı fırına koy.'] },
      { en: 'How much sugar do we need?', tr: 'Ne kadar şekere ihtiyacımız var?', alt: ['Ne kadar şeker lazım?', 'Ne kadar şeker gerekiyor?'] },
      { en: 'This recipe is very easy.', tr: 'Bu tarif çok kolay.' },
      { en: 'Can you pass me a spoon?', tr: 'Bana bir kaşık uzatır mısın?', alt: ['Bana bir kaşık verebilir misin?', 'Bir kaşık uzatabilir misin?'] },
    ],
    dialogs: [
      ['What are you cooking?', 'Ne pişiriyorsun?', 'I am making vegetable soup.', 'Sebze çorbası yapıyorum.'],
      ['Do we have any eggs?', 'Hiç yumurtamız var mı?', 'Yes, there are six in the fridge.', 'Evet, buzdolabında altı tane var.'],
      ['How long does it take?', 'Ne kadar sürüyor?', 'About forty minutes.', 'Yaklaşık kırk dakika.'],
      ['Can I help you in the kitchen?', 'Mutfakta sana yardım edebilir miyim?', 'Yes, please cut the tomatoes.', 'Evet, lütfen domatesleri kes.'],
      ['Is it spicy?', 'Acı mı?', 'Just a little.', 'Sadece biraz.'],
      ['Where did you learn this recipe?', 'Bu tarifi nereden öğrendin?', 'From my grandmother.', 'Büyükannemden.'],
    ],
  },
  {
    level: 'A2', title: 'Davetler ve Buluşmalar', desc: 'Birini davet et, daveti kabul et ya da kibarca reddet.', icon: '💌', color: '#BE2EDD',
    tip: `
      <p>Davet etmek: <b>Would you like to</b> come…? / <b>Do you want to</b> join us?</p>
      <p>Kabul etmek: <b>I'd love to!</b> / <b>Sounds great!</b></p>
      <p>Kibarca reddetmek: <b>I'm sorry, I can't.</b> <i>I have to work.</i></p>`,
    words: [
      { en: 'invitation', tr: 'davet/davetiye', emoji: '📩' },
      { en: 'accept', tr: 'kabul etmek', emoji: '✅' },
      { en: 'refuse', tr: 'reddetmek', emoji: '🙅‍♀️' },
      { en: 'birthday', tr: 'doğum günü', emoji: '🎂' },
      { en: 'picnic', tr: 'piknik', emoji: '🧺' },
      { en: 'concert', tr: 'konser', emoji: '🎟️' },
      { en: 'cinema', tr: 'sinema', emoji: '🍿' },
      { en: 'join', tr: 'katılmak', emoji: '🙌' },
      { en: 'promise', tr: 'söz vermek/söz', emoji: '🤙' },
      { en: 'surprise', tr: 'sürpriz', emoji: '🎈' },
    ],
    sentences: [
      { en: 'Would you like to come to my birthday party?', tr: 'Doğum günü partime gelmek ister misin?' },
      { en: "I'd love to, thank you!", tr: 'Çok isterim, teşekkürler!', alt: ['Çok isterim, teşekkür ederim!'] },
      { en: "Sorry, I can't come on Saturday.", tr: 'Üzgünüm, cumartesi gelemem.', alt: ['Kusura bakma, cumartesi gelemiyorum.', 'Üzgünüm, cumartesi gelemiyorum.'] },
      { en: 'We are going to have a picnic in the park.', tr: 'Parkta piknik yapacağız.' },
      { en: 'Do you want to join us?', tr: 'Bize katılmak ister misin?' },
      { en: 'The concert starts at eight.', tr: 'Konser sekizde başlıyor.', alt: ['Konser saat sekizde başlıyor.'] },
      { en: 'I promise I will be on time.', tr: 'Zamanında geleceğime söz veriyorum.', alt: ['Söz veriyorum, zamanında geleceğim.'] },
      { en: 'It was a nice surprise.', tr: 'Güzel bir sürprizdi.', alt: ['Hoş bir sürprizdi.'] },
    ],
    dialogs: [
      ['Are you free on Friday evening?', 'Cuma akşamı boş musun?', 'Yes, why?', 'Evet, neden?'],
      ['Shall we go to the cinema?', 'Sinemaya gidelim mi?', 'Good idea! Which film?', 'İyi fikir! Hangi film?'],
      ['Can you come to my party?', 'Partime gelebilir misin?', 'Sorry, I have to work.', 'Üzgünüm, çalışmam lazım.'],
      ['What time should I come?', 'Saat kaçta geleyim?', 'Come at seven.', 'Yedide gel.'],
      ['Should I bring anything?', 'Bir şey getireyim mi?', 'Just bring yourself!', 'Sadece kendini getir!'],
      ['Did you enjoy the concert?', 'Konserden keyif aldın mı?', 'Yes, it was amazing.', 'Evet, muhteşemdi.'],
    ],
  },
  // ---------------- B1 ----------------
  {
    level: 'B1', title: 'Sağlıklı Yaşam', desc: 'Alışkanlıklarını anlat, sağlıklı yaşam üzerine tavsiye ver.', icon: '🥦', color: '#44BD32',
    tip: `
      <p>Geçmişteki alışkanlıklar: <b>used to</b> → <i>I <b>used to</b> eat fast food.</i> (Eskiden fast food yerdim.)</p>
      <p>Fiil özne olduğunda <b>-ing</b> alır: <i><b>Eating</b> vegetables is healthy.</i></p>
      <p><b>enough</b> sıfattan sonra, isimden önce gelir: <i>fit <b>enough</b> / <b>enough</b> sleep.</i></p>`,
    words: [
      { en: 'diet', tr: 'diyet/beslenme', emoji: '🥗' },
      { en: 'exercise', tr: 'egzersiz/egzersiz yapmak', emoji: '🏃' },
      { en: 'habit', tr: 'alışkanlık', emoji: '🔁' },
      { en: 'stress', tr: 'stres', emoji: '😫' },
      { en: 'enough', tr: 'yeterli/yeterince', emoji: '👌' },
      { en: 'weight', tr: 'kilo/ağırlık', emoji: '🏋️' },
      { en: 'vegetable', tr: 'sebze', emoji: '🥕' },
      { en: 'avoid', tr: 'kaçınmak', emoji: '🚫' },
      { en: 'quit', tr: 'bırakmak', emoji: '🛑' },
      { en: 'balanced', tr: 'dengeli', emoji: '⚖️' },
    ],
    sentences: [
      { en: 'I used to eat a lot of fast food.', tr: 'Eskiden çok fazla fast food yerdim.', alt: ['Eskiden çok fast food yerdim.'] },
      { en: 'You should get enough sleep.', tr: 'Yeterince uyumalısın.', alt: ['Yeterli uyku almalısın.'] },
      { en: 'Eating vegetables is good for your health.', tr: 'Sebze yemek sağlığın için iyidir.', alt: ['Sebze yemek sağlığa iyi gelir.', 'Sebze yemek sağlığına iyi gelir.'] },
      { en: 'My father quit smoking last year.', tr: 'Babam geçen yıl sigarayı bıraktı.' },
      { en: 'Try to avoid stress at work.', tr: 'İşte stresten kaçınmaya çalış.', alt: ['İş yerinde stresten uzak durmaya çalış.'] },
      { en: 'A balanced diet gives you energy.', tr: 'Dengeli beslenme sana enerji verir.', alt: ['Dengeli bir diyet sana enerji verir.'] },
      { en: 'I have lost three kilos this month.', tr: 'Bu ay üç kilo verdim.' },
      { en: 'Changing a bad habit is not easy.', tr: 'Kötü bir alışkanlığı değiştirmek kolay değil.' },
    ],
    dialogs: [
      ['How do you stay fit?', 'Formunu nasıl koruyorsun?', 'I go running three times a week.', 'Haftada üç kez koşuya çıkıyorum.'],
      ['Do you eat breakfast every day?', 'Her gün kahvaltı yapar mısın?', 'Not always, but I try to.', 'Her zaman değil ama denerim.'],
      ['You look tired. Are you okay?', 'Yorgun görünüyorsun. İyi misin?', "I haven't slept well lately.", 'Son zamanlarda iyi uyuyamadım.'],
      ['Should I start a diet?', 'Diyete başlamalı mıyım?', 'Talk to a doctor first.', 'Önce bir doktorla konuş.'],
      ['Did you use to do sports?', 'Eskiden spor yapar mıydın?', 'Yes, I used to play basketball.', 'Evet, eskiden basketbol oynardım.'],
      ['How much water do you drink?', 'Ne kadar su içiyorsun?', 'About two litres a day.', 'Günde yaklaşık iki litre.'],
    ],
  },
  {
    level: 'B1', title: 'Film ve Kitaplar', desc: 'Bir filmi ya da kitabı anlat, eleştir ve tavsiye et.', icon: '📚', color: '#6D214F',
    tip: `
      <p>Bir eseri anlatırken: <i>It's <b>about</b> a young doctor. It's <b>set in</b> Istanbul.</i></p>
      <p><b>-ed / -ing</b> sıfatlar: <i>The film was <b>boring</b>.</i> (film sıkıcıydı) – <i>I was <b>bored</b>.</i> (ben sıkıldım)</p>
      <p>Tavsiye: <i>I <b>would recommend</b> it to everyone.</i></p>`,
    words: [
      { en: 'novel', tr: 'roman', emoji: '📕' },
      { en: 'author', tr: 'yazar', emoji: '✒️' },
      { en: 'character', tr: 'karakter', emoji: '🦸' },
      { en: 'plot', tr: 'olay örgüsü/konu', emoji: '🧵' },
      { en: 'ending', tr: 'son', emoji: '🔚' },
      { en: 'actor', tr: 'aktör/oyuncu', emoji: '🕴️' },
      { en: 'review', tr: 'eleştiri/inceleme', emoji: '📝' },
      { en: 'recommend', tr: 'tavsiye etmek/önermek', emoji: '👍' },
      { en: 'exciting', tr: 'heyecan verici', emoji: '🎢' },
      { en: 'scene', tr: 'sahne', emoji: '🎞️' },
    ],
    sentences: [
      { en: 'The book is about a young doctor.', tr: 'Kitap genç bir doktoru anlatıyor.', alt: ['Kitap genç bir doktor hakkında.'] },
      { en: 'I could not stop reading this novel.', tr: 'Bu romanı okumayı bırakamadım.', altEn: ["I couldn't stop reading this novel."] },
      { en: 'The ending was really surprising.', tr: 'Sonu gerçekten şaşırtıcıydı.' },
      { en: 'Who is your favourite author?', tr: 'En sevdiğin yazar kim?', altEn: ['Who is your favorite author?'] },
      { en: 'The main character is very brave.', tr: 'Ana karakter çok cesur.' },
      { en: 'I would recommend this film to everyone.', tr: 'Bu filmi herkese tavsiye ederim.', alt: ['Bu filmi herkese öneririm.'] },
      { en: 'The film was boring, so we left early.', tr: 'Film sıkıcıydı, bu yüzden erken çıktık.', alt: ['Film sıkıcıydı, o yüzden erken ayrıldık.'] },
      { en: 'The story is set in Istanbul.', tr: "Hikâye İstanbul'da geçiyor.", alt: ["Hikaye İstanbul'da geçiyor."] },
    ],
    dialogs: [
      ['Have you read any good books lately?', 'Son zamanlarda iyi bir kitap okudun mu?', 'Yes, a great detective novel.', 'Evet, harika bir polisiye roman.'],
      ['What is the film about?', 'Film ne hakkında?', 'It is about a family in Paris.', "Paris'teki bir aile hakkında."],
      ['Did you like the ending?', 'Sonu beğendin mi?', 'Not really, it was too sad.', 'Pek değil, çok hüzünlüydü.'],
      ['Who plays the main character?', 'Ana karakteri kim oynuyor?', 'A famous young actor.', 'Ünlü genç bir aktör.'],
      ['Is the book better than the film?', 'Kitap filmden daha mı iyi?', 'Yes, books are usually better.', 'Evet, kitaplar genelde daha iyidir.'],
      ['Would you recommend it?', 'Tavsiye eder misin?', 'Definitely, you should watch it.', 'Kesinlikle, izlemelisin.'],
    ],
  },
];

NEW_UNITS_2.forEach(nu => {
  let last = -1;
  UNITS.forEach((u, i) => { if ((u.level || 'A1') === nu.level) last = i; });
  UNITS.splice(last + 1, 0, nu);
});
