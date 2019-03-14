var data = require('../leaderboardData.json');
var currUser = require('../currentUser.json');

exports.view = function(req, res){
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

	// Changed to true because we are now using the better design
	res.render('home', {
		'rank': rank, 
		'alt': true
	});
};

exports.viewAlt = function(req, res){
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

	res.render('home', {
		'rank': rank, 
		'alt': true
	});
};

exports.update = function(req,res){
	var currUser = require('../currentUser.json');

	currUser.email = req.body.email;
	currUser.name = req.body.name;
	currUser.username = req.body.username;
	currUser.image = req.body.image;

	res.end();
}