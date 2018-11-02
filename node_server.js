const fs = require('fs');
const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 8080;



app.get('/', (req,res) => {});
app.use(express.static('public'));

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});