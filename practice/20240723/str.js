//Fさんは目的地まで電車で行こうか自動車で行こう迷っていました。最初は電車で行こうと思いましたが駅からの目的地の立地が悪かったので自動車で行く計画にしました。
//この場合Ｆさんは目的地までどちらで向かったでしょうか？

var Destination = 'ｆさんは電車で行く';

console.log(Destination);

var change  = Destination.replace('電車','自動車');
var boolean = Destination != change;

console.log(change);
console.log(boolean);

