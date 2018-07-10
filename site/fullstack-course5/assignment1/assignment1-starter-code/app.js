(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.food = "Apple";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
  $scope.calculate = function () {
  	// body...
    //console.log(food);  
  $scope.meals = $scope.food.split(',');
      //console.log($scope.meals);
      if ($scope.meals.length <= 3) {
      	$scope.message = "Enjoy!";
      }else {
      	$scope.message = "Too much!";
      }

  };

});

})();
