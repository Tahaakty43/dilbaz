// Dilbaz — Sürprizli konuşmalar: karşı taraf her seferinde farklı tepki verebilir ('v' = olası gidişatlardan biri seçilir)
// ['t', söz, Türkçesi] · ['m', niyet, [kabul edilen cevaplar], [yanlış seçenekler]] · ['v', [[gidişat 1...], [gidişat 2...]]]

SC('s-restaurant', 'A1', '🍽️', 'Sürpriz: Restoranda masa', 'Masa var mı yok mu? Her seferinde farklı. Duruma göre cevap ver.', [
  ['t', 'Good evening! Do you have a reservation?', 'İyi akşamlar! Rezervasyonunuz var mı?'],
  ['m', 'Hayır, yok. İki kişilik masa var mı?', ["No, we don't. Do you have a table for two?", 'No. Is there a table for two?', 'No, sorry. A table for two, please?'], ['Yes, I am two.', 'No, I have two tables.']],
  ['v', [
    [['t', "Sorry, we're full right now. You can wait about twenty minutes.", 'Üzgünüm, şu an doluyuz. Yaklaşık yirmi dakika bekleyebilirsiniz.'],
     ['m', 'Sorun değil, bekleriz.', ["No problem, we'll wait.", "That's fine, we can wait.", "Okay, we'll wait."], ['No problem, we are wait.', 'Twenty minutes is my table.']],
     ['t', 'Great. Can I have your name, please?', 'Harika. Adınızı alabilir miyim?'],
     ['m', 'Adım Ali.', ["It's Ali.", 'My name is Ali.', 'Ali.'], ['I am a name.', 'Your name is Ali.']]],
    [['t', 'Yes, of course. Inside or outside?', 'Evet, tabii. İçeride mi dışarıda mı?'],
     ['m', 'Dışarıda lütfen.', ['Outside, please.', "We'd like to sit outside, please."], ['Inside is outside.', 'I am outside.']],
     ['t', 'Sure. Follow me, please.', 'Tabii. Beni takip edin lütfen.'],
     ['m', 'Teşekkürler.', ['Thank you.', 'Thanks.', 'Thanks a lot.'], ["You're welcome.", 'Follow me too.']]],
  ]],
  ['t', 'Here are the menus. Anything to drink?', 'Menüler burada. İçecek bir şey?'],
  ['m', 'İki su lütfen.', ['Two waters, please.', 'Two bottles of water, please.', 'Water for two, please.'], ['Two water is please.', 'I drink two.']],
]);

SC('s-shop', 'A1', '🛍️', 'Sürpriz: Mağazada beden', 'İstediğin beden olmayabilir. Ona göre çözüm bul.', [
  ['t', 'Hi! Can I help you?', 'Merhaba! Yardımcı olabilir miyim?'],
  ['m', 'Evet, bu tişörtü orta beden arıyorum.', ["Yes, I'm looking for this T-shirt in medium.", 'Yes, do you have this T-shirt in medium?'], ['Yes, I am medium T-shirt.', 'No, I help you.']],
  ['v', [
    [['t', "Sorry, we don't have medium. We only have small and large.", 'Üzgünüm, orta beden yok. Sadece küçük ve büyük var.'],
     ['m', 'Büyüğü deneyebilir miyim?', ['Can I try the large one?', 'Can I try on the large?', "I'll try the large, please."], ['Can I large?', 'I try small large.']],
     ['t', 'Of course. The fitting room is over there.', 'Tabii. Deneme kabini şurada.']],
    [['t', 'Yes, here you are. Do you want to try it on?', 'Evet, buyurun. Denemek ister misiniz?'],
     ['m', 'Evet, deneme kabini nerede?', ['Yes, where is the fitting room?', 'Yes, please. Where can I try it on?'], ['Yes, I am fitting.', 'Where is the T-shirt room?']],
     ['t', "It's at the back, on the left.", 'Arkada, solda.']],
  ]],
  ['t', 'So, how is it?', 'Eee, nasıl oldu?'],
  ['m', 'Güzel, bunu alıyorum.', ["It's nice. I'll take it.", "Great, I'll take it."], ['It is nice, I take you.', 'I am nice.']],
]);

