angular.module('app').directive('appCategories', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'CategoriesController',
		templateUrl: 'templates/categories.template.html'
	};
});