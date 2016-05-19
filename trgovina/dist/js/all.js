//  Add ui-router as a dependency
angular.module('app', ['ngResource', 'ui.router', 'ui.bootstrap', 'angular-locker', 'ngCachedResource', 'ngCart', 'ngAnimate'] );

angular.module('app').config(function($stateProvider, $urlRouterProvider){

    //  If a user goes to an url that doesn't have a valid state assigned
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home',
	{
		url: '/',
		template: '<h1>Dobrodošli v trgovini</h1><p><a ui-sref="kategorije">Pregled kategorij izdelkov</a></p>'
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

angular.module('app').controller('CheckoutController', function($scope, ngCart, locker) {

    // skupne variable
    var prefix = "myapp_";
    
    $scope.user = {ime_priimek:"", nayziv:"", ulica: "", kraj: "", drzava: ""};
    
    ngCart.setTaxRate(0.0);
    ngCart.setShipping(2.99);
    
    /*
     * naložimo iz lockerja, če imamo vrednosti od prej
     */
    $scope.loadData = function() {
        $scope.user = locker.get(prefix + "user");
    }
    $scope.loadData();
    
    /*
     * naredimo checkout
     */
    $scope.doCheckout = function() {
        // shranimo z lockerjem
        locker.put(prefix + "user", $scope.user );
        
        // pripravimo podatke za poslati na server
        var data = $scope.user;
        // dodamo products
        // rabimo še products (id, quantity)
        var products = {};
        ngCart.getItems.forEach(function(ngCartItem) {
            var item = {id: ngCartItem.getId, quantity: ngCartItem.getQuantity };
            products.push(item);
        });
        // spravimo v data
        data.products = products;
        
        // pošljemo naročilo na server - promise
        var res = $http.post('http://smartninja.betoo.si/api/eshop/orders', data);
                        res.success(function(data, status, headers, config) {
                                $scope.message = data;
                                alert("Poslano OK!");
                        });
                        res.error(function(data, status, headers, config) {
                                alert( "failure message: " + JSON.stringify({data: data}));
                        });        
        
        alert("Test OK");
    };
    
    /*
     * zbrišemo
     */
    $scope.clearData = function() {
        locker.empty();
    }
    
    
});
 

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

angular.module('app').controller('HelpController', function($scope) {
    // ok
});
 

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

angular.module('app').controller('ProductController', function($scope, Products, ngCart) {
    
    //$scope.products = Products.query;
    //console.log("Product ID" + $scope.id);
    
    // GET requests:
    var p = Products.get({id: $scope.id});
    p.$promise.then(function() {
      //console.log('From cache:', p);
      $scope.products = [p];
    });
    p.$httpPromise.then(function() {
      //console.log('From server:', p);
      $scope.products = [p];
    });    
     
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

angular.module('app').controller('SmallProductController', function($scope, Products, ngCart) {
    //$scope.products = Products.query;
    //console.log("Product ID" + $scope.id);
    
    // GET requests:
    var p = Products.get({id: $scope.id});
    p.$promise.then(function() {
      //console.log('From cache:', p);
      $scope.products = [p];
    });
    p.$httpPromise.then(function() {
      //console.log('From server:', p);
      $scope.products = [p];
    });
    
      
});
 

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

angular.module('app').controller('ProductsController', function($scope, Products) {
    $scope.products = Products.query();
});
 

angular.module('app').directive('appProducts', function(){
	return {
		restrict: 'E',
		scope:{
			find:'@'
			},
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
angular.module('app').controller('SearchController', function($scope, Products, $http, $state){

/*
    $scope.getItems = function(query){
        return $http.get('http://smartninja.betoo.si/api/eshop/products', {params:{query : query}}).then(function(response)
                                                                                                         {
                                                                                                             return response.data;
                                                                                                         })
    };
  */  
    $scope.onSelect = function ($item, $model, $label) {
        var id = $item.id;
        $state.go("produkt",  { "id": id} );
        
    };    

    $scope.getItems = function (query) {
        return Products.query({ query: query }).$promise;
    };
  
});
angular.module('app').directive('appSearch', function(){
	return {
		restrict: 'E',
		controller: 'SearchController',
		templateUrl: 'templates/search.template.html'
	};
});