//Aさんはスーパーへ買い物に行きました。そこで魚を1200円、肉を1600円、冷凍食品を800円購入しました。
//合計でいくら購入したでしょうか？

var fish        = 1200;
var meet        = 1600;
var frozen_food =  800;
var sum         = fish + meet + frozen_food;

console.log(sum);

//Bさんは2泊の旅行に行きました。1泊目は8000円で2泊目は7800円でした。
//Bさんは2日間の宿泊費はいくらになったでしょうか？

var one_night = 8000;
var two_night = 7800;
var sum       = one_night + two_night;

console.log(sum);

//Cさんは書店で700円の漫画と1000円の小説と1200円の小説を購入しました。
//Cさんは4500円持ってきていました。購入金額はいくら使ったでしょうか？

var comics   =   700;
var novel_1  =  1000;
var novel_2  =  1200;
var money1   =  4500;
var pull2    = money1 - (comics + novel_1 + novel_2);

console.log(pull2);

//Dさんはお店でファンヒーター15000円、デスクスタンド3400円を購入しました。
//Dさんは20000円持ってきていましたが購入金額はいくらに使ったでしょうか？

var Fan_heater = 15000;
var desk_stand =  3400;
var money2     = 20000;
var pull2      = money2 - (Fan_heater + desk_stand);

console.log(pull2);

//Eさんはお店で商品1の980円が12個、商品2の1200円が8個売れました。
//Eさんはそれぞれ何円ずつ売れたでしょうか？

var merchandise1 = 980 * 12;
var merchandise2 = 1200 * 8;

console.log(merchandise1);
console.log(merchandise2);

//Fさんはお店でアクセサリーを売っていました。その日はネックレス1800円が7個、ブレスレット900円が9個売れました。
//ネックレスとブレスレットはそれぞれいくつずつ売れたでしょうか？

var necklace = 1800 * 7;
var bracelet =  900 * 9;

console.log(necklace);
console.log(bracelet);

//Gさんは1箱16個入りのデザートと1箱22個入りのデザートを6人で分ける事にしました。
//それぞれ分けるといくつ余るでしょうか？

var dessert1 = 16;
var dessert2 = 22;
var people   =  6;
var divite1  = dessert1 % people;
var divite2  = dessert2 % people;

console.log(divite1);
console.log(divite2);

//Hさんと友達は数学のテストでそれぞれHさん76点、友達1が74点、友達2が78点取りました。
//この場合の平均点は何点になるでしょうか？

var h_san   = 76;
var friend1 = 74;
var friend2 = 78;
var avarage = (h_san + friend1 + friend2) /3;

console.log(avarage);



