//Aさんはお店で商品のセット販売をいくつか購入することにしました。先ず、商品１は5000円、商品２は7600円、商品３は3200円で2セット購入することにしました。
//Aさんは合計でいくら購入したでしょうか？

var merchandise_1 = 5000;
var merchandise_2 = 7600;
var merchandise_3 = 3200 * 2;
var sum           = merchandise_1 + merchandise_2 + merchandise_3;

console.log(sum);

//Bさんは予算10000円で美容室に行きました。カットが3000円、シャンプーが800円、パーマが2800円かかりました。
//Bさんはいくら使ったでしょうか？

var wallet  = 10000;
var cut     =  3000;
var shampoo =   800;
var perm    =  2800;
var use     = wallet - (cut + shampoo + perm);

console.log(use);

//Cさんは友達と一緒に居酒屋に行きました。先ず、Cさんは1杯500円のビールを2杯と1000円のお通しとおつまみセット1600円を注文しました。
//友達は1杯560円のチューハイを3杯と1000円のお通しと1皿500円の唐揚げを1つ注文しました。それぞれいくら注文したでしょうか？

var Beer          = 500 * 2;
var appetizer     = 1000;
var snack         = 1600;
var chuhai        = 560 * 3;
var Fried_Chicken = 500;
var C_san         = Beer + appetizer + snack;
var friend        = chuhai + appetizer +Fried_Chicken;

console.log(C_san);
console.log(friend);

//Dさんは12個のカレーパンと16個のクロワッサンを7人で分ける事にしました。
//それぞれいくつか余るでしょうか？

var Curry_bread = 12;
var Croissant   = 16;
var people      = 7;
var divide_1    = Curry_bread % people;
var divide_2    = Croissant % people;

console.log(divide_1);
console.log(divide_2);

//Eさんは1箱あたりホチキス止めをした資料１が48個、資料２が24個あります。それを社員12人に配らなくてはいけません。
//それぞれいくつ分けられるでしょうか？

var Document_1 = 48;
var Document_2 = 24;
var employee   = 12;
var divide_3   = Document_1 / employee;
var divide_4   = Document_2 / employee;

console.log(divide_3);
console.log(divide_4);

//Fさんはお店で2000円の商品と1000円の商品がありましたがFさんが購入したのは1000円の商品です。。
//次の結果があっているか出力してください下さい。

var merchandise_4 = 2000;
var merchandise_5 = 1000;
var merchandise_4 = 'false';
var merchandise_5 = 'true';

console.log(merchandise_4);
