//Aさんはお店に買い物に行きました。買ったのはかばん5000円、帽子1600円、財布1200円を購入しました。
//Aさんは合計でいくら購入したでしょうか？

var bag    = 5000;
var cap    = 1600;
var wallet = 1200;
var sum    = bag + cap + wallet;

console.log(sum);

//Bさんは日用品を買いに行きました。ハンドソープ500円、歯磨き粉200円、ハンドペーパー240円、トイレットペーパー400円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var handsoap     = 500;
var toothpaste   = 200;
var handpaoer    = 240;
var toilet_paper = 400;
var sum2         = handsoap + toothpaste + handpaoer + toilet_paper;

console.log(sum2);

//Cさんは所持金5000円で電車800円を往復で購入して、行の分のバス代340円と帰りのバス代の320円を購入しました。
//Cさんは何円支払ったでしょうか？

var money =     5000;
var bus1  =      340;
var bus2  =      320;
var train =  800 * 2;
var pull  = money - (bus1 + bus2 + train);

console.log(pull);

//Dさんは服屋で買い物をしました。そこで部屋着4000円、ジャケット6000円、靴下600円を購入しました。
//Dさんは所持金14000円を持ってきていましたが何円使ったでしょうか？

var Room_wear =  4000;
var jacket    =  6000;
var socks     =   600;
var money2    = 14000;
var pull2     = money2 - (Room_wear + jacket + socks);

console.log(pull2);

//Eさんはお店を経営していて足りない商品を追加で発注をすることにしました。
//足りなくなったのは商品1で1箱30個入りを3つ、商品2で1箱28個入りを購入しました。商品1と商品2はそれぞれいくつ購入しましたか？

var merchandise1 = 30 * 3;
var merchandise2 = 28 * 2;

console.log(merchandise1);
console.log(merchandise2);

//Fさんは美味しいパン屋さんでカレーパン240円を6個、フレンチトースト180円を4個、クロワッサン200円を6個それぞれ購入しました。
//Fさんはそれぞれいくら購入したでしょうか？

var curry_bread  = 240 * 6;
var French_toast = 180 * 4;
var croissant    = 200 * 6;

console.log(curry_bread);
console.log(French_toast);
console.log(croissant);

//Gさんは1.5Lのジュースと2.0Lのジュースを4人で分ける事にしました。
//7人で分けるとそれぞれ何㎖ずつ余るでしょうか？

var juice1 = 1500;
var juice2 = 2000;
var people =    7;
var remainder1 = juice1 % people;
var remainder2 = juice2 % people;

console.log(remainder1);
console.log(remainder2);

//Hさんは1パック20個入りの和菓子を3つと1パック18個入りの和菓子を5つ購入しました。それを30人で分けることにしました。
//2種類の和菓子はそれぞれいくつずつ分けられるでしょうか？

var Japanese_sweets1 = 20 * 3;
var Japanese_sweets2 = 18 * 5;
var people2          =     30;
var divite1          = Japanese_sweets1 / people2;
var divite2          = Japanese_sweets2 / people2;

console.log(divite1);
console.log(divite2);
