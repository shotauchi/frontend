//Aさんはお店1で3000円の商品と2500円の商品を購入しました。お店2では3500円の商品と4200円の商品を購入しました。
//Aさんは14000円持っていましたが合計金額は足りるでしょうか、それとも足りなかったでしょうか？

var store1  = 3000 + 2500;
var store2  = 3500 + 4200;
var sum     = store1 + store2;
var money   = 14000;
var boolean = sum <= money;

console.log(sum);
console.log(boolean);

//Bさんはスーパーでお肉を1200円、お米3200円、お菓子を1000円購入しました。Bさんは7500円持っていました。
//合計金額は所持金で足りるでしょうか、それとも足りなかったでしょうか？

var Supermarket = 1200 + 3200 + 1000;
var money2      = 7500;
var pull        = money2 - Supermarket;
var boolean     = money2 == pull;

console.log(pull);
console.log(boolean);

//Cさんは家電屋さんで働いていました。その日は家電1の4600円が18個、家電2の5200円が12個家電3の3500円が16個売れました。
//それぞれいくつ売れたでしょうか？

var home_appliances1 = 4600 * 18;
var home_appliances2 = 5200 * 12;
var home_appliances3 = 3500 * 16;

console.log(home_appliances1);
console.log(home_appliances2);
console.log(home_appliances3);

//Dさんはチョコレート1袋20個入りと1袋26個入りのチョコレートを友達6人で分ける事にしました。
//それぞれいくつずつ分けられるでしょうか？

var chocolate1 = 20;
var chocolate2 = 26;
var friend     =  6;
var divide1    = chocolate1 % friend;
var divide2    = chocolate2 % friend;

console.log(divide1);
console.log(divide2);

//Eさんは1箱当たり40冊入ったノートと1箱60冊入ったノートを14人で分ける事にしました。
//その場合いくつずつ分けられるでしょうか？

var note1   = 40;
var note2   = 60;
var people  = 14;
var divide3 = note1 / people;
var divide4 = note2 / people;

console.log(divide3);
console.log(divide4);

