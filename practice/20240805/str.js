//Gさんは団地1と団地2の名前が覚えられないのでまとめて覚えることにしました。
//団地1の名前はABABで、団地2はBABAです。合わせるとどの様な名前になるでしょうか？

var housing_complex1 = 'ABAB';
var housing_complex2 = 'BABA';
var match            = housing_complex1 + housing_complex2;

console.log(match);

//Hさんは今度遊びに行く場所を調べていました。その場所はCCDDという場所でした。
//ところが後日もう一度確認するとDDCCという名前の場所が出てきました。
//正しいのは何という名前の場所でしょうか？

var location1 = 'CCDD';

console.log(location1);

var search1 = location1.indexOf('CDCD');
var search2 = location1.indexOf('CCDD');

console.log(search1);
console.log(search2);

