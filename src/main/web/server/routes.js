module.exports = function(app) {
	var notes = require("./modules/notes/protected/notes.js");
	var moods = require("./modules/moods/protected/moods.js");
	app.get("/notes", notes.getNotes);
	app.get("/notes/:id", notes.getNoteById);
	app.post("/notes", notes.createNote);
	app.put("/notes/:id", notes.updateNote);
	app.delete("/notes/:id", notes.deleteNoteById);

	app.get("/moods", moods.getMoods);
	app.get("/moods/:id", moods.getMoodById);
	app.post("/moods", moods.createMood);
	app.put("/moods/:id", moods.updateMood);
	app.delete("/moods/:id", moods.deleteMoodById);
}