// Dilbaz — Yurt dışı: hayat kurtaran kalıplar ve sokak senaryoları (özgün içerik)

// ---------- Hayat kurtaran kalıplar ----------
const SURVIVAL = {
  title: 'Hayat kurtaran kalıplar',
  steps: [
    ['Anlamadığında', `<p>Yurt dışında en büyük korku “anlamazsam ne olur?” sorusudur. Cevap basit: <b>sor</b>. Ana dili İngilizce olanlar bunu çok normal karşılar.</p>
      <ul><li><b>Sorry?</b> / <b>Pardon?</b>: Efendim? (en kısa ve en doğal)</li><li><b>Could you say that again, please?</b>: Tekrar söyler misiniz?</li><li><b>Could you speak more slowly, please?</b>: Daha yavaş konuşur musunuz?</li></ul>
      <p class="warn">⚠️ Anlamadan “Yes, yes” deme! En sık yapılan hata budur ve yanlış anlaşılmaya yol açar.</p>`,
      [['Sorry, could you say that again?', 'Pardon, tekrar söyler misiniz?'], ['Could you speak a bit more slowly, please?', 'Biraz daha yavaş konuşur musunuz lütfen?'], ['Sorry, I didn\'t catch that.', 'Pardon, onu kaçırdım.']]],
    ['Kelimeyi bilmediğinde', `<p>Kelimeyi bilmemek konuşmayı durdurmasın. Etrafından dolaş:</p>
      <ul><li><b>What's the word for …?</b>: … için kelime neydi?</li><li><b>It's a kind of …</b>: Bir çeşit …</li><li><b>It's something you use to …</b>: … için kullandığın bir şey</li><li><b>How do you say … in English?</b></li></ul>`,
      [['It\'s something you use to open bottles.', 'Şişe açmak için kullandığın bir şey.'], ['What does “queue” mean?', '“Queue” ne demek?'], ['How do you say “eczane” in English?', '“Eczane” İngilizcede nasıl denir?']]],
    ['Zaman kazanmak ve kontrol etmek', `<p>Düşünmek için zaman kazandıran sözler konuşmayı doğal gösterir: <b>Well, …</b> · <b>Let me think …</b> · <b>Hmm, how can I put it?</b></p>
      <p>Doğru anladığını kontrol et: <b>So you mean …?</b> · <b>Do you mean …?</b> · <b>Just to check, …</b></p>`,
      [['Let me think for a second.', 'Bir saniye düşüneyim.'], ['Do you mean the second street on the left?', 'Soldaki ikinci sokağı mı kastediyorsunuz?'], ['Just to check, is breakfast included?', 'Emin olmak için soruyorum, kahvaltı dahil mi?']]],
    ['Kendini rahatlat', `<p>İngilizcenin mükemmel olması gerekmiyor. Gerekirse durumu baştan söyle: <b>Sorry, my English isn't very good.</b> İnsanlar daha yavaş ve sabırlı konuşur.</p>
      <p>Yardım istemek: <b>Excuse me, could you help me?</b> · Teşekkür: <b>Thanks a lot, that's really helpful!</b></p>`,
      [['Sorry, my English isn\'t perfect.', 'Kusura bakmayın, İngilizcem mükemmel değil.'], ['Excuse me, could you help me, please?', 'Affedersiniz, bana yardım edebilir misiniz?'], ['Thanks a lot, that\'s really helpful!', 'Çok teşekkürler, gerçekten çok yardımcı oldunuz!']]],
  ],
  quiz: [
    ['Could you speak more ___, please?', 'slowly', 'slow', 'slowing', 'Fiili anlatan zarf: slowly.'],
    ['Sorry, I didn\'t ___ that. (anlayamadım / kaçırdım)', 'catch', 'take', 'get on', 'Kalıp: I didn\'t catch that.'],
    ['What\'s the ___ for this in English?', 'word', 'say', 'name of', 'Kalıp: What\'s the word for…?'],
    ['Could you say that ___, please?', 'again', 'more', 'back', 'Tekrar = again.'],
    ['Do you ___ the bus station? (… mı demek istiyorsunuz)', 'mean', 'say', 'want say', 'Kontrol etmek: Do you mean…?'],
    ['It\'s something you use ___ cut paper.', 'to', 'for', 'with', 'Amaç: use something to + fiil.'],
  ],
  phrases: [
    ['Sorry, could you say that again?', 'Pardon, tekrar söyler misiniz?'],
    ['Could you speak more slowly, please?', 'Daha yavaş konuşur musunuz lütfen?'],
    ['Sorry, I didn\'t catch that.', 'Pardon, onu kaçırdım.'],
    ['What does that mean?', 'O ne demek?'],
    ['How do you say this in English?', 'Bu İngilizcede nasıl denir?'],
    ['Could you write it down, please?', 'Yazabilir misiniz lütfen?'],
    ['Excuse me, could you help me?', 'Affedersiniz, bana yardım edebilir misiniz?'],
    ['Sorry, my English isn\'t very good.', 'Kusura bakmayın, İngilizcem çok iyi değil.'],
    ['Do you mean this one?', 'Bunu mu kastediyorsunuz?'],
    ['Let me think for a second.', 'Bir saniye düşüneyim.'],
  ],
};

// ---------- Sokak senaryoları ----------
// satır: ['t', karşı tarafın sözü, Türkçesi]  ·  ['m', ne demek istediğin, [kabul edilen cevaplar], [yanlış seçenek 1, yanlış seçenek 2]]
const SCENARIOS = [];
const SC = (id, level, icon, title, desc, lines) => SCENARIOS.push({ id, level, icon, title, desc, lines });

// ======================= A1 =======================
SC('cafe', 'A1', '☕', 'Kafede sipariş', 'Kahveni sipariş et, boyutunu söyle ve öde.', [
  ['t', 'Hi there! What can I get you?', 'Merhaba! Ne alırsınız?'],
  ['m', 'Bir latte istiyorum lütfen.', ["Can I have a latte, please?", "I'd like a latte, please.", 'A latte, please.'], ['I have a latte.', 'Where is the latte?']],
  ['t', 'Sure. What size? Small, medium or large?', 'Tabii. Hangi boy? Küçük, orta, büyük?'],
  ['m', 'Orta boy lütfen.', ['Medium, please.', 'A medium one, please.'], ['I am medium.', 'Small is big, please.']],
  ['t', 'Is that for here or to go?', 'Burada mı içeceksiniz, yoksa götürecek misiniz?'],
  ['m', 'Götüreceğim.', ['To go, please.', "It's to go, please.", 'Take away, please.'], ['For here, please.', 'I go, please.']],
  ['t', "That's four fifty. Cash or card?", 'Dört elli. Nakit mi kart mı?'],
  ['m', 'Kartla ödeyeceğim.', ["Card, please.", "I'll pay by card.", 'By card, please.'], ['Cash, please.', 'I have a card.']],
  ['t', 'Here you go. Have a nice day!', 'Buyurun. İyi günler!'],
  ['m', 'Teşekkürler, size de!', ['Thanks, you too!', 'Thank you, you too!'], ['Thanks, me too!', "You're welcome!"]],
]);

