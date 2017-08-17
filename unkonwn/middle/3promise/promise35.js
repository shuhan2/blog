//3.5错误处理
function foo(cb){
	setTimeout(function(){
		try{
			var x = baz.bar();
			cb(null,x);		//succeed
		}
		catch(err){
			cb(err);
		}
	},100);
}

foo(function(err,val){
	if (err) {
		console.error(err);
	}
	else{
		console.log(val);
	}
})


/*
只有在baz.bar()调用会同步的立即成功或失败的情况下，这里的try……catch才能工作。
如果baz.bar()本身有自己的异步完成函数。其中的任何错误都将无法捕捉到
*/