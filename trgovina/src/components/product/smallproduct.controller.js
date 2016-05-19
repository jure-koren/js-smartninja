
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
 
