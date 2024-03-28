// 1．要素として「apricot」, 「strawberryが順番に入っている配列fruitを定義
let fruit = ['apricot','strawberry'];
console.log(fruit);
console.log(fruit[1]);// 末尾「1」を取り出す
console.log(fruit.length);// 長さ「2」
console.log(fruit[fruit.length-1]);// 末尾を取り出す！！

// 2．配列fruitの先頭に「pear」を追加
fruit.unshift('pear');
console.log(fruit);

// 3．配列fruitの末尾に「grape」を追加
fruit.push('grape');
console.log(fruit);

// 4．配列fruitの末尾を「lime」に変更する
// 4-1)fruit の末尾から grape を取り除く
fruit.pop();// pop(): 配列から最後の要素を取り除き、その要素を返します
console.log(fruit);// [pear, apricot, strawberry]
// 4-2)grape を取り除いたので lime を追加する
fruit.push('lime');// push(): 配列の末尾に指定された要素を追加
console.log(fruit);

// // 4'．配列fruitの末尾を「orange」に変更する
// console.log(fruit[fruit.length-1]);// 末尾を取り出す->「lime」
// fruit[fruit.length-1] = 'orange';// 配列の末尾「fruit.length-1」番目を「orange」に書き換える（代入する）
// console.log(fruit.length);// 長さ「4」
// console.log(fruit[3]);// 末尾「3」を取り出す->「orange」
// // 配列変数 fruit の要素が１以上ある場合
// // fruit[fruit.length-1] の形で、配列要素の末尾にアクセスできる

// 5．配列fruitをconsole.logで出力
console.log(fruit);
