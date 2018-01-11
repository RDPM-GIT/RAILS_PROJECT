app.controller('ListController', ['$scope', '$http','$location', '$firebaseArray', 'FBURL', function ($scope, $http,$location, $firebaseArray, FBURL) {
  var entries = new Firebase(FBURL);
  $scope.entries = $firebaseArray(entries);

  var realData;


  var entries =
    $http({
      url: 'http://localhost:3000/api/v1/records',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }).success(function (data, status, message) {
      $scope.realData = data.data;
    }).error(function (data, status, message) {
    });

  $scope.deleteEntries = function (item) {
    $http({
      url: 'http://localhost:3000/api/v1/records/' + item.id,
      method: "DELETE",
    }).success(function (data, status, message) {
      $http({
        url: 'http://localhost:3000/api/v1/records',
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, message) {
        $scope.realData = data.data;
      }).error(function (data, status, message) {
      });
      console.log(data);
      console.log(message);
      // $scope.entries = data; // assign  $scope.persons here as promise is resolved here 
    }).error(function (data, status, message) {
      console.log(status)
    });
  }

}]);