SC('hostel', 'A1', '🛏️', 'Hostelde tanışma', 'Yeni biriyle tanış: adın, nerelisin, ne iş yapıyorsun.', [
  ['t', "Hi! I'm Emma. Are you new here?", 'Selam! Ben Emma. Burada yeni misin?'],
  ['m', 'Evet, ben Ali. Tanıştığıma memnun oldum.', ["Yes, I'm Ali. Nice to meet you.", 'Yes, my name is Ali. Nice to meet you.'], ['No, I am Ali.', 'Yes, you are Ali.']],
  ['t', 'Nice to meet you too! Where are you from?', 'Ben de memnun oldum! Nerelisin?'],
  ['m', "Türkiye'denim, İstanbul'dan.", ["I'm from Turkey, from Istanbul.", "I'm from Istanbul, in Turkey."], ['I am in Turkey now.', 'I go to Istanbul.']],
  ['t', 'Oh, cool! What do you do?', 'Aa, harika! Ne iş yapıyorsun?'],
  ['m', 'Öğrenciyim. Mühendislik okuyorum.', ["I'm a student. I study engineering.", "I'm a student. I'm studying engineering."], ['I do engineering student.', 'I am study engineer.']],
  ['t', 'Nice! How long are you staying here?', 'Güzel! Burada ne kadar kalacaksın?'],
  ['m', 'Bir hafta kalıyorum.', ["I'm staying for a week.", "I'm staying for one week.", 'For a week.'], ['I stay one week ago.', 'I am a week.']],
  ['t', "Great! We're going out for dinner later. Do you want to come?", 'Harika! Sonra yemeğe çıkacağız. Gelmek ister misin?'],
  ['m', 'Evet, çok isterim!', ["Yes, I'd love to!", 'Yes, sure!', "Yes, that sounds great!"], ['Yes, I love you!', 'No, thank you very much!']],
]);

SC('directions', 'A1', '🗺️', 'Yol sormak', 'Kaybolduğunda yol sor ve tarifi anla.', [
  ['m', 'Affedersiniz, istasyon nerede?', ['Excuse me, where is the station?', "Excuse me, where's the train station?"], ['Excuse me, what is the station?', 'Sorry, I am the station.']],
  ['t', "The station? Go straight on and turn left at the traffic lights.", 'İstasyon mu? Düz gidin ve trafik ışıklarından sola dönün.'],
  ['m', 'Pardon, tekrar söyler misiniz?', ['Sorry, could you say that again?', 'Sorry, can you repeat that, please?'], ['Sorry, I am again.', 'Yes, yes, thank you.']],
  ['t', 'Sure. Go straight, then turn left at the lights. It\'s on the right.', 'Tabii. Düz gidin, sonra ışıklardan sola dönün. Sağda.'],
  ['m', 'Uzak mı?', ['Is it far?', 'Is it far from here?'], ['Is it big?', 'Are you far?']],
  ['t', "No, it's about five minutes on foot.", 'Hayır, yürüyerek yaklaşık beş dakika.'],
  ['m', 'Çok teşekkür ederim!', ['Thank you very much!', 'Thanks a lot!'], ["You're welcome!", 'Sorry very much!']],
  ['t', 'No problem. Have a good trip!', 'Sorun değil. İyi yolculuklar!'],
  ['m', 'Size de iyi günler!', ['You too, have a nice day!', 'Have a nice day!'], ['Me too!', 'Good night, too!']],
]);

SC('supermarket', 'A1', '🛒', 'Markette kasada', 'Bir şey ara, poşet iste ve öde.', [
  ['m', 'Affedersiniz, süt nerede?', ['Excuse me, where is the milk?', "Excuse me, where's the milk?"], ['Excuse me, what is milk?', 'I am milk, please.']],
  ['t', "It's in aisle three, next to the cheese.", 'Üçüncü reyonda, peynirin yanında.'],
  ['m', 'Teşekkürler.', ['Thank you.', 'Thanks.'], ['Sorry.', 'Please.']],
  ['t', 'Hi! Do you need a bag?', 'Merhaba! Poşet ister misiniz?'],
  ['m', 'Evet, bir poşet lütfen.', ['Yes, one bag, please.', 'Yes, please.'], ['No, I need.', 'Yes, I bag.']],
  ['t', "OK. That's twelve pounds forty, please.", 'Tamam. On iki sterlin kırk lütfen.'],
  ['m', 'Kartla ödeyebilir miyim?', ['Can I pay by card?', 'Can I pay with my card?'], ['Can I pay a card?', 'Do you pay by card?']],
  ['t', 'Of course. Just tap it here.', 'Tabii. Buraya dokundurun yeter.'],
  ['m', 'Fişi alabilir miyim?', ['Can I have the receipt, please?', 'Could I have a receipt, please?'], ['Can I have the recipe?', 'Where is my recipe?']],
  ['t', 'Here you are. Bye!', 'Buyurun. Hoşça kalın!'],
  ['m', 'Hoşça kalın, teşekkürler!', ['Bye, thanks!', 'Goodbye, thank you!'], ['Hello, thanks!', 'Good night, sorry!']],
]);

SC('taxi', 'A1', '🚕', 'Taksiye binmek', 'Adres ver, fiyatı ve süreyi sor.', [
  ['t', 'Hello! Where to?', 'Merhaba! Nereye?'],
  ['m', 'Grand Otel\'e lütfen.', ['To the Grand Hotel, please.', 'The Grand Hotel, please.'], ['I am the Grand Hotel.', 'Where is the Grand Hotel to?']],
  ['t', 'The Grand Hotel on King Street?', 'King Caddesi\'ndeki Grand Otel mi?'],
  ['m', 'Evet, doğru.', ["Yes, that's right.", 'Yes, correct.'], ['Yes, it\'s left.', 'No, that\'s right.']],
  ['m', 'Ne kadar sürer?', ['How long does it take?', 'How long will it take?'], ['How much does it take?', 'How long are you?']],
  ['t', 'About twenty minutes, depending on traffic.', 'Trafiğe bağlı olarak yaklaşık yirmi dakika.'],
  ['m', 'Yaklaşık ne kadar tutar?', ['How much will it cost, roughly?', 'About how much will it cost?', 'How much is it, roughly?'], ['How many is it?', 'How long is the money?']],
  ['t', 'Around twenty-five dollars.', 'Yirmi beş dolar civarı.'],
  ['m', 'Tamam. Burada durabilir misiniz?', ['OK. Can you stop here, please?', 'OK. Could you stop here, please?'], ['OK. Can you go here?', 'OK. Stop you here.']],
  ['t', 'Sure. That\'s twenty-three dollars.', 'Tabii. Yirmi üç dolar.'],
  ['m', 'Buyurun. Üstü kalsın.', ['Here you are. Keep the change.', 'Here you go. Keep the change.'], ['Here you are. Give me change.', 'Keep the money, please me.']],
]);

