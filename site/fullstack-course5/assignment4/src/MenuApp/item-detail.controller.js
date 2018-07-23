(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['MenuDataService', 'items'];
function ItemDetailController(MenuDataService, items) {
  var itemDetail = this;
  
  itemDetail.items = items; 
  //var item = items[$stateParams.itemId];
  //itemDetail.name = item.name;

  console.log(itemDetail.items);
  //itemDetail.quantity = item.quantity;
  //itemDetail.description = item.description;
}

})();
