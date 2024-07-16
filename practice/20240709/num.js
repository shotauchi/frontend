//Aさんはスーパー1でお米3000円分と野菜1000円分を購入し、スーパー2でお肉を1500円分と魚を800円分購入しました。
//Aさんは合計でいくら購入したでしょうか？

var Supermarket_1 = 3000 + 1000;
var Supermarket_2 = 1500 +  800;
var sum           = Supermarket_1 + Supermarket_2;

console.log(sum);

//Bさんは予算35000円以内で家電屋さんに行き買い物をすることにしました。
//Bさんが購入したのは、掃除機4800円、洗濯機18000円、扇風機5000円です。何円使ったでしょうか？

var budget          = 35000;
var Vacuum_cleaner  =  4800;
var washing_machine = 18000;
var Fan             =  5000;
var used            = budget - (Vacuum_cleaner + washing_machine + Fan);

console.log(used);

//Cさんは中華レストランで働いていました。その日は1皿850円の炒飯が20食、1杯1000円のラーメンが30食売れました。
//それぞれいくら売れたでしょう？

var Fried_Rice =  850 * 20;
var ramen      = 1000 * 30;

console.log(Fried_Rice);
console.log(ramen);

//Dさんはカットケーキを16個買って家族6人で分ける事にしました。
//カットケーキはいくつ余るでしょうか？

var cut_cake = 16;
var family   =  6;
var remainder = cut_cake % family;

console.log(remainder);

//Eさんは1パック18本入りのシャーペンをメンバー6人で分ける事にしました。
//その場合いくつずつに分けられるでしょうか？

var mechanical_pencil = 18;
var member            =  6;
var divide            = mechanical_pencil / member;

console.log(divide);

//Fさんは1000円の乗車券を購入しようと思い駅に行きました。ですがFさんは1500円の乗車券を買ってきてしまいました。
//この出力が正しいか正しくないか出力して下さい。

// var ticket_1 = 1000;
// var ticket_2 = 1500;
var ticket_1 = true;
var ticket_2 = false;

console.log(ticket_1);//true
console.log(typeof ticket_1);//true
console.log(ticket_2);//false
console.log(typeof ticket_2);//false

// 目的地まで電車で移動するのに１０００円分のチャージが必要です
// 現在 Fさんのsuica には９００円分チャージされています
// Fさんは目的地まで到着することができるでしょうか？
// 真偽値（true or false）で出力してみましょう

var charge  = 1000;// 必要な運賃
var suica   = 900;// 持っている金額
var boolean = charge <= suica;// 到着できるかどうか？ true or false

console.log(boolean);// 結果が自動的に出力される？
console.log(typeof boolean);

