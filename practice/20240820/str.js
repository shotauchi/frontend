//Iさんは最寄りの駅の名前が新○○駅と旧○○駅と似ているのでまとめて覚えることにしました。
//結合すると何という名前になるでしょうか？

var name1 = '新○○駅';
var name2 = '旧○○駅';
var macth = name1 + name2;

console.log(macth);

//Jさんは友達の住所の番地がもう一人の友達の番地と頭文字が同じなので2文字目まで記載して確認することにしました。
//友達1は11-2、友達2は12-1です。2文字目まで表示するとそれぞれ何になるでしょうか？

var street_address1 = '11-2';
var street_address2 = '12-1';

console.log(street_address1.substring('0','2'));
console.log(street_address2.substring('0','2'));