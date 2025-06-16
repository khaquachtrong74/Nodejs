var url = require('url');
var readline = require('readline');
var EventEmitter = require('events').EventEmitter;
var util = require('util')
var EnterUrl = function(){
    var self = this;
    this.on('stop', function(){
        console.log('Passed stop event to EnterUrl.');
    });
   
}
util.inherits(EnterUrl, EventEmitter);
EnterUrl.prototype.parseUrl = function(){
//    var rl = readline.createInterface({
//        input: process.stdin,
//        output: process.stdout
//    })

    var curUrl
     var curStr
    //rl.question('Enter URL: ', (urlink) => {
      //  rl.close();
        curUrl = url.parse("https://www.google.com/search?query=steve+jobs")
        curStr = url.format(curUrl)
    //})
    console.log('address string :%s', curStr);
    console.dir(curUrl);
}

module.exports = EnterUrl;
module.exports.title = 'parse url';
