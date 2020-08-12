var http = require('http');
var fs = require('fs');
var router = require('./router');
http.createServer(function(req,res){
	if(req.url !== '/favicon.ico'){
		if(req.url.indexOf('images') != -1){
			router.imgRouter(req,res);
		}else{
			router.htmlRouter(req,res);
		}
	}
}).listen(1000);