SC('hotel', 'A1', '🏨', 'Otele giriş', 'Rezervasyonunu söyle, kahvaltı ve Wi-Fi\'ı sor.', [
  ['t', 'Good evening! Welcome to the Sea View Hotel.', 'İyi akşamlar! Sea View Otel\'e hoş geldiniz.'],
  ['m', 'İyi akşamlar. Rezervasyonum var.', ['Good evening. I have a reservation.', 'Good evening. I have a booking.'], ['Good evening. I am a reservation.', 'Good night. I want a reservation.']],
  ['t', 'What name is it under?', 'Hangi isimle?'],
  ['m', 'Ali Demir adına.', ["It's under Ali Demir.", 'Ali Demir.', 'The name is Ali Demir.'], ['My name under Ali.', 'I am under Ali Demir.']],
  ['t', 'Yes, a single room for three nights. Can I see your passport, please?', 'Evet, üç gecelik tek kişilik oda. Pasaportunuzu görebilir miyim?'],
  ['m', 'Tabii, buyurun.', ['Sure, here you are.', 'Of course, here it is.'], ['Sure, here I am.', 'No, it\'s my passport.']],
  ['m', 'Kahvaltı dahil mi?', ['Is breakfast included?', 'Is breakfast included in the price?'], ['Is breakfast inside?', 'Do you eat breakfast?']],
  ['t', "Yes, it's served from seven to ten in the restaurant.", 'Evet, restoranda yediden ona kadar servis ediliyor.'],
  ['m', 'Wi-Fi şifresi ne?', ["What's the Wi-Fi password?", 'What is the Wi-Fi password?'], ['Where is the Wi-Fi?', 'What is the Wi-Fi word pass?']],
  ['t', "It's on your key card. You're in room 204. Enjoy your stay!", 'Anahtar kartınızın üstünde. Odanız 204. İyi konaklamalar!'],
  ['m', 'Çok teşekkürler!', ['Thank you very much!', 'Thanks a lot!'], ['You\'re welcome!', 'Enjoy, too!']],
]);

// ======================= A2 =======================
SC('passport', 'A2', '🛂', 'Pasaport kontrolü', 'Görevlinin sorularını sakin ve net cevapla.', [
  ['t', 'Good morning. Passport, please.', 'Günaydın. Pasaport lütfen.'],
  ['m', 'Günaydın, buyurun.', ['Good morning, here you are.', 'Good morning, here it is.'], ['Good night, here you are.', 'Good morning, I am passport.']],
  ['t', 'What is the purpose of your visit?', 'Ziyaretinizin amacı nedir?'],
  ['m', 'Tatil için buradayım.', ["I'm here on holiday.", "I'm here for a holiday.", "I'm here for tourism."], ["I'm here in a holiday ago.", 'I visit purpose.']],
  ['t', 'How long are you staying?', 'Ne kadar kalacaksınız?'],
  ['m', 'On gün kalacağım.', ["I'm staying for ten days.", "I'll stay for ten days.", 'For ten days.'], ['I stayed ten days.', 'Since ten days.']],
  ['t', 'Where are you staying?', 'Nerede kalacaksınız?'],
  ['m', 'Şehir merkezinde bir otelde kalacağım.', ["I'm staying at a hotel in the city centre.", "At a hotel in the city centre."], ['I am a hotel in the centre.', 'I stay the city in hotel.']],
  ['t', 'Do you have a return ticket?', 'Dönüş biletiniz var mı?'],
  ['m', 'Evet, işte dönüş biletim.', ["Yes, here's my return ticket.", 'Yes, here is my return ticket.'], ['Yes, I return the ticket.', 'No, here is my ticket return.']],
  ['t', 'Thank you. Enjoy your stay.', 'Teşekkürler. İyi tatiller.'],
  ['m', 'Teşekkür ederim.', ['Thank you.', 'Thanks very much.'], ['You too, enjoy.', 'Sorry.']],
]);

SC('restaurant', 'A2', '🍽️', 'Restoranda yemek', 'Masa iste, sipariş ver, alerjini söyle, hesabı iste.', [
  ['t', 'Good evening! Do you have a reservation?', 'İyi akşamlar! Rezervasyonunuz var mı?'],
  ['m', 'Hayır, iki kişilik masanız var mı?', ['No, do you have a table for two?', 'No. Have you got a table for two?'], ['No, we are two tables.', 'No, I want two reservation.']],
  ['t', 'Yes, follow me, please. Are you ready to order?', 'Evet, beni takip edin lütfen. Sipariş vermeye hazır mısınız?'],
  ['m', 'Ne önerirsiniz?', ['What do you recommend?', 'What would you recommend?'], ['What do you eat?', 'What is your recommend?']],
  ['t', 'The grilled salmon is very popular.', 'Izgara somon çok tercih ediliyor.'],
  ['m', 'Tamam, somonu alayım.', ["OK, I'll have the salmon.", "OK, I'd like the salmon, please."], ['OK, I am the salmon.', 'OK, I had the salmon.']],
  ['m', 'Fıstık alerjim var. İçinde fıstık var mı?', ["I'm allergic to nuts. Does it have nuts in it?", "I have a nut allergy. Does it contain nuts?"], ["I'm allergy nuts. It nuts?", 'I like nuts. Is it nuts?']],
  ['t', "No, it doesn't. Anything to drink?", 'Hayır, yok. İçecek bir şey?'],
  ['m', 'Sadece su lütfen.', ['Just water, please.', 'Just some water, please.'], ['Only drink, please.', 'Just water, thank.']],
  ['t', 'How was everything?', 'Her şey nasıldı?'],
  ['m', 'Harikaydı, teşekkürler. Hesabı alabilir miyiz?', ['It was great, thanks. Can we have the bill, please?', 'Delicious, thank you. Could we have the bill, please?'], ['It is great. Can we have the menu?', 'Great. Can we pay the bill to you later?']],
]);

SC('pharmacy', 'A2', '💊', 'Eczanede', 'Şikâyetini anlat, ilacın nasıl kullanılacağını sor.', [
  ['t', 'Hello, how can I help you?', 'Merhaba, nasıl yardımcı olabilirim?'],
  ['m', 'Başım ağrıyor ve boğazım ağrıyor.', ['I have a headache and a sore throat.', 'I have a headache and my throat hurts.'], ['I am headache and sore.', 'My head is a sore throat.']],
  ['t', 'How long have you had these symptoms?', 'Bu belirtiler ne zamandır var?'],
  ['m', 'İki gündür.', ['For two days.', "I've had them for two days."], ['Since two days.', 'Two days ago.']],
  ['t', 'Do you have a fever?', 'Ateşiniz var mı?'],
  ['m', 'Hayır, sanmıyorum.', ["No, I don't think so.", "I don't think so."], ['No, I think not so.', 'Yes, I don\'t.']],
  ['t', 'OK, these tablets should help.', 'Tamam, bu tabletler işe yarar.'],
  ['m', 'Ne sıklıkla almalıyım?', ['How often should I take them?', 'How many times a day should I take them?'], ['How long should I take?', 'How often I take it them?']],
  ['t', 'Take one every six hours, after food.', 'Altı saatte bir, yemekten sonra bir tane alın.'],
  ['m', 'Yan etkisi var mı?', ['Are there any side effects?', 'Do they have any side effects?'], ['Are there any side?', 'Is it effect?']],
  ['t', 'They might make you a little sleepy.', 'Biraz uyku yapabilir.'],
  ['m', 'Tamam, teşekkürler. Ne kadar?', ['OK, thanks. How much are they?', 'OK, thank you. How much is that?'], ['OK, thanks. How many are they?', 'OK. How much sleepy?']],
]);

