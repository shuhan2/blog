function foo(){
	console.log(b);
	return 1;
}
var a,b,c;
c={
	get bar(){
		console.log(a);
		return 1;
	}
};

a = 10;
b =30;
a+=foo()				//30;a=11
b+=c.bar;				//11 ;b=31
console.log(a+b)			//42