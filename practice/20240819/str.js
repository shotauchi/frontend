//Iさんは数学の教科書を購入する2つ購入することになりました。教科書1はmathematics_Aで教科書2はmathematics_ABという名前です。
//この二つを結合すると何という名前になるでしょうか？

var name1 =  'mathematics_1';
var name2 = 'mathematics_2';
var march   = name1 + name2;

console.log(march);

//Jさんは飲み薬を正しく服用する必要があるため頭文字が同じなので2文字目まで表示することにしました。
//飲み薬1はAAAで飲み薬2はABAです。それぞれ表示すると何と表示されるでしょうか？

var Oral_medicine1 = 'AAA';
var Oral_medicine2 = 'ABA';

console.log(Oral_medicine1.substring('0','2'));
console.log(Oral_medicine2.substring('0','2'));

//Kさんはお昼ご飯にうどんを食べようかそばを食べようか迷っていました。結果的にそばを食べたかったのですが売り切れだったのでうどんを食べました。
//Kさんは結果的にどちらを食べたでしょうか？

var lunch = 'Kさんはそばを食べる';

console.log(lunch);

var change = lunch.replace('そば','うどん');

console.log(change);
