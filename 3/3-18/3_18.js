//入力ダイアログボックスに数字（商品の値段）を入れると、
//警告ダイアログボックスで、消費税10%を加算した値を表示するプログラムを作成しましょう。
let inputValue = prompt();  // 入力ダイアログボックスから値を取得
let x = inputValue * 110 / 100;     // 入力の値に消費税10%を加算して、xに代入
alert(x);                   // xの値を警告ダイアログボックスに表示
//消費税を加えてからinputvalueと×こと。
