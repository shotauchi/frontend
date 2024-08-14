//Aさんは本屋さんで小説本900円、漫画650円、雑誌1400円をそれぞれ購入しました。
//Aさんは合計でいくら購入したでしょうか？

var novel    =  900;
var comics   =  650;
var magazine = 1400;
var sum      = novel + comics + magazine;

console.log(sum);

//Bさんはカタログギフトを買いに行きました。購入したのは、3000円、5000円、10000円のカタログギフトをそれぞれ2つずつ購入しました。
//Bさんは合計でいくら購入したでしょうか？

var catalog_gifts1 =   3000 + 3000;
var catalog_gifts2 =   5000 + 5000;
var catalog_gifts3 = 10000 + 10000;
var sum2           = catalog_gifts1 + catalog_gifts2 + catalog_gifts3;

console.log(sum2);

//Cさんは所持金15000円で日帰り旅行に行きました。そこで交通費6000円、食費が3000円、入場料が3200円かかりました。
//Cさんは何円使用したでしょうか？

var money                   = 15000;
var Transportation_expenses =  6000;
var eat                     =  3000;
var Admission_fee           =  3200;
var pull                    = money - (Transportation_expenses + eat + Admission_fee);

console.log(pull);

//Dさんはホームセンターでパーティション7000円、アクリル板3600円、アルコール消毒剤800円を2つそれぞれ購入しました。
//Dさんは所持金を20000円持ってきていましたが何円使ったでしょうか？

var partition            =  7000;
var acrylic_board        =  3600;
var alcohol_disinfectant =   800;
var money2               = 20000;
var pull2                = money2 - (partition + acrylic_board + alcohol_disinfectant);

console.log(pull2);

//Eさんは１つ400円のシュークリームを6個、１つ500円のクッキーシューを8個、1つ300円のティラミスを9個それぞれ購入しました。
//Eさんはそれぞれ何円ずつ購入したでしょうか？

var cream_puff  = 400 * 6;
var cookie_shoe = 500 * 8;
var Tiramisu    = 300 * 9;

console.log(cream_puff);
console.log(cookie_shoe);
console.log(Tiramisu);

//Fさんは1つ240円のヨーグルトを3個、1つ280円のヨーグルトを5個、1つ200円のヨーグルトを8個購入しました。
//Fさんはそれぞれ何円分購入したでしょうか？

var yogurt1 = 240 * 3;
var yogurt2 = 280 * 5;
var yogurt3 = 200 * 8;

console.log(yogurt1);
console.log(yogurt2);
console.log(yogurt3);

//Gさんは50個の手帳と52個のマーカーペン、56個の付箋を6人で分ける事にしました。
//余りはいくつずつになるでしょうか？

var pocket_book = 50;
var marker_pen  = 52;
var sticky_note = 56;
var people      =  6;
var remainder1  = pocket_book % people;
var remainder2  = marker_pen  % people;
var remainder3  = sticky_note % people;

console.log(remainder1);
console.log(remainder2);
console.log(remainder3);

//Hさんはお年玉の10000円と20000円を1日1000円で何日使えるか計算することにしました。
//すると何日分使えるでしょうか？

var New_Year_gift1 = 10000;
var New_Year_gift2 = 20000;
var day            =  1000;
var divite1        = New_Year_gift1 / day;
var divite2        = New_Year_gift2 / day;

console.log(divite1);
console.log(divite2);

