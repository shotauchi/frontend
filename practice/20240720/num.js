//Aさんは釣りをするために道具をショップに買いに行きました。ショップ1で3000円の釣り竿とエサ600円分を購入しました。
//次にお店2で防水ウェア6400円とルアー500円を購入しました。Aさんの購入予算は10000円以内です。
//Aさんは10000以内で合計購入できたでしょうか？それとも10000以上になったでしょうか？

var store_1 = 3000 + 600;
var store_2 = 6400 + 500;
var sum     = store_1 + store_2;
var boolean = sum <= 10000;

console.log(boolean);

//Bさんはキッチン用品の買い物に行きました。そこでBさんはフライパン2000円、ヘラ400円、トング300円、鍋1200円を購入しました。
//Bさんは5000円持ってきていました。Bさんの購入金額は5000円以上になるでしょうか、それとも5000円いないでしょうか？

var wallet      = 5000;
var frying_pan  = 2000;
var spatula     =  400;
var tongs       =  300;
var pot         = 1200;
var use         = wallet - (frying_pan + spatula + tongs + pot);
var boolean     = use <= 5000;

console.log(use);
console.log(boolean);

//Cさんは定食屋で働いていました。その日は生姜焼き定食1000円が30食、魚の煮付け定食1200円が18食、唐揚げ定食900円が15食売れました。
//この日は生姜焼き定食を20食以上、魚の煮付け定食が16食以上、唐揚げ定食が18食以上を目標にしていました。
//Cさんはそれぞれの目標を達成できたでしょうか？

var Ginger_grilled_set_meal = 1000;
var Boiled_fish_set_meal    = 1200;
var Fried_chicken_set_meal  =  900;
var Earnings_1              =   30;
var Earnings_2              =   16;
var Earnings_3              =   18;
var the_goal_1              = Ginger_grilled_set_meal * Earnings_1;
var the_goal_2              = Boiled_fish_set_meal * Earnings_2;
var the_goal_3              = Fried_chicken_set_meal * Earnings_3;


console.log(the_goal_1);
console.log(the_goal_2);
console.log(the_goal_3);

//Dさんはショッピングモールで合計14000円の買い物をしました。レシートではラックが3000円、デスクが5000円、スタンドが1400円でした。
//しかし残りの金額はいくらか分かりませんでした。その残りの金額はいくらになるでしょうか？

var total = 14000;
var shelf =  3000;
var desk  =  5000;
var stand =  1400;
var Leftover_money = total % (shelf + desk + stand);

console.log(Leftover_money);

//Eさんは予算20000円で日帰り旅行をしようと思いました。Eさんが行くことにしたプランは宿泊費7500円、食費が4000円、参加費が2600円でした。
//Eさんは予算いくらを使ったでしょうか？

var budget            = 20000;
var Accommodation_fee = 7500;
var food_expenses     = 4000;
var Entry_fee         = 2600;
var divide            = budget / (Accommodation_fee + food_expenses + Entry_fee);

console.log(divide);