SC('metro', 'A2', '🚇', 'Metroda bilet', 'Bilet al, hattı ve aktarmayı sor.', [
  ['m', 'Affedersiniz, şehir merkezine bir bilet istiyorum.', ["Excuse me, I'd like a ticket to the city centre.", 'Excuse me, one ticket to the city centre, please.'], ['Excuse me, I am a ticket centre.', 'Excuse me, where is a ticket?']],
  ['t', 'Single or return?', 'Tek yön mü, gidiş-dönüş mü?'],
  ['m', 'Gidiş-dönüş lütfen.', ['Return, please.', 'A return ticket, please.'], ['Single, please.', 'Back and go, please.']],
  ['t', "That's six eighty. You can also get a day pass for eight pounds.", 'Altı seksen. Sekiz sterline günlük kart da alabilirsiniz.'],
  ['m', 'O zaman günlük kart alayım.', ["I'll get a day pass, then.", "I'll take the day pass, then."], ['I got a day pass yesterday.', 'Then I am a day pass.']],
  ['m', 'Hangi hatta binmeliyim?', ['Which line should I take?', 'Which line do I need?'], ['What line are you?', 'Which line I take should?']],
  ['t', 'Take the blue line and change at Central for the red line.', 'Mavi hatta binin ve kırmızı hat için Central\'da aktarma yapın.'],
  ['m', "Yani Central'da aktarma mı yapmalıyım?", ['So I need to change at Central?', 'So I change at Central?', 'Do you mean I change at Central?'], ['So I am changing my money?', 'So Central is red?']],
  ['t', "That's right. It's about four stops.", 'Doğru. Yaklaşık dört durak.'],
  ['m', 'Çok yardımcı oldunuz, teşekkürler!', ["That's really helpful, thanks!", 'Thanks, that was very helpful!'], ['You are very help!', "I'm very helpful, thanks!"]],
]);

SC('clothes', 'A2', '👕', 'Kıyafet mağazası', 'Beden sor, dene, değişim yap.', [
  ['t', 'Hi! Can I help you?', 'Merhaba! Yardımcı olabilir miyim?'],
  ['m', 'Sadece bakıyorum, teşekkürler.', ["I'm just looking, thanks.", "Just looking, thank you."], ['I am just see, thanks.', 'Yes, I help you.']],
  ['m', 'Bu tişörtün M bedeni var mı?', ['Do you have this T-shirt in medium?', 'Have you got this T-shirt in a medium?'], ['Do you have medium T-shirt is?', 'Is this T-shirt my size?']],
  ['t', 'Let me check… Yes, here you are.', 'Bir bakayım… Evet, buyurun.'],
  ['m', 'Deneyebilir miyim?', ['Can I try it on?', 'Could I try it on?'], ['Can I try it?', 'Can I wear it on you?']],
  ['t', 'Sure, the fitting rooms are over there. … How was it?', 'Tabii, deneme kabinleri şurada. … Nasıl oldu?'],
  ['m', 'Biraz küçük. Bir büyük beden var mı?', ["It's a bit small. Do you have a larger size?", "It's a little small. Have you got it in large?"], ['It is a bit big. Do you have smaller?', 'It small. Large is?']],
  ['t', 'Here you go, a large.', 'Buyurun, L beden.'],
  ['m', 'Mükemmel, bunu alıyorum.', ["Perfect, I'll take it.", "Great, I'll buy it."], ['Perfect, I took it.', 'Perfect, take it you.']],
  ['m', 'Uymazsa iade edebilir miyim?', ["Can I return it if it doesn't fit?", "If it doesn't fit, can I bring it back?"], ["Can I return if it fits?", 'Can I fit it back?']],
  ['t', 'Yes, within thirty days with the receipt.', 'Evet, fişle otuz gün içinde.'],
  ['m', 'Harika, teşekkürler!', ['Great, thanks!', 'Perfect, thank you!'], ['Great, sorry!', "You're welcome!"]],
]);

SC('luggage', 'A2', '🧳', 'Kayıp bagaj', 'Bavulun gelmedi: durumu anlat ve bilgi ver.', [
  ['m', 'Affedersiniz, bavulum gelmedi.', ["Excuse me, my suitcase didn't arrive.", "Excuse me, my bag hasn't arrived."], ["Excuse me, my suitcase doesn't came.", 'Excuse me, I lost on the suitcase.']],
  ['t', "I'm sorry to hear that. Which flight were you on?", 'Bunu duyduğuma üzüldüm. Hangi uçuştaydınız?'],
  ['m', "İstanbul'dan TK 1979 sefer sayılı uçuştaydım.", ['I was on flight TK 1979 from Istanbul.', 'Flight TK 1979 from Istanbul.'], ['I am flight from Istanbul.', 'I was in Istanbul at flight.']],
  ['t', 'Can you describe your bag?', 'Bavulunuzu tarif edebilir misiniz?'],
  ['m', 'Büyük, siyah, tekerlekli bir bavul.', ["It's a big black suitcase with wheels.", "It's a large black suitcase with wheels."], ['It is black big wheels suitcase have.', 'It has a big black.']],
  ['t', 'Is there anything on it, like a name tag?', 'Üstünde isim etiketi gibi bir şey var mı?'],
  ['m', 'Evet, sarı bir etiketi var.', ['Yes, it has a yellow tag.', "Yes, there's a yellow tag on it."], ['Yes, it is yellow tag.', 'Yes, I have yellow.']],
  ['t', 'OK. We\'ll send it to your hotel when it arrives.', 'Tamam. Geldiğinde otelinize göndereceğiz.'],
  ['m', 'Ne zaman gelir?', ['When will it arrive?', 'When do you think it will arrive?'], ['When did it arrive?', 'When it will arrive?']],
  ['t', 'Probably tomorrow. Here is your reference number.', 'Muhtemelen yarın. İşte referans numaranız.'],
  ['m', 'Tamam, yardımınız için teşekkürler.', ['OK, thanks for your help.', 'OK, thank you for your help.'], ['OK, thanks for your helping me.', 'OK, you help thanks.']],
]);

SC('sim', 'A2', '📱', 'Hat almak', 'Yerel bir SIM kart ve internet paketi al.', [
  ['m', 'Merhaba, bir SIM kart almak istiyorum.', ["Hi, I'd like to buy a SIM card.", 'Hello, I want to get a SIM card.'], ["Hi, I'd like to sell a SIM card.", 'Hi, I am SIM card.']],
  ['t', 'Sure. How long are you staying in the country?', 'Tabii. Ülkede ne kadar kalacaksınız?'],
  ['m', 'Yaklaşık iki hafta.', ['About two weeks.', 'For about two weeks.'], ['Two weeks ago.', 'Since two weeks.']],
  ['t', 'Then I recommend this plan: 20 gigabytes for fifteen euros.', 'O zaman bu paketi öneririm: on beş avroya 20 gigabayt.'],
  ['m', 'Arama da dahil mi?', ['Does it include calls?', 'Are calls included too?'], ['Does it call include?', 'Is it calls?']],
  ['t', 'Yes, unlimited local calls. I\'ll need your passport.', 'Evet, sınırsız yerel arama. Pasaportunuz gerekecek.'],
  ['m', 'Buyurun. Kurmama yardım edebilir misiniz?', ['Here you are. Could you help me set it up?', 'Here it is. Can you help me set it up?'], ['Here. Can you set me up?', 'Here you are. Can I help you?']],
  ['t', 'Of course. Give me your phone… Done! It works now.', 'Tabii. Telefonunuzu verin… Tamam! Şimdi çalışıyor.'],
  ['m', 'Harika, çok teşekkürler!', ['Great, thank you so much!', 'Perfect, thanks a lot!'], ['Great, you are welcome!', 'Great, sorry so much!']],
]);

