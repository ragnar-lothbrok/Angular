var app  = angular.module("myApp", []);

app.controller('myController', function ($scope) {
	$scope.todos = ['Item 1', 'Item 2', 'Item 3'];
	$scope.addTodo = function () {
		var isPresent = false;
		for(var i=0;i<$scope.todos.length;i++){
			if($scope.todos[i] == $scope.todo){
				isPresent = true;
				$scope.warning='Dont add duplicates';
				break;
			}
		}
		if(!isPresent){
			$scope.todos.push($scope.todo);
			$scope.warning='';
		}

		$scope.todo = '';
	};
	$scope.removeTodo = function(index){
		$scope.todos.splice(index, 1);
	}
	})