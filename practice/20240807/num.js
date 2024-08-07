//Aさんはコンビニでパン160円とスナック菓子240円、サラダ180円を購入しました。
//合計でいくら購入したでしょうか？

var bread = 160;
var snack = 240;
var salad = 180;
var sum = bread + snack + salad;

console.log(sum);

//Bさんは家具を購入する為お店へ行きました。買ったのはカーテン4800円、マットレス8000円を購入しました。
//合計でいくら購入したでしょうか？

var curtain  = 4800;
var mattress = 8000;
var sum2     = curtain + mattress;

console.log(sum2);

//Cさんはライブイベントに参加するために1日目のチケット3000円、2日目のチケット2800円分を購入しました。
//Cさんは8000円持ってきていましたが何円使ったでしょうか？

var money   = 8000;
var ticket1 = 3000;
var ticket2 = 2800;
var pull    = money - (ticket1 + ticket2);

console.log(pull);

//Dさんはスーパーで総菜を1000円、飲み物類を1600円購入しました。
//Dさんは3000円持ってきていましたが何円使ったでしょうか？

var Side_dish = 1000;
var drink     = 1600;
var money2    = 3000;
var pull2     = money2 - (Side_dish + drink);

console.log(pull2);

//Eさんは文房具屋でシャーペン1本180円を5本、ボールペン1本120円を4本購入しました。
//Eさんはそれぞれ何円分購入したでしょうか？

var mechanical_pencil = 180 * 5;
var ballpoint_pen     = 120 * 4;

console.log(mechanical_pencil);
console.log(ballpoint_pen);

//Fさんは1袋24個入りのチョコレートと1袋30個入りのチョコレートを7人で分ける事にしました。
//そうすると余りはいくつずつになるでしょうか？

var chocolate_1 = 24;
var chocolate_2 = 30;
var people      =  7;
var remainder1  = chocolate_1 % people;
var remainder2  = chocolate_2 % people;

console.log(remainder1);
console.log(remainder2);

//Gさんは子供におもちゃ12個とおもちゃ18個を6人に分ける事にしました。
//いくつずつ分けられるでしょうか？

var toy1    = 12;
var toy2    = 18;
var people6 =  6;
var divite1 = toy1 / people6;
var divite2 = toy2 / people6;

