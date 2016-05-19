angular.module('app').directive('appSmallProduct', function(){
	return {
		restrict: 'E',
		scope:{
			id:'@',
			product:'@'
			},
		controller: 'SmallProductController',
		templateUrl: 'templates/smallproduct.template.html'
	};
});