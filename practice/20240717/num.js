//Aさんはお米を買うためにスーパーへ行きました。お店1では10㎏あたり3900円で売られており、お店2では10kgあたり4200円でした。
//Aさんは4000円以内購入を考えているのでお店1に買いに行くことにしました。この場合のお米の値段は4000円以上ですか、以下ですか？

var money_1   = 5000;
var store_1 = 3900;
var store_2 = 4200;
var boolean = store_1 <= store_2;

console.log(boolean);
console.log(typeof boolean);

//Bさんは実家に帰省するために飛行機のチケットを購入しました。チケットは片道18000円でした。
//Bさんは往復でチケットを購入することにしました。その後家の最寄まではバスを使う必要がある為、往復で500円分購入しました。
//Bさんは45000円持ってきましたが何円使ったでしょうか？

var money_2  = 45000;
var airplane = 18000 + 18000;
var bus      = 250 + 250;
var money_2  = money_2 - (airplane + bus);

console.log(money_2);

//Cさんはお寿司屋さんで働いていました。その日は、2~3人前の7000円のパーティーサイズのお寿司が8個分オーダーが入り、4~5人前の9800円のパーティーサイズの寿司が5個注文がありました。
//オーダーはそれぞれいくつ注文があったでしょうか？

var servings_1 = 7000;
var servings_2 = 9800;
var people_1   = 8;
var people_2   = 5;
var sell_1     = servings_1 * people_1;
var sell_2     = servings_2 * people_2;

console.log(sell_1);
console.log(sell_2);

//Dさんはアップルパイの1ホール8カットとミニティラミス10個を購入しました。それを家族5人で分ける事にしました。
//アップルパイとミニティラミスはいくつずつに分けられるでしょうか？

var applepai = 8;
var Tiramisu = 9;
var family   = 5;
var divide_1 = applepai % family;
var divide_2 = applepai % family;

console.log(divide_1);
console.log(divide_2);

//Eさんは今日の献立の材料を購入するためにスーパーへ買い物に行きました。
//必要な材料はお肉300ｇを2パックとピーマン1パック120円を2パック、長ネギを1パック140円を３パック購入しました。
//Eさんは現金5000円を持っていましたが何円使ったでしょうか？

var meat         = 300 * 2;
var green_pepper = 120 * 2;
var green_onion  = 140 * 3;
var wallet       = 5000;
var use          = wallet / (meat + green_pepper + green_onion);//4

console.log(use);


