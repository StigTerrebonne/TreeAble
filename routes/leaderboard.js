var data = require('../leaderboardData.json'); //grab data for leaderboard

exports.addTemplate = function(req, res){
	console.log(data);
	res.render('leaderboard', {
		'data': data
	});
};