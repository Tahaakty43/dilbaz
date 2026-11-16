// Dilbaz — konu anlatımları (özgün içerik)
// Her ünite için adım adım ders. G(ünite adı, konu başlığı, adımlar, sorular)
// adım: [başlık, açıklama (HTML), örnekler [[İngilizce, Türkçe], ...]]
// soru: [boşluklu cümle (___), doğru, yanlış1, yanlış2, açıklama]
const GRAMMAR = {};
const G = (unit, title, steps, quiz) => { GRAMMAR[unit] = { title, steps, quiz }; };

// ======================= A1 =======================
G('Selamlaşma', 'Selamlaşma ve nezaket kalıpları', [
  ['Selam vermek', `<p>İngilizcede en çok kullanılan selam <b>Hello</b>'dur, her ortamda uygundur. <b>Hi</b> ise arkadaşlar arasında kullanılan samimi hâlidir.</p>
    <p>Günün saatine göre de selam verilir: <b>Good morning</b> (sabah), <b>Good afternoon</b> (öğleden sonra), <b>Good evening</b> (akşam).</p>`,
    [['Hello, Ali!', 'Merhaba Ali!'], ['Good morning, teacher.', 'Günaydın öğretmenim.'], ['Good evening!', 'İyi akşamlar!']]],
  ['Hâl hatır sormak', `<p><b>How are you?</b> (Nasılsın?) sorusuna en yaygın cevap <b>I'm fine, thank you.</b> ya da <b>I'm good, thanks.</b> olur.</p>
    <p>Konuşmayı sürdürmek için soruyu geri sor: <b>And you?</b> (Ya sen?)</p>
    <p class="warn">⚠️ <b>Good night</b> bir selam değil, vedadır. Akşam birine rastladığında <b>Good evening</b> de; yatmadan önce ya da ayrılırken <b>Good night</b> de.</p>`,
    [['How are you?', 'Nasılsın?'], ["I'm fine, thanks. And you?", 'İyiyim, teşekkürler. Ya sen?']]],
  ['Teşekkür, rica ve veda', `<p><b>Please</b> (lütfen) isteğin başına ya da sonuna gelir. <b>Thank you</b> / <b>Thanks</b> ile teşekkür edilir, cevabı <b>You're welcome</b> (rica ederim).</p>
    <p>Özür dilemek için <b>Sorry</b>, birinin dikkatini çekmek için <b>Excuse me</b> kullanılır. Vedalaşırken <b>Goodbye</b>, <b>Bye</b> ya da <b>See you later</b> denir.</p>`,
    [['A coffee, please.', 'Bir kahve lütfen.'], ['Thank you! – You\'re welcome.', 'Teşekkürler! – Rica ederim.'], ['See you tomorrow!', 'Yarın görüşürüz!']]],
], [
  ['Good ___! (sabah selamı)', 'morning', 'night', 'bye', 'Sabah selamı “Good morning” olur. “Good night” yalnızca vedalaşırken kullanılır.'],
  ['Thank you! – You\'re ___.', 'welcome', 'sorry', 'fine', 'Teşekküre verilen kalıp cevap “You\'re welcome” (rica ederim).'],
  ['How ___ you?', 'are', 'is', 'am', '“you” ile “are” kullanılır: How are you?'],
  ['I\'m fine, thanks. And ___?', 'you', 'me', 'I', 'Soruyu karşı tarafa geri sorarken “And you?” denir.'],
]);

G('Tanışma', '“to be” fiili: am, is, are', [
  ['Olmak fiili', `<p>Türkçede “öğrenciyim, doktorsun” derken ekleri kullanırız. İngilizcede bunun yerine <b>to be</b> fiili gelir ve özneye göre üç şekli vardır:</p>
    <table><tr><th>Özne</th><th>to be</th><th>Kısaltma</th></tr><tr><td>I</td><td>am</td><td>I'm</td></tr><tr><td>you / we / they</td><td>are</td><td>you're, we're, they're</td></tr><tr><td>he / she / it</td><td>is</td><td>he's, she's, it's</td></tr></table>`,
    [['I am Ali.', 'Ben Ali\'yim.'], ['She is a doctor.', 'O bir doktor.'], ['We are friends.', 'Biz arkadaşız.']]],
  ['a / an ile meslek', `<p>Tekil bir meslek ya da şeyden önce <b>a</b> (bir) gelir. Kelime sesli harf sesiyle başlıyorsa <b>an</b> olur.</p>
    <p class="warn">⚠️ Türkçede “Ben öğrenciyim” deriz ama İngilizcede <b>a</b> zorunludur: <i>I am <b>a</b> student.</i> (“I am student” yanlıştır.)</p>`,
    [['I am a teacher.', 'Ben öğretmenim.'], ['He is an engineer.', 'O bir mühendis.']]],
  ['Kendini tanıtmak', `<p>Adını söylemek: <b>My name is …</b> ya da <b>I'm …</b>. Nereli olduğunu söylemek: <b>I'm from …</b></p>
    <p>Soru sorarken fiil özneden önce gelir: <b>You are</b> → <b>Are you</b>…? <i>Where <b>are you</b> from?</i></p>`,
    [['My name is Elif.', 'Benim adım Elif.'], ['I\'m from Izmir.', 'İzmirliyim.'], ['Are you a student?', 'Öğrenci misin?']]],
], [
  ['She ___ a nurse.', 'is', 'are', 'am', 'he / she / it ile “is” kullanılır.'],
  ['I ___ from Turkey.', 'am', 'is', 'are', '“I” öznesiyle her zaman “am” gelir.'],
  ['He is ___ engineer.', 'an', 'a', '—', '“engineer” sesli harfle başladığı için “an” gelir.'],
  ['___ you a student?', 'Are', 'Is', 'Am', 'Soruda “are” başa gelir: Are you…?'],
]);

