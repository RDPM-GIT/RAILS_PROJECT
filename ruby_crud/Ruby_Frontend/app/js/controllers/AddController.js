app.controller('AddController', ['$scope', '$http', '$firebaseArray', '$location', 'FBURL', function ($scope, $http, $firebaseArray, $location, FBURL) {

  $scope.AddPerson = function (entries) {
    $http({
      url: 'http://localhost:3000/api/v1/records',
      method: "POST",
      data: {
        "name": $scope.entries.Name,
        "place": $scope.entries.Place,
        "age": $scope.entries.Age
      },
      headers: { 'Content-Type': 'application/json' }
    }).success(function (data, status, message) {
      $location.path('/');
      console.log(data);
      console.log(message);
      // $scope.entries = data; // assign  $scope.persons here as promise is resolved here 
    }).error(function (data, status, message) {
      console.log(status)
    });
  }

}]);