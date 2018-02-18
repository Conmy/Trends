var mysql = require('mysql');

sqlObj = {
	getConnection: function() {
		
		const host = "localhost";
		const user = "david";
		const password = "felix";
		const database = "HELLO";

		con = mysql.createConnection({
			host: host,
			user: user,
			password: password,
			database: database
		});

		return con;
	},

	execute : function(con, sql, fnSuccess) {
		
		con.connect(function(err){
			if (err) throw err;
			
			con.query(sql, function(err, result){
				if (err) throw err;
				console.log(result);
				fnSuccess(result);
			});
		});

	}
}

con = sqlObj.getConnection();
result = sqlObj.execute(con, "SELECT * FROM HELLO", function(result){
	console.log(result);
});