G('Aile', 'Sahiplik sıfatları ve “have”', [
  ['Benim, senin, onun', `<p>Bir şeyin kime ait olduğunu söylemek için ismin önüne sahiplik sıfatı gelir:</p>
    <table><tr><td><b>my</b> = benim</td><td><b>our</b> = bizim</td></tr><tr><td><b>your</b> = senin / sizin</td><td><b>their</b> = onların</td></tr><tr><td><b>his</b> = onun (erkek)</td><td><b>her</b> = onun (kadın)</td></tr><tr><td colspan="2"><b>its</b> = onun (hayvan / eşya)</td></tr></table>
    <p class="warn">⚠️ Türkçede “onun” tektir, İngilizcede erkek için <b>his</b>, kadın için <b>her</b> denir.</p>`,
    [['This is my mother.', 'Bu benim annem.'], ['His name is Can.', 'Onun (erkeğin) adı Can.'], ['Her sister is a doctor.', 'Onun (kadının) kız kardeşi doktor.']]],
  ['Sahip olmak: have / has', `<p>“…im var” demek için <b>have</b> kullanılır. he / she / it ile <b>has</b> olur.</p>`,
    [['I have a brother.', 'Bir erkek kardeşim var.'], ['She has two sons.', 'Onun iki oğlu var.'], ['We have a big family.', 'Büyük bir ailemiz var.']]],
  ['Yaş söylemek', `<p>Yaş, “to be” ile söylenir, “have” ile değil: <b>I am 20 years old.</b> ya da kısaca <b>I am 20.</b></p>
    <p class="warn">⚠️ “I have 20 years” yanlıştır. Yaş sormak için: <b>How old are you?</b></p>`,
    [['How old is your father?', 'Baban kaç yaşında?'], ['He is fifty years old.', 'O elli yaşında.']]],
], [
  ['Ayşe loves ___ brother. (Ayşe\'nin)', 'her', 'his', 'my', 'Ayşe kadın olduğu için “onun” = her.'],
  ['She ___ a daughter.', 'has', 'have', 'is', 'he / she / it ile “has” kullanılır.'],
  ['I ___ ten years old.', 'am', 'have', 'has', 'Yaş “to be” ile söylenir: I am ten years old.'],
  ['We love ___ parents. (bizim)', 'our', 'their', 'your', '“bizim” = our.'],
]);

G('Yiyecek ve İçecek', 'Geniş zaman (Simple Present): olumlu cümle', [
  ['Genel doğrular ve alışkanlıklar', `<p>Her zaman, genellikle olan şeyler ve sevdiklerimiz için <b>geniş zaman</b> kullanılır. Fiil yalın hâliyle gelir: <i>I <b>eat</b>, you <b>drink</b>, they <b>like</b>.</i></p>`,
    [['I eat bread every day.', 'Her gün ekmek yerim.'], ['We drink tea in the morning.', 'Sabahları çay içeriz.']]],
  ['he / she / it → fiil + s', `<p>Özne <b>he, she, it</b> (ya da tek bir kişi) olursa fiile <b>-s</b> eklenir. Bu, İngilizcenin en önemli kurallarından biridir!</p>
    <ul><li>eat → eat<b>s</b>, like → like<b>s</b></li><li>-s, -sh, -ch, -o ile bitenler <b>-es</b> alır: watch → watch<b>es</b>, go → go<b>es</b></li><li>sessiz + y → <b>-ies</b>: study → stud<b>ies</b></li><li>have → <b>has</b></li></ul>`,
    [['She likes apples.', 'O elmayı sever.'], ['My father drinks coffee.', 'Babam kahve içer.'], ['He watches TV.', 'O televizyon izler.']]],
  ['like + isim', `<p>Sevdiğin şeyleri <b>like</b> ile söylersin: <i>I like pizza.</i> Genel olarak bir şeyi sevdiğinde çoğul ya da sayılamayan isim kullanılır: <i>I like apple<b>s</b>.</i> (“I like apple” değil.)</p>`,
    [['I like cheese.', 'Peyniri severim.'], ['Do you like fish?', 'Balık sever misin?']]],
], [
  ['My sister ___ milk.', 'drinks', 'drink', 'drinking', 'Tek kişi (she) olduğu için fiil -s alır: drinks.'],
  ['They ___ rice.', 'eat', 'eats', 'eating', '“they” ile fiil yalın kalır.'],
  ['He ___ a sandwich every day.', 'has', 'have', 'haves', 'he / she / it ile have → has olur.'],
  ['She ___ English.', 'studies', 'studys', 'study', 'sessiz harf + y → -ies: studies.'],
]);

G('Renkler ve Sayılar', 'Sıfatlar ve çoğul isimler', [
  ['Sıfat isimden önce gelir', `<p>Türkçedeki gibi İngilizcede de sıfat isimden önce gelir: <i>a <b>red</b> car</i> (kırmızı bir araba).</p>
    <p class="warn">⚠️ Sıfat çoğul olmaz: <i>two red car<b>s</b></i> doğru, “two reds cars” yanlış.</p>`,
    [['a blue bag', 'mavi bir çanta'], ['The sky is blue.', 'Gökyüzü mavi.']]],
  ['Çoğul yapmak', `<p>Genellikle isme <b>-s</b> eklenir: book → books. -s, -sh, -ch, -x ile bitenler <b>-es</b> alır: box → boxes. Sessiz + y → <b>-ies</b>: baby → babies.</p>
    <p class="warn">⚠️ Türkçede “iki elma” deriz, İngilizcede birden fazla için çoğul zorunlu: <i>two apple<b>s</b></i>.</p>`,
    [['three cats', 'üç kedi'], ['two boxes', 'iki kutu'], ['five babies', 'beş bebek']]],
  ['Kaç tane? ve sayılar', `<p>Sayı sormak için <b>How many</b> + çoğul isim: <i>How many books do you have?</i> Rengi sormak için: <b>What colour is it?</b></p>`,
    [['How many apples are there?', 'Kaç elma var?'], ['What colour is your car?', 'Araban ne renk?']]],
], [
  ['I have two ___.', 'cats', 'cat', 'cates', '“two” çoğul ister: cats.'],
  ['She has a ___ dress.', 'red', 'reds', 'dress red', 'Sıfat isimden önce gelir ve çoğul olmaz.'],
  ['There are three ___.', 'boxes', 'boxs', 'box', '-x ile biten isimler -es alır: boxes.'],
  ['How ___ pens do you have?', 'many', 'much', 'old', 'Sayılabilen isimler için “How many”.'],
]);

