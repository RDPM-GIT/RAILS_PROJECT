app.controller('ListController', ['$scope', '$firebaseArray', 'FBURL', function($scope,$firebaseArray, FBURL){
    var entries = new Firebase(FBURL);
    $scope.entries = $firebaseArray(entries);

    $scope.deleteEntries = function(item){
      // $http.get("server url I have to hit",{item.$id})   // example
      var index = $scope.entries.indexOf(item)
      $scope.entries.splice(index,1);
    }

  }]);