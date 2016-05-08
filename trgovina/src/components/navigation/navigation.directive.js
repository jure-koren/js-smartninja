angular.module('app').directive('appNavigation', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'NavigationController',
		templateUrl: 'templates/navigation.template.html'
	};
});