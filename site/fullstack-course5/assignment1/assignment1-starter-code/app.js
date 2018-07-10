(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  
  $scope.calculate = function () {
  	// body...
    //console.log(food);

    if($scope.food != ""){
      $scope.meals = $scope.food.split(',');
      if ($scope.meals.length <= 3) {
      	$scope.message = "Enjoy!";
      }else {
      	$scope.message = "Too much!";
      }
    }else{
      $scope.message = "Please enter data first";
    }
      
      
      

  };

});

})();
