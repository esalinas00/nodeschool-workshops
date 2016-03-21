var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){
  var time = strftime('%Y-%m-%d %H:%M')
  socket.end(time+'\n');
});
server.listen(process.argv[2]);
