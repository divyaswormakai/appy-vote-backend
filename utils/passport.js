const passport = require('passport');
const User = require('../models/user.model');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const FaceBookStrategy = require('passport-facebook').Strategy;
const AppleStrategy = require('passport-apple');

const config = require('./config');

// for google oauth strategy
passport.use(
	'googleToken',
	new GoogleStrategy(
		{
			// clientID:
			// 	'206336218640-5vlj28k0nm8q3o4ma6ie24fn59sc6a2d.apps.googleusercontent.com',
			// clientSecret: 'a6JpWJkciSw1wo8wt53EIQwe',
			clientID: config.GOOGLE_CLIENT_ID,
			clientSecret: config.GOOGLE_CLIENT_SECRET,
			callbackURL: `${config.BACKEND_URI}/api/users/auth/google/callback`,
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				var userData = {
					email: profile.emails[0].value,
					name: profile.displayName,
					token: accessToken,
				};

				// Check if user is in database
				const existingUser = await User.findOne({ email: userData.email });
				if (existingUser) {
					console.log('User already exists');
					return done(null, existingUser);
				}
				const newUser = new User({
					id: profile.id,
					email: userData.email,
					displayName: userData.name,
					age: 0,
					state: '',
					country: '',
					personalID: '',
					voteStatus: false,
					method: 'google',
					completed: false,
				});
				const savedUser = await newUser.save();
				console.log('New user saved');
				done(null, savedUser);
			} catch (err) {
				console.log(err);
			}
		}
	)
);

// Twitter oauth strategy
passport.use(
	'twitter',
	new TwitterStrategy(
		{
			// consumerKey: 'y474Unv4Eo7up1FjiFlRoBnyD',
			// consumerSecret: 'z5iysTTigiHLo3aMkr0EAtVaESnxBM3d0q5xQjRhcBiRNCXjq0',
			consumerKey: config.TWITTER_CLIENT_ID,
			consumerSecret: config.TWITTER_CLIENT_SECRET,
			callbackURL: `${config.BACKEND_URI}/api/users/auth/twitter/callback`,
			userProfileURL:
				'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				var userData = {
					email: profile.emails[0].value,
					name: profile.displayName,
					token: accessToken,
				};

				// Check if user is in database
				const existingUser = await User.findOne({ email: userData.email });
				if (existingUser) {
					console.log('User already exists');
					return done(null, existingUser);
				}
				const newUser = new User({
					id: profile.id,
					email: userData.email,
					displayName: userData.name,
					age: 0,
					state: '',
					country: '',
					personalID: '',
					voteStatus: false,
					method: 'twitter',
					completed: false,
				});
				const savedUser = await newUser.save();
				console.log('New user saved');
				done(null, savedUser);
			} catch (err) {
				console.log(err);
			}
		}
	)
);

// Facebook oatuth strategy
passport.use(
	'facebook',
	new FaceBookStrategy(
		{
			// clientID: '340294483691043',
			// clientSecret: '48579e2b7b9b1c2f6a038556c1f495bf',
			clientID: config.FACEBOOK_CLIENT_ID,
			clientSecret: config.FACEBOOK_CLIENT_SECRET,
			callbackURL: `${config.BACKEND_URI}/api/users/auth/facebook/callback`,
			profileFields: ['id', 'displayName', 'email'],
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				var userData = {
					email: profile.emails[0].value,
					name: profile.displayName,
					token: accessToken,
				};

				// Check if user is in database
				const existingUser = await User.findOne({ email: userData.email });
				if (existingUser) {
					console.log('User already exists');
					return done(null, existingUser);
				}
				const newUser = new User({
					id: profile.id,
					email: userData.email,
					displayName: userData.name,
					age: 0,
					state: '',
					country: '',
					personalID: '',
					voteStatus: false,
					method: 'facebook',
					completed: false,
				});
				const savedUser = await newUser.save();
				console.log('New user saved');
				done(null, savedUser);
			} catch (error) {
				console.log(error);
			}
		}
	)
);

// Apple login
passport.use(
	'apple',
	new AppleStrategy(
		{
			...config.APPLE_CONFIG,
			// privateKeyLocation: '',
			passReqToCallback: true,
		},
		function (req, accessToken, refreshToken, decodedIdToken, profile, done) {
			console.log(profile);
			// Here, check if the decodedIdToken.sub exists in your database!
			// decodedIdToken should contains email too if user authorized it but will not contain the name
			// `profile` parameter is REQUIRED for the sake of passport implementation
			// it should be profile in the future but apple hasn't implemented passing data
			// in access token yet https://developer.apple.com/documentation/sign_in_with_apple/tokenresponse
			done(null, decodedIdToken);
		}
	)
);
passport.serializeUser(function (user, done) {
	console.log('Serializing user');
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});
