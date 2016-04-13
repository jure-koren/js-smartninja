angular.module('app', []);

angular.module('app').controller('PromiseController', function($scope, $q, $http){
  
  $scope.cars = 'Ni avtomobilov';
  
  $http.get('http://smartninja.betoo.si/api/CMW/cars',{data: 'test'}, {params: {query:'test'}}).then(function(success){
    $scope.cars = success.data;
  }, function(error){
    alert('Tole ni delalo');
  });
 
  
  
  
  
  
  
  
  
  $scope.result = "Default value";
  
  $scope.firePromise = function()
  {
    $scope.result = 'Iščem podatke';
    var promise = createPromise();
    
    promise.then(function(success){
 
      $scope.result = success;
      
      return createPromise();
    }, function(failure){
      $scope.result = failure;
      
      return createPromise();
    })
    .then(function(success2){
      
      $scope.result = success2 + '2';
    }, function(error2){
      
      $scope.result = error2 + '2';
    });
    
  };
  
  function createPromise()
  {
    var deffered = $q.defer();
    
    //  Mock strežnika
    setTimeout(function(){
   
      if(Math.round(Math.random()))
        {
          deffered.resolve('Success');
        }
      else
        {
          deffered.reject('Fail');
        }
      
    }, 3000);
    
    return deffered.promise;
  }
});