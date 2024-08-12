//Aさんは1パック900円のコーヒーの粉と1パック1200円のコーヒーの粉と1パック800円の紅茶を購入しました。
//合計でいくら購入したでしょうか？

var coffee1 =  900;
var coffee2 = 1200;
var tea     =  800;
var sum     = coffee1 + coffee2 + tea;

console.log(sum);

//Bさんは1200円の花瓶と1000円の花瓶と750円の植木鉢を購入しました。
//合計でいくら購入したでしょうか？

var vase1      = 1200;
var vase2      = 1000;
var flower_pot =  750;
var sum2       = vase1 + vase2 + flower_pot;

console.log(sum2);

//Cさんはスーパーで果物類600円、野菜を480円、調味料を650円購入しました。
//Cさんは3000円持ってきていましたが何円使ったでしょうか？

var fruit =      600;
var vegetables = 480;
var seasoning  = 650;
var money      = 3000;
var pull       = money - (fruit + vegetables + seasoning);

console.log(pull);

//Dさんは家賃を払うために銀行でお金を下ろしました。払う金額は、家賃50000円、駐車場代3300円、光熱費代12000円でした。
//Dさんは100000円持ってきていましたが何円払ったでしょうか？

var money2      =     100000;
var rent        =      50000;
var Parking_fee =       3300;
var Utility_expenses = 12000;
var pull2            = money2 - (rent + Parking_fee + Utility_expenses);

console.log(pull2);

//Eさんは1個300円のカードパックを7パックと1個280円のカードパックを5個購入しました。
//Eさんはそれぞれ何円分のカードパックを購入したでしょうか？

var card1 = 300 * 7;
var card2 = 280 * 5;

console.log(card1);
console.log(card2);

//Fさんは1カット260円のアップルパイを5個と1カット240円のレモンパイを8個購入しました。
//Fさんはそれぞれ何円購入したでしょうか？

 var apple_pai = 260 * 5;
 var remon_pai = 240 * 8;
 
 console.log(apple_pai);
 console.log(remon_pai);
 
 //Gさんは1パック8個入りのたこ焼きを3個、1パック10本入りの焼き鳥を5個、1パック6個入りの唐揚げを2個ずつ購入しました。
 //それを9人で分けることにしました。そうするといくつずつ余るでしょうか？
 
 var Takoyaki      = 8 *  3;
 var Yakitori      = 10 * 5;
 var Fried_Chicken = 6 *  2;
 var people        =      9;
 var remainder1    =      Takoyaki % people;
 var remainder2    =      Yakitori % people;
 var remainder3    = Fried_Chicken % people;
 
 console.log(remainder1);
 console.log(remainder2);
 console.log(remainder3);
 
 //Hさんは1つ340円のキーホルダーを12個と1つ550円のアクリルキーホルダーを5個購入しました。それを友達7人と分けることにしました。
 //それぞれいくつずつ余りが出るでしょうか？
 
 var key_ring         = 12;
 var acrylic_keychain = 10;
 var people2          =  7;
 var divite1          = key_ring / people2;
 var divite2          = acrylic_keychain / people2;
 
 console.log(divite1);
 console.log(divite2);
 
 