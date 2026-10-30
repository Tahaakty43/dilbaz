# Dilbaz — İngilizce Öğren

Oyunlaştırılmış, tarayıcıda çalışan bir İngilizce öğrenme uygulaması. Kurulum gerektirmez.

**Canlı sürüm:** https://tahaakty43.github.io/dilbaz/

## Özellikler

- Uyarlanabilir seviye tespit sınavı: seviye başına 16 soru (16–80 soru), her seviye 3 dilimde ölçülür ve kullanıcı tam uygun üniteden başlatılır; her sorudan sonra doğru/yanlış geri bildirimi
- 5 bölüm, 103 ünite, 412 ders: A1 Temeller (24) · A2 Günlük Hayat (24) · B1 Akıcı Konuşma (25) · B2 Usta Kullanıcı (18) · C1 İleri Düzey (12)
- 1030 kelime, 902 örnek cümle, 589 gerçek hayat diyaloğu
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

## Dosyalar

- `js/data.js`, `js/data-a2.js`, `js/data-b1.js`, `js/data-more.js`, `js/data-more2.js`, `js/data-b2.js`, `js/data-a1x.js`, `js/data-a2x.js`, `js/data-b1x.js`, `js/data-b2x.js`, `js/data-c1.js` — ders içerikleri
- `js/stories.js`, `js/stories-x.js` — okuma parçaları
- `js/placement.js` — seviye tespit soru bankası
- `js/app.js` — uygulama ve ders motoru
- `css/style.css` — tasarım
