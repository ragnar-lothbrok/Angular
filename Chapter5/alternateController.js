var app = angular.module("myApp",[]);
app.factory('MyAPIService', function($http){
  var apiurl="http://www.w3schools.com/angular/customers.php", myData;
  return {
    getData: function(){
      $http.get(apiurl)
      .success(function(data, status, config, headers){
        myData = data;
      })
      .error(function(){ //handler errors here
      });
    },
    data: function() { return myData; }
  };
});

app.controller('myController',function($scope, $MyAPIService){
	$scope.names = MyAPIService.data();
});