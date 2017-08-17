var Something = {
	cool:function(){
		this.greeting = "Hello World";
		this.count = this.count ? this.count+1:1;
	}
};
Something.cool();
Something.greeting;			//"Hello World"
Something.count;			//1
var Another = {
	cool:function(){
		//隐式把Something混入Another
		Something.cool.call(this);
	}
};
Another.cool();
Another.greeting;
Another.count;			//1