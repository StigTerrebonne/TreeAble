var data = require('../currentUser.json'); 

exports.view = function(req, res){
    res.render('profile', {
    	"data": data
    });
};