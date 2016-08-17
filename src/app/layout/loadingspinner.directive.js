(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('mcLoadingSpinner', mcLoadingSpinner);

    function mcLoadingSpinner() {
      return {
        templateUrl: 'app/layout/loadingspinner.html',
        restrict: 'E',
        scope: {},
        controller: LoadingSpinnerController,
        controllerAs: 'vm'
      };

      LoadingSpinnerController.$inject = ["$http"];
      function LoadingSpinnerController($http) {
        var vm = this;

        vm.isLoading = isLoading;

        function isLoading() {
          return $http.pendingRequests.length > 0;
        }

        

        
      }
    }
})();