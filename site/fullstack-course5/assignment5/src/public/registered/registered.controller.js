(function () {
"use strict";

angular.module('public')
.controller('RegisteredController', RegisteredController);

RegisteredController.$inject = ['MenuService','ApiPath'];
function RegisteredController(MenuService,ApiPath) {
  var registered = this;
  registered.basePath = ApiPath;
  registered.users = [];
  
  registered.users = MenuService.getUser();


  if (registered.users.length > 0) {
    registered.check = true;
  }else{
    registered.check = false;
  }
    
};


})();