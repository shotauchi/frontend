//Aさんはスーパーでお肉を1200円、魚を1000円、野菜を800円分購入しました。
//Aさんは合計でいくら分購入したでしょうか？

var meat       = 1200;
var fish       = 1000;
var vegetables =  800;
var sum1        = meat + fish + vegetables;

console.log(sum1);

//Bさんは荷物を送るため宅配センターへ行きました。そこでBさんは、小型の箱の荷物800円、中型荷物1400円、大型の荷物1900円の計3つを送ることにしました。
//Bさんは3つ合計でいくら支払ったでしょうか？

var small_luggage   =  800;
var medium_luggage  = 1400;
var large_luggage   = 1900;
var sum2            = small_luggage + medium_luggage + large_luggage;

console.log(sum2);

//Cさんはショッピングモールで洋服を買うことにしました。Cさんが買ったのは、パーカー4800円、ジーンズ3800円、Ｔシャツ1800円をそれぞれ購入しました。
//Cさんは11500円持ってきていました。購入金額はいくら使ったでしょうか？

var hoodie  =  4800;
var jeans   =  3800;
var T_shirt =  1800;
var money   = 11500;
var divite1  = money - (hoodie + jeans + T_shirt);

console.log(divite1);

//Dさんはシューズストアへ靴を買いに行きました。そこでDさんはスニーカー5600円、ランニングシューズ3600円、革靴8000円をそれぞれ購入しました。
//Dさんは20000円持ってきていましたが購入金額はいくら使ったでしょうか？

var money2        = 20000;
var sneakers      =  5600;
var running_shoes =  3600;
var leather_shoes =  8000;
var divete2       = money2 - (sneakers + running_shoes + leather_shoes);

console.log(divete2);

//Eさんはパン屋さんで働いていました。。その日は総菜パン1個140円が60個売れ、菓子パン1個120円が48個売れました。
//それぞれいくつずつ売れたでしょうか？

var Deli_bread  = 140 * 60;
var sweet_bread = 120 * 48;

console.log(Deli_bread);
console.log(sweet_bread);

//Fさんはお弁当屋で働いていました。その日は弁当1の780円が28個、弁当2の900円が18個売れました。
//弁当はそれぞれいくつずつ売れたでしょうか？

var bento_1 = 780 * 28;
var bento_2 = 900 * 18;

console.log(bento_1);
console.log(bento_2);

//Gさんは1箱38個入りのキーホルダーと1箱52個入りのストラップを8人で分けることにしました。
//その場合いくつずつ分けらて余りが出るでしょうか？

var key_ring   = 38;
var strap      = 52;
var people     =  8;
var remainder1 = key_ring % people;
var remainder2 = strap % people;

console.log(remainder1);
console.log(remainder2);

//Hさんは1袋12束入りの花2つと1袋18束入りの花4つを40人で分けることにしました。
//花はそれぞれいくつずつ分けられ余るでしょうか？

var flower_1   = 12 * 2;
var flower_2   = 18 * 4;
var people_40  = 40;
var remainder3 = flower_1 % people_40;
var remainder4 = flower_2 % people_40;

console.log(remainder3);
console.log(remainder4);

//Iさんは120枚のパンフレットと80枚のパンフレットを20人に配る事にしました。
//その場合いくつずつ分けることが出来るでしょうか？

var Pamphlet_1 = 120;
var Pamphlet_2 =  80;
var people_20  =  20;
var divete3    = Pamphlet_1 / people_20;
var divete4    = Pamphlet_2 / people_20;

console.log(divete3);
console.log(divete4);

//Jさんはボールペン60本と40本のボールペンを10人で分ける事にしました。
//その場合いくつずつ分けられるでしょうか？

var ballpoint_pen_1 = 60;
var ballpoint_pen_2 = 40;
var people_10       = 10;
var divete5         = ballpoint_pen_1 / people_10;
var divete6         = ballpoint_pen_2 / people_10;

console.log(divete5);
console.log(divete6);
 
