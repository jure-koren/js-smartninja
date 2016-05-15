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