angular.module('app', []);

angular.module('app').directive('customDirective', function(){
  
  return {
    restrict: 'AE',
    controller: function($scope){
      $scope.data = 'Adijo';
    },
    scope: {
      name: '=name',
      surname: '@surname',
      getName: '&'
    },
    template: '<p>Živjo {{ name }}- surname: {{ surname }}</p><p>{{ data }}</p>'
  };
  
  //  templateURL: '/templates/hello.html'
});






angular.module('app').controller('MainController', function($scope){
  
  $scope.person = 'Miha';
});

