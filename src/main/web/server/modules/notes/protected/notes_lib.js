server = require("../../util/db/mysql.js");

module.exports = {

	/**
	 * @param  {String} date 		The date of the note in the form "YYYY-MM-DD".
	 * @param  {String} note 		The note to store.
	 * @param  {Function} fnSuccess Return function if the create is successful .
	 * @param  {Function} fnError	Return function if the creat results in an error.
	 * @return {None}
	 */
	createNote : function(date, note, fnSuccess, fnError) {

		var con = server.getPool();
		var sql = "INSERT INTO NOTES (NOTE_DATE, NOTE) VALUES (" + con.escape(date) + ", " +
			con.escape(note) + ")";
			
		server.execute(
			con,
			sql,
			fnSuccess,
			fnError);
	},

	/**
	 * Get all notes from the Notes table
	 * @param  {function} fnSuccess Called if the getNotes query is successful
	 * @param  {function} fnError   Called if the getNotes query returned with errors
	 * @return {None}
	 */
	getNotes : function (fnSuccess, fnError) {
		var con = server.getConnection();
		server.execute(
			con,
			"SELECT NOTE_ID, NOTE_DATE, NOTE FROM NOTES",
			fnSuccess,
			fnError);
	},

	/**
	 * Get a note from the Notes table with the corresponding ID
	 * @param  {String} id        The ID of the note.
	 * @param  {Function} fnSuccess Called if the getNoteById query is successful.
	 * @param  {Function} fnError   Called if the getNoteById query returns with errors.
	 * @return {None}
	 */
	getNoteById : function (id, fnSuccess, fnError) {
		var con = server.getConnection();
		server.execute(
			con, 
			"SELECT NOTE_ID, NOTE_DATE, NOTE FROM NOTES WHERE NOTE_ID=" + con.escape(id),
			fnSuccess,
			fnError);
	},

	/**
	 * Get a note from the Notes table with the corresponding date. 
	 * @param  {String} date      In the form YYYY-MM-DD.
	 * @param  {Function} fnSuccess Called if the getNoteByDate query is successful.
	 * @param  {Function} fnError   Called if the getNoteByDate query returns with errors.
	 * @return {None}
	 */
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