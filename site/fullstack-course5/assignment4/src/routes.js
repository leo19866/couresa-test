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
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/MenuApp/templates/main-MenuApp.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
         console.log(MenuDataService.getAllCategories());
         return MenuDataService.getAllCategories();
      }]
    }
  })
  
  // Item detail
  .state('mainList.itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/MenuApp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              //console.log(MenuDataService.getItemsForCategory($stateParams.itemId));
              return MenuDataService.getItemsForCategory($stateParams.itemId);                
            }]
    }
  });
  
}

})();
