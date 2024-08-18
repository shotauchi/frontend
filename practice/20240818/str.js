//Iさんは仕事で商品のプレゼンをするために2つの似た名前の商品をまとめて覚えることにしました。
//商品1はDDDで商品2はDDDDです。2つを結合すると何という名前になるでしょうか？

var name1 =  'DDD';
var name2 = 'DDDD';
var macth = name1 + name2;

console.log(macth);

//JさんはSNSで友達の中に似た名前のユーザーがいたので分かりやすい様に文字数で表示することにしました。
//ユーザー1はSSSさんとSSBSさんです。3文字目まで表示するとどうなるでしょうか？

var user1 =  'SSS';
var user2 = 'SSDS';

console.log(user1.substring('0','3'));
console.log(user2.substring('0','3'));

//Kさんはテイクアウトメニューを見てセット1かセット2のどちらにするか迷いました。
//ですが注文時にセット2を買う予定でしたが売り切れていたのでセット1をテイクアウトしました。
//Kさんは最終的にどちらの方を注文したでしょうか？

var takeout = 'Kさんはセット2をテイクアウトする';

console.log(takeout);

var change = takeout.replace('セット2','セット1');

console.log(change);
