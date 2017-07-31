/**
 * Created by skimeli on 7/31/17.
 */
var url = require('url');
var url = require('url');
var fs = require('fs');
var http = require('http');


http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);
console.log("hey heeey,this is a url Zone!!!!");