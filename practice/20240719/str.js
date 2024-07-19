//Fさんはイベントのチケットを購入する為にコンビニに行きました。ですがコンビニ1ではそのチケットが購入できなかったにでコンビニ2まで買いに行くことにしました。
//結果的にFさんはコンビニ1で購入することが出来たでしょうか、それとも出来なかったでしょうか？

var ticket = 'Fさんはコンビニ1でチケットを購入する';

console.log(ticket);

var change  = ticket.replace('コンビニ1','コンビニ2');
var boolean = 'コンビニ1' != 'コンビニ2';

console.log(change);
console.log(boolean);



