angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Dobrodošli v trgovini</h1>'
	});

	$stateProvider.state('home2',
	{
		url: '',
		template: '<h1>Dobrodošli v trgovini</h1>'
	});

	
	$stateProvider.state('produkti',
	{
		url: '/produkti',
		template: '<h1>Seznam produktov bo tu</h1>'
	});

	
	$stateProvider.state('kategorije',
	{
		url: '/kategorije',
		template: '<h1>Seznam kategorij</h1>'
	});
	
	$stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Error 404</h2>'
	});

	$stateProvider.state('pomoc',
	{
		url: '/parent',
		template: '<h1>Pomoč: <span class="text-muted"><small>Has an additional ui-view.</small></span></h1><ui-view></ui-view>'
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

