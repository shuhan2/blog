var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
//multer是express官方推荐的文件上传中间件
var multer = require('multer');
var dateFormat = require('dateFormat');


var jwtToken = require('./jwt.js')('shuhan')
var user = require('../user.js');
var bodyparser = require('body-parser');

// app.use(multer()); // for parsing multipart/form-data

//file storage
var storage  = multer.diskStorage({
	destination:function(req,file,cb) {
		// body...

		cb(null,'../file/blog');
	},
  // filename:文件在destination中的名称
	filename:function(req,file,cb){
    //originalname:原始名称
		var fir = file.originalname.split('.')[0];
    
    var fileFormat = (file.originalname).split(".");
		var sec = file.originalname.split('.')[1];
		var type = req.body.type?req.body.type:'CSS'
    var title = req.body.title
    var md = req.body.md

		var date = req.body.date?req.body.date: dateFormat(new Date(),'yyyy-mm-dd')
		// cb(null,type+fir+'@'+date+sec);
     cb(null, file.fieldname + '-' + date + "." + fileFormat[fileFormat.length - 1]);
	}
	
})
//添加配置文件到muler对象。
 var upload = multer({
          storage: storage
    });
//test api
// router.get('/test',(req,res) =>{
	
//   res.send('blog test get in');
// })


//login

router.post('/login',function(req,res){
  /*
  req.params.xxxxx 从path中的变量
req.query.xxxxx 从get中的?xxxx=中
req.body.xxxxx 从post中的变量
  */
 //解构
  let {username, password} = req.body 
  

  if(user.username === username && user.password === password){
    //time 2h
      
        var token = jwtToken.createToken(user,'2h')
        
        res.json({
            flag: true,
            message: 'Success!',
            token: token
        });
        
  }
  else{
    res.json({
        flag: false,
        message: 'err'
    });
    console.log('password false')
  }
});
//add
router.post('/add', (req, res) => {

  let token = req.get('x-access-token')
 
  if (!token) {
    
    res.json({
        flag: false,
        message: 'no token'
    });
  }

 
  let valid = jwtToken.validToken(user, token)
  if(valid){
      
      Blogs = global.mongodb.getModel('Blogs');       
      let newBlog = req.body;
      if(!newBlog._id){
            newBlog._id = new mongoose.mongo.ObjectID();
          }
     
        
        //f返回更新后的数据
        //$set用来指定一个键的值.如果这个键存在,就修改它;不存在,就创建它
      Blogs.findByIdAndUpdate(newBlog._id,{$set:newBlog},
        {
          upsert:true,
          new: true
        },
       
        function(err,doc){ 
        if (err) {
           console.log('no',err)
          
          res.json({
              flag: false,
              message: 'token error'
          });
        } else {
         
        
          res.json({
              flag: true,
              message: 'token true'
          });
        }
      }
    );    
  }else{
    res.json({
        flag: false,
        message: 'token invalid or repeat'
    });
  }   
})
//fetchall
router.get('/getAll',(req,res) => {
  let Blogs = global.mongodb.getModel('Blogs'); 
  Blogs.find('title,type,_id,date').exec((err,doc)=>{
    if(err){
      console.log('err:',err)
    }else{
     
      res.json(doc);
       
    }
  });
});
//findByIdandremove
router.get('/delete',function(req,res){
  //get token
  let token = req.get('x-access-token')
  //false
  if (!token||token === null) {
    res.json({
      flag:false,
      message:'token false'
    })
    
  }
  //correct
  else{
    
    let blogs  = global.mongodb.getModel('Blogs');
    let _id = req.query.id
    
    blogs.findByIdAndRemove(_id,function(err,data){
      if (err) {
            res.json({
            flag:false,
            message:'token false'
        })
         
      }
      else{
         res.json({
            flag:true,
            message:'token true'
        })
      }
    })
    

  }
})
//fetchtype 按类型获取数据
router.get('/getType/:type',(req,res)=>{

  let Blogs = global.mongodb.getModel('Blogs'); 
  let type = req.params.type==='Others'?{type:'Others'}:{type:req.params.type};

   Blogs.find(type,'title date type').sort([['date', -1]]).exec((err,doc)=>{
    if(err){
      console.log('err:',err)
    }else{
     
       res.json(doc)
    }
  });

})
//getNew 得到最新的blog
router.get('/getNew',(req,res) =>{
   let Blog = global.mongodb.getModel('Blogs'); 
    Blog.find().sort([['date', -1]]).limit(1).exec((err,doc)=>{
    if(err){
      console.log(err)
    }else{
      
      res.json(doc)
    }
  });
})
//blogclass
router.get('/blogclass',(req,res) => {
 
  var Blogclass = global.mongodb.getModel('BlogClass'); 
 
  Blogclass.find().sort([['date', -1]]).exec((err,doc)=>{
    if(err){
      console.log(err)
    }else{
     
      res.json(doc)
    }
  });
});

 
router.get('/getBlog/:title',(req,res) => {
  var Blogs = global.mongodb.getModel('Blogs'); 
  let title = req.params.title==='123'?{}:{title:req.params.title}
   //let title = req.params.title
    //Query.populate(path, [select], [model], [match], [options])
     //find() 方法返回数组中满足提供的测试函数的第一个元素的值
     //db.collection.find(query, projection)
     //一次性获取所有属性
  Blogs.find(title).limit(1).exec((err,doc)=>{
    if(err){
      console.log('err:',err)
    }else{ 
      res.json(doc)
    }
  });
});

//getblogcontent
router.get('/getBlogcontent/:id',function(req,res){
 
  //blog
  var blogs = global.mongodb.getModel('Blogs');
  //search id
  
  blogs.findById(req.params.id,function(err,content){
    if (err) {
      console.log('getcontent failed ',err);
    }
    else{
      res.json(content);
    }
  })
})

module.exports = router;