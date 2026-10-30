// Dilbaz — ek ünitelerin okuma parçaları
// q: [soru, doğru cevap, yanlış 1, yanlış 2, kanıt cümlesinin sırası]
// A1/A2'de sorular Türkçe, B1 ve üstünde İngilizcedir.

const STORIES_X = {
  // ======================= A1 =======================
  'Soru Kelimeleri': {
    title: 'Yeni Öğrenci',
    en: ['Who is the new student?', 'Her name is Lina.', 'Where does she live?', 'She lives near the school.', 'Why is she here?', 'Her family works in this city.'],
    tr: ['Yeni öğrenci kim?', 'Onun adı Lina.', 'Nerede yaşıyor?', 'Okulun yakınında yaşıyor.', 'Neden burada?', 'Ailesi bu şehirde çalışıyor.'],
    q: [
      ['Yeni öğrencinin adı ne?', 'Lina', 'Emma', 'Elif', 1],
      ['Lina nerede yaşıyor?', 'Okulun yakınında', 'Hastanenin yakınında', 'Köyde', 3],
      ['Lina neden bu şehirde?', 'Ailesi burada çalışıyor', 'Tatil için geldi', 'Büyükannesi burada', 5],
    ],
  },
  'Olumsuz Cümleler': {
    title: 'Farklı İki Kardeş',
    en: ['Sam and Tom are brothers.', 'Sam eats meat, but Tom does not.', 'Tom plays football, but Sam does not.', 'Sam does not like sports.', 'He watches films at home.', 'They do not agree, but they are happy.'],
    tr: ['Sam ve Tom kardeş.', 'Sam et yer ama Tom yemez.', 'Tom futbol oynar ama Sam oynamaz.', 'Sam spordan hoşlanmaz.', 'Evde film izler.', 'Anlaşamazlar ama mutludurlar.'],
    q: [
      ['Kim et yemiyor?', 'Tom', 'Sam', 'İkisi de', 1],
      ['Sam neyi sevmiyor?', 'Sporu', 'Filmleri', 'Eti', 3],
      ['Sam evde ne yapar?', 'Film izler', 'Futbol oynar', 'Yemek yapar', 4],
    ],
  },
  'Bu, Şu ve Sahiplik': {
    title: 'Kayıp Şemsiye',
    en: ['This is a black umbrella.', 'Is it yours, Ali?', 'No, it is not mine.', "I think it is my sister's umbrella.", 'That red wallet is mine.', 'Those keys are my father\'s.'],
    tr: ['Bu siyah bir şemsiye.', 'Senin mi, Ali?', 'Hayır, benim değil.', 'Sanırım kız kardeşimin şemsiyesi.', 'Şu kırmızı cüzdan benim.', 'Şu anahtarlar babamın.'],
    q: [
      ['Şemsiye ne renk?', 'Siyah', 'Kırmızı', 'Mavi', 0],
      ['Şemsiye kimin olabilir?', "Ali'nin kız kardeşinin", "Ali'nin", "Ali'nin babasının", 3],
      ['Anahtarlar kimin?', "Ali'nin babasının", "Ali'nin", 'Kız kardeşinin', 5],
    ],
  },
  'Şu An Ne Yapıyorsun?': {
    title: 'Parkta Bir Gün',
    en: ['It is a sunny day.', 'I am sitting in the park.', 'Some children are running.', 'A man is walking with his dog.', 'Two girls are talking and laughing.', 'I am listening to music.'],
    tr: ['Güneşli bir gün.', 'Parkta oturuyorum.', 'Bazı çocuklar koşuyor.', 'Bir adam köpeğiyle yürüyor.', 'İki kız konuşup gülüyor.', 'Müzik dinliyorum.'],
    q: [
      ['Anlatan kişi nerede?', 'Parkta', 'Okulda', 'Evde', 1],
      ['Adam ne yapıyor?', 'Köpeğiyle yürüyor', 'Koşuyor', 'Şarkı söylüyor', 3],
      ['Anlatan kişi ne dinliyor?', 'Müzik', 'Haber', 'Ders', 5],
    ],
  },
  'Yapabilirim': {
    title: 'Yetenek Yarışması',
    en: ['Today is the school talent show.', 'Ela can sing very well.', 'Mert can jump very high.', 'I cannot sing, and I cannot jump.', 'But I can play the guitar.', 'Everyone can come and watch.'],
    tr: ['Bugün okulun yetenek yarışması var.', 'Ela çok iyi şarkı söyleyebilir.', 'Mert çok yükseğe zıplayabilir.', 'Ben şarkı söyleyemem ve zıplayamam.', 'Ama gitar çalabilirim.', 'Herkes gelip izleyebilir.'],
    q: [
      ['Ela ne yapabiliyor?', 'Şarkı söyleyebiliyor', 'Zıplayabiliyor', 'Gitar çalabiliyor', 1],
      ['Mert ne yapabiliyor?', 'Yükseğe zıplayabiliyor', 'Şarkı söyleyebiliyor', 'Araba kullanabiliyor', 2],
      ['Anlatan kişi ne yapabiliyor?', 'Gitar çalabiliyor', 'Şarkı söyleyebiliyor', 'Zıplayabiliyor', 4],
    ],
  },
  'Beni, Seni, Onu': {
    title: 'Doğum Günü Sürprizi',
    en: ['Today is my friend Sara\'s birthday.', 'I love her very much.', 'I give her a small gift.', 'Her brother comes with us.', 'He tells me a secret about her.', 'She laughs and thanks us.'],
    tr: ['Bugün arkadaşım Sara\'nın doğum günü.', 'Onu çok seviyorum.', 'Ona küçük bir hediye veriyorum.', 'Erkek kardeşi bizimle geliyor.', 'Bana onunla ilgili bir sır söylüyor.', 'O gülüyor ve bize teşekkür ediyor.'],
    q: [
      ['Bugün kimin doğum günü?', "Sara'nın", 'Anlatan kişinin', 'Sara\'nın kardeşinin', 0],
      ['Anlatan kişi Sara\'ya ne veriyor?', 'Küçük bir hediye', 'Bir mektup', 'Bir kek', 2],
      ['Sırrı kim söylüyor?', "Sara'nın erkek kardeşi", 'Sara', 'Annesi', 4],
    ],
  },
  'Aylar ve Mevsimler': {
    title: 'En Sevdiğim Mevsim',
    en: ['There are four seasons in a year.', 'Winter is cold, and it snows in January.', 'Spring is my favourite season.', 'My birthday is in April.', 'In August we go to the beach.', 'In autumn the school opens again.'],
    tr: ['Bir yılda dört mevsim vardır.', 'Kış soğuktur ve ocakta kar yağar.', 'İlkbahar en sevdiğim mevsimdir.', 'Doğum günüm nisanda.', 'Ağustosta plaja gideriz.', 'Sonbaharda okul yeniden açılır.'],
    q: [
      ['Anlatan kişinin en sevdiği mevsim hangisi?', 'İlkbahar', 'Yaz', 'Kış', 2],
      ['Doğum günü ne zaman?', 'Nisanda', 'Ocakta', 'Ağustosta', 3],
      ['Ağustosta nereye gidiyorlar?', 'Plaja', 'Okula', 'Köye', 4],
    ],
  },
  'Markette': {
    title: 'Alışveriş Listesi',
    en: ['We do not have any rice at home.', 'I go to the shop with my list.', 'I need some rice and two kilos of potatoes.', 'I also want a bottle of oil.', 'They do not have any bananas today.', 'So I buy some oranges.'],
    tr: ['Evde hiç pirincimiz yok.', 'Listemle dükkâna gidiyorum.', 'Biraz pirinç ve iki kilo patatese ihtiyacım var.', 'Bir şişe yağ da istiyorum.', 'Bugün hiç muzları yok.', 'Bu yüzden birkaç portakal alıyorum.'],
    q: [
      ['Evde ne kalmamış?', 'Pirinç', 'Süt', 'Yağ', 0],
      ['Kaç kilo patates lazım?', 'İki', 'Bir', 'Beş', 2],
      ['Muz yerine ne alıyor?', 'Portakal', 'Domates', 'Elma', 5],
    ],
  },
  // ======================= A2 =======================
  'En İyisi': {
    title: 'En İyi Restoran',
    en: ['My town has three restaurants.', 'The first one is the cheapest, but the food is not good.', 'The second one is more expensive than the first.', 'The third one is the most beautiful.', 'Its food is the best in town.', 'It is also the most difficult place to find a table.'],
    tr: ['Kasabamda üç restoran var.', 'Birincisi en ucuzu ama yemekleri iyi değil.', 'İkincisi birincisinden daha pahalı.', 'Üçüncüsü en güzeli.', 'Yemekleri şehirdeki en iyisi.', 'Ayrıca masa bulması en zor yer.'],
    q: [
      ['Hangi restoran en ucuz?', 'Birincisi', 'İkincisi', 'Üçüncüsü', 1],
      ['En iyi yemekler nerede?', 'Üçüncü restoranda', 'Birinci restoranda', 'İkinci restoranda', 4],
      ['Üçüncü restoranın zorluğu ne?', 'Masa bulmak zor', 'Çok uzak', 'Çok pahalı', 5],
    ],
  },
  'Düzensiz Fiiller': {
    title: 'Kayıp Cüzdan',
    en: ['Last week I found a wallet on the bus.', 'I took it to the police station.', 'A woman came the next day.', 'She told me it was hers.', 'She gave me some flowers.', 'I thought it was a very kind thing to do.'],
    tr: ['Geçen hafta otobüste bir cüzdan buldum.', 'Onu karakola götürdüm.', 'Ertesi gün bir kadın geldi.', 'Onun olduğunu söyledi.', 'Bana çiçek verdi.', 'Bunun çok nazik bir davranış olduğunu düşündüm.'],
    q: [
      ['Cüzdan nerede bulundu?', 'Otobüste', 'Parkta', 'Markette', 0],
      ['Cüzdanı nereye götürdü?', 'Karakola', 'Bankaya', 'Eve', 1],
      ['Kadın ne verdi?', 'Çiçek', 'Para', 'Kitap', 4],
    ],
  },
  'Çocukluğum': {
    title: 'Küçük Köy',
    en: ['I was born in a small village.', 'We were poor, but my childhood was happy.', 'I did not have many toys.', 'My best friend was a boy called Hasan.', 'We were always outside together.', 'I still remember those days.'],
    tr: ['Küçük bir köyde doğdum.', 'Fakirdik ama çocukluğum mutluydu.', 'Çok oyuncağım yoktu.', 'En yakın arkadaşım Hasan adında bir çocuktu.', 'Hep birlikte dışarıdaydık.', 'O günleri hâlâ hatırlıyorum.'],
    q: [
      ['Anlatan kişi nerede doğdu?', 'Küçük bir köyde', 'Büyük bir şehirde', 'Yurt dışında', 0],
      ['En yakın arkadaşı kimdi?', 'Hasan', 'Ali', 'Mert', 3],
      ['Çocukluğu nasıldı?', 'Mutlu', 'Mutsuz', 'Yalnız', 1],
    ],
  },
  'Kurallar': {
    title: 'Fabrikada İlk Gün',
    en: ['Today is my first day at the factory.', 'There are a lot of rules here.', 'I have to wear a uniform and a helmet.', 'You must not smoke inside the building.', 'Parking is allowed behind the factory.', 'You do not have to bring lunch, because it is free.'],
    tr: ['Bugün fabrikadaki ilk günüm.', 'Burada çok kural var.', 'Üniforma ve kask takmak zorundayım.', 'Binanın içinde sigara içmemelisin.', 'Fabrikanın arkasına park etmek serbest.', 'Öğle yemeği getirmek zorunda değilsin çünkü ücretsiz.'],
    q: [
      ['Ne takmak zorunlu?', 'Üniforma ve kask', 'Şapka ve gözlük', 'Eldiven', 2],
      ['Binanın içinde ne yasak?', 'Sigara içmek', 'Yemek yemek', 'Telefon', 3],
      ['Öğle yemeği neden getirilmiyor?', 'Ücretsiz olduğu için', 'Yasak olduğu için', 'Mola olmadığı için', 5],
    ],
  },
  'Ne Kadar, Kaç Tane': {
    title: 'Misafirler Geliyor',
    en: ['A lot of guests are coming tonight.', 'We have only a few plates.', 'There is a little rice, but not much meat.', 'The fridge is almost empty.', 'I need to buy twenty cups.', 'I hope there is enough food for everyone.'],
    tr: ['Bu akşam çok misafir geliyor.', 'Sadece birkaç tabağımız var.', 'Biraz pirinç var ama çok et yok.', 'Buzdolabı neredeyse boş.', 'Yirmi fincan almam gerekiyor.', 'Umarım herkese yetecek kadar yemek olur.'],
    q: [
      ['Bu akşam ne var?', 'Çok misafir geliyor', 'Bir maç var', 'Tatile gidiliyor', 0],
      ['Buzdolabı nasıl?', 'Neredeyse boş', 'Tamamen dolu', 'Bozuk', 3],
      ['Kaç fincan alınacak?', 'Yirmi', 'On', 'Beş', 4],
    ],
  },
  'Karakter ve Davranış': {
    title: 'İki İş Arkadaşım',
    en: ['I have two colleagues, Ece and Can.', 'Ece is friendly and very polite.', 'She always speaks slowly and carefully.', 'Can is clever, but he is a little lazy.', 'He can be rude when he is tired.', 'But he is honest, so I trust him.'],
    tr: ['İki iş arkadaşım var, Ece ve Can.', 'Ece cana yakın ve çok kibar.', 'Her zaman yavaş ve dikkatli konuşur.', 'Can zeki ama biraz tembel.', 'Yorgunken kaba olabiliyor.', 'Ama dürüst, bu yüzden ona güveniyorum.'],
    q: [
      ['Ece nasıl biri?', 'Cana yakın ve kibar', 'Tembel', 'Kaba', 1],
      ['Can ne zaman kaba olabiliyor?', 'Yorgunken', 'Sabahları', 'Toplantıda', 4],
      ['Anlatan kişi Can\'a neden güveniyor?', 'Dürüst olduğu için', 'Zengin olduğu için', 'Çok çalıştığı için', 5],
    ],
  },
  'Spor': {
    title: 'Büyük Maç',
    en: ['Our basketball team played a big match on Sunday.', 'We lost the first half.', 'Then our coach told us to play together.', 'I was not the best player, but I worked hard.', 'In the end we won by two points.', 'We went to a restaurant to celebrate.'],
    tr: ['Basketbol takımımız pazar günü büyük bir maç oynadı.', 'İlk yarıyı kaybettik.', 'Sonra antrenörümüz birlikte oynamamızı söyledi.', 'En iyi oyuncu değildim ama çok çalıştım.', 'Sonunda iki sayı farkla kazandık.', 'Kutlamak için restorana gittik.'],
    q: [
      ['Maç ne zamandı?', 'Pazar günü', 'Cumartesi', 'Cuma', 0],
      ['Antrenör ne söyledi?', 'Birlikte oynamalarını', 'Eve gitmelerini', 'Hızlı koşmalarını', 2],
      ['Maçı kim kazandı?', 'Anlatanın takımı', 'Diğer takım', 'Beraberlik', 4],
    ],
  },
  'Cümle Bağlama': {
    title: 'Zor Bir Sabah',
    en: ['I woke up late, so I did not have breakfast.', 'I ran to the station, but the train had gone.', 'I had to wait until nine.', 'While I was waiting, I read my book.', 'After I arrived, I called my boss.', 'She was busy too, so she did not mind.'],
    tr: ['Geç uyandım, bu yüzden kahvaltı yapmadım.', 'İstasyona koştum ama tren gitmişti.', 'Dokuza kadar beklemek zorunda kaldım.', 'Beklerken kitabımı okudum.', 'Vardıktan sonra patronumu aradım.', 'O da meşguldü, bu yüzden sorun etmedi.'],
    q: [
      ['Neden kahvaltı yapmadı?', 'Geç uyandığı için', 'Aç olmadığı için', 'Yemek olmadığı için', 0],
      ['Beklerken ne yaptı?', 'Kitap okudu', 'Uyudu', 'Yemek yedi', 3],
      ['Patronu neden sorun etmedi?', 'O da meşguldü', 'Tatildeydi', 'Hastaydı', 5],
    ],
  },
  'Mahallem': {
    title: 'Sessiz Bir Mahalle',
    en: ['I live in a quiet neighbourhood.', 'There is a bakery on the corner.', 'The library is opposite the park.', 'There is a small mosque behind my house.', 'In the morning there is a lot of traffic on the bridge.', 'But my street is always calm.'],
    tr: ['Sessiz bir mahallede yaşıyorum.', 'Köşede bir fırın var.', 'Kütüphane parkın karşısında.', 'Evimin arkasında küçük bir cami var.', 'Sabahları köprüde çok trafik oluyor.', 'Ama sokağım hep sakin.'],
    q: [
      ['Fırın nerede?', 'Köşede', 'Köprüde', 'Parkta', 1],
      ['Kütüphane neyin karşısında?', 'Parkın', 'Caminin', 'Fırının', 2],
      ['Sabahları nerede trafik var?', 'Köprüde', 'Anlatanın sokağında', 'Parkta', 4],
    ],
  },
  'Acil Durumlar': {
    title: 'Mutfaktaki Yangın',
    en: ['Last night there was a small fire in our kitchen.', 'My father burned his hand.', 'I called the emergency number immediately.', 'An ambulance came in ten minutes.', 'Luckily, it was not serious.', 'Our insurance will pay for the kitchen.'],
    tr: ['Dün gece mutfağımızda küçük bir yangın çıktı.', 'Babam elini yaktı.', 'Hemen acil numarasını aradım.', 'Ambulans on dakikada geldi.', 'Neyse ki ciddi değildi.', 'Mutfağın parasını sigortamız ödeyecek.'],
    q: [
      ['Yangın nerede çıktı?', 'Mutfakta', 'Bahçede', 'Garajda', 0],
      ['Ambulans kaç dakikada geldi?', 'On', 'Beş', 'Otuz', 3],
      ['Mutfağı kim ödeyecek?', 'Sigorta', 'Komşular', 'Polis', 5],
    ],
  },
  // ======================= B1 =======================
  'Who, Which, That': {
    title: 'The Old Bookshop',
    en: ['There is an old bookshop in the town where I grew up.', 'The man who owns it is over eighty.', 'He sells books that you cannot find anywhere else.', 'I once met a woman whose grandfather built the shop.', 'She showed me a photo which was taken in 1920.', 'It is a place that I will never forget.'],
    tr: ['Büyüdüğüm kasabada eski bir kitapçı var.', 'Sahibi olan adam seksenin üzerinde.', 'Başka hiçbir yerde bulamayacağın kitaplar satıyor.', 'Bir keresinde büyükbabası dükkânı inşa etmiş bir kadınla tanıştım.', 'Bana 1920\'de çekilmiş bir fotoğraf gösterdi.', 'Burası asla unutmayacağım bir yer.'],
    q: [
      ['How old is the owner?', 'Over eighty', 'About sixty', 'Under fifty', 1],
      ['Who built the shop?', "The woman's grandfather", 'The owner', 'The writer', 3],
      ['When was the photo taken?', 'In 1920', 'In 1950', 'Last year', 4],
    ],
  },
  '-ing mi, to mu?': {
    title: 'Learning to Swim',
    en: ['I always wanted to learn how to swim.', 'I avoided going to the sea because I was afraid.', 'Last year I decided to take lessons.', 'At first I kept swallowing water.', 'But my teacher told me not to give up.', 'Now I really enjoy swimming every weekend.'],
    tr: ['Her zaman yüzmeyi öğrenmek istemiştim.', 'Korktuğum için denize gitmekten kaçınırdım.', 'Geçen yıl ders almaya karar verdim.', 'Başta su yutup duruyordum.', 'Ama öğretmenim pes etmememi söyledi.', 'Şimdi her hafta sonu yüzmekten gerçekten keyif alıyorum.'],
    q: [
      ['Why did the writer avoid the sea?', 'Because of fear', 'Because of work', 'Because it was far', 1],
      ['When did the lessons start?', 'Last year', 'Last week', 'Ten years ago', 2],
      ['What does the writer do now?', 'Swims every weekend', 'Teaches swimming', 'Avoids water', 5],
    ],
  },
  'Deyimsel Fiiller 1': {
    title: 'A Bad Start',
    en: ['I got up late this morning.', 'I put on my coat and looked for my keys.', 'Then I found out that my car had no petrol.', 'We had run out the day before.', 'My neighbour picked me up and drove me to the airport.', 'I got there just before the plane took off.'],
    tr: ['Bu sabah geç kalktım.', 'Paltomu giydim ve anahtarlarımı aradım.', 'Sonra arabamda benzin olmadığını öğrendim.', 'Bir gün önce bitmişti.', 'Komşum beni aldı ve havalimanına bıraktı.', 'Uçak kalkmadan hemen önce oraya vardım.'],
    q: [
      ['What was wrong with the car?', 'It had no petrol', 'A flat tyre', 'A broken engine', 2],
      ['Who drove the writer?', 'A neighbour', 'A taxi driver', 'A colleague', 4],
      ['Did the writer catch the plane?', 'Yes, just in time', 'No, it had left', 'The flight was cancelled', 5],
    ],
  },
  'Yapıldı, Edildi': {
    title: 'The Town Bridge',
    en: ['The old bridge in our town was built in the last century.', 'It was destroyed during a big storm in 1990.', 'A new one was designed by a young engineer.', 'She was given a prize for her work.', 'The bridge is used by thousands of people every day.', 'It will be painted again next year.'],
    tr: ['Kasabamızdaki eski köprü geçen yüzyılda inşa edildi.', '1990\'da büyük bir fırtınada yıkıldı.', 'Yenisi genç bir mühendis tarafından tasarlandı.', 'Çalışması için ona ödül verildi.', 'Köprü her gün binlerce kişi tarafından kullanılıyor.', 'Gelecek yıl yeniden boyanacak.'],
    q: [
      ['What destroyed the old bridge?', 'A storm', 'A fire', 'An earthquake', 1],
      ['Who designed the new bridge?', 'A young engineer', 'The mayor', 'An old artist', 2],
      ['What will happen next year?', 'It will be painted', 'It will be closed', 'It will be sold', 5],
    ],
  },
  'Dedi ki...': {
    title: 'A Strange Message',
    en: ['Yesterday my friend Deniz called me.', 'She said she had some news.', 'She told me that our old teacher was moving abroad.', 'I asked her if it was true.', 'She replied that he had mentioned it himself.', 'But she told me to keep it a secret.'],
    tr: ['Dün arkadaşım Deniz beni aradı.', 'Bir haberi olduğunu söyledi.', 'Eski öğretmenimizin yurt dışına taşındığını anlattı.', 'Ona bunun doğru olup olmadığını sordum.', 'Bunu kendisinin söylediğini yanıtladı.', 'Ama bana bunu sır olarak saklamamı söyledi.'],
    q: [
      ['Who is moving abroad?', 'Their old teacher', 'Deniz', 'The writer', 2],
      ['How did Deniz know?', 'The teacher mentioned it himself', 'She read it online', 'Her mother told her', 4],
      ['What did Deniz ask the writer to do?', 'Keep it a secret', 'Call the teacher', 'Write a letter', 5],
    ],
  },
  'Olmuş, Bitmiş': {
    title: 'Back Home',
    en: ['I have been living in Germany for five years.', 'Last summer I went back to my hometown.', 'By the time I arrived, my grandfather had gone to bed.', 'I had never missed him so much before.', 'The next morning, he was still the same man.', 'He does not walk very fast anymore, but he has recovered well.'],
    tr: ['Beş yıldır Almanya\'da yaşıyorum.', 'Geçen yaz memleketime döndüm.', 'Vardığımda büyükbabam yatmıştı.', 'Onu daha önce hiç bu kadar özlememiştim.', 'Ertesi sabah hâlâ aynı adamdı.', 'Artık çok hızlı yürümüyor ama iyi toparlandı.'],
    q: [
      ['How long has the writer lived in Germany?', 'Five years', 'One year', 'Ten years', 0],
      ['What had happened when the writer arrived?', 'The grandfather had gone to bed', 'The grandfather had left', 'The house had been sold', 2],
      ['How is the grandfather now?', 'He has recovered well', 'He is in hospital', 'He walks very fast', 5],
    ],
  },
  'Belki, Herhalde': {
    title: 'A Difficult Choice',
    en: ['I might change my job this year.', 'My company may close its office in our city.', 'My boss says it is unlikely, but I am worried.', 'I found a new job, but the salary is too low.', 'It is not high enough to pay my rent.', 'Perhaps I should wait a little longer.'],
    tr: ['Bu yıl işimi değiştirebilirim.', 'Şirketim şehrimizdeki ofisini kapatabilir.', 'Patronum bunun pek olası olmadığını söylüyor ama endişeliyim.', 'Yeni bir iş buldum ama maaş çok düşük.', 'Kiramı ödemeye yetecek kadar yüksek değil.', 'Belki biraz daha beklemeliyim.'],
    q: [
      ['What might the company do?', 'Close its office', 'Open a new office', 'Raise salaries', 1],
      ['What is wrong with the new job?', 'The salary is too low', 'It is too far', 'The hours are long', 3],
      ['What does the writer think of doing?', 'Waiting a little longer', 'Moving abroad', 'Starting a company', 5],
    ],
  },
  'Ev Aramak': {
    title: 'A New Flat',
    en: ['We are moving to a new flat next month.', 'It is on the fifth floor and has a large balcony.', 'The rent includes water, but not the other bills.', 'The landlord asked for two months of deposit.', 'The heating was broken, so we had it repaired.', 'The rooms are spacious, and the neighbours seem friendly.'],
    tr: ['Gelecek ay yeni bir daireye taşınıyoruz.', 'Beşinci katta ve büyük bir balkonu var.', 'Kiraya su dahil ama diğer faturalar değil.', 'Ev sahibi iki aylık depozito istedi.', 'Isıtma bozuktu, bu yüzden tamir ettirdik.', 'Odalar ferah ve komşular cana yakın görünüyor.'],
    q: [
      ['Which floor is the flat on?', 'The fifth', 'The second', 'The first', 1],
      ['What does the rent include?', 'Water', 'All bills', 'Electricity', 2],
      ['What was broken?', 'The heating', 'The lift', 'The balcony door', 4],
    ],
  },
  'Yolda ve Araba': {
    title: 'Trouble on the Motorway',
    en: ['We were driving on the motorway when the engine stopped.', 'The car had broken down far from any town.', 'I called a mechanic, but he said he could not come for two hours.', 'While we were waiting, it started to rain.', 'When he finally came, he found the problem immediately.', 'He said that we had better not drive so fast in future.'],
    tr: ['Otoyolda giderken motor durdu.', 'Araba her kasabadan uzakta bozulmuştu.', 'Bir tamirci aradım ama iki saat gelemeyeceğini söyledi.', 'Beklerken yağmur başladı.', 'Sonunda geldiğinde sorunu hemen buldu.', 'Gelecekte bu kadar hızlı gitmesek iyi olacağını söyledi.'],
    q: [
      ['Where did the car stop?', 'On the motorway', 'In a village', 'At a petrol station', 0],
      ['How long did they have to wait?', 'Two hours', 'Ten minutes', 'All day', 2],
      ['What did the mechanic advise?', 'Not to drive so fast', 'To buy a new car', 'To take a bus', 5],
    ],
  },
  'İnternetten Alışveriş': {
    title: 'The Wrong Shoes',
    en: ['Last week I ordered a pair of shoes from a website.', 'I paid by credit card and got a ten percent discount.', 'The delivery took three days.', 'When the box arrived, it was damaged, and the shoes were the wrong size.', 'I decided to return them and asked for a larger size.', 'Unfortunately, that size is out of stock, so I will get a refund.'],
    tr: ['Geçen hafta bir web sitesinden bir çift ayakkabı sipariş ettim.', 'Kredi kartıyla ödedim ve yüzde on indirim aldım.', 'Teslimat üç gün sürdü.', 'Kutu geldiğinde hasarlıydı ve ayakkabılar yanlış bedendi.', 'Onları iade etmeye ve daha büyük beden istemeye karar verdim.', 'Ne yazık ki o beden stokta yok, bu yüzden paramı geri alacağım.'],
    q: [
      ['How much was the discount?', 'Ten percent', 'Twenty percent', 'Five percent', 1],
      ['What was the problem with the shoes?', 'The wrong size', 'The wrong colour', 'They never came', 3],
      ['What will finally happen?', 'The writer will get a refund', 'The writer will keep them', 'The shop will send new ones', 5],
    ],
  },
  'İlişkiler': {
    title: 'Old Friends',
    en: ['Zeynep and I have known each other since we were children.', 'Last year we had a big argument about money.', 'We did not speak for six months.', 'Then she called and said she was sorry.', 'We made up and met for coffee.', 'Now I trust her more than ever, because good friends support each other.'],
    tr: ['Zeynep ve ben çocukluğumuzdan beri birbirimizi tanırız.', 'Geçen yıl para yüzünden büyük bir tartışma yaşadık.', 'Altı ay konuşmadık.', 'Sonra aradı ve özür diledi.', 'Barıştık ve kahve içmek için buluştuk.', 'Şimdi ona her zamankinden çok güveniyorum çünkü iyi arkadaşlar birbirini destekler.'],
    q: [
      ['What did they argue about?', 'Money', 'A boy', 'Work', 1],
      ['How long did they not speak?', 'Six months', 'One week', 'Two years', 2],
      ['Who called first?', 'Zeynep', 'The writer', "Zeynep's mother", 3],
    ],
  },
  'Yeni Yaşam, Yurt Dışı': {
    title: 'A New Country',
    en: ['Two years ago I moved to Canada with my family.', 'First we had to apply for visas at the embassy.', 'At first I felt homesick, and I missed Turkish food.', 'People could not understand my accent.', 'Slowly, I got used to the cold weather and the new language.', 'I would rather stay here now, but I visit home every summer.'],
    tr: ['İki yıl önce ailemle Kanada\'ya taşındım.', 'Önce büyükelçilikte vize başvurusu yapmak zorunda kaldık.', 'Başta memleket hasreti çektim ve Türk yemeklerini özledim.', 'İnsanlar aksanımı anlayamıyordu.', 'Yavaş yavaş soğuk havaya ve yeni dile alıştım.', 'Artık burada kalmayı tercih ederim ama her yaz memlekete gidiyorum.'],
    q: [
      ['Where did the writer move?', 'Canada', 'Germany', 'England', 0],
      ['What was difficult for people there?', "Understanding the writer's accent", 'Finding the embassy', 'Eating Turkish food', 3],
      ['When does the writer visit home?', 'Every summer', 'Every month', 'Never', 5],
    ],
  },
  // ======================= B2 =======================
  'Deyimsel Fiiller 2': {
    title: 'Starting a Business',
    en: ['Two years ago, my brother came up with an unusual idea.', 'He wanted to set up a company that repairs old bicycles.', 'Our parents pointed out the risks, and the bank turned him down at first.', 'He refused to put off his plans.', 'He carried out some research and figured out how to reduce his costs.', 'Today, dozens of customers rely on his service every week.'],
    tr: ['İki yıl önce erkek kardeşim sıra dışı bir fikir buldu.', 'Eski bisikletleri tamir eden bir şirket kurmak istedi.', 'Ailemiz riskleri belirtti ve banka başta onu reddetti.', 'Planlarını ertelemeyi reddetti.', 'Araştırma yaptı ve maliyetlerini nasıl azaltacağını buldu.', 'Bugün her hafta onlarca müşteri onun hizmetine güveniyor.'],
    q: [
      ['What does the company do?', 'Repairs old bicycles', 'Sells new cars', 'Builds houses', 1],
      ['How did the bank respond at first?', 'It refused him', 'It gave him a loan', 'It became a partner', 2],
      ['What helped him lower his costs?', 'Doing some research', 'Hiring more staff', 'Selling his car', 4],
    ],
  },
  'Yaptırmak': {
    title: 'Renovating the House',
    en: ['Last spring we decided to have our house renovated.', 'First we got a plumber to fix a leak under the kitchen sink.', 'Then we had the walls painted and new lights installed.', 'The builder gave us an estimate, but the final cost was much higher.', 'He made us wait three extra weeks for the windows.', 'It was stressful, but the house looks wonderful now.'],
    tr: ['Geçen bahar evimizi yeniletmeye karar verdik.', 'Önce mutfak lavabosunun altındaki sızıntıyı bir tesisatçıya tamir ettirdik.', 'Sonra duvarları boyattık ve yeni lambalar taktırdık.', 'Müteahhit bize fiyat tahmini verdi ama son maliyet çok daha yüksekti.', 'Pencereler için bizi üç hafta fazla bekletti.', 'Stresliydi ama ev şimdi harika görünüyor.'],
    q: [
      ['What did the plumber do?', 'Fixed a leak', 'Painted the walls', 'Installed windows', 1],
      ['What surprised them about the cost?', 'It was higher than the estimate', 'It was free', 'It was lower than expected', 3],
      ['How long was the extra wait?', 'Three weeks', 'Three days', 'Three months', 4],
    ],
  },
  'Karışık Koşullar': {
    title: 'The Road Not Taken',
    en: ['If I had accepted that job in Berlin, my life would be very different now.', 'I would probably speak German, and I might not have met my wife.', 'At the time, I assumed the risk was too great.', 'My father said I should go, provided that I came home every year.', 'However, I stayed in case my mother needed me.', 'I do not regret the outcome, as long as my family is happy.'],
    tr: ['Berlin\'deki o işi kabul etseydim hayatım şimdi çok farklı olurdu.', 'Muhtemelen Almanca konuşuyor olurdum ve eşimle tanışmamış olabilirdim.', 'O zamanlar riskin çok büyük olduğunu varsaydım.', 'Babam her yıl eve dönmem şartıyla gitmem gerektiğini söyledi.', 'Ancak annemin bana ihtiyacı olur diye kaldım.', 'Ailem mutlu olduğu sürece sonuçtan pişman değilim.'],
    q: [
      ['Where was the job?', 'In Berlin', 'In London', 'In Paris', 0],
      ['What was the father\'s condition?', 'Coming home every year', 'Sending money', 'Learning German', 3],
      ['Why did the writer stay?', 'In case the mother needed help', 'The salary was low', 'The job was cancelled', 4],
    ],
  },
  'Hukuk ve Suç': {
    title: 'The Museum Theft',
    en: ['A valuable painting was stolen from the city museum last month.', 'A guard was arrested, as he was believed to have opened the door.', 'He was accused of working with two other men.', 'However, at the trial, the evidence turned out to be weak.', 'The judge decided that the guard was innocent.', 'The real thieves are said to have left the country.'],
    tr: ['Geçen ay şehir müzesinden değerli bir tablo çalındı.', 'Kapıyı açtığına inanılan bir bekçi tutuklandı.', 'İki adamla birlikte çalışmakla suçlandı.', 'Ancak duruşmada delillerin zayıf olduğu ortaya çıktı.', 'Hâkim bekçinin masum olduğuna karar verdi.', 'Gerçek hırsızların ülkeyi terk ettiği söyleniyor.'],
    q: [
      ['What was stolen?', 'A painting', 'A statue', 'Some money', 0],
      ['What did the judge decide?', 'The guard was innocent', 'The guard was guilty', 'The trial was delayed', 4],
      ['Where are the real thieves thought to be?', 'Out of the country', 'In prison', 'At the museum', 5],
    ],
  },
  'Sağlık Sistemi': {
    title: 'A Second Opinion',
    en: ['For months my uncle had symptoms that no one could explain.', 'His family doctor gave him several prescriptions, but nothing helped.', 'Finally, he was referred to a specialist.', 'The specialist made the correct diagnosis within a week.', 'He needed minor surgery, which went very well.', 'He says that every patient deserves a second opinion.'],
    tr: ['Amcamda aylarca kimsenin açıklayamadığı belirtiler vardı.', 'Aile doktoru ona birkaç reçete yazdı ama hiçbiri işe yaramadı.', 'Sonunda bir uzmana sevk edildi.', 'Uzman bir hafta içinde doğru teşhisi koydu.', 'Küçük bir ameliyat gerekti ve çok iyi geçti.', 'Her hastanın ikinci bir görüşü hak ettiğini söylüyor.'],
    q: [
      ['Did the prescriptions help?', 'No, nothing helped', 'Yes, immediately', 'Only one did', 1],
      ['How quickly did the specialist find the problem?', 'Within a week', 'After a year', 'In a few months', 3],
      ['What does the uncle recommend?', 'Getting a second opinion', 'Avoiding surgery', 'Changing countries', 5],
    ],
  },
  'Medya ve Gerçekler': {
    title: 'A Story Too Good to Be True',
    en: ['Last month, a shocking story spread quickly on social media.', 'According to the post, a famous actor had given all his money away.', 'Thousands of people shared it without checking the source.', 'A journalist decided to investigate and contacted the actor.', 'He said that the story was completely fake.', 'It had been published by a website that makes money from advertisements.'],
    tr: ['Geçen ay sosyal medyada şok edici bir haber hızla yayıldı.', 'Paylaşıma göre ünlü bir oyuncu bütün parasını bağışlamıştı.', 'Binlerce kişi kaynağı kontrol etmeden paylaştı.', 'Bir gazeteci araştırmaya karar verdi ve oyuncuyla iletişime geçti.', 'Oyuncu haberin tamamen sahte olduğunu söyledi.', 'Haber, reklamlardan para kazanan bir web sitesi tarafından yayımlanmıştı.'],
    q: [
      ['What did the post claim?', 'An actor gave away his money', 'An actor had died', 'An actor was arrested', 1],
      ['Who checked the story?', 'A journalist', 'The police', 'A teacher', 3],
      ['How does the website make money?', 'From advertisements', 'From donations', 'From selling books', 5],
    ],
  },
  'Bilim ve Keşif': {
    title: 'Sleep and Memory',
    en: ['Scientists have long suspected that sleep is important for memory.', 'In a recent experiment, researchers tested two groups of students.', 'One group slept for eight hours, while the other stayed awake.', 'The students who had slept remembered far more the next day.', 'The research shows that lack of sleep can lead to serious learning problems.', 'The more you sleep before an exam, the better you are likely to do.'],
    tr: ['Bilim insanları uzun zamandır uykunun hafıza için önemli olduğundan şüpheleniyordu.', 'Yakın tarihli bir deneyde araştırmacılar iki öğrenci grubunu test etti.', 'Bir grup sekiz saat uyurken diğeri uyanık kaldı.', 'Uyuyan öğrenciler ertesi gün çok daha fazlasını hatırladı.', 'Araştırma, uykusuzluğun ciddi öğrenme sorunlarına yol açabileceğini gösteriyor.', 'Sınavdan önce ne kadar çok uyursan muhtemelen o kadar iyi yaparsın.'],
    q: [
      ['How many groups took part?', 'Two', 'Three', 'Eight', 1],
      ['Which group remembered more?', 'The group that slept', 'The group that stayed awake', 'They were equal', 3],
      ['What does a lack of sleep lead to?', 'Learning problems', 'Better memory', 'Weight loss', 4],
    ],
  },
  'Zihin ve Duygular': {
    title: 'Learning to Slow Down',
    en: ['Three years ago, I was working twelve hours a day.', 'I was often in a bad mood, and I was fed up with everything.', 'My doctor told me that I was close to burnout.', 'I started seeing a therapist and learned how to cope with stress.', 'She helped me overcome my anxiety and rebuild my confidence.', 'Now I work less, and my family says that my behaviour has completely changed.'],
    tr: ['Üç yıl önce günde on iki saat çalışıyordum.', 'Sık sık keyifsizdim ve her şeyden bıkmıştım.', 'Doktorum tükenmişliğe yakın olduğumu söyledi.', 'Bir terapiste gitmeye başladım ve stresle başa çıkmayı öğrendim.', 'Kaygımın üstesinden gelmeme ve özgüvenimi yeniden kazanmama yardım etti.', 'Şimdi daha az çalışıyorum ve ailem davranışlarımın tamamen değiştiğini söylüyor.'],
    q: [
      ['How many hours did the writer work?', 'Twelve a day', 'Eight a day', 'Twelve a week', 0],
      ['Who warned the writer about burnout?', 'A doctor', 'A colleague', 'A manager', 2],
      ['What did the therapist teach?', 'How to cope with stress', 'How to work faster', 'How to find a job', 3],
    ],
  },
  'Sunum Yapmak': {
    title: 'My First Presentation',
    en: ['I had to give my first presentation to the whole company last month.', 'I started with a short outline so that everyone knew what to expect.', 'On the third slide, I showed some statistics about our sales.', 'They showed a clear trend: sales had increased by thirty percent.', 'To sum up, I highlighted two ways we could reach new customers.', 'My manager said that the conclusion was the strongest part.'],
    tr: ['Geçen ay tüm şirkete ilk sunumumu yapmak zorunda kaldım.', 'Herkes ne bekleyeceğini bilsin diye kısa bir ana hatla başladım.', 'Üçüncü slaytta satışlarımızla ilgili bazı istatistikler gösterdim.', 'Net bir eğilim gösteriyordu: Satışlar yüzde otuz artmıştı.', 'Özetle, yeni müşterilere ulaşmanın iki yolunu vurguladım.', 'Müdürüm sonuç kısmının en güçlü bölüm olduğunu söyledi.'],
    q: [
      ['How did the writer begin?', 'With a short outline', 'With a joke', 'With a video', 1],
      ['By how much did sales rise?', 'Thirty percent', 'Three percent', 'Fifty percent', 3],
      ['What did the manager like best?', 'The conclusion', 'The statistics', 'The outline', 5],
    ],
  },
  'Yaygın Deyimler': {
    title: 'A Bad Week',
    en: ['Last week started badly because I was feeling under the weather.', 'I had to keep an eye on my sister\'s children as well.', 'The new phone that I bought cost an arm and a leg, and it broke.', 'I wanted to quit my course, but I decided to continue.', 'When my boss added more work on Friday, it was the last straw.', 'I told him I was calling it a day, and I went home.'],
    tr: ['Geçen hafta kötü başladı çünkü kendimi keyifsiz hissediyordum.', 'Bir de kız kardeşimin çocuklarına göz kulak olmam gerekti.', 'Aldığım yeni telefon çok pahalıya mal oldu ve bozuldu.', 'Kursumu bırakmak istedim ama devam etmeye karar verdim.', 'Patronum cuma günü daha fazla iş verince bu bardağı taşıran son damla oldu.', 'Ona bugünlük bu kadar yeter dedim ve eve gittim.'],
    q: [
      ['How did the writer feel at the start?', 'A little ill', 'Very happy', 'Excited', 0],
      ['What was wrong with the phone?', 'It was expensive and broke', 'It was stolen', 'It was the wrong colour', 2],
      ['What happened on Friday?', 'The boss added more work', 'The writer got a prize', 'The course ended', 4],
    ],
  },
  // ======================= C1 =======================
  'Devrik Yapılar': {
    title: 'A Night in the Desert',
    en: ['Never had I imagined that a desert could be so cold.', 'No sooner had the sun gone down than the temperature began to fall.', 'Rarely have I felt so small under such an enormous sky.', 'Hardly had we lit a fire when a strong wind blew it out.', 'Not until the early morning did we manage to sleep.', 'By no means was it a comfortable night, yet I would do it again.'],
    tr: ['Bir çölün bu kadar soğuk olabileceğini hiç hayal etmemiştim.', 'Güneş batar batmaz sıcaklık düşmeye başladı.', 'Böyle uçsuz bucaksız bir gökyüzünün altında kendimi nadiren bu kadar küçük hissettim.', 'Ateşi yakar yakmaz güçlü bir rüzgâr onu söndürdü.', 'Ancak sabaha karşı uyuyabildik.', 'Hiçbir şekilde rahat bir gece değildi, yine de tekrar yapardım.'],
    q: [
      ['What surprised the writer about the desert?', 'How cold it was', 'How noisy it was', 'How many people were there', 0],
      ['What happened to the fire?', 'The wind blew it out', 'Rain put it out', 'It burned all night', 3],
      ['When did they sleep?', 'In the early morning', 'At sunset', 'They never slept', 4],
    ],
  },
  'Vurgu Yapıları': {
    title: 'What Really Mattered',
    en: ['When our company nearly failed, everyone blamed the economy.', 'However, it was not the economy that caused our troubles.', 'What we lacked was a clear vision of our future.', 'The underlying problem was precisely that nobody wanted to make decisions.', 'It was our youngest employee who finally said so in a meeting.', 'Ultimately, what saved us was merely the courage to listen.'],
    tr: ['Şirketimiz neredeyse batınca herkes ekonomiyi suçladı.', 'Ancak sıkıntılarımıza neden olan ekonomi değildi.', 'Eksik olan şey geleceğimize dair net bir vizyondu.', 'Altta yatan sorun tam da kimsenin karar vermek istememesiydi.', 'Bunu sonunda bir toplantıda söyleyen en genç çalışanımızdı.', 'Nihayetinde bizi kurtaran yalnızca dinleme cesaretiydi.'],
    q: [
      ['Whom did everyone blame at first?', 'The economy', 'The youngest employee', 'The customers', 0],
      ['What was the real problem?', 'Nobody wanted to make decisions', 'Sales were low', 'Staff were lazy', 3],
      ['Who raised the issue in a meeting?', 'The youngest employee', 'The manager', 'An investor', 4],
    ],
  },
  'Akademik Yazı': {
    title: 'Does Homework Help?',
    en: ['This paper examines the effect of homework on academic success.', 'The hypothesis was that more homework would produce better results.', 'Data from two thousand students were analysed using a simple framework.', 'Older students benefited significantly, whereas younger students did not.', 'Furthermore, too much homework appeared to reduce motivation.', 'Nevertheless, the sample was limited; thus, further research is required.'],
    tr: ['Bu makale ev ödevinin akademik başarı üzerindeki etkisini inceliyor.', 'Hipotez, daha fazla ödevin daha iyi sonuç vereceğiydi.', 'İki bin öğrenciden alınan veriler basit bir çerçeve kullanılarak analiz edildi.', 'Daha büyük öğrenciler önemli ölçüde fayda sağlarken, küçükler sağlamadı.', 'Ayrıca çok fazla ödev motivasyonu azaltıyor gibi göründü.', 'Yine de örneklem sınırlıydı; bu yüzden daha fazla araştırma gerekiyor.'],
    q: [
      ['How many students were in the study?', 'Two thousand', 'Two hundred', 'Twenty thousand', 2],
      ['Who benefited from homework?', 'Older students', 'Younger students', 'Neither group', 3],
      ['What effect did too much homework have?', 'It seemed to lower motivation', 'It improved sleep', 'It had no effect', 4],
    ],
  },
  'Temkinli Dil': {
    title: 'Are We Happier?',
    en: ['It is often assumed that people today are happier than in the past.', 'However, the evidence appears to be somewhat mixed.', 'Roughly half of those surveyed said that they felt less satisfied.', 'People tend to compare themselves with others online.', 'This is arguably one reason why many feel that they are falling behind.', 'Presumably, the answer depends on what we mean by happiness.'],
    tr: ['Günümüzde insanların geçmişe göre daha mutlu olduğu sıkça varsayılır.', 'Ancak kanıtlar bir ölçüde karışık görünüyor.', 'Anket yapılanların kabaca yarısı daha az tatmin olduğunu söyledi.', 'İnsanlar kendilerini internette başkalarıyla kıyaslama eğiliminde.', 'Birçoğunun geride kaldığını hissetmesinin nedenlerinden biri tartışmasız bu olabilir.', 'Herhalde cevap, mutluluktan ne anladığımıza bağlı.'],
    q: [
      ['What is the evidence like?', 'Somewhat mixed', 'Completely clear', 'Not available', 1],
      ['How many said they felt less satisfied?', 'About half', 'Almost everyone', 'Very few', 2],
      ['Where do people compare themselves?', 'Online', 'At work', 'At school', 3],
    ],
  },
  'Zarif Cümleler': {
    title: 'The Delayed Train',
    en: ['Owing to heavy snow, the morning train was delayed by two hours.', 'Having waited for an hour, most passengers went to the station café.', 'Given that the café was small, many had to stand outside.', 'Upon arrival in the city, each passenger received a small refund, albeit a late one.', 'The company subsequently apologised to all its customers.', 'In light of these events, it has promised to improve its winter service.'],
    tr: ['Yoğun kar nedeniyle sabah treni iki saat gecikti.', 'Bir saat bekledikten sonra yolcuların çoğu istasyon kafesine gitti.', 'Kafe küçük olduğu için birçoğu dışarıda durmak zorunda kaldı.', 'Şehre varışta her yolcu, geç de olsa küçük bir geri ödeme aldı.', 'Şirket sonradan tüm müşterilerinden özür diledi.', 'Bu olayların ışığında kış hizmetini iyileştirme sözü verdi.'],
    q: [
      ['What caused the delay?', 'Heavy snow', 'A strike', 'An accident', 0],
      ['Why did many stand outside?', 'The café was small', 'The café was closed', 'They wanted to smoke', 2],
      ['What has the company promised?', 'To improve its winter service', 'To lower its prices', 'To close the line', 5],
    ],
  },
  'Resmi Zorunluluklar': {
    title: 'A New Contract',
    en: ['Our new supplier has proposed a three-year contract.', 'Our lawyer insists that every clause be read with care.', 'It is essential that the goods be delivered within ten days.', 'Furthermore, safety training is mandatory for all drivers.', 'The supplier must comply with these terms, in accordance with national law.', 'If it fails to meet its obligations, we may terminate the agreement.'],
    tr: ['Yeni tedarikçimiz üç yıllık bir sözleşme önerdi.', 'Avukatımız her maddenin dikkatle okunmasında ısrar ediyor.', 'Malların on gün içinde teslim edilmesi şart.', 'Ayrıca tüm sürücüler için güvenlik eğitimi zorunlu.', 'Tedarikçi, ulusal yasaya uygun olarak bu şartlara uymalı.', 'Yükümlülüklerini yerine getirmezse sözleşmeyi feshedebiliriz.'],
    q: [
      ['How long is the contract?', 'Three years', 'Ten days', 'One year', 0],
      ['What is mandatory for drivers?', 'Safety training', 'A medical test', 'A new licence', 3],
      ['What can happen if obligations are not met?', 'The agreement can be terminated', 'The price will rise', 'A new lawyer is hired', 5],
    ],
  },
  'Siyaset ve Toplum': {
    title: 'A Heated Election',
    en: ['The country will hold a general election next month.', 'The main issue is a plan to reform the pension system.', 'While the government says that the reform is necessary, the opposition claims it will hurt the elderly.', 'Last week, thousands joined a protest in the capital.', 'A minister was recently forced to resign over a corruption scandal.', 'Whatever the result, many voters have simply lost faith in parliament.'],
    tr: ['Ülke gelecek ay genel seçim yapacak.', 'Ana konu emeklilik sistemini reforme etme planı.', 'Hükûmet reformun gerekli olduğunu söylerken muhalefet bunun yaşlılara zarar vereceğini iddia ediyor.', 'Geçen hafta binlerce kişi başkentteki bir protestoya katıldı.', 'Bir bakan yakın zamanda yolsuzluk skandalı nedeniyle istifaya zorlandı.', 'Sonuç ne olursa olsun, birçok seçmen parlamentoya güvenini yitirdi.'],
    q: [
      ['What is the main issue in the election?', 'Pension reform', 'Education', 'Foreign policy', 1],
      ['What does the opposition claim?', 'The reform will hurt the elderly', 'The reform is too small', 'The election is unfair', 2],
      ['Why did the minister leave?', 'A corruption scandal', 'Poor health', 'A new job', 4],
    ],
  },
  'Küresel Sorunlar': {
    title: 'When the Rain Stopped',
    en: ['For three years, almost no rain has fallen in the region.', 'The drought has destroyed crops and pushed thousands into poverty.', 'Experts say the crisis stems partly from rising global emissions.', 'Competition for scarce resources has given rise to local conflict.', 'A growing number of families have become refugees in nearby countries.', 'Unless the world cooperates on sustainability, such stories will become more common.'],
    tr: ['Üç yıldır bölgeye neredeyse hiç yağmur yağmadı.', 'Kuraklık ürünleri yok etti ve binlerce kişiyi yoksulluğa itti.', 'Uzmanlar krizin kısmen artan küresel emisyonlardan kaynaklandığını söylüyor.', 'Kıt kaynaklar için rekabet yerel çatışmalara yol açtı.', 'Giderek daha fazla aile komşu ülkelerde mülteci oldu.', 'Dünya sürdürülebilirlik konusunda iş birliği yapmazsa bu tür hikâyeler daha yaygın hale gelecek.'],
    q: [
      ['How long has the drought lasted?', 'Three years', 'Three months', 'Thirty years', 0],
      ['What do experts link the crisis to?', 'Rising emissions', 'Bad farming', 'War', 2],
      ['What has competition for resources caused?', 'Local conflict', 'Lower prices', 'More rain', 3],
    ],
  },
  'Etik ve Felsefe': {
    title: 'The Lost Wallet',
    en: ['Suppose you found a wallet full of money, and nobody saw you.', 'Most people say they would return it, but this assumption may be optimistic.', 'For some, it is a matter of principle; for others, it is about conscience.', 'However, imagine that you could not afford medicine for your child.', 'This dilemma raises the question of whether justice depends on circumstances.', 'From one perspective, stealing is always wrong; from another, need changes everything.'],
    tr: ['İçi para dolu bir cüzdan bulduğunu ve kimsenin görmediğini varsay.', 'Çoğu insan geri vereceğini söylüyor ama bu varsayım iyimser olabilir.', 'Bazıları için bu bir ilke meselesi, diğerleri için vicdanla ilgili.', 'Ancak çocuğuna ilaç alamadığını hayal et.', 'Bu ikilem, adaletin koşullara bağlı olup olmadığı sorusunu gündeme getiriyor.', 'Bir bakış açısına göre çalmak her zaman yanlıştır; bir diğerine göre ihtiyaç her şeyi değiştirir.'],
    q: [
      ['What is found in the example?', 'A wallet', 'A phone', 'A car', 0],
      ['What does the writer think of what most people say?', 'It may be optimistic', 'It is certainly true', 'It is a lie', 1],
      ['What question does the dilemma raise?', 'Whether justice depends on circumstances', 'Whether wallets are safe', 'Whether medicine is expensive', 4],
    ],
  },
  'Sanat ve Eleştiri': {
    title: 'The New Exhibition',
    en: ['A new exhibition of contemporary sculpture has just opened at the city gallery.', 'Critics have described its largest work as a masterpiece.', 'Personally, I found it somewhat overrated.', 'What did impress me was a small, abstract piece by a local artist.', 'It was inspired by the region\'s cultural heritage and its old carpets.', 'It is not so much a sculpture as a conversation with the past.'],
    tr: ['Şehir galerisinde yeni bir çağdaş heykel sergisi açıldı.', 'Eleştirmenler en büyük eseri şaheser olarak tanımladı.', 'Ben şahsen biraz abartılmış buldum.', 'Beni gerçekten etkileyen, yerel bir sanatçının küçük, soyut bir eseriydi.', 'Bölgenin kültürel mirasından ve eski halılarından ilham alınmıştı.', 'Heykelden çok geçmişle bir sohbet gibi.'],
    q: [
      ['What did critics call the largest work?', 'A masterpiece', 'A failure', 'A copy', 1],
      ['What did the writer think of it?', 'Somewhat overrated', 'Perfect', 'Too small', 2],
      ['What inspired the small piece?', 'Cultural heritage and carpets', 'Modern cities', 'The ocean', 4],
    ],
  },
  'İş Stratejisi': {
    title: 'From Startup to Market Leader',
    en: ['Ten years ago, two entrepreneurs started a small online startup.', 'Their innovation was simple: delivering fresh food within an hour.', 'Competitors laughed at first, but revenue doubled every year.', 'They chose to outsource delivery in order to keep costs low.', 'Going forward, a merger with a larger rival could give them half of the market share.', 'However, some stakeholders worry that the company will lose its identity.'],
    tr: ['On yıl önce iki girişimci küçük bir çevrimiçi girişim başlattı.', 'Yenilikleri basitti: Taze yiyeceği bir saat içinde teslim etmek.', 'Rakipleri başta güldü ama gelir her yıl ikiye katlandı.', 'Maliyetleri düşük tutmak için teslimatı dış kaynağa vermeyi seçtiler.', 'Bundan sonra daha büyük bir rakiple birleşme onlara pazarın yarısını verebilir.', 'Ancak bazı paydaşlar şirketin kimliğini kaybedeceğinden endişe ediyor.'],
    q: [
      ['What was the innovation?', 'Fast delivery of fresh food', 'Cheap phones', 'Online banking', 1],
      ['Why did they outsource delivery?', 'To keep costs low', 'To avoid laws', 'To hire friends', 3],
      ['What are some stakeholders worried about?', 'Losing the company\'s identity', 'Lower revenue', 'Too few customers', 5],
    ],
  },
  'İncelikli İletişim': {
    title: 'Reading Between the Lines',
    en: ['My British colleague once told me that my report was "quite interesting".', 'I was delighted, until a friend explained the nuance.', 'Apparently, this was a tactful way of implying that it needed work.', 'He was not being sarcastic; he was simply being diplomatic.', 'In my own culture, people are much more blunt.', 'Now I listen to the tone as carefully as to the words.'],
    tr: ['İngiliz iş arkadaşım bir keresinde raporumun "oldukça ilginç" olduğunu söyledi.', 'Bir arkadaşım inceliği açıklayana kadar çok sevindim.', 'Görünüşe göre bu, üzerinde çalışılması gerektiğini ima etmenin nazik bir yoluydu.', 'Alay etmiyordu; sadece diplomatik davranıyordu.', 'Benim kültürümde insanlar çok daha dobra.', 'Artık tonu da kelimeler kadar dikkatle dinliyorum.'],
    q: [
      ['What did "quite interesting" really mean?', 'The report needed work', 'The report was excellent', 'The report was too long', 2],
      ['Was the colleague being sarcastic?', 'No, just diplomatic', 'Yes, very', 'He was angry', 3],
      ['What does the writer do differently now?', 'Pays attention to tone', 'Writes shorter reports', 'Avoids British colleagues', 5],
    ],
  },
};

UNITS.forEach(u => { if (STORIES_X[u.title]) u.story = STORIES_X[u.title]; });
