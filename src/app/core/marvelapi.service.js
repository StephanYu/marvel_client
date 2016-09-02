(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('MarvelApiService', MarvelApiService);

  MarvelApiService.$inject = ["$http"];
  
  function MarvelApiService($http) {
    
    var service = {
      getAllComics:   getAllComics,
      getComic:       getComic,
      searchComicsBy: searchComicsBy,
      voteComic:      voteComic    
    };

    return service;

    ///////////////////////////////////

    function getAllComics() {
      // let's test the spotify API
      return $http.get("https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin");
    }

    function searchComicsBy(query) {
      $http.get("/someUrl/?q=" + query).then(function(response) {
        return response.data; 
      }), function(response){
        // console.log("Something went wrong");
      };
    }

    function voteComic(comicId, direction) {
      $http.get(`/comics/${comicId}/toggle?vote_type=${direction}`).then(function(response) {
        return response.data; 
      }), function(response){
        // console.log("Something went wrong");
      };
    }

    function getComic(comicId) {
      return $http.get(`/comic/${comicId}`);
    }
  }
})();