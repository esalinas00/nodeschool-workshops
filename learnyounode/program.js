var fs = require('fs');
var path = process.argv[2];
var countLines;

fs.readFile(path,function cb(err, data){
  if (err) console.error(err);
  countLines = data.toString().split('\n').length - 1
  console.log(countLines);
});
