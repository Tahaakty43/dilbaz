# Dilbaz — İngilizce Öğren

Oyunlaştırılmış, tarayıcıda çalışan bir İngilizce öğrenme uygulaması. Kurulum gerektirmez.

**Canlı sürüm:** https://tahaakty43.github.io/dilbaz/

## Özellikler

- Uyarlanabilir seviye tespit sınavı: seviye başına 12 soru (12–36 soru), her seviye 3 dilimde ölçülür ve kullanıcı tam uygun üniteden başlatılır; her sorudan sonra doğru/yanlış geri bildirimi
- 3 bölüm, 37 ünite, 148 ders: A1 Temeller (14) · A2 Günlük Hayat (12) · B1 Akıcı Konuşma (11)
- 370 kelime, 374 örnek cümle, 197 gerçek hayat diyaloğu
- Tamamen tıklamalı egzersizler (klavye ve mikrofon gerekmez): resimli kelime, anlam seçme, kelime kartlarıyla cümle kurma, doğru çeviriyi bulma, dinleyip cümle/kelime seçme, boşluk doldurma, eşleştirme, gerçek hayat diyalogları
- Aralıklı tekrar sistemi (Leitner): kelimeler unutulmaya yakın zamanda (1, 3, 7, 14, 30 gün) tekrar gelir
- Yanlış cevaplarda "neden yanlış?" açıklamaları (dilbilgisi, kelime anlamı, kelime sırası)
- Hata defteri: yanlış yapılan cümleler kaydedilir, iki kez doğru yapılınca silinir
- Sınırsız can, XP, günlük seri, günlük hedef, başarımlar
- Ünite rehberleri (Türkçe dilbilgisi açıklamaları), kelime listesi, pratik modları
- Açık / koyu tema, mobil uyumlu

## Çalıştırma

`index.html` dosyasını tarayıcıda açman yeterli.

İlerleme tarayıcının yerel depolamasında (localStorage) tutulur.

## Dosyalar

- `js/data.js`, `js/data-a2.js`, `js/data-b1.js`, `js/data-more.js` — ders içerikleri
- `js/placement.js` — seviye tespit soru bankası
- `js/app.js` — uygulama ve ders motoru
- `css/style.css` — tasarım
