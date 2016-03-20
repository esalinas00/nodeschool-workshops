var fs = require('fs');
var path = require('path');
module.exports = function(dirName, extName, callback){
  fs.readdir(dirName, function (err, list){
    if (err) return callback(err);
    list = list.filter(function(element){
      return (path.extname(element) === '.' + extName)
    });
    callback(null, list);
  });
}
