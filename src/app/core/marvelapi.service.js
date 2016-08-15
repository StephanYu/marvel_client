(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('MarvelApiService', MarvelApiService);

  MarvelApiService.$inject = ["$http"];
  
  function MarvelApiService($http) {
    
    var service = {
      getComics: getComics,
      searchComicsBy: searchComicsBy    
    };

    return service;

    ///////////////////////////////////

    function getComics() {
      // let's test the spotify API
      $http("https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy").then(function(response){
        return response.data;
      }, function(response){
        // console.log("Something went wrong");
      });
    }

    function searchComicsBy(query) {
      $http("/someUrl").then(function(response){

      }, function(response){

      });
    }
  }
})();