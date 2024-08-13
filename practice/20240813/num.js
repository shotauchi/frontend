//Aさんは家電屋さんに買い物に行きました。そこでハンドファン2000円、ドライヤー3200円、防水スピーカー3000円を購入しました。
//Aさんは合計でいくら購入したでしょうか？

var hand_fan           = 2000;
var dryer              = 3200;
var waterproof_speaker = 3000;
var sum                = hand_fan + dryer + waterproof_speaker;

console.log(sum);

//Bさんは雨具を御店に買いに行きました。そこでレインコート1800円、長靴2400円、傘1300円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var rain_coat = 1800;
var boots     = 2400;
var umbrella  = 1300;
var sum2      = rain_coat + boots + umbrella;

console.log(sum2);

//Cさんは業務スーパーに料理の食材を買いに行きました。買ったのは冷凍ミックスベジタブル500円、冷凍餃子600円、スープ缶ずめ550円です。
//Cさんは3400円持ってきていましたが何円使ったでしょうか？

var mixed_vegetables = 500;
var frozen_gyoza     = 600;
var soup             = 550;
var money            = 3400;
var pull             = money - (mixed_vegetables + frozen_gyoza + soup);

console.log(pull);

//Dさんは車検の為にディーラーへ行きました。かかった代金は、点検整備代50000円、タイヤ交換代4000円、コーティング代6000円でした。
//Dさんは100000円持ってきていましたが何円支払ったでしょうか？

var Maintenance      =  50000;
var tire_replacement =   4000;
var coating          =   6000;
var money2           = 100000;
var pull2            = money2 - (Maintenance + tire_replacement + coating);

console.log(pull2);

//Eさんは1つ160円のジュースを18本と1つ180円のジュースを14本購入しました。
//Eさんはそれぞれいくつ購入しましたか？

var juice1 = 160 * 18;
var juice2 = 180 * 14;

console.log(juice1);
console.log(juice2);

//Fさんは1袋240円のスナック菓子を20袋と1袋260円のスナック菓子を12個購入しました。
//それぞれ何円ずつ購入したでしょうか？

var snack1 = 240 * 20;
var snack2 = 260 * 12;

console.log(snack1);
console.log(snack2);

//Gさんは1パック10枚入りのフロランタンを3個と１パック12枚入りのクッキーを5個買い、9人で分けることにしました。
//それぞれいくつずつ余るでしょうか？

var florentine = 10 * 3;
var cookie     = 12 * 3;
var people     = 9;
var remainder1 = florentine % people;
var remainder2 = cookie % people;

//Hさんは兄弟2人に1つ500円のおもちゃを5個と1つ600円のおもちゃを3個購入しました。
//それぞれ何円ずつ購入したでしょうか金額を分けられるでしょうか？

var toy1    = 500 * 5;
var toy2    = 600 * 3;
var brother = 2;
var divite1  = toy1 / brother;
var divite2  = toy2 / brother;

console.log(divite1);
console.log(divite2);

