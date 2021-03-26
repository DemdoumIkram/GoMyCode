const mymodule = require('./mymodule.js') ;

mymodule(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
      return console.log(err)
  }
  list.forEach(function (list) {
      console.log(list)
    })
  })
