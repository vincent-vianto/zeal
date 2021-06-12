var express = require('express');
var path = require('path');
const bodyParser= require('body-parser')
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var classRouter = require ('./routes/class')
var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/class', classRouter);


module.exports = app;
