(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('MarvelApiService', MarvelApiService);

  MarvelApiService.$inject = [];
  
  function MarvelApiService() {
    
    var service = {
      getComics: getComics,
      searchComicsBy: searchComicsBy    
    };

    return service;

    ///////////////////////////////////

    function getComics() {
      
    }

    function searchComicsBy() {
      
    }
  }
})();