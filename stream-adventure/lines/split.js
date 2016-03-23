var through = require('through2');
var split = require('split');
var stream = through(write);
var counter = 0;

function write (buffer, encoding, next){
  line = buffer.toString()+'\n';
  line = (counter % 2 == 0) ? line.toLowerCase() : line.toUpperCase();
  this.push(line);
  counter += 1;
  next();
}
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
