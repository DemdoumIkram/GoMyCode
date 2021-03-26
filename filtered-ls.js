var fs = require("fs");
const path = require('path');

fs.readdir(process.argv[2],function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      if(path.extname(process.argv[2]+file)==("."+process.argv[3]))
      console.log( file );
   });
});

