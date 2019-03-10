var gallery = require('../gallery.json'); //grab gallery for leaderboard
var fs = require('fs');
var dirPath = 'gallery-photos/';

var currUser = require('../currentUser.json');
var leaderboardData = require('../leaderboardData.json');

exports.view = function (req, res) {

	fs.readdir('gallery-photos', function (err, files) {
		if (err) {
			return console.log('unable to read directory ' + err);
		}

		files.forEach(function (file) {

			var found = gallery.photos.find((item) => {
				return item.image === `${dirPath}${file}`
			});
			
			if(found === undefined) {
				gallery.photos.unshift({
					"image": `${dirPath}${file}`
				});
			}
		});
	});

	res.render('gallery', {
		'data': gallery,
		'alt': true
	});
};

exports.upload = function (req, res) {
	var name = currUser.name;

	for(var i = 0; i < leaderboardData.leaderboard.length; i++) {
		if(leaderboardData.leaderboard[i].name === name) {
			leaderboardData.leaderboard[i].score += 1;
			break;
		}
	}

	res.send("Your picture has been uploaded! Check it out in the gallery!");
};
