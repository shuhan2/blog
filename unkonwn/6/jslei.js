//父类
function Widget(width,height){
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}
Widget.prototype.render = function($where){
	if (this.$elem) {
		this.$elem.css({
			width:this.width + "px",
			height:this.height + "px"
		}).appendTo($where);
	}
};

//子类
function Button(width,height,label){
	//调用“super”构造函数
	Widget.call(this,width,height);
	this.label = label || "Default";

	this.$elem = $("<button>").text(this.label);
}
//Button “继承”Widget
Button.prototype = Object.create(Widget.prototype);

//重写render(……)
Button.render
