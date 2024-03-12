let message = "今日は良い天気です";
console.log(message);

// 文字列の検索
let search1 = message.indexOf('良い');      
let search2 = message.indexOf('悪い');      

console.log(search1);
console.log(search2);

// 文字列の置換
let replace1 = message.replace('良い','悪い');  
console.log(replace1);

// 文字列の削除
let del1 = message.replace('良い','');        
console.log(del1);
