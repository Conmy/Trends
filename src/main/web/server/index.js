var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

require("./routes")(app);

app.listen(8080);
console.log("Listening on localhost:8080");