var express = require('express');
var mysql = require('mysql');
let app = express();
app.use(express.json());

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"feb_batch"
});

//CRUD operation on student Object
app.get("/student",(req,res)=>{
    con.query("SELECT id,name,class,info FROM student",(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.get("/student/:id",(req,res)=>{
    con.query("SELECT id,name,class,info FROM student where id="+req.params.id,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.post("/student",(req,res)=>{
    console.log(req.body);
    let student = req.body;
    con.query(`INSERT INTO student (name,class,info) VALUES ('${student.name}',${student.class},'${student.info}')`,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.put("/student",(req,res)=>{
    let student = req.body;
    con.query(`UPDATE student SET name='${student.name}',class=${student.class},info='${student.info}' where id= ${student.id}`,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.delete("/student/:id",(req,res)=>{
    con.query("DELETE FROM student WHERE id ="+req.params.id,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.listen(8080,()=>{
    
    con.connect((err)=>{
        if(err){
            console.log("Sorry something went wrong while connecting to DB", err);
        }else{
            console.log("DB connection established");
        }
    });
    console.log("Server is listening on port 8080");
});