var combine = require('stream-combiner');
var es = require('event-stream');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');
//process.stdin.pipe(process.stdout);

var inspect = require('util').inspect;

module.exports = function () {
  var results = {};
  //var through = through()

    return combine(
      es.split(),
      es.map(function(data, cb){
        console.log(data.length);
        if (data.length == 0){
            cb(null," ");
        }
        data = JSON.parse(data)

        console.log(data['type'])
        if( data['type'] == 'book' ){

        } else if (data['type'] == 'genre') {

        }


        cb(null, "a");
      }),
      zlib.createGzip()
     )

}

//combine(process.stdin,process.stdout);
