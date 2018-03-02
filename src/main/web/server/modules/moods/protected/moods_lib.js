server = require("../../util/db/mysql.js");

module.exports = {

	createMood : function(date, mood, fnSuccess, fnError) {

		var con = server.getPool();
		var sql = "INSERT INTO MOODS (MOOD_DATE, MOOD) VALUES (" + con.escape(date) + ", " +
			con.escape(mood) + ")";
			
		server.execute(
			con,
			sql,
			fnSuccess,
			fnError);
	},

	getMoods : function (fnSuccess, fnError) {
		var con = server.getConnection();
		server.execute(
			con,
			"SELECT MOOD_ID, MOOD_DATE, MOOD FROM MOODS",
			fnSuccess,
			fnError);
	},

	getMoodById : function (id, fnSuccess, fnError) {
		var con = server.getConnection();
		server.execute(
			con, 
			"SELECT MOOD_ID, MOOD_DATE, MOOD FROM MOODS WHERE MOOD_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	getMoodByDate : function (date, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con, 
			"SELECT MOOD_ID, MOOD_DATE, MOOD FROM MOODS WHERE MOOD_DATE=" + con.escape(date),
			fnSuccess,
			fnError);
	},

	updateMood : function(id, mood, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con, 
			"UPDATE MOODS SET MOOD=" + con.escape(mood) + " WHERE MOOD_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	deleteMoodById : function(id, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con,
			"DELETE FROM MOODS WHERE MOOD_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	deleteMoodByDate : function(date, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con, 
			"DELETE FROM MOODS WHERE MOOD_DATE=" + con.escape(date),
			fnSuccess,
			fnError);
	}

}