(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('MarvelApiService', MarvelApiService);

  MarvelApiService.$inject = [];
  
  function MarvelApiService() {
    var service = {
      getComics: getComics,
      searchCharacters: searchCharacters    
    };

    return service;

    ///////////////////////////////////

    function getComics() {
      
    }

    function searchCharacters() {
      
    }
  }
})();