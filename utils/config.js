require('dotenv').config();

let PORT = process.env.PORT || 3004;
let MONGODB_URI = process.env.MONGODB_URI;
let SECRET = process.env.SECRET;
let NEWS_API = process.env.NEWS_API;

let GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
let GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

let TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID;
let TWITTER_CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET;

let FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
let FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;

let FRONTEND_URI = process.env.REDIRECT_URL_FRONTEND;
let BACKEND_URI = process.env.REDIRECT_URL_BACKEND;

let APPLE_CONFIG = {
	clientID: 'com.appyvote.app',
	teamID: '34HN9W5986',
	redirectURI: 'share-diary.herokuapp.com/auth/apple/callback',
	callbackURL: 'share-diary.herokuapp.com/auth/apple/callback',
	// redirect_uri: 'localhost:3001/auth/apple/callback',

	keyID: 'Q4R4223P63',
	// scope: '',
};

module.exports = {
	PORT,
	MONGODB_URI,
	SECRET,
	NEWS_API,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	TWITTER_CLIENT_ID,
	TWITTER_CLIENT_SECRET,
	FACEBOOK_CLIENT_ID,
	FACEBOOK_CLIENT_SECRET,
	FRONTEND_URI,
	BACKEND_URI,
	APPLE_CONFIG,
};
