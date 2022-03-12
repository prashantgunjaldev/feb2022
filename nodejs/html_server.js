var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    console.log("\n\n1.Got new request from client");
    
    let data = fs.readFileSync('./files/learn6.html');
    console.log("2.File Read is done");
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
    console.log("3.End of function code");

}).listen(8000,()=>{
    console.log("Server is listing on port 8000");
});