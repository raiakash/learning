var mongoose = require('mongoose')
var config = require('../config/config');
// database config
var Schema = mongoose.Schema;
mongoose.connect(config.database);


module.exports.subject = mongoose.model('subject', new Schema({
	name: String,
	teacher: {
		name: String
	},
	students:[{
		name: String
	}]
}));

module.exports.teacher = mongoose.model('teacher', new Schema({
	name: String,
	students:[{
		name: String
	}]
}));

module.exports.student = mongoose.model('student', new Schema({
	name: String,
	subjects:[{
		name: String
	}] 
}))