const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const socket = require('./socket')(http);
const methodOverride = require('method-override');
require('dotenv').config();

const home = require('./routes/home');
const party = require('./routes/party');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pwa'));

app.use('/', home);
app.use('/party', party);

app.listen(process.env.PORT);