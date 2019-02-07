
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var leaderboard = require('./routes/leaderboard');
var about = require('./routes/about');
var discussion = require('./routes/discussion');
var help = require('./routes/help');
var home = require('./routes/home');
var login = require('./routes/login');
var profile = require('./routes/profile');
var gallery = require('./routes/gallery');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/index', index.view); //Change!!
app.get('/leaderboard', leaderboard.addTemplate);
app.get('/about', about.view);
app.get('/discussion', discussion.view);
app.get('/help', help.view);
app.get('/', home.view); //Change!!
app.get('/login', login.view);
app.get('/profile', profile.view);
app.get('/gallery', gallery.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
