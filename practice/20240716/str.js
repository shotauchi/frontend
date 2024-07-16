//Fさんはキャンプする為にキャンプ地１に宿泊するのかキャンプ地2に宿泊するのか検討しています。
//Fさんはキャンプ地1に宿泊しようと思いましたが、予定上キャンプ地2へ行くことにしました。
//この場合Fさんはどちらのキャンプ場に宿泊するのでしょうか？

var camp = 'Fさんはキャンプ場1に宿泊する';

console.log(camp);

var chage   = camp.replace('キャンプ場1','キャンプ場2');
var boolean = camp != chage;

console.log(chage);
console.log(boolean);
