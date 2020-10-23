//create schemas and interaction with the database
const mongoose = require('mongoose');
//check for uniqueness of new values in the schema
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
	//define the properties
	displayName: { type: String, required: true, minlength: 2 },
	email: { type: String, unique: true },
	age: { type: Number },
	state: { type: String },
	country: { type: String },
	personalID: { type: String },
	voteStatus: { type: Boolean, required: true, default: false },
	method: {
		type: String,
		enum: ['google', 'twitter', 'facebook'],
		required: true,
	},
	completed: { type: Boolean, required: true, default: true },
	// mode of entry : google, email, twitter
});

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
