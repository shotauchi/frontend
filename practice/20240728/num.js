//Aさんはショッピングモールで洋服を6000円、スニーカーを4600円、5400円のボストンバッグを購入しました。
//Aさんは18000円お金を持ってきていましたが使った購入金額は足りたでしょうか、それとも足りなかったでしょうか？

var clothes   =  6000;
var sneakers  =  4600;
var bostonbag =  5400;
var sum       = clothes + sneakers + bostonbag;
var money1     = 18000;
var boolean   = money1 >= sum;

console.log(sum);
console.log(boolean);

//Bさんはライブに行くことにしました。そこで参加チケット3000円、飲食代1600円、物販代2400円を購入しました。
//Bさんは8000円を持って来ていましたが使った金額は所持金を超えたでしょうか、それとも超えなかったでしょうか？

var ticket            = 3000;
var eat               = 1600;
var Merchandise_sales = 2400;
var money2            = 8000;
var use               = money2 - (ticket + eat + Merchandise_sales);
var boolean           = money2 >= use;

console.log(use);
console.log(boolean);

//Cさんは洋食屋で働いていました。その日はハンバーグ定食950円が24食、オムライス800円が18食、ステーキ定食1000円が20食売れました。
//それぞれいくつ売れたでしょうか？

var Hamburger_set_meal = 950 * 24;
var Omelette_rice      = 800 * 18;
var steak_set_meal     =1000 * 20;

console.log(Hamburger_set_meal);
console.log(Omelette_rice);
console.log(steak_set_meal);

//Dさんは1袋20本入りのボールペンを3袋購入しました。
//それをクラスメイト24人で分ける事にしました。その場合いくつずつ分けられるでしょうか？

var ballpoint_pen = 20 * 3;
var classmate     =     24;
var divide_1        = ballpoint_pen % classmate;

console.log(divide_1);


//Eさんはおこずかい5000円を10日間で一日当たり何円使えるか計算することにしました。
//その場合いくつずつ分けられるでしょうか？またその金額は500円以上になるでしょうか、それともならないでしょうか？

var allowance          = 5000;
var day                =   10;
var divide_2           = allowance / day;
var Daily_usage_amount = 500;
var boolean            = divide_2 == Daily_usage_amount;

console.log(divide_2);
console.log(boolean);

