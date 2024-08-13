//Iさん今度遊びに行く友達のアパートの部屋番号を確認することにしました。友達の部屋はCCCで隣はCBCです。
//なので頭文字2文字目まで確認するとそれぞれ何と表示されるでしょうか？

var room1 = 'CCC';
var room2 = 'CBC';

console.log(room1.substring('0','2'));
console.log(room2.substring('0','2'));

//Jさんは暑かったのでアイスクリームかプリンを食べようと考えていました。最初はプリンを食べようと買いに行きましたが売り切れていたためアイスクリームを購入しました。
//最終的にJさんはどちらを購入したでしょうか？

var eat = 'Jさんはプリンを食べる';

console.log(eat);

var change = eat.replace('プリン','アイスクリーム');

console.log(change);

//Kさんは地元の公園が新旧で同じ名前に統一されるのでまとめて覚えるようにしました。
//旧公園の名前はABCで新公園の名前はCBAです。結合すると何という名前になるでしょうか？

var park1 = 'ABC';
var park2 = 'CBA';
var macth = park1 + park2;

console.log(macth);
