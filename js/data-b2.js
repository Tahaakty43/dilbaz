// Dilbaz — B2 "Usta Kullanıcı" bölümü
// dialogs: [soru, soru (TR), cevap, cevap (TR)]

SECTIONS.push({ level: 'B2', title: 'Usta Kullanıcı', desc: 'Tartış, ikna et, varsayımlarda bulun ve resmi ortamlarda akıcı konuş.' });

UNITS.push(
  {
    level: 'B2', title: 'Toplantı ve Müzakere', desc: 'Toplantı yönet, teklif sun, pazarlık yap.', icon: '🧑‍💼', color: '#273C75',
    tip: `
      <p>Resmi ortamlarda dili yumuşat: <b>I'm afraid</b> we can't… / <b>Would it be possible to</b>…? / <b>We were hoping</b> that…</p>
      <p>Edilgen yapı işi kişiden ayırır: <i>The contract <b>must be signed</b> by Friday.</i></p>
      <p>Orta yol bulmak: <i>reach a compromise, meet halfway.</i></p>`,
    words: [
      { en: 'negotiate', tr: 'müzakere etmek/pazarlık etmek', emoji: '🤝' },
      { en: 'agenda', tr: 'gündem', emoji: '🗒️' },
      { en: 'proposal', tr: 'teklif/öneri', emoji: '📄' },
      { en: 'compromise', tr: 'uzlaşma/orta yol', emoji: '🤲' },
      { en: 'budget', tr: 'bütçe', emoji: '💰' },
      { en: 'contract', tr: 'sözleşme', emoji: '📜' },
      { en: 'client', tr: 'müşteri', emoji: '🧑‍💻' },
      { en: 'profit', tr: 'kâr/kar', emoji: '💹' },
      { en: 'postpone', tr: 'ertelemek', emoji: '⏸️' },
      { en: 'efficient', tr: 'verimli', emoji: '⚙️' },
    ],
    sentences: [
      { en: 'Would it be possible to postpone the meeting?', tr: 'Toplantıyı ertelemek mümkün olur mu?', alt: ['Toplantıyı ertelemek mümkün mü?'] },
      { en: "I'm afraid we can't accept this proposal.", tr: 'Korkarım bu teklifi kabul edemeyiz.', alt: ['Maalesef bu teklifi kabul edemeyiz.'] },
      { en: 'Let me go through the agenda first.', tr: 'Önce gündemi gözden geçireyim.', alt: ['Önce gündemin üzerinden geçeyim.'] },
      { en: 'We need to find a compromise.', tr: 'Bir orta yol bulmamız gerekiyor.', alt: ['Bir uzlaşma bulmamız gerekiyor.', 'Orta yolu bulmalıyız.'] },
      { en: 'The project is over budget.', tr: 'Proje bütçeyi aştı.', alt: ['Proje bütçenin üzerinde.'] },
      { en: 'The contract must be signed by Friday.', tr: 'Sözleşme cumaya kadar imzalanmalı.', alt: ['Sözleşmenin cumaya kadar imzalanması gerekiyor.'] },
      { en: 'Our main goal is to keep our clients happy.', tr: 'Ana hedefimiz müşterilerimizi mutlu tutmak.', alt: ['Asıl amacımız müşterilerimizi mutlu tutmak.'] },
      { en: 'This new system is much more efficient.', tr: 'Bu yeni sistem çok daha verimli.' },
    ],
    dialogs: [
      ['Can we lower the price a little?', 'Fiyatı biraz düşürebilir miyiz?', 'We could offer a five percent discount.', 'Yüzde beş indirim sunabiliriz.'],
      ['What is the next item on the agenda?', 'Gündemdeki bir sonraki madde ne?', 'The budget for next year.', 'Gelecek yılın bütçesi.'],
      ['Do we have a deal?', 'Anlaştık mı?', 'Yes, I think we do.', 'Evet, sanırım anlaştık.'],
      ['When can you deliver the order?', 'Siparişi ne zaman teslim edebilirsiniz?', 'Within two weeks at the latest.', 'En geç iki hafta içinde.'],
      ['Could you clarify that point?', 'O noktayı açıklayabilir misiniz?', 'Of course. Let me explain it in more detail.', 'Tabii. Daha ayrıntılı açıklayayım.'],
      ['Shall we take a short break?', 'Kısa bir ara verelim mi?', 'Good idea, we have been here for two hours.', 'İyi fikir, iki saattir buradayız.'],
    ],
  },
  {
    level: 'B2', title: 'Teknoloji ve Toplum', desc: 'Teknolojinin artılarını ve eksilerini tartış.', icon: '🤖', color: '#2F3640',
    tip: `
      <p>İki yönü karşılaştırmak: <b>On the one hand</b>… <b>on the other hand</b>…</p>
      <p>Vurgu için devrik yapı: <b>Not only</b> is it fast, <b>but</b> it is <b>also</b> cheap.</p>
      <p><b>It's worth + -ing</b>: <i>It's worth learning how to code.</i> (Kod yazmayı öğrenmeye değer.)</p>`,
    words: [
      { en: 'artificial intelligence', tr: 'yapay zeka', emoji: '🤖' },
      { en: 'privacy', tr: 'gizlilik/mahremiyet', emoji: '🔒' },
      { en: 'social media', tr: 'sosyal medya', emoji: '📱' },
      { en: 'addicted', tr: 'bağımlı', emoji: '📵' },
      { en: 'data', tr: 'veri', emoji: '💾' },
      { en: 'advantage', tr: 'avantaj/üstünlük', emoji: '👍' },
      { en: 'disadvantage', tr: 'dezavantaj', emoji: '👎' },
      { en: 'replace', tr: 'yerini almak/değiştirmek', emoji: '🔄' },
      { en: 'online', tr: 'çevrimiçi/internette', emoji: '🌐' },
      { en: 'device', tr: 'cihaz/alet', emoji: '📟' },
    ],
    sentences: [
      { en: 'On the one hand, technology makes life easier.', tr: 'Bir yandan teknoloji hayatı kolaylaştırıyor.', alt: ['Bir taraftan teknoloji hayatı kolaylaştırıyor.'] },
      { en: 'Many teenagers are addicted to their phones.', tr: 'Birçok genç telefonlarına bağımlı.', alt: ['Pek çok genç telefonuna bağımlı.'] },
      { en: 'Robots may replace some jobs in the future.', tr: 'Robotlar gelecekte bazı işlerin yerini alabilir.' },
      { en: 'You should protect your personal data online.', tr: 'İnternette kişisel verilerini korumalısın.', alt: ['Kişisel verilerini internette korumalısın.'] },
      { en: 'Social media has both advantages and disadvantages.', tr: 'Sosyal medyanın hem avantajları hem dezavantajları var.' },
      { en: 'Not only is it fast, but it is also cheap.', tr: 'Sadece hızlı değil, aynı zamanda ucuz.', alt: ['Hem hızlı hem de ucuz.'] },
      { en: 'Privacy is becoming a serious problem.', tr: 'Gizlilik ciddi bir sorun haline geliyor.' },
      { en: 'It is worth learning how to code.', tr: 'Kod yazmayı öğrenmeye değer.', alt: ['Kodlama öğrenmeye değer.'] },
    ],
    dialogs: [
      ['Do you think AI is dangerous?', 'Yapay zekanın tehlikeli olduğunu düşünüyor musun?', 'It depends on how we use it.', 'Onu nasıl kullandığımıza bağlı.'],
      ['How much time do you spend online?', 'İnternette ne kadar zaman geçiriyorsun?', 'Too much, to be honest.', 'Açıkçası çok fazla.'],
      ['Would you let an app use your location?', 'Bir uygulamanın konumunu kullanmasına izin verir misin?', 'Only if it is really necessary.', 'Sadece gerçekten gerekliyse.'],
      ['Are you on social media?', 'Sosyal medyada var mısın?', 'I deleted my accounts last year.', 'Geçen yıl hesaplarımı sildim.'],
      ['Will robots replace teachers?', 'Robotlar öğretmenlerin yerini alacak mı?', 'I doubt it. People need human contact.', 'Sanmıyorum. İnsanların insan temasına ihtiyacı var.'],
      ['What is the biggest advantage of smartphones?', 'Akıllı telefonların en büyük avantajı ne?', 'You can stay in touch with everyone.', 'Herkesle iletişimde kalabilirsin.'],
    ],
  },
  {
    level: 'B2', title: 'Pişmanlıklar ve Varsayımlar', desc: 'Geçmişi farklı hayal et, pişmanlıklarını anlat.', icon: '🌗', color: '#5758BB',
    tip: `
      <p><b>3. tip koşul</b> (geçmişte olmayan şey): If + <b>had + V3</b>, <b>would have + V3</b> → <i>If I <b>had known</b>, I <b>would have helped</b>.</i></p>
      <p>Geçmişle ilgili keşke: <b>I wish I had</b> + V3 → <i>I wish I had studied harder.</i></p>
      <p>Eleştiri: <b>should have + V3</b> → <i>You should have told me.</i> (Bana söylemeliydin.)</p>`,
    words: [
      { en: 'regret', tr: 'pişman olmak/pişmanlık', emoji: '😞' },
      { en: 'opportunity', tr: 'fırsat', emoji: '🚪' },
      { en: 'consequence', tr: 'sonuç/netice', emoji: '🎯' },
      { en: 'decision', tr: 'karar', emoji: '🧠' },
      { en: 'blame', tr: 'suçlamak', emoji: '👉' },
      { en: 'luckily', tr: 'neyse ki/şans eseri', emoji: '🍀' },
      { en: 'otherwise', tr: 'yoksa/aksi halde', emoji: '🔀' },
      { en: 'realise', tr: 'fark etmek', emoji: '💡' },
      { en: 'warn', tr: 'uyarmak', emoji: '⚠️' },
      { en: 'apologise', tr: 'özür dilemek', emoji: '🙇' },
    ],
    sentences: [
      { en: 'If I had known, I would have helped you.', tr: 'Bilseydim sana yardım ederdim.', alt: ['Bilmiş olsaydım sana yardım ederdim.', 'Eğer bilseydim sana yardım ederdim.'] },
      { en: 'I wish I had studied harder.', tr: 'Keşke daha çok çalışsaydım.', alt: ['Keşke daha sıkı çalışsaydım.'] },
      { en: 'You should have told me earlier.', tr: 'Bana daha önce söylemeliydin.', alt: ['Bana daha erken söylemeliydin.'] },
      { en: 'She regrets leaving her job.', tr: 'İşinden ayrıldığına pişman.', alt: ['O, işinden ayrıldığı için pişman.', 'İşini bıraktığına pişman.'] },
      { en: 'Luckily, nobody blamed him.', tr: 'Neyse ki kimse onu suçlamadı.' },
      { en: 'Hurry up, otherwise we will miss the train.', tr: 'Acele et, yoksa treni kaçıracağız.', alt: ['Acele et, yoksa treni kaçırırız.'] },
      { en: 'I did not realise it was so late.', tr: 'Bu kadar geç olduğunu fark etmedim.', altEn: ["I didn't realise it was so late.", "I didn't realize it was so late."] },
      { en: 'It was the best decision of my life.', tr: 'Hayatımın en iyi kararıydı.' },
    ],
    dialogs: [
      ["Why didn't you call me?", 'Neden beni aramadın?', 'I should have, I am really sorry.', 'Aramalıydım, gerçekten özür dilerim.'],
      ['What would you have done in my position?', 'Benim yerimde olsan ne yapardın?', 'I would have said no.', 'Hayır derdim.'],
      ['Do you regret moving abroad?', 'Yurt dışına taşındığına pişman mısın?', 'Not at all, it changed my life.', 'Hiç değil, hayatımı değiştirdi.'],
      ["Didn't anyone warn you?", 'Kimse seni uyarmadı mı?', "If they had, I wouldn't be here now.", 'Uyarsalardı şimdi burada olmazdım.'],
      ['Are you going to apologise to her?', 'Ondan özür dileyecek misin?', 'Yes, it was my fault.', 'Evet, benim hatamdı.'],
      ['What if you had missed that opportunity?', 'Ya o fırsatı kaçırsaydın?', 'I try not to think about it.', 'Bunu düşünmemeye çalışıyorum.'],
    ],
  },
  {
    level: 'B2', title: 'Eğitim ve Kariyer', desc: 'Eğitim seçeneklerini ve kariyer hedeflerini anlat.', icon: '🎓', color: '#0A3D62',
    tip: `
      <p><b>Future Perfect</b> (gelecekte bitmiş olacak): <i>By next year, I <b>will have graduated</b>.</i></p>
      <p><b>Future Continuous</b> (gelecekte devam ediyor olacak): <i>In ten years, I <b>will be running</b> my own company.</i></p>
      <p><b>consider + -ing</b>: <i>I'm considering chang<b>ing</b> my career.</i></p>`,
    words: [
      { en: 'degree', tr: 'diploma/derece', emoji: '📜' },
      { en: 'university', tr: 'üniversite', emoji: '🏛️' },
      { en: 'graduate', tr: 'mezun olmak/mezun', emoji: '🎓' },
      { en: 'scholarship', tr: 'burs', emoji: '💸' },
      { en: 'internship', tr: 'staj', emoji: '🧑‍💻' },
      { en: 'qualification', tr: 'yeterlilik/nitelik', emoji: '🏅' },
      { en: 'ambitious', tr: 'hırslı', emoji: '🚀' },
      { en: 'promotion', tr: 'terfi', emoji: '📈' },
      { en: 'field', tr: 'alan', emoji: '🌾' },
      { en: 'consider', tr: 'düşünmek/göz önünde bulundurmak', emoji: '🤔' },
    ],
    sentences: [
      { en: 'By next year, I will have graduated from university.', tr: 'Gelecek yıla kadar üniversiteden mezun olmuş olacağım.', alt: ['Seneye kadar üniversiteden mezun olmuş olacağım.'] },
      { en: 'She got a scholarship to study abroad.', tr: 'Yurt dışında okumak için burs aldı.', alt: ['Yurt dışında okumak için burs kazandı.'] },
      { en: 'I am considering changing my career.', tr: 'Kariyerimi değiştirmeyi düşünüyorum.', alt: ['Meslek değiştirmeyi düşünüyorum.'] },
      { en: 'An internship gives you real experience.', tr: 'Staj sana gerçek bir deneyim kazandırır.', alt: ['Staj sana gerçek deneyim kazandırır.'] },
      { en: 'He was promoted after only two years.', tr: 'Sadece iki yıl sonra terfi etti.', alt: ['Yalnızca iki yıl sonra terfi aldı.'] },
      { en: 'This job requires a degree in engineering.', tr: 'Bu iş mühendislik diploması gerektiriyor.', alt: ['Bu iş için mühendislik diploması gerekiyor.'] },
      { en: 'In ten years, I will be running my own company.', tr: 'On yıl sonra kendi şirketimi yönetiyor olacağım.' },
      { en: 'She is very ambitious and hardworking.', tr: 'O çok hırslı ve çalışkan.', alt: ['Çok hırslı ve çalışkan.'] },
    ],
    dialogs: [
      ['What are you studying?', 'Ne okuyorsun?', 'I am doing a degree in economics.', 'Ekonomi okuyorum.'],
      ['Why did you choose this field?', 'Neden bu alanı seçtin?', 'Because I have always loved numbers.', 'Çünkü sayıları hep sevdim.'],
      ['Are you looking for an internship?', 'Staj mı arıyorsun?', 'Yes, preferably in a big company.', 'Evet, tercihen büyük bir şirkette.'],
      ['Where do you see your career going?', 'Kariyerinin nereye gittiğini düşünüyorsun?', 'I would like to become a manager.', 'Yönetici olmak istiyorum.'],
      ['Did you get the scholarship?', 'Bursu aldın mı?', 'Yes! I found out this morning.', 'Evet! Bu sabah öğrendim.'],
      ['Is a degree really necessary?', 'Diploma gerçekten gerekli mi?', 'In some fields, experience matters more.', 'Bazı alanlarda deneyim daha önemli.'],
    ],
  },
  {
    level: 'B2', title: 'Seyahat Hikâyeleri', desc: 'Başından geçen bir yolculuğu canlı bir şekilde anlat.', icon: '🏕️', color: '#B33939',
    tip: `
      <p>Hikâye anlatırken üç zaman birlikte kullanılır:</p>
      <p><b>Past Simple</b> (olaylar), <b>Past Continuous</b> (arka plan), <b>Past Perfect</b> (daha önce olmuş olan):</p>
      <p><i>When we <b>arrived</b>, the train <b>had already left</b>. We <b>were walking</b> when it started to rain.</i></p>`,
    words: [
      { en: 'journey', tr: 'yolculuk', emoji: '🛤️' },
      { en: 'adventure', tr: 'macera', emoji: '🧭' },
      { en: 'delay', tr: 'gecikme/geciktirmek', emoji: '⏱️' },
      { en: 'destination', tr: 'varış yeri/hedef', emoji: '📍' },
      { en: 'sightseeing', tr: 'gezip görme', emoji: '📸' },
      { en: 'souvenir', tr: 'hatıra/hediyelik eşya', emoji: '🧸' },
      { en: 'local', tr: 'yerel/yerli', emoji: '🏘️' },
      { en: 'remote', tr: 'uzak/ıssız', emoji: '🏝️' },
      { en: 'breathtaking', tr: 'nefes kesici', emoji: '🌄' },
      { en: 'unforgettable', tr: 'unutulmaz', emoji: '✨' },
    ],
    sentences: [
      { en: 'When we arrived, the train had already left.', tr: 'Vardığımızda tren çoktan kalkmıştı.', alt: ['Biz vardığımızda tren çoktan gitmişti.', 'Vardığımızda tren zaten kalkmıştı.'] },
      { en: 'We were walking along the beach when it started to rain.', tr: 'Yağmur başladığında sahil boyunca yürüyorduk.', alt: ['Yağmur yağmaya başladığında sahilde yürüyorduk.'] },
      { en: 'The view from the mountain was breathtaking.', tr: 'Dağdan manzara nefes kesiciydi.', alt: ['Dağın tepesinden manzara nefes kesiciydi.'] },
      { en: 'I had never seen such a beautiful place before.', tr: 'Daha önce hiç böyle güzel bir yer görmemiştim.' },
      { en: 'We bought some souvenirs for our friends.', tr: 'Arkadaşlarımız için birkaç hediyelik eşya aldık.', alt: ['Arkadaşlarımıza hatıra aldık.'] },
      { en: 'The locals were incredibly friendly.', tr: 'Yerel halk inanılmaz derecede samimiydi.', alt: ['Yerliler inanılmaz derecede cana yakındı.'] },
      { en: 'It was an unforgettable adventure.', tr: 'Unutulmaz bir maceraydı.' },
      { en: 'Our flight was delayed by three hours.', tr: 'Uçuşumuz üç saat gecikti.', alt: ['Uçağımız üç saat rötar yaptı.'] },
    ],
    dialogs: [
      ['How was your trip?', 'Gezin nasıldı?', 'Amazing, although we got lost twice.', 'Harikaydı, gerçi iki kez kaybolduk.'],
      ['What was the best part?', 'En güzel kısmı neydi?', 'Watching the sunrise from the hill.', 'Tepeden gün doğumunu izlemek.'],
      ['Had you been there before?', 'Daha önce orada bulunmuş muydun?', 'No, it was my first time.', 'Hayır, ilk seferimdi.'],
      ['What happened to your luggage?', 'Bavuluna ne oldu?', 'The airline had sent it to another city.', 'Havayolu onu başka bir şehre göndermişti.'],
      ['Would you go back?', 'Tekrar gider miydin?', 'Without a doubt.', 'Hiç şüphesiz.'],
      ['Did you try the local food?', 'Yerel yemekleri denedin mi?', 'Yes, everything was delicious.', 'Evet, her şey lezzetliydi.'],
    ],
  },
  {
    level: 'B2', title: 'Tartışma ve İkna', desc: 'Görüşünü savun, karşı görüşe saygıyla itiraz et.', icon: '📣', color: '#C23616',
    tip: `
      <p>Bağlaçlar fikirleri birbirine bağlar: <b>However</b> (ancak), <b>Moreover</b> (üstelik), <b>Therefore</b> (bu yüzden), <b>Despite</b> + isim (…e rağmen).</p>
      <p>Kısmen katılmak: <i><b>I see your point, but</b>… / <b>That's true to some extent.</b></i></p>`,
    words: [
      { en: 'argument', tr: 'argüman/tartışma', emoji: '🗯️' },
      { en: 'however', tr: 'ancak/ama', emoji: '↔️' },
      { en: 'moreover', tr: 'üstelik/ayrıca', emoji: '➕' },
      { en: 'therefore', tr: 'bu yüzden/bu nedenle', emoji: '➡️' },
      { en: 'despite', tr: 'rağmen', emoji: '🧱' },
      { en: 'evidence', tr: 'kanıt', emoji: '🔍' },
      { en: 'convince', tr: 'ikna etmek', emoji: '🎯' },
      { en: 'claim', tr: 'iddia etmek/iddia', emoji: '📢' },
      { en: 'admit', tr: 'kabul etmek/itiraf etmek', emoji: '🙋' },
      { en: 'debate', tr: 'münazara/tartışma', emoji: '🎙️' },
    ],
    sentences: [
      { en: 'I see your point, but I still disagree.', tr: 'Ne demek istediğini anlıyorum ama yine de katılmıyorum.', alt: ['Görüşünü anlıyorum ama yine de katılmıyorum.'] },
      { en: 'There is no evidence to support this claim.', tr: 'Bu iddiayı destekleyen hiçbir kanıt yok.' },
      { en: 'Despite the rain, the event was a success.', tr: 'Yağmura rağmen etkinlik başarılıydı.' },
      { en: 'It is expensive. However, it is worth it.', tr: 'Pahalı. Ancak buna değer.', alt: ['Pahalı ama buna değer.', 'Pahalı. Ancak değer.'] },
      { en: 'He finally admitted that he was wrong.', tr: 'Sonunda haksız olduğunu kabul etti.', alt: ['Sonunda yanıldığını kabul etti.'] },
      { en: 'The plan is cheap; moreover, it is easy to apply.', tr: 'Plan ucuz; üstelik uygulaması kolay.', alt: ['Plan ucuz, ayrıca uygulaması kolay.'] },
      { en: 'I could not convince my parents.', tr: 'Ailemi ikna edemedim.', alt: ['Annemle babamı ikna edemedim.'], altEn: ["I couldn't convince my parents."] },
      { en: 'The roads were icy; therefore, the school was closed.', tr: 'Yollar buzluydu; bu yüzden okul kapatıldı.', alt: ['Yollar buz tutmuştu, bu nedenle okul kapatıldı.'] },
    ],
    dialogs: [
      ["Don't you think homework should be banned?", 'Sence ödevler yasaklanmamalı mı?', 'Not completely, but there should be less.', 'Tamamen değil ama daha az olmalı.'],
      ['What evidence do you have?', 'Ne kanıtın var?', 'There are several studies on this.', 'Bu konuda birkaç çalışma var.'],
      ['Can you give me an example?', 'Bana bir örnek verebilir misin?', 'Sure, look at what happened last year.', 'Tabii, geçen yıl olanlara bak.'],
      ['So, are you convinced?', 'Peki, ikna oldun mu?', 'Partly, but I need to think about it.', 'Kısmen, ama düşünmem gerekiyor.'],
      ["Isn't that a bit unfair?", 'Bu biraz haksızlık değil mi?', 'You have a point there.', 'Orada haklısın.'],
      ["Let's agree to disagree.", 'Farklı düşündüğümüzü kabul edelim.', 'Fine, it was a good debate anyway.', 'Tamam, yine de güzel bir tartışmaydı.'],
    ],
  },
  {
    level: 'B2', title: 'Resmi Yazışma', desc: 'Resmi e-posta yaz, şikayet et, birinin sözlerini aktar.', icon: '📬', color: '#40407A',
    tip: `
      <p>Resmi e-posta kalıpları: <b>I am writing to</b>… / <b>I would be grateful if</b>… / <b>Please find</b> the report <b>attached</b>. / <b>I look forward to hearing from you.</b></p>
      <p>Dolaylı anlatım (reported speech): zaman bir geri gider → <i>"I will send it." → He said that he <b>would</b> send it.</i></p>`,
    words: [
      { en: 'request', tr: 'talep/rica/talep etmek', emoji: '📝' },
      { en: 'attach', tr: 'eklemek (dosya)', emoji: '📎' },
      { en: 'inform', tr: 'bilgilendirmek/bildirmek', emoji: 'ℹ️' },
      { en: 'regarding', tr: 'ile ilgili/hakkında', emoji: '📌' },
      { en: 'grateful', tr: 'minnettar', emoji: '🙏' },
      { en: 'confirm', tr: 'onaylamak/teyit etmek', emoji: '✅' },
      { en: 'sincerely', tr: 'saygılarımla/içtenlikle', emoji: '✍️' },
      { en: 'complaint', tr: 'şikayet', emoji: '🗣️' },
      { en: 'respond', tr: 'yanıt vermek/cevap vermek', emoji: '↩️' },
      { en: 'urgent', tr: 'acil', emoji: '🚨' },
    ],
    sentences: [
      { en: 'I am writing to request more information.', tr: 'Daha fazla bilgi talep etmek için yazıyorum.', alt: ['Daha fazla bilgi istemek için yazıyorum.'] },
      { en: 'Please find the report attached.', tr: 'Rapor ektedir.', alt: ['Raporu ekte bulabilirsiniz.', 'Rapor ekte yer almaktadır.'] },
      { en: 'I would be grateful if you could reply soon.', tr: 'Yakında cevap verirseniz minnettar olurum.', alt: ['En kısa sürede yanıt verirseniz minnettar olurum.'] },
      { en: 'We are pleased to inform you that you have been accepted.', tr: 'Kabul edildiğinizi size bildirmekten memnuniyet duyarız.' },
      { en: 'Could you confirm the date of the meeting?', tr: 'Toplantının tarihini teyit edebilir misiniz?', alt: ['Toplantı tarihini onaylayabilir misiniz?'] },
      { en: 'He said that he would send the documents.', tr: 'Belgeleri göndereceğini söyledi.' },
      { en: 'I am writing regarding my order.', tr: 'Siparişimle ilgili yazıyorum.', alt: ['Siparişim hakkında yazıyorum.'] },
      { en: 'This matter is urgent.', tr: 'Bu konu acil.', alt: ['Bu mesele acil.'] },
    ],
    dialogs: [
      ['How should I start a formal email?', 'Resmi bir e-postaya nasıl başlamalıyım?', 'Start with a polite greeting.', 'Kibar bir selamlamayla başla.'],
      ['Did they reply to your complaint?', 'Şikayetine cevap verdiler mi?', 'Yes, they promised to refund me.', 'Evet, paramı iade edeceklerine söz verdiler.'],
      ['What did the manager say?', 'Müdür ne dedi?', 'She said that the meeting was cancelled.', 'Toplantının iptal edildiğini söyledi.'],
      ['Is it urgent?', 'Acil mi?', 'Yes, I need an answer today.', 'Evet, bugün bir cevaba ihtiyacım var.'],
      ['Have you attached the file?', 'Dosyayı ekledin mi?', 'Oops, I forgot. I will send it again.', 'Eyvah, unuttum. Tekrar göndereceğim.'],
      ['How do I end the letter?', 'Mektubu nasıl bitiririm?', 'Thank them and sign your name.', 'Teşekkür et ve adını yaz.'],
    ],
  },
  {
    level: 'B2', title: 'Para ve Ekonomi', desc: 'Bütçeni, birikimlerini ve ekonomiyi konuş.', icon: '💸', color: '#1B9CFC',
    tip: `
      <p>Çıkarım bildiren kipler: <b>must be</b> (kesin olmalı), <b>might be</b> (olabilir), <b>can't be</b> (olamaz) → <i>It <b>must be</b> expensive.</i></p>
      <p><b>afford</b> (gücü yetmek): <i>We can't <b>afford</b> to buy a house.</i></p>
      <p><b>pay off</b> a debt (borcu kapatmak), <b>take out</b> a loan (kredi çekmek).</p>`,
    words: [
      { en: 'save', tr: 'biriktirmek/tasarruf etmek', emoji: '🐷' },
      { en: 'afford', tr: 'gücü yetmek', emoji: '💳' },
      { en: 'loan', tr: 'kredi/borç', emoji: '🏦' },
      { en: 'debt', tr: 'borç', emoji: '📉' },
      { en: 'income', tr: 'gelir', emoji: '💵' },
      { en: 'tax', tr: 'vergi', emoji: '🧾' },
      { en: 'invest', tr: 'yatırım yapmak', emoji: '📈' },
      { en: 'economy', tr: 'ekonomi', emoji: '🌐' },
      { en: 'inflation', tr: 'enflasyon', emoji: '🎈' },
      { en: 'bargain', tr: 'kelepir/pazarlık', emoji: '🏷️' },
    ],
    sentences: [
      { en: 'I am trying to save money for a new car.', tr: 'Yeni bir araba için para biriktirmeye çalışıyorum.' },
      { en: 'We cannot afford to buy a house yet.', tr: 'Henüz ev almaya gücümüz yetmiyor.', alt: ['Henüz ev alacak paramız yok.'], altEn: ["We can't afford to buy a house yet."] },
      { en: 'He took out a loan to start his business.', tr: 'İşini kurmak için kredi çekti.' },
      { en: 'Prices have risen because of inflation.', tr: 'Enflasyon yüzünden fiyatlar arttı.', alt: ['Fiyatlar enflasyon nedeniyle yükseldi.'] },
      { en: 'That jacket was a real bargain.', tr: 'O ceket gerçekten kelepirdi.', alt: ['O ceket tam bir kelepirdi.'] },
      { en: 'It must be expensive to live in London.', tr: "Londra'da yaşamak pahalı olmalı.", alt: ["Londra'da yaşamak pahalı olsa gerek."] },
      { en: 'She invests part of her income every month.', tr: 'Her ay gelirinin bir kısmını yatırıma ayırıyor.', alt: ['Her ay gelirinin bir kısmını yatırıyor.'] },
      { en: 'Paying off debt can take years.', tr: 'Borç ödemek yıllar sürebilir.', alt: ['Borcu kapatmak yıllar sürebilir.'] },
    ],
    dialogs: [
      ['How do you manage your money?', 'Paranı nasıl yönetiyorsun?', 'I write down everything I spend.', 'Harcadığım her şeyi not ediyorum.'],
      ['Can you lend me some money until Friday?', 'Cumaya kadar bana biraz borç verebilir misin?', 'I can, but only fifty lira.', 'Verebilirim ama sadece elli lira.'],
      ['Is it a good time to invest?', 'Yatırım yapmak için iyi bir zaman mı?', 'Nobody can be sure about that.', 'Bundan kimse emin olamaz.'],
      ['Why is everything so expensive?', 'Neden her şey bu kadar pahalı?', 'It must be because of inflation.', 'Enflasyon yüzünden olmalı.'],
      ['Did you pay the tax on time?', 'Vergiyi zamanında ödedin mi?', 'Yes, I paid it online.', 'Evet, internetten ödedim.'],
      ['How much do you save each month?', 'Her ay ne kadar biriktiriyorsun?', 'About ten percent of my salary.', 'Maaşımın yaklaşık yüzde onunu.'],
    ],
  },
);
