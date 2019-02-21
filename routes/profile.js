var data = require("../profile.json");

exports.view = function(req, res){
    res.render('profile', {
		'data': data
	});
};