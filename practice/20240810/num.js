//Aさんはデパートで1ホール2400円のケーキと1ホール1800円のケーキを買いに行きました。
//Aさんは合計でいくら購入したでしょうか？

var cake1 = 2400;
var cake2 = 1800;
var sum   = cake1 + cake2;

console.log(sum);

//Bさんはお店でビール1箱6本入り1080円、おつまみセット800円、ウィスキー1900円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var beer      = 1080;
var snack_set =  800;
var whiskey   = 1900;
var sum2      = beer + snack_set + whiskey;

console.log(sum2);

//Cさんは買い物でたまったポイントの一部をお支払いで使おうと思いました。Cさんが貯めていた総ポイントは5000ポイントで1ポイント1円です。
//その日Cさんが買ったのは、1200円の商品、700円の商品です。Cさんはポイント総額からいくら使ったでしょうか？

var point        = 5000;
var merchandise1 = 1200;
var merchandise2 =  700;
var pull         = point - (merchandise1 + merchandise2);

console.log(pull);


//Dさんはリサイクルショップで1600円の鍋、2500円の鉄鍋、1000円のフライパンを購入しました。
//Dさんは7200円持ってきていましたが何円使ったでしょうか？

var pot        = 1600;
var iron_pot   = 2500;
var frying_pan = 1000;
var money      = 7200;
var pull2      = money - (pot + iron_pot + frying_pan);

console.log(pull2);


//Eさんはお店で1個500円のお弁当と1個300円のデザートを家族に5個ずつ購入しました。
//Eさんはそれぞれいくつ購入しましたか？

var bento   =  500;
var dessert =  300;
var family  =    5;
var pieces1 = bento *   family;
var pieces2 = dessert * family;

console.log(pieces1);
console.log(pieces2);


//Fさんは遊びに行くためにローカル線片道860円と新幹線片道18000円を帰りの分も含めてそれぞれ2枚ずつ購入しました。
//Fさんはそれぞれ何円分購入したでしょうか？

var local_line   =   860;
var bullet_train = 18000;
var round_trip   =     2;
var yen1         = local_line   * round_trip;
var yen2         = bullet_train * round_trip;

console.log(yen1);
console.log(yen2);


//Gさんは1箱24本入りのコーラと1箱18本入りのお茶を5人に配る事にしました。
//そうするといくつずつ余るでしょうか？

var cora      = 24;
var green_tea = 18;
var people    =  5;
var surplus1  = cora      % people;
var surplus2  = green_tea % people;

console.log(surplus1);
console.log(surplus2);


//Hさんは会社の同僚にお土産の羊羹1箱10切を3個とどら焼き1袋16個入りを2個買いました。同僚は全員で19人います。
//全員に1つずつ配るといくつずつ余るでしょうか？

var Yokan      = 10 * 3;
var Dorayaki   = 16 * 2;
var colleague  =     19;
var remainder1 = Yokan 　 % colleague;
var remainder2 = Dorayaki % colleague;

console.log(remainder1);
console.log(remainder2);


//Iさんは企業イベントの係を任されていました。そのイベントでは、就活の人に会社のことを知ってもらうためパンフレットとメモ帳が入った袋を配る必要がありました。
//Iさんは合計で160袋用意していましたが、1日で来たのは合計で80人でした。残りはいくつでしょうか？

var bag      = 160;
var people2  =   8;
var divite  = bag / people2;

console.log(divite);


//Jさんは1パック40個入りのお菓子を2つと1パック60個入りのお菓子を親戚20人で分ける事にしました。
//親戚にはいくつずつ分けられるでしょうか？

var sweets1 = 40 *2;
var sweets2 =    60;
var relatives =  20;
var divite1   = sweets1 / relatives;
var divite2   = sweets2 / relatives;

console.log(divite1);
console.log(divite2);
