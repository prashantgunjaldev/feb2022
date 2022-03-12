var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    console.log("\n\n1.Got new request from client");
    
    fs.readFile('./files/test.txt',(error,data)=>{
        console.log("2.Callback is executing");
        if(error){
            console.log(error);
            res.end("Sorry something went wrong");
        }else{
            res.end(data);
        }
    });

    console.log("3.End of function code");

}).listen(8000,()=>{
    console.log("Server is listing on port 8000");
});