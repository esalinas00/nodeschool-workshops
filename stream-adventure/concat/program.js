var concat = require('concat-stream');

process.stdin.pipe(concat(function(data){
  var data = data.toString().split("").reverse().join("");
  process.stdout.write(data);
}));
