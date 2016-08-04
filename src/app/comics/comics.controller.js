(function() {
  'use strict';

  angular
    .module('app.comics')
    .controller('ComicsController', ComicsController);

    ComicsController.$inject = [];

    function ComicsController() {
      
      var vm = this;
      
      vm.comics = getComics();
      
      ///////////////////////////////

      function getComics();
    }
})();