SC('s-hotel', 'A2', '🏨', 'Sürpriz: Otelde oda sorunu', 'Odanda bir sorun var. Hangi sorun çıkacağını bilemezsin.', [
  ['t', 'Reception, good evening. How can I help you?', 'Resepsiyon, iyi akşamlar. Nasıl yardımcı olabilirim?'],
  ['v', [
    [['m', 'Merhaba, 204 numaralı odadayım. Klima çalışmıyor.', ["Hi, I'm in room 204. The air conditioning isn't working.", "Hello, this is room 204. The air conditioning doesn't work."], ['Hi, I am 204. I am not working.', 'The room is air.']],
     ['t', "I'm sorry about that. I'll send someone in ten minutes.", 'Bunun için üzgünüm. On dakika içinde birini gönderiyorum.'],
     ['m', 'Teşekkürler. Ama çok sıcak, başka bir oda mümkün mü?', ["Thanks. But it's very hot. Is another room possible?", "Thank you. Could I change rooms? It's really hot."], ['Thanks. Hot is another room.', 'I am very hot room.']]],
    [['m', 'Merhaba, 204 numaralı odadayım. Duşta sıcak su yok.', ["Hi, I'm in room 204. There's no hot water in the shower.", "Hello, room 204. The shower has no hot water."], ['Hi, I am hot water.', 'The shower is 204.']],
     ['t', 'Oh, sorry. Our technician is busy. Can you wait thirty minutes?', 'Ah, üzgünüm. Teknisyenimiz meşgul. Otuz dakika bekleyebilir misiniz?'],
     ['m', 'Bu çok uzun. Bir an önce halledebilir misiniz?', ["That's too long. Can you sort it out as soon as possible?", "That's a long time. Could you fix it sooner, please?"], ['It is long, I am fix.', 'Thirty minutes is my water.']]],
  ]],
  ['t', "Of course. And we'll give you free breakfast tomorrow. Sorry again.", 'Tabii. Ayrıca yarın ücretsiz kahvaltı vereceğiz. Tekrar özür dileriz.'],
  ['m', 'Çok naziksiniz, teşekkürler.', ["That's very kind of you, thanks.", 'Thank you, that’s very kind.'], ['You are free breakfast.', 'I am very kind, thank you.']],
]);

SC('s-train', 'A2', '🚆', 'Sürpriz: İptal edilen tren', 'Trenin gecikebilir ya da iptal olabilir. Alternatif bul.', [
  ['t', 'Next, please. Where are you going?', 'Sıradaki lütfen. Nereye gidiyorsunuz?'],
  ['m', "Oxford'a. Saat 10 treni hangi perondan kalkıyor?", ["To Oxford. Which platform does the ten o'clock train leave from?", "Oxford. Which platform is the ten o'clock train?"], ['I am Oxford platform.', 'Oxford is ten.']],
  ['v', [
    [['t', "I'm afraid the ten o'clock train is cancelled.", 'Korkarım saat 10 treni iptal edildi.'],
     ['m', 'Bir sonraki tren ne zaman?', ['When is the next train?', "What time is the next train?"], ['When is the last train ago?', 'Where is the next?']],
     ['t', "There's one at ten forty, from platform three.", '10:40’ta bir tane var, 3. perondan.'],
     ['m', 'Biletim o trende geçerli mi?', ['Is my ticket valid on that train?', 'Can I use my ticket on that train?'], ['Is my train a ticket?', 'My ticket is ten forty.']]],
    [['t', "It's delayed by about thirty minutes. Platform five.", 'Yaklaşık otuz dakika gecikmeli. 5. peron.'],
     ['m', 'Yakında bir kafe var mı?', ['Is there a cafe near here?', 'Is there a cafe nearby?'], ['Is a cafe delayed?', 'There is cafe near?']],
     ['t', 'Yes, just behind you, next to the ticket machines.', 'Evet, hemen arkanızda, bilet makinelerinin yanında.'],
     ['m', 'Harika, çok teşekkürler.', ['Great, thanks a lot.', 'Perfect, thank you so much.'], ['Great, you are welcome.', 'Thanks, behind you.']]],
  ]],
  ['t', 'Anything else?', 'Başka bir şey?'],
  ['m', 'Hayır, bu kadar. İyi günler.', ["No, that's all. Have a nice day.", "No, that's it. Thanks, have a good day."], ['No, that is everything else.', 'Yes, nothing.']],
]);

