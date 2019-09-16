const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/')  {
        res.write('Hello World');
        res.end();
    }
    
    if(req.url === '/api/courses'){
     //   
    }
});

server.listen(3000);