//Aさんはスーパー1でお肉と魚類を3000円分購入して、野菜類を1200円分購入しました。スーパー2では果物類を800円、お花を500円、日用品類を1800円購入しました。
//この時Aさんは10000円持ってきていましたが金額は合計で10000円以上購入したでしょうか、それとも10000以下だったでしょうか？

var Supermarket_1 = 3000 + 1200;
var Supermarket_2 = 800 + 500 + 1800;
var wallet        = 10000;
var sum           = Supermarket_1 + Supermarket_2;
var boolean       = wallet >= sum;

console.log(sum);
console.log(boolean);

//Bさんはスーパー3で冷凍食品を1600円、お惣菜類を1000円、スーパー4でお菓子類を600円、洗剤類を1400円、調味料類を1100円購入しました。
//Bさんは現金8000円を持っていましたが引いた金額は8000円を超えたでしょうか、それとも超えなかったでしょうか？

var Supermarket_3 = 1600 + 1000;
var Supermarket_4 = 600 + 1400 + 1100;
var money         = 8000
var rest          = money - (Supermarket_3 + Supermarket_4);
var boolean       = money >= rest;

console.log(rest);
console.log(boolean);

//Cさんはレストランで働いていました。その日は焼肉定食が28食、焼き魚定食が24食、とんかつ定食が20食売れました。
//この日の売り上げ目標は焼肉が24食以上、焼き魚定食が20食以上、とんかつ定食が25食以上でした。
//目標のノルマはそれぞれ達成できたでしょうか、それとも出来なかったでしょうか？

var Yakiniku_set_meal     = 1200 * 28;
var Grilled_fish_set_meal = 1000 * 24;
var Tonkatsu_set_meal     = 1300 * 20;


console.log(Yakiniku_set_meal);

console.log(Grilled_fish_set_meal);

console.log(Tonkatsu_set_meal);

//Dさんは1袋あたり60枚入りのコピー用紙2袋と1袋65枚入りのコピー用紙を部署の50人に印刷して配ることにしました。
//その場合いくつずつコピー用紙は余るでしょうか？

var copy_paper1    = 60 * 2;
var copy_paper2    =     65;
var Department     =     50;
var remainder_1    = copy_paper1 % Department;
var remainder_2    = copy_paper2 % Department;

console.log(remainder_1);
console.log(remainder_2);

//Eさんは1箱あたり80冊入ノート2箱分と1箱40冊のノートを買い、クラスメイト10人で分ける事にしました。
//その場合いくつずつ分けられるでしょうか？

var note_1     = 80 * 2;
var note_2     =     40;
var classmate  =     10;
var divide_1   = note_1 / classmate;
var divide_2   = note_2 / classmate;

console.log(divide_1);
console.log(divide_2);

