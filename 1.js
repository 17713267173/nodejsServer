var http = require('http');
var url = require('url');
var router = require('routers'); //不写./路径，默认会找到同级目录下node_modules文件里的bar文件下的index.js或者package.json文件  
														 //如果node_modules不是同级目录，系统会向上一级查找
http.createServer(function(req,res){
	if(req.url !== '/favicon.ico'){
		if(req.url.indexOf('images') != -1){
			router.imgRouter(req,res);
		}else{
			router.htmlRouter(req,res);
		}
	}
}).listen(1000);