'use strict';

angular.module('autoGuruApp.privacy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/privacy', {
    templateUrl: 'privacy/privacy.html',
    controller: 'PrivacyCtrl'
  });
}])

.controller('PrivacyCtrl', [function() {

}]);
