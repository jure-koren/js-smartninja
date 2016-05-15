angular.module('app').directive('appSmallProduct', function(){
	return {
		restrict: 'E',
		scope:{
			id:'@'
			},
		controller: 'ProductController',
		templateUrl: 'templates/smallproduct.template.html'
	};
});