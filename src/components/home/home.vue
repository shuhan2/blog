<!-- blog -->
<template>

<!-- <div> -->

	<div class="container">
	<!-- 背景图片 -->
		<img  class="background" src="../../assets/images/tree.jpg" alt="img">

		<div class="head">
			<img  class="flower15" src="../../assets/images/flower15.jpg" alt="img">
			
			<!-- title -->
			<h1>{{home}}</h1>
			<hr>
		</div>
	
		<div class="content">   
		<!-- <link rel="stylesheet" href="../../../assets/bootstrap/css/bootstrap.css">  -->
		<link rel="stylesheet" href="http://cdn.static.runoob.com/libs/bootstrap/3.3.7/css/bootstrap.min.css">  
		
	    <div class="col-md-3 col-sm-3" id="nav">
		 <!-- jsselect -->
		    <div class="jsdown">
	    	 	<div class="showj" @click="fetchType('JavaScript')">JavaScript</div> 
		         <div class="jsselect" >
		    		<option @click="fetchData('作用域')">作用域</option>
		    		<option @click="fetchData('闭包详解')">闭包详解</option>
		    		<option @click="fetchData('This详解')">This详解</option>
		    		<option @click="fetchData('原型和原型链')">原型和原型链</option> 
		 		 </div> 		
			</div>	        
			<!-- cssselect -->
	        <div class="cssdown">
	            <div class ="showc" @click="fetchType('CSS')">CSS</div>
		        <div class="cssselect" >
		    		<option @click="fetchData('浮动使用与清除')">Float</option>
		    		<option>CSS3</option>
		    		<option>布局</option>
		    		<option>Position</option>
		 		 </div>
	 		 </div>
	 		 <!-- html -->
	       
	        <!-- HTMLselect -->
	        <div class="htmldown">
	         	<div class="showh">HTML</div>
		        <div class="htmlselect" >
		    		<option>HTML5</option>
		    		
		 		 </div>
	 		 </div>
	 		  <!-- vueselect -->
	   		<div class="es6down">
	    		<div class="showe">ES6</div>
		         <div class="ES6select" >
		    		<option class="es6select" @click="fetchData('块作用域')">块作用域</option>
		    		
		 		 </div>
	 		 </div>
	        
	        <!-- vueselect -->
	        <div class="vuedown"> 
	        	<div class="showv">Vue</div>
		        <div class="Vueselect" >
		    		<option class="es6select" @click="">这里没有内容</option>
		    			
		 		 </div>
		 	</div>
				<!-- others -->
	        <div class="otherdown">
		         <div class="showo">Other</div>
		         <div class="Othersselect">
		    		<option class="Othersselect" @click="fetchData('跨域问题')">跨域问题解决方法</option>
		    	
		 		 </div>

	 		</div>
	 		<router-link to="/login">
	 		  <button class="operate" type="button" >管理博客</button>
	 		 </router-link>
	 		 <router-link to="/a">
	 		  <button class="main" type="button" >返回主页</button>
	 		 </router-link>
	 		 <button class="new" @click="fetchNew()">最新博文</button>
		</div>
		 	 <div id="toolbar" class="col-md-9 col-sm-9">
			     
			 	 <div v-for="item in items">
			        <blog :date='item.date' :title='item.title' :id='item._id' :type='item.type' 
			        :content = 'item.content'></blog>
			     </div>
			     <div  class="blogtype" v-for="project in projects" @click = "function(){fetchData(project.title);projects = '';}">
			     
			        <blogtype  :title='project.title' :id='project._id' :type='project.type' :date='project.date'>
			        	
			        </blogtype>
			        <!-- <img class="typeline" src="../../assets/images/flower21.jpg" alt="background">  -->
			        <hr>
			        
			     </div> 	 		
		 	 </div>
	     	<div class="roof">
			      <a href="javascript:scroll(0,0)">
			        <img id="totop" src="../../assets/images/top.jpg" alt="回到顶部">
			      </a>
		    </div>	
   	 	</div><!-- toolbar -->
 	
 	
  </div><!-- content -->

</div><!-- container -->
<!-- </div> -->
</template>
 
