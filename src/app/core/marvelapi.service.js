(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('MarvelApiService', MarvelApiService);

  MarvelApiService.$inject = ["$http"];
  
  function MarvelApiService($http) {
    
    var service = {
      getComics:      getComics,
      searchComicsBy: searchComicsBy,
      voteComic:      voteComic    
    };

    return service;

    ///////////////////////////////////

    function getComics() {
      // let's test the spotify API
      $http.get("https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin").then(function(response){
        return response.data.artists;
      }, function(response){
        // console.log("Something went wrong");
      });
    }

    function searchComicsBy(query) {
      $http.post("/someUrl").then(function(response){
        return response.data;
      }, function(response){
        // console.log("Something went wrong");
      });
    }

    function voteComic(direction) {
      // $http.post("/someUrl/q=" + direction).then(function(response){
      //   return response.data;
      // }, function(response){
      //   // console.log("Something went wrong");
      // });
    }
  }
})();