var express = require('express');

let app = express();

app.use('/',express.static('public'));

app.listen(8080,()=>{
    console.log("App running on localhost:8080/");
});