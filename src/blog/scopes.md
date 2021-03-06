<!-- #作用域 -->
&ensp;&ensp;&ensp;&ensp;作用域是指代码执行时的上下文环境，JavaScript是一种词法作用域的编程语言，词法作用域由变量定义时所在的作用域决定最后的输出效果，当其处理代码时会保持其作用域不变（多数时候是这样）。
###函数作用域
&ensp;&ensp;&ensp;&ensp;在ES6问世以前，JavaScript的作用域只有全局作用域和函数作用域，其中函数作用域最为常见，首先，请考虑下面的代码：
```
//函数作用域
function foo(argument1) {
    // body...
    var argument2 = 2;
    //
    function bar(){
        //
    }
    //
    var argument3 = 3;
}
```

&ensp;&ensp;&ensp;&ensp;函数foo()作用域有argument1，argument2，argument3和bar四个标识符，这些标识符在foo()内部都是可以被访问的，在bar部也可以被访问（后面提到的闭包），在外部作用域（全局作用域）不能被访问，其中函数bar()也有自己的作用域，全局作用域包含foo一个标识符。
```
bar();          //Uncaught ReferenceError: bar is not defined(…)
console.log(argument1,argument2,argument3);         //Uncaught ReferenceError: argument1 is not defined
```

&ensp;&ensp;&ensp;&ensp;接下来，请思考这样一段代码
```
var argument = 2;
function foo(){
    var argument =3;
    console.log(argument);
}
//运行foo()
foo();                              //3
console.log(argument)               //?
```

&ensp;&ensp;&ensp;&ensp;最后输出的argument是3吗？其实最后输出的是2，如果没有第一行的全局声明，它会提示Uncaught ReferenceError: argument is not defined(…)
&ensp;&ensp;&ensp;&ensp;这段代码将函数foo()声明在全局作用域中，并不是一个特别好的方式，有一个改进的方法，将foo()
封装起来，类似一个模块；
```
var argument = 2;
(function foo(){
    var argument =3;
    console.log(argument);
})();                       //立即运行
console.log(argument)
```
&ensp;&ensp;&ensp;&ensp;尽管两段代码非常类似，运行结果也是一样的，但第二段代码中的函数foo()已经不是函数声明，而是一个函数表达式，第二段代码中foo被绑定在自身所在的作用域中，而不是第一种方式选择的全局作用域中。
注：区别函数表达式和函数声明最简单的方法是，如果关键词function出现在生命中的第一个词，那么就是函数声明（第一段代码），否则就是函数表达式（第二段代码）。

##块作用域
&ensp;&ensp;&ensp;&ensp;函数作用域是JavaScript最常见的作用域，随着JavaScript语言的发展，模块化编程逐渐成为一种趋势，块作用域也成为比较常见的作用域单元。块作用域的发展不得不归功于ES6的问世，它可以通过新增命令let和const实现。
&ensp;&ensp;&ensp;&ensp;let关键字是一种变量声明方式，它不存在变量提升的情况，如果在声明之前使用变量，系统会报错，这也意味着，一旦在代码中使用let关键词，这个区块从一开始就形成了封闭作用域，不能在声明之前使用，我们来看下面一段比较熟悉的代码，
```
for(let i =0;i<10;i++){
    console.log(i);
}
console.log(i);
```

&ensp;&ensp;&ensp;&ensp;我们只是将变量声明的关键词var换成了let，运行的结果就会是Uncaught ReferenceError: i is not defined(…)，除了let关键词，ES6新增的const关键词也可以实现块作用域，const声明的变量时独一无二的，是固定的常量，不能修改其值，同样来看一段简易的代码。
```
if(true){
    const b=1;
    b=2;
}
console.log(b);                         // Uncaught TypeError: Assignment to constant variable.(…)  
```

&ensp;&ensp;&ensp;&ensp;b是包含在if作用域中的常量，不能修改。
&ensp;&ensp;&ensp;&ensp;除了ES6中新增的let和const关键字，JavaScript中with和try/catch也可以创建块作用域，with不推荐使用，这里简单介绍一下它的用法。
```
var obj = {
    a:1,
    b:2
};
obj.a = 2 ; 
obj.b = 3;
//简单
with(obj){
    a = 3
    b = 4;
}
```

&ensp;&ensp;&ensp;&ensp;with会在运行时修改或创建新的作用域，产生欺骗的效果，不建议使用。（有同样缺点的还有eval，同样不推荐使用）
&ensp;&ensp;&ensp;&ensp;除了以上提到的，还有一种语句会创建块作用域，那就是try/catch，请思考下面的代码。
```
try {
  //需要捕获的代码块eg: addalert("bad call");
} catch (error) {
  console.log(error);
}
console.log(error);        // Uncaught ReferenceError: error is not defined(…) 
```

&ensp;&ensp;&ensp;&ensp;作用域以外无法捕捉到error。
###小结
&ensp;&ensp;&ensp;&ensp;词法作用域意味着变量的作用域是由其定义时的位置决定的，但在函数声明和变量声明时，都存在一个声明提升的现象，而块作用域没有这个特点，但块作用域不是函数作用域的替代或改进方案，开发者可以根据自己的需求选择不同的作用域，创造更优良的代码。
<!-- -end -->