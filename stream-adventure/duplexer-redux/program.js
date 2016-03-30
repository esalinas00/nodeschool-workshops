var duplexer = require('duplexer2');
var through = require('through2').obj;
var stream = require('stream');

module.exports = function (counter) {
  var count = {};
  var input = through(function(chunk, enc, next){
    count[chunk.country] ? count[chunk.country]++ : count[chunk.country] = 1;
    //console.log(count);
    next();
  }, function (done){
    counter.setCounts(count);
    done();
  }
  );
  return duplexer({objectMode : true}, input, counter)
};
