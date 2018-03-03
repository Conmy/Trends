var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Middleware for body parser
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require("./routes")(app);

app.listen(8080);
console.log("Listening on localhost:8080");