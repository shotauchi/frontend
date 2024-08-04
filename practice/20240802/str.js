//Iさんは学校の新校舎と旧校舎の合併のために校舎名を合わせて表記しなければなりません。
//旧校舎の名前はAAAで新校舎の名前はBBBです。この場合どの様な名前になるでしょうか？

var old_school_building = 'AAA';
var new_school_building = 'BBB';
var connect             = old_school_building + new_school_building;

console.log(connect);

//Jさんは、友達に目的地aa、目的地ab、目的地acの何処かに遊びに行こうと言われましたが目的地cのみメッセージが来ていたため迷いました。
//なのでJさんはcが入っている目的地に向かうことにしました。その場合3つのどこに行ったでしょうか？

var Destination1 = 'aa';
var Destination2 = 'ab';
var Destination3 = 'ac';

console.log(Destination1);
console.log(Destination2);
console.log(Destination3);

var search1 = Destination1.indexOf('c');
var search2 = Destination2.indexOf('c');
var search3 = Destination3.indexOf('ac');

console.log(search1);
console.log(search2);
console.log(search3);

