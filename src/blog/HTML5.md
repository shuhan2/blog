<!-- #HTML5新增属性 -->
&ensp;&ensp;&ensp;&ensp;HTML5是HTML最新修订的版本，于2014年由W3C制定发布，广义上HTML5指的是包括HTML、CSS和
JavaScript在内的一套技术组合。由于它由官方推出，它有统一的网络标准，可以在不同的浏览器上使用，增强了语言的语义化，可以更好地阅读，因为加入了标签video和audio，也使得站点可以有更多的多媒体元素，canvas标签的引入也使得它可以很好的替代Flash和Silverlight，HTML5目前被大量地用于移动应用程序和游戏中。但它也有一些不足，其中最主要的就是安全和浏览器兼容问题，IE9以下的浏览器全军覆没。
&ensp;&ensp;&ensp;&ensp;HTML5结合语言的发展，新增了一些元素，也删除了一些元素，本文主要介绍新增加的元素。
### 1.article
&ensp;&ensp;&ensp;&ensp;定义外部独立的内容，它可以来自于论坛帖子或博客文章
### 2.aside
&ensp;&ensp;&ensp;&ensp;定义article以外的内容，它的内容和article相关
### 3.audio
&ensp;&ensp;&ensp;&ensp;定义音频内容,它可以支持的音频格式有MP3/ogg/Wav
```
<audio controls>
    <source src="horse.ogg" >
</audio>
```

### 4.canvas
&ensp;&ensp;&ensp;&ensp;定义自定义图形，它只是图形容器，还需通过脚本来绘制图形
```
<canvas id="canvas"></canvas>
<script type="text/javascript">
    var canvas=document.getElementById('canvas');
    var ctx=canvas.getContext('2d');
    ctx.fillStyle = '#FF0000';            //red
    ctx.fillRect(0,0,80,100);           //rectangle
</script>
```

&ensp;&ensp;&ensp;&ensp;这段代码中显示的是一个红色的矩形
### 5.command
&ensp;&ensp;&ensp;&ensp;定义命令按钮，比如单选按钮、复选框或按钮。
```
<command type = "command", onclick = cut()" label = "cut">
```

&ensp;&ensp;&ensp;&ensp;需要注意的是，目前主流浏览器除了IE9都不支持command~
### 6.datalist
&ensp;&ensp;&ensp;&ensp;标签规定了 input 元素可能的选项列表，与 input元素配合使用，可以制作出输入值的下拉列表。
### 7.embed
&ensp;&ensp;&ensp;&ensp;定义一个容器，用来嵌入外部应用或者互动程序（插件）。
### 8.figure
&ensp;&ensp;&ensp;&ensp;定义独立的流内容（图像、图表、照片、代码等等）
```
<figure>
    <img src="figure.jpg" alt="figure" width="288" height="208">
</figure>
```
### 9.figcaption
&ensp;&ensp;&ensp;&ensp;定义figure元素的标题，应该被置于figure元素的第一个或最后一个子元素的位置。
```
<figure><figcaption>PRC</figcaption><p>The People's Republic of China was born in 1949...</p></figure>
```
### 10.footer
&ensp;&ensp;&ensp;&ensp;定义页脚，一般而言，它会包含作者的姓名，文章的创作日期等基本信息。
### 11.header 
&ensp;&ensp;&ensp;&ensp;定义文档的头部区域，一般包括文档的标题等。
### *12.hgroup*
&ensp;&ensp;&ensp;&ensp;该元素已从规范中删除
### *13.keygen*
&ensp;&ensp;&ensp;&ensp;该元素已从规范中删除
### 14.mark
&ensp;&ensp;&ensp;&ensp;定义文本高亮
### 15.meter
&ensp;&ensp;&ensp;&ensp;定义度量衡,仅用于已知最大和最小值的度量
```
<meter value="82" min="0" max="10">8 out of 10</meter>
```

&ensp;&ensp;&ensp;&ensp;注：IE浏览器不支持该元素
### 16.nav
&ensp;&ensp;&ensp;&ensp;定义导航连接部分
```
<nav>
    <a href="/HTML5/">HTML</a> 
    <a href="/CSS/">CSS</a> 
</nav>
```
### 17.output
&ensp;&ensp;&ensp;&ensp;定义不同类型的输出。
&ensp;&ensp;&ensp;&ensp;注：IE浏览器不支持output元素。
### 18.progress
&ensp;&ensp;&ensp;&ensp;定义任务的进展
```
<progress value="22" max="100"></progress>
```
### 19.rupy
&ensp;&ensp;&ensp;&ensp;定义 ruby 注释（中文注音或字符）
### 20.rp
&ensp;&ensp;&ensp;&ensp;定义不支持 ruby 元素的浏览器所显示的内容,在rupy中使用
### 21.rt
&ensp;&ensp;&ensp;&ensp;包含字符的发音，字符在ruby注解中出现，用于描述东亚字符的发音。（这个元素始终在ruby 元素中使用）
### 22.section
&ensp;&ensp;&ensp;&ensp;定义文档中的节，比如章节、页眉、页脚或文档中的其他部分。
### 23.source
&ensp;&ensp;&ensp;&ensp;定义媒体内容的来源
```
<audio controls>
    <source src="horse.ogg" >
</audio>
```
### 24.summary
&ensp;&ensp;&ensp;&ensp;为 details元素定义一个可见的标题，
当用户点击标题时会显示出详细信息。
```
<details>
    <summary>Copyright 1999-2011.</summary>
    <p> - by Refsnes Data. All Rights Reserved.</p>
</details>
```
&ensp;&ensp;&ensp;&ensp;注：只有Chrome和 Safari 6支持summary元素。
### 25.time
&ensp;&ensp;&ensp;&ensp;定义时间日期。
```
<time datetime="2017-06-18">父亲节</time>
```
### 26.video
&ensp;&ensp;&ensp;&ensp;定义视频多媒体，支持的格式有MP4/WebM/Ogg
```
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
</video>
```
### 27.wbr
&ensp;&ensp;&ensp;&ensp;定义在文本中添加换行符
```
<p>我的爱好是 <wbr>阅读<wbr>和运动</p>
```

&ensp;&ensp;&ensp;&ensp;注:IE浏览器不支持该元素

&ensp;&ensp;&ensp;&ensp;以上就是HTML5新增的27个元素，包括已经废弃的元素，我们可以看到，HTML5新增的元素都有较好的语义化，大家可以根据自己的需要使用。
<!-- end2 -->