// ======================= B1 =======================
SC('smalltalk', 'B1', '🌤️', 'Komşuyla sohbet', 'Havadan sudan konuş, sohbeti sürdür.', [
  ['t', 'Morning! Lovely weather today, isn\'t it?', 'Günaydın! Bugün hava çok güzel, değil mi?'],
  ['m', 'Evet, harika! Sonunda güneş çıktı.', ["Yes, it's beautiful! The sun's finally out.", "Yes, it's lovely! The sun is finally out."], ['Yes, it was beautiful yesterday.', "No, it's lovely weather."]],
  ['t', 'So, you\'ve just moved in, right? How are you finding the area?', 'Yeni taşındınız, değil mi? Bölgeyi nasıl buluyorsunuz?'],
  ['m', 'Çok seviyorum. Sessiz ve herkes çok kibar.', ["I really like it. It's quiet and everyone is very friendly.", "I love it. It's quiet and people are really nice."], ['I find it on the map.', 'I like it very much people quiet.']],
  ['t', 'That\'s good to hear. What brings you here?', 'Bunu duyduğuma sevindim. Sizi buraya ne getirdi?'],
  ['m', 'İş için geldim. Yeni bir işe başladım.', ["I came here for work. I've just started a new job.", "I'm here for work. I started a new job."], ['I brought my car here.', 'I come work new job starting.']],
  ['t', 'Oh, nice! What do you do?', 'Aa, güzel! Ne iş yapıyorsunuz?'],
  ['m', 'Yazılım geliştiriciyim. Ya siz?', ["I'm a software developer. How about you?", "I work as a software developer. What about you?"], ["I'm a software. And you are?", 'I do software. You too?']],
  ['t', "I'm a nurse at the local hospital. Well, if you need anything, just knock!", 'Yerel hastanede hemşireyim. Bir şeye ihtiyacınız olursa kapımı çalın yeter!'],
  ['m', 'Çok naziksiniz, teşekkürler. Görüşürüz!', ["That's very kind of you, thanks. See you around!", "Thanks, that's really kind. See you!"], ["You're very kind of me. Bye!", 'Thanks, I will knock you!']],
]);

SC('doctor', 'B1', '🩺', 'Doktor randevusu', 'Telefonda randevu al ve belirtilerini anlat.', [
  ['t', 'Good morning, Riverside Clinic. How can I help?', 'Günaydın, Riverside Kliniği. Nasıl yardımcı olabilirim?'],
  ['m', 'Merhaba, doktordan randevu almak istiyorum.', ["Hello, I'd like to make an appointment with a doctor.", "Hi, I'd like to book an appointment to see a doctor."], ["Hello, I'd like to take an appointment doctor.", 'Hi, I am an appointment.']],
  ['t', 'Are you registered with us?', 'Bize kayıtlı mısınız?'],
  ['m', 'Hayır, burada yeniyim. Sadece birkaç aydır buradayım.', ["No, I'm new here. I've only been here for a few months.", "No, I've just moved here a few months ago."], ['No, I am here since few months.', "No, I'm registering you."]],
  ['t', "That's fine. What seems to be the problem?", 'Sorun değil. Sorun nedir?'],
  ['m', 'Bir haftadır kötü bir öksürüğüm var ve geçmiyor.', ["I've had a bad cough for a week and it won't go away.", "I've been coughing for a week and it isn't getting better."], ["I have a bad cough since a week.", 'I had a cough last week, now fine.']],
  ['t', 'I see. We have an appointment tomorrow at 10:15. Is that OK?', 'Anlıyorum. Yarın 10.15\'te bir randevumuz var. Uygun mu?'],
  ['m', 'Daha geç bir saat var mı? Sabah çalışıyorum.', ["Do you have anything later? I work in the mornings.", "Is there anything later? I'm at work in the morning."], ['Do you have earlier? I sleep in the morning.', 'Is it later? I work tomorrow 10:15.']],
  ['t', 'How about 4:30 in the afternoon?', 'Öğleden sonra 4.30\'a ne dersiniz?'],
  ['m', 'Mükemmel, uyar.', ['Perfect, that works for me.', 'That\'s perfect, thanks.'], ['Perfect, I work.', "That's suit me."]],
  ['t', 'Great. Can I have your name and date of birth?', 'Harika. Adınızı ve doğum tarihinizi alabilir miyim?'],
  ['m', 'Ali Demir, 3 Mart 1998.', ['Ali Demir, the third of March, 1998.', "It's Ali Demir, March third, 1998."], ['Ali Demir, I born three March.', 'My birth is Ali Demir.']],
]);

SC('landlord', 'B1', '🔧', 'Ev sahibine sorun bildirme', 'Bozuk ısıtmayı kibarca ama net şikâyet et.', [
  ['t', 'Hello?', 'Alo?'],
  ['m', 'Merhaba, ben 4B dairesinden Ali. Rahatsız ettiğim için kusura bakmayın.', ["Hi, it's Ali from flat 4B. Sorry to bother you.", "Hello, this is Ali from flat 4B. Sorry to disturb you."], ["Hi, I am Ali flat. Sorry to bothering.", "Hi, it's flat 4B. You bother me."]],
  ['t', 'Oh, hi Ali. Is everything OK?', 'Aa, merhaba Ali. Her şey yolunda mı?'],
  ['m', 'Maalesef ısıtmayla ilgili bir sorun var. Dünden beri çalışmıyor.', ["I'm afraid there's a problem with the heating. It hasn't worked since yesterday.", "Unfortunately the heating isn't working. It stopped yesterday."], ["I'm afraid of the heating since yesterday.", "The heating is a problem yesterday working."]],
  ['t', 'Oh no. Have you checked the boiler?', 'Eyvah. Kombiye baktınız mı?'],
  ['m', 'Evet, kapatıp açtım ama hâlâ çalışmıyor.', ["Yes, I turned it off and on again, but it still doesn't work.", "Yes, I restarted it, but it's still not working."], ['Yes, I turned on it off, but it works.', 'Yes, I checked, it is good working.']],
  ['t', "OK, I'll call a plumber. They might come on Friday.", 'Tamam, bir tesisatçı çağıracağım. Cuma gelebilirler.'],
  ['m', 'Daha erken olabilir mi? Evde çok soğuk.', ["Could it be any sooner? It's really cold in the flat.", "Is there any chance someone could come earlier? It's freezing here."], ['Could it be more later? It is hot.', "Can you come cold? It's sooner."]],
  ['t', "I'll see what I can do. I'll call you back this afternoon.", 'Elimden geleni yapacağım. Öğleden sonra sizi geri ararım.'],
  ['m', 'Teşekkürler, gerçekten minnettarım.', ['Thanks, I really appreciate it.', 'Thank you, I really appreciate that.'], ['Thanks, I really appreciate you it.', 'Thanks, you appreciate it.']],
]);

