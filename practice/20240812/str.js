//Iさんは今まで使っていたノートと新たに使うノートの名前がわからないので最初に2文字をそれぞれ覚えることにしました。
//ノート1はABBでノート2はAABです。そうすると何と何が表示されるでしょうか？

var name1 = 'ABB';
var name2 = 'AAB';

console.log(name1.substring('0','2'));
console.log(name2.substring('0','2'));

//Jさんは英語と数学の宿題のどちらを先に取り組もうか考えました。
//最初は英語から始めるつもりでしたが数学の方が解きやすかったので数学から始めました。
//その場合どちらが正しいでしょうか？

var homewark = 'Jさんは英語の宿題をする';

console.log(homewark);

var change = homewark.replace('英語','数学');

console.log(change);

//Kさんはペン1とペン2のどちらを購入しようか考えていました。
//Kさんはペン1を購入するつもりでしたが売り切れていたためペン2を購入しました。結果はどちらのペンになるでしょうか？

var pen = 'Kさんはペン1を購入する';

console.log(pen);

var change2 = pen.replace('ペン1','ペン2');

console.log(change2);
