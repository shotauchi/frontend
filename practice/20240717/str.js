//Fさんは週末に釣りに行こうかプールに行こうか迷っていました。しかし時間的に釣りには行けなくなったのでプールに行くことにしました。
//この時Fさんはプールに行くことが出来たでしょうか、それともいけなかったでしょうか？

var fishing = 'Fさんは釣りに行く';

console.log(fishing);

var change  = fishing.replace('釣り','プール');
var boolean = fishing != change;

console.log(change);
console.log(boolean);
console.log(typeof boolean);


