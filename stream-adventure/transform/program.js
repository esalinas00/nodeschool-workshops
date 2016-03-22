var through = require('through2');
var split = require('split');
var stream = through(write);

function write (buffer, encoding, next){
  this.push(buffer.toString().toUpperCase());
  next();
}

process.stdin.pipe(stream).pipe(process.stdout)
//process.stdin.pipe(stream).pipe.(process.stdout);
