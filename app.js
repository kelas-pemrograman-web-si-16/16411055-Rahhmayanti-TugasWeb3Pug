var express = require('express');
var app = express();
var cons = require('consolidate');

var login = require('./routes/login');

app.set('views', 'views')
app.set('view engine', 'pug'); // setting template engine yang digunakan. Dalam hal ini menggunakan pug.

app.use('/', login);


module.exports = app;