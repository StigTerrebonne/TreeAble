
var data = require('../leaderboardData.json'); //grab data for leaderboard

data.leaderboard.sort(function (a, b) {
	return b.score - a.score;
});

exports.view = function(req, res){
	res.render('index', {
		'data': data
	});
};