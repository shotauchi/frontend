//Jさんは長いの英単語を覚えるために同じ文字がその単語内にあるものから覚えることにしました。
//Jさんが覚えようとした単語は(luggage)です。この単語にはいくつのgが含まれるでしょうか？

var word = 'luggage';

console.log(word);

var search1 = word.indexOf('g');
var search2 = word.indexOf('u');

console.log(search1);
console.log(search2);

//Kさんは施設名を覚えるのに分かりやすい様に短い名前の企業名を合わせて覚えることにしました。
//企業1はabcで企業2はdefです。この二つの企業名を繋げると何という名前になるでしょうか？

var Company_name1 = 'abc';
var Company_name2 = 'def';
var match         = Company_name1 + Company_name2;

console.log(match);

