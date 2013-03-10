var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req, res){
  res.send('This is my node.js app running on host: ' + os.hostname());
});

var port = process.env.NODE_ENV == 'development' ? 3000 : 80;
app.listen(port);