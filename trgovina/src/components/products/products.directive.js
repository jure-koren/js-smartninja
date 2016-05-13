angular.module('app').directive('appProducts', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ProductsController',
		templateUrl: 'templates/products.template.html'
	};
});