<script  type="text/javascript">
 
   import { markdownEditor } from 'vue-simplemde'
 	// var dateFormat = require('dateformat')
 	import blog from '@/components/home/blog'
 	import blogtype from '@/components/home/blogtype'
	export default{
		props: ['date', 'title', 'id', 'type','content'],


		data(){
			return {
				home:'淑涵的博客',
        		blogclass:[],
        		items: [],
        		projects:[],
        		configs:{
          			status: false, // 禁用底部状态栏
		          	initialValue: '', // 设置初始值
		          	promptURLs: true,
		         	renderingConfig: {
		            codeSyntaxHighlighting: true, // 开启代码高亮
		             highlightingTheme: 'github-markdown-css' // 自定义代码高亮主题
		          }
        		},
        		
			}
			},
		computed: {
			   simplemde () {
			      	return this.$refs.markdownEditor.simplemde
			      	}
	    	},
	    created(){
	    	//页面初始化，取数据
	    	 	this.fetchData('原型和原型链')
	    		$(window).scroll(function(){
				$('#totop').css('top', $(document).scrollTop());
					});
				 this.fetchData(this.$route.params.title);

				
		},
	    components: {
		      markdownEditor,
		      blog,
		      blogtype
		    },
		
		methods:{
				
				//fetchData,获取所有数据
	      		fetchData:function(title){
	      			//
	      			console.log('starts');
	      			var self = this;
	      			fetch('/api/blog/getBlog/'+title)
	      			.then(function(res){

	      				return res.json();
	      			})
	      			.then(function(json){
	      				console.log('seccess')
	      				console.log(json);
	      				self.items = json;
	      				
	      			})
	      			.catch(e => console.log("error", e))
	      		},
	      		
	      		fetchType:function(type){
	      			var self = this;
	      			fetch('/api/blog/getType/'+type)
	      			.then(function(res){
	      				console.log(res);
	      				return res.json();
	      			})
	      			.then(function(json){
	      				console.log(json);
	      				self.items = ''
	      				self.projects = json;
	      			})
	      			.catch(e => console.log("error", e))
	      		},
	      		fetchNew:function(){
	      			//this
	      			var self = this;
	      			fetch('/api/blog/getNew')
	      			.then(function(res){

	      				return res.json();
	      			})
	      			.then(function(json){
	      				console.log(json);
	      				self.items = json;
	      				self.projects = [];
	      				
	      			})
	      			.catch(e => console.log("error", e))
	      		},
	 
	   		
		}


	}
</script>
<style lang="less" scoped>
	
	*{
		margin:0;
		padding:0;
	}
	//背景图片
	.background{
		position: fixed;
		width:100% ;
		height:100%;
		left:10px;
		opacity:0.5;
		border-radius:20px;
	}
	
	
	.flower15{
		position:absolute;
		left:20px;
		top:50px;
		height:100px;
		weight:400px;
		border-radius:10px;
		background-colo:rgba(93,10,10,0.9);
	}
	h1{
		z-index:1;
		position: relative;
		font-family:STSong ;
		left:-5%;
		padding:10px;
		
		top:20px;
		color:rgba(202,72,42,0.8);
		
		border-radius:10px;
		
	} 
	hr{
		position: relative;
		color:black;
		background-color:black;
		height:1px;
		width:90%;
		top:55px;

		left:-20px;
	}
	.flower{
		position: relative;
		width:90%;
		height:20px;
	}
	.content{
	
		position: relative;
		top:50px;
		height:90%;
		
	}
	//nav
	#nav{
		
		div[class*="down"]{
			margin:30px;
			padding:20px 0px;
			text-align:center;
			font-size:20px;
			background:rgba(22,93,12,0.3);
			border-radius:10px;
			text-align:center;	
		}
		div[class*="select"] {
			position: relative;
			font-family:Times New Roman;
			font-size:20px;
			display:none;
			
			
		}
		div[class*="down"]:hover div[class*="select"]{
			display:block;
			
			cursor:cell;
			padding:10px 0;

			
		}
		div[class*="show"]:hover {
			
			cursor:pointer;
			background:rgba(53,1,10,0.3)
		}
		div[class*="select"] option:hover {
			
			background:#DBF19F;
			border-radius:10px;			
		}
	
	}

	//add
	.type{	
		select{
			position: relative;
			top:0;
			margin:2px 0px;
			height:30px;
		}
	}
	.sel{
		display:flex;
		justify-content:center;
		.add{
			position: relative;
			top:0;
			margin:0;
			left:100px;
			background-color:rgba(12,12,12,0.3);
		}

	}
	
	//operate
	.operate,.main,.new{
		position: relative;
		left:20px;
		font-size:20px;
		width:200px;
		height:50px;
		margin:10px 0;
		border-radius:30px;
		background:rgba(55,12,12,0.3);
	}
	
	.main{
		background:rgba(1085,52,36,0.3);
	}
	//addblog
	#toolbar{
		position: relative;
		top:30px;
		
		
	}
	.blogtype{
		hr{
			position: relative;
			left:40px;
			top:-10px;

		}
		
	}
	.typeline{
			transform:rotate(90deg);
			position: absolute;
			z-index:-1;
			left:30%;
			top:-20%;
			z-index:-2;
			width:60%;

		}
	#totop{
				position:absolute;
				left:-30px;
				width:50px;
				background-color:blue;
				
	}
	</style>