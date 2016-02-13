'use strict';

angular.module('autoGuruApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.view1Data = {
    partial: 'general',
    generalBtn: function () {
      $scope.view1Data.partial = 'general'
    },
    repairBtn: function () {
      $scope.view1Data.partial = 'repair'
    },
    accidentBtn: function () {
      $scope.view1Data.partial = 'accident'
    },
    cantDriveBtn: function () {
      $scope.view1Data.partial = 'cantDrive'
    },
    trafficBtn: function () {
      $scope.view1Data.partial = 'traffic'
    },
    feedbackBtn: function () {
      $scope.view1Data.partial = 'feedback'
    },
    socialBtn: function () {
      $scope.view1Data.partial = 'social'
    }
  }
}])
.directive('deviceGeneralInfo', function() {
  return {
    templateUrl: './directives/device-general-info.html'
  }
})
.directive('deviceRepairInfo', function() {
  return {
    templateUrl: './directives/device-repair-info.html'
  }
})
.directive('deviceAccidentInfo', function() {
  return {
    templateUrl: './directives/device-accident-info.html'
  }
})
.directive('deviceCantDriveInfo', function() {
  return {
    templateUrl: './directives/device-cant-drive-info.html'
  }
})
.directive('deviceTrafficInfo', function() {
  return {
    templateUrl: './directives/device-traffic-info.html'
  }
})
.directive('deviceFeedbackInfo', function() {
  return {
    templateUrl: './directives/device-feedback-info.html'
  }
})
.directive('deviceSocialInfo', function() {
  return {
    templateUrl: './directives/device-social-info.html'
  }
})
