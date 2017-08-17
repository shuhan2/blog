//典型原型风格
function Foo(){
	this.name = name;
}

Foo.prototype.myName = function(){
	return this.name;
}

function Bar(name,label){
	Foo.call(this,name);
	this.label = label;
}

//create一个新的Bar.prototype.constructor对象并关联到Foo.prototype
Bar.prototype = Object.create(Foo.prototype);
//notice:!现在没有Bar.prototype.constructor
//如果需要这个属性需要手动修复
Bar.prototype.myLabel = function(){
	return this.label;
};

var a = new Bar("a","obj a")