G('Hayvanlar', '“can” ile yetenek ve genel ifadeler', [
  ['can = -ebilir', `<p><b>can</b> bir şeyi yapabilme yeteneğini anlatır. Her özneyle aynı kalır ve ardından fiil yalın gelir.</p>
    <p class="warn">⚠️ “She can swims” yanlıştır. Doğrusu: <i>She can <b>swim</b>.</i></p>`,
    [['A bird can fly.', 'Bir kuş uçabilir.'], ['Fish can swim.', 'Balıklar yüzebilir.']]],
  ['can\'t ve soru', `<p>Olumsuz: <b>can't</b> (cannot). Soru: <b>Can</b> + özne + fiil?</p>`,
    [['A cat can\'t fly.', 'Bir kedi uçamaz.'], ['Can a dog swim? – Yes, it can.', 'Köpek yüzebilir mi? – Evet, yüzebilir.']]],
  ['Hayvanlar hakkında genel konuşmak', `<p>Bir türün genelinden bahsederken çoğul kullanılır, <b>the</b> kullanılmaz: <i><b>Dogs</b> are friendly.</i> (Köpekler dosttur.) Tek bir hayvan için <b>it</b> kullanılır.</p>`,
    [['Cats like milk.', 'Kediler sütü sever.'], ['I have a dog. It is black.', 'Bir köpeğim var. O siyah.']]],
], [
  ['A horse can ___ fast.', 'run', 'runs', 'running', '“can”den sonra fiil yalın gelir.'],
  ['Penguins ___ fly.', "can't", "don't can", 'not can', 'Olumsuz hâli “can\'t”.'],
  ['___ elephants swim?', 'Can', 'Do can', 'Are', 'Soru: Can + özne + fiil?'],
  ['I love ___. (genel olarak kediler)', 'cats', 'the cat', 'cat', 'Genel bir türden bahsederken çoğul isim kullanılır.'],
]);

G('Günlük Rutin', 'Geniş zaman, sıklık zarfları ve zaman edatları', [
  ['Her gün yaptıkların', `<p>Rutinler geniş zamanla anlatılır. Unutma: he / she / it ile fiil <b>-s</b> alır.</p>`,
    [['I get up at seven.', 'Yedide kalkarım.'], ['She goes to work by bus.', 'O işe otobüsle gider.']]],
  ['Sıklık zarfları', `<p>Ne sıklıkla yaptığını söyle: <b>always</b> (her zaman) · <b>usually</b> (genellikle) · <b>often</b> (sık sık) · <b>sometimes</b> (bazen) · <b>never</b> (asla).</p>
    <p>Bunlar ana fiilin <b>önüne</b>, ama “to be” fiilinin <b>arkasına</b> gelir:</p>`,
    [['I always drink tea.', 'Her zaman çay içerim.'], ['He is never late.', 'O asla geç kalmaz.'], ['We sometimes cook dinner.', 'Bazen akşam yemeği pişiririz.']]],
  ['at, in, on ile zaman', `<p><b>at</b> + saat: at 8 o'clock · <b>in</b> + günün bölümü: in the morning / in the evening · <b>on</b> + gün: on Monday.</p>
    <p class="warn">⚠️ İstisna: <b>at night</b> (gece).</p>`,
    [['I have breakfast at eight.', 'Sekizde kahvaltı ederim.'], ['I read in the evening.', 'Akşamları okurum.']]],
], [
  ['She ___ up at six.', 'gets', 'get', 'getting', 'she ile fiil -s alır: gets.'],
  ['I ___ eat meat. (asla)', 'never', 'always', 'often', '“asla” = never.'],
  ['We have lunch ___ noon.', 'at', 'in', 'on', 'Belirli zaman noktaları “at” alır: at noon.'],
  ['He ___ late. (asla geç kalmaz)', 'is never', 'never is', 'never', '“to be” fiilinde sıklık zarfı fiilin arkasına gelir.'],
]);

G('Şehirde', 'Emir kipi, yön tarifi ve yer sormak', [
  ['Yer sormak', `<p><b>Where is …?</b> ile bir yerin nerede olduğunu sorarsın. Kibar başlamak için önce <b>Excuse me</b> de.</p>`,
    [['Excuse me, where is the bank?', 'Affedersiniz, banka nerede?'], ['Is there a pharmacy near here?', 'Buralarda eczane var mı?']]],
  ['Emir kipi', `<p>Yön tarif ederken fiil yalın hâliyle cümlenin başına gelir, özne kullanılmaz: <b>Go</b> straight. <b>Turn</b> left.</p>
    <p>Olumsuz emir: <b>Don't</b> + fiil → <i>Don't turn right.</i></p>`,
    [['Go straight on.', 'Dümdüz git.'], ['Turn left at the corner.', 'Köşeden sola dön.'], ['Don\'t cross here.', 'Buradan karşıya geçme.']]],
  ['Yer edatları', `<p><b>next to</b> (yanında), <b>opposite</b> (karşısında), <b>between</b> (arasında), <b>on the left / right</b> (solda / sağda).</p>`,
    [['The bank is next to the hotel.', 'Banka otelin yanında.'], ['It\'s on the right.', 'Sağda.']]],
], [
  ['___ straight and turn right.', 'Go', 'Goes', 'Going', 'Emir kipinde fiil yalın gelir.'],
  ['___ is the station?', 'Where', 'What', 'Who', 'Yer sorarken “Where”.'],
  ['The café is ___ to the park.', 'next', 'near of', 'between', '“yanında” = next to.'],
  ['___ turn left here. (olumsuz emir)', "Don't", 'Not', "Doesn't", 'Olumsuz emir “Don\'t” ile yapılır.'],
]);

