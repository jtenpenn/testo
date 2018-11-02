const fs = require('fs');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 8080;



app.get('/', (req,res) => {
    fs.readFile('index.html', function(err, data) {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        res.end(data);
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});