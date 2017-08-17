// 1.2.1this指向自身
function foo(num){
	console.log("foo:"+num);

	//记录foo被调用的次数
	this.count++;
}
foo.count =0;
for (var i = 0; i < 10; i++) {
	if (i > 5) {
		foo(i);
	}
}
console.log(foo.count);

//2.2.2隐性丢失
function foo(){
	console.log(this.a);
}
var obj = {
	a:2,
	foo:foo
};
var bar = obj.foo;
var a ="oops,global";
bar();     //oops,global

//2.2.2回调函数
function foo(){
	console.log(this.a);
}
function doFoo(fn){
	//fn其实引用的是foo
	fn();   //调用位置
}
var obj = {
	a:2,
	foo:foo
};
var a = "oops";
doFoo(obj.foo);

//2.2.3显示绑定
//1硬绑定
function foo(){
	console.log(this.a);
}

var obj = {
	a:2,
	foo:foo
};

var bar =function(){
	foo.call(obj);
};
bar()			//2
setTimeout(bar,100);		//2
//硬绑定的bar不可能修改它的this
bar.call(window);		//2

//apply
function foo(something){
	console.log(this.a,something);
	return this.a + something;
}
function bind(fn,obj){
	return function(){
		return fn.apply(obj,arguments);
	};
}
var obj = {
	a:2
};
var bar =bind(foo,obj);
var b = bar(3);
console.log(b);


//优先级
function foo(){
	console.log(this.a);
}

var obj1 = {
	a:2,
	foo:foo
};
var obj2 = {
	a:3,
	foo:foo
};
obj1.foo();			//2
obj2.foo();			//3

obj1.foo.call(obj2);		//3
obj2.foo.call(obj1);		//2

//new 绑定
function foo(something){
	this.a = something;
}
var obj1 = {
	a:2,
	foo:foo
};
var obj2 = {};

obj1.foo(2);
console.log(obj1.a);		//2

obj1.foo,call(obj2,3);		
console.log(obj2.a);		//3

var bar = new obj1.foo(4);
console.log(obj1.a);		//2
console.log(bar.a);			//4

//new 显示绑定 
function foo(something){
	this.a = something;
}
var obj1 = {};
var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);
var baz = new bar(3);
console.log(obj1.a);
console.log(baz.a);