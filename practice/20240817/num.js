//Aさんはウォーキングをする為にウェアやシューズを買いに行きました。購入したのは、ウェア6000円、シューズ3000円です。
//Aさんは合計でいくら購入したでしょうか？

var wear  = 6000;
var shose = 3000;
var sum   = wear + shose;

console.log(sum);

//Bさんは食器類が足りなくなったのでお店に買いに行きました。買ったのは、プレート小300円、プレート大700円、カレー皿500円をそれぞれ購入しました。
//Bさんは合計でいくら購入したでしょうか？

var plate_small = 300;
var plate_big   = 700;
var curry_plate = 500;
var sum2        = plate_small + plate_big + curry_plate;

console.log(sum2);

//Cさんは園芸をするためにホームセンターへ行きました。そこで園芸用ポッド600円、花500円、栄養剤800円をそれぞれ購入しました。
//Cさんは3000円持ってきていましたが何円使ったでしょうか？

var gardening_pods         =  600;
var flower                 =  500;
var nutritional_supplement =  800;
var money                  = 3000;
var pull                   = money - (gardening_pods + flower + nutritional_supplement);

console.log(pull);

//Dさんは友達と一緒にレストランへ行きました。Dさんは1600円の料理と600円のデザートを食べ、友達は1800円の料理と400円のデザートを食べました。
//Dさんと友達はそれぞれ5000円ずつ持ってきていましたが何円使ったでしょうか？

var cooking1 = 1600;
var cooking2 = 1800;
var dessert1 =  600;
var dessert2 =  400;
var money_D  = 5000;
var money_F  = 5000;
var D_san    = money_D - (cooking1 + dessert1);
var friend   = money_F - (cooking2 + dessert2);

console.log(D_san);
console.log(friend);

//Eさんは280円のフルーツタルトを5個、300円のティラミスを8個、240円のプリンを6個それぞれ購入しました。
//Eさんは３つで何円分購入したでしょうか？

var fruit_tart = 280 * 5;
var Tiramisu   = 300 * 8;
var pudding    = 240 * 6;

console.log(fruit_tart);
console.log(Tiramisu);
console.log(pudding);

//Fさんは薪ストーブのための薪を1束8個入りで700円で12月に10個購入しました。その次の1月は8個、その次の2月は12個購入しました。
//Fさんは3か月間それぞれで何円ずつの薪を購入したでしょうか？

var firewood_12 = 700 * 10;
var firewood_1  = 700 *  8;
var firewood_2  = 700 * 12;

console.log(firewood_12);
console.log(firewood_1);
console.log(firewood_2);

//Gさんは50000円のギフト券と30000円のギフト券を貰ったので家族6人で分ける事にしました。
//ギフト券はそれぞれいくらずつ余るでしょうか？

var gift_certificate1 = 50000;
var gift_certificate2 = 20000;
var family            =     6;
var remainder1        = gift_certificate1 % family;
var remainder2        = gift_certificate2 % family;

console.log(remainder1);
console.log(remainder2);

//Hさんは1袋20個入りのドリップコーヒーを3つと1袋40個入りのドリップコーヒーを2つ購入し、40人の社員に分ける事にしました。
//それぞれいくつずつ分けられるでしょうか？

var drip_coffee1 = 20 * 3;
var drip_coffee2 = 40 * 2;
var employee     =     40;
var divite1      = dessert1 / employee;
var divite2      = dessert2 / employee;

console.log(divite1);
console.log(divite2);
