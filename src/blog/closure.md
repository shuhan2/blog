
<!-- ###闭包的使用 -->
&ensp;&ensp;&ensp;&ensp;闭包是JavaScript语言中一个非常重要也非常常用的结果，它的创建和使用在代码中随处可见，当函数可以记住并访问所在的词法作用域时，就产生了闭包，从这句话也可以看到。闭包是基于词法作用域写代码时随之产生的，理解闭包的关键是理解JavaScript作用域的原理，我们在上一篇博文中已经探讨过。首先来看一个我们平时写得很多的代码：
```
function foo(){
    var a = 0;
    function bar(){
      console.log(a);
    }
    bar();
}
```

&ensp;&ensp;&ensp;&ensp;在上面这个例子中，函数bar()可以访问它的外部作用域，将它的代码稍微改动一下，他就是一个 很典型的闭包的创建与应用,通过建立函数来访问函数的内部变量。
```
function f1(){
    var a = 0;
    function f2(){
      console.log(a);
    }
   return f2();
}
var f3 = f1();
f3();              //0
```

&ensp;&ensp;闭包有很多用途，在上面的例子中，我们可以看到，一个作用就是可以读取函数内部的变量，另一个作用就是可以保存变量的值(注：这个用途反过来也会造成内存泄漏的问题)，我们再来看一个
例子
```
function fun1(){
    var a = 0;
    //全局变量
    add = function(){
        a+=1;
    }
    function fun2(){
        console.log(a);
    } 
    return fun2;
}
var result=fun1();
result();               // 0
add();
result();               // 1
```

&ensp;&ensp;&ensp;&ensp;在这个例子中，a一直在作用域中，并没有在fun1调用后，被自动清除掉。
###注意
&ensp;&ensp;&ensp;&ensp;闭包有很强大的功能，但不能过多的使用它，它最大的一个问题就是由于保存变量，会使得内存消耗越来越大，从而造成网页的性能问题，关于这个缺陷，也有一个处理方法，在退出函数之前，将不使用的变量全部手动清除，减小内存。
###经典案例
&ensp;&ensp;&ensp;&ensp;在博文的最后，我们来看几个经典的闭包案例，以便我们更好地理解闭包，首先我们来看两个例子的对比
第一段代码
```
var name = "Closure";
　　var object = {
　　　　name : "Closure2",
　　　　getName : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
console.log(object.getName()());
```
将它稍作改动成为下面这段代码
```
var name = "Closure";
　　var object = {
　　　　name : "Closure2",
　　　　getName : function(){
       //notice
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};
console.log(object.getName()());
```
大家可以自己运行一下上面两段代码，看看最后的结果是什么，第一段代码会输出'Closure'，第二段代码会输出'Closure2',为什么会有这样的差别呢，第一段代码中的函数getName不能访问到
object中的对象name，this在这里指向全局变量中的name，而第二段代码使用了闭包，在getName函数中将this赋给that，使得最后的输出指向object中的name。
接下来，我们再来看一段代码
 

```
function fun(n,o) {
    console.log(o)
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}
var a = fun(0);             //undefined,
    a.fun(1);                   //0
    a.fun(2);                   //0
    a.fun(3);                   //0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1);              //undefined,0
c.fun(2);  
c.fun(3);                           //1,1
```
&ensp;&ensp;&ensp;&ensp;上面这段代码嵌套了三层fun函数