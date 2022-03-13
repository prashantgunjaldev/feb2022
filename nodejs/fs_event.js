
var fs = require('fs');

console.log("\n\n1.Lets read file content");
// let data = fs.readFileSync('./files/learn6.html');

let reader = fs.createReadStream('./files/learn6.html');

reader.on('open',()=>{
    console.log("File is open to read");
});