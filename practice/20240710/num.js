//AさんはホームセンターでDiYをする為に木の板を3000円、釘を500円、セメントを1000円、工具類を5600円買いました。
//合計でいくら購入したでしょうか？

var wooden_board = 3000;
var nail         =  500;
var cement       = 1000;
var tool         = 5600;
var total        = wooden_board + nail + cement + tool;

console.log(total);

//Bさんはボーリングとダーツをする為に友達と一緒に遊びに行きました。
//ボーリングは全て込みで3200円、ダーツは1200円、最後にレストランで夕食を1800円払いました。
//Bさんの所持金は10000円なのでいくら使ったでしょうか？

var money_in_possession = 10000;
var bowling             =  3200;
var darts               =  1200;
var restaurant          =  1800;
var used                = money_in_possession - (bowling + darts + restaurant);

console.log(used);

//Cさんは1冊1800円の参考書を5科目別に購入し、別個に数学と英語の問題集1600円をそれぞれ1冊ずつ買いました。
//Cさんはいくつずつ買ったでしょうか？

var Reference_book = 1800 * 5;
var Exercise_books = 1600 * 2;

console.log(Reference_book);
console.log(Exercise_books);

//Dさんは20枚のプレゼンの資料を配るためにグループAの8人とグループBの10人に分けて送りました。
//この場合いくつ残るでしょうか？

var Presentation_materials = 20;
var grop_A                 =  8;
var grop_B                 = 10;
var divide_1               = Presentation_materials % (grop_A + grop_B);

console.log(divide_1);

//Eさんは1箱あたり20個入りのお菓子１と1箱あたり24個入りお菓子２を友達4人と分ける事にしました。
//それぞれいくつずつ分けられるでしょうか？

var sweets_1 = 20;
var sweets_2 = 24;
var friend_4 = 4;
var divide_2 = sweets_1 / friend_4;
var divide_3 = sweets_2 / friend_4;

console.log(divide_2);
console.log(divide_3);

//Fさんはお昼ご飯に1000円の日替わりランチを食べました。その次の日には850円のラーメンを食べた。
//下記の条件が正しいのか正しくないのか出力してください下さい。

var lunch = 1000;
var ramen =  850;
var lunch =  'ture';
var ramen = 'false';

console.log(lunch);

