'use strict';

angular.module('taskstreamApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngDragDrop',
  'ngAnimate',
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
      .otherwise({
        redirectTo: '/'
      });
  });
