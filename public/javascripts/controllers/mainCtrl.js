'use strict';

angular.module('myApp')
	.controller('MainCtlr', ['$scope', '$http', function($scope, $http){
		$scope.new = {};
		$scope.inputs = [];
		$scope.addfield = function(){
			$scope.inputs.push({});
		};

		$scope.update = function(value){
			var data={};
			var models = {};
			data = angular.copy(value);
			data.students = angular.copy($scope.inputs);
			if (data.subject && data.teacher) {
				var teacher = {};
				var subjectModel = {};
				subjectModel['name'] = data.subject;
				teacher['name'] = data.teacher;
				subjectModel.teacher = teacher;
				subjectModel.students = data.students; 
				console.log('subjectModel', subjectModel);
				$http.post('/api', {data:subjectModel}).success(function(data){
					console.log(data);
				}).error(function(err){
					console.log(err);
				});
			}
		};

		$scope.reset = function () {
			$scope.formData = $scope.new;
			$scope.inputs = [];
		};

		$scope.getSubjectDetails = function(subject){
			console.log(subject);
			$http.get('/api/subject', {params:{subject: subject}}).success(function(data) {
				$scope.subjectDetails = data;
			}).error(function(err) {
				console.log(err);
			});
		}; 

		$scope.getTeacherDetails = function(teacher){
			console.log(teacher);
			$http.get('/api/teacher', {params:{teacher: teacher}}).success(function(data) {
				$scope.teacherDetails = data;
			}).error(function(err) {
				console.log(err);
			});
		}; 

		$scope.getStudentDetails = function(student){
			console.log(student);
			$http.get('/api/student', {params:{student: student}}).success(function(data) {
				$scope.studentDetails = data;
			}).error(function(err) {
				console.log(err);
			});
		}; 
		$scope.reset();
	}]);