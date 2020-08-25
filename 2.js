var express = require('express');
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json())

// app.use(asb);

app.post('/dopost',function(req,res,next){
	 var result = req.body
	 res.send(JSON.stringify(result));
})

app.get('/exam/:id',function(req,res,next){
	console.log('课程ID：'+req.params.id);
	res.send();
})

app.get('/view/submit',function(req,res,next){
	console.log(1);
	res.send();
})

app.get('/dopost',function(req,res){
	console.log(2);
	res.send();
})

app.use(function(req,res){
	res.send('没有这个页面！');
})
app.listen(3000);

// function asb(req,res,next){
// 	if(filepath != '/favicon.ico'){
// 		var filepath = url.parse(req.url).path;
// 		if(filepath.indexOf('/view/') != -1){
// 			fs.readFile(__dirname + filepath,function(err,data){
// 				if(err){
// 					console.log(err);
// 					next();
// 					return;
// 				}
// 				res.send(data.toString());
// 			})
// 		}else if(filepath.indexOf('/images/') != -1){
// 			fs.readFile(__dirname + filepath,function(err,data){
// 				if(err){
// 					console.log(err);
// 					next();
// 					return;
// 				}
// 				res.write(data,'binary');
// 				res.send();
// 			})
// 		}else{
// 			next();
// 		}
// 	}
// }