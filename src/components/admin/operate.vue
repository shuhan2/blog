<template>
	<div class="container">
		<img class="background" src="../../assets/images/flow.jpg">
		<div class="title">管理博客
		
		</div>

		<img  class="ground" src="../../assets/images/cloud.jpg">
		<div class="content">
			<img  class="text" src="../../assets/images/flower17.jpg">
			<table class="operating">
				<thead>
				<!-- th:cell,tr:row,thead:head -->
					<tr class="head">
		            <th class="header" v-for="operation in operations">{{operation.name}}</th>
		            <th>操作</th>
		          	</tr>
				</thead>
				<tbody>
		          <tr v-for="(item,index) in items">
		            <th v-for="operation in operations">{{item[operation.class]}}</th>
		            
		            <!-- editor del -->
		            <th>
		            <!-- button是行内元素 -->
		            <!-- input 让两个button在同一行  -->
		            <router-link :to="'/blogedit?id='+item._id">
		             	<input class="edit" type="button"  value="编辑"></input>
		             </router-link>
		             <input class="del" type="button" @click="remove" :title="item.title" :id="item._id"  :index="index" :type="item.type" :date="item.date" value="删除"></button>
		            </th>
		          	</tr>
					
		        </tbody>
			</table><!-- operating -->
		</div><!-- content -->
		<router-link class="back" to = "/bloghome">博客主页
		<img class="return" src="../../assets/images/pugongy.jpg" alt=""></router-link>
		<router-link class="back" to = "/home">返回主页
		<img class="return" src="../../assets/images/mu.jpg" alt=""></router-link>
	</div>

</template>
<script>
    import { markdownEditor } from 'vue-simplemde'
	

	export default{
		
		data(){
			return {
				items:'',
				operations:[
					{
						name:'标题',
						class:'title'
					},
					{
						name:'id',
						class:'_id'
					},
					{
						name:'类型',
						class:'type'
					},
					{
						name:'修改时间',
						class:'date'
					}

				],
				projects: [],
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
		 components: {
		      markdownEditor,
		      
		    },
		created(){
			 var token = window.sessionStorage.getItem('token')
		     //token
		      if (token === null) {
		        window.sessionStorage.clear()
		        alert('您没有该权限，请先登录！')
		        
		        window.location = '/#/login'
		      }
		     
		      this.fetchAll();
		      
		},
		watch:{
			'$route': function () {
		        this.dir = this.$route.params.dir
		        console.log(this.dir)
		        this.fetchAll()
		      }
		},
		methods:{
			add:function(){
				window.location = '#/addBlog';
			},
			remove:function(blog){
				
				//验证是否有权限
				if (confirm('您确定要删除吗？')){
					var token = window.sessionStorage.getItem('token')
					var self = this;
					fetch('/api/blog/delete?id='+blog.target.getAttribute('id'), {
						headers: {
		               		 'x-access-token': token
			            }
			          })
			          .then(function (res) {

			          	console.log(res)
			            return res.json()
			          }).then(function (json) {
			            if (json.flag) {
			              
			              let index = blog.target.getAttribute('index')
			              self.items.splice(index, 1)				//	delete
			              alert('删除成功！')
			            }  else {
			              // window.sessionStorage.clear()
			              alert('删除失败！')
			             
			            }
			          }).catch(function (ex) {
			            console.log('delete failed', ex)
			          })
				}//if(confirm)
			},//delete
			fetchAll:function(){
				
					var self = this;
	      			fetch('/api/blog/getAll')
	      			.then(function(res){

	      				return res.json();
	      			})
	      			.then(function(json){
	      				console.log(json);
	      				self. items= json;
	      				
	      			})
	      			.catch(err => console.log("error", err));
				

			}
		}
	}
</script>
<style lang="less" scoped>
.background{
	position: fixed;
	width:100%;
	height:100%;
	border-radius:20px;
	opacity:0.5;
	z-index:-1;
}
.title{
	font-size:30px;
	color:#623456;
	position: absolute;
	text-shadow:5px 5px 5px #666666;
	padding:45px;
	width:200px;
	height:200px;
	
}
.ground{
	position: relative;
	left:0px;
	height:150px;
	width:px;
	border-radius:80px;
	opacity:0.3;
	z-index:-1;
}
//operateing
.text{
	position: absolute;
	opacity:0.3;
	width:520px;
	top:2px;
	left:460px;
	
	transform:rotate(90deg);
}
.operating{
	
	width:720px;
	height:80%;
	margin:auto;
	position: relative;
	.header{
		
		margin:10px;
	}
	.edit {
		width:35px;
	}
	.del{
		width:30px;
	}
}
.add{
	position: relative;
	top:20px;
	left:960px;
	font-size:20px;

}
.back{
	font-size:20px;
	font-weight:STsong;
	float:right;
	position: relative;
	top:300px;
	left:50px;
	.return{
	clear: both;
	float:right;
	position: relative;
	left:-90px;
	top:-20px;
	border-radius:50px;
	width:100px;
	z-index:-1;
}

}

</style>