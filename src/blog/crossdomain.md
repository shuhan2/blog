<!-- #跨域问题解决方法 -->
<!-- ### 跨域情形 -->
&ensp;&ensp;&ensp;&ensp;JavaScript中，出于安全着想，有一个同源策略（“Same-Origin Policy”），就是只能访问同一域下的内容，不能跨域访问。只要协议、域名、端口有任何一个不同，都被当作是不同的域，下面来看几个例子，更清楚的了解什么是跨域。

| url | result | resaon|
| ----| ------ | ------|
|http://www.a.com/a.js | 允许通信 | 在同一个域下|
|http://www.a.com/b.js |      
|http://www.a.com/d/a.js | 允许通信 | 在同一个域下，不同文件夹|
|http://www.a.com/script/b.js|        
|http://www.a.com:8000/a.js　| 不允许通信 | 同一域名，不同端口|
|http://www.a.com/b.js   |    
|http://www.cnblogs.com/a.js | 不允许通信  | 不同域名|
|http://www.a.com/b.js  |     
|http://www.a.com/a.js   |     不允许通信  | 同一域名，不同二级域名|
|http://a.com/b.js  |     

&ensp;&ensp;&ensp;&ensp;但在实际的开发和使用过程中，我们经常需要跨域来访问数据，这个时候应该怎么办呢，我们一起来看看几种常用的跨域解决方法。
### 跨域解决方法
##### 一.CORS跨域
&ensp;&ensp;&ensp;&ensp;对于协议和端口的不用，只能通过服务器端来解决，CORS是服务端的跨域解决方法，主要措施是服务器在响应头中设置相应的选项（Access-Control-Allow-Origin），浏览器如果支持这种方法的话就会将这种跨站资源请求视为合法，进而获取资源。CORS是一个W3C标准，全称是"跨域资源共享",它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。需压注意的是，CORS请求默认不发送Cookie和HTTP认证信息。
&ensp;&ensp;&ensp;&ensp;CORS请求有简单请求和非简单请求两种，二者的区别在于有无预检请求（非简单请求需发送预检请求），简单请求需满足以下条件，
(1)请求为GET,POST,HEAD中的一种
(2)HTTP的头信息只有Accept,Accept-Language,Content-Language,Last-Event-ID
Content-Type(只能取application/x-www-form-urlencoded、multipart/form-data、text/plain)这几种。
&ensp;&ensp;&ensp;&ensp;对于简单请求，浏览器可以直接发出CORS请求，在HTTP的头信息增加一个Origin字段。
&ensp;&ensp;&ensp;&ensp;对于非简单请求，在发送CORS请求之前，还需有一个预检请求，
CORS服务端对预检请求处理，并对Response Header添加验证字段，客户端接受到预检请求的返回值进行一次请求预判断，验证通过后，再发送跨域请求，预检请求主要是确认网页所在的域是否在服务器的许可名单中，以及可以使用哪些字段。

##### 二.JSONP跨域
&ensp;&ensp;&ensp;&ensp;大家在开发一个项目通过Ajax跨域从后台取数据的时候，有没有提示你没有权限呢？这个时候可以使用JSONP来解决这个问题，JSONP是资料格式JSON的一种“使用模式”，可以让网页从别的网域要资料，我们直接通过Ajax来跨域取数据是不可以的，但我们可以插入脚本文件，"script"标签的src并不被同源策略限制，JSONP利用的正是这个特性，它由由回调函数和数据两部分组成，我们来看一个简单的JSONP例子
```
<script type="text/javascript">
   function getData(data){
     console.log(data.name);
   } 
</script>
<script src="http://localhost:8000/data.js">
```

data.js
```
 getData({
    Name: "Xia Wei",
    "Age": "23"
});
```

&ensp;&ensp;&ensp;&ensp;与CORS相比，JSONP相对比较传统，在一些比较古老的浏览器中也可以运行，但它只支持GET请求而不支持POST等其它类型的HTTP请求。
##### 三.document.domain跨域
&ensp;&ensp;&ensp;&ensp;document.domain用于获取/设置当前文档的原始域部分，同源策略（IE有两个例外，这里不展开讨论）一是不能通过Ajax去获得不同源中的数据，二是不同的框架中中不能通过js交互数据。脚本可以将 document.domain的值设置其当前域或其当前域的超级域，该方法主要解决主域相同而子域不同的情景，我们来看一下简单的例子。
```
// 对于文档 www.example.xxx/good.html,
// 以下脚本会关闭窗口
var badDomain = "www.example.xxx";
if (document.domain == badDomain)
window.close(); // 这只是一个样例 - window.close()有时候会失效
```

```
// 对于URI http://developer.mozilla.org/en/docs/DOM 
// 以下设置会把变量domain设定为string "developer.mozilla.org"
var domain = document.domain;
```

&ensp;&ensp;&ensp;&ensp;如果当前文档的域无法识别，那么domain属性会返回null。
&ensp;&ensp;&ensp;&ensp;document.domain用在主域相同子域不同的情况。
##### 四.window.name跨域
&ensp;&ensp;&ensp;&ensp;Window.name用于获取/设置窗口的名称，首先我们明确一点，在一个标签里面跳转网页，window.name是不会改变的，以这一点为基础，我们是不是有想到关于跨域的方法呢，首先在某个网页创建一个页面，将数据通过iframe（可以在网页中创建内联框架）的url来获取服务器数据，并监听该页面，获取window.name的值~我们来动手试一试
```
function domainData(url, fn){
  var flag = true;
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  var loadfn = function(){
    if(flag){
      iframe.contentWindow.location = 'http://a.com/null.html](http://a.com/null.html';
      isFirst = false;
    } else {
      fn(iframe.contentWindow.name);
      //destroy 
      iframe.contentWindow.document.write('');
      iframe.contentWindow.close();
      document.body.removeChild(iframe);
      iframe.src = '';
      iframe = null;
    };
};
iframe.src = url;
if(iframe.attachEvent){
  iframe.attachEvent('onload', loadfn);
} else {
iframe.onload = loadfn;
}
document.body.appendChild(iframe);
}
```

&ensp;&ensp;&ensp;&ensp;这种方法与 document.domain方法相比，放宽了域名后缀要相同的限制。
##### 五.postMessage跨域
&ensp;&ensp;&ensp;&ensp;postMessage是HTML5新引进的，这个方法很年轻，但是很强大，它在协议端口和主域相同时才能使用，我们通过例子来了解一下，
```
var data = null;
//IE下为attachEvent，这里不详细写
window.addEventListener('message', function(e){
    if(e.origin != 'http://example.com:8080')
        return;
    data = e.data;
    e.source.postMessage('Work Hard!', '*');
}，false);
```
&ensp;&ensp;&ensp;&ensp; postMessage接收两个参数，data(要传递的数据)和origin(字符串参数，指明目标窗口的源) 

## 参考文章
[详解js跨域问题](https://segmentfault.com/a/1190000000718840)
<!-- end -->



