//Iさんはお店で商品を管理するために型番を合わせて覚えることにしました。
//商品1の型番はAAAで商品2の型番はBBBです。結合すると何という名前になるでしょうか？

var Model_number1 = 'AAA';
var Model_number2 = 'BBB';
var macth         = Model_number1 + Model_number2;

console.log(macth);

//Jさんは会社の同じような名前の部署があるので分かりやすい様に頭文字を覚えることにしました。
//部署1はAABで部署2はBAAです。それぞれ何という頭文字になるでしょうか？

var name1 = 'AAB';
var name2 = 'BAA';

console.log(name1.substring('0','1'));
console.log(name2.substring('0','1'));

//Kさんはよく食べに行く飲食店と新たに出来た飲食店の名前が紛らわしいので比べて覚えることにしました。
//飲食店1の名前はCCCで飲食店2はCBCです。2文字目まで表示するとそれぞれ何と表示されるでしょうか？

var Restaurant1 ='CCC';
var Restaurant2 ='CBC';

console.log(Restaurant1.substring('0','2'));
console.log(Restaurant2.substring('0','2'));

