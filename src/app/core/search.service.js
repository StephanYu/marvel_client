(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('SearchService', SearchService);

  SearchService.$inject = [];
  
  function SearchService() {
    var service = {
      key: example    
    };

    return service;

    ///////////////////////////////////

    function example() {
      
    }
  }
})();