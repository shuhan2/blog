//3.8.4惯性
function foo(x,y,cb){
	ajax(
		"http://some.url.1/?x=" +x+"&y="+y,
		cb
		);
}

foo(11,31,function(err,text){
	if (err) {
		console.error(err);
	}
	else{
		console.log(text);
	}
})


/**/
//为ajax()构造一个promisory
var request = Promise.wrap(ajax);

//重构foo(),但使其外部成为基于外部回调的，
//与目前代码的其他部分保持通用
//---只在内部使用request(……)的promise
function foo(x,y,cb){
	request(
			"http://some.url.1/?x=" +x+"&y"+y
		)
	.then(
		function fullfilled(text){
			cb(null,text);
		},
		cb
		);
}

//现在，为了这段代码的目的，为foo(……)构造一个promisory
var betterFoo = Promise.wrap(foo);
betterFoo(11,31)
.then(
	function fullfilled(text){
		console.log(text);
	},
	function rejected(err){
		console.error(err);
	}
);