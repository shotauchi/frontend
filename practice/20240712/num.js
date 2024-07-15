//Aさんは1か月の生活費を計算することにしました。食費が60000円、光熱費が9000円、水道代が6000円かかっていました。
//Aさんは合計でいくらになったでしょうか？

var eat           = 60000;
var Utility_costs = 9000;
var water_bill    = 6000;
var sum           = eat + Utility_costs + water_bill;

console.log(sum);

//Bさんは予算100000円でパソコンを購入することにしました。購入したのはデスクトップ本体が70000円、キーボードが7500円、マウスが3000円でした。
//Bさんはいくら使ったでしょうか？

var desktop_computer =  70000;
var keyboard         =   7500;
var mouse            =   3000;
var money            = 100000;
var budget           = money - (desktop_computer + keyboard + mouse);

console.log(budget);

//Cさんはホームセンターで働いていました。その日は1個7000円のチェアが5個、1個12000円のデスクが2個、1個3000円の照明が6個売れました。
//それぞれ合計でいくら売れたでしょうか？

var Chair =  7000 * 5;
var desk  = 12000 * 2;
var right =  3000 * 6;

console.log(Chair);
console.log(desk);
console.log(right);

//Dさんは1袋26枚入りのクッキー、1袋18枚入りのビスケット、1袋24枚入りのラングドシャを家族5人で分ける事にしました。
//その場合それぞれいくつ余るでしょうか？

var family      　 = 5;
var cookie         = 26 %  family;
var biscuit        = 18 %  family;
var langue_de_chat = 24 %  family;

console.log(cookie);
console.log(biscuit);
console.log(langue_de_chat);

//Eさんは1箱あたり30冊入りのノートと1箱あたり60枚入りのファイルを友達と3人で分ける事にしました。
//いくつずつに分けられるでしょうか？

var note   = 30;
var fail   = 60;
var friend = 3;
var divide_1 = note / friend;
var divide_2 = fail / friend;

console.log(divide_1);
console.log(divide_2);

//Fさんは１つ2000円のヘッドホンを2個購入しました。
//次の結果があっているか出力してください下さい。

var headphone = 2000 * 2;
var boolean_1 = 4000;
var boolean_1 = true;
var boolean_2 = 6000;;
var boolean_2 = false;

console.log(boolean_1);


