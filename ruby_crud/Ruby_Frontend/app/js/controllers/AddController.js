app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){

  $scope.AddPerson = function(entries) {
    // var ref = new Firebase(FBURL);
    // var entries = $firebaseArray(ref);
    // entries.$add({
    //    Name: $scope.entries.Name,
    //    Place: $scope.entries.Place,
    //    Age: $scope.entries.Age
    // });
    $http.post('http://localhost:3000/api/v1',entries).success('addition done')
    $location.path('/');
  };

}]);