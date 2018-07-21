(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var AllCategories = [];
  // List of shopping items
  var ItemsForCategory = [];

  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    }).then(function (result) {
       AllCategories = result.data.menu_items;
       
       return AllCategories;
    };
  };

  service.getItemsForCategory = function (categoryShortName) {
    
    rerun $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category={categoryShortName}'
    }).then(function (result) {
      
      ItemsForCategory = result.data.menu_items;
      return ItemsForCategory;
    });
  };

}

})();
