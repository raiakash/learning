var express = require('express');
var router = express.Router();
var schemas = require('../models/schemas');

// store the subject details
router.post('/', function(req, res, next) {
  var subject = req.body.data;
  var subjectSave = new schemas.subject(subject);
  subjectSave.save(function(err){
  	if (err) {
  		res.json({err: err});
  		return;
  	}else{
  		res.json({success:true});
  	}
  });
});

// get the subject details
router.get('/subject', function(req, res, next){
	console.log(req.query.subject);
	schemas.subject.find({name: req.query.subject}, function(err, data){
		if (err) {
			res.json({err: err});
			return;
		}else{
		if (data) {
				res.json({subject:data[0]});
			}
		}
	});
});

// get the teacher details
router.get('/teacher', function(req, res, next){
	console.log(req.query.teacher);
	schemas.subject.find({"teacher.name": req.query.teacher}, function(err, data){
		if (err) {
			res.json({err: err});
			return;
		}else{
		if (data) {
				res.json({teacher:data[0]});
			}
		}
	});
});

// get the student details
router.get('/student', function(req, res, next){
	console.log(req.query.student);
	schemas.subject.find({students:{$elemMatch: { name: req.query.student}}}, {name:1, teacher:1}, function(err, data){
		if (err) {
			res.json({err: err});
			return;
		}else{
		if (data) {
				res.json({students:data});
			}
		}
	});
});

module.exports = router;
