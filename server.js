'use strict';

const express = require('express');
const http = require('http');

const example = require('./routes/getExample');
const def = require('./routes/getDefault');

const port = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);

app.get('/example', example);
app.get('/', def);

server.listen(port, function () {
    console.log('Example app listening on port ' + server.address().port);
});
