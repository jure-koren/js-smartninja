
angular.module('app').controller('ProductController', function($scope, Products, ngCart) {
    $scope.products = Products.query();
    
    ngCart.setTaxRate(0.0);
    ngCart.setShipping(2.99);      
});
 
