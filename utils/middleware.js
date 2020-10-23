const { request, response } = require('express');

const tokenExtractor = (request, response, next) => {
	//getting authorization part from the request
	const authorization = request.get('authorization');

	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		request.token = authorization.substring(7);
	}

	next();
};

//Checking for general errors from the api call and response
const errorHandler = (error, request, response, next) => {
	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'Malformatted id' });
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message });
	}
};

module.exports = {
	tokenExtractor,
	errorHandler,
};
