var http = require('http');
var through = require('through2')(write, end);
var fs = require('fs');

function write (buf , _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end (done) {
  done();
}

var server = http.createServer(function (req, res) {
   if (req.method === 'POST') {
      req.pipe(through).pipe(res);
   }
});
server.listen(process.argv[2]);
