//Aさんはショッピングモールに買い物に行きました。そこでAさんは洋服を6000円、靴を3800円、飲食2000円かかりました。
//Aさんの合計でいくら購入したでしょうか？

var clothes = 6000;
var shoes   = 3800;
var eat     = 2000;
var sum     = clothes + shoes + eat;

console.log(sum);

//Bさんはキャンプ場に行くための準備をしています。Bさんが購入したのはランプ1800円、メスティン3200円、シュラカップ2個で2800円を買いました。
//Bさんは元々10000円持っていました。いくら使ったでしょうか？

var lamp       = 1800;
var Mestin     = 3200;
var sierra_cup = 2800;
var have       = 10000;
var use        = have - (lamp + Mestin + sierra_cup);

console.log(use);

//Cさんはイタリアンレストランで働いていました。その日はパスタ900円が32食売れて、1000円のピザが26個、1200円のラザニアが12食売れました。
//それぞれいくら売れたでしょうか？

var pasta   = 900 * 32;
var Lasagna = 1200 * 12;
var pizza   = 1000 * 26;

console.log(pasta);
console.log(Lasagna);
console.log(pizza);

//Dさんはサッカー部に所属しており、練習に必要なボールの追加発注をすることにしました。
//部員は32名で追加したサッカーボールは1箱あたり10個入っていてそれを4箱追加することにしました。その場合あまりはいくつになるでしょうか？

var soccer_ball      = 10 * 4;
var club_members     = 32;
var Number_of_pieces = soccer_ball % club_members;

//Eさんはお弁当屋で働いていました。その日は1000円のお弁当が合計で50食オーダーがあり作りました。
//その売り上げの合計から従業員5人で分ける事にしました。その場合いくらになるでしょうか？

var lunch_Box = 1000 * 50;
var member    = 5;
var divide    = lunch_Box / member;

console.log(divide);

//Fさんは1本100円のボールペン1と1本200円のボールペン2のどちらを買うか悩み、結果ボールペン1を購入しました。
//その場合下記は正しいか正しくないか出力してください下さい。

var ballpoint_pen1 = 100;
var ballpoint_pen2 = 200;
var correct        = 'ture';
var Incorrect      = 'false';

console.log(correct);


