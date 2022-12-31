//定义服务器的文件

var http=require('http');

var fs=require('fs');

var app=http.createServer(function(req,res){
  console.log(req.url)
  if(req.url=='/'){
    fs.readFile('../json/poetry.json',function(err,data){
      if(!err){
        console.log("aaaaaaaaaaaa");
        res.end(data);
      }
    })
  }else if(req.url=='/favicon.ico'){
    fs.readFile('./img/logo.png',function(err,data){
      if(!err){
        res.end(data);
      }
    })
  }else{  //  req.url==  /css/a.css, /img/3zhe.jpg, /img/4zhe.jpng
    fs.readFile('.'+req.url,function(err,data){
      if(!err){
        res.end(data);
      }
    })
  }

})

app.listen(8080,'localhost',function(err){
  if(!err){
    console.log('您的服务器成功运行在localhost:8080上')
  }
})


/*
1. 用户访问  localhost:4000/ -----> 返回 index.html

2. 浏览器自动访问  localhost:4000/favicon.ico  ----->  返回  ./img/logo.png

3. 页面中会引入 css,  localhost:4000/css/a.css  ----->  返回 ./css/a.css

4. 我们页面，不只要引入一个css,或一个js,或一个img,
  我们要引入的事多个 css,js,img,总不能一个一个去判断，req.url 然后做出响应。

  -------》  封装一个 能返回静态资源的通用服务器。

  1. 归类所有请求可以分为 几类。  / ,  /favicon.ico  /css/a.css /img/3zhe.jpg /js/a.js

  3. 初步分析，可以分为3类 :   第一类： /

                             第二类： /favicon.ico

                             第三类： /css/...,  /js/...  ,  /img/...


*/

