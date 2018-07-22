(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'templates/categorieitems.template.html',
  bindings: {
    items: '<'
  }
});

})();