(function () {
'use strict';



angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  //console.log(toBuy.items);
  toBuy.bought = function (index) {
    try{
      //console.log(index);
      ShoppingListCheckOffService.bought(index);
    }catch(error){
      toBuy.errormessage = error.message;
    }  
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  
  var alreadyBought = this;
  
    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    console.log(alreadyBought.items);
  
  //alreadyBought
}

function ShoppingListCheckOffService() {
  // body...
   var i = 0; 
  var service = this;
  var boughtItems = [];
  var toBuyitems = [
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
  },
  {
    name: "penaut",
    quantity: "5"
  }
];
  
  service.bought = function (index) {
     
     boughtItems.push(toBuyitems[index]);
     toBuyitems.splice(index, 1);
     if (toBuyitems.length == 0) {
      console.log("toBuyitems.length:"+toBuyitems.length);
      throw new Error("Gone");
     }
  }
   service.getToBuyItems = function () {

    return toBuyitems;
  };
   
   service.getBoughtItems = function () {

      return boughtItems;
  };
   
}

})();
