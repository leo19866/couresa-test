(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', ['$scope', LunchCheckController]);

function LunchCheckController($scope) {
  
  $scope.calculate = function () {

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

}

})();
