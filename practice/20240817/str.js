//Iさんは遊びに行く市町村の名前が隣の市町村と似ているので分かりやすい様に2つで覚えることにしました。
//市町村1はEEで市町村2はEFです。この二つを結合すると何という名前になるでしょうか？

var Municipality1 = 'EE';
var Municipality2 = 'EF';
var macth         = Municipality1 + Municipality2;

console.log(macth);

//Jさんは2つの英単語を覚えるのに分かりやすい様に頭文字が同じなので3文字目まで表示する事にしました。
//単語1はappleで単語2はapricotです。それぞれ表示するとどうなるでしょうか？

var word1 =   'apple';
var word2 = 'apricot';

console.log(word1.substring('0','3'));
console.log(word2.substring('0','3'));

//Kさんはゲーム1を買おうかゲーム2を買おうか考えていました。最初はゲーム1を買う予定でしたが売り切れていたのでゲーム2を買うことにしました。
//Kさんは最終的にどちらのゲームを買いましたか？

var game = 'Kさんはゲーム1を買う';

console.log(game);

var change = game.replace('ゲーム1','ゲーム2');

console.log(change);
