<!-- This详解 -->
&ensp;&ensp;&ensp;&ensp;编写JavaScript代码时，经常会遇到this的陷阱，它在严格环境和非严格环境下的表现略有一些不用，在不同的环境(浏览器&&Node)中，指代的变量也会有一些小的区别，本文只考虑在浏览器环境下this的使用

### 1.全局 this
&ensp;&ensp;&ensp;&ensp;打开chrome控制台，输入this，按下回车，会发现输出的值是'Window',在浏览器环境中，全局范围内，this指向window。
```
var name = "this";
console.log(this.name);             //'this'
console.log(window.name);           //'this'
console.log(this === window);       //'true'
```

注：在局部作用域中声明变量，如果没有在使用var或者let(ES6)，这个变量就是全局变量，我们一起来看看下面这个例子。
```
//全局变量
name = 'that1';
function foo(){
    name = 'that2';
}
console.log(this.name);             //'that1'
foo();
console.log(this.name);             //'that2'
```
### 2.函数 this
&ensp;&ensp;&ensp;&ensp;在函数作用域中，如果不是用new创建，函数中的this都是指代全局范围的this，使用new的结果差别，我们通过一个对比来看看,首先，来看没有new的情况，
```
name = 'this1';
function foo(){
    this.name = 'this2';
}
console.log(this.name);             //'this1'
foo();
console.log(this.name);             //'this2'
```

&ensp;&ensp;&ensp;&ensp;接下来，是使用new的情况，
```
name = 'this1';
    function foo(){
    this.name = 'this2';
}
console.log(this.name);             //'this1'
new foo();
//使用new之后，this会变成一个新的值，和global脱离关系
console.log(this.name);             //'this1'
console.log(new foo().name);        //'this2'
```

&ensp;&ensp;&ensp;&ensp;在函数里面的this的指向，是函数执行的时候的确定的，纯粹的函数调用，this===window，我们来看下面这个例子，
```
function foo(){
    var name = 'this';
    console.log(this.name);         //undefined
    console.log(this);              //Window
}
foo();
```

&ensp;&ensp;&ensp;&ensp;如果在函数中使用了严格模式，那么this就会指向undefined
```
function test() {
       "use strict";
       this.foo = "foo";
     }
test();  //Uncaught TypeError: Cannot set property 'foo' of undefined 
```

&ensp;&ensp;&ensp;&ensp;在函数中还有一种情况是作为构造函数调用this，有显示返回和隐式返回两种情况。如果被调用的函数没有显式的 return 表达式，则隐式的会返回 this对象，也就是新创建的对象。下面是隐式返回的代码，显示返回的情况在下文“return this”会有详细的例子。
```
function Foo(){
    this.a = 9;
} 
Foo.prototype.test = function() {
        console.log(this.a);
    };
var test = new Foo();
console.log(test.a);                    //9
```

&ensp;&ensp;&ensp;&ensp;关于函数中的this，还有一个比较特殊的情况，就是ES6中新增的箭头函数,this在箭头函数中对象的指向是固定的，是定义时所在的对象，并不是使用时所在的对象，我们来看段比较熟悉的代码，在setTimeout中使用this，
```
function foo(){
    setTimeout(()=>{
        console.log(this.id)
        },1000)
}
var id = 1;
foo.call({id:2});                   //2
```

&ensp;&ensp;&ensp;&ensp;在普通函数中，该函数执行时this会指向全局变量，输出1，箭头函数中的this指向定义时指向的对象，输出2。
### 3.对象 this
&ensp;&ensp;&ensp;&ensp;在一个对象中，this一般指向这个对象本身，我们可以用this来指代对象中的其他属性，使用很简单，我们来看一个我们经常使用的代码。
```
var object = {
    name: 'Xiawei',
    fun: function(){
        console.log(this.name);
    }  
}
object.fun();               //Xiawei
```

### 4.call/apply this
&ensp;&ensp;&ensp;&ensp;call和apply会改变this的指向，它指向call/apply的第一个参数，call/apply有什么作用呢，大家一定不会对下面的代码陌生
```
var a = {
    name:"this",
    fun:function(){
        console.log(this.name);
    }
}
var b = a.fun;
b();                      //undefined
```

