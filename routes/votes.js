var express = require('express');
var router = express.Router();
var Vote = require('../models/vote.model');
var User = require('../models/user.model');
var jwt = require('jsonwebtoken');
var config = require('../utils/config');

/* GET all users. */
// localhost:3000/votes/
router.get('/', async (req, res, next) => {
	try {
		//Let the server put this line of code in the waiting section so that others can execute
		let votes = await Vote.find();
		console.log(votes.length);
		let newModifiedVotes = votes.map((vote) => {
			console.log(vote);
			return vote.toJSON();
		});
		res.status(201).json(newModifiedVotes);
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

//Registering a vote
// localhost:3000/votes/vote
router.post('/vote', async (req, res) => {
	try {
		let body = req.body;

		//Parsing the token from header
		// let token = req.headers.authorization;
		// console.log(token);

		//Getting the token from the req
		let token = req.token;
		let modifiedToken = token.replace('Bearer ', '');
		//Getting the actual token with jsonwebtoken
		let decodedToken = jwt.verify(modifiedToken, config.SECRET);
		console.log(decodedToken);

		//Checking if token is decoded properly
		if (!token || !decodedToken.id) {
			return res.status(401).json({ error: 'Token invalid' });
		}

		//Check if the id exists in our user collection
		let user = await User.findById(decodedToken.id);
		if (!user) {
			return res.status(401).json({ error: 'User not registered' });
		}

		//Saving the vote
		let newVote = new Vote({
			primaryParty: body.primaryParty,
			secondaryParty: body.secondaryParty,
			comment: body.comment,
			user: user._id,
		});

		const savedVote = await newVote.save();

		if (savedVote) {
			let updatedUser = await User.findByIdAndUpdate(
				decodedToken.id,
				{
					$set: { voteStatus: true },
				},
				{ upsert: true, new: true }
			);
			if (updatedUser) {
				res.status(201).json({ user: updatedUser });
			} else {
				return res.status(401).json({ error: 'Updating user status failed' });
			}
		} else {
			return res.status(401).json({ error: 'Saving vote failed' });
		}
	} catch (err) {
		console.log(err);
		res.status(400).send({ error: err.messsage });
	}
});

module.exports = router;
