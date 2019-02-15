var data = require('../leaderboardData.json'); //grab data for leaderboard

exports.addTemplate = function(req, res){
	res.render('leaderboard', {
		'data': data
	});
};