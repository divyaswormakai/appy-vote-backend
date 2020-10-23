var express = require('express');
var router = express.Router();
var axios = require('axios');
const config = require('../utils/config');

const User = require('../models/user.model');
const Vote = require('../models/vote.model');
const colors = [
	'rgba(0, 99, 132, 1)',
	'rgba(255, 255, 132, 1)',
	'rgba(255, 99, 132, 1)',
	'rgba(150, 99, 150, 1)',
	'rgba(0, 150,150, 1)',
	'rgba(150, 99, 200, 1)',
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
		const secondaryVotes = await Vote.aggregate([
			{ $group: { _id: '$secondaryParty', count: { $sum: 1 } } },
			{ $sort: { _id: 1 } },
		]);

		let primaryParty = [];
		let secondaryParty = [];

		primaryVotes.forEach((candidate, indx) => {
			let primaryTemp = {};
			let secondaryTemp = {};
			primaryTemp.name = candidate._id;
			primaryTemp.color = colors[indx];
			primaryTemp.legendFontColor = '#7f7f7f';
			primaryTemp.legendFontSize = 15;
			primaryTemp.population = primaryVotes[indx].count;

			secondaryTemp = { ...primaryTemp };
			secondaryTemp.population = secondaryVotes[indx].count;
			primaryParty.push(primaryTemp);
			secondaryParty.push(secondaryTemp);
		});

		let returnData = { primaryParty, secondaryParty };
		res.send(returnData);
		// const data = {
		// 	US: [
		// 		{
		// 			name: 'Seoul',
		// 			population: Math.ceil(Math.random() * 10000),
		// 			color: 'rgba(131, 167, 234, 1)',
		// 			legendFontColor: '#7F7F7F',
		// 			legendFontSize: 15,
		// 		},
		// 		{
		// 			name: 'Toronto',
		// 			population: Math.ceil(Math.random() * 100000),
		// 			color: '#F00',
		// 			legendFontColor: '#7F7F7F',
		// 			legendFontSize: 15,
		// 		},
		// 		{
		// 			name: 'Beijing',
		// 			population: Math.ceil(Math.random() * 100000),
		// 			color: 'red',
		// 			legendFontColor: '#7F7F7F',
		// 			legendFontSize: 15,
		// 		},
		// 	],
		// 	Others: [
		// 		{
		// 			name: 'Seoul',
		// 			population: Math.ceil(Math.random() * 10000),
		// 			color: 'rgba(131, 167, 234, 1)',
		// 			legendFontColor: '#7F7F7F',
		// 			legendFontSize: 15,
		// 		},
		// 		{
		// 			name: 'Toronto',
		// 			population: Math.ceil(Math.random() * 100000),
		// 			color: '#F00',
		// 			legendFontColor: '#7F7F7F',
		// 			legendFontSize: 15,
		// 		},
		// 		{
		// 			name: 'Beijing',
		// 			population: Math.ceil(Math.random() * 100000),
		// 			color: 'red',
		// 			legendFontColor: '#7F7F7F',
		// 			legendFontSize: 15,
		// 		},
		// 	],
		// };
		// res.send(data);
	} catch (err) {
		// console.log(err.message);
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
		const secondaryVotes = await Vote.aggregate([
			{ $group: { _id: '$secondaryParty', count: { $sum: 1 } } },
			{ $sort: { _id: 1 } },
		]);
		// console.log(primaryVotes);
		// console.log(secondaryVotes);
		let returnData = { labels: ['Primary Votes', 'Secondary Votes'] };
		const dataSets = primaryVotes.map((candidate, indx) => {
			return {
				label: candidate._id,
				data: [primaryVotes[indx].count, secondaryVotes[indx].count],
				backgroundColor: colors[indx],
			};
		});
		returnData.datasets = dataSets;
		// let tempData = {
		// 	labels: ['In US', 'Other Countries'],
		// 	datasets: [
		// 		{
		// 			// data[0] for US, data[1] for all other countries
		// 			label: 'President 1 ',
		// 			data: [
		// 				Math.ceil(Math.random() * 100000),
		// 				Math.ceil(Math.random() * 100000),
		// 			],
		// 			backgroundColor: 'rgba(0, 99, 132, 0.6)',
		// 		},
		// 		{
		// 			label: 'President 2',
		// 			data: [
		// 				Math.ceil(Math.random() * 100000),
		// 				Math.ceil(Math.random() * 100000),
		// 			],
		// 			backgroundColor: 'rgba(255, 255, 132, 0.6)',
		// 		},
		// 		{
		// 			label: 'President 3',
		// 			data: [
		// 				Math.ceil(Math.random() * 100000),
		// 				Math.ceil(Math.random() * 100000),
		// 			],
		// 			backgroundColor: 'rgba(255, 99, 132, 0.6)',
		// 		},
		// 		{
		// 			label: 'President 4',
		// 			data: [
		// 				Math.ceil(Math.random() * 100000),
		// 				Math.ceil(Math.random() * 100000),
		// 			],
		// 			backgroundColor: 'rgba(255, 99, 0, 0.6)',
		// 		},
		// 	],
		// };
		res.send(returnData);
	} catch (err) {
		// console.log(err);
		res.send({ error: err.message });
	}
});

router.get('/forum', async (req, res, next) => {
	try {
		let result = await axios.get(
			'http://www.reddit.com/r/TrueOffMyChest/hot.json?sort=hot&count=10'
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

module.exports = router;
