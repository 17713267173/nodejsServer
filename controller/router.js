module.exports = {
	showIndex: function(req,res){
		res.render('index',{
			"allAlbum": [1,2,3,4,5]
		});
	},
	showAlbum: function(req,res){
		res.send('我是相册');
	}
}