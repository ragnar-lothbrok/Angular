var app = angular.module("myApp",[]);

app.controller('myController',function($scope){
	 $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function(response) {$scope.names = response.records;
    });
});