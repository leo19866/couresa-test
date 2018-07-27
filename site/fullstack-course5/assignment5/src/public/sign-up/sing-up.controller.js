(function () {
"use strict";

angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject = ['MenuService'];
function SingUpController(MenuService) {
  var reg = this;
  
  reg.submit = function () {
  	 MenuService.getFavoriteItems(reg.user.menunumber).then(function (response) {
  	 reg.user.favoriteItem = response.data;
     MenuService.saveUserPreference(reg.user);
  	 reg.message ="Your information has been saved.";
       
    }).catch(function (error) {
     reg.message = "No such menu number exists";
  });
  	
     reg.completed = true;
  };
}

})();