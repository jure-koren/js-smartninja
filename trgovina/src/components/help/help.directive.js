angular.module('app').directive('appHelp', function(){
	return {
		restrict: 'E',
		scope:{
			find:'@'
			},
		controller: 'HelpController',
		templateUrl: 'templates/help.template.html'
	};
});