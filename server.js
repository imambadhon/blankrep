 var http = require('http');
 //var fs = require('fs');
 var express = require ('express');
 var app = express();
 var server = http.Server(app);
 
 app.get ('/', function (request, response){
     response.sendFile(__dirname+'/index.html');
 });
 
 app.get ('/HTML', function (request, response){
     response.sendFile(__dirname+'/HTML.html');
 });
 
  /*var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    fs.readFile('index.html',function (err,data) {
        if(err){
            return console.log ("File read error");
            
        }
        res.end(data);
    }) ;
  });*/
  server.listen(process.env.PORT || 3000, process.env.IP || "localhost", function(){
    console.log('Server running');
  });
