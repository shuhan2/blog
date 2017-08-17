function *foo() {
	console.log("*foo() start");
	yield 3;
	yield 4;
	console.log("*foo() finished");
}

function *bar(){
	yield 1;
	yield 2;
	yield *foo();		//yield委托
	yield 5;
}
var it = bar();

it.next().value;		//1
it.next().value;		//2
it.next().value;		//*foo()start
						//3
it.next().value;		//4
it.next().value;		//*foo()完成
						//5
