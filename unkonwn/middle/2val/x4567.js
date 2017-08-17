function foo(x) {
	x.push(4);
	x;		//[1,2,3,4]
	x.length = 0;		//
	x = [4,5,6,7]
	x;
}
var a = [1,2,3];
foo(a);
a;			//[]
