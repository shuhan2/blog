var a =1;
var b =2;
function *foo(){
	a++;
	yield;
	b = b*a;
	a=(yield b)+3;
}
function *bar(){
	b--;
	yield;
	a = (yield 8) + b;
	b = a * (yield 2);
}
//初始化一个生成器创建迭代器
function step(gen){
	var it = gen();
	var last;

	return function(){
		//不管yield出来的是啥，下一次都把它原样传回去；
		last = it.next(last).value;
	};
}

var s1 = step(foo);
var s2 = step(bar);

// s1();					//a:2 b:2
// s1();					//a:2 b:4
// s1();					//a:NaN  b:4

// s2();					//a:NaN  b:3
// s2();					//a:NaN  b:3
// s2();					//a:8 b:3
// s2();					//a:11 b:22


s2();				//a:1 b:1 b--
s2();				//yield a:1 b:1?????
s1();				//a++ a:2	b:1
s2();				//a = 8+b yield2  a:9 b:1
s1();				//b = b*a  yield  a:9  b:9
s1();				//a = b+3 a:NaN b:9
s2();				//a:NaN b:18
// var it1 = foo();
// var it2 = bar();

// var val1 = it1.next().value;					//a:2
// var val2 = it2.next().value;					//b:1

// val1 = it1.next(val2*10).value;				
// val2 = it2.next(val1*5).value;	