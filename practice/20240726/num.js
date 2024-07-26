//Aさんはスーパーで調味料を1600円、冷凍食品を800円、洗剤を600円分購入しました。
//Aさんは5000円持っていましたが合計金額は足りるでしょうか、それとも足りなかったでしょうか？

var seasoning   = 1600;
var frozen_food =  800;
var detergent   =  600;
var money       = 5000;
var sum         = (seasoning + frozen_food + detergent);//3000円
var boolean     = money >= sum;

console.log(boolean);

//Bさんはキャンプショップに行きました。そこでBさんはオイルランタン3600円、ピコグリル3800円、メスティン3200円を購入しました。
//Bさんは12000円持っていましたが合計金額は足りるでしょうか、それとも足りなかったでしょうか？

var oil_lantern     =  3600;
var pico_grill      =  3800;
var Mestin          =  3200;
var money2          = 12000;
var Amount_of_money = (oil_lantern + pico_grill + Mestin);
var boolean         = money2 <= Amount_of_money;

console.log(boolean);

//Cさんは服屋に買い物に行きました。そこでCさんはパーカー4200円、ジーンズ3600円、スウェット4800円を購入しました。
//Cさんは13000円持ってきていましたが購入した合計金額からいくら使ったでしょうか？

var hoodie  =  4200;
var jeans   =  3600;
var sweat   =  4800;
var money3  = 13000;
var use     = money3 - (hoodie + jeans + sweat);
var boolean = money3 >= use;

console.log(use);
console.log(boolean);

//Dさんはコンビニで働いていました。その日はおにぎり120円が50個、ホットスナック140円が38個、お弁当800円が26個売れました。
//それぞれの売り上げはいくらずつになったでしょうか？

var riceball = 120 * 50;
var hotsnack = 140 * 38;
var Bento    = 800 * 26;

console.log(riceball);
console.log(hotsnack);
console.log(Bento);

//Eさんはお土産のお菓子を友達に買ってきました。1つは1箱26枚入りのクッキー、2つ目はラングドシャ1箱32枚入りです。
//配る友達は6人で分ける事にしました。その場合いくつ余るでしょうか？

var people         =           6;
var cookie         = 26 % people;
var langue_de_chat = 32 % people;


console.log(cookie);
console.log(langue_de_chat);

//Fさんは20000円分のポイントと10000円分のポイントを友達10人で分ける事にしました。
//その場合いくつずつ分けられるでしょうか？

var point1 = 20000;
var point2 = 10000;
var friend =    10;
var dvite1 = point1 / friend;
var dvite2 = point2 / friend;

console.log(dvite1);
console.log(dvite2);

