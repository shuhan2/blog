//异步委托
function *foo(){
	var r2 = yield request("http://some.url.2");
	var r3 = yield request("http://some.url.3/?v="+r2);

	return r3;
}
function *bar(){
	var r1 = yield request("http://some.url.1");

	var r3 = yield *foo();
	console.log(r3);
} 
run(bar);