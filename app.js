const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 8080;



const server = http.createServer((req, res) => {
    fs.readFile('testo_html.html', function(err, data) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});