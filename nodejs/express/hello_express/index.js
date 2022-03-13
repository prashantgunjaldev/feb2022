var express = require('express');
console.log("Hello Express");

let app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/test',(req,res)=>{
    res.send("Welcome to test");
});

//CRUD operation on student Object
app.get("/student",(req,res)=>{
    res.send("All student records");
});
app.post("/student",(req,res)=>{
    console.log(req.body);
    res.send("Create new student record");
});
app.put("/student",(req,res)=>{
    res.send("Update existing student record");
});
app.delete("/student",(req,res)=>{
    res.send("Delete existing student record");
});

app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
});