(function () {
"use strict";

angular.module('public')
.component('user', {
  templateUrl: 'src/public/user/user.html',
  bindings: {
    user: '<'
  },
  controller: UserController
});


UserController.$inject = ['ApiPath'];
function UserController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}


})();


