var fs = require('fs');
module.exports = {
	getAllAlbum: function(callback){
		fs.readdir(__dirname+'/../uploads',function(err,files){
			if(err){
				callback('没有找到相关文件1',null);
				return;
			}
			var allAlbumArr = [];
			(function ergodic(i){
				if(i == files.length){
					callback(null,allAlbumArr);
					return;
				}
				fs.stat(__dirname+'/../uploads/'+files[i],function(err,stats){
					if(err){
						callback('没有找到相关文件2',null);
						return;
					}
					if(stats.isDirectory()){
						allAlbumArr.push(files[i]);
					}
					ergodic(i+1);
				})
			})(0)
		})
	},
	getAllImagesByAlbumName: function(albumName,callback){
		fs.readdir(__dirname+'/../uploads/'+albumName,function(err,files){
			if(err){
				callback('没有找到相关文件3',null);
				return;
			}
			var allAlbumArr = [];
			(function ergodic(i){
				if(i == files.length){
					callback(null,allAlbumArr);
					return;
				}
				fs.stat(__dirname+'/../uploads/'+ albumName+ '/' +files[i],function(err,stats){
					if(err){
						callback('没有找到相关文件4',null);
						return;
					}
					if(stats.isFile()){
						allAlbumArr.push(files[i]);
					}
					ergodic(i+1);
				})
			})(0)
		})
	}
}