var a = 42;
var b='foo';
var c=[1,2,3];
a&&b||c       //'foo'
a||b&&c  		//42

var a=424,b;
b =(a++,a);
a;		//43
b;		//43

//去掉括号
var a=424,b;
b =a++,a;
a;		//43
b;		//42

//complex
var a =42;
var b ='foo';
var c = 'false';

var d = a&&b||c?c||b?a:c&&b:a;
d 		//42
(a&&b||c)?((c||b)?a:(c&&b)):a				//&&运算符优先级高于||，||优先级高于？：


a?b:c?d:e		//?:右关联  a?b:(c?d:e)