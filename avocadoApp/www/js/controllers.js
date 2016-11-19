app.controller('a-controller', function($scope, $timeout, $location, $interval) {
  var promise;
  $scope.count = 9;
  $scope.subCount = function(a) {
    $scope.count = a + $scope.count;
  }
  $scope.gameStart = function() {
    $scope.labela = $location;
    $location.path('/playground');
    $scope.count = 30;
    $scope.start();
    $timeout(function() {
      $location.path('/home');
    }, 30000);
  }
  /*$interval(function() {
    $scope.count--;
  }, 1000);*/
  $scope.start = function() {
    // stops any running interval to avoid two intervals running at the same time
    $scope.stop();

    // store the interval promise
    promise = $interval(substractCount, 1000);
  };

  // stops the interval
  $scope.stop = function() {
    $interval.cancel(promise);
  };
  $scope.substractCount = function() {
    $scope.count--;
  }
});
