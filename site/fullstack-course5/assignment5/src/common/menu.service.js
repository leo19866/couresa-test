(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var users=[];

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteItems = function (short_name) {
    //var config = {};
    return $http.get(ApiPath + '/menu_items/' + short_name +'.json');
  }

  service.saveUserPreference = function (username,email,phone,menu_number) {
    users.push({
      name: username,
      email: email,
      phone: phone,
      menu_number: menu_number
    });
    console.log(users);
  }
}



})();
