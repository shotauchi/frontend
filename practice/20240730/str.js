//Gさんは野球をしようかサッカーをしようか迷っています。最初はサッカーをする予定でしたが結果的に野球をすることにしました。
//最終的にはどちらをする事にしたでしょうか？

var play = 'Gさんはサッカーをする';

console.log(play);

var change  = play.replace('サッカー','野球');
var boolean = play == change;

console.log(change);
console.log(boolean);