SC('s-landlord', 'B1', '🏠', 'Sürpriz: Ev sahibiyle konuşma', 'Kirada bir sorun çıkıyor; ev sahibinin cevabı her seferinde farklı.', [
  ['t', "Hi, it's Mark, your landlord. Is everything okay with the flat?", 'Merhaba, ben Mark, ev sahibin. Dairede her şey yolunda mı?'],
  ['m', 'Genel olarak iyi ama ısıtma iki gündür çalışmıyor.', ["Mostly fine, but the heating hasn't worked for two days.", "It's fine in general, but the heating hasn't been working for two days."], ['Fine, the heating is two days.', 'I am not working for two days.']],
  ['v', [
    [['t', "Oh no. I'll call a plumber, but he can't come before Friday.", 'Eyvah. Bir tesisatçı arayacağım ama cumadan önce gelemez.'],
     ['m', 'Bu çok geç, ev buz gibi. Daha erken biri var mı?', ["That's too late, the flat is freezing. Is there anyone who could come earlier?", "Friday is too late. It's really cold. Can someone come sooner?"], ['Friday is freezing too late.', 'I am the plumber before Friday.']],
     ['t', "Okay, I'll try another company and call you back.", 'Tamam, başka bir firmayı deneyip seni geri arayacağım.']],
    [['t', 'Really? Did you check the boiler? Sometimes you just need to restart it.', 'Gerçekten mi? Kombiye baktın mı? Bazen sadece yeniden başlatmak gerekir.'],
     ['m', 'Evet, denedim ama yine de çalışmadı.', ["Yes, I tried that, but it still didn't work.", "I've already tried, but it still isn't working."], ['Yes, I tried, it works still.', 'No, I am the boiler.']],
     ['t', "Right. Then I'll send someone tomorrow morning.", 'Peki. O zaman yarın sabah birini gönderirim.']],
  ]],
  ['m', 'Teşekkürler. Lütfen saati bana mesajla bildirin.', ['Thanks. Please text me the time.', 'Thank you. Could you send me a message with the time?'], ['Thanks, I text you the plumber.', 'Please time me a message.']],
  ['t', 'Sure, no problem. Sorry for the trouble.', 'Tabii, sorun değil. Rahatsızlık için kusura bakma.'],
  ['m', 'Sorun değil, iyi günler.', ["No worries. Have a good day.", "That's okay. Bye for now."], ['No trouble, I am sorry.', 'Have a trouble day.']],
]);

SC('s-airport', 'B1', '🛫', 'Sürpriz: Fazla satılmış uçuş', 'Uçuş dolu çıkabilir ya da kapı değişebilir. Haklarını sor.', [
  ['t', "Good morning. Passport, please. Where are you flying today?", 'Günaydın. Pasaport lütfen. Bugün nereye uçuyorsunuz?'],
  ['m', "İstanbul'a. Pencere kenarı mümkün mü?", ["To Istanbul. Could I have a window seat, please?", "Istanbul. Is a window seat possible?"], ['I am window Istanbul.', 'Istanbul is a seat.']],
  ['v', [
    [['t', "I'm sorry, the flight is overbooked. You can take the next flight at six p.m.", 'Üzgünüm, uçuş fazla satılmış. Akşam altıdaki uçağa binebilirsiniz.'],
     ['m', 'Bir tazminat alacak mıyım?', ['Will I get any compensation?', 'Do I get compensation for this?'], ['Will I compensation the flight?', 'I am overbooked.']],
     ['t', "Yes, you'll get a meal voucher and two hundred euros.", 'Evet, yemek kuponu ve iki yüz euro alacaksınız.'],
     ['m', 'Tamam, akşamki uçağı kabul ediyorum.', ["Okay, I'll take the evening flight.", "Fine, I accept the six o'clock flight."], ['Okay, I am the evening.', 'I take two hundred flights.']]],
    [['t', 'Here is your boarding pass. Window seat, 14A. But note: the gate has changed to B12.', 'İşte biniş kartınız. Pencere kenarı, 14A. Ama dikkat: kapı B12 olarak değişti.'],
     ['m', "Pardon, B12'ye nasıl gidebilirim?", ['Sorry, how do I get to B12?', 'Excuse me, how can I get to gate B12?'], ['Sorry, where is 14A gate?', 'How do I change the gate?']],
     ['t', 'Go through security and turn right. It takes about ten minutes.', 'Güvenlikten geçin ve sağa dönün. Yaklaşık on dakika sürer.'],
     ['m', 'Biniş ne zaman başlıyor?', ['What time does boarding start?', 'When does boarding begin?'], ['When is the boarding pass?', 'What time is ten minutes?']]],
  ]],
  ['t', 'Have a pleasant flight.', 'İyi uçuşlar.'],
  ['m', 'Teşekkürler, iyi günler.', ['Thank you, have a nice day.', 'Thanks, you too.'], ['Thanks, pleasant flight to you too.', 'You are welcome.']],
]);

