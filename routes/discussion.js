var posts = require('../discussion.json');
var data = require('../currentUser.json'); 

exports.addPosts = function(req, res) {
	res.render('discussion', {
		'posts': posts
	});
};

exports.postInfo = function(req, res) {
	var postID = req.params.id;
	postID = parseInt(postID.substring(postID.length - 1));
	
	var post = posts.discussion[postID];
	res.json(post);
}

exports.handlePost = function(req, res) {
	var postNum = req.body.postNum;
	var comment = req.body.comment;

	var newComment = {
		"user": data.userName,
		"comment": comment
	}

	posts.discussion[postNum].replies.push(newComment);
}