SC('police', 'B1', '👮', 'Polise kayıp bildirmek', 'Telefonunun çalındığını anlat ve rapor iste.', [
  ['t', 'Good afternoon. How can I help you?', 'İyi günler. Nasıl yardımcı olabilirim?'],
  ['m', 'Telefonumun çalındığını bildirmek istiyorum.', ["I'd like to report a stolen phone.", 'I want to report that my phone was stolen.'], ["I'd like to steal a phone.", 'My phone stole me.']],
  ['t', 'I\'m sorry. When and where did it happen?', 'Üzgünüm. Ne zaman ve nerede oldu?'],
  ['m', 'Bu sabah saat on civarında, metrodaydım.', ['This morning at about ten. I was on the metro.', 'Around ten this morning, while I was on the metro.'], ['Tomorrow at ten, I will be on the metro.', 'At ten, the metro was stealing.']],
  ['t', 'Did you see who took it?', 'Kimin aldığını gördünüz mü?'],
  ['m', 'Hayır, fark ettiğimde çoktan gitmişti.', ["No, by the time I noticed, it had already gone.", "No. When I noticed, it was already gone."], ['No, I noticed who took it.', 'No, I had gone already.']],
  ['t', 'Can you describe the phone?', 'Telefonu tarif edebilir misiniz?'],
  ['m', 'Mavi kılıflı, siyah bir telefon.', ["It's a black phone with a blue case.", "It's black and it has a blue case."], ['It is blue case phone black with.', 'It describes black.']],
  ['t', "OK. I'll fill in a report. You'll need it for your insurance.", 'Tamam. Bir tutanak dolduracağım. Sigortanız için gerekecek.'],
  ['m', 'Raporun bir kopyasını alabilir miyim?', ['Could I get a copy of the report?', 'Can I have a copy of the report, please?'], ['Could I copy you the report?', 'Can I report a copy?']],
  ['t', 'Of course. Here is your reference number.', 'Tabii. İşte referans numaranız.'],
  ['m', 'Teşekkürler, yardımınız için minnettarım.', ['Thank you, I appreciate your help.', 'Thanks for your help.'], ['Thank you, I appreciate you help.', "You're welcome."]],
]);

SC('party', 'B1', '🎉', 'Partide yeni insanlar', 'Tanış, sohbeti sürdür ve iletişim bilgisi al.', [
  ['t', "Hi! I don't think we've met. I'm Jake, Sarah's colleague.", 'Selam! Tanıştığımızı sanmıyorum. Ben Jake, Sarah\'nın iş arkadaşıyım.'],
  ['m', 'Merhaba Jake, ben Elif. Sarah ile üniversiteden arkadaşız.', ["Hi Jake, I'm Elif. Sarah and I are friends from university.", "Hi, I'm Elif. I know Sarah from university."], ["Hi Jake, I'm Sarah's university.", "Hi, I'm Elif. Sarah is my colleague of university."]],
  ['t', "Oh, nice! Are you enjoying the party?", 'Aa, güzel! Partiden keyif alıyor musun?'],
  ['m', 'Evet, müzik harika. Kimin seçtiğini biliyor musun?', ['Yes, the music is great. Do you know who chose it?', "Yeah, the music's brilliant. Do you know who picked it?"], ['Yes, I enjoy to the music. Who chose?', 'Yes, the music who is great?']],
  ['t', 'Ha, it was me, actually!', 'Ha, aslında bendim!'],
  ['m', 'Gerçekten mi? Müzik zevkin çok iyi!', ['Really? You have great taste in music!', 'Seriously? Your music taste is great!'], ['Really? You taste the music great!', 'Really? You are a great music!']],
  ['t', 'Thanks! So, what do you do in your free time?', 'Teşekkürler! Peki boş zamanlarında ne yaparsın?'],
  ['m', 'Doğa yürüyüşlerine bayılırım. Hafta sonları genelde dağlara giderim.', ["I love hiking. I usually go to the mountains at weekends.", "I'm really into hiking. I often go to the mountains at the weekend."], ['I love to hike yesterday at the mountains.', 'I am hiking usually the weekend mountains.']],
  ['t', "No way! Me too. We should go together sometime.", 'Yok artık! Ben de. Bir ara birlikte gitmeliyiz.'],
  ['m', 'Kesinlikle! Numaralarımızı değiş tokuş edelim mi?', ['Definitely! Shall we swap numbers?', "Absolutely! Why don't we exchange numbers?"], ['Definitely! Shall we change numbers?', 'Sure! Give me your swap.']],
]);

SC('firstday', 'B1', '💼', 'İşte ilk gün', 'Ekiple tanış, görevini ve kuralları sor.', [
  ['t', "Welcome to the team! I'm Lisa, the team leader.", 'Ekibe hoş geldin! Ben Lisa, takım lideriyim.'],
  ['m', 'Teşekkürler, burada olduğum için çok heyecanlıyım.', ["Thank you, I'm really excited to be here.", "Thanks, I'm very happy to be here."], ["Thank you, I'm really exciting to be here.", 'Thanks, you are excited here.']],
  ['t', "Let me show you around. This is your desk, and the kitchen is over there.", 'Sana etrafı göstereyim. Bu senin masan, mutfak da şurada.'],
  ['m', 'Harika. Ofise saat kaçta gelmem gerekiyor?', ['Great. What time do I need to be in the office?', 'Great. What time should I get here in the morning?'], ['Great. What time do I need the office?', 'Great. When is the office coming?']],
  ['t', 'We\'re flexible, but most people start around nine.', 'Esneğiz ama çoğu kişi dokuz civarı başlar.'],
  ['m', 'Evden çalışmak mümkün mü?', ['Is it possible to work from home?', 'Can I work from home sometimes?'], ['Is it possible to home working?', 'Can I work for home?']],
  ['t', 'Yes, twice a week, once you\'ve finished your training.', 'Evet, eğitimini bitirdikten sonra haftada iki gün.'],
  ['m', 'Anladım. Bir sorum olursa kime sormalıyım?', ['I see. Who should I ask if I have a question?', 'Got it. Who can I ask if I have any questions?'], ['I see. Who should ask me a question?', 'I see. Who I ask if question?']],
  ['t', 'You can always ask me or Tom. Don\'t hesitate!', 'Bana ya da Tom\'a her zaman sorabilirsin. Çekinme!'],
  ['m', 'Çok teşekkürler, bu çok yardımcı oldu.', ["Thanks a lot, that's really helpful.", 'Thank you so much, that helps a lot.'], ["Thanks a lot, I'm really helpful.", 'Thanks, you hesitate a lot.']],
]);

