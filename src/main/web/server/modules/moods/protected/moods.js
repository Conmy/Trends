var moods = require("./moods_lib.js");

module.exports = {
	getMoods: function(req, res) {
		moods.getMoods(
			function(results) {
				return res.status(200).send(results);
			},
			function(error) {
				return res.send(error);
			});
	},
	getMoodById: function(req, res) {
		if (req.params.id) {
			var id = req.params.id;
			moods.getMoodById(id,
				function(results){
					return res.send(results);
				},
				function(error) {
					return res.send(error);
				});
		}
	},
	createMood: function(req, res) {
		if (req.body && req.body.mood && req.body.date) {
			moods.createMood(req.body.date, req.body.mood, 
				function(result) {
					return res.send(result);
				},
				function(error) {
					return res.send(error);
				});
		} 
	},
	updateMood: function(req, res) {
		if (req.params.id) {
			moods.updateMood(req.params.id, req.body.mood,
				function (result) {
					return res.send(result);
				},
				function (error) {
					return res.send(error);
				});
		}
	},
	deleteMoodById: function(req, res) {
		if (req.params.id) {
			var id = req.params.id;
			moods.deleteMoodById(id,
				function(results){
					return res.send(results);
				},
				function(error){
					return res.send(error);
				})
		}

	}
}