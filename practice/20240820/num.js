//Aさんはお店で500円の総菜と700円の弁当と300円のサラダをそれぞれ購入しました。
//Aさんは合計でいくら購入したでしょうか？

var Side_dish = 500;
var bento     = 700;
var salad     = 300;
var sum       = Side_dish + bento + salad;

console.log(sum);

//Bさんはお店で400円の花と600円の花とプランター500円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var flower1 = 400;
var flower2 = 600;
var plant   = 500;
var sum2    = flower1 + flower2 + plant;

console.log(sum2);

//Cさんは所持金5000円で工具用品を買いました。ドライバーセット1200円、錆取りスプレー缶600円、固定用ボルト500円を購入しました。
//Cさんは何円使ったでしょうか？

var money           = 5000;
var screwdriver_set = 1200;
var anti_rust_spray =  600;
var bort            =  500;
var pull            = money - (screwdriver_set + anti_rust_spray + bort);

console.log(pull);

//Dさんは所持金10000円でパソコン周辺機器を購入しました。マウス2000円、パソコンスタンド3800円、マウスパッド1200円それぞれ購入しました。
//Dさんは何円使ったでしょうか？

var money2 　　　　= 10000;
var mouse          =  2000;
var competer_stand =  3800;
var mousepat       =  1200;
var pull2          = money2 - (mouse + competer_stand + mousepat);

console.log(pull2);

//Eさんは1箱24本入りのコーラを2箱と1箱22本入りのお茶を4箱買いました。。
//それぞれいくつずつになるでしょうか？

var cora = 24 * 2;
var tea  = 22 * 4;

console.log(cora);
console.log(tea);

//Fさんは1個160円のゼリーを6個と1個140円のゼリーを8個購入しました。
//それぞれ何円ずつ購入したでしょうか？

var jelly1 = 160 * 6;
var jelly2 = 140 * 8;

console.log(jelly1);
console.log(jelly2);

//Gさんは1パック50個入りのチョコレートを2つと1パック48個入りのチョコレートを3つ購入して7人で分ける事にしました。
//それぞれいくつずつ余るでしょうか？

var chocolate1 = 50 * 2;
var chocolate2 = 48 * 3;
var people     =      7;
var reminder1  = chocolate1 % people;
var reminder2  = chocolate2 % people;

console.log(reminder1);
console.log(reminder2);

//Hさんは1トレー30個入ったデニッシュパンを2つと1トレー20個入ったフランスパンを3つをそれぞれお客さんが20人ずつ購入しました。
//それぞれいくつずつになるでしょうか？

var danish_bread = 30 * 2;
var french_bread = 20 * 3;
var people2      =     20;
var divite11     = danish_bread / people2;
var divite12     = french_bread / people2;

console.log(divite11);
console.log(divite12);
