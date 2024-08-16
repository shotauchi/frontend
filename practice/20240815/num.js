//Aさんはドラッグストアで120円の絆創膏、シャンプー800円、リンス780円、石鹼400円を購入しました。
//Aさんは合計でいくら購入したでしょうか？

var bandage        = 120;
var shampoo 　　　 = 800;
var rinse          = 780;
var stone_porridge = 400;
var sum = bandage + shampoo + rinse + stone_porridge;

console.log(sum);

//BさんとCさんはレンタルサイクリング店へ行きました。そこでBさんは1日5000円、Cさんは1日4000円のレンタルを3日間しました。
//BさんとCさんは合計でいくらかかったでしょうか？

var cycling1 = 5000;
var cycling2 = 4000;
var B_san    = cycling1 + 5000 + 5000;
var C_san    = cycling2 + 4000 + 4000;

console.log(B_san);
console.log(C_san);

//Dさんは所持金5000円以内で雑貨屋さんで買い物をしました。買ったのは、300円の茶碗、400円のコップ、700円のプレートを購入しました。
//Dさんは何円分購入したでしょうか？

var money    = 5000;
var tea_bowl =  300;
var cup      =  400;
var plate    =  700;
var pull     = money - (tea_bowl + cup + plate);

//Eさんはジムに通っていてお店に買い物に行きました。買ったのは、プロテイン3000円、筋トレ器具類6000円、プロテインバー600円を購入しました。
//Eさんは11000円持ってきていましたが何円使ったでしょうか？

var protein                   =  3000;
var muscle_training_equipment =  6000;
var protein_var               =   600;
var money2                    = 11000;
var pull2                     = money2 - (protein + muscle_training_equipment + protein_var);

console.log(pull2);

//Fさんはコンビニで1個180円のホットスナックを2つと240円のコーヒーを2杯、320円のスイーツを3つ購入しました。
//Fさんはそれぞれ何円ずつ購入したでしょうか？

var hotsnack = 180 * 2;
var coffee   = 240 * 2;
var sweets   = 320 * 3;

console.log(hotsnack);
console.log(coffee);
console.log(sweets);

//Gさんは1箱1050円のカステラを2箱と1箱1150円の抹茶カステラを3箱購入しました。
//Gさんはそれぞれ何円ずつ購入したでしょうか？

var Castella        = 1050 * 2;
var Matcha_castella = 1150 * 3;

console.log(Castella);
console.log(Matcha_castella);

//Hさんは、1袋50枚入りのハガキと1袋46枚入りのハガキを9人に分ける事にしました。
//そうするといくつずつ余るでしょうか？

var postcard1 = 50;
var postcard2 = 46;
var people    =  9;
var remainder1 = postcard1 % people;
var remainder2 = postcard2 % people;

console.log(remainder1);
console.log(remainder2);

//Iさんは1箱60個入りのマーカーペンと1箱50個入りの暗記ペンとシートを2箱でそれを20人で分ける事にしました。
//そうするといくつずつ分けられるでしょうか？

var marker_pen                 =     60;
var memorization_pen_and_sheet = 50 * 2;
var people2                    =     20;
var divite1                    = marker_pen / people2;
var divite2                    = memorization_pen_and_sheet / people2;

console.log(divite1);
console.log(divite2);

