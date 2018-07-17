(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

/*
NarrowItDownController.$inject = ['MenuCategoriesService'];
function NarrowItDownController() {

  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function ShoppingListDirectiveController() {
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

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  
  list.getItems = function() {
    //console.log("hi");
    var  foundItems = MenuSearchService.getMatchedMenuItems();
    console.log(foundItems);
  }
  
  /*
  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + list.items.length + " items )";
  };*/

}



// If not specified, maxItems assumed unlimited

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];
  


  service.getMatchedMenuItems = function (searchTerm) {
    /*
    var response = $http({
      method: "GET",
      url: (ApiBasePath)
    });
    console.log(response);
 
    return response;
    */
    
    return $http({
      method: "GET",
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
    }).then(function (result) {
    // process result and only keep items that match
       //console.log(result.data.menu_items[0].description);
      
      var foundItems = [];
      var menu_items = result.data.menu_items;
      for (var i = 0; i < menu_items.length; i++) {
            
            var descriptions = menu_items[i].description.split(' ',);
             
            for (var j = 0; j < descriptions.length; j++) {
              if (descriptions[j] == searchTerm ) {
                
                foundItems.push(menu_items[i]);
              }
            }
                 
      }

    // return processed items
      console.log(foundItems);
      return foundItems;
      
    });
    
  };

 

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}




})();
