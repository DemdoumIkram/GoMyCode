const fs = require('fs') 
var buf = fs.readFileSync(process.argv[2])
var tab = buf.toString().split("\n");
console.log(tab.length-1);