SC('s-work', 'B2', '💼', 'Sürpriz: Toplantıda itiraz', 'Müdürün fikrine katılmıyorsun. Kibarca itiraz et; tepkisi değişebilir.', [
  ['t', "So, I think we should launch the product next month. Any thoughts?", 'Bence ürünü gelecek ay piyasaya sürmeliyiz. Fikri olan?'],
  ['m', 'Kibarca: Ne demek istediğinizi anlıyorum ama daha fazla teste ihtiyacımız var.', ["I see your point, but I think we need more testing.", "I understand, but in my opinion we need more time for testing."], ['You are wrong, more test.', 'I see your point, so we launch.']],
  ['v', [
    [['t', "Hmm, but our competitors are moving fast. Can we afford to wait?", 'Hmm, ama rakiplerimiz hızlı hareket ediyor. Beklemeyi göze alabilir miyiz?'],
     ['m', 'Hatalı bir ürünle çıkmak daha pahalıya mal olur.', ['Launching a faulty product would cost us more.', 'A product with problems could cost us much more in the end.'], ['Competitors are faulty products.', 'We can afford the waiting product.']],
     ['t', "Fair enough. What do you suggest?", 'Makul. Ne öneriyorsun?'],
     ['m', 'İki haftalık bir test süresi öneriyorum.', ['I suggest a two-week testing period.', 'I’d propose two more weeks of testing.'], ['I suggest two weeks product.', 'Two weeks is my suggestion launch.']]],
    [['t', "That's a good point. How much time do you think we need?", 'İyi bir nokta. Sence ne kadar zamana ihtiyacımız var?'],
     ['m', 'En az iki hafta, sonra hazır oluruz.', ["At least two weeks, then we'll be ready.", "Two weeks at least. After that, we'll be ready to launch."], ['At least we are two weeks.', 'Two weeks ready time.']],
     ['t', "Okay. Can you prepare a plan by Friday?", 'Tamam. Cumaya kadar bir plan hazırlayabilir misin?'],
     ['m', 'Elbette, cuma sabahı size gönderirim.', ["Sure, I'll send it to you on Friday morning.", "Of course. You'll have it by Friday morning."], ['Sure, Friday prepares the plan.', 'Of course, I am Friday.']]],
  ]],
  ['t', "Great, thanks. Let's move on to the next point.", 'Harika, teşekkürler. Bir sonraki maddeye geçelim.'],
]);

SC('s-police', 'B2', '👮', 'Sürpriz: Çalınan telefon', 'Telefonun çalındı. Polis farklı sorular sorabilir.', [
  ['t', 'Good afternoon. How can I help you?', 'İyi günler. Nasıl yardımcı olabilirim?'],
  ['m', 'Telefonumun çalındığını bildirmek istiyorum.', ["I'd like to report a stolen phone.", 'I want to report that my phone was stolen.'], ['I want to steal a phone.', 'My phone reports me.']],
  ['v', [
    [['t', 'I see. Where and when did it happen?', 'Anlıyorum. Nerede ve ne zaman oldu?'],
     ['m', 'Yaklaşık bir saat önce metroda oldu.', ['It happened on the subway about an hour ago.', 'About an hour ago, on the underground.'], ['An hour ago I happened.', 'The subway was stolen.']],
     ['t', 'Did you see the person?', 'Kişiyi gördünüz mü?'],
     ['m', 'Hayır, sadece cebimin boş olduğunu fark ettim.', ['No, I just noticed my pocket was empty.', "No. I only realised later that my pocket was empty."], ['No, I see my pocket person.', 'Yes, I noticed nobody.']]],
    [['t', 'Okay. Can you describe the phone?', 'Tamam. Telefonu tarif edebilir misiniz?'],
     ['m', 'Siyah bir akıllı telefon, kılıfı mavi.', ["It's a black smartphone with a blue case.", 'A black smartphone in a blue case.'], ['It is a blue black.', 'My phone describes black.']],
     ['t', 'Do you have tracking turned on?', 'Konum takibi açık mı?'],
     ['m', 'Evet, son konumu istasyonun yakınında görünüyor.', ['Yes, its last location is near the station.', 'Yes, it shows it was last near the station.'], ['Yes, I am tracking the station.', 'No, the station is turned on.']]],
  ]],
  ['t', "Right. Please fill in this form. You'll need the report for your insurance.", 'Peki. Lütfen bu formu doldurun. Sigortanız için tutanağa ihtiyacınız olacak.'],
  ['m', 'Tamam. Tutanağın bir kopyasını alabilir miyim?', ['Okay. Can I get a copy of the report?', 'Sure. Could I have a copy of the report, please?'], ['Okay, I copy the insurance.', 'Can I report a copy?']],
]);

