//Jさんはお土産を買うためにお店を調べると頭文字が同じ名前だったので2文字目まで確認することにしました。
//お店1はABCDでお店2がACBDです。けっかはそれぞれ何という名前になるでしょうか？

var store1 = 'ABCD';
var store2 = 'ACBD';

console.log(store1.substring('0','2'));
console.log(store2.substring('0','2'));

//Kさんは実家に土曜日に帰省する予定で計画を立てました。ですが急な予定が入って日曜日に帰省することにしました。
//その場合どちらで最終的に帰省したでしょうか？

var homecoming = 'Kさんは土曜日に帰省する';

console.log(homecoming);

var change = homecoming.replace('土曜日','日曜日');

console.log(change);
