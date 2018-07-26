(function () {
"use strict";

angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject = ['MenuService'];
function SingUpController(MenuService) {
  var reg = this;
  
  reg.submit = function () {
  	 MenuService.getFavoriteItems(reg.user.menunumber).then(function (response) {
     MenuService.saveUserPreference(reg.user.username,reg.user.email,reg.user.phone,reg.user.menunumber);
  	 reg.message ="Your information has been saved.";
      //return response.data;
    }).catch(function (error) {
     reg.message = "No such menu number exists";
  });
  	
     reg.completed = true;
  };
}

})();