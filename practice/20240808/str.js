//Jさんは学校の教室1と教室2の名前が似ているので覚えやすいように合わせて覚えることにしました。
//教室1はAABで教室2はABAです。この場合合わせると何という名前になるでしょうか？

var class1 = 'AAB';
var class2 = 'ABA';
var macth  = class1 + class2;

console.log(macth);

//Kさんは課題1と課題2のどちらから取り組もうか迷っていました。結果的に課題1から始める予定でしたが課題2の方が解きやすかったので課題2を解きました。
//その場合どちらから説いたでしょうか？

var assignment = 'Kさんは課題1を解く';

console.log(assignment);

var change = assignment.replace('課題1','課題2');

console.log(change);
