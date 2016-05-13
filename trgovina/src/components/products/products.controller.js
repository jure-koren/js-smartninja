
angular.module('app').controller('ProductsController', function($scope, Products) {
    $scope.products = Products.query();
});
 
