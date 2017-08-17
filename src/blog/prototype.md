<!-- 原型和原型链 -->
&ensp;&ensp;&ensp;&ensp;JavaScript中没有传统的类继承模型，但是有强大的原型和原型链。
&ensp;&ensp;&ensp;&ensp;JavaScript中每创建一个对象，对象中都会预设一些属性，其中函数对象有一个属性就是原型对象prototype，普通对象没有原型对象prototype，有属性_proto_(这个才是真正起作用的)。
&ensp;&ensp;&ensp;&ensp;首先来看一个简单的函数对象的例子
```
function foo(){
    var a = 0;
    console.log(a);
}
console.log(foo.prototype);         //Object{}    //constructor:foo()
                                                  //__proto__:Object
```

&ensp;&ensp;&ensp;&ensp;foo.prototype就是foo的一个实例对象。就是在foo创建的时候,创建了一个它的实例对象并赋值给它的prototype。
```
function Person(name, age){
    this.name = name;
    this.age = age;
}
var hht = new Person("Hht", 27);
```

&ensp;&ensp;&ensp;&ensp;在上面的代码中，通过Person创建了hht对象，下面我们通过这个例子来分析prototype和__proto__。
    ![proto](https://github.com/shuhan2/images//proto1.jpg)
    ![proto](https://github.com/shuhan2/images//proto2.jpg)
&ensp;&ensp;&ensp;&ensp;通过上面的运行我们可以看到hht的原型是一个对象，接下来我们一起来看看下面的运行结果
```
console.log(hht.__proto__ == Person.prototype)              //true
console.log(hht.prototype)                                  //undefined
console.log(Person.prototype)                               //Object{}
console.log(Person.prototype.__proto__)                     //Object{}
console.log(Person.prototype.constructor === Person);       //true
console.log(Person.prototype.constructor);                  //函数本身  
```

&ensp;&ensp;&ensp;&ensp;对象hht的__proto__全等于函数Person的属性prototype，而函数Person属性prototype的__proto__是Object{}对象，prototype属性是函数对象特有的，如果不是函数对象，将不会有这样一个属性 ，这也是为什么代码第二行会输出undefined，constructor是函数的构造器，最后一行代码中，原型对象Person.prototype的constructor对应函数本身。
&ensp;&ensp;&ensp;&ensp;对于__proto__属性，很遗憾，IE浏览器是不支持这个属性的，它是指向原型对象的一个指针，它是内部不可见的，却是真正起作用的。关于它和prototyped的区别，最明显的就是prototype属性是函数特有的，而__proto__属性是每个对象都有的，大家可以在chrome控制台下多调试几次，更好的理解两个属性的不同。
&ensp;&ensp;&ensp;&ensp;关于原型和原型链，我们使用最多的是原型链继承，首先来看一个常见关于原型继承的例子。
```
function Foo(){
    this.name = 'Hht';
    this.age = 24;
}
foo.prototype.sex = 'f';
var test1 = new Foo();
var test2 = new Foo();
test1.sex;                               //'f'
test2.sex;                               //'f'
```

&ensp;&ensp;&ensp;&ensp;上面的代码中，我们在原型链上设置了sex属性，实例化之后仍然可以访问到，我们可以看到原型链继承的一个好处是，不用再构造函数里面定义属性，直接在原型链上设置，所有的实例都可以共享，接下来看一个稍微复杂一点的例子，
```
function Foo(name){
    this.name = name;
    this.age = 24;
}
Foo.prototype.myName = function(){
    return this.name;
}
Foo.prototype.myAge = function(){
    return this.age;
}
Foo.prototype.arr = [1,2,3];
var bar = new Foo();
var test = new Foo();
test.name = 'Qcj'
test.arr.push(4)
console.log(bar.myName('Hht'))                       //undefined
console.log(bar.myAge())                            //24
console.log(bar.arr())                              //[1,2,3,4]
```

&ensp;&ensp;&ensp;&ensp;从上面的代码中，我们可以看到原型链继承的liangge 个不足，一是不能向父类传参，二是因为来自原型对象的引用属性（复杂数据类型）都是共享的，修改了一个，另一个也会变化。下面我们再来看一个例子，
```
function Parent(){
    this.name = 'Whg'
}
function Child(){
    this.age = 23;
}
Child.prototype = new Parent();
var foo = new Child();
function Brother(){
    this.sex = 'f';
}
Brother.prototype = new Child();
var bar = new Brother();
console.log(foo.age);                   //23
console.log(bar.name);                  //'Whg'
```

&ensp;&ensp;&ensp;&ensp;上面的原型链中，原型与实例的关系是怎样的呢，我们借助instanceof来简单看看
```
console.log(bar instanceof Brother)                 //true
console.log(bar instanceof Object)                  //true
console.log(foo instanceof Brother)                 //false
```
&ensp;&ensp;&ensp;&ensp;最后我们来总结一下原型继承的优点与缺点，优点是实现简单，只需在原型链上设置属性即可，缺点有两个，引用共享和超类型无法传参。这些不足在其他的继承方法中有改进，大家可以根据自己的需要使用原型继承。




    


