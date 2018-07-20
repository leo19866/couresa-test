(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
//.controller('foundItemsDirectiveController',foundItemsDirectiveController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");


//foundItemsDirective.$inject = ['MenuCategoriesService'];
function foundItemsDirective() {

  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      badRemove: '=',
      onRemove: '&'
    },
    /*controller: foundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true*/
  };

  return ddo;
}

/*
function foundItemsDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}
*/

/*
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm = '';
  ctrl.empty = '';

  ctrl.searchItem = function () {
    if (ctrl.searchTerm !== '') {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      console.log(promise);
      promise.then(function(result) {
        ctrl.found = result;
        console.log(ctrl.found);
        //ctrl.empty = MenuSearchService.isEmpty();
      })
      .catch(function(error) {
      console.log(error);
      });
    }
    else {
      ctrl.empty = MenuSearchService.isEmpty();
      console.log(ctrl.empty);
    };
    
  };


  ctrl.remove = function (itemIndex) {
    return MenuSearchService.removeItem(itemIndex);
  }

}
*/

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  
  ctrl.searchTerm = "";

  ctrl.searchItem = function() {
    //console.log("hi");
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    console.log(promise);
    promise.then(function (result) {
    ctrl.found = result;
    console.log(ctrl.found);
  }).catch(function(error) {
      console.log(error);
      });
    //list.items = MenuSearchService.getMatchedMenuItems(list.searchTerm);
   
    //list.items = MenuSearchService.getMatchedMenuItems(list.searchTerm);
    //console.log('Hi'); //非同步印在這邊資料來不及導入 
  }
  
  ctrl.remove = function (itemIndex) {
    return MenuSearchService.remove(itemIndex);
  }

}



MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
    var service = this;
    var foundItems = [];
  service.getMatchedMenuItems = function (searchTerm) {
    
    
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result) {
    // process result and only keep items that match
       //console.log(result.data.menu_items[0].description);
      
     
      var menu_items = result.data.menu_items;
      for (var i = 0; i < menu_items.length; i++) {
            
            if(menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1){
             foundItems.push(menu_items[i]);
            }
            /*
            var descriptions = menu_items[i].description.split(' ',);

             
            for (var j = 0; j < descriptions.length; j++) {
              if (descriptions[j] == searchTerm ) {
                
                foundItems.push(menu_items[i]);
              }
            }*/
                 
      }

    // return processed items
      //console.log(foundItems);
      return foundItems;
      
    }).catch(function(errorResponse) {
      console.log(errorResponse);
    });

  };
  service.remove = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
    //return foundItems;
  }

} 


})();
