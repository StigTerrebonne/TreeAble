var posts = require('../discussion.json');

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