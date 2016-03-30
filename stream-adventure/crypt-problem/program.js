var crypto = require('crypto');
var stream = crypto.createDecipher('AES256', process.argv[2]);
process.stdin.pipe(stream).pipe(process.stdout);
