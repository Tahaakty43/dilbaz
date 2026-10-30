// Dilbaz — ders içerikleri (özgün içerik)
// tr alanında "/" ile ayrılanlar kabul edilen alternatif cevaplardır.
// alt: Türkçe alternatif çeviriler, altEn: İngilizce alternatifler.

const UNITS = [
  {
    title: 'Selamlaşma',
    desc: 'Merhaba de, teşekkür et ve vedalaş.',
    icon: '👋',
    color: '#6C5CE7',
    tip: `
      <p><b>Hello</b> her durumda kullanılır; <b>Hi</b> daha samimidir.</p>
      <p><b>Good morning</b> sabahları selam vermek için, <b>Good night</b> ise geceleri vedalaşırken kullanılır.</p>
      <p>Biri <b>Thank you</b> dediğinde <b>You're welcome</b> (Rica ederim) diye cevap verebilirsin.</p>`,
    words: [
      { en: 'hello', tr: 'merhaba/selam', emoji: '👋' },
      { en: 'goodbye', tr: 'hoşça kal/güle güle/elveda', emoji: '🙋' },
      { en: 'thank you', tr: 'teşekkür ederim/teşekkürler/sağ ol', emoji: '🙏' },
      { en: 'please', tr: 'lütfen', emoji: '🥺' },
      { en: 'yes', tr: 'evet', emoji: '✅' },
      { en: 'no', tr: 'hayır', emoji: '❌' },
      { en: 'good morning', tr: 'günaydın', emoji: '🌅' },
      { en: 'good night', tr: 'iyi geceler', emoji: '🌙' },
      { en: 'sorry', tr: 'özür dilerim/pardon/üzgünüm', emoji: '😔' },
      { en: 'friend', tr: 'arkadaş', emoji: '🤝' },
    ],
    sentences: [
      { en: 'Hello, my friend.', tr: 'Merhaba arkadaşım.', alt: ['Selam arkadaşım.'] },
      { en: 'Good morning!', tr: 'Günaydın!' },
      { en: 'Thank you very much.', tr: 'Çok teşekkür ederim.', alt: ['Çok teşekkürler.'] },
      { en: 'Yes, please.', tr: 'Evet, lütfen.' },
      { en: 'No, thank you.', tr: 'Hayır, teşekkür ederim.', alt: ['Hayır, teşekkürler.', 'Hayır, sağ ol.'] },
      { en: 'Good night, my friend.', tr: 'İyi geceler arkadaşım.' },
      { en: 'How are you?', tr: 'Nasılsın?', alt: ['Nasılsınız?'] },
      { en: 'I am fine, thank you.', tr: 'İyiyim, teşekkür ederim.', alt: ['İyiyim, teşekkürler.', 'Ben iyiyim, teşekkür ederim.'], altEn: ["I'm fine, thank you."] },
      { en: 'See you later.', tr: 'Sonra görüşürüz.', alt: ['Görüşürüz.'] },
    ],
  },
  {
    title: 'Tanışma',
    desc: 'Kendini tanıt, adını ve nereli olduğunu söyle.',
    icon: '🙂',
    color: '#00A3A3',
    tip: `
      <p><b>to be</b> (olmak) fiili özneye göre değişir: <b>I am</b>, <b>you are</b>, <b>he/she/it is</b>.</p>
      <p>Tekil bir meslekten önce <b>a</b> kullanılır: <i>I am <b>a</b> student.</i> Sesli harfle başlayan kelimelerde <b>an</b> olur: <i><b>an</b> apple</i>.</p>
      <p><b>my</b> = benim, <b>your</b> = senin.</p>`,
    words: [
      { en: 'name', tr: 'isim/ad', emoji: '🏷️' },
      { en: 'I', tr: 'ben', emoji: '🙋‍♂️' },
      { en: 'you', tr: 'sen/siz', emoji: '🫵' },
      { en: 'student', tr: 'öğrenci', emoji: '🎒' },
      { en: 'teacher', tr: 'öğretmen', emoji: '👩‍🏫' },
      { en: 'doctor', tr: 'doktor', emoji: '🩺' },
      { en: 'country', tr: 'ülke', emoji: '🗺️' },
      { en: 'city', tr: 'şehir', emoji: '🏙️' },
      { en: 'Turkey', tr: 'Türkiye', emoji: '🇹🇷' },
      { en: 'where', tr: 'nerede', emoji: '📍' },
    ],
    sentences: [
      { en: 'My name is Ali.', tr: 'Benim adım Ali.', alt: ['Adım Ali.', 'Benim ismim Ali.', 'İsmim Ali.'] },
      { en: 'What is your name?', tr: 'Senin adın ne?', alt: ['Adın ne?', 'Senin ismin ne?', 'İsmin ne?'], altEn: ["What's your name?"] },
      { en: 'I am a student.', tr: 'Ben bir öğrenciyim.', alt: ['Ben öğrenciyim.', 'Öğrenciyim.', 'Bir öğrenciyim.'], altEn: ["I'm a student."] },
      { en: 'You are a teacher.', tr: 'Sen bir öğretmensin.', alt: ['Sen öğretmensin.', 'Öğretmensin.'] },
      { en: 'She is a doctor.', tr: 'O bir doktor.', alt: ['O doktor.'] },
      { en: 'I am from Turkey.', tr: 'Ben Türkiyeliyim.', alt: ["Türkiye'denim.", "Ben Türkiye'denim.", 'Türkiyeliyim.'] },
      { en: 'Nice to meet you.', tr: 'Tanıştığımıza memnun oldum.', alt: ['Memnun oldum.'] },
      { en: 'Where are you from?', tr: 'Nerelisin?', alt: ['Sen nerelisin?', 'Nerelisiniz?'] },
      { en: 'This is my city.', tr: 'Bu benim şehrim.', alt: ['Bu şehrim.'] },
    ],
  },
  {
    title: 'Aile',
    desc: 'Aile üyelerini öğren ve onlardan bahset.',
    icon: '👨‍👩‍👧',
    color: '#FF7A45',
    tip: `
      <p>Sahiplik sıfatları: <b>my</b> (benim), <b>your</b> (senin), <b>his</b> (onun – erkek), <b>her</b> (onun – kadın).</p>
      <p><b>I have a sister.</b> = Bir kız kardeşim var. İngilizcede "sahip olmak" için <b>have</b> kullanılır.</p>
      <p>Yaş söylerken: <i>He is ten <b>years old</b>.</i></p>`,
    words: [
      { en: 'mother', tr: 'anne', emoji: '👩' },
      { en: 'father', tr: 'baba', emoji: '👨' },
      { en: 'brother', tr: 'erkek kardeş/kardeş/ağabey', emoji: '👦' },
      { en: 'sister', tr: 'kız kardeş/kardeş/abla', emoji: '👧' },
      { en: 'family', tr: 'aile', emoji: '👨‍👩‍👧‍👦' },
      { en: 'baby', tr: 'bebek', emoji: '👶' },
      { en: 'son', tr: 'oğul', emoji: '🧒' },
      { en: 'daughter', tr: 'kız evlat/kız', emoji: '👱‍♀️' },
      { en: 'grandmother', tr: 'büyükanne/babaanne/anneanne/nine', emoji: '👵' },
      { en: 'grandfather', tr: 'büyükbaba/dede', emoji: '👴' },
    ],
    sentences: [
      { en: 'This is my mother.', tr: 'Bu benim annem.', alt: ['Bu annem.'] },
      { en: 'My father is a teacher.', tr: 'Babam bir öğretmen.', alt: ['Benim babam bir öğretmen.', 'Babam öğretmen.'] },
      { en: 'I have a sister.', tr: 'Bir kız kardeşim var.', alt: ['Benim bir kız kardeşim var.'] },
      { en: 'We are a big family.', tr: 'Biz büyük bir aileyiz.', alt: ['Büyük bir aileyiz.'] },
      { en: 'The baby is happy.', tr: 'Bebek mutlu.' },
      { en: 'My brother is ten years old.', tr: 'Erkek kardeşim on yaşında.', alt: ['Kardeşim on yaşında.'] },
      { en: 'I love my family.', tr: 'Ailemi seviyorum.', alt: ['Ben ailemi seviyorum.'] },
      { en: 'My grandfather is very kind.', tr: 'Dedem çok nazik.', alt: ['Büyükbabam çok nazik.'] },
    ],
  },
  {
    title: 'Yiyecek ve İçecek',
    desc: 'Kahvaltıda ne yediğini ve ne içtiğini anlat.',
    icon: '🍎',
    color: '#E84393',
    tip: `
      <p>Geniş zamanda (Simple Present) <b>he / she / it</b> öznesinden sonra fiil <b>-s</b> alır: <i>I eat → She eat<b>s</b></i>.</p>
      <p><b>water, milk, bread</b> gibi sayılamayan isimlerle <b>a</b> kullanılmaz: <i>some water</i>.</p>
      <p>Kibarca istemek için: <i>Do you want coffee?</i> – <i>Yes, please.</i></p>`,
    words: [
      { en: 'water', tr: 'su', emoji: '💧' },
      { en: 'bread', tr: 'ekmek', emoji: '🍞' },
      { en: 'apple', tr: 'elma', emoji: '🍎' },
      { en: 'milk', tr: 'süt', emoji: '🥛' },
      { en: 'tea', tr: 'çay', emoji: '🍵' },
      { en: 'coffee', tr: 'kahve', emoji: '☕' },
      { en: 'cheese', tr: 'peynir', emoji: '🧀' },
      { en: 'egg', tr: 'yumurta', emoji: '🥚' },
      { en: 'eat', tr: 'yemek', emoji: '🍽️' },
      { en: 'drink', tr: 'içmek', emoji: '🥤' },
    ],
    sentences: [
      { en: 'I drink water.', tr: 'Ben su içerim.', alt: ['Su içerim.', 'Ben su içiyorum.', 'Su içiyorum.'] },
      { en: 'She eats an apple.', tr: 'O bir elma yer.', alt: ['O elma yer.', 'O bir elma yiyor.', 'Bir elma yer.'] },
      { en: 'I like tea.', tr: 'Çayı severim.', alt: ['Ben çayı severim.', 'Çay severim.', 'Ben çay severim.'] },
      { en: 'The bread is fresh.', tr: 'Ekmek taze.' },
      { en: 'Do you want coffee?', tr: 'Kahve ister misin?', alt: ['Kahve ister misiniz?'] },
      { en: 'I eat eggs and cheese for breakfast.', tr: 'Kahvaltıda yumurta ve peynir yerim.' },
      { en: 'The milk is cold.', tr: 'Süt soğuk.' },
      { en: 'I am hungry.', tr: 'Açım.', alt: ['Ben açım.'], altEn: ["I'm hungry."] },
    ],
  },
  {
    title: 'Renkler ve Sayılar',
    desc: 'Renkleri ve ilk sayıları öğren.',
    icon: '🎨',
    color: '#0984E3',
    tip: `
      <p>İngilizcede sıfat isimden <b>önce</b> gelir: <i>a <b>red</b> apple</i> (kırmızı bir elma).</p>
      <p>Çoğul yapmak için çoğunlukla <b>-s</b> eklenir: <i>one cat → two cat<b>s</b></i>. Türkçede sayıdan sonra çoğul eki gelmez, İngilizcede gelir!</p>`,
    words: [
      { en: 'red', tr: 'kırmızı', emoji: '🔴' },
      { en: 'blue', tr: 'mavi', emoji: '🔵' },
      { en: 'green', tr: 'yeşil', emoji: '🟢' },
      { en: 'yellow', tr: 'sarı', emoji: '🟡' },
      { en: 'black', tr: 'siyah/kara', emoji: '⚫' },
      { en: 'white', tr: 'beyaz', emoji: '⚪' },
      { en: 'one', tr: 'bir', emoji: '1️⃣' },
      { en: 'two', tr: 'iki', emoji: '2️⃣' },
      { en: 'three', tr: 'üç', emoji: '3️⃣' },
      { en: 'ten', tr: 'on', emoji: '🔟' },
    ],
    sentences: [
      { en: 'The apple is red.', tr: 'Elma kırmızı.' },
      { en: 'The sky is blue.', tr: 'Gökyüzü mavi.' },
      { en: 'I have two cats.', tr: 'İki kedim var.', alt: ['Benim iki kedim var.'] },
      { en: 'My car is black.', tr: 'Arabam siyah.', alt: ['Benim arabam siyah.'] },
      { en: 'I want three apples.', tr: 'Üç elma istiyorum.', alt: ['Ben üç elma istiyorum.'] },
      { en: 'The grass is green.', tr: 'Çimen yeşil.', alt: ['Çimenler yeşil.'] },
      { en: 'She has a white dress.', tr: 'Onun beyaz bir elbisesi var.', alt: ['Beyaz bir elbisesi var.'] },
      { en: 'One coffee, please.', tr: 'Bir kahve, lütfen.' },
    ],
  },
  {
    title: 'Hayvanlar',
    desc: 'Hayvanları tanı ve onları tarif et.',
    icon: '🐾',
    color: '#20A464',
    tip: `
      <p><b>can</b> yetenek bildirir ve fiil yalın kalır: <i>The bird <b>can fly</b>.</i> (Kuş uçabilir.)</p>
      <p>Genel bir şeyden bahsederken çoğul kullanılır: <i><b>Rabbits</b> like carrots.</i></p>
      <p><b>fish</b> kelimesinin çoğulu yine <b>fish</b>'tir.</p>`,
    words: [
      { en: 'cat', tr: 'kedi', emoji: '🐱' },
      { en: 'dog', tr: 'köpek', emoji: '🐶' },
      { en: 'bird', tr: 'kuş', emoji: '🐦' },
      { en: 'fish', tr: 'balık', emoji: '🐟' },
      { en: 'horse', tr: 'at', emoji: '🐴' },
      { en: 'cow', tr: 'inek', emoji: '🐄' },
      { en: 'lion', tr: 'aslan', emoji: '🦁' },
      { en: 'rabbit', tr: 'tavşan', emoji: '🐰' },
      { en: 'big', tr: 'büyük', emoji: '🐘' },
      { en: 'small', tr: 'küçük', emoji: '🐭' },
    ],
    sentences: [
      { en: 'The cat is small.', tr: 'Kedi küçük.' },
      { en: 'The dog is big.', tr: 'Köpek büyük.' },
      { en: 'I have a dog.', tr: 'Bir köpeğim var.', alt: ['Benim bir köpeğim var.'] },
      { en: 'The bird can fly.', tr: 'Kuş uçabilir.' },
      { en: 'Fish live in water.', tr: 'Balıklar suda yaşar.', alt: ['Balıklar suda yaşarlar.'] },
      { en: 'The lion is strong.', tr: 'Aslan güçlü.' },
      { en: 'The horse is running.', tr: 'At koşuyor.' },
      { en: 'Rabbits like carrots.', tr: 'Tavşanlar havuç sever.', alt: ['Tavşanlar havucu sever.', 'Tavşanlar havuç severler.'] },
    ],
  },
  {
    title: 'Günlük Rutin',
    desc: 'Gün içinde neler yaptığını anlat.',
    icon: '⏰',
    color: '#8E44AD',
    tip: `
      <p>Her gün tekrarlanan işler için <b>geniş zaman</b> kullanılır: <i>I go to school every day.</i></p>
      <p>Zaman edatları: <b>at</b> seven (saatte), <b>in</b> the morning / <b>in</b> the evening, <b>at</b> night.</p>`,
    words: [
      { en: 'wake up', tr: 'uyanmak', emoji: '⏰' },
      { en: 'sleep', tr: 'uyumak', emoji: '😴' },
      { en: 'work', tr: 'çalışmak/iş', emoji: '💼' },
      { en: 'school', tr: 'okul', emoji: '🏫' },
      { en: 'home', tr: 'ev', emoji: '🏠' },
      { en: 'book', tr: 'kitap', emoji: '📖' },
      { en: 'read', tr: 'okumak', emoji: '🤓' },
      { en: 'write', tr: 'yazmak', emoji: '✍️' },
      { en: 'morning', tr: 'sabah', emoji: '🌤️' },
      { en: 'evening', tr: 'akşam', emoji: '🌆' },
    ],
    sentences: [
      { en: 'I wake up at seven.', tr: 'Yedide uyanırım.', alt: ['Saat yedide uyanırım.', 'Ben yedide uyanırım.'] },
      { en: 'I go to school.', tr: 'Okula giderim.', alt: ['Ben okula giderim.', 'Okula gidiyorum.'] },
      { en: 'She works every day.', tr: 'O her gün çalışır.', alt: ['Her gün çalışır.', 'O her gün çalışıyor.'] },
      { en: 'I read a book.', tr: 'Bir kitap okurum.', alt: ['Kitap okurum.', 'Bir kitap okuyorum.', 'Kitap okuyorum.'] },
      { en: 'We go home in the evening.', tr: 'Akşam eve gideriz.', alt: ['Akşamları eve gideriz.', 'Biz akşam eve gideriz.'] },
      { en: 'He writes a letter.', tr: 'O bir mektup yazar.', alt: ['O bir mektup yazıyor.', 'Bir mektup yazar.'] },
      { en: 'I sleep at night.', tr: 'Geceleri uyurum.', alt: ['Gece uyurum.'] },
      { en: 'I drink tea in the morning.', tr: 'Sabah çay içerim.', alt: ['Sabahları çay içerim.'] },
    ],
  },
  {
    title: 'Şehirde',
    desc: 'Yol sor, yön tarif et ve ulaşımı konuş.',
    icon: '🚌',
    color: '#D35400',
    tip: `
      <p>Bir yerin nerede olduğunu sormak için: <i><b>Where is</b> the bank?</i></p>
      <p>Yön tarifi emir kipiyle yapılır: <i><b>Turn</b> left. <b>Go</b> straight.</i></p>
      <p><b>near</b> = yakın, <b>far</b> = uzak.</p>`,
    words: [
      { en: 'street', tr: 'sokak/cadde', emoji: '🛣️' },
      { en: 'hospital', tr: 'hastane', emoji: '🏥' },
      { en: 'market', tr: 'market/pazar', emoji: '🛒' },
      { en: 'bus', tr: 'otobüs', emoji: '🚌' },
      { en: 'train', tr: 'tren', emoji: '🚆' },
      { en: 'left', tr: 'sol', emoji: '⬅️' },
      { en: 'right', tr: 'sağ', emoji: '➡️' },
      { en: 'near', tr: 'yakın', emoji: '📌' },
      { en: 'far', tr: 'uzak', emoji: '🏔️' },
      { en: 'bank', tr: 'banka', emoji: '🏦' },
    ],
    sentences: [
      { en: 'Where is the hospital?', tr: 'Hastane nerede?' },
      { en: 'Turn left.', tr: 'Sola dön.' },
      { en: 'Turn right.', tr: 'Sağa dön.' },
      { en: 'The bank is near.', tr: 'Banka yakın.' },
      { en: 'The market is far.', tr: 'Market uzak.' },
      { en: 'I take the bus.', tr: 'Otobüse binerim.', alt: ['Ben otobüse binerim.'] },
      { en: 'The train is late.', tr: 'Tren geç kaldı.', alt: ['Tren gecikti.', 'Tren geç.'] },
      { en: 'Go straight.', tr: 'Düz git.', alt: ['Dümdüz git.'] },
    ],
  },
  {
    title: 'Zaman ve Günler',
    desc: 'Günleri, saatleri ve zamanı ifade et.',
    icon: '📅',
    color: '#16A085',
    tip: `
      <p>İngilizcede günler <b>büyük harfle</b> yazılır: <i>Monday, Friday</i>.</p>
      <p>Saat sormak için: <i>What time is it?</i> – <i>It is three o'clock.</i></p>
      <p>Geçmiş zamanda <b>is → was</b> olur: <i>Yesterday <b>was</b> Friday.</i></p>`,
    words: [
      { en: 'today', tr: 'bugün', emoji: '📍' },
      { en: 'tomorrow', tr: 'yarın', emoji: '⏭️' },
      { en: 'yesterday', tr: 'dün', emoji: '⏮️' },
      { en: 'Monday', tr: 'pazartesi', emoji: '1️⃣' },
      { en: 'Friday', tr: 'cuma', emoji: '5️⃣' },
      { en: 'week', tr: 'hafta', emoji: '🗓️' },
      { en: 'day', tr: 'gün', emoji: '☀️' },
      { en: 'hour', tr: 'saat', emoji: '⏳' },
      { en: 'month', tr: 'ay', emoji: '📆' },
      { en: 'year', tr: 'yıl/sene', emoji: '🎆' },
    ],
    sentences: [
      { en: 'Today is Monday.', tr: 'Bugün pazartesi.' },
      { en: 'See you tomorrow.', tr: 'Yarın görüşürüz.' },
      { en: 'Yesterday was Friday.', tr: 'Dün cumaydı.' },
      { en: 'What time is it?', tr: 'Saat kaç?' },
      { en: 'I work five days a week.', tr: 'Haftada beş gün çalışırım.' },
      { en: 'The weekend is fun.', tr: 'Hafta sonu eğlenceli.' },
      { en: "It is three o'clock.", tr: 'Saat üç.', altEn: ["It's three o'clock."] },
      { en: 'I was at home yesterday.', tr: 'Dün evdeydim.', alt: ['Ben dün evdeydim.'] },
    ],
  },
  {
    title: 'Duygular ve Hava',
    desc: 'Nasıl hissettiğini ve havayı anlat.',
    icon: '🌦️',
    color: '#C0392B',
    tip: `
      <p>Hava durumundan bahsederken özne olarak <b>It</b> kullanılır: <i><b>It</b> is cold.</i></p>
      <p>Şu anda olan şeyler için şimdiki zaman: <b>am / is / are + fiil-ing</b> → <i>It is rain<b>ing</b>.</i></p>
      <p>Duygular <b>to be</b> ile söylenir: <i>I <b>am</b> happy.</i></p>`,
    words: [
      { en: 'happy', tr: 'mutlu', emoji: '😊' },
      { en: 'sad', tr: 'üzgün', emoji: '😢' },
      { en: 'tired', tr: 'yorgun', emoji: '🥱' },
      { en: 'angry', tr: 'kızgın/sinirli', emoji: '😠' },
      { en: 'hot', tr: 'sıcak', emoji: '🥵' },
      { en: 'cold', tr: 'soğuk', emoji: '🥶' },
      { en: 'rain', tr: 'yağmur', emoji: '🌧️' },
      { en: 'sun', tr: 'güneş', emoji: '☀️' },
      { en: 'snow', tr: 'kar', emoji: '❄️' },
      { en: 'weather', tr: 'hava', emoji: '🌤️' },
    ],
    sentences: [
      { en: 'I am happy today.', tr: 'Bugün mutluyum.', alt: ['Ben bugün mutluyum.'], altEn: ["I'm happy today."] },
      { en: 'She is very tired.', tr: 'O çok yorgun.', alt: ['Çok yorgun.'] },
      { en: 'It is cold outside.', tr: 'Dışarısı soğuk.', alt: ['Dışarıda hava soğuk.'], altEn: ["It's cold outside."] },
      { en: 'It is raining.', tr: 'Yağmur yağıyor.', altEn: ["It's raining."] },
      { en: 'The weather is nice.', tr: 'Hava güzel.' },
      { en: 'Why are you sad?', tr: 'Neden üzgünsün?', alt: ['Niye üzgünsün?', 'Niçin üzgünsün?'] },
      { en: 'I like snow.', tr: 'Karı severim.', alt: ['Kar severim.', 'Ben karı severim.'] },
      { en: 'The sun is hot.', tr: 'Güneş sıcak.' },
    ],
  },
];

