var path = require('path');
// Combining Directory Names
var directories = ["home", "khat", "Document"];
var docsDirectory = directories.join(path.sep);
console.log('Document directory : %s', docsDirectory);
// Combining Directory Names and File Names 
var curPath = path.join('/home/khat','log.txt');
console.log('File path: %s ', curPath);

// Identifies directories, file names, and extensions in path

var filename = "/home/khat/log.txt";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('Directory: %s, filename: %s, extensions: %s',
    dirname, basename, extname);
