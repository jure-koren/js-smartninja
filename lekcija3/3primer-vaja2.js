angular.module('app', []);

angular.module('app').controller('MainController', function($scope){
  
  $scope.obrazci = [
              {name : 'Povpraševanje', x: 1},
              {name: 'Obrazec', x: 2}, 
              {name: 'Gremo na pivo', x: 3}];
  
  $scope.selectedItem = $scope.obrazci[0];
 
  
  
});

