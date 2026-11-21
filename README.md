# Dilbaz — İngilizce Öğren

Oyunlaştırılmış, tarayıcıda çalışan bir İngilizce öğrenme uygulaması. Kurulum gerektirmez.

**Canlı sürüm:** https://tahaakty43.github.io/dilbaz/

## Özellikler

- Uyarlanabilir seviye tespit sınavı: seviye başına 16 soru (16–80 soru), her seviye 3 dilimde ölçülür ve kullanıcı tam uygun üniteden başlatılır; her sorudan sonra doğru/yanlış geri bildirimi
- 5 bölüm, 103 ünite, 412 ders: A1 Temeller (24) · A2 Günlük Hayat (24) · B1 Akıcı Konuşma (25) · B2 Usta Kullanıcı (18) · C1 İleri Düzey (12)
- 2060 kelime (her ünitede 20 kelime; 10 ek kelime ünitenin 3. dersinde öğretilir), 902 örnek cümle, 589 gerçek hayat diyaloğu
- **Konu anlatımı:** 103 ünitenin her birinde adım adım dilbilgisi dersi (her ünitede 3 adım, tablolar, sesli örnek cümleler, Türk öğrencilerin sık yaptığı hatalar) ve 4 konu sorusu. Ünitenin ilk dersi konu anlatımıyla başlar; “Konu” düğmesiyle istenince tekrar açılır
- **Konuşma pratiği:** Cümleyi dinleyip sesli tekrar etme, Türkçesini görüp İngilizce söyleme ve diyaloglarda sesli cevap verme. Telaffuz, tarayıcının ses tanıma özelliğiyle kontrol edilir; ses tanıma desteklenmiyorsa “kendin kontrol et” modu açılır. Mikrofon isteğe bağlıdır, “Şu an konuşamıyorum” ile atlanabilir
- **Yurt dışı sekmesi:** 25 gerçek hayat senaryosu (kafe, taksi, otel, pasaport kontrolü, eczane, kayıp bagaj, komşuyla sohbet, polis, iş görüşmesi, uçuş iptali, kira pazarlığı…). Karşı taraf doğal hızda konuşur, kullanıcı birkaç tur süren konuşmada sesli cevap verir; farklı doğru cevaplar kabul edilir, istenirse seçeneklerle cevaplanır. Senaryolar seviye geldikçe açılır
- **Hayat kurtaran kalıplar:** anlamadığında, kelimeyi bilmediğinde ya da takıldığında konuşmayı sürdürme stratejileri
- **Akıcılık kalıpları:** Her seviyede 12 hazır konuşma kalıbı (No worries, It depends, To be honest, I take your point…), örnek cümleleriyle
- **Gündelik konuşma:** gonna, wanna, gotta, dunno gibi 22 kısaltılmış konuşma biçimini anlama pratiği
- **Sürprizli konuşmalar:** Yurt dışı sekmesinde 10 yeni senaryo; karşı taraf her seferinde farklı tepki verir (masa dolu/boş, uçuş iptal/kapı değişti, ev sahibi anlayışlı/savunmacı…)
- **Günün görevi:** Her gün uygulama dışında yapılacak gerçek bir konuşma görevi (+10 XP)
- **Artık yapabildiklerin:** Profilde biten her ünite için “… yapabilirim” listesi ve sıradaki hedefler
- **Konuşma kontrolü:** 10 cümlelik ipucusuz konuşma sınavı; sonuçlar profilde takip edilir
- **Cevap verme şekli:** Konuşma soruları varsayılan olarak çoktan seçmelidir (yazılı seçenekler); Profil > Cevap verme şekli ile mikrofonla sesli cevaba geçilebilir
- **Ses:** Ortalama bir Amerikan erkek sesi tercih edilir; Profil > Konuşma hızı ile Yavaş / Normal / Doğal seçilebilir
- **Cümle hata analizi:** Yanlış kurulan, seçilen ya da söylenen cümle doğrusuyla kelime kelime karşılaştırılır; eksik (yeşil), fazla (kırmızı) ve yeri yanlış (turuncu) kelimeler gösterilir, hatanın kuralı Türkçe açıklanır (am/is/are eksikliği, -s eki, geçmiş zaman, do/does, a/an/the, edatlar, soru sırası, Türkçe gibi fiili sona koyma…)
- Dilbilgisi tekrarı: açılan konulardan karışık sorular
- Okuma bölümü: her ünite için kısa bir hikâye (103 hikâye), cümle cümle Türkçe çeviri, sesli okuma ve 3 anlama sorusu
- Tamamen tıklamalı egzersizler (klavye ve mikrofon gerekmez): resimli kelime, anlam seçme, kelime kartlarıyla cümle kurma, doğru çeviriyi bulma, dinleyip cümle/kelime seçme, boşluk doldurma, eşleştirme, gerçek hayat diyalogları
- Aralıklı tekrar sistemi (Leitner): kelimeler unutulmaya yakın zamanda (1, 3, 7, 14, 30 gün) tekrar gelir
- Bütün soru türlerinde yanlış cevaplara "neden yanlış?" açıklaması: dilbilgisi kuralı, kelime anlamı, eksik/fazla kelime, kelime sırası, metindeki kanıt cümlesi
- Hata defteri: yanlış yapılan cümleler kaydedilir, iki kez doğru yapılınca silinir
- Sınırsız can, XP, günlük seri, günlük hedef, başarımlar
- Ünite rehberleri (Türkçe dilbilgisi açıklamaları), kelime listesi, pratik modları
- Açık / koyu tema, mobil uyumlu

## Çalıştırma

`index.html` dosyasını tarayıcıda açman yeterli.

İlerleme tarayıcının yerel depolamasında (localStorage) tutulur.

Sesli konuşma kontrolü Chrome, Edge ve Android Chrome'da çalışır ve internet bağlantısı ister. Mikrofon izni için uygulamayı canlı sürümden (https) açman önerilir.

## Dosyalar

- `js/data.js`, `js/data-a2.js`, `js/data-b1.js`, `js/data-more.js`, `js/data-more2.js`, `js/data-b2.js`, `js/data-a1x.js`, `js/data-a2x.js`, `js/data-b1x.js`, `js/data-b2x.js`, `js/data-c1.js` — ders içerikleri
- `js/stories.js`, `js/stories-x.js` — okuma parçaları
- `js/grammar-a1.js`, `js/grammar-a2.js`, `js/grammar-b1.js`, `js/grammar-b2c1.js` — konu anlatımları ve konu soruları
- `js/abroad.js` — yurt dışı senaryoları ve hayat kurtaran kalıplar
- `js/words-plus.js` — her üniteye 10 ek kelime
- `js/coach.js` — akıcılık kalıpları, gündelik konuşma, günün görevi, yapabildiklerin listesi
- `js/abroad2.js` — sürprizli konuşma senaryoları
- `js/why.js` — cümle hata analizcisi
- `js/placement.js` — seviye tespit soru bankası
- `js/app.js` — uygulama ve ders motoru
- `css/style.css` — tasarım
