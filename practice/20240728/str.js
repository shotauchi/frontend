//Fさんはカレーを食べようかハヤシライスを食べようか考えていました。最初はハヤシライスを食べようと思っていましたがお店が閉まっていたのでカレーを食べることにしました。
//Fさんは最終的にカレーかハヤシライスかどちらを食べたでしょうか？

var eat = 'Fさんはハヤシライスを食べる';

console.log(eat);

var change  = eat.replace('ハヤシライス','カレー');
var boolean = eat == change;

console.log(change);
console.log(boolean);

