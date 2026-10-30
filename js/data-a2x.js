// Dilbaz — A2 ek üniteler
// dialogs: [soru, soru (TR), cevap, cevap (TR)]

const NEW_UNITS_A2 = [
  {
    level: 'A2', title: 'En İyisi', desc: 'Karşılaştır ve en üstünü söyle.', icon: '🥇', color: '#F39C12',
    tip: `
      <p>Üstünlük: kısa sıfatlara <b>the + -est</b> (<i>the tallest</i>), uzunlara <b>the most</b> (<i>the most beautiful</i>).</p>
      <p>Düzensizler: <b>good → better → the best</b>, <b>bad → worse → the worst</b>.</p>
      <p>Eşitlik: <b>as … as</b> → <i>She is <b>as tall as</b> me.</i> Karşılaştırmada <b>than</b>: <i>taller <b>than</b> me.</i></p>`,
    words: [
      { en: 'tall', tr: 'uzun boylu', emoji: '🦒' },
      { en: 'short', tr: 'kısa', emoji: '📏' },
      { en: 'strong', tr: 'güçlü', emoji: '🏋️' },
      { en: 'weak', tr: 'zayıf/güçsüz', emoji: '🥀' },
      { en: 'young', tr: 'genç', emoji: '🧒' },
      { en: 'easy', tr: 'kolay', emoji: '🟢' },
      { en: 'difficult', tr: 'zor', emoji: '🧩' },
      { en: 'beautiful', tr: 'güzel', emoji: '🌺' },
      { en: 'best', tr: 'en iyi', emoji: '🏆' },
      { en: 'worst', tr: 'en kötü', emoji: '👎🏻' },
    ],
    sentences: [
      { en: 'My brother is taller than me.', tr: 'Erkek kardeşim benden daha uzun.' },
      { en: 'This is the best restaurant in town.', tr: 'Burası şehirdeki en iyi restoran.', alt: ['Bu, şehirdeki en iyi restoran.'] },
      { en: 'English is easier than German.', tr: 'İngilizce Almancadan daha kolay.' },
      { en: 'She is as young as my sister.', tr: 'O, kız kardeşim kadar genç.' },
      { en: 'That was the worst film of the year.', tr: 'O, yılın en kötü filmiydi.', alt: ['Yılın en kötü filmiydi.'] },
      { en: 'Istanbul is the most beautiful city in Turkey.', tr: "İstanbul Türkiye'nin en güzel şehri." },
      { en: 'This exam is more difficult than the last one.', tr: 'Bu sınav öncekinden daha zor.' },
      { en: 'He is the strongest boy in the class.', tr: 'O, sınıftaki en güçlü çocuk.' },
    ],
    dialogs: [
      ['Who is the tallest in your family?', 'Ailende en uzun kim?', 'My father is the tallest.', 'En uzun babam.'],
      ['Which is better, tea or coffee?', 'Hangisi daha iyi, çay mı kahve mi?', 'I think tea is better.', 'Bence çay daha iyi.'],
      ['Was the test difficult?', 'Sınav zor muydu?', 'No, it was easier than I expected.', 'Hayır, beklediğimden daha kolaydı.'],
      ['What is the best day of your life?', 'Hayatının en güzel günü hangisi?', 'The day my daughter was born.', 'Kızımın doğduğu gün.'],
      ['Are you as old as Ali?', "Ali kadar yaşlı mısın?", 'No, I am two years younger.', 'Hayır, iki yaş daha küçüğüm.'],
      ['Is this bag the cheapest one?', 'Bu çanta en ucuzu mu?', 'Yes, the others are more expensive.', 'Evet, diğerleri daha pahalı.'],
    ],
  },
  {
    level: 'A2', title: 'Düzensiz Fiiller', desc: 'Geçmiş zamanın en sık kullanılan düzensiz fiilleri.', icon: '🔀', color: '#9B59B6',
    tip: `
      <p>En sık fiillerin çoğu düzensizdir, <b>-ed</b> almaz: <b>take → took</b>, <b>buy → bought</b>, <b>come → came</b>.</p>
      <p>Olumsuz ve soruda fiil yine yalın olur: <i>I didn't <b>buy</b> it.</i> ("didn't bought" yanlış)</p>
      <p>Ezber önerisi: <i>think → thought, buy → bought, bring → brought</i> aynı sesle biter.</p>`,
    words: [
      { en: 'took', tr: 'aldı/götürdü (take)', emoji: '🤲' },
      { en: 'gave', tr: 'verdi (give)', emoji: '🎀' },
      { en: 'bought', tr: 'satın aldı (buy)', emoji: '🧾' },
      { en: 'came', tr: 'geldi (come)', emoji: '🚶‍♀️' },
      { en: 'wrote', tr: 'yazdı (write)', emoji: '✍️' },
      { en: 'found', tr: 'buldu (find)', emoji: '🔍' },
      { en: 'told', tr: 'söyledi/anlattı (tell)', emoji: '📢' },
      { en: 'made', tr: 'yaptı (make)', emoji: '🔨' },
      { en: 'began', tr: 'başladı (begin)', emoji: '🚦' },
      { en: 'thought', tr: 'düşündü (think)', emoji: '💭' },
    ],
    sentences: [
      { en: 'I bought a new jacket yesterday.', tr: 'Dün yeni bir ceket aldım.' },
      { en: 'She came home late last night.', tr: 'Dün gece eve geç geldi.' },
      { en: 'He gave me a beautiful gift.', tr: 'Bana güzel bir hediye verdi.' },
      { en: 'We took a taxi to the airport.', tr: 'Havalimanına taksiyle gittik.', alt: ['Havalimanına taksi tuttuk.'] },
      { en: 'I found my keys under the bed.', tr: 'Anahtarlarımı yatağın altında buldum.' },
      { en: 'The film began at eight.', tr: 'Film saat sekizde başladı.' },
      { en: 'I did not tell him the truth.', tr: 'Ona gerçeği söylemedim.', altEn: ["I didn't tell him the truth."] },
      { en: 'My mother made a cake for me.', tr: 'Annem benim için kek yaptı.' },
    ],
    dialogs: [
      ['Where did you buy that coat?', 'O paltoyu nereden aldın?', 'I bought it in Italy.', "İtalya'dan aldım."],
      ['Who told you about the party?', 'Sana partiyi kim söyledi?', 'Your sister told me.', 'Kız kardeşin söyledi.'],
      ['What did you think of the book?', 'Kitap hakkında ne düşündün?', 'I thought it was great.', 'Harika olduğunu düşündüm.'],
      ['When did the lesson begin?', 'Ders ne zaman başladı?', 'It began ten minutes ago.', 'On dakika önce başladı.'],
      ['Did you find your phone?', 'Telefonunu buldun mu?', 'Yes, it was in my bag.', 'Evet, çantamdaydı.'],
      ['Did you write to your grandfather?', 'Büyükbabana yazdın mı?', 'Yes, I wrote him a letter.', 'Evet, ona bir mektup yazdım.'],
    ],
  },
  {
    level: 'A2', title: 'Çocukluğum', desc: 'Was/were ile geçmişi anlat.', icon: '🧸', color: '#E84393',
    tip: `
      <p><b>was</b>: I/he/she/it – <b>were</b>: you/we/they. Olumsuz: <b>wasn't, weren't</b>.</p>
      <p>Doğum: <i>I <b>was born</b> in 1995.</i> ("I born" denmez.)</p>
      <p>Soru: <i><b>Were</b> you happy? <b>Where was</b> your house?</i></p>`,
    words: [
      { en: 'born', tr: 'doğmuş', emoji: '👶' },
      { en: 'childhood', tr: 'çocukluk', emoji: '🧸' },
      { en: 'village', tr: 'köy', emoji: '🏡' },
      { en: 'remember', tr: 'hatırlamak', emoji: '🧠' },
      { en: 'forget', tr: 'unutmak', emoji: '🤷' },
      { en: 'toy', tr: 'oyuncak', emoji: '🪀' },
      { en: 'kid', tr: 'çocuk', emoji: '🧒🏽' },
      { en: 'poor', tr: 'fakir/zavallı', emoji: '🪙' },
      { en: 'best friend', tr: 'en yakın arkadaş', emoji: '👯' },
      { en: 'photo', tr: 'fotoğraf', emoji: '📷' },
    ],
    sentences: [
      { en: 'I was born in a small village.', tr: 'Küçük bir köyde doğdum.' },
      { en: 'My childhood was very happy.', tr: 'Çocukluğum çok mutluydu.' },
      { en: 'We were poor but happy.', tr: 'Fakirdik ama mutluyduk.' },
      { en: 'I do not remember his name.', tr: 'Onun adını hatırlamıyorum.', alt: ['Adını hatırlamıyorum.'], altEn: ["I don't remember his name."] },
      { en: 'She was my best friend at school.', tr: 'O okulda en yakın arkadaşımdı.' },
      { en: 'There were many toys in my room.', tr: 'Odamda çok oyuncak vardı.' },
      { en: 'Do not forget your photo.', tr: 'Fotoğrafını unutma.', altEn: ["Don't forget your photo."] },
      { en: 'The kids were not at home.', tr: 'Çocuklar evde değildi.', altEn: ["The kids weren't at home."] },
    ],
    dialogs: [
      ['Where were you born?', 'Nerede doğdun?', 'I was born in Ankara.', "Ankara'da doğdum."],
      ['Were you a good student?', 'İyi bir öğrenci miydin?', 'Yes, but I was very quiet.', 'Evet, ama çok sessizdim.'],
      ['Do you remember your first teacher?', 'İlk öğretmenini hatırlıyor musun?', 'Of course, she was very kind.', 'Tabii, çok nazikti.'],
      ['What was your favourite toy?', 'En sevdiğin oyuncak neydi?', 'It was a small red car.', 'Küçük kırmızı bir arabaydı.'],
      ['Was your house big?', 'Evin büyük müydü?', 'No, it was quite small.', 'Hayır, oldukça küçüktü.'],
      ['Who is the kid in this photo?', 'Bu fotoğraftaki çocuk kim?', 'That is me when I was six.', 'O, altı yaşındaki halim.'],
    ],
  },
  {
    level: 'A2', title: 'Kurallar', desc: 'Must, have to ve mustn’t ile zorunluluk ve yasak.', icon: '⚠️', color: '#E74C3C',
    tip: `
      <p><b>must</b>: güçlü zorunluluk, kişisel: <i>I <b>must</b> call her.</i> <b>have to</b>: dış zorunluluk: <i>I <b>have to</b> wear a uniform.</i></p>
      <p><b>mustn't</b> = yasak: <i>You <b>mustn't</b> smoke here.</i></p>
      <p><b>don't have to</b> = gerek yok: <i>You <b>don't have to</b> pay.</i> Bu ikisini karıştırma!</p>`,
    words: [
      { en: 'rule', tr: 'kural', emoji: '📏' },
      { en: 'allowed', tr: 'izinli', emoji: '✅' },
      { en: 'forbidden', tr: 'yasak', emoji: '⛔' },
      { en: 'uniform', tr: 'üniforma', emoji: '👮' },
      { en: 'helmet', tr: 'kask', emoji: '⛑️' },
      { en: 'seatbelt', tr: 'emniyet kemeri', emoji: '💺' },
      { en: 'careful', tr: 'dikkatli', emoji: '🚧' },
      { en: 'licence', tr: 'ehliyet/ruhsat', emoji: '🪪' },
      { en: 'parking', tr: 'park etme/otopark', emoji: '🅿️' },
      { en: 'fine', tr: 'para cezası', emoji: '🎫' },
    ],
    sentences: [
      { en: 'You must wear a seatbelt.', tr: 'Emniyet kemeri takmalısın.', alt: ['Emniyet kemeri takmak zorundasın.'] },
      { en: 'You must not smoke here.', tr: 'Burada sigara içmemelisin.', alt: ['Burada sigara içmek yasak.'], altEn: ["You mustn't smoke here."] },
      { en: 'I have to wear a uniform at work.', tr: 'İşte üniforma giymek zorundayım.', alt: ['İşte üniforma giymem gerekiyor.'] },
      { en: 'You do not have to pay.', tr: 'Ödemek zorunda değilsin.', alt: ['Ödemene gerek yok.'], altEn: ["You don't have to pay."] },
      { en: 'Parking is not allowed here.', tr: 'Buraya park etmek yasak.', alt: ['Burada park etmeye izin verilmiyor.'] },
      { en: 'Be careful on the stairs.', tr: 'Merdivenlerde dikkatli ol.' },
      { en: 'He got a fine for speeding.', tr: 'Hız yaptığı için para cezası aldı.' },
      { en: 'Do I need a licence to drive this?', tr: 'Bunu sürmek için ehliyete ihtiyacım var mı?' },
    ],
    dialogs: [
      ['Do I have to come tomorrow?', 'Yarın gelmek zorunda mıyım?', 'No, you do not have to.', 'Hayır, zorunda değilsin.'],
      ['Can I take photos here?', 'Burada fotoğraf çekebilir miyim?', 'No, it is forbidden.', 'Hayır, yasak.'],
      ['What are the rules at this school?', 'Bu okulda kurallar neler?', 'You must arrive before nine.', 'Dokuzdan önce gelmelisin.'],
      ['Do I need a helmet?', 'Kaska ihtiyacım var mı?', 'Yes, you must wear one.', 'Evet, takmalısın.'],
      ['Why did you get a fine?', 'Neden ceza aldın?', 'I left my car in the wrong place.', 'Arabamı yanlış yere bıraktım.'],
      ['Are dogs allowed in this park?', 'Bu parka köpekler girebilir mi?', 'Yes, but keep it on a lead.', 'Evet, ama tasmalı tutun.'],
    ],
  },
  {
    level: 'A2', title: 'Ne Kadar, Kaç Tane', desc: 'Miktar ifadeleri: a lot of, a few, a little.', icon: '⚖️', color: '#00A8A8',
    tip: `
      <p>Sayılabilen: <b>many, a few</b> → <i>many friends, a few eggs.</i> Sayılamayan: <b>much, a little</b> → <i>much time, a little milk.</i></p>
      <p><b>a lot of</b> ikisiyle de kullanılır: <i>a lot of people, a lot of money.</i></p>
      <p><b>too much / too many</b> = gereğinden fazla: <i>too much salt.</i></p>`,
    words: [
      { en: 'a lot of', tr: 'çok/bir sürü', emoji: '🗃️' },
      { en: 'a few', tr: 'birkaç', emoji: '✌️' },
      { en: 'a little', tr: 'biraz', emoji: '🤌' },
      { en: 'empty', tr: 'boş', emoji: '🫙' },
      { en: 'full', tr: 'dolu/tok', emoji: '🥵' },
      { en: 'half', tr: 'yarım', emoji: '🌓' },
      { en: 'piece', tr: 'parça/dilim', emoji: '🍰' },
      { en: 'glass', tr: 'bardak/cam', emoji: '🥛' },
      { en: 'cup', tr: 'fincan', emoji: '☕' },
      { en: 'plate', tr: 'tabak', emoji: '🍽️' },
    ],
    sentences: [
      { en: 'There are a lot of people here.', tr: 'Burada çok insan var.' },
      { en: 'I have a few friends in London.', tr: "Londra'da birkaç arkadaşım var." },
      { en: 'Can I have a little sugar?', tr: 'Biraz şeker alabilir miyim?' },
      { en: 'We do not have much time.', tr: 'Çok zamanımız yok.', altEn: ["We don't have much time."] },
      { en: 'How many cups do you need?', tr: 'Kaç fincana ihtiyacın var?' },
      { en: 'The bottle is half empty.', tr: 'Şişe yarı boş.' },
      { en: 'There is too much salt in this soup.', tr: 'Bu çorbada çok fazla tuz var.' },
      { en: 'Would you like a piece of cake?', tr: 'Bir dilim kek ister misin?' },
    ],
    dialogs: [
      ['How much water do you drink?', 'Ne kadar su içiyorsun?', 'About six glasses a day.', 'Günde yaklaşık altı bardak.'],
      ['How many students are in your class?', 'Sınıfında kaç öğrenci var?', 'There are about twenty.', 'Yaklaşık yirmi kişi var.'],
      ['More soup?', 'Biraz daha çorba?', 'No, thanks. I am full.', 'Hayır, teşekkürler. Doydum.'],
      ['Is there any coffee left?', 'Hiç kahve kaldı mı?', 'Just a little.', 'Sadece biraz.'],
      ['Do you have many books?', 'Çok kitabın var mı?', 'Yes, I have a lot of books.', 'Evet, bir sürü kitabım var.'],
      ['Can you bring me a clean plate?', 'Bana temiz bir tabak getirebilir misin?', 'Yes, just a few minutes.', 'Evet, birkaç dakika.'],
    ],
  },
  {
    level: 'A2', title: 'Karakter ve Davranış', desc: 'İnsanları anlat, zarflarla davranış tarif et.', icon: '😇', color: '#6AB04C',
    tip: `
      <p>Zarf, fiili anlatır ve çoğunlukla <b>-ly</b> alır: <i>slow → slow<b>ly</b>, careful → careful<b>ly</b>.</i></p>
      <p>Sıfat isimle, zarf fiille: <i>She is a <b>careful</b> driver. She drives <b>carefully</b>.</i></p>
      <p>Düzensiz: <b>good → well</b>, <b>fast → fast</b>, <b>hard → hard</b>. Görünüş sormak: <i>What is he <b>like</b>?</i></p>`,
    words: [
      { en: 'kind', tr: 'nazik/iyi kalpli', emoji: '🤗' },
      { en: 'lazy', tr: 'tembel', emoji: '🦥' },
      { en: 'shy', tr: 'utangaç', emoji: '🙈' },
      { en: 'clever', tr: 'zeki', emoji: '🦉' },
      { en: 'friendly', tr: 'cana yakın', emoji: '😊' },
      { en: 'honest', tr: 'dürüst', emoji: '🧭' },
      { en: 'polite', tr: 'kibar', emoji: '🎩' },
      { en: 'rude', tr: 'kaba', emoji: '😠' },
      { en: 'quiet', tr: 'sessiz', emoji: '🤫' },
      { en: 'slowly', tr: 'yavaşça', emoji: '🐢' },
    ],
    sentences: [
      { en: 'My neighbour is very friendly.', tr: 'Komşum çok cana yakın.' },
      { en: 'He is clever but lazy.', tr: 'O zeki ama tembel.', alt: ['Zeki ama tembel.'] },
      { en: 'Please speak slowly.', tr: 'Lütfen yavaş konuş.', alt: ['Lütfen yavaşça konuş.'] },
      { en: 'She is too shy to sing.', tr: 'Şarkı söylemek için fazla utangaç.' },
      { en: 'It is rude to say that.', tr: 'Bunu söylemek kabalık.' },
      { en: 'You should always be honest.', tr: 'Her zaman dürüst olmalısın.' },
      { en: 'He drives very carefully.', tr: 'Çok dikkatli araba kullanır.' },
      { en: 'The children are quiet today.', tr: 'Çocuklar bugün sessiz.' },
    ],
    dialogs: [
      ['What is your boss like?', 'Patronun nasıl biri?', 'She is kind and very polite.', 'Nazik ve çok kibar biri.'],
      ['Is your brother lazy?', 'Erkek kardeşin tembel mi?', 'Yes, he sleeps all day.', 'Evet, bütün gün uyur.'],
      ['Why does he never talk?', 'Neden hiç konuşmuyor?', 'He is just a little shy.', 'Sadece biraz utangaç.'],
      ['Can you speak more slowly?', 'Daha yavaş konuşabilir misin?', 'Of course, sorry about that.', 'Tabii, kusura bakma.'],
      ['Do you trust him?', 'Ona güveniyor musun?', 'Yes, he is an honest man.', 'Evet, o dürüst bir adam.'],
      ['How was the new waiter?', 'Yeni garson nasıldı?', 'He was quite rude to us.', 'Bize karşı oldukça kabaydı.'],
    ],
  },
  {
    level: 'A2', title: 'Spor', desc: 'Maçları, sporcuları ve sonuçları konuş.', icon: '⚽', color: '#2ECC71',
    tip: `
      <p>Spor fiilleri: <b>play</b> football/tennis, <b>go</b> swimming/cycling, <b>do</b> yoga/exercise.</p>
      <p><b>win</b> a match (maçı kazanmak), <b>beat</b> a team (bir takımı yenmek), <b>lose</b> a match (kaybetmek).</p>
      <p>Geçmişleri: <b>win → won</b>, <b>lose → lost</b>.</p>`,
    words: [
      { en: 'match', tr: 'maç', emoji: '🏟️' },
      { en: 'win', tr: 'kazanmak', emoji: '🥇' },
      { en: 'lose', tr: 'kaybetmek', emoji: '💔' },
      { en: 'player', tr: 'oyuncu', emoji: '⛹️' },
      { en: 'coach', tr: 'antrenör', emoji: '📣' },
      { en: 'goal', tr: 'gol/hedef', emoji: '🥅' },
      { en: 'gym', tr: 'spor salonu', emoji: '🏋️‍♀️' },
      { en: 'tennis', tr: 'tenis', emoji: '🎾' },
      { en: 'basketball', tr: 'basketbol', emoji: '🏀' },
      { en: 'cycling', tr: 'bisiklet sporu', emoji: '🚴' },
    ],
    sentences: [
      { en: 'Our team won the match.', tr: 'Takımımız maçı kazandı.' },
      { en: 'I go to the gym three times a week.', tr: 'Haftada üç kez spor salonuna giderim.' },
      { en: 'He is the best player on the team.', tr: 'O, takımdaki en iyi oyuncu.' },
      { en: 'They lost the game yesterday.', tr: 'Dün oyunu kaybettiler.' },
      { en: 'She plays tennis every Saturday.', tr: 'Her cumartesi tenis oynar.' },
      { en: 'My coach says I need more practice.', tr: 'Antrenörüm daha fazla çalışmam gerektiğini söylüyor.' },
      { en: 'He scored a great goal.', tr: 'Harika bir gol attı.' },
      { en: 'We go cycling at the weekend.', tr: 'Hafta sonu bisiklet sürmeye gideriz.' },
    ],
    dialogs: [
      ['Who won the game?', 'Oyunu kim kazandı?', 'We did, two to one.', 'Biz kazandık, iki bir.'],
      ['Do you do any sports?', 'Herhangi bir spor yapıyor musun?', 'Yes, I play basketball.', 'Evet, basketbol oynuyorum.'],
      ['How often do you go to the gym?', 'Ne sıklıkla spor salonuna gidiyorsun?', 'Almost every day.', 'Neredeyse her gün.'],
      ['What was the score?', 'Skor neydi?', 'It was three nil.', 'Üç sıfırdı.'],
      ['Did your team lose again?', 'Takımın yine mi kaybetti?', 'Yes, I am so disappointed.', 'Evet, çok hayal kırıklığına uğradım.'],
      ['Do you want to play tennis?', 'Tenis oynamak ister misin?', 'Sure, what time?', 'Tabii, saat kaçta?'],
    ],
  },
  {
    level: 'A2', title: 'Cümle Bağlama', desc: 'But, so, because, before, after ile uzun cümleler kur.', icon: '🔗', color: '#3867D6',
    tip: `
      <p><b>but</b> (ama) zıtlık, <b>so</b> (bu yüzden) sonuç, <b>because</b> (çünkü) sebep bildirir.</p>
      <p><b>before / after</b>: <i><b>Before</b> I go to bed, I read. I call you <b>after</b> work.</i></p>
      <p><b>When</b>'den sonra gelecek anlamda bile geniş zaman gelir: <i>When I <b>arrive</b>, I will call.</i> ("will arrive" denmez.)</p>`,
    words: [
      { en: 'but', tr: 'ama', emoji: '↔️' },
      { en: 'so', tr: 'bu yüzden', emoji: '➡️' },
      { en: 'or', tr: 'veya', emoji: '🔀' },
      { en: 'before', tr: 'önce', emoji: '⏮️' },
      { en: 'after', tr: 'sonra', emoji: '⏭️' },
      { en: 'until', tr: '-e kadar', emoji: '⏳' },
      { en: 'also', tr: 'ayrıca/de', emoji: '➕' },
      { en: 'too', tr: 'de/da, fazla', emoji: '🙌' },
      { en: 'then', tr: 'o zaman/sonra', emoji: '🔜' },
      { en: 'while', tr: '-iken', emoji: '🔁' },
    ],
    sentences: [
      { en: 'I was tired, so I went to bed.', tr: 'Yorgundum, bu yüzden yattım.' },
      { en: 'It is small but very nice.', tr: 'Küçük ama çok güzel.' },
      { en: 'I stayed home because it was raining.', tr: 'Yağmur yağdığı için evde kaldım.', alt: ['Evde kaldım çünkü yağmur yağıyordu.'] },
      { en: 'Wash your hands before you eat.', tr: 'Yemeden önce ellerini yıka.' },
      { en: 'We can go after lunch.', tr: 'Öğle yemeğinden sonra gidebiliriz.' },
      { en: 'Wait here until I come back.', tr: 'Ben dönene kadar burada bekle.' },
      { en: 'Do you want tea or coffee?', tr: 'Çay mı kahve mi istersin?' },
      { en: 'I will call you when I arrive.', tr: 'Varınca seni ararım.', altEn: ["I'll call you when I arrive."] },
    ],
    dialogs: [
      ['Why did you take a taxi?', 'Neden taksiye bindin?', 'Because I was late.', 'Çünkü geç kalmıştım.'],
      ['What did you do after work?', 'İşten sonra ne yaptın?', 'I met a friend, then I went home.', 'Bir arkadaşımla buluştum, sonra eve gittim.'],
      ['How long will you stay?', 'Ne kadar kalacaksın?', 'Until Friday.', 'Cumaya kadar.'],
      ['I like this song.', 'Bu şarkıyı seviyorum.', 'I like it too.', 'Ben de seviyorum.'],
      ['Are you coming or not?', 'Geliyor musun, gelmiyor musun?', 'I want to, but I am busy.', 'İstiyorum ama meşgulüm.'],
      ['Can you call me later?', 'Beni sonra arayabilir misin?', 'Yes, while I am on the bus.', 'Evet, otobüsteyken.'],
    ],
  },
  {
    level: 'A2', title: 'Mahallem', desc: 'Yerleri ve konumları ayrıntılı tarif et.', icon: '🏘️', color: '#B8860B',
    tip: `
      <p>Konum edatları: <b>between</b> (arasında), <b>opposite</b> (karşısında), <b>behind</b> (arkasında), <b>in front of</b> (önünde).</p>
      <p><i>The bakery is <b>between</b> the bank <b>and</b> the school.</i></p>
      <p>Yön sorma: <i>Excuse me, how can I <b>get to</b> the library?</i></p>`,
    words: [
      { en: 'park', tr: 'park', emoji: '🌳' },
      { en: 'library', tr: 'kütüphane', emoji: '🏛️' },
      { en: 'bakery', tr: 'fırın', emoji: '🥐' },
      { en: 'butcher', tr: 'kasap', emoji: '🔪' },
      { en: 'mosque', tr: 'cami', emoji: '🕌' },
      { en: 'bridge', tr: 'köprü', emoji: '🌉' },
      { en: 'square', tr: 'meydan/kare', emoji: '⬜' },
      { en: 'corner', tr: 'köşe', emoji: '📐' },
      { en: 'traffic', tr: 'trafik', emoji: '🚥' },
      { en: 'neighbourhood', tr: 'mahalle', emoji: '🏘️' },
    ],
    sentences: [
      { en: 'The bakery is on the corner.', tr: 'Fırın köşede.' },
      { en: 'The library is opposite the park.', tr: 'Kütüphane parkın karşısında.' },
      { en: 'My house is behind the mosque.', tr: 'Evim caminin arkasında.' },
      { en: 'The bank is between the school and the hospital.', tr: 'Banka okul ile hastane arasında.' },
      { en: 'There is a lot of traffic on the bridge.', tr: 'Köprüde çok trafik var.' },
      { en: 'I love my neighbourhood.', tr: 'Mahallemi çok seviyorum.', alt: ['Mahallemi seviyorum.'] },
      { en: 'Meet me in front of the station.', tr: 'Benimle istasyonun önünde buluş.' },
      { en: 'How can I get to the main square?', tr: 'Ana meydana nasıl gidebilirim?' },
    ],
    dialogs: [
      ['Excuse me, where is the library?', 'Affedersiniz, kütüphane nerede?', 'It is behind the post office.', 'Postanenin arkasında.'],
      ['Is there a butcher near here?', 'Buralarda kasap var mı?', 'Yes, just around the corner.', 'Evet, hemen köşeyi dönünce.'],
      ['How can I get to the bridge?', 'Köprüye nasıl gidebilirim?', 'Go straight for five minutes.', 'Beş dakika düz git.'],
      ['Do you like your neighbourhood?', 'Mahalleni seviyor musun?', 'Yes, it is quiet and clean.', 'Evet, sessiz ve temiz.'],
      ['Why are you late?', 'Neden geciktin?', 'There was heavy traffic.', 'Trafik çok yoğundu.'],
      ['Where shall we meet?', 'Nerede buluşalım?', 'In the square, near the fountain.', 'Meydanda, çeşmenin yanında.'],
    ],
  },
  {
    level: 'A2', title: 'Acil Durumlar', desc: 'Yardım iste, olayı bildir, güvende kal.', icon: '🚑', color: '#D63031',
    tip: `
      <p>Acil çağrı: <i><b>Call</b> an ambulance! <b>Help!</b></i></p>
      <p>Olanı anlatmak: <i>Someone <b>stole</b> my bag. There's been an accident.</i></p>
      <p><b>steal → stole</b>, <b>fall → fell</b>, <b>break → broke</b>. Bir yerini kırmak: <i>I <b>broke</b> my arm.</i></p>`,
    words: [
      { en: 'emergency', tr: 'acil durum', emoji: '🚨' },
      { en: 'ambulance', tr: 'ambulans', emoji: '🚑' },
      { en: 'fire', tr: 'yangın/ateş', emoji: '🔥' },
      { en: 'thief', tr: 'hırsız', emoji: '🥷' },
      { en: 'steal', tr: 'çalmak', emoji: '💼' },
      { en: 'bleeding', tr: 'kanama/kanıyor', emoji: '🩸' },
      { en: 'insurance', tr: 'sigorta', emoji: '🛡️' },
      { en: 'burn', tr: 'yanmak/yakmak', emoji: '🕯️' },
      { en: 'fall', tr: 'düşmek', emoji: '🍁' },
      { en: 'danger', tr: 'tehlike', emoji: '☠️' },
    ],
    sentences: [
      { en: 'Call an ambulance, please!', tr: 'Lütfen ambulans çağırın!', alt: ['Ambulans çağırın, lütfen!'] },
      { en: 'This is an emergency.', tr: 'Bu acil bir durum.' },
      { en: 'A thief stole my wallet.', tr: 'Bir hırsız cüzdanımı çaldı.' },
      { en: 'There is a fire in the building.', tr: 'Binada yangın var.' },
      { en: 'My leg is bleeding.', tr: 'Bacağım kanıyor.' },
      { en: 'He fell and broke his arm.', tr: 'Düştü ve kolunu kırdı.' },
      { en: 'Do you have travel insurance?', tr: 'Seyahat sigortan var mı?' },
      { en: 'You are in danger here.', tr: 'Burada tehlikedesin.' },
    ],
    dialogs: [
      ['What is the emergency?', 'Acil durum nedir?', 'A man fell down the stairs.', 'Bir adam merdivenlerden düştü.'],
      ['Is anyone hurt?', 'Yaralanan var mı?', 'Yes, please send help quickly.', 'Evet, lütfen çabuk yardım gönderin.'],
      ['What did the thief look like?', 'Hırsız neye benziyordu?', 'He was tall and wore a black hat.', 'Uzun boyluydu ve siyah şapka takıyordu.'],
      ['Where is the nearest hospital?', 'En yakın hastane nerede?', 'It is ten minutes from here.', 'Buraya on dakika uzaklıkta.'],
      ['Did you burn your hand?', 'Elini mi yaktın?', 'Yes, on the hot oven.', 'Evet, sıcak fırında.'],
      ['Do you need a doctor?', 'Doktora ihtiyacınız var mı?', 'No, I am fine. It is nothing serious.', 'Hayır, iyiyim. Ciddi bir şey değil.'],
    ],
  },
];

NEW_UNITS_A2.forEach(nu => {
  let last = -1;
  UNITS.forEach((u, i) => { if ((u.level || 'A1') === nu.level) last = i; });
  UNITS.splice(last + 1, 0, nu);
});
