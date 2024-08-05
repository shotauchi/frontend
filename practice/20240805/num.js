//Aさんはスーツを買いに行きました。購入したのは、ジャケット12000円、ズボンが8000円、ワイシャツが1800円購入しました。
//Aさんは合計でいくら購入したでしょうか？

var Jacket = 12000;
var pants  =  8000;
var shirt  =  1800;
var sum    = Jacket + pants + shirt;

console.log(sum);

//Bさんは家族にお弁当を買うためにお店に行きました。買ったのはお弁当1の800円とお弁当2の900円、お弁当3の750円を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var bento1 = 800;
var bento2 = 900;
var bento3 = 750;
var sum2   = bento1 + bento2 + bento3;

console.log(sum2);

//Cさんはクリーニング屋に服を持っていきました。持ってきた服はダウン3500円、スーツ4200円でした。
//Cさんは10000円持ってきていましたがクリーニングはいくらかかったでしょうか？

var money       =　10000;
var Down_jacket =   3500;
var suit        =   4200;
var pull        = money - (Down_jacket + suit);

console.log(pull);

//Dさんはアイスクリームが欲しくなったので買いに行きました。Dさんが買ったのは、アイス1の160円を5個、アイス2の140円を6個まとめて買いました。
//Dさんはアイス1とアイス2をそれぞれいくつ購入したでしょうか？

var icecream1 = 160 * 5;
var icecream2 = 140 * 6;

console.log(icecream1);
console.log(icecream2);

//Eさんは1箱18個入りのドーナツと1箱20個入りのドーナツをそれぞれ7人で分ける事にしました。
//その場合いくつずつ余るでしょうか？

var donut1     = 18;
var donut2     = 20;
var people     =  7;
var remainder1 = donut1 % people;
var remainder2 = donut2 % people;

console.log(remainder1);
console.log(remainder2);

//Fさんはイベントの企画をする会社で働いていました。そこではイベントに準備のため100人分の会場案内のしおりを用意しました。
//イベント当日は75人が参加して15人は参加しませんでした。いくつ分のしおりが残ったでしょうか？

var Bookmark          = 100;
var participant       =  75;
var Non_participation =  15;
var divite            = Bookmark / (participant - Non_participation);

console.log(divite);
