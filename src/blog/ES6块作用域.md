<!-- # ES6模块 -->
    ES6诞生于2015年，伴随着它的诞生，JavaScript也有了一些变革，有一个很重要的特性就是
模块的使用（在ES6以前，JavaScript并不支持模块的使用）。
    在ES6模块中，不管是否使用'use strict',默认情况都是在严格模式下执行，使用import和e
xport来输入输出,来看一个简单的模块引入和输出
    '''
    export {Nav} 
    '''
    '''
    import {name,age,sex} from '/file'
    '''
    下面来详细分析一下这两个指令
### export
    export规定模块的对外接口，模块是独立的文件，如果外部需要读取，就需要使用export定义
对外接口，
    '''
    export var name = 'Xia Wei';
    export var age = '23';
    export var sex = 'Male';
    '''
    上面代码通过export输出三个变量，还有另外一种写法，效果一样
    '''
    var name = 'Xia Wei';
    var age = '23';
    var sex = 'Male';
    export {name,age,sex};
    '''
    export除了输出变量，还可以输出组件，函数等，与输出变量的写法类似，但也需要注意一些
export的错误写法
    '''
    export 0;
    //error
    var name = 'Xia Wei';
    export name;
    '''
        上面写法的错误在于没有定义对外接口，下面是正确的写法
    '''
    export  var a = 0;
    //correct
    var name = 'Xia Wei';
    export {name};
    '''
        export还可以用as关键字重命名变量
    '''
    var name = 'Xia Wei';
    var age = '23';
    var sex = 'Male';
    export {name as argu1,
            age as argu2,
            sex as argu3};

### import
    import定义引入接口
    '''
    import {name,age,sex} from '/file'
    '''
    import有变量提升的效果，会提升到文件头部，import是静态执行，所以不能使用表达式和变
量，这些只有在运行时才能得到结果的语法结构。
    上面这段代码，

