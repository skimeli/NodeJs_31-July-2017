/**
 * Created by skimeli on 7/31/17.
 */
var fs = require('fs');
var http = require('http');


var server = http.createServer(function (request, response) {
    fs.readFile('node.html', function (err, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
    });
});
server.listen(8000);
console.log("Rendering html page with nodejs");
