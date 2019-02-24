var data = require('../leaderboardData.json');
var currUser = require('../currentUser.json');

exports.addTemplate = function (req, res) {
	// Add logic to sort the leaderboard

	data.leaderboard.sort(function (a, b) {
		return b.score - a.score;
	});

	var rank = -1;
	for (var i = 0; i < data.leaderboard.length; i++) {
		data.leaderboard[i].rank = i + 1;

		if(data.leaderboard[i].name === currUser.name) {
			rank = i + 1;
		}
	}

	if(rank == -1) {
		data.leaderboard.push({
			"rank": data.leaderboard.length,
			"name": currUser.name,
			"score": 0
		})
	}

	res.render('leaderboard', {
		'data': data,
		'rank': rank
	});
};