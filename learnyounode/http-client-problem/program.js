var http = require('http');

var response = http.get(process.argv[2],function callback(res){
  res
    .setEncoding('utf8')
    .on('data',console.log)
    .on('error',console.error);
})
