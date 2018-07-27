(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  //var user={};
   service.users = [];
   //service.user.length = service.user.length - 1;

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
  /*
  service.saveUserPreference = function (user) {
    
      user.username = user.username;
      user.email = user.email;
      user.phone = user.phone;
      user.menunumber = user.menunumber;
      user.favoriteItem = user.favoriteItem;
    
    console.log(user);
  }
  */
  
  service.saveUserPreference = function (user) {
    
      service.users.push(user);
    
    console.log(service.users);
  }
  


  service.getUser = function () {
    return service.users;
  }
}



})();
