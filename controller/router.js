var file = require('../models/file.js');
var url = require('url');
module.exports = {
	showIndex: function(req,res){
		file.getAllAlbum(function(err,allAlbumArr){  //这里的参数只是一个形参，可以是任意名字 比如a
			if(err){
				res.send(err);
				return;
			}
			res.render('index',{
				"allAlbum": allAlbumArr
			});
		})
	},
	showAlbum: function(req,res){
		var albumName = req.params.albumName;
		file.getAllImagesByAlbumName(albumName,function(err,imagesArr){
			if(err){
				res.send(err);
				return;
			}
			res.render('album',{
				'albumName': albumName,
				'images': imagesArr
			})
		});
	}
}