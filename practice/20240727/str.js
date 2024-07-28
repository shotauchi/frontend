//Fさんはパスタを食べようかピザを食べようか考えていましたがFさんはパスタを食べる事にしました。
//しかしFさんはまだお腹が空いていたので追加でピザとデザートも食べることにしました。
//この場合Fさんはパスタ以外何と何を追加で注文したでしょうか？

var lunch = 'Fさんはピザを食べる';

console.log(lunch);

var change  = lunch.replace('ピザ','パスタとデザート');
var boolean = lunch == change;

console.log(change);
console.log(boolean);
