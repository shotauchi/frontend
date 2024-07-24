//Gさんは海でサーフィンをしようかヨットに乗ろうか考えて、ヨットにする事にしましたが結果的に時間の都合上サーフィンをすることにしました。
//この時のGさんは本来どっちで遊ぶ予定でしたか？

var Ocean = 'Gさんはヨットをする';

console.log(Ocean);

var change  = Ocean.replace('ヨット','サーフィン');
var boolean = Ocean == change;

console.log(change);
console.log(boolean);

