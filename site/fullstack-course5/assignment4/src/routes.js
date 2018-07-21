(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/MenuApp/templates/main-MenuApp.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItems();
      }]
    }
  })

  // Item detail
  .state('mainList.itemDetail', {
    // url: '/item-detail/{itemId}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    }
  });

}

})();