SC('s-neighbour', 'C1', '🔊', 'Sürpriz: Gürültücü komşu', 'Komşunla diplomatik konuş. Savunmacı da olabilir, anlayışlı da.', [
  ['t', 'Oh, hi! Is everything alright?', 'Aa, merhaba! Her şey yolunda mı?'],
  ['m', 'Kibarca: Rahatsız etmek istemem ama dün gece müzik oldukça yüksekti.', ["I don't mean to bother you, but the music was rather loud last night.", "Sorry to bother you, but the music was quite loud last night."], ['Your music is bad, stop it.', 'I bother your loud night.']],
  ['v', [
    [['t', "Seriously? It was only until midnight. It was my birthday!", 'Cidden mi? Sadece gece yarısına kadardı. Doğum günümdü!'],
     ['m', 'Anlıyorum, doğum günün kutlu olsun. Sadece hafta içi sabah erken kalkıyorum.', ["I understand, and happy birthday. It's just that I get up early on weekdays.", "Fair enough, happy birthday! It's only that I have to get up early during the week."], ['Birthday is early weekdays.', 'I am a happy midnight.']],
     ['t', "Okay, I get it. I'll keep it down next time.", 'Tamam, anladım. Bir dahaki sefere sesi kısarım.']],
    [['t', "Oh, I'm so sorry! I had no idea it was that loud.", 'Ah, çok özür dilerim! O kadar yüksek olduğunu bilmiyordum.'],
     ['m', 'Önemli değil, sadece bilmeni istedim.', ["It's not a big deal, I just wanted to let you know.", "No worries, I just thought you should know."], ['It is a big deal for you.', 'I let you loud.']],
     ['t', "Thanks for telling me so nicely. It won't happen again.", 'Bu kadar nazikçe söylediğin için teşekkürler. Bir daha olmayacak.']],
  ]],
  ['m', 'Teşekkürler, anlayışın için minnettarım.', ['Thanks, I appreciate your understanding.', "Thank you, I really appreciate it."], ['Thanks, I understand your appreciate.', 'You are welcome for understanding.']],
]);

SC('s-negotiate', 'C1', '🤝', 'Sürpriz: Maaş pazarlığı', 'İş teklifinde maaşı pazarlık et. İşveren esneyebilir de, esnemeyebilir de.', [
  ['t', "We'd like to offer you the position with a salary of forty thousand.", 'Size pozisyonu kırk bin maaşla teklif etmek istiyoruz.'],
  ['m', 'Teklif için teşekkürler. Deneyimime göre biraz daha yüksek bir rakam bekliyordum.', ["Thank you for the offer. Given my experience, I was expecting a slightly higher figure.", "Thanks for the offer. Considering my experience, I was hoping for a bit more."], ['Forty thousand is my experience.', 'I expect you higher.']],
  ['v', [
    [['t', "I understand. What figure did you have in mind?", 'Anlıyorum. Aklınızda hangi rakam vardı?'],
     ['m', 'Kırk beş bin daha uygun olur diye düşünüyorum.', ['I think forty-five thousand would be more appropriate.', "Something around forty-five thousand would seem fair."], ['I think forty-five is my mind.', 'Fair is forty-five.']],
     ['t', "We can meet you halfway at forty-two, plus an extra week of holiday.", 'Ortada buluşabiliriz: kırk iki bin, artı bir hafta ek izin.']],
    [['t', "I'm afraid the budget is fixed for this role.", 'Korkarım bu pozisyonun bütçesi sabit.'],
     ['m', 'Anlıyorum. O halde başka yan haklar konusunda esneklik olabilir mi?', ['I see. In that case, is there any flexibility on other benefits?', 'Understood. Then could we discuss other benefits instead?'], ['I see, the budget is my benefit.', 'Then I am flexible budget.']],
     ['t', "We could offer two days working from home and a training budget.", 'Haftada iki gün evden çalışma ve bir eğitim bütçesi sunabiliriz.']],
  ]],
  ['m', 'Bu kulağa makul geliyor. Yazılı teklifi alabilir miyim?', ['That sounds reasonable. Could I have the offer in writing?', 'That works for me. Could you send me the written offer?'], ['That sounds writing.', 'I am reasonable offer.']],
  ['t', "Of course. You'll receive it by email today.", 'Tabii. Bugün e-postayla alacaksınız.'],
]);
