<template>
	<div class="container">
	<img class="background" src="../../assets/images/6.jpg" alt="img">
	<div class="return">
		<router-link class="back" to="/home">Home主页
		<img class="img" src="../../assets/images/mu.jpg" alt="img">
		</router-link>
		<router-link class="back" to="/bloghome">博客主页
		<img class="img" src="../../assets/images/mu.jpg" alt="img"></router-link>
		
		<router-link  class="back" to="/operate">管理博客
		<img class="img" src="../../assets/images/mu.jpg" alt="img"></router-link>
	</div>
	 <div class="toolbar">
      <div class="title">
        标&nbsp;&nbsp;题：<input type="text" ref="title" v-model="title" required>
      </div>
      
      <div class="type">          
        分&nbsp;&nbsp;类：
       <select v-model="type" lazy required>
          <option v-for="p in blogclass" :value="p.type">{{p.class}}</option>
          <option>JavaScript</option>
          <option>CSS</option>
          <option>HTML</option>
          <option>ES6</option>
          <option>Vue</option>
          <option>Others</option>
        </select>
      </div>

      <div class="date">
        时&nbsp;&nbsp;&nbsp;&nbsp;间：<input type="date" v-model="date">
      </div>
      </div>
 		  <a href="javascript:;" class="a-upload">
 		 <input class="add" type="file" @change="addblog">
 		 </a>
		 <button class="save"><a href="javascript:void(0)" ref="down" @focus='save'>保存</a></button>
      <button @click="promise">发布</button>
      <!-- 显示区 添加配置-->
 		 <markdown-editor v-model="content" ref="markdownEditor" preview-class="markdown-body" :configs="configs"></markdown-editor>
	</div>
