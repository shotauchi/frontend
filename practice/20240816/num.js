//Aさんはインテリア用品を購入するためにお店に行きました。買ったのは、収納ラック3000円、時計1800円、パソコンスタンド2600円を購入しました。
//Aさんは合計でいくら購入したでしょうか？

var storage_rack   = 3000;
var wacth          = 1800;
var computer_stand = 2600;
var sum            = storage_rack + wacth ; computer_stand;

console.log(sum);

//Bさんはパズルを買うためにお店に行きました。3600円のパズル、2000円のパズル、1400円のパズルを購入しました。
//Bさんは合計でいくら購入したでしょうか？

var puzzle1 = 3600;
var puzzle2 = 2000;
var puzzle3 = 1400;
var sum2    = puzzle1 + puzzle2 + puzzle3;

console.log(sum2);

//Cさんは所持金の8000円で買い物をしました。買ったのは、レトルト食品類1400円、調味料類800円、肉類1200円を購入しました。
//Cさんは何円使ったでしょうか？

var money       = 8000;
var retort_food = 1400;
var seasoning   =  800;
var meet        = 1200;
var pull        = money - (retort_food + seasoning + meet);

console.log(pull);

//Dさんは所持金5000円で博物館とプラネタリウムに行きました。博物館では入館料2000円、お土産1400円、プラネタリウムでは入場料600円でした。
//Dさんは何円使ったでしょうか？

var Admission_fee = 2000;
var souvenir      = 1400;
var planetarium   =  600;
var money2        = 5000;
var pull2         = money2 - (Admission_fee + souvenir + planetarium);

console.log(pull2);

//Eさんは生活費を2か月まとめて払うことにしました。家賃50000円、光熱費12000円です。それぞれ何円かかるでしょうか？

var rent             = 50000 * 2;
var Utility_expenses = 12000 * 2;

console.log(rent);
console.log(Utility_expenses);

//Fさんは3枚のカードの会員の年会費をはらうことにしました。カード1は月300円、カード2は月に500円、カード3は月に800円かかります。
//それぞれ12ヶ月で何円ずつの年会費になるでしょうか？

var card1 = 300 * 12;
var card2 = 500 * 12;
var card3 = 800 * 12;

console.log(card1);
console.log(card2);
console.log(card3);

//Gさんは1パック30枚入りのビスケットと1パック40枚入りのクッキー、1パック25枚入りのフロランタンをそれぞれ購入し7人で分ける事にしました。
//それぞれ余りはいくつずつになるでしょうか？

var biscuit    = 40;
var cookie     = 30;
var florentin  = 25;
var people     =  7;
var remainder1 = biscuit   % people;
var remainder2 = cookie    % people;
var remainder3 = florentin % people;

console.log(remainder1);
console.log(remainder2);
console.log(remainder3);

//Hさんはトランプゲームをする為に50枚のカードを5人に配る事にしました。
//Iさんは違うトランプゲームをする為に同じく50枚のカードを6人に配りました。それぞれ何枚ずつ配れるでしょうか？

var playing_cards =  50;
var people2        =  5;
var people3        =  6;
var H_san        = playing_cards / people2;
var I_san        = playing_cards / people3;

console.log(H_san);
console.log(I_san);
