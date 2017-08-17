<!-- blog show -->
<template>
<div class="blog">
  <link rel="stylesheet" href="../../../static/github-markdown.css">
  	<div class="text">
	  	<img class="img" src="../../assets/images/flower23.jpg" alt="background">
		<div class="title" ><h1>{{title}}</h1></div>
		<div class="type">{{type}}</div>
		<div class="content" v-html='content'></div>
		<!-- <div class="md">{{md}}</div> -->
		 <div class="date">{{formedData}}</div>
	 </div>
</div>
</template>
<script type="text/javascript">
	import {markdownEditor} from 'vue-simplemde'
	var dateFormat = require('dateformat')
	import 'github-markdown-css'
	export default{
		props:['title','type','id','content','md','date'],
		
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
		

	}
</script>

<style lang="less" scoped>
	
	//title
	.img{
		position: absolute;
		z-index:-1;
		left:-5%;
		opacity:1;
		width:100%;
		height:100%;
	}
	.text{
		margin:10px;
		z-index:2;
		.title{
			width:280px;
			margin:0 auto;
			text-align:center;
			vertical-align:middle;
			padding:0.1px 0px;
			
			border-radius:30px;
			z-index:2;
			
			
		}
		.title:before{
			
			 position: absolute;
			 content: "";
			 width:300px;
			 height:80px;
			 top: 10px;
			 left:32%;
			 border-radius:30px;
			 z-index:-1;
			
			background:url(../../assets/images/flow.jpg) ;
		}
		.content{
			margin:20px;
			z-index:2;
			
		}
		.type{
			position: relative;
			left:80%;
			font-family:Times New Roman;
			font-size:18px;
			margin:10px;
			z-index:2;
		}
		.date{
			position: relative;
			top:20px;
			left:80%;
			font-size:18px;
			font-color:black;
			z-index:2;
			h4{
				color:black;
			}
		}
	}
</style>