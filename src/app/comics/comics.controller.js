(function() {
  'use strict';

  angular
    .module('app.comics')
    .controller('ComicsController', ComicsController);

    ComicsController.$inject = ['MarvelApiService'];

    function ComicsController(MarvelApiService) {
      var vm = this;

      MarvelApiService.getAllComics().then(function(response) {
        var comics = response.data.artists.images;
        vm.comics = comics; 
      });

      vm.getComic  = MarvelApiService.getComic().then(function(response) {
        var comic = response.data; 
        vm.comic = comic;
      });

      vm.voteComic = MarvelApiService.voteComic();
    }
})();