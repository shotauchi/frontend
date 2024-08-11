//Aさんはお店で3000円の腕時計と6000円の腕時計を購入しました。
//Aさんは合計でいくら購入したでしょうか？

var watch1 = 3000;
var watch2 = 6000;
var sum 　 = watch1 + watch2;

console.log(sum);


//Bさんはお店で2000円の帽子と2600円の帽子を購入しました。
//Bさんは合計でいくら購入したでしょうか？

var hat1 = 2000;
var hat2 = 2600;
var sum2 = hat1 + hat2;

console.log(sum2);


//Cさんは5000円の圧力鍋と1200円のフライパンを購入しました。
//Cさんは7000円持ってきていましたが何円使ったでしょうか？

var pressure_cooker = 5000;
var frying_pan      = 1200;
var money           = 7000;
var pull            = money - (pressure_cooker + frying_pan);

console.log(pull);


//Dさんはキャンプをするために宿泊代3800円、まき代600円、交通費4200円を払いました。
//Dさんは9000円持ってきていましたが何円使ったでしょうか？

var money2   = 9000;
var stay     = 3800;
var Firewood =  600;
var pull2    = money2 - (stay + Firewood);

console.log(pull2);


//Eさんはコンビニで120円のおにぎり6個と140円のおにぎりを5個と200円のホットスナックを2個購入しました。
//Eさんはそれぞれ何円ずつ購入したでしょうか？

var riceball1 = 120 * 6;
var riceball2 = 140 * 5;
var hotsnack  = 200 * 2;

console.log(riceball1);
console.log(riceball2);
console.log(hotsnack);


//Fさんは150円のアイスクリームを8個、180円のアイスクリーム5個、200円のアイスクリーム3個購入しました。
//Fさんはそれぞれ何円ずつ購入したでしょうか？

var ice_cream1 = 150 * 8;
var ice_cream2 = 180 * 5;
var ice_cream3 = 200 * 3;

console.log(ice_cream1);
console.log(ice_cream2);
console.log(ice_cream3);


//Gさんは1パック25本入りのボールペンを3個、1パック22本入りの鉛筆を2個を4人で分ける事にしました。
//それぞれいくつずつ余るでしょうか？

var ballpoint_pen = 25 * 3;
var pencil        = 22 * 2;
var people        = 4;
var remainder1    = ballpoint_pen % people;
var remainder2    = pencil % people;

console.log(remainder1);
console.log(remainder2);


//Hさんは1箱12個入りのケーキを2つと1箱18個入りのケーキを友達6人に買っていきました。
//そうするといくつずつ分けられるでしょうか？

var cake1  = 12 * 2;
var cake2  = 18;
var friend = 6;
var divite1 = cake1 / friend;
var divite2 = cake2 / friend;

console.log(divite1);
console.log(divite2);