</template>
<script type="text/javascript">
	import { markdownEditor } from 'vue-simplemde'
	var dateFormat = require('dateformat')
	export default{
		//data :blog(content,title,class,date)
		data: function () {
			return {
				content:'',
				title: '',
				type:'Javascript',
				blogclass: [],
				date: dateFormat(new Date(), 'yyyy-mm-dd'),
				configs: {
		        	status: false, 
		        	initialValue: '', 
		        	promptURLs: true,
		        	renderingConfig: {
		          		codeSyntaxHighlighting: true 
		        	}
		        }
			}
		},
		
		computed: {
	      simplemde () {
	        return this.$refs.markdownEditor.simplemde
	      }
	    },
	    components: {
	      	markdownEditor
	    },
	    created:function(){
	    	//get token
			var token = window.sessionStorage.getItem('token')
	     	//
	      	if (token === null) {
		        window.sessionStorage.clear()
		        alert('请先登录！')
		       //return login
		        window.location = '/#/login'
		      }
		      this.getBlogClass()

		      if (this.$route.query.id) {
		      	  
		        	this.fetchData(this.$route.query.id)
		        	console.log(this.$route.query.id)
		        }
		        console.log(this.$route.query.id)
	    },
	    methods:{
	    	//add
	    	addblog:function(e){
				let file = e.target.files[0]
		        var reader = new FileReader()
		        let self = this
		        if (file.name.split('.')[1] === 'md') {
		          reader.onload = function () {
		            
			            self.content = this.result
			            console.log(self.content);
			            self.title = file.name.split('.')[0]
		          }
		          reader.readAsText(file)
		        }
			} ,
			//save 文件名
			save:function(){
				if (this.content) {
		          	var blob = new Blob([this.content])
		          	this.$refs.down.href = window.URL.createObjectURL(blob)
		         	this.$refs.down.download = this.title + '.md'
	       		 }
	   		 } ,
	   		 //fetchdata(id)
	   		 fetchData:function(id){
	   		 	var self = this
	   		 	var url = '/api/blog/getContent/' + id;
	   		 	fetch(url).then(function(res){
	   		 		if (res.info == 'fail') {
	   		 			alert('fail');
	   		 		}else{
	   		 			
	   		 			return res.json();
	   		 		}
	   		 	}).then(function(data){
	   		 		self.content = data.md;

	   		 		self.title = data.title;
	   		 		console.log(title);
	   		 		self.type = data.type;
	   		 		// self.date = new Date();
	   		 	})
	   		 },
	   		 //getBlogClass
	   		 getBlogClass:function(){
	   		 	var self = this;
	   		 	// 
	   		 	var url = '/api/blog/blogclass';
	   		 	fetch(url).then(function(res){
	   		 		return res.json();
	   		 	}).then(function(json){
	   		 		 json.push({
				            class: 'CSS',
				            type: 'CSS'
				          })
			   		 self.blogclass = json;
	   		 	}).catch(function(err){
	   		 		console.log('fail',err)
	   		 	})
	   		 },
	   		 //promise发布
	   		 promise:function(){
	   		 	// blog
	   		 	let blog = {
	          	title: this.title,
	         	date:this.date,
	          	md: this.content,
	          	content: this.simplemde.markdown(this.content),
	          	type: this.type,

	        	}
	        	//title content type
	        	 if (this.title === '') {
			          this.$refs.title.focus()
			          console.log(this.type)
			          alert('博客标题不能为空')
			          return
			        } else if (this.type === '') {
			          alert('博客类型不能为空')
			          return
			        } else if (this.content === '') {
			          alert('博客内容不能为空')
			          return
			        }
			        //获取路由参数
			        if (this.$route.query.id) {
			          blog._id = this.$route.query.id
			        }
		        //id
		        console.log(this.$route.query)
		      
		      // confirm
		           if (confirm('确定发布？')) {
		           	//sessionStorage
	           var token = window.sessionStorage.getItem('token')
	           console.log(token);
	        	//fetch
	           fetch('/api/blog/add', {
		            method: 'POST',
		            headers: {
		              'Content-Type': 'application/json',
		          
		               'x-access-token': token
		            },
		            body: JSON.stringify(blog)
		          })
		        .then(function (res) {
		           
		            return res.json()
		          })
		        .then(function (json) {
		           
			         if (json.flag) {
			        
			         	console.dir(blog)
			            alert('发布成功！')
			            console.log(blog.content===blog.md)
			              // window.location = '/#/blog/All'
			         } 
			         else if(json.flag===false&&json.message === 'token valid'){
			              window.sessionStorage.clear()
			              alert('请您先登录！')
			              window.location = '/#/login'
			         }
			         else{
			         	 window.sessionStorage.clear()
			              alert('发布失败！')
			              
			         }
		          })
		        .catch(function (ex) {
		            console.log('博客发布失败：', ex)
		          })
		        }
	   		 },
	   		 //fetchBlog
	   		 fetchData:function(id){
	   		 	var self = this;
	   		 	fetch('/api/blog/getBlogcontent/'+id)
	   		 	.then(function(res){
	   		 		if (res.info === 'fail') {
	   		 			alert(Fail);
	   		 			console.log('fail')
	   		 		}
	   		 		else{
	   		 			return res.json()
	   		 		}
	   		 	})
	   		 	.then(function(data){
	   		 		//
	   		 		self.content = data.md;
	   		 		self.title = data.title;
	   		 		self.type = data.type;
	   		 		// self.date = date;
	   		 	})
	   		 },
	}
	}
</script>
<style lang="less" scoped>

	*{
		margin:0px;
		padding:0px;
	}
	html,body{
		height:100%;
	}
	.container{
		width:100%;
		height:100%;
		margin:0px;
	}
	.background{
		position: absolute;
		width:100%;
		height:100%;
		z-index:-1;
		opacity:0.3;
	}
	.return{
		font-size:20px;
		display:flex;
		height:80px;

		justify-content:space-around;
		text-align:center;
		
		.back{
		font-size:20px;
		font-weight:STsong;
		
		position: relative;
		top:30px;
		left:50px;
			.img{
			clear: both;
			float:right;
			position: relative;
			left:-100px;
			top:-25px;
			border-radius:50px;
			width:110px;
			z-index:-1;
			}
		}
	}
	.title {
		margin:20px;
	}
	.type{
		margin:20px;
		select{
			width:100px;
		}
	}
	.date{
		margin:20px;
	}
	 
	.toolbar{
		margin:10px 0 20px;
		display:flex;
		justify-content:center;
		font-size:20px;
		.title{

			

		}
		.type{
			width:240px;
			
		}
		select{
			width:150px;
		}
	}
	//add

	.add{
		position:relative;
		margin:20px auto;
		margin-left:30%;

		font-size:22px;
	
	}
	//button
	button
	{
		font-size:22px;
	}

</style>