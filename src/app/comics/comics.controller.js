(function() {
  'use strict';

  angular
    .module('app.comics')
    .controller('ComicsController', ComicsController);

    ComicsController.$inject = ['MarvelApiService'];

    function ComicsController(MarvelApiService) {
      
      var vm = this;
      
      vm.voteComic = MarvelApiService.voteComic();
      
    }
})();