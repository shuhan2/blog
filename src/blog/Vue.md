# Vue.js指令
    Vue.js是一套构建用户界面的渐进式框架，允许采用简洁的模板语法来声明式的将数据渲染进
 DOM，最简单使用Vue框架的例子是使用 JSFiddle Hello World 例子，代码很简单
    HTML代码
    '''
    <div id="app">
    {{ message }}
    </div>
    '''
    JavaScript代码
    '''
    var app = new Vue({
        el: '#app',
        data: {
        message: 'Hello Vue!'
        }
    })
    '''
    Result
    ![Vue]("../assets/images/Vue.jpg")
    Vue.js中，元素都是响应式的，下面我们看看Vue中一些常用的指令
### v-text
    操作元素中的纯文本，快件方式是两个大括号'{{}}'，看一个简单的例子了解一下其用法
    '''
    <div id = "app">    {{title}}   </div>
    //等同于下面的代码
    <div id = "app">    v-text = "title"   </div>
    '''
### v-html
    操作元素中的HTML元素，v-text会将元素当初纯文本输出，v-html会将元素当初HTML标签
解析后输出，来其用法
    '''
    <div v-html="html"></div>
    '''
    有一点需要注意，v-html不能用在用户提交的内容上，因为在网页上动态渲染HTML容易遭受攻
击，比较危险。
### v-show
    根据条件渲染元素
    '''
    <div v-show = "true">Work hard</div>
    '''
    该指令是切换元素的CSS中的display属性，该元素会一直保存在DOM中。
### v-if