const LESSON_NAMES = ['Temel kelimeler', 'Yeni kelimeler', 'Cümle kurma', 'Ünite tekrarı'];

const ACHIEVEMENTS = [
  { id: 'first', icon: '🌱', title: 'İlk Adım', desc: 'İlk dersini tamamla' },
  { id: 'perfect', icon: '💯', title: 'Kusursuz', desc: 'Bir dersi hatasız bitir' },
  { id: 'combo10', icon: '⚡', title: 'Durdurulamaz', desc: 'Üst üste 10 doğru cevap ver' },
  { id: 'unit', icon: '🏆', title: 'Ünite Fatihi', desc: 'Bir üniteyi tamamen bitir' },
  { id: 'streak3', icon: '🔥', title: 'Isınıyoruz', desc: '3 günlük seri yap' },
  { id: 'streak7', icon: '🌋', title: 'Bir Hafta', desc: '7 günlük seri yap' },
  { id: 'xp100', icon: '⭐', title: 'Yüzlük', desc: 'Toplam 100 XP kazan' },
  { id: 'xp500', icon: '🌟', title: 'Yıldız Öğrenci', desc: 'Toplam 500 XP kazan' },
  { id: 'words50', icon: '📚', title: 'Kelime Avcısı', desc: '50 kelime öğren' },
  { id: 'practice', icon: '💪', title: 'Çalışkan', desc: 'Bir pratik oturumu tamamla' },
  { id: 'a1', icon: '🎓', title: 'Temeller Tamam', desc: 'A1 bölümünü bitir' },
  { id: 'a2', icon: '🧭', title: 'Günlük Hayatta', desc: 'A2 bölümünü bitir' },
  { id: 'b1', icon: '👑', title: 'Akıcı Konuşmacı', desc: 'B1 bölümünü bitir' },
  { id: 'test', icon: '🚀', title: 'Hızlı Yükseliş', desc: 'Seviye atlama sınavını geç' },
  { id: 'xp2000', icon: '🏅', title: 'Efsane', desc: 'Toplam 2000 XP kazan' },
  { id: 'b2', icon: '💎', title: 'Usta Kullanıcı', desc: 'B2 bölümünü bitir' },
  { id: 'c1', icon: '🎓', title: 'İleri Düzey', desc: 'C1 bölümünü bitir' },
  { id: 'reader', icon: '📖', title: 'Kitap Kurdu', desc: '5 okuma parçası tamamla' },
];
