//Aさんは家電量販店へかいものに行きました。その日は6200円の家電1と4800円の家電2を購入しました。
//Aさんの合計購入金額はいくらになったでしょうか？

var home_appliances1 = 6200;
var home_appliances2 = 4800;
var sum1             = home_appliances1 + home_appliances2;

console.log(sum1);

//Bさんはプレゼントを買うためにおもちゃ屋に行きました。Bさんが購入したのは1600円のおもちゃと800円のおもちゃです。
//Bさんが買った購入金額はいくらになるでしょうか？

var toy1 = 1600;
var toy2 =  800;
var sum2 = toy1 + toy2;

console.log(sum2);

//Cさんはテニスをする為に買い物に行きました。Cさんが買ったのはラケット8000円、ボール500円、シューズ3600円を購入しました。
//Cさんは15000円持ってきていましたが購入金額はいくらに使ったでしょうか？

var racket   = 8000;
var ball     =  500;
var shoes    = 3600;
var money1   = 15000;
var pull     = money1 - (racket + ball + shoes);

console.log(pull);

//Dさんは定期券の追加購入をする為に駅に行きました。半年追加金額は9500円でした。
//Dさんは12500円持ってきていましたが購入金額はいくら使ったでしょうか？

var money2        = 12500;
var commuter_pass =  9500;
var pull2         = money2 - commuter_pass;

console.log(pull2);

//Eさんはおつかいを頼まれスーパーへ行きました。頼まれたものは料理の素600円を2つと缶ずめ300円を3つです。
//Eさんはそれぞれ何円ずつ購入したでしょうか？

var cooking_ingredients = 600 * 2;
var canned_food         = 300 * 3;

console.log(cooking_ingredients);
console.log(canned_food);

//Fさんは1箱32枚入りの煎餅を2つと1箱28枚入りの煎餅を3つ購入しました。
//それぞれ何枚買ったでしょうか？

var Rice_crackers1 = 32 * 2;
var Rice_crackers2 = 28 * 3;

console.log(Rice_crackers1);
console.log(Rice_crackers2);

//Gさんは学校の本屋さんで参考書の販売をしていました。その日は参考書28冊を生徒に1人1冊配る予定でしたが3人欠席した関係で渡せませんでした。
//結果的に何冊の参考書が余ってしまったでしょうか？

var Reference_book = 28;
var student        =  3;
var remainder1      = Reference_book % student;

console.log(remainder1);

//Hさんは会社の差し入れにお菓子を買いました。そのお菓子は1箱40個入りで社員は38人でしたがその日は5人お休みでした。
//結果的にいくつのお菓子が余ったでしょうか？

var sweets     = 40;
var employee   = 38;
var holiday    =   5;
var decrease   = employee - holiday;
var remainder2 = sweets % decrease;

console.log(remainder2);

//Iさんは今度の4連休に遊びに行く予定で親からおこずかい8000円をもらいました。
//その場合1日当たりいくら使えるでしょうか？

var allowance = 8000;
var day       =    4;
var divite    = allowance / day;

console.log(divite);
