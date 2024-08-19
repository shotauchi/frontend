//Aさんはホームセンターでガムテープ160円、フローリング除菌シート240円、バスマット掃除用具類500円をそれぞれ購入しました。
//Aさんは合計でいくら購入したでしょうか？

var duct_tape       = 160;
var flooring_sheets = 240;
var cleaning_tools  = 500;
var sum             = duct_tape + flooring_sheets + cleaning_tools;

console.log(sum);

//Bさんはお店で寝具を購入しました。マットレス8000円、枕1200円、布団カバー2800円、シーツ1800円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var mattress    = 8000;
var pillow      = 1200;
var duvet_cover = 2800;
var sheets      = 1800;
var sum2        = mattress + pillow + duvet_cover + sheets;

console.log(sum2);

//Cさんはお店3件でお楽しみ袋をそれぞれ購入しました。買ったのは、お店1で1800円、お店2で2600円、お店3で2000円です。
//Cさんは7000円持ってきていましたが何円使ったでしょうか？

var store1 = 1800;
var store2 = 2600;
var store3 = 2000;
var money  = 7000;
var pull   = money - (store1 + store2 + store3);

console.log(pull);

//Dさんは山登りをする為にお店に行きました。登山用シューズ4600円、食料類1800円、リュックサック6000円を購入しました。
//Dさんは15000円持ってきていましたが何円使ったでしょうか？

var climbing_shoes =  4600;
var eat            =  1800;
var rucksack       =  6000;
var money2         = 15000;
var pull2          = money2 - (climbing_shoes + eat + rucksack);

console.log(pull2);

//Eさんは業務用のおかず1パック30食入りを2つ、1パック26食入りを3つ、1箱20食入りの缶ずめを2つそれぞれ購入しました。
//それぞれいくつずつ購入したでしょうか？

var side_dish1  = 30 * 2;
var side_dish2  = 26 * 3;
var canned_food = 20 * 2;

console.log(side_dish1);
console.log(side_dish2);
console.log(canned_food);

//Fさんは1個180円の消臭剤を6個と1個160円の消臭剤を8個購入しました。
//Fさんはそれぞれ何円購入したでしょうか？

var deodorant1 = 180 * 6;
var deodorant2 = 160 * 8;

console.log(deodorant1);
console.log(deodorant2);

//Gさんは1箱12個入りのケーキを3つ、1箱14個入りのケーキを2つを5人で分ける事にしました。
//それぞれいくつずつ余るでしょうか？

var cake1  = 12 * 3;
var cake2  = 14 * 2;
var people =      5;
var remainder1 = cake1 % people;
var remainder2 = cake2 % people;

console.log(remainder1);
console.log(remainder2);

//Hさんは食パンを40個とサンドイッチ30個をそれぞれ10人と5人で分ける事にしました。
//それぞれいくつずつ分けられるでしょうか？

var bread    = 40;
var sandwich = 30;
var people2   = 10;
var people3   =  5;
var divite1   = bread / people2;
var divite2   = bread / people3;
var divite3   = sandwich / people2;
var divite4   = sandwich / people3;

console.log(divite1);
console.log(divite2);
console.log(divite3);
console.log(divite4);
