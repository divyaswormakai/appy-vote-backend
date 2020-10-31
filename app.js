var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var voteRouter = require('./routes/votes');
const passport = require('passport');
var session = require('express-session');

var app = express();
var cors = require('cors');
var mongoose = require('mongoose');

var config = require('./utils/config');
var middleware = require('./utils/middleware');

//connect to database using mongoose
// let MONGODB_URI = config.MONGODB_URI;
let MONGODB_URI = 'mongodb://localhost:27017/appyvote';

// Database connection
mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => {
		console.log('connected to MongoDB', MONGODB_URI);
	})
	.catch((error) => {
		console.log('error connection to MongoDB:', error.message);
	});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors()); //use cors in the express app
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
//middleware token extractor
app.use(middleware.tokenExtractor);
// session
app.use(
	session({ secret: 'appyvoteSecret', resave: false, saveUninitialized: true })
);
// for the passport files
app.use(passport.initialize());
app.use(passport.session());
require('./utils/passport');

//routes
app.use('/api', indexRouter); //url/
app.use('/api/users', usersRouter); //url/users/
app.use('/api/votes', voteRouter); //url/votes/
app.use('*', (req, res) =>
	res.sendFile(path.join(`${__dirname}/build`, 'index.html'))
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// middleware token handler
app.use(middleware.errorHandler);

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
