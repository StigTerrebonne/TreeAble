/*
 * GET home page.
 */

exports.view = function(req, res){
    res.render('home');
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