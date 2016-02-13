'use strict';

angular.module('autoGuruApp.terms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/terms', {
    templateUrl: 'terms/terms.html',
    controller: 'TermsCtrl'
  });
}])

.controller('TermsCtrl', [function() {

}]);
