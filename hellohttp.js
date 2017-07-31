/**
 * Created by skimeli on 7/31/17.
 */
// Load the http module to create an http server.
var http = require('http');
var pet=require('./pet.js');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    fs.readFile('node.html', function (err, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end("Yay! panda for life\n");
    });
})
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log(pet.teddybear," wewewewewe ninakuona sana");
console.log("Server running at http://127.0.0.1:8000/");
