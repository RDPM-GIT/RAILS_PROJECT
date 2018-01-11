app.controller('EditController', ['$scope','$http','$location','$window', '$routeParams', '$firebaseObject', 'FBURL',   
function($scope, $http, $location,$window, $routeParams, $firebaseObject, FBURL){
   
var id = $routeParams.id
console.log('-------------------'+id);

var init = function () {
    $http({
      url: 'http://localhost:3000/api/v1/records/' + id,
      method: "GET",
    }).success(function (data, status, message) {
        $scope.entries=data.data
      console.log(data);
      console.log(message);
    }).error(function (data, status, message) {
      console.log(status)
    });
  }
    init();

$scope.editEntries = function () {
    console.log(id);
    $http({
      url: 'http://localhost:3000/api/v1/records/'+id,
      method: "PUT",
      data: {
        "name": $scope.entries.name,
        "place": $scope.entries.place,
        "age": $scope.entries.age
      },
      headers: { 'Content-Type': 'application/json' }
    }).success(function (data, status, message) {
      $location.path('/');
      console.log(message);
    }).error(function (data, status, message) {
      console.log(status)
    });

  }

}]);