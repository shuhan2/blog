var obj={
	a:2,
	b:3
}
Object.defineProperty(obj,Symbol.iterator,{
	enumerable:false,
	writable:false,
	configurable:true,
	value:function(){
		var o = this;
		var idx = 0;
		//Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）
		var ks = Object.keys(o);
		return {
			next:function(){
				return{
					value:o[ks[idx++]],
					done:(idx>ks.length)
				};
			}
		};
	}
});

//手动遍历obj
var it=obj[Symbol.iterator]();
it.next();			//{value: 2, done: false}
it.next();			//{value: 3, done: false}
it.next();			//{value: undefined, done: true}
//for……of
for(var v of obj){
	console.log(v);
}

//2
//3