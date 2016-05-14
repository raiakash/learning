'use strict';

angular.module('myApp', ['ui.router', 'ngTouch'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/state1');
		$stateProvider
			.state('state1', {
				url: '/state1',
				templateUrl: 'partials/subject.html',
				controller: 'MainCtlr'
			});
	});