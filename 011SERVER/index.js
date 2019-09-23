var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html,charset=utf-8"});
    res.write("<h1>Server da duoc ket noi, day la ket qua tra ve tu server</h1>");
    res.end();
    
}).listen(1234);