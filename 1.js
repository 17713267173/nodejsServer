var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset="UTF-8"'});
	var data = fs.readFileSync('index.html','utf-8');
	res.write(data);
	res.end();
}).listen(1000);