&ensp;&ensp;&ensp;&ensp;我们期望的b的输出应该是'this',但是它输出'undefined',这是因为this指向的是全局对象window，我们用call/apply来对这段代码稍微改动一下
```
var a = {
    name:"this",
    fun:function(){
        console.log(this.name);
    }
}
var b = a.fun;
b.call(a);              //'this'    
```

&ensp;&ensp;&ensp;&ensp;使用call之后，this可以指向a，apply的使用与call类似(call和aplly的不同在于，有多个参数时，apply的第二个参数必须是一个数组)；当call/apply参数为空时，this默认指向全局对象。
### 5.bind this
&ensp;&ensp;&ensp;&ensp;bind的用法与call/apply相似,this指向bind中的参数
### 6.return this
&ensp;&ensp;&ensp;&ensp;当this遇到return时，情况又会是什么样子的呢，我们还是通过例子来看问题，
```
function foo(){
    this.name = 'this';
    return that;
}
var bar = new foo;
console.log(bar.name);                  //'this'
```

```
function foo(){
    this.name = 'this';
    return undefined;                   
}
var bar = new foo;
console.log(bar);                       //foo {name: "this"}
console.log(bar.name);                  //'this'
```

```
function foo(){
    this.name = 'this';
    return {};
}
var bar = new foo;
console.log(bar.name);                  //undefined
```

```
function foo(){
    this.name = 'this';
    return {};
}
var bar = new foo;
console.log(bar.name);                  //undefined
```

&ensp;&ensp;&ensp;&ensp;从上面例子中，我们可以看到，返回的是undefined，this仍然可以指向对象本身，如果返回的是一个空对象，this便指向undefined。
### 7.严格模式 this
&ensp;&ensp;&ensp;&ensp;严格模式下的this不是默认指向window或对象本身，而是指向undefined，我们来看下面这段代码
```
function foo(){
    'use strict'
    var name = 'this';
    console.log(this.name);
}
foo();        //Uncaught TypeError: Cannot read property 'name' of undefined(…)
```
### 8.prototype this
&ensp;&ensp;&ensp;&ensp;原型也是JavaScript中常用到的，当用new操作符调用函数的时候，我们便能通过this访问原型链中的对象属性了，我们回顾一下之前“函数 this”中的一段代码，
```
function Foo(){
    this.a = 9;
} 
Foo.prototype.test = function() {
        console.log(this.a);
    };
var test = new Foo();
console.log(test.a);                    //9
```

&ensp;&ensp;&ensp;&ensp;这里我们一起来回顾一下原型的特点，当我们为函数创建多个实例的时候，实例会共享原型链中的值，如果是复杂对象类型，改变其中一个实例属性的值，另外的实例属性值也会发生相应的变化。

### 几点注意
&ensp;&ensp;&ensp;&ensp;如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window(浏览器中)，我们来看一个例子
```
var name = 'window'
function foo(){
    age = '23';
    console.log(this.name);
}
foo();              //'window'
```

&ensp;&ensp;&ensp;&ensp;如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象，我们再来看一个例子
```
var name = 'window'
function foo(){
    name = 'Xiawei'
    age = '23';
    console.log(this.name);
}
foo();              //'Xiawei'
```

&ensp;&ensp;&ensp;&ensp;如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象,我们同样通过例子来理解
```
var object = {
    a:0,
    b:{
        fun:function(){
            console.log(this.a);
        }
    }
}
object.b.fun();          //undefined
```

&ensp;&ensp;&ensp;&ensp;尽管object中有变量a，但是b中的this还是只能指向b，无法获取object中的a。
### 最后的话
&ensp;&ensp;&ensp;&ensp;JavaScrpt中关于this的使用有很多需要注意的地方（有很多坑~），本篇博文只是博主的一些使用心得，希望能对大家有所帮助，如果有新的发现，博主会完善本篇博文，谢谢~

&ensp;&ensp;&ensp;&ensp;
&ensp;&ensp;&ensp;&ensp;
## 参考文章
[JavaScript中的this陷阱的最全收集--没有之一](https://segmentfault.com/a/1190000002640298#articleHeader4)




