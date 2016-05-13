angular.module('app').directive('appCategory', function(){
	return {
		restrict: 'E',
		scope:{
			categoryId:'@'
			},
		controller: 'CategoryController',
		templateUrl: 'templates/category.template.html'
	};
});