//express
var express = require('express');
var app = express();
var fs= require('fs');

var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, 'pages')));


var router_home = require('./router/index.js');
app.use('/',router_home);

var router_blog = require('./router/blog.js');
app.use('/api/blog',router_blog);
 
//  var router_blogclass = require('./router/blogclass/');
// app.use('/api/blog',router_blogclass);

//mongoose
global.mongodb = require('./mongodb/mongodb.js');
global.db = mongoose.connect("mongodb://localhost:27017/appDB");


var httpServer = http.createServer(app);
httpServer.listen(80, function() {
    console.log('HTTP Server is running on: http://localhost:%s', 80);
})
console.log('finish');

