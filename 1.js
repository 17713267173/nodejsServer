var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	if(req.url != '/favicon.ico'){
		console.log(req.url)
		if(req.url == '/img'){
			res.writeHead(200,{'Content-Type':'image/jpeg;'});
			fs.readFile('./images/0701.jpg','binary',function(err,data){
				res.write(data,'binary');
				res.end();
			});
		}else{
			res.writeHead(200,{'Content-Type':'text/html;charset="UTF-8"'});
			switch(req.url){
				case '/':
					var data = fs.readFileSync('./view/index.html','utf-8');
					break;
				case '/login':
					var data = fs.readFileSync('./view/login.html','utf-8');
					break;
				default:
					var data = fs.readFileSync('./view/404.html','utf-8');
					break;
			}
			res.write(data);
			res.end();
		}
	}
}).listen(1000);