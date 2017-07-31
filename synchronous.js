/**
 * Created by skimeli on 7/31/17.
 */
var fs = require("fs");

var data = fs.readFileSync('text2.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");