var fs = require('fs');
var data = fs.readFileSync('./package.json', 'utf8');
console.log(data)

console.log('Read a file Asynchronously')
fs.readFile('./package.json','utf8', function(err, data){
    console.log(data);
});
