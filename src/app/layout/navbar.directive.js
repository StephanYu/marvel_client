(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('mcNavbar', mcNavbar);

    function mcNavbar() {
      return {
        templateUrl: 'app/layout/navbar.html',
        restrict: 'E',
        scope: {},
        controller: NavbarController,
        controllerAs: 'vm'
      };
    }

    NavbarController.$inject = [];
    function NavbarController() {
      var vm = this;

      
    }

})();