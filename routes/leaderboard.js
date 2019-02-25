var data = require('../leaderboardData.json');
var currUser = require('../currentUser.json');

exports.addTemplate = function (req, res) {
	data.leaderboard.sort(function (a, b) {
		return b.score - a.score;
	});

	var rank = -1;
	for (var i = 0; i < data.leaderboard.length; i++) {
		data.leaderboard[i].rank = i + 1;

		if(data.leaderboard[i].name === currUser.name) {
			rank = i + 1;
			break;
		}
	}

	if(rank == -1) {
		data.leaderboard.push({
			"rank": data.leaderboard.length,
			"name": currUser.name,
			"score": 0
		});
		rank = data.leaderboard.length;
	}

	res.render('leaderboard', {
		'data': data,
		'rank': rank
	});
};