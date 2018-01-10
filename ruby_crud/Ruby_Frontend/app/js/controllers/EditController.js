app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
function($scope, $location, $routeParams, $firebaseObject, FBURL){

var ref = new Firebase(FBURL + $routeParams.id);
$scope.entries = $firebaseObject(ref);

$scope.editEntries = function() {
    $scope.entries.$save({
        Name: $scope.entries.Name,
        Place: $scope.entries.Place,
        Age: $scope.entries.Age
    });
    $scope.edit_form.$setPristine();
    $scope.entries = {};
    $location.path('/');

};

}]);