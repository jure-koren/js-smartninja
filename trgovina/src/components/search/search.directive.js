angular.module('app').directive('appSearch', function(){
	return {
		restrict: 'E',
		controller: 'SearchController',
		templateUrl: 'templates/search.template.html'
	};
});