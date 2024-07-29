//Fさんは山に遊びに行くか、海に遊びに行くか迷っていました。最初は山に行く予定でしたが結果的に海に行くことにしました。
//Fさんはが遊びに行ったのは海でしょうか、それとも山になったでしょうか？

var play = 'Fさんは山に遊びに行く';

console.log(play);

var change  = play.replace('山','海');
var boolean = play == change;

console.log(change);
console.log(boolean);


