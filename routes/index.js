
var data = require('../leaderboardData.json');
var usersDB = require('../userLogins.json');

data.leaderboard.sort(function (a, b) {
	return b.score - a.score;
});

exports.view = function (req, res) {
	res.render('index', {
		'data': data
	});
};

exports.createAccount = function (req, res) {
	var name = req.body.name;
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;

	var newUser = {
		"username": username,
		"password": password,
		"email": email,
		"name": name
	};

	var accountExists = false;
	for(var i = 0; i < usersDB.accounts.length; i++) {
		if(usersDB.accounts[i].email === email) {
			accountExists = true;
			break;
		}
	}

	if(accountExists) {
		res.send('account exists');
	} else {
		usersDB.accounts.push(newUser);
		res.send('account created');
	}
};

exports.login = function(req, res) {
	var email = req.body.email;
	var password = req.body.password;

	var accountExists = false;
	var foundMatch = false;
	var i;
	for(i = 0; i < usersDB.accounts.length; i++) {
		if(usersDB.accounts[i].email === email) {
			accountExists = true;
			if(usersDB.accounts[i].password === password) {
				foundMatch = true;
			}
			break;
		}
	}

	if(!accountExists) {
		res.send('account doesn\'t exist');
	} else if(!foundMatch) {
		res.send('password doesn\'t match');
	} else {
		res.json({
			'username': usersDB.accounts[i].username,
			'name': usersDB.accounts[i].name
		});
	}
};