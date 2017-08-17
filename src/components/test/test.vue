<template>
<div class="container">
	<img src="../../assets/images/sky.jpg" alt="img">
	<div class="head">
	
	<h1>{{headTitle}}</h1>
	<h3>{{subtitle}}</h3>
	<h4>{{description}}</h4>
	
	<p class="navi">
	    <router-link to="/bloghome">Blog</router-link>
	    <router-link to="/Blog">Github</router-link>
	    <router-link to="/About">About</router-link>
	</p>
  <div class="footer">
  	 <router-link to="/contact">Contact</router-link>
     <router-link to="/login">Login</router-link>
  </div>

 
	</div>
	
	
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				headTitle:'淑涵的个人网站',
				subtitle:"ShuHan's Personal Website",
				description:'埋头努力，把未来交给时间'
			}
		}
	}
</script>
<style lang='less' scoped>
*{
	margin:0px;
	padding:0px;
}
.container{
	/*position: relative;*/
	text-align: center;
	width: 100%;
	height: 100%;
	/*background:url("../../assets/images/sky.jpg");*/
	/*img{
		
		width: 100%;
		height: 100%;
		opacity:0.4;
	}*/
}
img{
		position: fixed;
		display: block;
		width: 100%;
		height: 100%;
		opacity:0.4;
	}
/*标题栏*/
.head{

	position: absolute;
	width:420px;
	float: left;
	padding:30px 0px;
	left: 32%;
	top: 30%;
	display: inline-block;

	
	vertical-align:center;
	background-color:rgba(0,0,0,0.1);
	border-radius:50px;

	
}
h1{
	margin: 0px 10px 5px;
	vertical-align:middle;
	text-align:center;
	color:white;
	font-family:STSong ;
	letter-spacing:3px;
}	
h3{
	color:rgba(23,34,73,0.7);
	font-family:Times News Roman ;
	margin: 10px auto;
}
h4{
	margin:20px;
	
	/*text-align:center;*/
	color:rgba(103,64,73,0.7);
	font-family:Georgia ;
	background-color: rgba(103,64,73,0.2);
	border-radius: 5px;
	margin: 20px auto;
	width: 60%
}


.navi{
	color: white;
	background-color: white;
	width: 70%;
	margin: 10px auto;
	border-radius: 5px;
}
/*.navi:hover{
	background-color: red;
}*/
.footer{
	position:absolute;
	right:20px;
	color: white;
	/*background-color: rgba(12,23,12,0.3);*/
}
</style> 