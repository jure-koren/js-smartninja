//  Setter
angular.module('app', []);

//  Getter
//angular.module('app');

//  Controllerje

angular.module('app').controller('MainController', function($scope){
  
  $scope.newTodo = {body: 'Starting default placeholder', isCompleted: true};
  
  $scope.todos = [];
  
  $scope.addTodo = function(todo)
  {
    $scope.todos.push(todo);
    // resetiramo todo
    $scope.newTodo = {body: 'Starting default placeholder', isCompleted: true};
  
  }
});

