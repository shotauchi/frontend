//Aさんはお店1で4000円の商品と2400円の商品、1600円の商品を購入しました。
//Aさんは9500円持っていましたが購入金額は所持金を超えたでしょうか、それとも超えなかったでしょうか？

var store1   = 4000 + 2400 + 1600;
var money    =               9500;
var boolean  = money >= store1;

console.log(boolean);

//Bさんはお店2で5000円の商品と7600円の商品と800円の商品を購入しました。この時のBさんの所持金は17000円でした。
//Bさんの所持金は購入金額を超えたでしょうか、それとも超えなかったでしょうか？

var store2  = 5000 + 7600 + 800;
var money2  =             17000;
var boolean = money2 <= store2;

console.log(boolean);

//Cさんはリサイクルショップで食器類3000円、インテリアのデスク6500円、チェア2600円、オーディオ4600円を購入しました。
//Cさんは24000円持ってきていましたが、購入金額は足りるでしょうか、それとも足りなかったでしょう？

var thrift_shop = 3000 + 6500 + 2600 + 4600;
var money3      =                     24000;
var pull        = money3 - thrift_shop;
var boolean     = money3 >= thrift_shop;

console.log(pull);
console.log(boolean);

//Dさんはコンビニで働いていました。その日は140円のおにぎりが60個、240円のパンが40個、650円の弁当が32個売れました。
//それぞれいくつずつになるでしょうか？

var raceball = 140 * 60;
var bread    = 240 * 40;
var bento    = 650 * 32;

console.log(raceball);
console.log(bread);
console.log(bento);

//Eさんはお菓子の詰め合わせ1袋38個入りのクッキーと1袋48個入りのビスケットを家族5人で分ける事にしました。
//分けた時の余りがそれぞれ2つ以上になるでしょうか、それともならなかったでしょうか？

var cookie  = 36;
var biscuit = 48;
var family  =  6;
var divide1  = 36 % 5;
var divide2  = 48 % 5;
var boolean1  = divide1 == 2;
var boolean2  = divide2 == 1;

console.log(divide1);
console.log(divide2);
console.log(boolean1);
console.log(boolean2);


//Fさんは1袋60枚入りのクリアファイルと1袋80枚入りのクリアファイルを20人に分けることにしました。
//その場合いくつずつ分けられるでしょうか？また余りは5枚以上になるでしょうか、それとも5枚以下でしょうか？

var clear_file_1 = 60;
var clear_file_2 = 80;
var people       = 20;
var divide3      = clear_file_1 / people;
var divide4      = clear_file_2 / people;
var boolean3     = clear_file_1 == divide3;
var boolean4     = clear_file_2 == divide4;

console.log(divide3);
console.log(divide4);
console.log(boolean3);
console.log(boolean4);

