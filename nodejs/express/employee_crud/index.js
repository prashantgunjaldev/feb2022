var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
let app = express();
app.use(express.json());
app.use(cors());

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"feb_batch"
});

//CRUD operation on employee Object
app.get("/employee",(req,res)=>{
    con.query("SELECT id,name,address,mobile,dept,salary,designation FROM employee",(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.get("/employee/:id",(req,res)=>{
    con.query("SELECT id,name,address,mobile,dept,salary,designation FROM employee where id="+req.params.id,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.post("/employee",(req,res)=>{
    console.log(req.body);
    let employee = req.body;
    con.query(`INSERT INTO employee (name,address,mobile,dept,salary,designation) VALUES ('${employee.name}','${employee.address}','${employee.mobile}','${employee.dept}',${employee.salary},'${employee.designation}')`,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.put("/employee",(req,res)=>{
    let employee = req.body;
    con.query(`UPDATE employee SET name='${employee.name}',address='${employee.address}',mobile='${employee.mobile}',dept='${employee.dept}',salary=${employee.salary},designation='${employee.designation}' where id= ${employee.id}`,(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.delete("/employee/:id",(req,res)=>{
    con.query("DELETE FROM employee WHERE id ="+req.params.id,(err,data)=>{
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