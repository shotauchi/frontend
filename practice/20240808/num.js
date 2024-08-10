//Aさんは3000円の商品券と5000円の商品券をもらいました。
//合計でいくら購入したでしょうか？

var Gift_certificates1 = 3000;
var Gift_certificates2 = 5000;
var sum                = Gift_certificates1 + Gift_certificates2;

console.log(sum);

//Bさんは1つ1000円の送り物と1つ1500円の贈り物をそれぞれ購入しました。
//合計でいくら購入したでしょうか？

var gift1 = 1000;
var gift2 = 1500;
var sum2  = gift1 + gift2;

console.log(sum2);

//Cさんはヘッドホンとオーディオを購入するためにお店に行きました。ヘッドホンが3600円、オーディオが8000円でした。
//Cさんは16000円持ってきていましたが何円使ったでしょうか？

var headphone =  3600;
var audio     =  8000;
var money     = 16000;
var pull      = money - (headphone + audio);

console.log(pull);

//Dさんはボーリングをしに行きました。入場料が1400円、シューズが800円、飲食代が1200円かかりました。
//Dさんは4000円持ってきていましたが何円使ったでしょうか？

var Admission_fee = 1400;
var shose         =  800;
var eat           = 1200;
var money2        = 4000;
var pull2         = money2 - (Admission_fee + shose + eat);

console.log(pull2);

//Eさんは1袋24個のグミを2つと1袋30個のガム3つを買いました。
//それぞれいくつ購入しましたか？

var gumi = 24 * 2;
var gum  = 30 * 3;

console.log(gumi);
console.log(gum);

//Fさんは1セット5本入りの鉛筆を4つと1セット3個入りの消しゴムを3つ購入しました。
//それぞれいくつ購入しましたか？

var pencil = 5 * 4;
var eraser = 3 * 3;

consol.log(pencil);
console.log(eraser);

//Gさんは20個のキーホルダーと25個の缶バッジを友達6人と分けることにしました。
//そうするといくつずつ余るでしょうか？

var key_ring      = 20;
var Button_Badges = 25;
var people        =  6;
var remainder1    = key_ring % people;
var remainder2    = Button_Badges % people;

console.log(remainder1);
console.log(remainder2);

//Hさんは紅茶35本とコーヒー33本を8人で分けることにしました。
//そうするといくつずつ余るでしょうか？

var tea        = 35;
var coffee     = 33;
var people2    = 8;
var remainder3 = tea % people2;
var remainder4 = coffee % people2;

console.log(remainder3);
console.log(remainder4);

//Iさんは1パック10本入りの団子と1パック15本入りの団子を5人で分ける事にしました。
//その場合いくつずつ分けられるでしょうか？

var dumpling1 = 10;
var dumpling2 = 15;
var people3   =  5;
var divite1   = dumpling1 / people3;
var divite2   = dumpling2 / people3;

console.log(divite1);
console.log(divite2);
