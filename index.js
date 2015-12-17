var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

var mongoose = require('mongoose');
var User = require('./models/roundup');
mongoose.connect(process.env.MONGOLAB_URI ||  'mongodb://localhost/roundups');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/roundups', require('./controllers/roundup'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port);