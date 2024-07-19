//Aさんは登山をするために登山アイテムを買いに行きました。そこでAさんは1個6000円のリュックサックと登山スティック1400円をお店1で購入しました。
//次にお店2で1足3600円のシューズと1着6400円の防寒ウェア、1000円の懐中電灯を購入しました。
//この時のAさんは合計金額が20000円以内で考えていましたが購入金額は20000円を超えたでしょうかそれとも超えなかったでしょうか？

var rucksack          = 6000;
var stick             = 1400;
var shoes             = 3600;
var cold_weather_wear = 6400;
var flashlight        = 1000;
var Purchase_amount = rucksack + stick + shoes + cold_weather_wear + flashlight;
var boolean  = Purchase_amount <= 20000;

console.log(Purchase_amount);
console.log(boolean);

//Bさんは家の掃除を行うために必要な道具をお店に買いに行きました。お店1で1個600円の箒と雑巾5組1でセット500円と1個100円のブラシを購入しました。
//次にお店2でシンク用洗剤1個160円を2つと食器用スポンジ1セット5個入り400円を3個買いました。
//Bさんは6000円持って来ていました。2店舗でいくら分使ったでしょうか？

var money       = 6000;
var broom       = 600;
var dust_cloth  = 500;
var detergent   = 150 * 2;
var dish_sponge = 400 * 5;
var use         = money - (broom + dust_cloth + dish_sponge + detergent);

console.log(use);

//Cさんは1パック10枚入りのクッキー1000円を3個と1パック14個入りのフロランタン1100円を2個、1パック12個入りのフィナンシェ1200円を4個購入しました。
//それぞれの購入金額は全部でいくらになるでしょうか？

var cookie    = 1000 * 3;
var florentin = 1100 * 2;
var financier = 1200 * 4;

console.log(cookie);
console.log(florentin);
console.log(financier);

//Dさんは文房具屋で働いていました。その日は在庫60本の鉛筆1本100円が28本売れて、在庫120冊のノート1冊120円が32冊売れました。
//鉛筆とノートの余りと売上はいくつずつになるでしょうか？

var pencil      = 60  % 28;
var note        = 120 % 32;
var pencil_sell = 100 * 28;
var note_sell   = 120 * 32;

console.log(pencil);
console.log(pencil_sell);
console.log(note);
console.log(note_sell);

//Eさんは今日買い物で使った金額を計算する事にしました。Eさんは食料品を3600円分、日用品を2000円分、家電屋さんで照明器具2600円分を購入しました。
//Eさんの貯金額は50000円です。いくら分使ったでしょうか？

var Savings_amount    = 50000;
var groceries         =  3600;
var daily_necessities =  2000;
var illumination      =  2600;
var used              = Savings_amount / (groceries + daily_necessities + illumination);

console.log(used);



