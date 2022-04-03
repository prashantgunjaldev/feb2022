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

app.use('/',express.static('public'));

app.get("/courses",(req,res)=>{
    con.query("SELECT id,name,description FROM courses",(err,data)=>{
        if(err){
            console.log("Error while executing query", err);
            res.send("Internal server error");
        }else{
            res.send(data);
        }
    });
});

app.post("/contact",(req,res)=>{
    console.log(req.body);
    let contact = req.body;
    con.query(`INSERT INTO contact (name,email,mobile,query) VALUES ('${contact.name}','${contact.email}','${contact.mobile}','${contact.query}')`,(err,data)=>{
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