G('Zaman ve Günler', 'Saat sormak ve zaman edatları', [
  ['Saat kaç?', `<p>Saat sormak: <b>What time is it?</b> Cevap <b>It's</b> ile başlar: <i>It's three o'clock.</i></p>
    <p><b>half past</b> (buçuk), <b>quarter past</b> (çeyrek geçiyor), <b>quarter to</b> (çeyrek var).</p>`,
    [['It\'s half past nine.', 'Saat dokuz buçuk.'], ['It\'s quarter to five.', 'Saat beşe çeyrek var.']]],
  ['Günler büyük harfle yazılır', `<p>Günler ve aylar İngilizcede her zaman büyük harfle başlar: <b>Monday, Friday, June</b>. Günlerle <b>on</b> kullanılır: <i>on Sunday</i>.</p>`,
    [['I work on Monday.', 'Pazartesi çalışırım.'], ['See you on Friday!', 'Cuma görüşürüz!']]],
  ['Ne zaman? (When / What time)', `<p><b>When</b> genel zaman, <b>What time</b> saat sorar. Haftanın her günü yapılan şeyler için: <b>every day</b>, <b>every week</b>, <b>at the weekend</b>.</p>`,
    [['What time does the film start?', 'Film saat kaçta başlıyor?'], ['I go swimming at the weekend.', 'Hafta sonu yüzmeye giderim.']]],
], [
  ['What time ___ it?', 'is', 'are', 'does', 'Saat sorarken “What time is it?”'],
  ['The meeting is ___ Tuesday.', 'on', 'in', 'at', 'Günlerle “on” kullanılır.'],
  ['The bus leaves ___ 7:30.', 'at', 'on', 'in', 'Saatle “at” kullanılır.'],
  ['It\'s half ___ six. (altı buçuk)', 'past', 'to', 'on', '“buçuk” = half past.'],
]);

G('Duygular ve Hava', 'Hava için “It is” ve şimdiki zamana giriş', [
  ['Hava durumu: It is…', `<p>Hava durumundan bahsederken özne <b>it</b> olur. Türkçede “Soğuk.” deriz ama İngilizcede özne zorunludur: <i><b>It is</b> cold.</i></p>`,
    [['It\'s sunny today.', 'Bugün hava güneşli.'], ['It is very hot.', 'Hava çok sıcak.'], ['What\'s the weather like?', 'Hava nasıl?']]],
  ['Duygular: be + sıfat', `<p>Duygular “to be” ile anlatılır: <i>I <b>am</b> happy. She <b>is</b> tired.</i> Sebep söylemek için <b>because</b>: <i>I'm sad because it's raining.</i></p>`,
    [['I am hungry.', 'Açım.'], ['Are you tired?', 'Yorgun musun?']]],
  ['Şu an oluyor: -ing', `<p>Şu anda olan şeyler için <b>am / is / are + fiil-ing</b>: <i>It <b>is raining</b>.</i> (Yağmur yağıyor.) Bu zamanı ileride ayrıntılı öğreneceksin.</p>`,
    [['It is snowing.', 'Kar yağıyor.'], ['The sun is shining.', 'Güneş parlıyor.']]],
], [
  ['___ is cold today.', 'It', 'This', 'He', 'Hava durumunda özne “It” olur.'],
  ['I ___ very happy.', 'am', 'is', 'have', 'Duygular “to be” ile anlatılır: I am happy.'],
  ['It is ___ now. (yağmur yağıyor)', 'raining', 'rain', 'rains', 'Şu an olan şey: is + -ing.'],
  ['She is sad ___ she is ill.', 'because', 'but', 'and', 'Sebep bildirirken “because” (çünkü).'],
]);

G('Evim', 'There is / There are', [
  ['Var / yok', `<p>Bir yerde bir şeyin var olduğunu söylemek için: tekil isimle <b>There is</b>, çoğul isimle <b>There are</b>.</p>`,
    [['There is a sofa in the living room.', 'Oturma odasında bir kanepe var.'], ['There are two bedrooms.', 'İki yatak odası var.']]],
  ['Olumsuz ve soru', `<p>Olumsuz: <b>There isn't</b> / <b>There aren't any</b>. Soru: <b>Is there</b> …? / <b>Are there any</b> …?</p>`,
    [['There isn\'t a garden.', 'Bahçe yok.'], ['Are there any chairs?', 'Hiç sandalye var mı?'], ['Is there a TV? – Yes, there is.', 'Televizyon var mı? – Evet, var.']]],
  ['Odalar ve yer edatları', `<p><b>in</b> (içinde), <b>on</b> (üstünde), <b>under</b> (altında): <i>The cat is <b>under</b> the table.</i></p>
    <p class="warn">⚠️ “have” ile karıştırma: <i>My house <b>has</b> a garden.</i> = <i><b>There is</b> a garden.</i> İkisi de doğru ama yapıları farklı.</p>`,
    [['The book is on the table.', 'Kitap masanın üstünde.'], ['The keys are in the bag.', 'Anahtarlar çantanın içinde.']]],
], [
  ['There ___ three windows.', 'are', 'is', 'am', 'Çoğul isimle “There are”.'],
  ['___ there a bathroom upstairs?', 'Is', 'Are', 'Does', 'Tekil isim: Is there…?'],
  ['There ___ any shops here.', "aren't", "isn't", "don't", 'Çoğul olumsuz: There aren\'t any.'],
  ['The shoes are ___ the bed. (altında)', 'under', 'on', 'in', '“altında” = under.'],
]);

