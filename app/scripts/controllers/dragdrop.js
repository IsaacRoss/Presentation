'use strict';

angular.module('taskstreamApp')
  .controller('DragdropCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.list1 = [];
  	$scope.list2 = [];
  	$scope.list3 = [];
  	$scope.list4 = [];
  
  	$scope.list5 = [
  	  { 'title': 'Native To Browser', 'drag': true },
  	  { 'title': 'Slick Animation', 'drag': true },
  	  { 'title': 'Enhanced User Experience', 'drag': true },
  	  { 'title': 'Developer Productivity', 'drag': true },
  	  { 'title': 'No work to be done', 'drag': true },
  	  { 'title': 'Works on Mobile Browsers', 'drag': true },
  	  { 'title': 'Can be ported to Native Mobile Apps', 'drag': true },
  	  { 'title': 'Testability', 'drag': true }
  	];

  	$scope.dropCallBack = function (event, ui) {
  	    angular.forEach($scope.list4, function(value, key) {
  	        var obj = value;
  	        if (value.title == "Testability") {
  	            $('<div class="alert alert-error>' + ($(this).val() + '</div>').appendTo('#result').trigger('showalert')
  	        }
  	    });
  	};
  
  });
