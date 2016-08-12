(function() {
  'use strict'

  angular
    .module('app', [
      // Angular modules
      'ngRoute',

      // Custom modules
      'app.comics',
      'app.core',
      'app.layout'
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }

})();