G('Vücudumuz', 'Düzensiz çoğullar ve tarif etmek', [
  ['Düzensiz çoğullar', `<p>Bazı kelimeler -s almaz, tamamen değişir: <b>foot → feet</b>, <b>tooth → teeth</b>, <b>man → men</b>, <b>woman → women</b>, <b>child → children</b>, <b>person → people</b>.</p>`,
    [['My feet are cold.', 'Ayaklarım üşüyor.'], ['She has white teeth.', 'Onun beyaz dişleri var.']]],
  ['Görünüş tarif etmek', `<p>Fiziksel özellikler <b>have / has</b> ile anlatılır: <i>She <b>has</b> long hair.</i> Genel görünüş “to be” ile: <i>He <b>is</b> tall.</i></p>
    <p class="warn">⚠️ <b>hair</b> sayılamaz: “hairs” denmez. <i>She has long hair.</i></p>`,
    [['He has blue eyes.', 'Onun mavi gözleri var.'], ['My brother is tall.', 'Ağabeyim uzun boylu.']]],
  ['Ağrı ve rahatsızlık', `<p>Bir yerin ağrıdığını söylemek: <b>My … hurts.</b> ya da <b>I have a …ache</b> (headache, toothache).</p>`,
    [['My arm hurts.', 'Kolum acıyor.'], ['I have a headache.', 'Başım ağrıyor.']]],
], [
  ['I have two ___.', 'feet', 'foots', 'feets', 'foot → feet (düzensiz çoğul).'],
  ['She ___ long brown hair.', 'has', 'is', 'have', 'Fiziksel özellik: she has…'],
  ['There are three ___ in the room.', 'children', 'childs', 'child', 'child → children.'],
  ['My head ___.', 'hurts', 'hurt', 'is hurt', 'Tekil özne: my head hurts.'],
]);

G('Giysiler', 'Şimdiki zaman ile kıyafet anlatmak', [
  ['Şu an giydiğin', `<p>Şu an üzerinde olan kıyafetler için şimdiki zaman kullanılır: <b>am / is / are + wearing</b>.</p>`,
    [['I am wearing a blue shirt.', 'Mavi bir gömlek giyiyorum.'], ['She is wearing a red dress.', 'O kırmızı bir elbise giyiyor.']]],
  ['Hep çoğul olan kelimeler', `<p>İki parçalı giysi ve eşyalar her zaman çoğuldur: <b>jeans, trousers, shorts, glasses, shoes</b>. Bu yüzden <b>are</b> ile kullanılır.</p>
    <p class="warn">⚠️ “My jeans is new” yanlış. Doğrusu: <i>My jeans <b>are</b> new.</i> Tek bir tane için: <i>a pair of jeans</i>.</p>`,
    [['These trousers are too long.', 'Bu pantolon çok uzun.'], ['I need a pair of shoes.', 'Bir çift ayakkabıya ihtiyacım var.']]],
  ['Alışverişte giysi', `<p>Beden sormak: <b>What size are you?</b> Denemek: <b>Can I try it on?</b> Fiyat: <b>How much is it?</b></p>`,
    [['Can I try this on?', 'Bunu deneyebilir miyim?'], ['It\'s too small.', 'Çok küçük.']]],
], [
  ['He ___ wearing a jacket.', 'is', 'are', 'am', 'he ile “is”: He is wearing…'],
  ['My new jeans ___ black.', 'are', 'is', 'am', 'jeans her zaman çoğuldur.'],
  ['I am ___ a hat today.', 'wearing', 'wear', 'wears', 'Şimdiki zaman: am + wearing.'],
  ['Can I try it ___?', 'on', 'in', 'at', 'Giysi denemek: try on.'],
]);

G('Okulda', 'Emir cümleleri ve “Can I…?” ile izin', [
  ['Sınıfta emirler', `<p>Öğretmenler emir kipini kullanır: fiil başta, yalın hâlde. Kibar yapmak için <b>please</b> ekle.</p>`,
    [['Open your books, please.', 'Kitaplarınızı açın lütfen.'], ['Listen and repeat.', 'Dinleyin ve tekrar edin.'], ['Don\'t talk, please.', 'Konuşmayın lütfen.']]],
  ['İzin istemek', `<p><b>Can I</b> + fiil? ile izin istenir. Cevap: <i>Yes, you can. / Sorry, you can't.</i></p>`,
    [['Can I open the window?', 'Pencereyi açabilir miyim?'], ['Can I go to the toilet?', 'Tuvalete gidebilir miyim?']]],
  ['Anlamadığında', `<p>Dersi takip ederken çok işine yarayacak kalıplar: <b>Sorry, I don't understand.</b> · <b>Can you repeat that, please?</b> · <b>How do you say … in English?</b></p>`,
    [['Can you say that again, please?', 'Tekrar söyler misiniz lütfen?'], ['What does this word mean?', 'Bu kelime ne demek?']]],
], [
  ['___ your name here.', 'Write', 'Writes', 'You write', 'Emir kipinde fiil yalın ve başta gelir.'],
  ['___ I use your pen?', 'Can', 'Do', 'Am', 'İzin istemek: Can I…?'],
  ['Sorry, I don\'t ___.', 'understand', 'understands', 'understanding', '“don\'t”tan sonra fiil yalın gelir.'],
  ['How do you ___ “kalem” in English?', 'say', 'tell', 'speak', 'Bir kelimeyi sormak: How do you say…?'],
]);

G('Meslekler', 'Meslek sormak ve geniş zamanla iş anlatmak', [
  ['Ne iş yapıyorsun?', `<p>Meslek sormanın en doğal yolu: <b>What do you do?</b> Cevap: <i>I'm <b>a</b> nurse. / I'm <b>an</b> architect.</i></p>
    <p class="warn">⚠️ Meslekten önce <b>a / an</b> unutulmamalı.</p>`,
    [['What do you do? – I\'m a chef.', 'Ne iş yapıyorsun? – Aşçıyım.'], ['She is an actress.', 'O bir oyuncu.']]],
  ['İşini anlatmak', `<p>Nerede çalıştığını ve ne yaptığını geniş zamanla anlat: <b>work in / at / for</b>.</p>`,
    [['I work in a hospital.', 'Bir hastanede çalışıyorum.'], ['He works for a bank.', 'O bir banka için çalışıyor.'], ['A pilot flies planes.', 'Pilot uçak uçurur.']]],
  ['Kim? sorusu', `<p>Kişi sormak için <b>Who</b>: <i>Who is your teacher?</i> Birinin mesleğini sormak: <i>What does your mother do?</i></p>`,
    [['What does your father do?', 'Baban ne iş yapıyor?'], ['He is a farmer.', 'O bir çiftçi.']]],
], [
  ['What do you ___?', 'do', 'does', 'make', 'Meslek sormak: What do you do?'],
  ['She is ___ architect.', 'an', 'a', '—', 'Sesli harf sesi: an architect.'],
  ['My uncle ___ in a factory.', 'works', 'work', 'working', 'Tek kişi: works.'],
  ['What ___ your sister do?', 'does', 'do', 'is', 'she / he ile soru “does”.'],
]);

