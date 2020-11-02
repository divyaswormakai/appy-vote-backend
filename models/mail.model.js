//create schemas and interaction with the database
const mongoose = require('mongoose');

const mailSchema = mongoose.Schema({
	//define the properties
	from: { type: String, required: true },
	subject: { type: String },
	body: { type: String },

	// mode of entry : google, email, twitter
});

mailSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model('Mail', mailSchema);
