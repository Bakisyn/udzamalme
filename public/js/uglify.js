var fs = require('fs');
var UglifyJS = require('uglify-js');
var appClientFiles = [
  fs.readFileSync('cleanjavascript.js', "utf8")
];
var result = UglifyJS.minify(appClientFiles);
console.log(result.code);
fs.writeFile("cleanjavascript.min.js", result.code, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("File was successfully saved.");
  }
});