G('Ülkeler ve Diller', 'Ülke, milliyet ve dil', [
  ['Büyük harf kuralı', `<p>Ülke, milliyet ve dil isimleri her zaman büyük harfle yazılır: <b>Turkey – Turkish</b>, <b>Spain – Spanish</b>, <b>Japan – Japanese</b>.</p>`,
    [['I am Turkish.', 'Ben Türküm.'], ['She speaks Spanish.', 'O İspanyolca konuşur.']]],
  ['Nerelisin?', `<p><b>Where are you from?</b> → <i>I'm from Germany. / I'm German.</i> Ülke adı <b>from</b> ile, milliyet <b>be</b> ile kullanılır.</p>
    <p class="warn">⚠️ “I am from German” yanlış: from + ülke (Germany).</p>`,
    [['Where is he from?', 'O nereli?'], ['He\'s from Brazil.', 'O Brezilyalı.']]],
  ['Dil konuşmak', `<p><b>speak</b> + dil: <i>Do you speak English?</i> Biraz biliyorsan: <i>I speak a little English.</i></p>`,
    [['Do you speak French?', 'Fransızca konuşur musun?'], ['I speak a little English.', 'Biraz İngilizce konuşurum.']]],
], [
  ['She is from ___.', 'Italy', 'Italian', 'italy', 'from + ülke adı, büyük harfle: Italy.'],
  ['They speak ___ in Brazil.', 'Portuguese', 'Brazil', 'portuguese', 'Dil isimleri büyük harfle yazılır: Portuguese.'],
  ['___ do you come from?', 'Where', 'What', 'How', 'Nereli olduğunu sormak: Where…?'],
  ['Do you ___ English?', 'speak', 'talk', 'say', 'Dil için “speak” kullanılır.'],
]);

G('Soru Kelimeleri', 'Wh- soruları', [
  ['Soru kelimeleri', `<ul><li><b>What</b> = ne · <b>Who</b> = kim · <b>Where</b> = nerede</li><li><b>When</b> = ne zaman · <b>Why</b> = neden · <b>How</b> = nasıl</li><li><b>Which</b> = hangisi · <b>Whose</b> = kimin · <b>How much / many</b> = ne kadar / kaç tane</li></ul>`,
    [['Who is she?', 'O kim?'], ['Why are you sad?', 'Neden üzgünsün?']]],
  ['Soru cümlesi sırası', `<p>Formül: <b>Soru kelimesi + yardımcı fiil + özne + fiil</b>. Yardımcı fiil “to be” ya da <b>do / does</b> olur.</p>`,
    [['Where do you live?', 'Nerede yaşıyorsun?'], ['What does he want?', 'O ne istiyor?'], ['When is your birthday?', 'Doğum günün ne zaman?']]],
  ['Sık yapılan hata', `<p class="warn">⚠️ “Where you live?” yanlış: yardımcı fiil unutulmamalı. <i>Where <b>do</b> you live?</i> Ayrıca does kullandıysan fiil -s almaz: <i>What does she <b>like</b>?</i> (“likes” değil)</p>`,
    [['How do you go to work?', 'İşe nasıl gidiyorsun?'], ['Which colour do you like?', 'Hangi rengi seversin?']]],
], [
  ['___ is your best friend? (kim)', 'Who', 'What', 'Where', 'Kişi sorarken “Who”.'],
  ['Where ___ you live?', 'do', 'does', 'are', 'you ile geniş zamanda soru “do”.'],
  ['What does she ___?', 'want', 'wants', 'wanting', '“does”tan sonra fiil yalın gelir.'],
  ['___ are you late? – Because the bus was late.', 'Why', 'When', 'How', 'Cevap “because” ise soru “Why”.'],
]);

G('Olumsuz Cümleler', "don't / doesn't ve isn't / aren't", [
  ['Geniş zamanda olumsuz', `<p>I / you / we / they + <b>don't</b> + fiil · he / she / it + <b>doesn't</b> + fiil.</p>
    <p class="warn">⚠️ doesn't kullanınca fiil -s almaz: <i>She doesn't <b>like</b> fish.</i> (“doesn't likes” yanlış)</p>`,
    [['I don\'t eat meat.', 'Et yemem.'], ['He doesn\'t work on Sunday.', 'O pazar çalışmaz.']]],
  ['to be ile olumsuz', `<p>“to be” fiilinde do / does kullanılmaz; sadece <b>not</b> eklenir: <b>I'm not</b>, <b>isn't</b>, <b>aren't</b>.</p>`,
    [['I\'m not tired.', 'Yorgun değilim.'], ['They aren\'t at home.', 'Onlar evde değil.'], ['It isn\'t expensive.', 'Pahalı değil.']]],
  ['Hangisini ne zaman?', `<p>Cümlede başka bir fiil (eat, go, like…) varsa <b>don't / doesn't</b>. Fiil yoksa, sıfat ya da isim varsa <b>am / is / are + not</b>.</p>`,
    [['She isn\'t a teacher.', 'O öğretmen değil.'], ['She doesn\'t teach.', 'O öğretmenlik yapmaz.']]],
], [
  ['My brother ___ like coffee.', "doesn't", "don't", "isn't", 'Tek kişi + fiil: doesn\'t like.'],
  ['We ___ live in Ankara.', "don't", "doesn't", "aren't", 'we + fiil: don\'t.'],
  ['She ___ happy today.', "isn't", "doesn't", "don't", 'Fiil yok, sıfat var: isn\'t.'],
  ['He doesn\'t ___ TV.', 'watch', 'watches', 'watching', 'doesn\'t\'tan sonra fiil yalın.'],
]);

