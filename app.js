var express = require('express');
var app = express();
var router = require('./controller/router.js');

app.set('view engine','ejs');

// 路由中间件
//'/static'可以省略，直接访问public下的文件，但是可能造成路由重名，之后的路由不运行， 如果加上则只有地址栏里加上'/static'时才会访问public下的文件
// 例如：public下有一个文件admin.html,你单独app.get('/admin',function(req,res){res.send('admin')}),浏览器会直接访问public下的admin.html，不会运行你的app.get('/admin');
// app.use('/static',express.static("./public"));  
app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.get('/',router.showIndex);  //这里不用写成router.showIndex()
app.get('/:albumName',router.showAlbum);

app.use(function(req,res){
	res.render('err');
})
app.listen(3000);

