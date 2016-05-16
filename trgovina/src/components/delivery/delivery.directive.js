angular.module('app').directive('appDelivery', function(){
	return {
		restrict: 'E',
		scope:{
			find:'@'
			},
		controller: 'DeliveryController',
		templateUrl: 'templates/delivery.template.html'
	};
});