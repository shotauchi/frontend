//Eさんは喫茶店１に行こうか喫茶店2に行こうか考えていました。結果的に喫茶店2が閉まっていたので喫茶店１に行くことにしました。
//この場合Eさんはどちらの喫茶店に行ったでしょうか？

var coffee_shop = 'Eさんは喫茶店2に行く';

console.log(coffee_shop);

var change  = coffee_shop.replace('喫茶店2','喫茶店1');
var boolean = coffee_shop != change;

console.log(change);
console.log(boolean);

