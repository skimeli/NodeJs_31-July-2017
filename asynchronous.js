/**
 * Created by skimeli on 7/31/17.
 */
var fs = require("fs");

// Asynchronous read
fs.readFile('text1.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("asynchronous: " + data.toString());
});