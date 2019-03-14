
/**
 * Module dependencies.
 */

// Updated to express 4.0 - installing middleware
var express = require('express');
var morgan = require('morgan');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var serveStatic = require('serve-static');
var errorhandler = require('errorhandler');
var bodyParser = require('body-parser');

// Set up database for photo uploading
var multer = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'gallery-photos/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})
var upload = multer({ storage: storage })

// Remove existing gallery of photos and make a new directory
var fs = require('fs');
var rimraf = require('rimraf');
rimraf('gallery-photos/', function () {
	fs.mkdir('gallery-photos/', function (err) {
		if (err) {
			throw err;
		}
	});
});

var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var leaderboard = require('./routes/leaderboard');
var about = require('./routes/about');
var discussion = require('./routes/discussion');
var help = require('./routes/help');
var home = require('./routes/home');
var profile = require('./routes/profile');
var gallery = require('./routes/gallery');
var fbHelper = require('./routes/fbHelper');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser('IxD secret key'));
app.use(session());
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// development only
if ('development' == app.get('env')) {
	app.use(errorhandler());
}

var router = express.Router();

router.get('/', index.view);
router.get('/index', index.view);
router.get('/leaderboard', leaderboard.addTemplate);
router.get('/about', about.view);
router.get('/discussion', discussion.addPosts);
router.get('/discussion/:id', discussion.postInfo);
router.get('/help', help.view);
router.get('/home', home.view);
router.get('/homeAlt', home.viewAlt);
router.get('/profile', profile.view);
router.get('/gallery', gallery.view);
router.get('/gallery-photos/:photo', function (req, res) {
	var filename = req.params.photo;
	res.sendFile(path.join(__dirname, `/gallery-photos/${filename}`));
});
router.get('/tos', fbHelper.tosView);
router.get('/policy', fbHelper.policyView);
// Example route
// app.get('/users', user.list);

router.post('/upload-picture', upload.single('photo'), gallery.upload);
router.post('/add-comment', discussion.handlePost);
router.post('/update-user', home.update);
router.post('/create-account', index.createAccount);
router.post('/verify-login', index.login);

app.use('/', router);



http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
