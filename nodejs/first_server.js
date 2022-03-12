
console.log("Start executing code");

var http = require('http');

http.createServer(function(request,response){
    response.end("Hello World");
}).listen(8080);

console.log("Make a request via browser");