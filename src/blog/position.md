<!-- #position -->
&ensp;&ensp;&ensp;&ensp;position是CSS中一个常用属性，有四个可选值，static，relative，absolute，
fixed，我们来详细分析一下这四个值的特点。
### static
&ensp;&ensp;&ensp;&ensp;static是position的默认值，不会被特殊定位，不脱离文档流，我们看一个简单
的效果图
    ！[flex](../assets/images/static1.jpg)
### relative
&ensp;&ensp;relative意为相对定位，它的表现和static一样，不同之处在于它可以添加一些其
他的属性,left,top，right，bottom表示元素偏离正常文档流的左边边距，上方边距，右边距，底边距（static不能设置这四个属性），同样通过一个效果图来看它的效果。
    ！[flex](../assets/images/relative.jpg)
&ensp;&ensp;&ensp;&ensp;relative元素相对于正常文档流左偏离了20px,上偏离了20px。
### absolute
&ensp;&ensp;&ensp;&ensp;absolute意为绝对定位，它会脱离正常的文档流，相对元素的祖先元素偏离，有很
多陷阱，首先还是万年不变的效果图 大家可以和上面的relative元素对比一下~
    ！[flex](../assets/images/absolute.jpg)
&ensp;&ensp;absolute常用的情况是父级元素设置为realtive，子元素设置为absolute,还要注
意的一点是absolute与float不能同时使用。
### fixed
&ensp;&ensp;&ensp;&ensp;fixed想效果与absolute类似，同样会偏离正常文档流，区别在于absolute是相对
于父元素偏离，fixed是相对于视窗定位。
### sticky
&ensp;&ensp;&ensp;&ensp;粘性定位，它的兼容性不太好（相当惨淡），

     