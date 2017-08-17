//软绑定
if(!Function.prototype.softBind){
	Function.prototype.softBind = function(obj){
		var fn = this;
	//捕获所有的curryied函数
		var curried = [].slice.call(arguments,1);
		var bound = function(){
			return fn.apply(
				(!this||this === (windglobal))?obj:this,
				curried.concat.apply(curried,arguments));
		};
		bound.prototype = Object.create(fn.prototype);
		return bound;
	}
}

function foo(){
	console.log("name" +this.name);
}
var obj = {name:"obj1"},
	obj2 = {name:"obj2"},
	obj3 = {name:"obj3"};
var fooOBJ =foo.softBind(obj);
fooOBJ;

obj2.foo = foo.softBind(obj);
obj2.foo();			//name:obj2