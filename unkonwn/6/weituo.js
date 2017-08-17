var Foo = {};
var a1 = Object.create(Foo);
a1;			//
Object.defineProperty(Foo,"constructor",{
	enumerable:false,
	value:function Gotcha(){}
});

a1;