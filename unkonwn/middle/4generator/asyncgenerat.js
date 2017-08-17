function foo(x,y,cb){
	ajax(
		"http://some.url.1/?x=" + x +"&y=" +y,
		cb);
}

foo(11,31,function(err,text){
	if(err){
		console.error(err);
	}
	else{
		console.log(text);
	}
});


//generator
function foo(x,y){
	ajax(
		"http://some.url.1/?x=" + x +"&y=" +y,
		function(err,data){
			if (err) {
				it.throw(err);
			}
			else{
				it.next(data);
			}
		});
		
}

function *main(){
	try{
		var text = yield foo(11,31);
		console.log(text);
	}
	catch{
		console.error(err);
	}
}
var it = main();
//启动
it.next();


