'use strict';

var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "david",
	password: "felix"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	console.log(con);
})