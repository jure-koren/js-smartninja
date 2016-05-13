
angular.module('app').controller('CategoryController', function($scope, Products) {
    //$scope.filterCategoryId = $scope.categoryId;
    $scope.products = Products.query();
});
 
