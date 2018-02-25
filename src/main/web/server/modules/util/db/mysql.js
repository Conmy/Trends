var mysql = require('mysql');

var config = require('./mysqlConfig.js');

mysqlObj = {

	getConnection: function() {
		
		var con = mysql.createConnection({
			host: config.host,
			user: config.user,
			password: config.password,
			database: config.database
		});

		return con;
	},
	
	getPool: function() {
		var pool = mysql.createPool({
			host: config.host,
			user: config.user,
			password: config.password,
			database: config.database,
			connectionLimit : config.connectionLimit
		});

		return pool;
	},

	execute : function(con, sql, fnSuccess, fnError) {
		
		con.query(sql, function(error, results, fields) {
			if (error) {
				fnError(error);
			}
			else fnSuccess(results);
		});

	}
}

module.exports = mysqlObj;