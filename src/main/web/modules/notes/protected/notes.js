var notes = require("./notes_lib.js");

module.exports = {
	getNotes: function(req, res) {
		notes.getNotes(
			function(results) {
				return res.send(results);
			},
			function(error) {
				return res.send(error);
			});
	},
	getNoteById: function(req, res) {
		if (req.params.id) {
			var id = req.params.id;
			notes.getNoteById(id,
				function(results){
					return res.send(results);
				},
				function(error) {
					return res.send(error);
				});
		}
	},
	createNote: function(req, res) {
		if (req.body && req.body.note && req.body.date) {
			notes.createNote(req.body.date, req.body.note, 
				function(result) {
					return res.send(result);
				},
				function(error) {
					return res.send(error);
				});
		} 
	},
	updateNote: function(req, res) {
		if (req.params.id) {
			notes.updateNote(req.params.id, req.body.note,
				function (result) {
					return res.send(result);
				},
				function (error) {
					return res.send(error);
				});
		}
	},
	deleteNoteById: function(req, res) {
		if (req.params.id) {
			var id = req.params.id;
			notes.deleteNoteById(id,
				function(results){
					return res.send(results);
				},
				function(error){
					return res.send(error);
				})
		}

	}
}