angular.module('app', []);

angular.module('app').controller('FirstController', function($scope, DataFactory){
  $scope.factory = DataFactory;
  
  $scope.$on('fired.event', function(event, data){
    
    
    
  });
  

angular.module('app').controller('SecondController', function($scope){
  
});

angular.module('app').controller('ThirdController', function($scope){
  
});

angular.module('app').controller('FourthController', function($scope, $rootScope, DataFactory){
  $scope.factory = DataFactory;
  
  $scope.fireEvent = function()
  {
    $rootScope.$broadcast('fired.event', {data: 'Data to be sent'});
  };
  
 
});


//  factory
angular.module('app').factory('DataFactory', function($http){
  
  var array = [];
  
  return {
    add: addTask,
    getCars: getCars
  };
  
  function getCars()
  {
    return $http.get('url');
  }
  
  function addTask(task)
  {
    array.push(task);
  }
  
});
