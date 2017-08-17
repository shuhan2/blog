<!-- contact -->
<template>
<div class="container">
<img class="background" src="../../assets/images/cloud.jpg" alt="img">
	<h1 class="head">{{title}}</h1>
	<hr>
	<h3 class="title">Contact Information</h3>
	<hr>
	<img class="frame" src="../../assets/images/flower22.jpg" alt="frame">
	<h4>Email:&nbsp;&nbsp;2472520650@qq.com</h4>
	<hr>
	<h3 class="photo">Photo</h3>
</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				title:'淑涵的个人网站'
			}
		}
	}
</script>
<style lang='less' scoped>
*{
	border:0;
	margin: 0;
	padding: 0;
}
	.container{
		position: relative;
		width: 100%;
		height:688px;
		top: 0px;
	}
	.background{
		width: 100%;
		height:100%;
		position: absolute;
		left: 5px;
		top: 0px;
		opacity: 0.3;
		border-radius: 10px;
z-index: 0;

	}
	.head{
		position: relative;
		font-family: STSong;
		left: 20px;
		margin: 20px;
		top: 30px;
		margin: 0;
		text-align: left;
		z-index: 0;
		font-size: 36px; 
		color: #94E4B4;
	}
	hr{
		width: 90%;
		color: black;
		height: 10px;
		z-index: 1;
	}
	h3{
		position: relative;
		margin: 30px;
		text-align: left;
		left: 50px;
		top: 40px;
	font-size: 30px;
	font-family: Times News Roman;
	font-weight: normal; 
	color: #EECAE7;
	}
	/*frame*/
	.frame{
		position: absolute;
		width: 60%;
		height: 200px;
		margin: 50px auto;
		left: 200px;
	}
	h4{
		position: relative;
		width: 40%;
		margin: 0 auto;
		top: 130px;
		font-size: 30px;
		font-family: Times News Roman;
	font-weight: normal; 
	color: #743838;
	}
	.photo{
		
		top: 220px;
	
	}
</style>