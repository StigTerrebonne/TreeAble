
var data = require('../leaderboardData.json'); //grab data for leaderboard

exports.view = function(req, res){
	console.log(data);
	res.render('index', {
		'data': data
	});
};