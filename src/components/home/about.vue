<!-- about -->
<template>
	<div class="container">
		<img  class="back" src="../../assets/images/fiel.jpg">
		<h1>{{title}}</h1>
		
		<hr>
		<br>
		<div class="content">
			<div class="School">
			<h2>Education</h2>
			<hr>
			<table class="educ">
			<img class="frame" src="../../assets/images/flower.jpg" alt="frame">
				<tr>
					<td>Time</td>
					<td>School</td>
					<td>Major</td>
					<td>degree</td>
				</tr>
				<tr>
					<td>2012.09~2016.06</td>
					<td>China Unibersity Of Geography</td>
					<td>Autamition</td>
					<td>Bachelor of Engineering</td>
				</tr>
				<tr>
					<td>2016.09~2018.06</td>
					<td>Huazhong University</td>
					<td>Autamition</td>
					<td>Master of Engineering</td>
				</tr>
			</table>
			 </div> <!--school -->
			<div class="me">
				<h2 class="abouttitle">About</h2>
				<hr>
				<section class="about">
				<!-- <img class="frame" src="../../assets/images/flower21.jpg" alt="frame"> -->
					<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My	name is Qian Wu(邬倩)，I am studying in Huazhong University of Science and Technology, majoring in automation. I want to work on front-end development. It needs continus learning because it develops rapidly and it’s the reason that I like and chooses it.
					<br>
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I major in automation in Huazhong University of Science and Technology and I will get my master’s degree in June 2018. I hope to be engaged in front-end development work in the future because the Internet industry is challenging and quickly upgrading. I love new ideas and new products, especially for front-end design.
					<br>
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am not a very intelligent girl, but I think I’m a very earnest girl. I like study new things, which gives me sense of achievement When facing challenges and difficulties, I am optimistic and has much compression resistance,which could help me pull through.
					Stupid bird fly first. Maybe I’m not intelligent enough, I always finish work excellently. I like to learn new things because it will give me a sense of accomplishment. When faced with difficulties and challenges, I have a positive and optimistic attitude, which can help me through the storm.
					<br>
					<br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In life, I like reading, exercising and meeting with my friends. Reading could expand my horizon and make my mind more peaceful. Exercising could release my pressure and make the body healthier. I wish that I will meet greater myself in the future through my efforts.
					</p>

				</section>
			</div><!-- me -->
			
		</div><!-- content -->
		<img class="lineimg" src="../../assets/images/flower14.jpg">
		
		<div class="return">
				<router-link to="/a">Home主页</router-link>
				<router-link to="/bloghome">Blog主页</router-link>
				<router-link to="/operate">管理博客</router-link>
		</div>
	</div><!-- contener -->
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				title:'淑涵的个人网站',
			
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

	height: 100%;
	position: relative;
	text-align: center;

	hr{
		position: relative;
		width: 80%;
		margin: 30px;
		left: 20px;
	}
	.back{
		opacity: 0.4;
		position: fixed;

		top: 0;  
		right: 0;  
		left: 0;  
		width: 100%;
		height: 100%;
		border-radius:30px; 
	}
/*title*/
	h1{
		font-family: STSong;
		position: relative;
		margin: 0px 20px 50px;
		top: 30px;
		color: rgba(32,12,12,0.6);
		text-align: left;
	}
	
	.flower{
		position: relative;
		text-align: left;
		width: 50%;
		display: block;
		height: 60px;
		
	}
	.content{
		position: relative;

		h2{
			font-family:  Times New Roman;
			position: relative;
			text-align: left;
			left: 50px;
			top: 20px;
			margin: 0px 0;
			font-size: 36px;
			font-weight: normal;
		
		}
	
		hr{
			position: relative;
			width: 80%;
			margin: 30px;
			left: 20px;
		}

/*education*/
		.educ{
			margin: 20px auto;
			.frame{
				position: absolute;
				left: 140px;
				top: 250px;
				width: 950px;
				height: 20px;
				opacity: 0.5;
			}
			tr{

				position: relative;
				left: 150px;
				top: 30px;
				background-color: rgba(125,48,33,0.3);
				padding: 20px 30px;
				margin: 20px auto;
			}
			td{

				position: relative;
				font-size: 20px;
				font-family:  Times New Roman;
				color: rgba(125,48,33,1);
				height:50px;
				text-align: center;
				padding: 0px 30px;
				margin:30px;
			}
		}
		/*about*/
		.me{
			position: relative;
			width: 90%;
			top: 30px;
			.abouttitle{
				margin: 30px 20px 10px;
			}
			.about{
			 	width: 90%;
				margin: 20px auto 0;
				text-align: center;
				
				p{
					text-align: left;
					position: relative;
					left: 150px;
					font-size: 18px;
					margin: 40px 20px 0;
					padding: 20px;
					width: 80%;
					color:rgba(78,21,32,0.8);
					background-color: rgba(78,21,32,0.1);
					border-radius: 20px;
				}
			}/*about*/
		}/*me*/
	}/*content*/
	.lineimg{
		width: 30%;
	}
	.return{
		position: relative;
		
		/*padding: 10px;*/
	}
	
}

</style>