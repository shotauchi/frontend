//Aさんはホームセンターで収納ボックス4000円、デスク8000円、照明3200円、チェア5000円を2席購入しました。
//Aさんは20000円を持ってきていますが、合計金額はいくらになり、金額は足りるでしょうか？

var money        =     20000;
var box          =      4000;
var desk         =      8000;
var illumination =      3200;
var Chair        =  5000 * 2;
var sum          = box + desk + illumination + Chair;
var boolean      = sum >= money;

console.log(sum);
console.log(boolean);

//Bさんは映画館に2本の作品を観に行きました。映画は2本とも2000円でドリンク200円×2杯とポップコーン300円×2個、パンフレット800円×2冊を購入しました。
//Bさんは10000円持ってきていましたが合計金額はいくらになり、金額は足りるでしょうか？

var money2   =    10000;
var movie    = 2000 * 2;
var drink    =  200 * 2;
var popcorn  =  300 * 2;
var Pamphlet =  800 * 2;
var sum2     = movie + drink + popcorn + Pamphlet;
var boolean  = sum2 <= money2;

console.log(sum2);
console.log(boolean);

//Cさんはショッピングモールへ出かけました。洋服屋でスウェット4600円とパーカー5000円と靴屋で3400円、雑貨屋で小物入れ500円、ティーポット1600円を購入しました。
//Cさんは18000円持ってきていましたが買ったものの金額はいくら使って足りたでしょうか？

var clothes_store = 4600 + 5000;
var Shoe_store    =        3400;
var General_store =  500 + 1600;
var money3        =       18000;
var pull          = money3 - (clothes_store + Shoe_store + General_store);
var boolean       = pull <= money3;

console.log(pull);
console.log(boolean);

//Dさんは居酒屋で働いていました。その日は唐揚げ500円が46個、焼き鳥600円が38個、チューハイ600円が50杯、ビール550円が60杯注文がありました。
//この日の売り上げはそれぞれいくらになったでしょうか？

var Fried_Chicken = 500 * 46;
var Yakitori      = 600 * 38;
var Chuhai        = 600 * 50;
var beer          = 550 * 60;

console.log(Fried_Chicken);
console.log(Yakitori);
console.log(Chuhai);
console.log(beer);

//Eさんは荷物の配達員をしていました。この日は100個の荷物を15件の配達ボックスに届ける要件と30件宅配をする必要があります。
//この場合Eさんはそれぞれいくつずつ余るでしょうか？

var luggage      = 100;
var delivery_box = 15;
var delivery     = 30;
var remainder1   = luggage % delivery_box;
var remainder2   = luggage % delivery;

console.log(remainder1);
console.log(remainder2);

//Fさんはテストの各教科の合計得点から平均を求めようと考えました。Fさんのクラスでは10人の5教科得点は国語が65点、数学が72点、理科が76点、社会が68点、英語が78点とFさんと同じでした。
//このテストの満点は500点です。平均点は何店になるでしょうか？

var national_language = 65;
var math              = 72;
var Science           = 76;
var society           = 68;
var english           = 78;
var Test_total        = 500;
var people            = 10;
var average_score     = (national_language + math + Science + society + english) / people;

console.log(average_score);

