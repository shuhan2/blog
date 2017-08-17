<template>
	<div class="container">
	<!-- <img class="img" src="../../assets/images/flower13.png" alt="background"> -->
    <link rel="stylesheet" href="../../../static/github-markdown.css">
  	<div class="text">
	  	<!-- -->
	  	<!-- <img class="img" src="../../assets/images/flower21.jpg" alt="background"> -->
	  	<div class="type" >{{type}}
	  		
	  	</div>
		<div class="title" >{{title}}
		<img class="img" src="../../assets/images/mu.jpg" alt="background"></div>
		
		
		 <div class="date"><a href="javascript:void(0)"><h2>{{formedData}}</h2></a></div>
	 </div>
</div>
</template>
<script type="text/javascript">
	import {markdownEditor} from 'vue-simplemde'
	var dateFormat = require('dateformat')
	import 'github-markdown-css'
	export default{
		props:['title','type','id','date'],
		
		components:{
			markdownEditor
		},
		
		computed:{
			simplemde(){
				//$refs 把父组件的传递给子组件，减少获取dom节点的消耗
				 return this.$refs.markdownEditor.simplemde
			},
			 formedData () {
		      	 return dateFormat(this.date, 'yyyy-mm-dd')
		    }
		},
		methods:{
			//fetchData,
	      		fetchData:function(title){
	      			//this
	      			var self = this;
	      			fetch('/api/blog/getBlog/'+title)
	      			.then(function(res){

	      				return res.json();
	      			})
	      			.then(function(json){
	      				console.log(json);
	      				// self.items = json;
	      				
	      			})
	      			.catch(e => console.log("error", e))
	      		},
		}
		

	}
</script>
<style lang="less" scoped>
	.container{
		position: relative;
		width:100%;
	}
	//title
	.text{
		margin:10px;
		z-index:2;
		padding:0.1px 0px;
		.title{
			width:300px;
			position: relative;
			font-size:36px;
			text-align:center;
			vertical-align:middle;
			padding:0.1px 0px;
			
			text-align:center;
			border-radius:16px;
			z-index:2;
			img{
				position: absolute;
				display:inline;
				opacity:0.5;
				width:260px;
				height:100%;
				left:8%;
				border-radius:10px;
			}
			
		}
		
		.title:hover{
			cursor: pointer;
		}
		
		.type{
			position: relative;
			left:35px;
			font-family:Times New Roman;
			font-size:18px;
			margin:10px;
			z-index:2;
			
		}
		.date{
			position: relative;
			
			left:70%;
			font-size:16px;
			font-color:black;
			z-index:2;
		}
	}
</style>