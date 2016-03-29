var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');
module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here
    var command = spawn(cmd,args);
    return duplexer(command.stdin, command.stdout);
};
