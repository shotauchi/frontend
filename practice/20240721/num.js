//Aさんは遊園地に遊びに行きました。先ず、交通費で3000円、入場チケット代6400円、お土産類2000円、飲食類1400円でした。
//Aさんは予定では予算を12000円以内で考えていましたが合計金額はいくらになるでしょうか？

var wallet                  = 12000;
var Transportation_expenses =  3000;
var ticket                  =  6400;
var souvenir                =  2000;
var eat                     =  1400;
var use                     = Transportation_expenses + ticket + souvenir + eat;
var boolean                 = wallet <= use;
console.log(use);
console.log(boolean);

//Bさんはバドミントンをする為にスポーツショップに階に行きました。最初にラケットが6800円、羽が1セット5個入りで500円、シューズが2800円でした。
//Bさんは予算15000円を持っていましたが金額は足りたでしょうか、それとも足りなかったでしょうか？

var money           = 15000;
var racket          =  6800;
var badminton_wings =   500;
var shose           =  2800;
var Pull            = money - (racket + badminton_wings + shose);
var boolean         = money >= Pull;

console.log(Pull);
console.log(boolean);

//Cさんはお菓子の詰め合わせを3種類購入しました。詰め合わせ１は1パック12個入りを5個、詰め合わせ2は1パック15個入り3個、詰め合わせ3は1パック10個入りを2個買いました。
//それぞれ合計でいくつになるでしょうか？

var Assortment_1 = 12 * 5;
var Assortment_2 = 10 * 3;
var Assortment_3 = 10 * 2;
var sum  = Assortment_1 + Assortment_2 + Assortment_3;


console.log(sum);


//Dさんは1箱36個入りの餃子を2箱買いました。それを家族6人で分ける事にしました。
//その場合いくつ余りが出るでしょうか？

var chinese_dumpling = 36 * 2;
var family           =  6;
var remainder        = chinese_dumpling % family;

console.log(remainder);

//Eさんは合計で10000円の買い物と5000円の買い物のレシートを確認しました。その中でレシート1では6000円分とレシート2は3000円分使ったことが分かりました。
//レシート1とレシート2ではそれぞれ残り何円になるでしょうか？

var remainder_1 = 10000 / 6000;
var remainder_2 = 5000 /  3000;

console.log(remainder_1);
console.log(remainder_2);

