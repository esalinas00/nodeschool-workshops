var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

process.stdin.pipe(tr);

var stream = tr.select('.loud').createStream();
stream.pipe(through(function(chunk, enc, next){
  this.push(chunk.toString().toUpperCase());
  next();
}, function end (done){
  done();
})).pipe(stream);

tr.pipe(process.stdout);
