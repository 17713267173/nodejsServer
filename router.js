var fs = require('fs');
module.exports = {
	htmlRouter: function(req,res){
		res.writeHead(200,{'Content-Type':'text/html;charset="UTF-8"'});
		var path = req.url;
		if(path == '/'){
			path = './view/index.html';
		}else if(path != '/'){
			path = '.'+path+'.html';
		}
		fs.readFile(path,function(err,data){
			if(err){
				console.log(err.code)
				var notFound = fs.readFileSync('./view/404.html','utf-8');
				res.write(notFound);
			}else{
				res.write(data);
			}
			res.end();
		})
	},
	imgRouter: function(req,res){
		res.writeHead(200,{'Content-Type':'image/jpeg;'});
		fs.readFile('./images/0701.jpg','binary',function(err,data){
			res.write(data,'binary');
			res.end();
		});
	}
}