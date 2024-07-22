//Fさんはお弁当1を買うかお弁当2を買うか迷っていました。Fさんはお弁当2を買おうとしましたが売り切れていたためお弁当1を買いました。
//Fさんはお弁当1を買ったでしょうか、それとも買ってないでしょうか？

var Lunch_box  = 'Fさんはお弁当2を買う';

console.log(Lunch_box);

var change  = Lunch_box.replace('お弁当2','お弁当1');
var boolean = change != Lunch_box;

console.log(change);
console.log(boolean);


