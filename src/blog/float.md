<!-- 浮动详解 -->
###浮动的使用
&ensp;&ensp;&ensp;&ensp;浮动是CSS中非常破坏性的应用，对于float的理解，我们可以联想word中文字悬浮图片周围的场景，在CSS中使用float，它会脱离文档流(这点和position：absolute有相似的效果），这个效果不仅会影响自己，还会影响周围的元素。我们先来看一个简单的例子，大致了解一下float的原理。
html代码
```
<img src="haom.jpg" alt="an image">人住高楼，有人在深沟，有人光万丈，有人一身锈，世人万千种，浮云莫去求，斯人若彩虹，遇上方知有。每个人都睁着眼睛，但不等于每个人都在看世界，许多人几乎不用自己的眼睛看，他们只听别人说，他们看到的世界永远是别人说的样子。人住高楼，有人在深沟，有人光万丈，有人一身锈，世人万千种，浮云莫去求，斯人若彩虹，遇上方知有。每个人都睁着眼睛，但不等于每个人都在看世界，许多人几乎不用自己的眼睛看，他们只听别人说，他们看到的世界永远是别人说的样子。漂泊的意义，大致就是为了有所选择。
```

CSS代码
```
body{
         width: 600px;
         height: 200px;
         text-align: center;
         margin: 0px auto;
         text-align;
}
img {
        float: right;
        width: 300px;
        height: 150px;
        margin: 0 0 1em 1em;
}   
```

效果图
![float](../assets/images/float.jpg)
## 浮动清除
&ensp;&ensp;&ensp;&ensp;以上的效果只是float的一个简单介绍，其实，float中有很多的陷阱，比如子元素使用float之后，元素的父元素无法撑开首先，我们来看一个效果图
![float](../assets/images/floatfa.jpg)
&ensp;&ensp;&ensp;&ensp;关于float使用之后所造成的很多效果都是我们不需要的，我们应该如何解决呢，下面，我们以上述代码为例子，来一起看看清除浮动的办法。
###1. 加空元素
&ensp;&ensp;&ensp;&ensp;在上述代码的基础上，在浮动元素后面加一个空的div元素，在其CSS中设置"clear:both"，便可以清除浮动，我们来看一下CSS代码和效果图
```
.father{
        border: 2px solid red;

}
.children1{
        border: 2px solid blue;
        float: left;
    }
.clear{
        clear: both;
    }
```
![floatclear1](../assets/images/floatclear1.jpg)

&ensp;&ensp;&ensp;&ensp;该方法优点在于代码简单，容易理解，但是增加了一个多余的元素，会增大内存。
### 2.父级div定义 height
&ensp;&ensp;&ensp;&ensp;定义父级元素的高度，也可以清除浮动，同样在上述例子的基础上修改
```
.father{
    border: 2px solid red;
    height: 22px;

}
.children1{
    border: 2px solid blue;
    float: left;
}
```
![floatclear2](../assets/images/floatclear2.jpg)
&ensp;&ensp;&ensp;&ensp;该方法实现起来也比较容易，但只能在知道height的情况下使用，适用性不强。
### 3.父级div定义伪元素:after和zoom 
&ensp;&ensp;&ensp;&ensp;该方法利用了CSS的伪类
```
.father{
    border: 2px solid red;
    zoom: 1;                /*for IE6,IE7*/
}
.father :after{
    clear:both;
    display:block;
    content: '';
    visibility:hidden;
}
.children1{
    border: 2px solid blue;
    float: left;
}
```
![floatclear2](../assets/images/floatclear2.jpg)
&ensp;&ensp;&ensp;&ensp;该方法缺点在于原理不太好理解，它的原理是利用:after和:before来在元素内部插入两个元素块，达到清除浮动的效果。其原理类似于"clear:both"方法，但不用添加新元素，所以比较受开发者青睐。
### 4.父级div定义 overflow:hidden/auto
&ensp;&ensp;&ensp;&ensp;给浮动元素的容器添加"overflow:hidden"或"overflow:auto"可以清除浮动,其原理是，添加了overflow属性之后，浮动元素又回到了容器层，把容器高度撑起，从而清除浮动，下面来看代码与效果图
```
.father{
        border: 2px solid red;
        zoom: 1;                /*for IE6,IE7*/
        overflow: hidden;
}
        
.children1{
        border: 2px solid blue;
        float: left;
}
```
![floatclear2](../assets/images/floatclear2.jpg)
 &ensp;&ensp;&ensp;&ensp;该方法实现起来也较容易，但其超出尺寸的会被隐藏，不能和position配合使用，有滚动条的时候也会出现一些问题，不推荐使用。
 &ensp;&ensp;&ensp;&ensp;这几种清除浮动的方法，大家可以根据自己的习惯有不同的选择，达到自己想要的效果。
<!--  -end -->
