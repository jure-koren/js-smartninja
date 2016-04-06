//  Setter
angular.module('app', []);

//  Getter
//angular.module('app');

//  Controllerje

angular.module('app').controller('MainController', function($scope){
  $scope.newTodo = {body: "Prvi", isCompleted: true;};
  
  $scope.todos = [];
  
  $scope.addTodo = function(todo)
  {
    $scope.todos.push(todo);
  }
  
  
  
  
});