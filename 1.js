var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	if(req.url != '/favicon.ico'){
		res.writeHead(200,{'Content-Type':'text/html;charset="UTF-8"'});
		switch(req.url){
			case '/':
				var data = fs.readFileSync('index.html','utf-8');
				break;
			case '/login':
				var data = fs.readFileSync('login.html','utf-8');
				break;
			default:
				var data = fs.readFileSync('index.html','utf-8');
				break;
		}
		res.write(data);
		res.end();
	}
}).listen(1000);