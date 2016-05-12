//  Add ui-router as a dependency
angular.module('app', ['ngResource', 'ui.router'] );

angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Dobrodo≈°li v trgovini</h1>'
	});

	$stateProvider.state('home2',
	{
		url: '',
		template: '<h1>Dobrodo≈°li v trgovini</h1>'
	});

	
	$stateProvider.state('produkti',
	{
		url: '/produkti',
		template: '<h1>Seznam produktov bo tu</h1>'
	});

	
	$stateProvider.state('kategorije',
	{
		url: '/kategorije',
		template: '<app-categories></app-categories>'
	});
	
	$stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Error 404</h2>'
	});

	$stateProvider.state('pomoc',
	{
		url: '/parent',
		template: '<h1>Pomoƒç: <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
	});

	$stateProvider.state('pomoc.faq', 
	{
		url: '/faq',
		template: '<div class="well"><h4>Faq</h4></div>'
	})
	$stateProvider.state('pomoc.contact', 
	{
		url: '/contact',
		template: '<div class="well"><h4>Kontaktni obrazec</h4></div>'
	})	
	

	$stateProvider.state('produkt', {
		url: '/produkt/:id',
		template: '<h1>Izbrali ste produkt</h1><p>ID : {{ id }}</p>',
		controller: function($scope, $stateParams, $state){
		//  Use $stateParams to get url parameters
		$scope.id = $stateParams.id;

		}
	});
	
	$stateProvider.state('kategorija', {
		url: '/kategorija/:ime',
		template: '<h1>Izbrali ste kategorijo produktov</h1><p>Ime : {{ ime }}</p>',
		controller: function($scope, $stateParams, $state){
		//  Use $stateParams to get url parameters
		$scope.ime = $stateParams.ime;

		}
	});	
	

});


angular.module('app').controller('ExampleController', function($scope){

	$scope.example = 'Example from ExampleController';

});
angular.module('app').directive('appExample', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ExampleController',
		templateUrl: 'templates/example-template.html'
	};
});
angular.module('app').controller('NavigationController', function($scope){

	$scope.example = 'Jaz sem meni';

});
angular.module('app').directive('appNavigation', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'NavigationController',
		templateUrl: 'templates/navigation.template.html'
	};
});

angular.module(‘app’).factory(‘Products’, function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/products/:id');
});

angular.module('app').controller('CategoriesController', function($scope, Categories) {
    $scope.categories = Categories.query();
});
 

angular.module('app').directive('appCategories', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'CategoriesController',
		templateUrl: 'templates/categories.template.html'
	};
});
angular.module(‘app’).factory(
                            Categories,
                            function($resource) {
                                return $resource('http://smartninja.betoo.si/api/eshop/categories/:id');
                            }
);