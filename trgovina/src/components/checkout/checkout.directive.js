angular.module('app').directive('appCheckout', function(){
	return {
		restrict: 'E',
		scope:{
			find:'@'
			},
		controller: 'CheckoutController',
		templateUrl: 'templates/checkout.template.html'
	};
});