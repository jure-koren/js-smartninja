angular.module('app').directive('appProduct', function(){
	return {
		restrict: 'E',
		scope:{
			id:'@'
			},
		controller: 'ProductController',
		templateUrl: 'templates/product.template.html'
	};
});