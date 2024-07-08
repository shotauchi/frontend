let a = 5;// 月
let b = 8;// 日？

if (a >= b) {
    console.log('January'); //３月が２９日以上ならばJanuaryと出力される。
} else if (a > b) {
    console.log('February'); //３月が２９日よりも大きいならばFabruaryと出力される。
} else if (a < b) {
    console.log('March'); //４月が２９日よりも小さいならばMarchと出力される。
} else {
    console.log('April'); //それ以外ならばAprilが出力される。   
}

let mon = 4;// 月

if (mon == 1) {
    console.log('January');
} else if (mon == 2) {
    // 変数 mon ＝月に、数値 2 が代入されていた場合
    console.log('February');// February を出力する
} else if (mon == 3) {
    console.log('March');
} else {
    // それ以外の場合
    console.log('不明です');// 不明です を出力する
}
