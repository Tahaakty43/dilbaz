// Dilbaz — okuma parçaları (her ünite için bir hikâye)
// q: [soru, doğru cevap, yanlış 1, yanlış 2, kanıt cümlesinin sırası]
// A1/A2'de sorular Türkçe, B1/B2'de İngilizcedir.

const STORIES = {
  // ======================= A1 =======================
  'Selamlaşma': {
    title: 'Yeni Komşu',
    en: ['Good morning! My name is Can.', 'I am your new neighbour.', 'Hello, Can! Nice to meet you.', 'I am Emma. How are you?', 'I am fine, thank you.', 'See you later, Emma!'],
    tr: ['Günaydın! Benim adım Can.', 'Ben senin yeni komşunum.', 'Merhaba Can! Tanıştığımıza memnun oldum.', 'Ben Emma. Nasılsın?', 'İyiyim, teşekkür ederim.', 'Sonra görüşürüz, Emma!'],
    q: [
      ['Can kim?', "Emma'nın yeni komşusu", "Emma'nın öğretmeni", "Emma'nın kardeşi", 1],
      ['Konuşma günün hangi saatinde geçiyor?', 'Sabah', 'Akşam', 'Gece', 0],
      ['Can nasıl hissediyor?', 'İyi', 'Yorgun', 'Üzgün', 4],
    ],
  },
  'Tanışma': {
    title: 'Okulun İlk Günü',
    en: ['Hi! I am Deniz.', 'I am a student.', 'I am from Izmir, a city in Turkey.', 'My teacher is Mr Brown.', 'He is from London.', 'He is a very nice teacher.'],
    tr: ['Merhaba! Ben Deniz.', 'Ben bir öğrenciyim.', "Türkiye'de bir şehir olan İzmir'denim.", 'Öğretmenim Bay Brown.', 'O Londralı.', 'O çok iyi bir öğretmen.'],
    q: [
      ['Deniz nereli?', 'İzmir', 'Londra', 'Ankara', 2],
      ['Bay Brown kim?', "Deniz'in öğretmeni", "Deniz'in babası", 'Bir doktor', 3],
      ['Bay Brown nasıl bir öğretmen?', 'Çok iyi', 'Çok sert', 'Çok yaşlı', 5],
    ],
  },
  'Aile': {
    title: 'Benim Ailem',
    en: ['This is my family.', 'My father is a doctor and my mother is a teacher.', 'I have one brother and two sisters.', 'My brother is ten years old.', 'My grandmother lives with us.', 'We are a big and happy family.'],
    tr: ['Bu benim ailem.', 'Babam doktor, annem öğretmen.', 'Bir erkek kardeşim ve iki kız kardeşim var.', 'Erkek kardeşim on yaşında.', 'Büyükannem bizimle yaşıyor.', 'Biz büyük ve mutlu bir aileyiz.'],
    q: [
      ['Annesinin mesleği ne?', 'Öğretmen', 'Doktor', 'Hemşire', 1],
      ['Kaç kız kardeşi var?', 'İki', 'Bir', 'Üç', 2],
      ['Onlarla kim yaşıyor?', 'Büyükannesi', 'Amcası', 'Dedesi', 4],
    ],
  },
  'Yiyecek ve İçecek': {
    title: 'Kahvaltı',
    en: ['I eat breakfast at seven every morning.', 'I eat bread, cheese and eggs.', 'My sister drinks milk.', 'My father and I drink tea.', 'We do not drink coffee in the morning.', 'Breakfast is my favourite meal.'],
    tr: ['Her sabah yedide kahvaltı yaparım.', 'Ekmek, peynir ve yumurta yerim.', 'Kız kardeşim süt içer.', 'Babam ve ben çay içeriz.', 'Sabahları kahve içmeyiz.', 'Kahvaltı en sevdiğim öğün.'],
    q: [
      ['Kahvaltı saat kaçta?', 'Yedide', 'Sekizde', 'Dokuzda', 0],
      ['Kız kardeşi ne içer?', 'Süt', 'Çay', 'Kahve', 2],
      ['Sabahları ne içmezler?', 'Kahve', 'Çay', 'Süt', 4],
    ],
  },
  'Renkler ve Sayılar': {
    title: 'Oyuncak Mağazası',
    en: ['There are many toys in the shop.', 'I see a red car and a blue ball.', 'There are three green dinosaurs.', 'My brother wants the yellow bus.', 'It costs ten lira.', 'I buy a white teddy bear for my sister.'],
    tr: ['Mağazada çok oyuncak var.', 'Kırmızı bir araba ve mavi bir top görüyorum.', 'Üç yeşil dinozor var.', 'Erkek kardeşim sarı otobüsü istiyor.', 'On lira tutuyor.', 'Kız kardeşim için beyaz bir oyuncak ayı alıyorum.'],
    q: [
      ['Top ne renk?', 'Mavi', 'Kırmızı', 'Yeşil', 1],
      ['Kaç dinozor var?', 'Üç', 'İki', 'On', 2],
      ['Kardeşi hangi oyuncağı istiyor?', 'Sarı otobüsü', 'Kırmızı arabayı', 'Beyaz ayıyı', 3],
    ],
  },
  'Hayvanlar': {
    title: 'Çiftlikte Bir Gün',
    en: ["We visit my uncle's farm on Sunday.", 'There are cows, horses and rabbits.', 'The horses are big and strong.', 'The rabbits are small and white.', 'My uncle also has a dog.', 'The dog loves to run in the garden.'],
    tr: ['Pazar günü amcamın çiftliğini ziyaret ediyoruz.', 'İnekler, atlar ve tavşanlar var.', 'Atlar büyük ve güçlü.', 'Tavşanlar küçük ve beyaz.', 'Amcamın bir de köpeği var.', 'Köpek bahçede koşmayı çok sever.'],
    q: [
      ['Çiftlik kimin?', 'Amcasının', 'Dedesinin', 'Komşusunun', 0],
      ['Tavşanlar nasıl?', 'Küçük ve beyaz', 'Büyük ve güçlü', 'Siyah ve hızlı', 3],
      ['Köpek ne yapmayı sever?', 'Bahçede koşmayı', 'Uyumayı', 'Yüzmeyi', 5],
    ],
  },
  'Günlük Rutin': {
    title: "Ayşe'nin Günü",
    en: ["Ayse wakes up at seven o'clock.", 'She has breakfast and goes to school.', 'School finishes at three.', 'In the evening, she does her homework.', 'Then she reads a book.', 'She goes to bed at ten.'],
    tr: ['Ayşe saat yedide uyanır.', 'Kahvaltı yapar ve okula gider.', 'Okul üçte biter.', 'Akşam ödevini yapar.', 'Sonra kitap okur.', 'Saat onda yatar.'],
    q: [
      ['Ayşe saat kaçta uyanır?', 'Yedide', 'Altıda', 'Sekizde', 0],
      ['Okul saat kaçta biter?', 'Üçte', 'Beşte', 'Onda', 2],
      ['Ödevinden sonra ne yapar?', 'Kitap okur', 'Televizyon izler', 'Uyur', 4],
    ],
  },
  'Şehirde': {
    title: 'Yol Tarifi',
    en: ['Excuse me, where is the hospital?', 'Go straight and turn left.', 'The hospital is next to the bank.', 'Is it far?', 'No, it is very near.', 'You can walk there in five minutes.'],
    tr: ['Affedersiniz, hastane nerede?', 'Düz git ve sola dön.', 'Hastane bankanın yanında.', 'Uzak mı?', 'Hayır, çok yakın.', 'Beş dakikada yürüyerek gidebilirsin.'],
    q: [
      ['Kişi neyi arıyor?', 'Hastaneyi', 'Bankayı', 'Marketi', 0],
      ['Hastane neyin yanında?', 'Bankanın', 'Okulun', 'İstasyonun', 2],
      ['Hastaneye yürüyerek kaç dakika sürer?', 'Beş', 'On', 'On beş', 5],
    ],
  },
  'Zaman ve Günler': {
    title: 'Yoğun Bir Hafta',
    en: ['On Monday, I go to the cinema.', 'On Wednesday, I visit my grandmother.', 'On Friday, I play football with my friends.', 'On Saturday, I clean my room.', 'On Sunday, I rest at home.', 'It is a busy week!'],
    tr: ['Pazartesi sinemaya giderim.', 'Çarşamba büyükannemi ziyaret ederim.', 'Cuma arkadaşlarımla futbol oynarım.', 'Cumartesi odamı temizlerim.', 'Pazar evde dinlenirim.', 'Yoğun bir hafta!'],
    q: [
      ['Pazartesi ne yapar?', 'Sinemaya gider', 'Futbol oynar', 'Dinlenir', 0],
      ['Büyükannesini hangi gün ziyaret eder?', 'Çarşamba', 'Cuma', 'Pazar', 1],
      ['Pazar günü ne yapar?', 'Evde dinlenir', 'Odasını temizler', 'Okula gider', 4],
    ],
  },
  'Duygular ve Hava': {
    title: 'Yağmurlu Gün',
    en: ['Today the weather is cold and it is raining.', 'Ali is sad because he cannot play outside.', 'His mother makes hot chocolate.', 'Then they watch a funny film together.', 'Now Ali is happy.', 'He likes rainy days now!'],
    tr: ['Bugün hava soğuk ve yağmur yağıyor.', 'Ali üzgün çünkü dışarıda oynayamıyor.', 'Annesi sıcak çikolata yapıyor.', 'Sonra birlikte komik bir film izliyorlar.', 'Şimdi Ali mutlu.', 'Artık yağmurlu günleri seviyor!'],
    q: [
      ['Hava nasıl?', 'Soğuk ve yağmurlu', 'Sıcak ve güneşli', 'Karlı', 0],
      ['Ali neden üzgün?', 'Dışarıda oynayamadığı için', 'Hasta olduğu için', 'Annesi kızdığı için', 1],
      ['Birlikte ne izliyorlar?', 'Komik bir film', 'Haberleri', 'Bir maç', 3],
    ],
  },
  'Evim': {
    title: 'Yeni Ev',
    en: ['We have a new house.', 'There are three bedrooms and two bathrooms.', 'The kitchen is big and bright.', 'In the living room there is a blue sofa.', 'My favourite place is the garden.', 'There is a big tree in it.'],
    tr: ['Yeni bir evimiz var.', 'Üç yatak odası ve iki banyo var.', 'Mutfak büyük ve aydınlık.', 'Oturma odasında mavi bir kanepe var.', 'En sevdiğim yer bahçe.', 'İçinde büyük bir ağaç var.'],
    q: [
      ['Evde kaç yatak odası var?', 'Üç', 'İki', 'Dört', 1],
      ['Kanepe ne renk?', 'Mavi', 'Kırmızı', 'Yeşil', 3],
      ['En sevdiği yer neresi?', 'Bahçe', 'Mutfak', 'Banyo', 4],
    ],
  },
  'Vücudumuz': {
    title: 'Benim Robotum',
    en: ['This is my robot, Bob.', 'Bob has a big head and two small eyes.', 'He has long arms and short legs.', 'His hands are green.', 'He has no hair!', 'Bob is my best friend.'],
    tr: ['Bu benim robotum Bob.', "Bob'un büyük bir kafası ve iki küçük gözü var.", 'Uzun kolları ve kısa bacakları var.', 'Elleri yeşil.', 'Hiç saçı yok!', 'Bob benim en iyi arkadaşım.'],
    q: [
      ["Bob'un gözleri nasıl?", 'Küçük', 'Büyük', 'Mavi', 1],
      ["Bob'un bacakları nasıl?", 'Kısa', 'Uzun', 'Yeşil', 2],
      ["Bob'un saçı var mı?", 'Hayır, yok', 'Evet, uzun', 'Evet, kısa', 4],
    ],
  },
  'Giysiler': {
    title: 'Kış Hazırlığı',
    en: ['It is winter and it is very cold.', 'Elif wears her black coat and a red scarf.', 'She also wears a hat and warm socks.', 'Her brother wears jeans and a jacket.', 'Their mother says, "Don\'t forget your gloves!"', 'Now they are ready to go out.'],
    tr: ['Kış ve hava çok soğuk.', 'Elif siyah montunu ve kırmızı atkısını giyiyor.', 'Bir de şapka ve sıcak çoraplar giyiyor.', 'Erkek kardeşi kot pantolon ve ceket giyiyor.', 'Anneleri "Eldivenlerinizi unutmayın!" diyor.', 'Şimdi dışarı çıkmaya hazırlar.'],
    q: [
      ["Elif'in atkısı ne renk?", 'Kırmızı', 'Siyah', 'Beyaz', 1],
      ['Erkek kardeşi ne giyiyor?', 'Kot pantolon ve ceket', 'Mont ve atkı', 'Elbise', 3],
      ['Anneleri neyi unutmamalarını söylüyor?', 'Eldivenleri', 'Şapkaları', 'Çantaları', 4],
    ],
  },
  'Okulda': {
    title: 'Sınav Günü',
    en: ['Today we have an English exam.', 'I have two pencils and a notebook in my bag.', 'The teacher says, "Write your name, please."', 'The questions are not very difficult.', 'I answer all the questions.', 'After the exam, I feel happy.'],
    tr: ['Bugün İngilizce sınavımız var.', 'Çantamda iki kurşun kalem ve bir defter var.', 'Öğretmen "Lütfen adınızı yazın" diyor.', 'Sorular çok zor değil.', 'Bütün soruları cevaplıyorum.', 'Sınavdan sonra mutlu hissediyorum.'],
    q: [
      ['Bugün hangi sınav var?', 'İngilizce', 'Matematik', 'Türkçe', 0],
      ['Çantasında kaç kurşun kalem var?', 'İki', 'Bir', 'Üç', 1],
      ['Sorular nasıl?', 'Çok zor değil', 'Çok zor', 'Çok uzun', 3],
    ],
  },
  'Meslekler': {
    title: 'Ailemizin Meslekleri',
    en: ['My family members have different jobs.', 'My mother is a nurse in a big hospital.', 'My father is an engineer.', 'My uncle is a farmer and he has many cows.', 'My cousin wants to be a pilot.', 'I want to be a dentist.'],
    tr: ['Ailemin bireylerinin farklı meslekleri var.', 'Annem büyük bir hastanede hemşire.', 'Babam mühendis.', 'Amcam çiftçi ve çok ineği var.', 'Kuzenim pilot olmak istiyor.', 'Ben diş hekimi olmak istiyorum.'],
    q: [
      ['Annesi nerede çalışıyor?', 'Hastanede', 'Okulda', 'Fabrikada', 1],
      ['Amcasının mesleği ne?', 'Çiftçi', 'Mühendis', 'Pilot', 3],
      ['Kendisi ne olmak istiyor?', 'Diş hekimi', 'Pilot', 'Hemşire', 5],
    ],
  },
  'Ülkeler ve Diller': {
    title: 'Uluslararası Sınıf',
    en: ['There are students from many countries in my class.', 'Yuki is from Japan.', 'Marco is from Italy and he speaks Italian.', 'Sofia is from Spain.', 'We all speak English in the lesson.', 'I teach them some Turkish words!'],
    tr: ['Sınıfımda birçok ülkeden öğrenci var.', 'Yuki Japonyalı.', 'Marco İtalyalı ve İtalyanca konuşuyor.', 'Sofia İspanyalı.', 'Derste hepimiz İngilizce konuşuyoruz.', 'Onlara biraz Türkçe kelime öğretiyorum!'],
    q: [
      ['Yuki nereli?', 'Japonya', 'İtalya', 'İspanya', 1],
      ['Marco hangi dili konuşuyor?', 'İtalyanca', 'İspanyolca', 'Japonca', 2],
      ['Derste hangi dili konuşuyorlar?', 'İngilizce', 'Türkçe', 'İtalyanca', 4],
    ],
  },

  // ======================= A2 =======================
  'Alışveriş': {
    title: 'Yeni Ayakkabılar',
    en: ['Last Saturday, I went to the shopping centre with my sister.', 'I wanted to buy new shoes for school.', 'The first pair was too expensive.', 'The second pair was cheaper, but it was too small.', 'Finally, I found a comfortable pair in my size.', 'I paid by card and we went home happy.'],
    tr: ['Geçen cumartesi kız kardeşimle alışveriş merkezine gittim.', 'Okul için yeni ayakkabı almak istiyordum.', 'İlk çift çok pahalıydı.', 'İkinci çift daha ucuzdu ama çok küçüktü.', 'Sonunda kendi bedenimde rahat bir çift buldum.', 'Kartla ödedim ve mutlu bir şekilde eve döndük.'],
    q: [
      ['Ne almak istiyordu?', 'Ayakkabı', 'Gömlek', 'Çanta', 1],
      ['İkinci çiftin sorunu neydi?', 'Çok küçüktü', 'Çok pahalıydı', 'Rengi kötüydü', 3],
      ['Nasıl ödedi?', 'Kartla', 'Nakit', 'Çekle', 5],
    ],
  },
  'Restoranda': {
    title: 'Doğum Günü Yemeği',
    en: ["For my mother's birthday, we went to an Italian restaurant.", 'The waiter gave us a table by the window.', 'My father ordered chicken soup and I had a salad.', 'The food was delicious.', 'For dessert, the waiter brought a cake with candles.', 'My mother was very surprised and happy.'],
    tr: ['Annemin doğum günü için bir İtalyan restoranına gittik.', 'Garson bize pencere kenarında bir masa verdi.', 'Babam tavuk çorbası sipariş etti, ben de salata yedim.', 'Yemekler çok lezzetliydi.', 'Tatlı olarak garson mumlu bir pasta getirdi.', 'Annem çok şaşırdı ve mutlu oldu.'],
    q: [
      ['Neden restorana gittiler?', 'Annesinin doğum günü için', 'Babasının işi için', 'Bir düğün için', 0],
      ['Masaları neredeydi?', 'Pencere kenarında', 'Kapının yanında', 'Bahçede', 1],
      ['Tatlı olarak ne geldi?', 'Mumlu bir pasta', 'Dondurma', 'Meyve', 4],
    ],
  },
  'Seyahat': {
    title: 'Kayıp Valiz',
    en: ['Last summer, I flew to London for a holiday.', 'The flight was delayed for two hours.', 'When I arrived, my luggage was not there.', 'I went to the information desk and gave them my address.', 'The next day, they brought my bag to the hotel.', 'After that, my holiday was perfect.'],
    tr: ["Geçen yaz tatil için Londra'ya uçtum.", 'Uçuş iki saat gecikti.', 'Vardığımda valizim orada değildi.', 'Danışma masasına gittim ve onlara adresimi verdim.', 'Ertesi gün çantamı otele getirdiler.', 'Ondan sonra tatilim mükemmeldi.'],
    q: [
      ['Uçuş ne kadar gecikti?', 'İki saat', 'Bir saat', 'Beş saat', 1],
      ['Vardığında ne sorun yaşadı?', 'Valizi yoktu', 'Pasaportunu kaybetti', 'Oteli kapalıydı', 2],
      ['Valizini ne zaman aldı?', 'Ertesi gün', 'Aynı gün', 'Bir hafta sonra', 4],
    ],
  },
  'Geçmişte Ne Yaptın?': {
    title: 'Unutulmaz Hafta Sonu',
    en: ['Last weekend, my friends and I went camping near a lake.', 'On Saturday, we swam and played games.', 'In the evening, we made a fire and cooked fish.', 'At night, it started to rain heavily.', 'We did not sleep well, but we laughed a lot.', 'It was a weekend we will never forget.'],
    tr: ['Geçen hafta sonu arkadaşlarımla bir gölün yakınında kamp yaptık.', 'Cumartesi yüzdük ve oyunlar oynadık.', 'Akşam ateş yaktık ve balık pişirdik.', 'Gece şiddetli yağmur yağmaya başladı.', 'İyi uyuyamadık ama çok güldük.', 'Hiç unutamayacağımız bir hafta sonuydu.'],
    q: [
      ['Nerede kamp yaptılar?', 'Bir gölün yakınında', 'Dağda', 'Plajda', 0],
      ['Akşam ne pişirdiler?', 'Balık', 'Tavuk', 'Çorba', 2],
      ['Gece ne oldu?', 'Şiddetli yağmur yağdı', 'Kar yağdı', 'Bir ayı geldi', 3],
    ],
  },
  'Doktorda': {
    title: 'Kötü Bir Soğuk Algınlığı',
    en: ['On Monday morning, Mert felt very sick.', 'He had a fever, a headache and a bad cough.', 'His mother made an appointment with the doctor.', 'The doctor said, "You should rest for three days."', 'She also gave him some medicine.', 'By Thursday, Mert felt much better.'],
    tr: ['Pazartesi sabahı Mert kendini çok hasta hissetti.', 'Ateşi, baş ağrısı ve kötü bir öksürüğü vardı.', 'Annesi doktordan randevu aldı.', 'Doktor "Üç gün dinlenmelisin" dedi.', 'Ona biraz da ilaç verdi.', 'Perşembeye kadar Mert çok daha iyi hissetti.'],
    q: [
      ["Mert'in hangi şikayeti YOKTU?", 'Mide ağrısı', 'Ateş', 'Öksürük', 1],
      ['Doktor kaç gün dinlenmesini söyledi?', 'Üç', 'Bir', 'Yedi', 3],
      ['Mert ne zaman iyileşti?', 'Perşembeye kadar', 'Salı günü', 'Hafta sonu', 5],
    ],
  },
  'Hobiler': {
    title: 'Gitar Dersleri',
    en: ['Two years ago, I started playing the guitar.', 'At first, it was very difficult and my fingers hurt.', 'I practised for thirty minutes every day.', 'Now I can play many songs.', 'Every Friday, I play music with my friends.', 'Next month, we are going to play at a school concert.'],
    tr: ['İki yıl önce gitar çalmaya başladım.', 'İlk başta çok zordu ve parmaklarım acıyordu.', 'Her gün otuz dakika pratik yaptım.', 'Şimdi birçok şarkı çalabiliyorum.', 'Her cuma arkadaşlarımla müzik yapıyorum.', 'Gelecek ay bir okul konserinde çalacağız.'],
    q: [
      ['Ne zaman gitara başladı?', 'İki yıl önce', 'Geçen ay', 'Beş yıl önce', 0],
      ['Her gün ne kadar pratik yaptı?', 'Otuz dakika', 'Bir saat', 'On dakika', 2],
      ['Gelecek ay ne yapacaklar?', 'Okul konserinde çalacaklar', 'Yeni gitar alacaklar', 'Ders verecekler', 5],
    ],
  },
  'Gelecek Planları': {
    title: 'Büyük Plan',
    en: ['Next summer, my family is going to visit Antalya.', 'We are going to stay in a small hotel near the beach.', 'My father will rent a car.', 'I hope the weather will be sunny.', 'My little sister wants to learn to swim.', 'I think it will be our best holiday.'],
    tr: ["Gelecek yaz ailem Antalya'yı ziyaret edecek.", 'Plajın yakınında küçük bir otelde kalacağız.', 'Babam bir araba kiralayacak.', 'Umarım hava güneşli olur.', 'Küçük kız kardeşim yüzmeyi öğrenmek istiyor.', 'Sanırım en güzel tatilimiz olacak.'],
    q: [
      ['Nereye gidecekler?', 'Antalya', 'İzmir', 'Londra', 0],
      ['Nerede kalacaklar?', 'Plaja yakın küçük bir otelde', 'Büyük bir otelde', 'Kamp alanında', 1],
      ['Kız kardeşi ne öğrenmek istiyor?', 'Yüzmeyi', 'Bisiklet sürmeyi', 'İngilizceyi', 4],
    ],
  },
  'İş Hayatı': {
    title: 'Zor Bir Pazartesi',
    en: ['On Monday, Selin arrived at the office at eight.', 'Her boss told her about an important meeting.', 'She had to finish a project before the meeting.', 'She worked very hard and sent the email at eleven.', 'The meeting went very well.', 'Her boss said, "Great job, Selin!"'],
    tr: ['Pazartesi Selin ofise saat sekizde geldi.', 'Patronu ona önemli bir toplantıdan bahsetti.', 'Toplantıdan önce bir projeyi bitirmesi gerekiyordu.', 'Çok sıkı çalıştı ve e-postayı saat on birde gönderdi.', 'Toplantı çok iyi geçti.', 'Patronu "Harika iş, Selin!" dedi.'],
    q: [
      ['Selin ofise saat kaçta geldi?', 'Sekizde', 'Dokuzda', 'On birde', 0],
      ['Toplantıdan önce ne yapması gerekiyordu?', 'Bir projeyi bitirmesi', 'Bir müşteriyi araması', 'Rapor yazdırması', 2],
      ['Toplantı nasıl geçti?', 'Çok iyi', 'Kötü', 'İptal edildi', 4],
    ],
  },
  'Ulaşım ve Biletler': {
    title: 'Yanlış Tren',
    en: ['Yesterday, I wanted to go to Izmir by train.', 'I bought a return ticket at the station.', 'I was in a hurry and got on the wrong train!', 'The ticket inspector told me to change at the next station.', 'I waited for forty minutes for the right train.', 'Next time, I will check the platform number.'],
    tr: ["Dün trenle İzmir'e gitmek istedim.", 'İstasyonda gidiş dönüş bilet aldım.', 'Acelem vardı ve yanlış trene bindim!', 'Kondüktör bir sonraki istasyonda aktarma yapmamı söyledi.', 'Doğru tren için kırk dakika bekledim.', 'Bir dahaki sefere peron numarasını kontrol edeceğim.'],
    q: [
      ['Nasıl bir bilet aldı?', 'Gidiş dönüş', 'Tek yön', 'Öğrenci bileti', 1],
      ['Ne hata yaptı?', 'Yanlış trene bindi', 'Biletini kaybetti', 'Treni kaçırdı', 2],
      ['Doğru treni ne kadar bekledi?', 'Kırk dakika', 'Bir saat', 'On dakika', 4],
    ],
  },
  'Ev İşleri ve Kiralama': {
    title: 'Ev Arkadaşları',
    en: ['Ece and Zeynep share a flat in the city centre.', 'The rent is high, so they share all the costs.', 'Ece usually cooks dinner.', 'Zeynep does the dishes and the laundry.', 'Every Saturday, they clean the flat together.', 'They are not only flatmates; they are best friends.'],
    tr: ['Ece ve Zeynep şehir merkezinde bir daireyi paylaşıyor.', 'Kira yüksek, bu yüzden bütün masrafları paylaşıyorlar.', 'Akşam yemeğini genellikle Ece pişiriyor.', 'Bulaşıkları ve çamaşırları Zeynep yıkıyor.', 'Her cumartesi daireyi birlikte temizliyorlar.', 'Onlar sadece ev arkadaşı değil, en iyi arkadaşlar.'],
    q: [
      ['Neden masrafları paylaşıyorlar?', 'Kira yüksek olduğu için', 'Ev büyük olduğu için', 'Ece çalışmadığı için', 1],
      ['Akşam yemeğini genellikle kim pişiriyor?', 'Ece', 'Zeynep', 'Anneleri', 2],
      ['Daireyi ne zaman birlikte temizliyorlar?', 'Her cumartesi', 'Her gün', 'Ayda bir', 4],
    ],
  },
  'Teknoloji': {
    title: 'Telefonsuz Bir Gün',
    en: ['Last week, my phone broke and I had to live without it for a day.', 'In the morning, I did not know the time because I had no alarm.', 'I was late for school!', 'At lunch, I talked to my friends instead of checking social media.', 'In the evening, I read a book and went to bed early.', 'It was difficult, but it was also relaxing.'],
    tr: ['Geçen hafta telefonum bozuldu ve bir gün onsuz yaşamak zorunda kaldım.', 'Sabah alarmım olmadığı için saati bilmiyordum.', 'Okula geç kaldım!', 'Öğle yemeğinde sosyal medyaya bakmak yerine arkadaşlarımla konuştum.', 'Akşam kitap okudum ve erken yattım.', 'Zordu ama aynı zamanda rahatlatıcıydı.'],
    q: [
      ['Neden telefonsuz kaldı?', 'Telefonu bozulduğu için', 'Telefonunu kaybettiği için', 'Annesi aldığı için', 0],
      ['Sabah ne oldu?', 'Okula geç kaldı', 'Erken uyandı', 'Kahvaltıyı kaçırdı', 2],
      ['Akşam ne yaptı?', 'Kitap okudu ve erken yattı', 'Film izledi', 'Oyun oynadı', 4],
    ],
  },
  'Bankada ve Postanede': {
    title: 'Yurt Dışına Paket',
    en: ['My cousin lives in Germany, and her birthday is next week.', 'I bought her a book and a scarf.', 'At the post office, I put them in a small parcel.', 'The officer asked me to fill in a form and write the address.', 'Sending it by express mail cost two hundred lira.', 'The parcel arrived in four days, just in time!'],
    tr: ["Kuzenim Almanya'da yaşıyor ve gelecek hafta doğum günü.", 'Ona bir kitap ve bir atkı aldım.', 'Postanede onları küçük bir pakete koydum.', 'Görevli bir form doldurmamı ve adresi yazmamı istedi.', 'Ekspres postayla göndermek iki yüz lira tuttu.', 'Paket dört günde, tam zamanında ulaştı!'],
    q: [
      ['Kuzeni nerede yaşıyor?', "Almanya'da", "İtalya'da", "İzmir'de", 0],
      ['Görevli ne istedi?', 'Form doldurmasını', 'Kimlik kartını', 'Nakit ödemesini', 3],
      ['Paket kaç günde ulaştı?', 'Dört', 'İki', 'On', 5],
    ],
  },
  'Mutfakta': {
    title: 'Büyükannemin Tarifi',
    en: ['My grandmother makes the best vegetable soup.', 'First, she cuts two onions and some carrots.', 'Then she boils them in water for twenty minutes.', 'She adds a little salt and some lemon juice.', 'Finally, she mixes everything well.', 'It is easy, healthy and delicious.'],
    tr: ['Büyükannem en güzel sebze çorbasını yapar.', 'Önce iki soğan ve biraz havuç doğrar.', 'Sonra onları yirmi dakika suda kaynatır.', 'Biraz tuz ve biraz limon suyu ekler.', 'Son olarak her şeyi iyice karıştırır.', 'Kolay, sağlıklı ve lezzetli.'],
    q: [
      ['Büyükanne hangi çorbayı yapar?', 'Sebze çorbası', 'Tavuk çorbası', 'Mercimek çorbası', 0],
      ['Sebzeleri ne kadar kaynatır?', 'Yirmi dakika', 'Beş dakika', 'Bir saat', 2],
      ['Çorbaya ne ekler?', 'Tuz ve limon suyu', 'Şeker ve süt', 'Peynir', 3],
    ],
  },
  'Davetler ve Buluşmalar': {
    title: 'Sürpriz Parti',
    en: ["It was Burak's birthday on Friday.", "His friends planned a surprise party at Ece's house.", 'They invited twenty people and bought a big cake.', 'Burak thought they were going to the cinema.', 'When he opened the door, everyone shouted, "Surprise!"', 'Burak said it was the best birthday of his life.'],
    tr: ["Cuma günü Burak'ın doğum günüydü.", "Arkadaşları Ece'nin evinde sürpriz bir parti planladı.", 'Yirmi kişiyi davet ettiler ve büyük bir pasta aldılar.', 'Burak sinemaya gideceklerini sanıyordu.', 'Kapıyı açtığında herkes "Sürpriz!" diye bağırdı.', 'Burak hayatının en güzel doğum günü olduğunu söyledi.'],
    q: [
      ['Parti nerede yapıldı?', "Ece'nin evinde", "Burak'ın evinde", 'Sinemada', 1],
      ['Kaç kişi davet edildi?', 'Yirmi', 'On', 'Elli', 2],
      ['Burak nereye gittiklerini sanıyordu?', 'Sinemaya', 'Restorana', 'Parka', 3],
    ],
  },

  // ======================= B1 =======================
  'Telefonda': {
    title: 'A Missed Call',
    en: ['Yesterday, Kerem missed an important call from a company.', 'They wanted to invite him to a job interview.', 'When he called back, the manager was not available.', 'The receptionist asked if he wanted to leave a message.', 'Kerem left his number and waited all afternoon.', "Finally, the manager called him back at five o'clock."],
    tr: ['Dün Kerem bir şirketten gelen önemli bir aramayı kaçırdı.', 'Onu bir iş görüşmesine davet etmek istiyorlardı.', 'Geri aradığında müdür müsait değildi.', 'Resepsiyonist mesaj bırakmak isteyip istemediğini sordu.', 'Kerem numarasını bıraktı ve bütün öğleden sonra bekledi.', 'Sonunda müdür onu saat beşte geri aradı.'],
    q: [
      ['Why did the company call Kerem?', 'To invite him to an interview', 'To sell him something', 'To cancel a meeting', 1],
      ["Why couldn't Kerem talk to the manager at first?", 'The manager was not available', 'His phone was broken', 'He had the wrong number', 2],
      ['When did the manager call back?', "At five o'clock", 'The next morning', 'At lunchtime', 5],
    ],
  },
  'Fikrini Söyle': {
    title: 'School Uniforms',
    en: ['In our class, we discussed whether students should wear uniforms.', 'Ahmet thinks uniforms are a good idea because everyone looks equal.', 'Zeynep disagrees; in her opinion, students should be free to choose.', 'Our teacher said both sides had good points.', 'In the end, most students voted against uniforms.', 'However, the school will make the final decision.'],
    tr: ['Sınıfımızda öğrencilerin üniforma giyip giymemesi gerektiğini tartıştık.', 'Ahmet herkes eşit göründüğü için üniformaların iyi bir fikir olduğunu düşünüyor.', 'Zeynep katılmıyor; ona göre öğrenciler seçmekte özgür olmalı.', 'Öğretmenimiz iki tarafın da haklı noktaları olduğunu söyledi.', 'Sonunda çoğu öğrenci üniformaya karşı oy verdi.', 'Ancak son kararı okul verecek.'],
    q: [
      ['Why does Ahmet support uniforms?', 'Everyone looks equal', 'They are cheap', 'They are comfortable', 1],
      ['How did most students vote?', 'Against uniforms', 'For uniforms', 'They did not vote', 4],
      ['Who will make the final decision?', 'The school', 'The students', 'The parents', 5],
    ],
  },
  'Rica ve Öneri': {
    title: 'A Favour for a Neighbour',
    en: ['Mrs Yilmaz, my neighbour, knocked on my door last night.', 'She asked me if I could do her a favour.', 'She was going away for a week and needed someone to water her plants.', 'I said, "No problem, I\'d be happy to help."', 'She gave me her keys and a box of chocolates.', 'In return, she promised to look after my cat next time.'],
    tr: ['Komşum Bayan Yılmaz dün gece kapımı çaldı.', 'Ona bir iyilik yapıp yapamayacağımı sordu.', 'Bir haftalığına uzağa gidiyordu ve bitkilerini sulayacak birine ihtiyacı vardı.', '"Sorun değil, yardım etmekten memnuniyet duyarım" dedim.', 'Bana anahtarlarını ve bir kutu çikolata verdi.', 'Karşılığında bir dahaki sefere kedime bakacağına söz verdi.'],
    q: [
      ['What did Mrs Yilmaz need?', 'Someone to water her plants', 'Someone to feed her dog', 'A lift to the airport', 2],
      ['How long was she going away for?', 'A week', 'A month', 'A weekend', 2],
      ['What did she promise in return?', 'To look after the cat next time', 'To bring a gift from her trip', 'To pay for the help', 5],
    ],
  },
  'Deneyimler': {
    title: 'First Time Abroad',
    en: ['Have you ever travelled to another country alone?', 'I had never been abroad until last year.', 'Then I spent a month in Ireland to improve my English.', 'I have never met such friendly people.', 'Since then, I have visited three more countries.', 'Travelling has completely changed the way I see the world.'],
    tr: ['Hiç tek başına başka bir ülkeye seyahat ettin mi?', 'Geçen yıla kadar hiç yurt dışına çıkmamıştım.', "Sonra İngilizcemi geliştirmek için bir ay İrlanda'da kaldım.", 'Hiç bu kadar cana yakın insanlarla tanışmadım.', 'O zamandan beri üç ülke daha ziyaret ettim.', 'Seyahat etmek dünyaya bakışımı tamamen değiştirdi.'],
    q: [
      ['Why did the writer go to Ireland?', 'To improve their English', 'To visit family', 'For a job', 2],
      ['How long did they stay there?', 'A month', 'A week', 'A year', 2],
      ['How many more countries have they visited since then?', 'Three', 'One', 'Ten', 4],
    ],
  },
  'Sorunlar ve Şikayetler': {
    title: 'The Wrong Room',
    en: ['When we arrived at the hotel, we were tired after a long journey.', 'Unfortunately, our room was dirty and very noisy.', 'The air conditioner was also broken.', 'I went to reception and asked to speak to the manager.', 'She apologised and gave us a bigger room with a sea view.', 'In the end, it was the best room in the hotel.'],
    tr: ['Otele vardığımızda uzun bir yolculuktan sonra yorgunduk.', 'Maalesef odamız kirli ve çok gürültülüydü.', 'Klima da bozuktu.', 'Resepsiyona gittim ve müdürle konuşmak istedim.', 'Müdür özür diledi ve bize deniz manzaralı daha büyük bir oda verdi.', 'Sonunda otelin en iyi odasıydı.'],
    q: [
      ['What was NOT a problem with the first room?', 'It was too small', 'It was dirty', 'It was noisy', 1],
      ['Who did the writer ask to speak to?', 'The manager', 'The cleaner', 'A taxi driver', 3],
      ['What did they get in the end?', 'A bigger room with a sea view', 'A full refund', 'A free dinner', 4],
    ],
  },
  'Sohbet': {
    title: 'Meeting on the Train',
    en: ['On a long train journey, I started chatting with the woman next to me.', 'Her name was Clara and she was from Canada.', 'She was travelling around Turkey for three months.', 'We talked about books, food and our hometowns.', 'It turned out that her sister lived in my street!', 'We exchanged numbers and promised to keep in touch.'],
    tr: ['Uzun bir tren yolculuğunda yanımdaki kadınla sohbet etmeye başladım.', "Adı Clara'ydı ve Kanadalıydı.", "Üç aylığına Türkiye'yi geziyordu.", 'Kitaplar, yemekler ve memleketlerimiz hakkında konuştuk.', 'Meğer kız kardeşi benim sokağımda yaşıyormuş!', 'Numaralarımızı paylaştık ve iletişimde kalmaya söz verdik.'],
    q: [
      ['Where was Clara from?', 'Canada', 'England', 'Spain', 1],
      ['How long was she travelling in Turkey?', 'Three months', 'Three weeks', 'A year', 2],
      ['What surprising thing did they discover?', "Her sister lived in the writer's street", 'They had the same birthday', 'They worked at the same company', 4],
    ],
  },
  'Hayaller ve Şartlar': {
    title: 'If I Won the Lottery',
    en: ['People often ask me what I would do if I won the lottery.', 'First, I would buy a small house by the sea for my parents.', 'Then I would travel around the world for a year.', "I wouldn't stop working, though, because I love my job.", 'I would also give some money to animal shelters.', 'Of course, I would have to buy a ticket first!'],
    tr: ['İnsanlar sık sık piyangoyu kazansam ne yapacağımı sorar.', 'Önce annemle babama deniz kenarında küçük bir ev alırdım.', 'Sonra bir yıl boyunca dünyayı gezerdim.', 'Yine de çalışmayı bırakmazdım çünkü işimi seviyorum.', 'Biraz parayı da hayvan barınaklarına bağışlardım.', 'Tabii önce bir bilet almam gerekirdi!'],
    q: [
      ['What would the writer buy first?', 'A house for their parents', 'A new car', 'A boat', 1],
      ["Why wouldn't they stop working?", 'They love their job', 'They would need more money', "Their boss wouldn't let them", 3],
      ['What is the joke at the end?', "They haven't bought a ticket", 'They have already won', 'They hate travelling', 5],
    ],
  },
  'İş Görüşmesi': {
    title: 'The Interview',
    en: ['Last Tuesday, Elif had an interview for a marketing position.', 'She arrived fifteen minutes early and felt a little nervous.', 'The manager asked her about her strengths and weaknesses.', 'Elif explained that she was organised and good at working in a team.', 'At the end, she asked when they would make a decision.', 'Two days later, they called to say that she had got the job.'],
    tr: ["Geçen salı Elif'in bir pazarlama pozisyonu için mülakatı vardı.", 'On beş dakika erken geldi ve biraz gergin hissetti.', 'Müdür ona güçlü ve zayıf yönlerini sordu.', 'Elif düzenli olduğunu ve ekip çalışmasında iyi olduğunu açıkladı.', 'Sonunda ne zaman karar vereceklerini sordu.', 'İki gün sonra işi aldığını söylemek için aradılar.'],
    q: [
      ['What position did Elif apply for?', 'Marketing', 'Sales manager', 'Teacher', 0],
      ['How did she feel before the interview?', 'A little nervous', 'Very relaxed', 'Angry', 1],
      ['When did she hear the result?', 'Two days later', 'The same day', 'A week later', 5],
    ],
  },
  'Doğa ve Çevre': {
    title: 'The Beach Clean-Up',
    en: ['Every spring, our town organises a beach clean-up.', 'This year, more than two hundred volunteers took part.', 'We collected bags full of plastic bottles and old fishing nets.', 'A scientist explained how plastic harms sea animals.', 'Many people promised to use less plastic in the future.', 'The beach looked beautiful at the end of the day.'],
    tr: ['Her bahar kasabamız bir sahil temizliği düzenler.', 'Bu yıl iki yüzden fazla gönüllü katıldı.', 'Plastik şişeler ve eski balık ağlarıyla dolu torbalar topladık.', 'Bir bilim insanı plastiğin deniz hayvanlarına nasıl zarar verdiğini anlattı.', 'Birçok kişi gelecekte daha az plastik kullanacağına söz verdi.', 'Günün sonunda sahil çok güzel görünüyordu.'],
    q: [
      ['How often does the town organise the clean-up?', 'Every spring', 'Every month', 'Every summer', 0],
      ['How many volunteers took part this year?', 'More than two hundred', 'About fifty', 'A thousand', 1],
      ['What did the scientist talk about?', 'How plastic harms sea animals', 'How to catch fish', 'The history of the town', 3],
    ],
  },
  'Kültür ve Kutlamalar': {
    title: 'Bayram Morning',
    en: ['On the first morning of Bayram, we always wake up early.', 'We put on our new clothes and visit our grandparents.', 'It is a tradition to kiss the hands of older relatives.', 'The children receive sweets and sometimes a little money.', 'In the afternoon, the whole family has a big lunch together.', 'When I was a child, it used to be my favourite day of the year.'],
    tr: ['Bayramın ilk sabahı her zaman erken kalkarız.', 'Yeni kıyafetlerimizi giyer ve büyükanne ile büyükbabamızı ziyaret ederiz.', 'Yaşlı akrabaların elini öpmek bir gelenektir.', 'Çocuklar şeker ve bazen biraz para alır.', 'Öğleden sonra bütün aile birlikte büyük bir öğle yemeği yer.', 'Ben çocukken yılın en sevdiğim günüydü.'],
    q: [
      ['What do they wear on the first morning?', 'New clothes', 'Old clothes', 'School uniforms', 1],
      ['What tradition is mentioned?', 'Kissing the hands of older relatives', 'Giving flowers', 'Dancing in the street', 2],
      ['What do the children receive?', 'Sweets and sometimes money', 'Books', 'New phones', 3],
    ],
  },
  'Haberler ve Olaylar': {
    title: 'The Storm',
    en: ['Last night, a strong storm hit the city.', 'I was watching TV when suddenly the lights went out.', 'The wind was so strong that several trees fell onto the roads.', 'Luckily, nobody was injured.', 'This morning, the police closed the main road for a few hours.', 'According to the news, the weather will be calm tomorrow.'],
    tr: ['Dün gece şehri güçlü bir fırtına vurdu.', 'Televizyon izliyordum ki aniden ışıklar söndü.', 'Rüzgar o kadar şiddetliydi ki birkaç ağaç yollara devrildi.', 'Neyse ki kimse yaralanmadı.', 'Bu sabah polis ana yolu birkaç saatliğine kapattı.', 'Haberlere göre yarın hava sakin olacak.'],
    q: [
      ['What was the writer doing when the lights went out?', 'Watching TV', 'Sleeping', 'Cooking', 1],
      ['Was anyone injured?', 'No, nobody was injured', 'Yes, two people', 'Yes, many people', 3],
      ['What will the weather be like tomorrow?', 'Calm', 'Stormy', 'Snowy', 5],
    ],
  },
  'Sağlıklı Yaşam': {
    title: 'A New Routine',
    en: ['A year ago, Can used to feel tired all the time.', 'He ate fast food and rarely did any exercise.', 'His doctor told him to change his habits.', 'Now he walks to work and eats more vegetables.', 'He has also stopped drinking sugary drinks.', 'He has lost eight kilos and feels full of energy.'],
    tr: ['Bir yıl önce Can sürekli yorgun hissederdi.', 'Fast food yer ve nadiren egzersiz yapardı.', 'Doktoru ona alışkanlıklarını değiştirmesini söyledi.', 'Şimdi işe yürüyerek gidiyor ve daha çok sebze yiyor.', 'Şekerli içecekleri içmeyi de bıraktı.', 'Sekiz kilo verdi ve enerji dolu hissediyor.'],
    q: [
      ['How did Can feel a year ago?', 'Tired all the time', 'Happy and healthy', 'Stressed at work', 0],
      ['How does he go to work now?', 'He walks', 'By car', 'By bus', 3],
      ['How much weight has he lost?', 'Eight kilos', 'Three kilos', 'Twenty kilos', 5],
    ],
  },
  'Film ve Kitaplar': {
    title: 'A Book Review',
    en: ['I have just finished reading a novel called The Silent River.', 'It is set in a small village in the mountains.', 'The main character is a young teacher who discovers an old secret.', "The plot is exciting, and I couldn't stop reading.", 'However, I found the ending a bit disappointing.', 'I would still recommend it to anyone who likes mysteries.'],
    tr: ['Az önce Sessiz Nehir adında bir romanı okumayı bitirdim.', 'Hikâye dağlarda küçük bir köyde geçiyor.', 'Ana karakter eski bir sırrı keşfeden genç bir öğretmen.', 'Olay örgüsü heyecan verici, okumayı bırakamadım.', 'Ancak sonunu biraz hayal kırıklığı yaratıcı buldum.', 'Yine de gizemleri seven herkese tavsiye ederim.'],
    q: [
      ['Where is the story set?', 'In a mountain village', 'In a big city', 'On an island', 1],
      ['Who is the main character?', 'A young teacher', 'An old doctor', 'A police officer', 2],
      ['What did the writer think of the ending?', 'A bit disappointing', 'Perfect', 'Very funny', 4],
    ],
  },

  // ======================= B2 =======================
  'Toplantı ve Müzakere': {
    title: 'The Negotiation',
    en: ['Our company had been trying to sign a contract with a large client for months.', 'During the final meeting, they asked for a fifteen percent discount.', 'We explained that such a discount would put the project over budget.', 'After a long discussion, both sides agreed to a compromise of eight percent.', 'In return, the client promised to sign a three-year contract.', 'Everyone left the meeting satisfied with the deal.'],
    tr: ['Şirketimiz aylardır büyük bir müşteriyle sözleşme imzalamaya çalışıyordu.', 'Son toplantıda yüzde on beş indirim istediler.', 'Böyle bir indirimin projeyi bütçenin üzerine çıkaracağını açıkladık.', 'Uzun bir tartışmadan sonra iki taraf da yüzde sekizlik bir orta yolda anlaştı.', 'Karşılığında müşteri üç yıllık bir sözleşme imzalamaya söz verdi.', 'Herkes toplantıdan anlaşmadan memnun ayrıldı.'],
    q: [
      ['What discount did the client first ask for?', 'Fifteen percent', 'Eight percent', 'Three percent', 1],
      ["Why couldn't the company accept the first request?", 'It would put the project over budget', 'The manager was absent', 'The contract was illegal', 2],
      ['What did the client offer in return?', 'A three-year contract', 'Immediate payment', 'A bigger team', 4],
    ],
  },
  'Teknoloji ve Toplum': {
    title: 'Digital Detox',
    en: ['According to a recent survey, the average teenager spends over seven hours a day online.', 'Many experts claim that this has a negative effect on sleep and concentration.', 'On the other hand, the internet gives young people access to endless information.', "Some schools have started 'digital detox' weeks, during which phones are not allowed.", 'Surprisingly, most students said they felt more relaxed afterwards.', 'Perhaps the key is not to avoid technology, but to use it more wisely.'],
    tr: ['Yakın tarihli bir ankete göre ortalama bir genç günde yedi saatten fazla internette vakit geçiriyor.', 'Birçok uzman bunun uyku ve konsantrasyon üzerinde olumsuz bir etkisi olduğunu iddia ediyor.', 'Öte yandan internet gençlere sonsuz bilgiye erişim sağlıyor.', "Bazı okullar telefonların yasak olduğu 'dijital detoks' haftaları başlattı.", 'Şaşırtıcı bir şekilde çoğu öğrenci sonrasında daha rahat hissettiğini söyledi.', 'Belki de önemli olan teknolojiden kaçınmak değil, onu daha akıllıca kullanmaktır.'],
    q: [
      ['How long does the average teenager spend online each day?', 'Over seven hours', 'About two hours', 'Less than an hour', 0],
      ['What happens during a digital detox week?', 'Phones are not allowed', 'Lessons are online only', 'Students get new phones', 3],
      ["What is the writer's conclusion?", 'We should use technology more wisely', 'We should ban the internet', 'Teenagers should spend more time online', 5],
    ],
  },
  'Pişmanlıklar ve Varsayımlar': {
    title: "The Job I Didn't Take",
    en: ['Five years ago, I was offered a job in Singapore.', 'It was a great opportunity, but I was afraid of leaving my family.', 'In the end, I turned it down and stayed in my hometown.', 'For a long time, I regretted that decision.', 'If I had accepted, I would have learned so much more.', 'However, I have since realised that every choice leads somewhere unexpected.'],
    tr: ["Beş yıl önce bana Singapur'da bir iş teklif edildi.", 'Harika bir fırsattı ama ailemden ayrılmaktan korkuyordum.', 'Sonunda teklifi reddettim ve memleketimde kaldım.', 'Uzun süre bu karardan pişmanlık duydum.', 'Kabul etseydim çok daha fazla şey öğrenirdim.', 'Ancak o zamandan beri her seçimin beklenmedik bir yere çıktığını fark ettim.'],
    q: [
      ['Why did the writer refuse the job?', 'They were afraid of leaving their family', 'The salary was too low', "They didn't speak English", 1],
      ['How did they feel about the decision for a long time?', 'They regretted it', 'They were proud of it', 'They forgot about it', 3],
      ['What have they realised since then?', 'Every choice leads somewhere unexpected', 'They should move abroad now', 'Jobs abroad are always better', 5],
    ],
  },
  'Eğitim ve Kariyer': {
    title: 'Choosing a University',
    en: ['Choosing a university is one of the most important decisions a student makes.', 'Melis was considering two options: medicine in Ankara or engineering abroad.', 'Her parents wanted her to stay close to home.', 'However, she had been offered a scholarship that would cover all her costs abroad.', 'After weighing the pros and cons, she decided to go abroad.', 'By the time she graduates, she will have lived in another country for four years.'],
    tr: ['Üniversite seçmek bir öğrencinin verdiği en önemli kararlardan biridir.', "Melis iki seçeneği düşünüyordu: Ankara'da tıp ya da yurt dışında mühendislik.", 'Ailesi evin yakınında kalmasını istiyordu.', 'Ancak ona yurt dışındaki tüm masraflarını karşılayacak bir burs teklif edilmişti.', 'Artıları ve eksileri tarttıktan sonra yurt dışına gitmeye karar verdi.', 'Mezun olduğunda dört yıl başka bir ülkede yaşamış olacak.'],
    q: [
      ["What were Melis's two options?", 'Medicine in Ankara or engineering abroad', 'Law or economics', 'Working or studying', 1],
      ['What did her parents want?', 'For her to stay close to home', 'For her to study medicine abroad', 'For her to start working', 2],
      ['What helped her decide?', 'A scholarship covering her costs abroad', "Her friends' advice", 'Low exam results', 3],
    ],
  },
  'Seyahat Hikâyeleri': {
    title: 'Lost in the Mountains',
    en: ['Last autumn, my friend and I went hiking in a remote area of the mountains.', 'We had been walking for six hours when we realised we were lost.', 'Our phones had no signal and it was getting dark.', 'Fortunately, we came across a small village, where a local family invited us in.', 'They gave us dinner and a warm place to sleep.', 'It was frightening at first, but it became the most unforgettable night of the trip.'],
    tr: ['Geçen sonbahar arkadaşımla dağların ıssız bir bölgesinde yürüyüşe çıktık.', 'Kaybolduğumuzu fark ettiğimizde altı saattir yürüyorduk.', 'Telefonlarımız çekmiyordu ve hava kararıyordu.', 'Neyse ki küçük bir köye rastladık ve yerel bir aile bizi içeri davet etti.', 'Bize akşam yemeği ve uyumak için sıcak bir yer verdiler.', 'İlk başta korkutucuydu ama gezinin en unutulmaz gecesi oldu.'],
    q: [
      ['How long had they been walking when they realised they were lost?', 'Six hours', 'Two hours', 'A whole day', 1],
      ["Why couldn't they call for help?", 'Their phones had no signal', 'Their phones were stolen', "They didn't have phones", 2],
      ['Who helped them?', 'A local family', 'The police', 'Other hikers', 3],
    ],
  },
  'Tartışma ve İkna': {
    title: 'The Four-Day Week',
    en: ['Should companies switch to a four-day working week?', 'Supporters claim that employees would be happier and more productive.', 'Moreover, there is evidence that sick days decrease when people work less.', 'Critics, however, argue that some businesses cannot afford to close for an extra day.', 'Despite these concerns, several countries have started testing the idea.', 'Therefore, we may soon have the data to settle the debate.'],
    tr: ['Şirketler dört günlük çalışma haftasına geçmeli mi?', 'Destekçiler çalışanların daha mutlu ve daha verimli olacağını iddia ediyor.', 'Üstelik insanlar daha az çalıştığında hastalık izinlerinin azaldığına dair kanıtlar var.', 'Ancak eleştirmenler bazı işletmelerin fazladan bir gün kapanmayı göze alamayacağını savunuyor.', 'Bu endişelere rağmen birkaç ülke fikri test etmeye başladı.', 'Bu nedenle yakında tartışmayı sonuçlandıracak verilere sahip olabiliriz.'],
    q: [
      ['What do supporters claim?', 'Employees would be happier and more productive', 'Companies would earn less', 'People would work longer hours', 1],
      ["What is the critics' main argument?", "Some businesses can't afford an extra day off", 'Workers would be bored', 'It is against the law', 3],
      ['What have several countries started doing?', 'Testing the idea', 'Banning the idea', 'Paying workers more', 4],
    ],
  },
  'Resmi Yazışma': {
    title: 'A Formal Complaint',
    en: ['Dear Sir or Madam, I am writing regarding the laptop I ordered on 3 March.', 'Although I paid for express delivery, the parcel arrived ten days late.', 'Moreover, the screen was damaged when I opened the box.', 'I contacted your customer service twice, but nobody responded.', 'I would be grateful if you could replace the laptop or refund my money.', 'I look forward to hearing from you. Yours faithfully, Ali Demir.'],
    tr: ["Sayın Yetkili, 3 Mart'ta sipariş ettiğim dizüstü bilgisayarla ilgili yazıyorum.", 'Ekspres teslimat için ödeme yapmama rağmen paket on gün geç geldi.', 'Üstelik kutuyu açtığımda ekran hasarlıydı.', 'Müşteri hizmetlerinizle iki kez iletişime geçtim ama kimse yanıt vermedi.', 'Bilgisayarı değiştirir ya da paramı iade ederseniz minnettar olurum.', 'Sizden haber almayı bekliyorum. Saygılarımla, Ali Demir.'],
    q: [
      ['What is the email about?', 'A laptop order', 'A hotel booking', 'A job application', 0],
      ['What was wrong with the laptop?', 'The screen was damaged', 'It was the wrong colour', 'The battery was missing', 2],
      ['What does Ali want?', 'A replacement or a refund', 'A discount on his next order', 'A meeting with the manager', 4],
    ],
  },
  'Para ve Ekonomi': {
    title: 'Saving for the Future',
    en: ['When Defne started her first job, she spent almost all of her income.', 'She could never afford a holiday, and she even had some credit card debt.', 'Then a colleague advised her to save at least ten percent of her salary.', 'At first, it was hard, but she soon got used to it.', 'She also started investing small amounts every month.', 'Three years later, she has paid off her debt and saved enough for a trip to Japan.'],
    tr: ['Defne ilk işine başladığında gelirinin neredeyse tamamını harcıyordu.', 'Hiçbir zaman tatile gücü yetmiyordu, hatta biraz kredi kartı borcu bile vardı.', 'Sonra bir iş arkadaşı ona maaşının en az yüzde onunu biriktirmesini tavsiye etti.', 'İlk başta zordu ama kısa sürede alıştı.', 'Her ay küçük miktarlarla yatırım yapmaya da başladı.', 'Üç yıl sonra borcunu kapattı ve Japonya gezisi için yeterince para biriktirdi.'],
    q: [
      ["What was Defne's problem at first?", 'She spent almost all her income', 'She had no job', 'Her salary was too high', 0],
      ['What did her colleague advise?', 'Saving at least ten percent of her salary', 'Changing her job', 'Taking out a loan', 2],
      ['What has she achieved after three years?', 'Paid off her debt and saved for a trip', 'Bought a house', 'Opened her own company', 5],
    ],
  },
};

UNITS.forEach(u => { if (STORIES[u.title]) u.story = STORIES[u.title]; });
