var x =1;
function *foo(){
	x++;
	yield;		//暂停
	console.log("x:",x);
}

function bar(){
	x++;
}

var it = foo();

it.next();
x;			//2
bar();		
x;			//3
it.next();			//x:3