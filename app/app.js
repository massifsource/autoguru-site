'use strict';

angular.module('autoGuruApp', [
  'ngRoute',
  'autoGuruApp.view1',
  'autoGuruApp.cities',
  'autoGuruApp.terms',
  'autoGuruApp.privacy',
  'autoGuruApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'})
}])
