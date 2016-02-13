'use strict';

angular.module('autoGuruApp.cities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cities', {
    templateUrl: 'cities/cities.html',
    controller: 'CitiesCtrl'
  });
}])

.controller('CitiesCtrl', [function() {

}]);
