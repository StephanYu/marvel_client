(function() {
  'use strict'

  angular
    .module('app', [
      // Angular modules
      'ngRoute',

      // Custom modules
      'app.core',
      'app.layout',
      'app.comics'
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
      $routeProvider.otherwise({
        redirectTo: '/'
      });
    }

})();