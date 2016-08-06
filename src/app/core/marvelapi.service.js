(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('marvelApiService', marvelApiService);

  marvelApiService.$inject = [];
  
  function marvelApiService() {
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
