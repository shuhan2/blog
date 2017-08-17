 var mongoose = require('mongoose');

 //data
module.exports = { 
    Blogs:{
        title:{type:String,required:true},
        content:{type:String,required:true},
        
        date:{type:Date,default:Date.now},
        type:{type:String,default:'CSS'},
        md:{type:String,required:true},
    },
    BlogClass:{
        title:{type:String,required:true},
        date:{type:Date,default:Date.now}
    }

};
