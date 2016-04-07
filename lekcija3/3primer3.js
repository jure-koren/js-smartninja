angular.module('app', []);

angular.module('app').controller('MainController', function($scope){
  
  $scope.$watch('watchMe', function(newValue, oldValue){
    alert(newValue);
  });
  
  $scope.onChange = function()
  {
   // alert('on change');
  };
});

