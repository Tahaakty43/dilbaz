// Dilbaz — seviye tespit sınavı soru bankası (özgün sorular)
// Her soru: [boşluklu cümle, doğru cevap, yanlış 1, yanlış 2]

const PLACEMENT_BANK = {
  A1: [
    ['She ___ a teacher.', 'is', 'are', 'am'],
    ['I ___ two brothers.', 'have', 'has', 'am'],
    ['They ___ from Turkey.', 'are', 'is', 'be'],
    ['He ___ coffee every morning.', 'drinks', 'drink', 'drinking'],
    ['___ you like tea?', 'Do', 'Does', 'Are'],
    ['There ___ three apples on the table.', 'are', 'is', 'am'],
    ['I would like ___ apple, please.', 'an', 'a', 'many'],
    ['We ___ not hungry.', 'are', 'is', 'do'],
    ['My sister ___ not like fish.', 'does', 'do', 'is'],
    ['Where ___ your parents live?', 'do', 'does', 'are'],
    ['I can ___ English.', 'speak', 'speaks', 'speaking'],
    ['The keys are ___ my bag.', 'in', 'to', 'from'],
    ['This is Ali. ___ is my friend.', 'He', 'She', 'They'],
    ['What time ___ it?', 'is', 'are', 'does'],
  ],
  A2: [
    ['I ___ to the cinema yesterday.', 'went', 'go', 'have gone'],
    ['___ you see the match last night?', 'Did', 'Do', 'Were'],
    ['She is ___ than her brother.', 'taller', 'more tall', 'tallest'],
    ['We ___ dinner when the phone rang.', 'were having', 'have', 'are having'],
    ["I'm going ___ my grandmother this weekend.", 'to visit', 'visit', 'visited'],
    ["There isn't ___ milk in the fridge.", 'any', 'some', 'many'],
    ['You look ill. You ___ see a doctor.', 'should', 'would', 'must to'],
    ['How ___ sugar do you want?', 'much', 'many', 'long'],
    ['This is the ___ restaurant in town.', 'best', 'better', 'most good'],
    ['Look at those clouds! It ___ rain.', 'is going to', 'goes to', 'will to'],
    ['Be quiet! The baby ___.', 'is sleeping', 'sleeps', 'slept'],
    ["I'll call you when I ___ home.", 'get', 'will get', 'got'],
    ['He ___ his homework yet.', "hasn't finished", "didn't finished", "doesn't finish"],
    ['I enjoy ___ books in the evening.', 'reading', 'to read', 'read'],
  ],
  B1: [
    ['I have lived here ___ ten years.', 'for', 'since', 'during'],
    ['Have you ___ been to Japan?', 'ever', 'yet', 'already'],
    ['If I ___ more money, I would buy a car.', 'had', 'have', 'will have'],
    ['If it rains tomorrow, we ___ stay at home.', 'will', 'would', 'are'],
    ['This bridge ___ in 1990.', 'was built', 'built', 'has build'],
    ['She asked me where I ___.', 'lived', 'do live', 'did I live'],
    ["I'm not used to ___ up so early.", 'getting', 'get', 'got'],
    ['Would you mind ___ the window?', 'opening', 'to open', 'open'],
    ['This is the man ___ car was stolen.', 'whose', 'who', 'which'],
    ['By the time we arrived, the film ___.', 'had already started', 'has already started', 'already starts'],
    ['He suggested ___ a taxi.', 'taking', 'to take', 'take'],
    ['I wish I ___ speak French.', 'could', 'can', 'will'],
    ["I've been waiting ___ two o'clock.", 'since', 'for', 'from'],
    ["You don't have to come, ___ you want to.", 'unless', 'if', 'because'],
  ],
};

// Sonuç seviyelerinin açıklamaları
const PLACEMENT_LEVELS = [
  { code: 'A0', title: 'Başlangıç', desc: 'İngilizceye sıfırdan başlıyorsun. Temellerden adım adım ilerleyeceğiz.' },
  { code: 'A1', title: 'Temel seviye', desc: 'Basit kelimeleri ve cümleleri biliyorsun. Şimdi günlük hayat durumlarına geçme zamanı.' },
  { code: 'A2', title: 'Ön orta seviye', desc: 'Alışveriş, yol sorma, kendini anlatma gibi günlük işleri halledebiliyorsun. Sıra akıcı konuşmada.' },
  { code: 'B1', title: 'Orta seviye', desc: 'Günlük hayatta rahatça iletişim kurabiliyorsun. Tüm dersler açıldı, tekrar ve pratik için kullanabilirsin.' },
];
