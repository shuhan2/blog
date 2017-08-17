//类
function Foo(who){
	this.me =who;
}
Foo.prototype.identify = function(){
	return "I am "+this.me
};

function Bar(who){
	Foo.call(this,who);
}
//手动复制
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function(){
	console.log("Hello," + this.identify()+".");
};
var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();					//Hello,I am b1.
b2.speak();					//Hello,I am b2.


//对象关联
Foo = {
	init:function(who){
		this.me = who;
	},
	identify:function(){
		return "I am "+this.me
	}
};
Bar = Object.create(Foo);

Bar.speak = function(){
	console.log("Hello," + this.identify()+".");
};
 
var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak();					//Hello,I am b1.
b2.speak();					//Hello,I am b2.