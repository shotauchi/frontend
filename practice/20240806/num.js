//Aさんは1000円のバック、800円の小物入れを購入しました。
//合計でいくら購入したでしょうか？

var bag            = 1000;
var accessory_case =  800;
var sum            = bag + accessory_case;

console.log(sum);

//Bさんはネットで商品1の1200円、商品2の1400円、商品3を1000円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var merchandise1 = 1200;
var merchandise2 = 1400;
var merchandise3 = 1000;
var sum          = merchandise1 + merchandise2 + merchandise3;

console.log(sum);

//Cさんはスーパーでキッチン用品類900円、生活用品類を1100円購入しましたが
//Cさんは2600円持ってきていましたがいくら使ったでしょうか？

var kitchen_supplies =  900;
var Livingware       = 1100;
var money            = 2600;
var pull_1             = money - (kitchen_supplies + Livingware);

console.log(pull_1);

//Dさんはお店1で食品を1800円、お店2で食品を1200円購入しました。
//Dさんは3500円持ってきていましたがいくら使ったでしょうか？

var store1 = 1800;
var store2 = 1200;
var money2 = 3500;
var pull_2 = money2 - (store1 + store2);

console.log(pull_2);

//Eさんは友達がたくさん集まるのでお弁当1の900円を6個とお弁当2の1000円を8個購入しました。
//Eさんはそれぞれ何円分購入したでしょうか？

var bento1 =  900 * 6;
var bento2 = 1000 * 8;

console.log(bento1);
console.log(bento2);

//Fさんは1袋12個入りのアメを2袋と1袋8個入りのアメを3袋購入して、7人で分ける事にしました。
//その場合いくつずつ余るでしょうか？

var Candy1     = 12 * 2;
var Candy2     =  8 * 3;
var people     =      7;
var remainder1 = Candy1 % people;
var remainder2 = Candy2 % people;

console.log(remainder1);
console.log(remainder2);

//Gさんはお菓子を作りました。Gさんが作ったのは20個のケーキと36個のクッキーです。それを8人で分けることにしました。
//それぞれいくつずつ分けられるでしょうか？

var cake    = 20;
var cookies = 36;
var people2 =  8;
var divite1 = cake /    people2;
var divite2 = cookies / people2;

console.log(divite1);
console.log(divite2);
