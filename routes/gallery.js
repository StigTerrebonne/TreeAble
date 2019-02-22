var data = require('../gallery.json'); //grab data for leaderboard
var fs = require('fs');
var dirPath = 'gallery-photos/';


exports.view = function (req, res) {
	fs.readdir('gallery-photos', function (err, files) {
		if (err) {
			return console.log('unable to read directory ' + err);
		}

		files.forEach(function (file) {

			var found = data.photos.find((item) => {
				return item.image === `${dirPath}${file}`
			});
			
			if(found === undefined) {
				data.photos.push({
					"image": `${dirPath}${file}`
				});
			}
		});
	});

	res.render('gallery', {
		'data': data
	});
};

exports.upload = function (req, res) {
	console.log(req.file);
	res.send("Your picture has been uploaded! Check it out in the gallery!");
};