(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/MenuApp/templates/category-items.template.html',
  bindings: {
    items: '<'
  }
});

})();