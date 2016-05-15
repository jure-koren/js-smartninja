angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Dobrodošli v trgovini</h1>'
	});

	
	$stateProvider.state('produkti',
	{
		url: '/produkti/:find',
		template: '<app-products find="{{ find }}""></app-products>',
		controller: function($scope, $stateParams, $state){
			$scope.find = $stateParams.find;
		}		
	});

	
	$stateProvider.state('kategorije',
	{
		url: '/kategorije',
		template: '<app-categories></app-categories>'
	});
	
	$stateProvider.state('produkt', {
		url: '/produkt/:id',
		template: '<h1 class="izdelek-{{ id }}">Prikaz izdelka</h1><app-product id="{{ id }}"></app-product>',
		controller: function($scope, $stateParams, $state){
			$scope.id = $stateParams.id;
		}
	});
	
	$stateProvider.state('kategorija', {
		url: '/kategorija/:categoryId',
		template: '<app-category category-id="{{ categoryId }}"></app-category>',
		controller: function($scope, $stateParams, $state){
			$scope.categoryId = $stateParams.categoryId;
		}
	});
	
	

	$stateProvider.state('cart', {
		url: '/cart',
		template: '<ngcart-cart></ngcart-cart>'
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
	


	
	$stateProvider.state('error',
	{
		url: '/error',
		template: '<h2>Error 404</h2>'
	});	
	

});

