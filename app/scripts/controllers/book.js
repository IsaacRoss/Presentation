'use strict';

angular.module('taskstreamApp')
  .controller('BookCtrl', function ($scope, Book) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.books = Book.query();
    $scope.orderProp = 'Year';
  });
