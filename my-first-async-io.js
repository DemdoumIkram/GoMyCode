const fs = require('fs') 
var buf = fs.readFile(process.argv[2],function callback (err, data) {
if (err) throw err; 
var tab = data.toString().split("\n");
console.log(tab.length-1);
 })