G('Bu, Şu ve Sahiplik', "this / that / these / those ve 's", [
  ['Yakın ve uzak', `<table><tr><th></th><th>Yakın</th><th>Uzak</th></tr><tr><td>Tekil</td><td><b>this</b> (bu)</td><td><b>that</b> (şu / o)</td></tr><tr><td>Çoğul</td><td><b>these</b> (bunlar)</td><td><b>those</b> (şunlar)</td></tr></table>`,
    [['This is my phone.', 'Bu benim telefonum.'], ['Those are my shoes.', 'Şunlar benim ayakkabılarım.']]],
  ["Sahiplik: 's", `<p>Bir şeyin birine ait olduğunu söylemek için isme <b>'s</b> eklenir: <i>Ali<b>'s</b> car</i> (Ali'nin arabası). Çoğul ve -s ile biten isimlerde sadece kesme işareti: <i>my parents<b>'</b> house</i>.</p>`,
    [['This is Ayşe\'s bag.', 'Bu Ayşe\'nin çantası.'], ['My sister\'s name is Zeynep.', 'Kız kardeşimin adı Zeynep.']]],
  ['Kimin? – Whose / mine', `<p><b>Whose</b> … is this? (Bu kimin?) Cevapta ismi tekrarlamamak için: <b>mine</b> (benimki), <b>yours</b> (seninki), <b>his</b>, <b>hers</b>, <b>ours</b>, <b>theirs</b>.</p>`,
    [['Whose pen is this? – It\'s mine.', 'Bu kimin kalemi? – Benim.'], ['Is this yours?', 'Bu seninki mi?']]],
], [
  ['___ are my friends. (yakındaki kişiler)', 'These', 'This', 'That', 'Yakın ve çoğul: these.'],
  ['This is ___ car. (Ali\'nin)', "Ali's", 'Ali', 'of Ali', 'Sahiplik: Ali\'s car.'],
  ['___ bag is this?', 'Whose', 'Who', "Who's", '“Kimin” = Whose.'],
  ['That book isn\'t mine. It\'s ___.', 'hers', 'her', 'she', '“onunki” (ismi tekrar etmeden) = hers.'],
]);

G('Şu An Ne Yapıyorsun?', 'Şimdiki zaman (Present Continuous)', [
  ['Yapı', `<p>Şu anda olan işler için: <b>am / is / are + fiil-ing</b>.</p>
    <ul><li>read → read<b>ing</b></li><li>-e ile bitenler e'yi atar: write → writ<b>ing</b></li><li>kısa fiillerde son harf ikilenir: run → run<b>ning</b>, sit → sit<b>ting</b></li></ul>`,
    [['I am reading a book.', 'Kitap okuyorum.'], ['She is cooking dinner.', 'O akşam yemeği pişiriyor.'], ['They are running.', 'Onlar koşuyor.']]],
  ['Olumsuz ve soru', `<p>Olumsuz: <i>He <b>isn't</b> working.</i> Soru: <b>Are</b> you listening? Cevap: <i>Yes, I am. / No, I'm not.</i></p>`,
    [['What are you doing?', 'Ne yapıyorsun?'], ['I\'m not sleeping.', 'Uyumuyorum.']]],
  ['Geniş zaman mı, şimdiki zaman mı?', `<p>Her zaman / genellikle → geniş zaman: <i>I <b>drink</b> tea every day.</i><br>Şu an → şimdiki zaman: <i>I <b>am drinking</b> tea now.</i></p>
    <p class="warn">⚠️ like, love, know, want gibi durum fiilleri -ing almaz: <i>I <b>want</b> water.</i> (“I am wanting” yanlış)</p>`,
    [['He usually walks, but today he is driving.', 'Genelde yürür ama bugün araba kullanıyor.'], ['I know the answer.', 'Cevabı biliyorum.']]],
], [
  ['Look! The baby ___ sleeping.', 'is', 'are', 'am', 'Tekil özne: is sleeping.'],
  ['They are ___ football now.', 'playing', 'play', 'plays', 'Şimdiki zaman: are + playing.'],
  ['We are ___ in the park.', 'running', 'runing', 'run', 'run → running (son harf ikilenir).'],
  ['I ___ a cold drink.', 'want', 'am wanting', 'wanting', '“want” durum fiilidir, -ing almaz.'],
]);

G('Yapabilirim', '“can” ile yetenek, izin ve rica', [
  ['Yetenek', `<p><b>can</b> + yalın fiil. Her özneyle aynı: <i>I can, she can, they can.</i> Olumsuz <b>can't</b>.</p>`,
    [['I can speak two languages.', 'İki dil konuşabilirim.'], ['She can\'t drive.', 'O araba kullanamaz.']]],
  ['İzin ve rica', `<p><b>Can I …?</b> izin ister: <i>Can I sit here?</i> <b>Can you …?</b> rica eder: <i>Can you help me?</i> Daha kibarı: <b>Could you …?</b></p>`,
    [['Can I ask a question?', 'Bir soru sorabilir miyim?'], ['Could you open the door, please?', 'Kapıyı açar mısınız lütfen?']]],
  ['Kısa cevaplar', `<p>Soruyu cevaplarken fiil tekrar edilmez: <i>Can you swim? – Yes, I <b>can</b>. / No, I <b>can't</b>.</i></p>
    <p class="warn">⚠️ “can”den sonra “to” gelmez: <i>I can <b>swim</b></i> (“I can to swim” yanlış).</p>`,
    [['Can he cook? – Yes, he can.', 'O yemek yapabilir mi? – Evet, yapabilir.']]],
], [
  ['She can ___ the piano.', 'play', 'plays', 'to play', '“can”den sonra yalın fiil gelir.'],
  ['___ you help me, please?', 'Can', 'Do', 'Are', 'Rica: Can you…?'],
  ['Can you ski? – No, I ___.', "can't", "don't", "am not", 'Kısa cevap: No, I can\'t.'],
  ['I ___ swim. I never learned.', "can't", "don't can", 'not can', 'Olumsuz: can\'t.'],
]);

