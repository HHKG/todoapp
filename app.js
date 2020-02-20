//入口文件

var express=require('express');

//引入逻辑处理模块todoConstroller
var todoConstroller=require('./constroller/todoConstroller');

var app=new express();//实例化express对象

app.set('view engine','ejs');//设置一个视图引擎，否则不能用ejs

app.use(express.static('public'));//public文件夹是存放一些公共样式的，要这样定义才可以使用

//把app这个对象传过todoController这个文件里面，进行逻辑处理
todoConstroller(app);
app.listen(3000);