// ======================= B2 =======================
SC('flight', 'B2', '✈️', 'Uçuş iptali', 'Uçuşun iptal oldu: yeni uçuş ve tazminat iste.', [
  ['t', 'Next, please. How can I help?', 'Sıradaki lütfen. Nasıl yardımcı olabilirim?'],
  ['m', 'Londra uçuşum iptal edildi. Beni bir sonraki uçağa alabilir misiniz?', ["My flight to London has been cancelled. Could you put me on the next one?", "My London flight was cancelled. Can you rebook me on the next flight?"], ['My flight to London is cancelling me. Can I put you?', 'I cancelled my flight. Give me the next.']],
  ['t', "I'm afraid the next flight is fully booked. The earliest I can offer is tomorrow at 7 a.m.", 'Korkarım bir sonraki uçuş tamamen dolu. Size sunabileceğim en erken uçuş yarın sabah 7.'],
  ['m', 'Bu benim için ciddi bir sorun; yarın sabah önemli bir toplantım var.', ["That's a real problem for me. I have an important meeting tomorrow morning.", "That's going to be difficult, as I have an important meeting tomorrow morning."], ['That is no problem, I have a meeting.', 'It is problem because the meeting has me.']],
  ['t', 'I understand. I could check flights with our partner airlines.', 'Anlıyorum. Ortak havayollarımızın uçuşlarına bakabilirim.'],
  ['m', 'Lütfen bakın. Bu gece kalkan herhangi bir uçuş olur.', ['Yes, please. Anything that leaves tonight would be great.', "Please do. Any flight leaving tonight would be fine."], ['Please. Any flight that left last night.', 'Yes, I leave tonight anything.']],
  ['t', "There's one at 9:40 p.m., but it has a stopover in Paris.", 'Akşam 21.40\'ta bir tane var ama Paris\'te aktarmalı.'],
  ['m', 'Sorun değil, onu alırım. Bagajım otomatik olarak aktarılır mı?', ["That's fine, I'll take it. Will my luggage be transferred automatically?", "No problem, I'll take that one. Will my bags go straight through?"], ['Fine. Will I transfer my luggage automatically?', 'OK. Is my luggage stopping in Paris?']],
  ['t', "Yes, it will. And you'll get a meal voucher for the delay.", 'Evet. Ayrıca rötar için bir yemek kuponu alacaksınız.'],
  ['m', 'Teşekkürler. Tazminat hakkım olup olmadığını da öğrenebilir miyim?', ["Thanks. Could you also tell me if I'm entitled to compensation?", 'Thank you. Am I entitled to any compensation as well?'], ['Thanks. Can I compensate you?', 'Thanks. Do I entitle the compensation?']],
  ['t', 'You can apply online. I\'ll give you the form details.', 'Online başvurabilirsiniz. Form bilgilerini vereceğim.'],
  ['m', 'Harika, çok teşekkürler.', ['Great, thank you very much.', 'Perfect, thanks a lot.'], ['Great, you too.', 'Sorry, thanks.']],
]);

SC('complaint', 'B2', '😤', 'Otelde şikâyet', 'Kötü odayla ilgili kibar ama kararlı şikâyet et.', [
  ['t', 'Good evening. Is everything alright with your room?', 'İyi akşamlar. Odanızla ilgili her şey yolunda mı?'],
  ['m', 'Maalesef değil. Deniz manzaralı oda ayırtmıştım ama odam otoparka bakıyor.', ["I'm afraid not. I booked a sea-view room, but mine overlooks the car park.", "Unfortunately not. I booked a room with a sea view, but it faces the car park."], ['Not afraid. I see the sea from the car park.', 'Yes, my room is a car park view, good.']],
  ['t', 'I\'m very sorry about that. Let me check… Unfortunately, we\'re fully booked tonight.', 'Bunun için çok üzgünüm. Bir bakayım… Maalesef bu gece tamamen doluyuz.'],
  ['m', 'Anlıyorum, ama deniz manzarası için ekstra ödeme yaptım.', ['I understand, but I paid extra for the sea view.', 'I see, but I did pay extra for a sea view.'], ['I understand, but the sea paid me extra.', 'I see, I will pay extra now.']],
  ['t', 'Of course. Would you be willing to move tomorrow morning?', 'Elbette. Yarın sabah taşınmayı kabul eder misiniz?'],
  ['m', 'Bu olabilir, eğer bu geceki farkın iadesini yaparsanız.', ["That could work, provided that you refund the difference for tonight.", "I'd be OK with that, as long as you refund the difference for tonight."], ['That works, unless you refund tonight.', 'It could work if I refund you tonight.']],
  ['t', "That's fair. I'll arrange the refund and move you at nine.", 'Bu adil. İadeyi ayarlayıp sizi saat dokuzda taşıyacağım.'],
  ['m', 'Bunu yazılı olarak onaylayabilir misiniz?', ['Could you confirm that in writing, please?', 'Would you mind confirming that by email?'], ['Could you write me confirmed?', 'Can you confirm me written?']],
  ['t', "Certainly. I'll send you an email right away.", 'Elbette. Hemen bir e-posta göndereceğim.'],
  ['m', 'Teşekkür ederim, bu çok yardımcı oldu.', ['Thank you, I appreciate your help.', "Thanks, that's very helpful."], ['Thank you, I appreciate you helping it.', 'Thanks, I am help.']],
]);

SC('interview', 'B2', '🤝', 'İş görüşmesi', 'Kendini tanıt, deneyimini ve hedeflerini anlat.', [
  ['t', 'Thanks for coming in. Could you tell me a bit about yourself?', 'Geldiğiniz için teşekkürler. Bize biraz kendinizden bahseder misiniz?'],
  ['m', 'Tabii. Beş yıldır pazarlama alanında çalışıyorum, şu an dijital kampanyalar yönetiyorum.', ["Sure. I've been working in marketing for five years, and I currently manage digital campaigns.", "Of course. I've worked in marketing for five years. At the moment, I manage digital campaigns."], ['Sure. I work in marketing since five years.', 'Sure. I was managing marketing five years ago now.']],
  ['t', 'What would you say is your greatest strength?', 'En büyük gücünüz nedir?'],
  ['m', 'Baskı altında iyi çalışırım ve ekipleri organize etmekte iyiyim.', ["I work well under pressure and I'm good at organising teams.", "I'm good at working under pressure and organising people."], ['I work good under pressure and I organise good.', 'My strength is pressure good.']],
  ['t', 'Can you give me an example?', 'Bir örnek verebilir misiniz?'],
  ['m', 'Geçen yıl bir lansmanı yalnızca iki haftada planlamak zorunda kaldık ve zamanında bitirdik.', ['Last year we had to plan a product launch in just two weeks, and we finished it on time.', 'Last year, we had only two weeks to plan a launch, and we delivered on time.'], ['Last year we must plan a launch and we finish it.', 'Next year we will have to plan in two weeks.']],
  ['t', 'Impressive. Why do you want to leave your current job?', 'Etkileyici. Neden şu anki işinizden ayrılmak istiyorsunuz?'],
  ['m', 'Yeni zorluklar arıyorum ve uluslararası bir ekipte çalışmak istiyorum.', ["I'm looking for new challenges, and I'd like to work in an international team.", "I want new challenges and I'd love to work with an international team."], ['I look new challenges and international.', 'I am leaving because my team is international.']],
  ['t', 'Do you have any questions for us?', 'Bize sormak istediğiniz bir şey var mı?'],
  ['m', 'Evet, bu pozisyonda tipik bir gün nasıl geçiyor?', ['Yes, what does a typical day look like in this role?', "Yes. Could you describe a typical day in this position?"], ['Yes, what is a typical day to look?', 'Yes, how was your day?']],
]);

