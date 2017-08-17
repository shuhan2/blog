<template>
	<div class="container">
		<img class="background" src="../../assets/images/6.jpg" alt="img">
		<router-link class="router" to="/bloghome">Blog</router-link>
		<router-link class="router" to="/a">Home</router-link>
		<div class="login">
			<img class="frame" src="../../assets/images/flower24.jpg" alt="img">
			<div class="user">
				<label for="username">用户名:</label>
	        	<input type="text" v-model="username" @keyup.enter="author" required>
			</div>
			<div class="word">
				<label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
	        	<input type="password" v-model="password"  @keyup.enter="author" required>
			</div>
			  <!-- 提示 -->
		 	<div class="tips"><h4>{{info}}</h4></div>
			<div class="submit">
		        <input type="button" class="submit" @click='author' value="登录">
		        <input type="reset" class="clear" value="清除">
	      
	      	</div>
		
		
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return{username:'',
			password:'',
			info:''
			}
		},
		methods:{
			author:function() {
				if (!this.username) {
					 this.info ="用户名不能为空!"
					return
				}
				else if (!this.password) {
					 this.info ="密码不能为空!"
					return
				}
				//用户信息
				const user = {
			        username: this.username,
			        password: this.password
			    }
			    console.log(JSON.stringify(user))
			    //
			    let self = this;			    	
				fetch('/api/blog/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(user)
				})
				 .then(function (res) {
				      
				        return res.json()
				      })
				 .then(function(json) {
				        if (json.flag) {
				          window.sessionStorage.setItem('token', json.token)
				          // window.location = '#/home'
				          console.log(self.$route)
				          // window.location = '#/' + self.$route.params[0]
				          window.location='#/operate';
				        } else {
				          self.info = json.message
				        }
				      })
				 .catch(function (ex) {
				        console.log('login failed', ex)
				      })
			    
			}
		}
	}
</script>
<style lang="less" scoped>
	//background
	.container{
		
		padding:0px;
		width:100%;
		height:100%;
		.background{
			width:100%;
			height:100%;
			position: absolute;
			
			z-index:-1;
			border-radius:10px;
			opacity:0.2;
		}
		.router{
			position: relative;
			top:30px;
			width:50px;
			height:50px;
			text-align:center;
			justify-content:center;
			padding:30px;
			
			font-size:26px;
		}
		.login{
			position: relative;
			width:400px;
			height:100px;
			
			margin:auto;
			padding-top:30px;
			
			.frame{
				position: absolute;
				
				width:260px;
				z-index:-1;
				opacity:0.6;
				margin-top:-60px;
				transform:rotate(90deg);
			}
			.user{
				
				margin:30px;
				z-index:1;
				font-size:20px;
			}
			.word{
				z-index:1;
				margin:30px ;
				font-size:20px;
			}
			.submit{
				position: relative;
				left:30px;
				font-size:20px;
			}
			.clear{
				position: relative;
				left:50px;
				font-size:20px;
			}
	}
	}
	
</style>