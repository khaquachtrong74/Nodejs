const { URL } = require('url');
const myURL = new URL('https://example.com:8080/path/name?query=string#hash');
console.log(myURL.port)
console.log(myURL.hostname)
