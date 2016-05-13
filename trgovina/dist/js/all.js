//  Add ui-router as a dependency
angular.module('app', ['ngResource', 'ui.router', 'ui.bootstrap', 'angular-locker', 'ngCachedResource'] );

angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/error');

	$stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Dobrodošli v trgovini</h1>'
	});

	
	$stateProvider.state('produkti',
	{
		url: '/produkti',
		template: '<app-products></app-products>'
	});

	
	$stateProvider.state('kategorije',
	{
		url: '/kategorije',
		template: '<app-categories></app-categories>'
	});
	
	$stateProvider.state('produkt', {
		url: '/produkt/:id',
		template: '<h1>Prikaz izdelka</h1><app-product id="{{ id }}"></app-product>',
		controller: function($scope, $stateParams, $state){
			//  Use $stateParams to get url parameters
			$scope.id = $stateParams.id;
		}
	});
	
	$stateProvider.state('kategorija', {
		url: '/kategorija/:categoryId',
		template: '<app-category category-id="{{ categoryId }}"></app-category>',
		controller: function($scope, $stateParams, $state){
			//  Use $stateParams to get url parameters
			$scope.categoryId = $stateParams.categoryId;
		}
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
/*angular.module("app").factory(
                            "Categories",
                            function($resource) {
                                return $resource("http://smartninja.betoo.si/api/eshop/categories/:id");
                            }
);*/
angular.module("app").factory("Categories", function($cachedResource) {
    return $cachedResource('Categories', 'http://smartninja.betoo.si/api/eshop/categories/:id', {id: "@id"});
});

angular.module('app').controller('CategoryController', function($scope, Products) {
    //$scope.filterCategoryId = $scope.categoryId;
    $scope.products = Products.query();
});
 

angular.module('app').directive('appCategory', function(){
	return {
		restrict: 'E',
		scope:{
			categoryId:'@'
			},
		controller: 'CategoryController',
		templateUrl: 'templates/category.template.html'
	};
});
angular.module("app").factory(
                            "Category",
                            function($resource) {
                                return $resource("http://smartninja.betoo.si/api/eshop/categories/products/:id");
                            }
);
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

angular.module('app').controller('ProductController', function($scope, Products) {
    $scope.products = Products.query();
});
 

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

angular.module('app').controller('ProductsController', function($scope, Products) {
    $scope.products = Products.query();
});
 

angular.module('app').directive('appProducts', function(){
	return {
		restrict: 'E',
		scope:{},
		controller: 'ProductsController',
		templateUrl: 'templates/products.template.html'
	};
});
/*angular.module("app").factory("Products", function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/products/:id');
});*/
angular.module("app").factory("Products", function($cachedResource) {
    return $cachedResource('Products', 'http://smartninja.betoo.si/api/eshop/products/:id', {id: "@id"});
});