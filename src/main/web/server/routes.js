module.exports = function(app) {
	var notes = require("../modules/notes/protected/notes.js");
	app.get("/notes", notes.getNotes);
	app.get("/notes/:id", notes.getNoteById);
	app.post("/notes", notes.createNote);
	app.put("/notes/:id", notes.updateNote);
	app.delete("/notes/:id", notes.deleteNoteById);
}