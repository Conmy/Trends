server = require("../../util/db/mysql.js");

module.exports = {

	createNote : function(date, note, fnSuccess, fnError) {

		var con = server.getPool();
		var sql = "INSERT INTO NOTES (NOTE_DATE, NOTE) VALUES (" + con.escape(date) +", " +
			con.escape(note) + ")";
			
		server.execute(
			con,
			sql,
			fnSuccess,
			fnError);
	},

	getNotes : function (fnSuccess, fnError) {
		var con = server.getConnection();
		server.execute(
			con, 
			"SELECT NOTE_ID, NOTE_DATE, NOTE FROM NOTES",
			fnSuccess,
			fnError);
	},

	getNoteById : function (id, fnSuccess, fnError) {
		var con = server.getConnection();
		server.execute(
			con, 
			"SELECT NOTE_ID, NOTE_DATE, NOTE FROM NOTES WHERE NOTE_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	getNoteByDate : function (date, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con, 
			"SELECT NOTE_ID, NOTE_DATE, NOTE FROM NOTES WHERE NOTE_DATE=" + con.escape(date),
			fnSuccess,
			fnError);
	},

	updateNote : function(id, note, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con, 
			"UPDATE NOTES SET NOTE=" + con.escape(note) + " WHERE NOTE_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	deleteNoteById : function(id, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con,
			"DELETE FROM NOTES WHERE NOTE_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	deleteNoteByDate : function(date, fnSuccess, fnError) {
		var con = server.getPool();
		server.execute(
			con, 
			"DELETE FROM NOTES WHERE NOTE_DATE=" + con.escape(date),
			fnSuccess,
			fnError);
	}

}