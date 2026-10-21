# Dilbaz — İngilizce Öğren

Oyunlaştırılmış, tarayıcıda çalışan bir İngilizce öğrenme uygulaması. Kurulum gerektirmez.

**Canlı sürüm:** https://tahaakty43.github.io/dilbaz/

## Özellikler

- Uyarlanabilir seviye tespit sınavı (A0 – B1+)
- 3 bölüm, 25 ünite, 100 ders: A1 Temeller · A2 Günlük Hayat · B1 Akıcı Konuşma
- Egzersizler: resimli kelime, anlam seçme, cümle kurma, dinleme, dikte, yazma, boşluk doldurma, eşleştirme, gerçek hayat diyalogları, konuşma (mikrofon)
- XP, günlük seri, can sistemi, günlük hedef, başarımlar
- Ünite rehberleri (Türkçe dilbilgisi açıklamaları), kelime listesi, pratik modları
- Açık / koyu tema, mobil uyumlu

## Çalıştırma

`index.html` dosyasını tarayıcıda açman yeterli. Konuşma egzersizleri için yerel sunucu önerilir:

```bash
python -m http.server 5173
```

İlerleme tarayıcının yerel depolamasında (localStorage) tutulur.

## Dosyalar

- `js/data.js`, `js/data-a2.js`, `js/data-b1.js` — ders içerikleri
- `js/placement.js` — seviye tespit soru bankası
- `js/app.js` — uygulama ve ders motoru
- `css/style.css` — tasarım
