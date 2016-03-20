var fs = require('fs'),
  path = process.argv[2],
  lines;

lines = fs.readFileSync(path,'utf8').split('\n').length - 1;
console.log(lines)
