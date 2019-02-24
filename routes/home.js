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
	

	console.log('rank' + rank);
	res.render('home', {
		'rank': rank
	});
};

exports.update = function(req,res){
	console.log('here');
	var currUser = require('../currentUser.json');
	currUser.email = req.body.email;
	currUser.name = req.body.name;
	currUser.userName = req.body.userName;
	currUser.image = req.body.image;
	console.log(currUser);
	res.end();
}