'use strict';

angular.module('autoGuruApp.version', [
  'autoGuruApp.version.interpolate-filter',
  'autoGuruApp.version.version-directive'
])

.value('version', '0.1');