SC('bank', 'B2', '🏦', 'Banka hesabı açmak', 'Hesap aç, ücretleri ve kartı sor.', [
  ['t', 'Good morning. What can I do for you today?', 'Günaydın. Bugün sizin için ne yapabilirim?'],
  ['m', 'Günaydın. Cari hesap açmak istiyorum.', ["Good morning. I'd like to open a current account.", "Good morning. I'm here to open a current account."], ["Good morning. I'd like to close my account.", 'Good morning. I want to account open.']],
  ['t', 'Certainly. Do you have proof of address and your passport?', 'Elbette. Adres belgeniz ve pasaportunuz var mı?'],
  ['m', 'Pasaportum var ama adres belgesi olarak ne kabul ediyorsunuz?', ['I have my passport, but what do you accept as proof of address?', "I've got my passport. What counts as proof of address?"], ['I have passport, but what address you accept me?', 'I have proof, but where is my address?']],
  ['t', 'A utility bill or your rental contract is fine.', 'Bir fatura ya da kira sözleşmeniz yeterli.'],
  ['m', 'Harika, kira sözleşmem yanımda. Aylık bir ücret var mı?', ["Great, I've got my rental contract with me. Is there a monthly fee?", 'Perfect, I have my rental contract. Are there any monthly fees?'], ['Great, I rent my contract. Is the month free?', 'Good. Do you pay me monthly?']],
  ['t', "There's no fee as long as you pay in at least five hundred a month.", 'Ayda en az beş yüz yatırdığınız sürece ücret yok.'],
  ['m', 'Anlaşıldı. Banka kartım ne zaman gelir?', ['Understood. When will my debit card arrive?', 'Got it. How long will it take for my card to arrive?'], ['Understood. When did my card arrive?', 'OK. When will my card send me?']],
  ['t', 'Within five working days, by post.', 'Beş iş günü içinde, postayla.'],
  ['m', 'Mükemmel. Mobil uygulamayı bugün kullanmaya başlayabilir miyim?', ['Perfect. Can I start using the mobile app today?', 'Great. Will I be able to use the app today?'], ['Perfect. Can I start to using the app today?', 'Great. Can the app use me today?']],
]);

// ======================= C1 =======================
SC('negotiate', 'C1', '📑', 'Kira pazarlığı', 'Kira artışına karşı ikna edici ve diplomatik ol.', [
  ['t', "As you know, we're increasing the rent by fifteen percent from next month.", 'Bildiğiniz gibi, gelecek aydan itibaren kirayı yüzde on beş artırıyoruz.'],
  ['m', 'Durumu anlıyorum, ancak bu oldukça yüksek bir artış. Bunu konuşabilir miyiz?', ["I understand the situation, but that's quite a steep increase. Could we discuss it?", "I see where you're coming from, but fifteen percent is rather high. Is there any room for discussion?"], ["I understand, but fifteen is a steep. We discuss?", "I don't understand the rent. Increase it more."]],
  ['t', "Well, prices have gone up everywhere. What did you have in mind?", 'Her yerde fiyatlar arttı. Aklınızda ne vardı?'],
  ['m', 'İki yıldır burada yaşıyorum ve kirayı hiç geciktirmedim. Yüzde beş daha makul olur.', ["I've lived here for two years and I've never paid late. Five percent would seem more reasonable.", "I've been a reliable tenant for two years. Something around five percent would be fairer."], ['I live here two years and pay late never. Five is reasonable more.', "I've paid late for two years, so five percent."]],
  ['t', "Five is too low for me, I'm afraid.", 'Korkarım beş benim için çok düşük.'],
  ['m', 'Peki, sözleşmeyi bir yıl daha uzatırsam, yüzde sekizi kabul eder misiniz?', ["In that case, would you accept eight percent if I extended the contract for another year?", "What if I signed for another year? Would eight percent work for you?"], ['If I would extend, you accepted eight?', 'In case, I accept eight if you extend me.']],
  ['t', "Hmm, a longer contract does give me some security. Let's say ten.", 'Hmm, uzun bir sözleşme bana güvence verir. On diyelim.'],
  ['m', 'Ortada buluşalım: yüzde dokuz ve iki yıllık sözleşme.', ["Let's meet halfway: nine percent and a two-year contract.", "How about we meet in the middle: nine percent with a two-year lease?"], ["Let's meet at the half: nine and two.", 'We meet halfway at ten percent, one year.']],
  ['t', 'Alright, you drive a hard bargain. Nine it is.', 'Peki, sıkı pazarlık ediyorsunuz. Dokuz olsun.'],
  ['m', 'Teşekkürler. Yeni sözleşmeyi bu hafta gönderebilirseniz sevinirim.', ["Thank you. I'd appreciate it if you could send the new contract this week.", 'Thanks. Could you send over the new contract this week?'], ['Thank you. I appreciate if you send me contract this week.', 'Thanks. I send you the contract this week.']],
]);

SC('debate', 'C1', '🗣️', 'Fikir tartışması', 'Uzaktan çalışma üzerine dengeli ve ikna edici konuş.', [
  ['t', "Honestly, I think remote work is killing team spirit. Don't you agree?", 'Açıkçası uzaktan çalışmanın takım ruhunu öldürdüğünü düşünüyorum. Katılmıyor musun?'],
  ['m', 'Bir noktaya kadar katılıyorum, ama bunun tamamen yönetime bağlı olduğunu düşünüyorum.', ["I agree to some extent, but I think it largely depends on how it's managed.", "Up to a point, yes, but I'd say it depends on the management."], ['I agree to some point, but management is killing.', 'I totally agree, remote work is always bad.']],
  ['t', 'But people barely talk to each other anymore.', 'Ama insanlar artık birbirleriyle neredeyse hiç konuşmuyor.'],
  ['m', 'Bu doğru olabilir, ancak araştırmalar uzaktan çalışanların daha verimli olma eğiliminde olduğunu gösteriyor.', ['That may be true, but research suggests remote workers tend to be more productive.', "Granted, but studies show that people working from home tend to be more productive."], ['That is maybe true, but research tends productive.', 'That may be true, so remote workers are lazy.']],
  ['t', 'Productive, maybe, but what about creativity?', 'Verimli belki, ama ya yaratıcılık?'],
  ['m', 'Haklı bir nokta. Belki de en iyi çözüm, ikisinin bir karışımı.', ["That's a fair point. Perhaps the best solution is a mix of both.", "Fair enough. Maybe a hybrid model would be the best of both worlds."], ['That is a fair. The best is perhaps mixing.', "That's not a point. Remote is the only solution."]],
  ['t', 'A hybrid model? How would that work in practice?', 'Hibrit model mi? Pratikte nasıl işler?'],
  ['m', 'Örneğin, ekipler haftada iki gün yaratıcı toplantılar için ofiste buluşabilir.', ['For example, teams could meet in the office twice a week for creative sessions.', 'Teams could, for instance, come into the office two days a week for brainstorming.'], ['For example, teams met twice in the office.', 'For example, creative teams must not meet.']],
  ['t', "Hmm, I hadn't thought of it that way.", 'Hmm, bu açıdan düşünmemiştim.'],
  ['m', 'Sonuçta, amaç hem esneklik hem de bağlılık sağlamak.', ['At the end of the day, the goal is to have both flexibility and connection.', "Ultimately, it's about combining flexibility with a sense of connection."], ['In the end of day, goal has flexible.', 'At the end of the day, we should all quit.']],
]);
