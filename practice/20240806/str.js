//Hさんは高校と大学の一貫校に通っていました。Hさんはクラス分けの時にクラス名が似ているため合わせて覚えることにしました。
//合わせると何という名前になるでしょうか？

var name1 = 'abc';
var name2 = 'def';
var macth = name1 + name2;

console.log(macth);

//Iさんは今度引っ越す地名を覚えるために探していました。目的地は、ABCという地名ですがBAC、CABという見た名前の場所もありました。
//Iさんは何という名前の地名に引っ越す予定ですか？

var place_name = 'ABC';

console.log(place_name);

var search1 = place_name.indexOf('ABC');
var search2 = place_name.indexOf('BAC');
var search3 = place_name.indexOf('CAB');

console.log(search1);
console.log(search2);
console.log(search3);
