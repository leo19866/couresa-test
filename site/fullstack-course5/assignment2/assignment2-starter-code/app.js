(function () {
'use strict';

var shoppingList1 = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

var shoppingList2 = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

//ShoppingListController.$inject = ['$scope'];
function ToBuyController() {
  
  var itemToBuy = this;
  toBuyitems.itemName = "";
  toBuyitems.itemQuantity = ""; 
  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingList2.push(newItem);
  };
}

function ShoppingListCheckOffService() {
  // body...
  var service = this;
  var toBuyitems = [];
  
  service.toBuy = function (itemName, quantity) {
    // body...
     var item = {
        name: itemName,
        quantity: quantity
     };
     toBuyitems.push(item);     
  }
   service.getItems = function () {
    return items;
  };
}

})();
