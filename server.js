'use strict';

const express = require('express');
const example = require('./routes/getExample');

const app = express();
const port = 3000;

app.get('/example', example);

app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});
