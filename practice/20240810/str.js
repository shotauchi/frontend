//Kさんは今度引っ越す予定の物件1のAAAと物件2のBBBの頭文字を覚える事にしました。
//物件1,2の頭文字を一文字ずつ取ると何という文字になるでしょうか？

var property1 = 'AAA';
var property2 = 'BBB';

console.log(property1.substring(0,1));
console.log(property2.substring(0,1));

//Lさんは購入する教科書1を買うために本屋さんに行きました。ところが書店に行ってみると参考書1が無かったので急遽参考書2を買いました。
//Lさんは結果的にどちらの参考書を購入しましたか？

var buy = 'Lさんは参考書1を買う';

console.log(buy);

var different = buy.replace('参考書1','参考書2');

console.log(different);

