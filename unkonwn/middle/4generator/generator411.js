function *foo(x){
	var y=x*(yield);
	return y;
}

var it = foo(6);

//启动foo(……)
it.next();


var res  =it.next(7);

res.value;		//42	