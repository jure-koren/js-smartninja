angular.module('app').directive('appProducts', function(){
	return {
		restrict: 'E',
		scope:{
			find:'@'
			},
		controller: 'ProductsController',
		templateUrl: 'templates/products.template.html'
	};
});