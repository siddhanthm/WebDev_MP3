/* Sample Controller */
var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('ListController', ['$scope','$http', function($scope, $http){
	$http.get('../data/imdb250.json').success(function(data){
		$scope.movies = data;
		$scope.movieOrder = "rank";
	});
}]);

movieControllers.controller('DetailController', ['$scope','$http' ,'$routeParams' , function ($scope, $http, $routeParams) {
	$http.get('../data/imdb250.json').success(function(data){
		$scope.movies = data;
		$scope.whichItem  = $routeParams.itemID;

		if ($routeParams.itemID > 0) {
	      $scope.prevItem = Number($routeParams.itemID)-1;
	    }else{
	      $scope.prevItem = $scope.movies.length-1;
	    }

	    if ($routeParams.itemID < $scope.movies.length-1) {
	    	$scope.nextItem = Number($routeParams.itemID)+1;
	    }else{
	    	$scope.nextItem = 0;
	    }

	});
}]);

movieControllers.controller('GalleryController', ['$scope','$http', function ($scope, $http) {
	$http.get('../data/imdb250.json').success(function(data){
		$scope.movies = data;
	});
	$scope.filterBy = function(x){
		$scope.myfilterBy = x;
	}
	$scope.myfilterBy = "";
}]);