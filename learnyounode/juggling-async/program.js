var http = require('http');
var bl = require('bl');
var urls = [];
var results = [];
for (var i = 2; i < process.argv.length; i+=1) {
  urls.push(process.argv[i]);
  results.push(undefined);
}
urls.forEach(function(url, index){
  http.get(url,function callback(res){
    res.pipe(bl(function(err, data){
      if (err) return console.error(err);
      data = data.toString();
      results[index] = data.toString();
      if (results.length == urls.length && results.indexOf(undefined) === -1){
        results.forEach(function(el){
          console.log(el);
        });
      }
    }));
  });
});
