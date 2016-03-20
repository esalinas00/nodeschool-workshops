var fs = require('fs');
var path = require('path');
var filePath = process.argv[2];
var extName = process.argv[3];

fs.readdir(filePath, function cb(err, list){
  if (err) throw err;
  list.forEach(function(element){
    if (path.extname(element) === '.' + extName) console.log(element);
  });
});
