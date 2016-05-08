angular.module('app').controller('CategoriesController', function($scope, $q, $http){

	/*
     * naložimo kategorije
     */
  $http.get('http://smartninja.betoo.si/api/eshop/categories',{iskanje: 'test'}).then(function(success){
    $scope.categories = success.data;
  }, function(error){
    alert('Tole ni delalo');
  } );

});