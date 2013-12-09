'use strict';

angular.module('taskstreamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngDragDrop',
  'ngAnimate',
  'ui.bootstrap',
  'angular-growl'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dragdrop', {
        templateUrl: 'views/dragdrop.html',
        controller: 'DragdropCtrl'
      })
      .when('/typeahead', {
        templateUrl: 'views/typeahead.html',
        controller: 'TypeaheadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
