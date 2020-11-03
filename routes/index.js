var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../utils/config');

const User = require('../models/user.model');
const Vote = require('../models/vote.model');
const Mail = require('../models/mail.model');

const colors = [
	'rgba(0, 99, 132, 1)',
	'rgba(255, 255, 132, 1)',
	'rgba(255, 99, 132, 1)',
	'rgba(150, 99, 150, 1)',
	'rgba(0, 150,150, 1)',
	'rgba(150, 99, 200, 1)',
];

const presidents = [
	'Donald J. Trump',
	'Joe Biden',
	'Berney Sanders',
	'Eliazabeth Warren',
	'Mike Blooomberg',
];

const presidentsMobile = [
	'D. Trump',
	'J. Biden',
	'B. Sanders',
	'E. Warren',
	'M. Blooomberg',
];
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/home', function (req, res, next) {
	//In the terminal
	console.log('This is the home route');
	//In the browser
	res.send('This is the home route');
});

router.get('/overviewMobile', async (req, res, next) => {
	try {
		const primaryVotes = await Vote.aggregate([
			{ $group: { _id: '$primaryParty', count: { $sum: 1 } } },
			{ $sort: { _id: 1 } },
		]);

		let primaryParty = [];

		presidents.forEach((candidate, indx) => {
			let primaryTemp = {};

			let primarycount = primaryVotes.find((vote) => vote._id === candidate);

			primaryTemp.name = presidentsMobile[indx];
			primaryTemp.color = colors[indx];
			primaryTemp.legendFontColor = '#7f7f7f';
			primaryTemp.legendFontSize = 15;
			primaryTemp.population = primarycount ? primarycount.count : 0;
		});

		let returnData = { primaryParty };
		res.send(returnData);
	} catch (err) {
		res.send({ error: err.message });
	}
});

router.get('/overview', async (req, res, next) => {
	try {
		// Getting data from real database, this is for testing only
		const primaryVotes = await Vote.aggregate([
			{ $group: { _id: '$primaryParty', count: { $sum: 1 } } },
			{ $sort: { _id: 1 } },
		]);

		let returnData = { labels: ['Primary Votes'] };
		const dataSets = presidents.map((candidate, indx) => {
			let primary = primaryVotes.find((vote) => vote._id === candidate);
			return {
				label: candidate,
				data: [primary ? primary.count : 0],
				backgroundColor: colors[indx],
			};
		});

		returnData.datasets = dataSets;
		res.send(returnData);
	} catch (err) {
		res.send({ error: err.message });
	}
});

router.get('/comments', async (req, res, next) => {
	try {
		const votes = await Vote.find().populate('user');
		let filteredComments = votes
			.filter((vote) => vote.comment.length > 0)
			.map((vote) => {
				return {
					comment: vote.comment,
					user: vote.user.displayName,
				};
			});
		res.send(filteredComments);
	} catch (err) {
		res.send({ error: err.message });
	}
});

router.get('/totalCounts', async (req, res, next) => {
	try {
		const votes = await Vote.countDocuments({}).exec();
		const users = await User.countDocuments({}).exec();
		res.send({ voteCount: votes, userCount: users });
	} catch (err) {
		res.send({ error: err.message });
	}
});

router.get('/ageData', async (req, res, next) => {
	try {
		const data = await Vote.find().populate('user');
		let count = [0, 0, 0];

		data.forEach((vote) => {
			if (vote.user.age <= 30) {
				count[0] += 1;
			} else if (vote.user.age <= 50) {
				count[1] += 1;
			} else {
				count[2] += 1;
			}
		});

		const returnData = {
			labels: ['18-30', '30-50', '50+'],
			datasets: [
				{
					label: 'US',
					data: count,
					backgroundColor: [
						'rgba(0, 99, 132, 1)',
						'rgba(255, 99, 132, 1)',
						'rgba(0, 255, 132, 1)',
						'rgba(150, 99, 0, 1)',
					],
				},
			],
		};
		res.send(returnData);
	} catch (err) {
		res.send({ error: err.message });
	}
});

router.get('/bubbleChart', async (req, res, next) => {
	try {
		let allObj = {};
		let returnData = [];
		const voteData = await Vote.find().populate('user');
		voteData.forEach((data) => {
			if (allObj[data.user.country]) {
				allObj[data.user.country] += 1;
			} else {
				allObj[data.user.country] = 1;
			}
		});
		Object.keys(allObj).map((key) => {
			let temp = {};
			temp.label = key;
			temp.value = allObj[key];
			returnData.push(temp);
		});
		res.send(returnData);
	} catch (err) {
		res.send({ error: err.message });
	}
});

router.get('/forum', async (req, res, next) => {
	try {
		let result = await axios.get(
			'http://www.reddit.com/r/politics/hot.json?sort=hot&count=15'
		);
		let returnData = result.data.data.children.map((child) => {
			let date = new Date(child.data.created_utc);
			return {
				text: child.data.selftext,
				author: child.data.author,
				date: date.toLocaleDateString(),
				time: date.toLocaleTimeString(),
				url: child.data.url,
			};
		});
		res.send(returnData);
	} catch (err) {
		console.log(err);
		res.send({ error: err.message });
	}
});

router.get('/news', async (req, res, next) => {
	try {
		let result = await axios.get(
			`http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${config.NEWS_API}`
		);
		let partofData = result.data.articles.splice(0, 10);
		let returnData = partofData.map((item) => {
			let date = new Date(item.publishedAt);
			return {
				title: item.title,
				imgUrl: item.urlToImage,
				date: date.toLocaleDateString(),
				time: date.toLocaleTimeString(),
				url: item.url,
			};
		});
		res.send(returnData);
	} catch (err) {
		console.log(err);
		res.send({ error: err.message });
	}
});

router.post('/sendMail', async (req, res, next) => {
	try {
		let body = req.body;
		let mail = new Mail({
			from: body.from,
			subject: body.subject,
			body: body.body,
		});

		let savedMail = await mail.save();
		if (savedMail) {
			console.log(savedMail);
			res.send({ success: true });
		} else {
			throw new Error('Could not send mail');
		}
	} catch (err) {
		console.log(err);
		res.send({ error: err.message });
	}
});

module.exports = router;
