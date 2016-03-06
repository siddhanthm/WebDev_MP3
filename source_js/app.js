var app = angular.module('mp3',['ngRoute','movieControllers']);

app.config(function ($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl: './../partials/list.html',
		controller: 'ListController'
	}).when('/details/:itemID', {
		templateUrl: './../partials/details.html',
		controller: 'DetailController'
	}).when('/gallery', {
		templateUrl: './../partials/gallery.html',
		controller: 'GalleryController'
	}).otherwise({ redirectTo: '/list' });
});
