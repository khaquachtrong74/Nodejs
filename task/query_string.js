const querystring = require('querystring');
const parsed = querystring.parse('name=John&age=30');
console.log(parsed.name)
const str = querystring.stringify({name: 'John', age:30})
console.log(str)
