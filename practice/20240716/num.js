//Aさんは日用品の買い物に行きました。先ず、ストア1で食料品を3000円と調味料を800円、ティシュやトイレットペーパー類を1200円購入しました。
//次にストア2では食料品を1000円、灯油を3600円分購入しました。Aさんはストア1とストア2で合計でいくら購入したでしょうか？

var store_1 = 3000 + 800 + 1200;
var store_2 = 1000 + 3600;
var sum     = store_1 + store_2;

console.log(sum);

//Bさんはショッピングモールへ買い物に行きました。そこでBさんは店舗１で4500円のシューズを買い、店舗２では6000円のバックを購入しました。
//その後に店舗３で洋服を5000円分購入しました。Bさんは元々20000円の持って来ていました。いくら分使ったでしょうか？

var shoes   = 4500;
var bag     = 6000;
var clothes = 5000;
var wallet  = 20000;
var use     = wallet - (shoes + bag + clothes);

console.log(use);

//Cさんはケーキ屋で働いていました。その日はショートケーキのホール2400円が12個売れました。
//チョコレートケーキのホールは2600円で14個売れました。。
//Cさんのお店ではどちらの方が多く売ることを達成できたでしょうか？

var Shortcake       = 2400 * 12;
var Chocolate_cake  = 2600 * 14;
var boolean         = Shortcake <= Chocolate_cake;

console.log(boolean);
console.log(typeof boolean);

//Dさんは友達と3人で一緒にピザを食べるために1ホール10カットのLサイズのピザと1ホール8カットのMサイズのピザをそれぞれ一つずつ注文しました。
//その場合いくつずつ余るでしょうか？

var pizza_L = 10;
var pizza_M =  8;
var friend =  3;
var remainder_1 = pizza_L % friend;
var remainder_2 = pizza_M % friend;

console.log(remainder_1);
console.log(remainder_2);

//Eさんはひと月あたりに使用したおこずかいを計算することにしました。
//この月は友達との遊びで11000円、ゲーム代に5000円、飲食代が4000円使っていました。
//Eさんはひと月当たりの上限額を18000円までにしています。
//Eさんの貯めていたおこずかいは全部で80000円ありますが、この場合上限額を超えているでしょうかそれとも上限以内でしょうかでしょうか？


var allowance   = 80000;
var friends     = 11000;
var game        =  5000;
var eats        =  4000;
var Pull        = allowance / (friends + game + eats);
var upper_limit = 18000;
var boolean     = Pull >= upper_limit;

console.log(boolean);
console.log(typeof boolean);









