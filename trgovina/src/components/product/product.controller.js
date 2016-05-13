
angular.module('app').controller('ProductController', function($scope, Products) {
    $scope.products = Products.query();
});
 
