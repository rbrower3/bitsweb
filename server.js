var express = require("express");
var fs = require('fs');

var app = express();

app.set('view engine', 'jade');
app.set('view options', { layout: true });
app.set('views', __dirname + '/views');

// Configuration of the SAGE Express server
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, 'Internal server error, please contact administrator.');
  });
});

// Dynamically import all routes
fs.readdirSync('routes').forEach(function(file) {
  if (file[0] == '.') return;
  var route = file.substr(0, file.indexOf('.'));
  require('./routes/' + route)(app);
});

//Get the environment variables we need.
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

// Launches the Node.js Express Server
app.listen(port, ipaddr);
console.log('Bits Web Server: Started listening on port ' + port + '.');
