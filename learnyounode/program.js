var i = 2, len = process.argv.length,sum = 0;
for (; i < len; i+=1) {
  sum += Number(process.argv[i]);
}
console.log(sum)
