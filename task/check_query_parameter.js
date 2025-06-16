//import {enterUrl} from './parse_url_parse_method.mjs';
//import {parse, stringify} from 'querystring';
//export async function  checkQuery(){
//    var curUrl = await enterUrl();
//    var param = parse(curUrl.query);
//    console.log('Query value in the query parameters: %s', param.query);
//    console.log('original query parameter: %s', 
//    stringify(param));
//};

var url = require('url');
var curURL = url.parse(
    'https://www.google.com/search?query=steve+jobs'
    );
    var curStr = url.format(curURL);

var querystring = require('querystring');
var param = querystring.parse(curURL.query);
console.log('query value in the query parameters: %s', param.query);
console.log('original query parameter: %s', querystring.stringify(param));
