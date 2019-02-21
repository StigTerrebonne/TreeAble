var data = require('../gallery.json'); //grab data for leaderboard

exports.view = function(req, res) {
	res.render('gallery', {
		'data': data
	});
};

exports.upload = function(req, res) {
	console.log(req.file);
	res.send("completed!");
};