var express = require('express');
var router = express.Router();
var User = require('../models/user.model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../utils/config');
const passport = require('passport');
const { update } = require('../models/user.model');

/* GET all users. */
// localhost/users/
router.get('/', async (req, res, next) => {
	try {
		//Let the server put this line of code in the waiting section so that others can execute
		let users = await User.find();
		let newModifiedUsers = users.map((user) => {
			return user.toJSON();
		});
		res.status(201).json(newModifiedUsers);
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

// for mobile
router.post('/profile', async (req, res, next) => {
	try {
		let body = req.body;
		let user = await User.findOne({ email: body.email });

		if (!user) {
			// create a new user and then return the user
			const newUser = new User({
				email: body.email,
				displayName: body.name,
				age: 0,
				state: '',
				country: '',
				personalID: '',
				voteStatus: false,
				method: body.mode,
				completed: false,
			});
			const savedUser = await newUser.save();
			if (savedUser) {
				user = savedUser;
			}
		}

		let detailsForToken = {
			id: user._id,
		};

		const token = jwt.sign(detailsForToken, config.SECRET);
		return res.status(201).json({ ...user.toJSON(), token });
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

router.get('/profile/:id', async (req, res, next) => {
	try {
		let id = req.params.id;
		let user = await User.findById(id);
		if (!user) {
			throw new Error('no user found');
		}
		return res.status(201).json(user.toJSON());
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

router.post('/completeProfile', async (req, res, next) => {
	try {
		let body = req.body;
		let newUser = new User({
			...body,
		});
		delete newUser.id;
		delete newUser._id;
		newUser._id = body.id;

		let updatedUser = await User.findOneAndUpdate({ _id: body.id }, body, {
			new: true,
			upsert: true,
			useFindAndModify: true,
		});
		if (!updatedUser) {
			throw new Error('User update failed');
		}
		return res.status(201).json(updatedUser.toJSON());
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

// Google login route
router.get(
	'/auth/google',
	passport.authenticate('googleToken', { scope: ['profile', 'email'] })
);

router.get(
	'/auth/google/callback',
	passport.authenticate('googleToken', {
		failureRedirect: '/',
		session: false,
	}),
	function (req, res) {
		var id = req.user._id;
		let detailsForToken = {
			id,
		};

		const token = jwt.sign(detailsForToken, config.SECRET);
		res.redirect(`http://appyvote.com/vote/?id=${id}&token=${token}`);
		// res.redirect(
		// 	`https://makai-test.herokuapp.com/vote?id=${id}&token=${token}`
		// );
	}
);

// Twitter login route
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get(
	'/auth/twitter/callback',
	passport.authenticate('twitter', {
		failureRedirect: '/',
		session: false,
	}),
	function (req, res) {
		var id = req.user._id;
		let detailsForToken = {
			id,
		};

		const token = jwt.sign(detailsForToken, config.SECRET);
		res.redirect(`http://appyvote.com/vote/?id=${id}&token=${token}`);
		// res.redirect(
		// 	`https://makai-test.herokuapp.com/vote?id=${id}&token=${token}`
		// );
	}
);

// Facebook login route
router.get(
	'/auth/facebook',
	passport.authenticate('facebook', { scope: ['email'] })
);

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', {
		failureRedirect: '/',
		session: false,
	}),
	function (req, res) {
		var id = req.user._id;
		let detailsForToken = {
			id,
		};

		const token = jwt.sign(detailsForToken, config.SECRET);
		res.redirect(`http://appyvote.com/vote/?id=${id}&token=${token}`);
		// res.redirect(
		// 	`https://makai-test.herokuapp.com/vote?id=${id}&token=${token}`
		// );
	}
);

// Apple login route
router.get('/auth/apple', passport.authenticate('apple', { scope: ['email'] }));

router.get(
	'/auth/apple/callback',
	passport.authenticate('apple', {
		failureRedirect: '/',
		session: false,
	}),
	function (req, res) {
		var id = req.user._id;
		let detailsForToken = {
			id,
		};

		const token = jwt.sign(detailsForToken, config.SECRET);
		res.redirect(`http://appyvote.com/vote?id=${id}&token=${token}`);
	}
);
module.exports = router;

// Registering a new user
//localhost/users/register
router.post('/register', async (req, res, next) => {
	try {
		//getting body from the browser
		let body = req.body;

		//hashing the password using bcrypt
		let saltRounds = 10;
		let hashPassword = await bcrypt.hash(body.password, saltRounds);

		// defining a new User object from the schema
		const newUser = new User({
			firstName: body.firstName,
			lastName: body.lastName,
			age: body.age,
			country: body.country,
			email: body.email,
			address: body.address,
			password: hashPassword,
			personalID: body.personalID,
		});

		//saving the user to the database
		let savedUser = await newUser.save();
		res.status(201).send(savedUser);
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

//Login the user
//localhost/users/login
router.post('/login', async (req, res, next) => {
	try {
		let body = req.body;
		//findOne is a mongoose function that finds exactly one entry from the database
		let user = await User.findOne({
			email: body.email,
		});

		//Checking if password is correct when user is found
		let isPasswordCorrect =
			user === null
				? false
				: await bcrypt.compare(body.password, user.password);

		//If user was not found or password was incorrect
		if (!(user && isPasswordCorrect)) {
			return res.status(401).send({ error: 'Invalid username/password' });
		}

		let detailsForToken = {
			email: user.email,
			id: user._id,
		};

		const token = jwt.sign(detailsForToken, config.SECRET);
		res.status(201).send({ token, id: user._id, voteStatus: user.voteStatus });
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});
