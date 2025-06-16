var Url = require('./parse_url_parse_method.js');
//var {curUrl, curStr} = await enterUrl();

var url = new Url();
url.parseUrl();
url.emit('stop');
console.log('stop event sent to ' + Url.title);
