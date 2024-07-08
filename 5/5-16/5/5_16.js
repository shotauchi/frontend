// for (let i = 0; i < 10; i++) {    //for文でiを宣言して、iは10よりも小さい時条件式で表し、iを増減させる式を+する。
//     let s = '(' + i + '):';　　　 //変数sに'(' + i + '):'を代入する。
//     for (let j = 0; j < i; j++) { //for分でjを宣言してjはiよりも小さいと条件式で表し、jを増減させる式を+する。
//         s = s + '*';　　　　　　　//変数sにs - '*'を代入している。
//     }
//     console.log(s);　　　　　　　　//console.logで出力する。
// }

// // * を 10 から１つずつ減らして 1 まで表示する
// for (let i = 0; i < 10; i++) {// for分で変数iを宣言して、変数iよりも10の方が大きい条件式で表し、iを加算する。
//     console.log(i);// 0,1,2,3,3,5,6,7,8,9
// }
// // →間違い１

// // * を 10 から１つずつ減らして 1 まで表示する
// for(let i = 10; i < 1; i--) { //for文で変数iを宣言して、条件式をiよりも1が小さいとして、iを1つずつ引く処理をする。
// //              ^^^^^ 条件式の指定に誤りがあり、１回もループしない
//     console.log(i);//10,9,8,7,6,5,4,3,2,1
// }// →間違い２

// // * を 10 から１つずつ減らして 1 まで表示する
// for(let i = 10; i > 1; i--) {
// //              ^^^^^ 条件式の指定に誤りがあり、i=1 の時に処理されない
//     console.log(i);//10,9,8,7,6,5,4,3,2,1
// }// →間違い３

// * を 10 から１つずつ減らして 1 まで表示する
// for(let i = 10; i > 0; i--) {
//     // (数値=i): を表示させる処理を作りたい。
//     // let s = 'i';// 文字列変数 s に、文字列 i を代入している
//     // let s = '(i):';// 文字列変数 s に、文字列 (i): を代入している
//     // let s = '( , i , ):';// 文字列変数 s に、文字列 『( , i , ):』 を代入している
//     // let s = '():' + i;// 文字列変数 s に、文字列 『():』 と、数値変数 i を連結して代入
//     // let s = '(' + i '):';// 文字列変数 s に、文字列 『(』 と、数値変数 i と、文字列 『):』 を連結して代入
//     let s = '(' + i + '):';// 文字列変数 s に、文字列 『(』 と、数値変数 i と、文字列 『):』 を連結して代入
//     console.log(s);// 文字列変数 s を表示する
// }

for(let i = 10; i > 0; i--) {
    let s = '(' + i + '):';// 文字列変数 s に、文字列 『(』 と、数値変数 i と、文字列 『):』 を連結して代入
    console.log(s);// 文字列変数 s を表示する
}

// 指定した数＝１０個だけ * を横に並べて表示するプログラム
// for (let i = 10; i < 0; i++) {// i = 10 なので、条件式 i < 0 は一度も満たされず１回も処理されない！！
//     let s = '*';
//     console.log(s);
// }
// for (let i = 0; i < 10; i++) {
//     let s = '*';
//     console.log(s);// 毎回 * を１つ表示するのが、１０回繰り返されている
// }
// let star = '';// 文字列変数 star に空文字列を代入する
// for (let i = 0; i < 10; i++) {
//     let i = '*';
// }
// console.log(star);// 文字列変数 star を表示する
// let i = 0;
// i = '*';
// i++;
// console.log(i);
let star = '';// 文字列変数 star に空文字列を代入する
for (let i = 0; i < 10; i++) {
    // 文字列変数 star に、文字列『*』を結合する

    let s = '*';// 文字列変数 s を宣言して『*』を代入する
}
console.log(star);// 文字列変数 star を表示『**********』する

// for(let i = (10); i > (0); i--) {// for文のiに(10)を代入して、iよりも(0)が大きいと条件式を表示する、iを１つずつ引く処理をする。
// //          ^^^^      ^^^ 文字列？数値？
//     console.log(i);
// }// →間違い４

// 例１）文字列『テスト』を表示させる処理を作りたい。
//console.log("テスト");

// 例２）文字列『テスト』を表示させる処理を作りたい。
// let t = "テスト";
// console.log(t);
