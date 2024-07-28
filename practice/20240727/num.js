//Aさんは友達と一緒に遊園地へ遊びに行きました。Aさんは交通費が3000円、入場チケット代が5000円、飲食代が1800円、お土産代が1000円でした。
//友達は交通費が3600円、入場チケット代が5000円、飲食代が1600円、お土産代が1400円でした。
//Aさんと友達は合計でいくら使ったでしょうか？

var A_san  = 3000 + 5000 + 1800 + 1000;
var friend = 3600 + 5000 + 1600 + 1400;
var sum    = A_san + friend;

console.log(sum);

//Bさんはホームセンターでパーティション5000円、枕1000円、布団8000円を購入しました。
//Bさんは16000円持ってきていました。購入金額は所持金で足りるでしょうか、それとも足りなかったでしょうか？

var money     = 16000;
var partition =  5000;
var pellow    =  1000;
var futon     =  8000;
var pull      = money - (partition + pellow + futon);
var boolean   = money >= pull;

console.log(pull);
console.log(boolean);

//Cさんは中華レストランで働いていました。その日はラーメン1200円が36食と炒飯900円が28食、餃子定食1050円が40食売れました。
//この日のノルマはラーメンが30食、炒飯は32食、餃子定食が36食でした。それぞれ目標売上を達成出来たでしょうか？

var ramen          = 1200 * 36;
var Fried_Rice     =  900 * 28;
var Gyoza_set_meal = 1050 * 40;
var the_goal1      = 30;
var the_goal2      = 32;
var the_goal3      = 36;
var boolean_1      = 36 >= the_goal1;
var boolean_2      = 28 <= the_goal2;
var boolean_3      = 40 == the_goal3;

console.log(boolean_1);
console.log(boolean_2);
console.log(boolean_3);

//Dさんはチラシを配るアルバイトをしていました。この日は120枚のチラシを75人に配ることが出来ました。目標としては1日で60枚配る予定です。
//この場合残りは目標を達成出来たでしょうか？

var flyer     = 120;
var people    =  75
var the_goal4 =  60;
var rest      = flyer % people;
var boolean_4 = rest == the_goal4;

console.log(rest);
console.log(boolean_4);

//Eさんはお年玉でもらった総額30000円を月にいくらまでなら1年もつか計算することにしました。
//その場合には何円ずつ分けられるでしょうか？

var New_Years_gift = 30000;
var year           = 12;
var divide          = New_Years_gift / year;

console.log(divide);