G('Beni, Seni, Onu', 'Nesne zamirleri', [
  ['Özne → nesne', `<table><tr><th>Özne</th><th>Nesne</th></tr><tr><td>I</td><td><b>me</b> (beni / bana)</td></tr><tr><td>you</td><td><b>you</b></td></tr><tr><td>he</td><td><b>him</b></td></tr><tr><td>she</td><td><b>her</b></td></tr><tr><td>it</td><td><b>it</b></td></tr><tr><td>we</td><td><b>us</b></td></tr><tr><td>they</td><td><b>them</b></td></tr></table>`,
    [['She loves him.', 'O onu seviyor.'], ['Call me tomorrow.', 'Yarın beni ara.']]],
  ['Fiilden ve edattan sonra', `<p>Nesne zamiri fiilden sonra ya da <b>with, for, to, at</b> gibi edatlardan sonra gelir.</p>
    <p class="warn">⚠️ “Come with I” yanlış, doğrusu <i>Come with <b>me</b>.</i></p>`,
    [['This gift is for you.', 'Bu hediye senin için.'], ['Look at them!', 'Onlara bak!'], ['Can you help us?', 'Bize yardım edebilir misin?']]],
  ['Kısa cevaplar', `<p>Günlük konuşmada tek kelimelik cevaplarda da nesne hâli kullanılır: <i>Who is it? – It's <b>me</b>.</i> · <i>I'm hungry. – <b>Me</b> too.</i></p>`,
    [['Who wants tea? – Me!', 'Kim çay ister? – Ben!']]],
], [
  ['I know ___. He is my neighbour.', 'him', 'he', 'his', 'Fiilden sonra nesne: him.'],
  ['Please help ___. We are lost.', 'us', 'we', 'our', 'we → us.'],
  ['This letter is for ___. (o kadın)', 'her', 'she', 'hers', 'Edattan sonra: for her.'],
  ['I like those shoes. I want to buy ___.', 'them', 'they', 'their', 'Çoğul nesne: them.'],
]);

G('Aylar ve Mevsimler', 'in / on / at ile tarih ve büyük sayılar', [
  ['in: ay, mevsim, yıl', `<p>Uzun zaman dilimleri <b>in</b> alır: <i>in June, in winter, in 2010</i>.</p>`,
    [['My birthday is in May.', 'Doğum günüm mayısta.'], ['It snows in winter.', 'Kışın kar yağar.']]],
  ['on: gün ve tarih', `<p>Belirli günler <b>on</b> alır: <i>on Monday, on 5 May, on my birthday</i>. Saatler <b>at</b> alır.</p>
    <p>Tarih okunurken sıra sayısı kullanılır: 5 May → <i>the fifth of May</i>. first, second, third, fourth…</p>`,
    [['The party is on Saturday.', 'Parti cumartesi.'], ['I was born on the third of March.', 'Üç Mart\'ta doğdum.']]],
  ['Büyük sayılar', `<p>100 = one hundred, 1,000 = one thousand. Yıllar ikişer okunur: 1995 → <i>nineteen ninety-five</i>, 2024 → <i>twenty twenty-four</i>.</p>`,
    [['The city has two million people.', 'Şehrin iki milyon nüfusu var.']]],
], [
  ['We go on holiday ___ August.', 'in', 'on', 'at', 'Aylarla “in”.'],
  ['The exam is ___ Friday.', 'on', 'in', 'at', 'Günlerle “on”.'],
  ['My birthday is on the ___ of July. (2.)', 'second', 'two', 'twice', 'Tarihte sıra sayısı: second.'],
  ['Flowers grow ___ spring.', 'in', 'on', 'at', 'Mevsimlerle “in”.'],
]);

G('Markette', 'some / any ve sayılamayan isimler', [
  ['Sayılabilen – sayılamayan', `<p><b>Sayılabilen</b>: an egg, two apples. <b>Sayılamayan</b>: water, milk, rice, bread, money. Sayılamayanlar çoğul olmaz ve <b>a / an</b> almaz.</p>`,
    [['I need some milk.', 'Biraz süte ihtiyacım var.'], ['two bottles of water', 'iki şişe su']]],
  ['some ve any', `<p>Olumlu cümlede <b>some</b>, olumsuz ve soruda <b>any</b>.</p>
    <p>İstisna: bir şey teklif ederken ya da isterken soru da olsa <b>some</b>: <i>Would you like some tea?</i></p>`,
    [['I have some eggs.', 'Biraz yumurtam var.'], ['We don\'t have any rice.', 'Hiç pirincimiz yok.'], ['Is there any bread?', 'Hiç ekmek var mı?']]],
  ['Miktar ölçüleri', `<p>Sayılamayanları ölçmek için: <b>a kilo of</b>, <b>a bottle of</b>, <b>a piece of</b>, <b>a loaf of bread</b>, <b>a packet of</b>.</p>`,
    [['A kilo of tomatoes, please.', 'Bir kilo domates lütfen.'], ['Can I have a packet of tea?', 'Bir paket çay alabilir miyim?']]],
], [
  ['We need ___ apples.', 'some', 'any', 'a', 'Olumlu cümlede “some”.'],
  ['There isn\'t ___ milk in the fridge.', 'any', 'some', 'a', 'Olumsuz cümlede “any”.'],
  ['Would you like ___ coffee?', 'some', 'any', 'a', 'Teklif ederken soru da olsa “some”.'],
  ['I\'d like a ___ of water.', 'bottle', 'piece', 'loaf', 'Su şişeyle ölçülür: a bottle of water.'],
]);
