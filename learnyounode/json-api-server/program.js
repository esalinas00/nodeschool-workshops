var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
  var queryParsed = url.parse(req.url, true);
  var date;
  var result = {}
  if (req.method === 'GET'){
    if (queryParsed.pathname === '/api/parsetime'){
      date = new Date(queryParsed.query.iso.toString());
      result = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      };
    } else if (queryParsed.pathname === '/api/unixtime') {
      date = new Date(queryParsed.query.iso.toString());
      result = { "unixtime": date.getTime() };

    }
    res.end(JSON.stringify(result));
  } else {
    return res.end('Please send GET requests');
  }

})
server.listen(process.argv[2]);
