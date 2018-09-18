/*var http = require('http');
var server = http.createServer();
server.on('request', function (request, response) {
	response.write('hello world');
	response.end();
});
server.listen(9000);*/
var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function(err, html) {
        	if (err) throw err;
        	response.write(html);
            response.end();
        });
        	
    } else {
    	response.setHeader("Content-Type", "image/jpeg");//czy mozna podwojne nagłowki wstawic typu image/text itp???
            fs.readFile('./cat.jpg', function(err, jpg) {
        	if (err) throw err;
        	response.write(jpg);
            response.end();
        });
    }
});

server.listen(8080);