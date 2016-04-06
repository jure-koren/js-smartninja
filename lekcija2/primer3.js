//  Setter
angular.module('app', []);

//  Getter
//angular.module('app');

//  Controllerje

angular.module('app').controller('MainController', function($scope){
  
  $scope.data = 'Živjo!';
  $scope.count = 0;
  
  var hello = 'Tudi tebi';
  var count = 0;
  
  $scope.increment = function(number)
  {
    $scope.count += number;
  };
  
  
  $scope.sayHi = function()
  {
    return hello;
  };
  
});