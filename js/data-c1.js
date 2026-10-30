// Dilbaz — C1 "İleri Düzey" bölümü
// dialogs: [soru, soru (TR), cevap, cevap (TR)]

SECTIONS.push({ level: 'C1', title: 'İleri Düzey', desc: 'Akademik ve profesyonel İngilizce: incelikli anlatım, devrik yapılar, küresel konular.' });

UNITS.push(
  {
    level: 'C1', title: 'Devrik Yapılar', desc: 'Olumsuz zarflarla güçlü ve resmi vurgu yap.', icon: '🔄', color: '#192A56',
    tip: `
      <p>Olumsuz zarf başa gelince soru sırası kullanılır: <i><b>Never have I</b> seen such a view.</i></p>
      <p><b>No sooner … than</b>: <i>No sooner had I sat down <b>than</b> the phone rang.</i> <b>Hardly … when</b> de aynıdır.</p>
      <p><b>Not until</b>: <i>Not until later <b>did I realise</b> my mistake.</i> Resmi yazı ve konuşmada etkilidir.</p>`,
    words: [
      { en: 'seldom', tr: 'nadiren', emoji: '🌠' },
      { en: 'scarcely', tr: 'ancak/neredeyse hiç', emoji: '🤏🏻' },
      { en: 'hardly', tr: 'neredeyse hiç', emoji: '🫥' },
      { en: 'no sooner', tr: '-er -mez', emoji: '⏱️' },
      { en: 'rarely', tr: 'seyrek', emoji: '🦄' },
      { en: 'barely', tr: 'zar zor', emoji: '🥵' },
      { en: 'nor', tr: 'ne de', emoji: '🚷' },
      { en: 'by no means', tr: 'hiçbir şekilde', emoji: '🙅‍♂️' },
      { en: 'whatsoever', tr: 'hiçbir surette', emoji: '🈚' },
      { en: 'not until', tr: 'ancak ... -ince', emoji: '🕰️' },
    ],
    sentences: [
      { en: 'Never have I seen such a beautiful view.', tr: 'Hiç bu kadar güzel bir manzara görmemiştim.' },
      { en: 'Rarely do we get a chance like this.', tr: 'Böyle bir fırsatı nadiren yakalarız.' },
      { en: 'No sooner had I sat down than the phone rang.', tr: 'Oturur oturmaz telefon çaldı.' },
      { en: 'Hardly had we left when it began to rain.', tr: 'Çıkar çıkmaz yağmur başladı.' },
      { en: 'Not until later did I realise my mistake.', tr: 'Hatamı ancak daha sonra fark ettim.' },
      { en: 'Under no circumstances should you open this door.', tr: 'Bu kapıyı hiçbir koşulda açmamalısın.' },
      { en: 'I do not agree, nor does my colleague.', tr: 'Ben katılmıyorum, iş arkadaşım da katılmıyor.' },
      { en: 'He is by no means the only candidate.', tr: 'O hiçbir şekilde tek aday değil.' },
    ],
    dialogs: [
      ['Was the hotel any good?', 'Otel iyi miydi?', 'Seldom have I stayed anywhere so awful.', 'Bu kadar berbat bir yerde nadiren kaldım.'],
      ['Are you sure about this decision?', 'Bu karardan emin misin?', 'I have no doubt whatsoever.', 'Hiçbir şüphem yok.'],
      ['When did you find out?', 'Ne zaman öğrendin?', 'Not until the day after.', 'Ancak ertesi gün.'],
      ['Did they arrive on time?', 'Zamanında geldiler mi?', 'They barely made it.', 'Zar zor yetiştiler.'],
      ['Should staff use this entrance?', 'Personel bu girişi kullanmalı mı?', 'On no account should they use it.', 'Hiçbir suretle kullanmamalılar.'],
      ['Is the problem solved?', 'Sorun çözüldü mü?', 'By no means, there is much left to do.', 'Hiçbir şekilde, daha yapılacak çok şey var.'],
    ],
  },
  {
    level: 'C1', title: 'Vurgu Yapıları', desc: 'Cleft cümlelerle mesajın odağını belirle.', icon: '🔦', color: '#6F1E51',
    tip: `
      <p><b>It-cleft</b>: <i><b>It was</b> Ali <b>who</b> broke it.</i> (Kıran Ali'ydi.)</p>
      <p><b>What-cleft</b>: <i><b>What</b> I need <b>is</b> a holiday.</i> (İhtiyacım olan şey bir tatil.)</p>
      <p>Vurgulayıcılar: <b>do</b> + fiil: <i>I <b>do</b> understand.</i> <b>The thing is,…</b> <b>The reason why…</b></p>`,
    words: [
      { en: 'emphasise', tr: 'vurgulamak', emoji: '❗' },
      { en: 'crucial', tr: 'çok önemli/kritik', emoji: '🔑' },
      { en: 'essentially', tr: 'esasen', emoji: '🧱' },
      { en: 'particularly', tr: 'özellikle', emoji: '🎯' },
      { en: 'indeed', tr: 'gerçekten/nitekim', emoji: '🙌' },
      { en: 'primary', tr: 'birincil/temel', emoji: '1️⃣' },
      { en: 'underlying', tr: 'altta yatan', emoji: '🪨' },
      { en: 'merely', tr: 'yalnızca', emoji: '🔹' },
      { en: 'precisely', tr: 'tam olarak', emoji: '📐' },
      { en: 'ultimately', tr: 'nihayetinde', emoji: '🏔️' },
    ],
    sentences: [
      { en: 'It was my sister who found the solution.', tr: 'Çözümü bulan kız kardeşimdi.' },
      { en: 'What I need is a long holiday.', tr: 'İhtiyacım olan şey uzun bir tatil.' },
      { en: 'What matters most is your health.', tr: 'En önemli olan senin sağlığın.' },
      { en: 'I do understand your concern.', tr: 'Endişeni gerçekten anlıyorum.' },
      { en: 'That is precisely why we should wait.', tr: 'Tam da bu yüzden beklemeliyiz.' },
      { en: 'The underlying problem is a lack of trust.', tr: 'Altta yatan sorun güven eksikliği.' },
      { en: 'This is merely the beginning.', tr: 'Bu yalnızca başlangıç.' },
      { en: 'Ultimately, the decision is yours.', tr: 'Nihayetinde karar senin.' },
    ],
    dialogs: [
      ['Did Ali send the email?', 'E-postayı Ali mi gönderdi?', 'No, it was Selin who sent it.', 'Hayır, gönderen Selin’di.'],
      ['What bothers you the most?', 'Seni en çok rahatsız eden ne?', 'What annoys me is the lack of respect.', 'Beni kızdıran şey saygı eksikliği.'],
      ['Why did the project fail?', 'Proje neden başarısız oldu?', 'The primary reason was poor planning.', 'Temel neden kötü planlamaydı.'],
      ['Is timing important here?', 'Burada zamanlama önemli mi?', 'Yes, it is absolutely crucial.', 'Evet, kesinlikle kritik.'],
      ['Do you really like my idea?', 'Fikrimi gerçekten beğeniyor musun?', 'I do like it, particularly the first part.', 'Gerçekten beğeniyorum, özellikle ilk kısmını.'],
      ['Was it a good result?', 'İyi bir sonuç muydu?', 'Indeed it was, better than we expected.', 'Gerçekten öyleydi, beklediğimizden iyiydi.'],
    ],
  },
  {
    level: 'C1', title: 'Akademik Yazı', desc: 'Makale dilini, bağlaçları ve atıfı öğren.', icon: '🎓', color: '#2F3542',
    tip: `
      <p>Resmi eşleştirmeler: <i>get → <b>obtain</b>, show → <b>demonstrate</b>, about → <b>approximately</b>, buy → <b>purchase</b>.</i></p>
      <p>Karşıtlık: <b>whereas</b> (oysa), <b>nevertheless</b> (yine de). Ek: <b>furthermore</b> (ayrıca). Sonuç: <b>thus</b> (böylece).</p>
      <p>Kişisizleştirme: <i><b>It can be argued that</b>… <b>The data suggest that</b>…</i> ("I think" yerine)</p>`,
    words: [
      { en: 'hypothesis', tr: 'hipotez', emoji: '💭' },
      { en: 'analyse', tr: 'analiz etmek', emoji: '🔍' },
      { en: 'significant', tr: 'önemli/anlamlı', emoji: '⭐' },
      { en: 'furthermore', tr: 'ayrıca', emoji: '➕' },
      { en: 'thus', tr: 'böylece', emoji: '∴' },
      { en: 'whereas', tr: 'oysa', emoji: '⚖️' },
      { en: 'demonstrate', tr: 'göstermek/kanıtlamak', emoji: '📈' },
      { en: 'methodology', tr: 'yöntem bilim', emoji: '🗺️' },
      { en: 'framework', tr: 'çerçeve', emoji: '🖼️' },
      { en: 'nevertheless', tr: 'yine de', emoji: '🤺' },
    ],
    sentences: [
      { en: 'The results demonstrate a significant increase.', tr: 'Sonuçlar önemli bir artış gösteriyor.' },
      { en: 'It can be argued that the study has limits.', tr: 'Çalışmanın sınırları olduğu öne sürülebilir.' },
      { en: 'This paper analyses three possible causes.', tr: 'Bu makale üç olası nedeni analiz ediyor.' },
      { en: 'The hypothesis was not supported by the data.', tr: 'Hipotez veriler tarafından desteklenmedi.' },
      { en: 'Prices rose, whereas wages remained stable.', tr: 'Fiyatlar yükseldi, oysa ücretler sabit kaldı.' },
      { en: 'The method is costly. Nevertheless, it works.', tr: 'Yöntem maliyetli. Yine de işe yarıyor.' },
      { en: 'Furthermore, the sample was too small.', tr: 'Ayrıca örneklem çok küçüktü.' },
      { en: 'The findings support this framework.', tr: 'Bulgular bu çerçeveyi destekliyor.' },
    ],
    dialogs: [
      ['What methodology did you use?', 'Hangi yöntemi kullandın?', 'A survey followed by interviews.', 'Bir anket ve ardından görüşmeler.'],
      ['Are the results significant?', 'Sonuçlar anlamlı mı?', 'Yes, particularly for younger groups.', 'Evet, özellikle genç gruplarda.'],
      ['How should I start my essay?', 'Makaleme nasıl başlamalıyım?', 'State your main argument clearly.', 'Ana savını açıkça belirt.'],
      ['Can I write "I think" here?', 'Buraya "I think" yazabilir miyim?', 'It is better to say "it appears that".', '"It appears that" demek daha iyi.'],
      ['Did you cite your sources?', 'Kaynaklarına atıf yaptın mı?', 'Yes, they are listed at the end.', 'Evet, sonda listelenmiş durumda.'],
      ['What is the conclusion of the paper?', 'Makalenin sonucu ne?', 'Thus, further research is required.', 'Böylece daha fazla araştırma gerektiği.'],
    ],
  },
  {
    level: 'C1', title: 'Temkinli Dil', desc: 'Kesin konuşmadan, ölçülü ifade et.', icon: '🌫️', color: '#57606F',
    tip: `
      <p>İddiayı yumuşatmak (hedging): <b>tend to</b>, <b>appear to</b>, <b>seem to</b>: <i>People <b>tend to</b> trust experts.</i></p>
      <p>Zarflarla: <b>arguably</b> (tartışmaya açık olsa da), <b>presumably</b> (herhalde), <b>somewhat</b> (biraz).</p>
      <p>Kibar eleştiri: <i>It <b>might be worth</b> reconsidering. I'm <b>not entirely</b> convinced.</i></p>`,
    words: [
      { en: 'tend to', tr: '-me eğiliminde olmak', emoji: '↗️' },
      { en: 'arguably', tr: 'tartışmasız denebilir ki', emoji: '🗣️' },
      { en: 'presumably', tr: 'herhalde', emoji: '🤔' },
      { en: 'apparently', tr: 'görünüşe göre', emoji: '👓' },
      { en: 'seemingly', tr: 'görünürde', emoji: '🪞' },
      { en: 'roughly', tr: 'kabaca/yaklaşık', emoji: '🪨' },
      { en: 'somewhat', tr: 'biraz/bir ölçüde', emoji: '🌗' },
      { en: 'appear', tr: 'görünmek', emoji: '🎩' },
      { en: 'indicate', tr: 'işaret etmek', emoji: '🧭' },
      { en: 'virtually', tr: 'neredeyse', emoji: '🥽' },
    ],
    sentences: [
      { en: 'People tend to believe what they want to believe.', tr: 'İnsanlar inanmak istediklerine inanma eğilimindedir.' },
      { en: 'This is arguably his best work.', tr: 'Bu, tartışmasız denebilir ki en iyi eseri.' },
      { en: 'Presumably, she has already left.', tr: 'Herhalde çoktan gitti.' },
      { en: 'Apparently, the meeting has been cancelled.', tr: 'Görünüşe göre toplantı iptal edilmiş.' },
      { en: 'The results appear to be correct.', tr: 'Sonuçlar doğru görünüyor.' },
      { en: 'Roughly half of the staff agreed.', tr: 'Personelin kabaca yarısı kabul etti.' },
      { en: 'It might be worth reconsidering this.', tr: 'Bunu yeniden düşünmeye değer olabilir.' },
      { en: 'I am not entirely convinced.', tr: 'Tamamen ikna olmuş değilim.' },
    ],
    dialogs: [
      ['Is this approach better?', 'Bu yaklaşım daha mı iyi?', 'It seems to be, at least so far.', 'En azından şimdilik öyle görünüyor.'],
      ['Are prices going up?', 'Fiyatlar artıyor mu?', 'The data indicate a slow rise.', 'Veriler yavaş bir artışa işaret ediyor.'],
      ['Was the event a success?', 'Etkinlik başarılı oldu mu?', 'Somewhat, but it could have been better.', 'Bir ölçüde, ama daha iyi olabilirdi.'],
      ['How many people came?', 'Kaç kişi geldi?', 'Roughly two hundred, I would say.', 'Kabaca iki yüz diyebilirim.'],
      ['Why is the office empty?', 'Ofis neden boş?', 'Apparently, there was a strike.', 'Görünüşe göre grev varmış.'],
      ['Is the job finished?', 'İş bitti mi?', 'Virtually, just a few details remain.', 'Neredeyse, sadece birkaç ayrıntı kaldı.'],
    ],
  },
  {
    level: 'C1', title: 'Zarif Cümleler', desc: 'Participle yapılarıyla cümleleri kısalt ve bağla.', icon: '🪶', color: '#1E3799',
    tip: `
      <p>Ortaç: <i><b>Having finished</b> the report, she left.</i> (Raporu bitirince çıktı.) <i><b>Feeling</b> tired, I went home.</i></p>
      <p>Özneler aynı olmalı! <i>"Walking home, the rain started"</i> yanlıştır; yağmur yürümez.</p>
      <p>Resmi bağlayıcılar: <b>owing to</b> (nedeniyle), <b>given that</b> (göz önüne alındığında), <b>albeit</b> (-se de), <b>hence</b> (bu yüzden).</p>`,
    words: [
      { en: 'owing to', tr: 'nedeniyle', emoji: '🌧️' },
      { en: 'given that', tr: '-diği göz önüne alınırsa', emoji: '🧾' },
      { en: 'albeit', tr: '-se de', emoji: '🪢' },
      { en: 'hence', tr: 'bu yüzden', emoji: '👣' },
      { en: 'thereby', tr: 'böylelikle', emoji: '🔁' },
      { en: 'upon', tr: '-ince/üzerine', emoji: '🔝' },
      { en: 'in light of', tr: '-in ışığında', emoji: '🔆' },
      { en: 'subsequently', tr: 'sonradan', emoji: '🔜' },
      { en: 'prior to', tr: '-den önce', emoji: '⏮️' },
      { en: 'regardless of', tr: '-e bakılmaksızın', emoji: '🙈' },
    ],
    sentences: [
      { en: 'Having finished the report, she left the office.', tr: 'Raporu bitirince ofisten çıktı.' },
      { en: 'Feeling tired, I went to bed early.', tr: 'Yorgun hissettiğim için erken yattım.' },
      { en: 'Owing to bad weather, the flight was cancelled.', tr: 'Kötü hava nedeniyle uçuş iptal edildi.' },
      { en: 'It was a success, albeit a small one.', tr: 'Küçük de olsa bir başarıydı.' },
      { en: 'Given that it is late, we should stop.', tr: 'Geç olduğu göz önüne alınırsa durmalıyız.' },
      { en: 'Upon arrival, please go to reception.', tr: 'Varışta lütfen resepsiyona gidin.' },
      { en: 'Prior to joining us, he worked in Berlin.', tr: "Bize katılmadan önce Berlin'de çalışıyordu." },
      { en: 'Everyone is welcome, regardless of age.', tr: 'Yaşa bakılmaksızın herkes davetli.' },
    ],
    dialogs: [
      ['Why was the event cancelled?', 'Etkinlik neden iptal edildi?', 'Owing to a lack of interest.', 'İlgi azlığı nedeniyle.'],
      ['Should we change our plan?', 'Planımızı değiştirmeli miyiz?', 'Yes, in light of the new data.', 'Evet, yeni verilerin ışığında.'],
      ['What happened after the merger?', 'Birleşmeden sonra ne oldu?', 'Many staff subsequently left.', 'Pek çok çalışan sonradan ayrıldı.'],
      ['Did the new system save money?', 'Yeni sistem para kazandırdı mı?', 'Yes, thereby reducing our costs.', 'Evet, böylelikle maliyetlerimizi azalttı.'],
      ['What should I do on arrival?', 'Varışta ne yapmalıyım?', 'Upon entering, show your pass.', 'Girerken kartını göster.'],
      ['Is it open to all students?', 'Tüm öğrencilere açık mı?', 'Yes, regardless of their grades.', 'Evet, notlarına bakılmaksızın.'],
    ],
  },
  {
    level: 'C1', title: 'Resmi Zorunluluklar', desc: 'Subjunctive ve sözleşme dili.', icon: '📜', color: '#4B4B4B',
    tip: `
      <p><b>Subjunctive</b>: insist, recommend, demand, suggest + <b>that</b> + yalın fiil: <i>I recommend that he <b>see</b> a doctor.</i> (sees değil)</p>
      <p>Sıfatlarla: <i>It is essential that she <b>be</b> present.</i></p>
      <p>Sözleşme dili: <b>shall</b> (zorunluluk), <b>comply with</b> (uymak), <b>in accordance with</b> (-e uygun olarak).</p>`,
    words: [
      { en: 'insist', tr: 'ısrar etmek', emoji: '✊' },
      { en: 'essential', tr: 'gerekli/zorunlu', emoji: '🔑' },
      { en: 'demand', tr: 'talep etmek', emoji: '📣' },
      { en: 'vital', tr: 'hayati', emoji: '❤️‍🔥' },
      { en: 'propose', tr: 'önermek', emoji: '💍' },
      { en: 'mandatory', tr: 'zorunlu', emoji: '📌' },
      { en: 'comply with', tr: '-e uymak', emoji: '✅' },
      { en: 'obligation', tr: 'yükümlülük', emoji: '⛓️‍💥' },
      { en: 'in accordance with', tr: '-e uygun olarak', emoji: '📘' },
      { en: 'terminate', tr: 'feshetmek/sona erdirmek', emoji: '🛑' },
    ],
    sentences: [
      { en: 'I recommend that he see a specialist.', tr: 'Bir uzmana görünmesini tavsiye ederim.' },
      { en: 'She insisted that we stay for dinner.', tr: 'Akşam yemeğine kalmamızda ısrar etti.' },
      { en: 'It is essential that she be present.', tr: 'Onun hazır bulunması şart.' },
      { en: 'Attendance at the meeting is mandatory.', tr: 'Toplantıya katılım zorunlu.' },
      { en: 'All staff must comply with these rules.', tr: 'Tüm personel bu kurallara uymalı.' },
      { en: 'We have an obligation to inform our clients.', tr: 'Müşterilerimizi bilgilendirme yükümlülüğümüz var.' },
      { en: 'The contract may be terminated at any time.', tr: 'Sözleşme her an feshedilebilir.' },
      { en: 'This was done in accordance with the law.', tr: 'Bu, yasaya uygun olarak yapıldı.' },
    ],
    dialogs: [
      ['What do you propose?', 'Ne öneriyorsunuz?', 'I propose that we delay the launch.', 'Lansmanı ertelememizi öneriyorum.'],
      ['Is this training required?', 'Bu eğitim gerekli mi?', 'Yes, it is mandatory for all staff.', 'Evet, tüm personel için zorunlu.'],
      ['Can they end the contract?', 'Sözleşmeyi bitirebilirler mi?', 'Only with thirty days of notice.', 'Sadece otuz gün önceden bildirimle.'],
      ['What did the union demand?', 'Sendika ne talep etti?', 'They demanded that wages be raised.', 'Ücretlerin artırılmasını talep ettiler.'],
      ['How important is it to attend?', 'Katılmak ne kadar önemli?', 'It is vital that you be there.', 'Orada olman hayati önemde.'],
      ['Have we met all our obligations?', 'Tüm yükümlülüklerimizi yerine getirdik mi?', 'I believe we have complied fully.', 'Bence tam olarak uyduk.'],
    ],
  },
  {
    level: 'C1', title: 'Siyaset ve Toplum', desc: 'Seçim, politika ve kamusal tartışma.', icon: '🗳️', color: '#C23616',
    tip: `
      <p>Tartışmada dengeli olmak: <i><b>While</b> some argue that…, others claim…</i></p>
      <p><b>the + sıfat</b> = bir grup insan: <i><b>the poor</b>, <b>the elderly</b>, <b>the unemployed</b>.</i></p>
      <p>Yaygın eşdizimler: <b>hold</b> an election, <b>pass</b> a law, <b>raise</b> taxes, <b>tackle</b> a problem.</p>`,
    words: [
      { en: 'government', tr: 'hükûmet', emoji: '🏛️' },
      { en: 'election', tr: 'seçim', emoji: '🗳️' },
      { en: 'policy', tr: 'politika/poliçe', emoji: '📜' },
      { en: 'democracy', tr: 'demokrasi', emoji: '🕊️' },
      { en: 'parliament', tr: 'parlamento', emoji: '🏟️' },
      { en: 'vote', tr: 'oy/oy vermek', emoji: '✅' },
      { en: 'minister', tr: 'bakan', emoji: '🧑‍💼' },
      { en: 'reform', tr: 'reform', emoji: '🛠️' },
      { en: 'corruption', tr: 'yolsuzluk', emoji: '💰' },
      { en: 'protest', tr: 'protesto', emoji: '🪧' },
    ],
    sentences: [
      { en: 'The election will be held in May.', tr: 'Seçim mayısta yapılacak.' },
      { en: 'Parliament has passed a new law.', tr: 'Parlamento yeni bir yasa çıkardı.' },
      { en: 'The government plans to raise taxes.', tr: 'Hükûmet vergileri artırmayı planlıyor.' },
      { en: 'Thousands of people joined the protest.', tr: 'Binlerce insan protestoya katıldı.' },
      { en: 'The minister resigned over the corruption scandal.', tr: 'Bakan yolsuzluk skandalı yüzünden istifa etti.' },
      { en: 'While some support the reform, others oppose it.', tr: 'Bazıları reformu desteklerken, diğerleri karşı çıkıyor.' },
      { en: 'The new policy mainly helps the elderly.', tr: 'Yeni politika özellikle yaşlılara yardımcı oluyor.' },
      { en: 'Voting is the foundation of democracy.', tr: 'Oy vermek demokrasinin temelidir.' },
    ],
    dialogs: [
      ['Did you vote in the election?', 'Seçimde oy kullandın mı?', 'Of course, it is our right.', 'Tabii, bu bizim hakkımız.'],
      ['What is the new policy about?', 'Yeni politika ne hakkında?', 'It aims to tackle unemployment.', 'İşsizlikle mücadeleyi amaçlıyor.'],
      ['Why are people protesting?', 'İnsanlar neden protesto ediyor?', 'They are angry about rising prices.', 'Artan fiyatlara kızgınlar.'],
      ['Who won the election?', 'Seçimi kim kazandı?', 'The results have not been announced yet.', 'Sonuçlar henüz açıklanmadı.'],
      ['Do you trust the government?', 'Hükûmete güveniyor musun?', 'Not after the recent scandal.', 'Son skandaldan sonra hayır.'],
      ['Will the reform pass?', 'Reform geçecek mi?', 'It depends on the vote next week.', 'Gelecek haftaki oylamaya bağlı.'],
    ],
  },
  {
    level: 'C1', title: 'Küresel Sorunlar', desc: 'İklim, eşitsizlik ve göç gibi konuları tartış.', icon: '🌍', color: '#1B9CFC',
    tip: `
      <p>Büyük veri ifade etme: <i><b>The vast majority of</b>…, <b>a growing number of</b>…</i></p>
      <p>Sebep-sonuç: <b>stem from</b> (-den kaynaklanmak), <b>give rise to</b> (yol açmak), <b>contribute to</b> (katkıda bulunmak).</p>
      <p>Geleceğe ilişkin: <i>Unless we act now, the damage <b>will have become</b> irreversible by 2050.</i></p>`,
    words: [
      { en: 'sustainability', tr: 'sürdürülebilirlik', emoji: '♻️' },
      { en: 'inequality', tr: 'eşitsizlik', emoji: '⚖️' },
      { en: 'poverty', tr: 'yoksulluk', emoji: '🥣' },
      { en: 'renewable', tr: 'yenilenebilir', emoji: '🌬️' },
      { en: 'emissions', tr: 'emisyonlar', emoji: '🏭' },
      { en: 'drought', tr: 'kuraklık', emoji: '🏜️' },
      { en: 'refugee', tr: 'mülteci', emoji: '⛺' },
      { en: 'conflict', tr: 'çatışma', emoji: '⚔️' },
      { en: 'crisis', tr: 'kriz', emoji: '🔥' },
      { en: 'resources', tr: 'kaynaklar', emoji: '⛏️' },
    ],
    sentences: [
      { en: 'Carbon emissions contribute to climate change.', tr: 'Karbon emisyonları iklim değişikliğine katkıda bulunuyor.' },
      { en: 'Many of these problems stem from poverty.', tr: 'Bu sorunların çoğu yoksulluktan kaynaklanıyor.' },
      { en: 'Renewable energy is growing quickly.', tr: 'Yenilenebilir enerji hızla büyüyor.' },
      { en: 'The drought has destroyed the crops this year.', tr: 'Kuraklık bu yıl ürünleri yok etti.' },
      { en: 'Millions of refugees have fled the conflict.', tr: 'Milyonlarca mülteci çatışmadan kaçtı.' },
      { en: 'The gap between rich and poor is growing.', tr: 'Zengin ile yoksul arasındaki uçurum büyüyor.' },
      { en: 'Natural resources are not unlimited.', tr: 'Doğal kaynaklar sınırsız değil.' },
      { en: 'The crisis gave rise to a wave of protests.', tr: 'Kriz bir protesto dalgasına yol açtı.' },
    ],
    dialogs: [
      ['What causes inequality?', 'Eşitsizliğe ne sebep oluyor?', 'Mainly a lack of access to education.', 'Başlıca eğitime erişim eksikliği.'],
      ['Can renewable energy replace oil?', 'Yenilenebilir enerji petrolün yerini alabilir mi?', 'In the long term, I believe so.', 'Uzun vadede, sanırım evet.'],
      ['Why are so many people leaving?', 'Neden bu kadar çok insan ayrılıyor?', 'They are fleeing war and hunger.', 'Savaştan ve açlıktan kaçıyorlar.'],
      ['What is sustainability?', 'Sürdürülebilirlik nedir?', 'Using resources without harming the future.', 'Kaynakları geleceğe zarar vermeden kullanmak.'],
      ['Is the situation getting worse?', 'Durum kötüleşiyor mu?', 'Unfortunately, the data suggest so.', 'Ne yazık ki veriler öyle gösteriyor.'],
      ['Who should solve this crisis?', 'Bu krizi kim çözmeli?', 'It requires global cooperation.', 'Küresel iş birliği gerektiriyor.'],
    ],
  },
  {
    level: 'C1', title: 'Etik ve Felsefe', desc: 'Soyut fikirleri tartış, ahlaki ikilemleri ele al.', icon: '🦉', color: '#6C5B7B',
    tip: `
      <p>Soyut tartışma: <i><b>To what extent</b> is freedom absolute? <b>It raises the question of</b> whether…</i></p>
      <p>Varsayım: <b>Suppose</b> / <b>Supposing</b> you found a wallet. <b>What if</b> nobody knew?</p>
      <p>Fikir sırası: <b>On balance</b> (genel olarak), <b>By contrast</b> (buna karşılık).</p>`,
    words: [
      { en: 'ethics', tr: 'etik', emoji: '⚖️' },
      { en: 'moral', tr: 'ahlaki', emoji: '😇' },
      { en: 'justice', tr: 'adalet', emoji: '🏺' },
      { en: 'freedom', tr: 'özgürlük', emoji: '🕊️' },
      { en: 'responsibility', tr: 'sorumluluk', emoji: '🧳' },
      { en: 'perspective', tr: 'bakış açısı', emoji: '🔭' },
      { en: 'dilemma', tr: 'ikilem', emoji: '🔱' },
      { en: 'conscience', tr: 'vicdan', emoji: '👼' },
      { en: 'principle', tr: 'ilke', emoji: '🧱' },
      { en: 'assumption', tr: 'varsayım', emoji: '🎈' },
    ],
    sentences: [
      { en: 'This raises the question of who is responsible.', tr: 'Bu, kimin sorumlu olduğu sorusunu gündeme getiriyor.' },
      { en: 'To what extent is freedom absolute?', tr: 'Özgürlük ne ölçüde mutlaktır?' },
      { en: 'Suppose you found a wallet in the street.', tr: 'Sokakta bir cüzdan bulduğunu varsay.' },
      { en: 'It is a question of principle, not money.', tr: 'Bu bir ilke meselesi, para değil.' },
      { en: 'I have a clear conscience.', tr: 'Vicdanım rahat.' },
      { en: 'From my perspective, the rule is unfair.', tr: 'Benim bakış açımdan kural haksız.' },
      { en: 'Your argument is based on a false assumption.', tr: 'Argümanın yanlış bir varsayıma dayanıyor.' },
      { en: 'With freedom comes responsibility.', tr: 'Özgürlükle birlikte sorumluluk gelir.' },
    ],
    dialogs: [
      ['Is it ever right to lie?', 'Yalan söylemek hiç doğru olabilir mi?', 'It depends on the consequences.', 'Sonuçlarına bağlı.'],
      ['What would you do in my place?', 'Benim yerimde ne yapardın?', 'That is a real dilemma for me.', 'Bu benim için gerçek bir ikilem.'],
      ['Does the end justify the means?', 'Amaç aracı meşru kılar mı?', 'I do not believe it does.', 'Bence kılmaz.'],
      ['Why did you refuse their money?', 'Paralarını neden reddettin?', 'It was against my principles.', 'İlkelerime aykırıydı.'],
      ['Is this decision fair?', 'Bu karar adil mi?', 'On balance, I would say yes.', 'Genel olarak evet derim.'],
      ['Can you see it from their perspective?', 'Onların bakış açısından görebilir misin?', 'I am trying, but it is not easy.', 'Deniyorum ama kolay değil.'],
    ],
  },
  {
    level: 'C1', title: 'Sanat ve Eleştiri', desc: 'Bir eseri yorumla, görüşünü ifade et.', icon: '🖼️', color: '#B53471',
    tip: `
      <p>Yorum dili: <i>The painting <b>evokes</b> a sense of loss. The film <b>explores</b> the theme of memory.</i></p>
      <p>Övgü ve eleştiri: <b>striking</b> (çarpıcı), <b>thought-provoking</b> (düşündürücü), <b>overrated</b> (abartılmış).</p>
      <p>Eşitlik vurgusu: <i>It's <b>not so much</b> a story <b>as</b> a poem.</i></p>`,
    words: [
      { en: 'masterpiece', tr: 'şaheser', emoji: '🖼️' },
      { en: 'exhibition', tr: 'sergi', emoji: '🏛️' },
      { en: 'sculpture', tr: 'heykel', emoji: '🗿' },
      { en: 'gallery', tr: 'galeri', emoji: '🖌️' },
      { en: 'critic', tr: 'eleştirmen', emoji: '🧐' },
      { en: 'abstract', tr: 'soyut', emoji: '🌀' },
      { en: 'inspire', tr: 'ilham vermek', emoji: '✨' },
      { en: 'contemporary', tr: 'çağdaş', emoji: '🎆' },
      { en: 'heritage', tr: 'miras', emoji: '🏺' },
      { en: 'overrated', tr: 'abartılmış', emoji: '🎈' },
    ],
    sentences: [
      { en: 'This painting is considered a masterpiece.', tr: 'Bu tablo bir şaheser olarak kabul ediliyor.' },
      { en: 'The film explores the theme of memory.', tr: 'Film hafıza temasını işliyor.' },
      { en: 'The exhibition opens at the gallery next week.', tr: 'Sergi gelecek hafta galeride açılıyor.' },
      { en: 'Critics praised the new film by the director.', tr: 'Eleştirmenler yönetmenin yeni filmini övdü.' },
      { en: 'Nature inspired much of her work.', tr: 'Doğa eserlerinin çoğuna ilham verdi.' },
      { en: 'Honestly, I think the book is overrated.', tr: 'Dürüst olmak gerekirse, kitabın abartıldığını düşünüyorum.' },
      { en: 'We must protect our cultural heritage.', tr: 'Kültürel mirasımızı korumalıyız.' },
      { en: 'It is not so much a story as a poem.', tr: 'Hikâyeden çok bir şiir gibi.' },
    ],
    dialogs: [
      ['What did you think of the show?', 'Gösteriyi nasıl buldun?', 'It was truly thought-provoking.', 'Gerçekten düşündürücüydü.'],
      ['Do you like abstract art?', 'Soyut sanatı sever misin?', 'I find it difficult to understand.', 'Anlamakta zorlanıyorum.'],
      ['Who is your favourite contemporary artist?', 'En sevdiğin çağdaş sanatçı kim?', 'I admire many, but Yayoi Kusama above all.', 'Çoğuna hayranım ama en çok Yayoi Kusama’ya.'],
      ['What inspired you to write this novel?', 'Bu romanı yazmak için neden ilham aldınız?', 'A story my grandmother told me.', 'Büyükannemin anlattığı bir hikâye.'],
      ['Is this sculpture very old?', 'Bu heykel çok mu eski?', 'Yes, it dates from the second century.', 'Evet, ikinci yüzyıldan kalma.'],
      ['Did the critics like it?', 'Eleştirmenler beğendi mi?', 'The reviews were rather mixed.', 'Yorumlar oldukça karışıktı.'],
    ],
  },
  {
    level: 'C1', title: 'İş Stratejisi', desc: 'Şirket, pazar ve yatırım dili.', icon: '♟️', color: '#006266',
    tip: `
      <p>Eşdizimler: <b>gain</b> market share, <b>launch</b> a product, <b>raise</b> capital, <b>cut</b> costs.</p>
      <p>Geleceği değerlendirme: <i><b>We are likely to see</b> growth. <b>Going forward</b>, we will focus on…</i></p>
      <p>Geçmişe dönük eleştiri: <i>We <b>should have</b> invested earlier. We <b>needn't have</b> hired so many.</i></p>`,
    words: [
      { en: 'merger', tr: 'şirket birleşmesi', emoji: '🤝' },
      { en: 'stakeholder', tr: 'paydaş', emoji: '👔' },
      { en: 'revenue', tr: 'gelir/ciro', emoji: '💹' },
      { en: 'market share', tr: 'pazar payı', emoji: '🥧' },
      { en: 'startup', tr: 'girişim', emoji: '🚀' },
      { en: 'entrepreneur', tr: 'girişimci', emoji: '🧑‍🚀' },
      { en: 'competitor', tr: 'rakip', emoji: '🏁' },
      { en: 'innovation', tr: 'yenilik', emoji: '💡' },
      { en: 'outsource', tr: 'dış kaynak kullanmak', emoji: '🌐' },
      { en: 'launch', tr: 'piyasaya sürmek/lansman', emoji: '🚀' },
    ],
    sentences: [
      { en: 'Our revenue grew by twenty percent last year.', tr: 'Gelirimiz geçen yıl yüzde yirmi arttı.' },
      { en: 'We are gaining market share from our competitors.', tr: 'Rakiplerimizden pazar payı kazanıyoruz.' },
      { en: 'The merger will be completed in March.', tr: 'Birleşme martta tamamlanacak.' },
      { en: 'We need to keep our stakeholders informed.', tr: 'Paydaşlarımızı bilgilendirmeyi sürdürmeliyiz.' },
      { en: 'The company plans to launch a new product.', tr: 'Şirket yeni bir ürün çıkarmayı planlıyor.' },
      { en: 'Most startups fail within five years.', tr: 'Çoğu girişim beş yıl içinde batar.' },
      { en: 'We should have invested in innovation earlier.', tr: 'Yeniliğe daha önce yatırım yapmalıydık.' },
      { en: 'They decided to outsource customer service.', tr: 'Müşteri hizmetlerini dış kaynağa vermeye karar verdiler.' },
    ],
    dialogs: [
      ['What is our main goal this year?', 'Bu yılki ana hedefimiz ne?', 'To increase our market share.', 'Pazar payımızı artırmak.'],
      ['How is the startup doing?', 'Girişim nasıl gidiyor?', 'We have just raised more capital.', 'Az önce ek sermaye topladık.'],
      ['Who is our biggest competitor?', 'En büyük rakibimiz kim?', 'A new company from South Korea.', 'Güney Kore’den yeni bir şirket.'],
      ['Should we outsource production?', 'Üretimi dış kaynağa vermeli miyiz?', 'Only if quality does not suffer.', 'Sadece kalite düşmezse.'],
      ['When will you launch the app?', 'Uygulamayı ne zaman çıkaracaksınız?', 'Going forward, we are aiming for spring.', 'Bundan sonra ilkbaharı hedefliyoruz.'],
      ['What did the investors say?', 'Yatırımcılar ne dedi?', 'They are pleased with the revenue.', 'Gelirden memnunlar.'],
    ],
  },
  {
    level: 'C1', title: 'İncelikli İletişim', desc: 'Ton, ima, ironi ve diplomatik dil.', icon: '🎩', color: '#574B90',
    tip: `
      <p>Kibar ret: <i>That's <b>an interesting idea, but</b>…</i> (Çoğu zaman "katılmıyorum" demektir.)</p>
      <p>Az söyleyerek çok şey anlatmak: <i>It wasn't <b>exactly</b> cheap.</i> (Çok pahalıydı.)</p>
      <p>Kısa cevaplarla uyum: <i>So do I. Neither do I.</i> Duygu belirtmek için: <i>I could have sworn…; You must be joking!</i></p>`,
    words: [
      { en: 'tactful', tr: 'nazik/düşünceli', emoji: '🕊️' },
      { en: 'diplomatic', tr: 'diplomatik', emoji: '🎩' },
      { en: 'sarcastic', tr: 'alaycı', emoji: '🙃' },
      { en: 'blunt', tr: 'patavatsız/dobra', emoji: '🔨' },
      { en: 'understatement', tr: 'olduğundan az gösterme', emoji: '🤏🏼' },
      { en: 'rephrase', tr: 'başka sözlerle söylemek', emoji: '🔁' },
      { en: 'ambiguous', tr: 'muğlak', emoji: '🌫️' },
      { en: 'imply', tr: 'ima etmek', emoji: '😏' },
      { en: 'nuance', tr: 'nüans/ince fark', emoji: '🎨' },
      { en: 'tone', tr: 'üslup/ton', emoji: '🎶' },
    ],
    sentences: [
      { en: 'What exactly are you trying to imply?', tr: 'Tam olarak ne ima etmeye çalışıyorsun?' },
      { en: 'Let me rephrase that.', tr: 'Bunu başka türlü söyleyeyim.' },
      { en: 'Her answer was deliberately ambiguous.', tr: 'Cevabı bilerek muğlaktı.' },
      { en: 'He can be rather blunt at times.', tr: 'Bazen oldukça dobra olabiliyor.' },
      { en: 'It was not exactly cheap.', tr: 'Pek de ucuz sayılmazdı.' },
      { en: 'I did not appreciate your tone.', tr: 'Üslubundan hoşlanmadım.' },
      { en: 'That is something of an understatement.', tr: 'Bu, durumu olduğundan hafif anlatıyor.' },
      { en: 'You must be joking!', tr: 'Şaka yapıyor olmalısın!' },
    ],
    dialogs: [
      ['Do you like my plan?', 'Planımı beğendin mi?', 'It is an interesting idea, but it needs work.', 'İlginç bir fikir ama üzerinde çalışılmalı.'],
      ['Was she being serious?', 'Ciddi miydi?', 'No, I think she was being sarcastic.', 'Hayır, sanırım alay ediyordu.'],
      ['I never eat breakfast.', 'Hiç kahvaltı yapmam.', 'Neither do I.', 'Ben de.'],
      ['How should I tell him?', 'Ona nasıl söylemeliyim?', 'Try to be as tactful as possible.', 'Olabildiğince nazik olmaya çalış.'],
      ['Did you say something to them?', 'Onlara bir şey söyledin mi?', 'I could have sworn I had told you.', 'Sana söylediğime yemin edebilirdim.'],
      ['Are you saying I am wrong?', 'Yanıldığımı mı söylüyorsun?', 'Not at all, I only see it differently.', 'Hiç de değil, sadece farklı görüyorum.'],
    ],
  },
);
