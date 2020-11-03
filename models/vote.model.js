//create schemas and interaction with the database
const mongoose = require('mongoose');
//check for uniqueness of new values in the schema
const uniqueValidator = require('mongoose-unique-validator');

const voteSchema = mongoose.Schema({
	//define the properties
	primaryParty: { type: String, required: true },
	secondaryParty: { type: String },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // DKS: save querying twice for voting and users
	comment: { type: String },
});

voteSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

voteSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Vote', voteSchema);
