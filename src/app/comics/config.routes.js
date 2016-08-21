(function() {
  'use strict';

  angular
    .module('app.comics')
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'app/comics/comics.html',
        controller: 'ComicsController',
        controllerAs: 'vm', 
        resolve: {
          myService: function($q, MarvelApiService){
            var defer = $q.defer();
            var comics = MarvelApiService.getComics();
            defer.resolve(comics);

            return defer.promise;
          }
        }
      });
    }
})();