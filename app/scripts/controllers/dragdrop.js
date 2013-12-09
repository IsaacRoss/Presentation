'use strict';

angular.module('taskstreamApp')
.controller('DragdropCtrl', function($scope, $timeout, growl){
  $scope.awesomeThings = [
    'HTML5',
    'HTML5',
    'HTML5'
  ];

  $scope.list1 = [];
  $scope.list2 = [];
  $scope.list3 = [];
  $scope.list4 = [];

  $scope.list5 = [
    {'title': 'Native To Browser', 'drag': true},
    {'title': 'Slick Animation', 'drag': true},
    {'title': 'Enhanced User Experience', 'drag': true},
    {'title': 'Developer Productivity', 'drag': true},
    {'title': 'No work to be done', 'drag': true},
    {'title': 'Can be ported to native mobile apps', 'drag': true},
    {'title': 'Testability', 'drag': true}
  ];

  $scope.dropCallBack = function(event, ui){
    angular.forEach($scope.list4, function(value, key){
      var obj = value;
      if(value.title === 'Testability'){
        growl.addErrorMessage('<strong>Testability Is a benefit we get from <b>AngularJs</b></strong>', {enableHtml: true, ttl: 3000});
        $scope.list4.splice(key, 1);
        $scope.list3.push(obj);
      }
      if(value.title === 'Can be ported to native mobile apps'){
        growl.addErrorMessage('<strong>Native Mobile Apps Is a benefit we get from <b>HTML5</b></strong>', {enableHtml: true, ttl: 3000});
        $scope.list4.splice(key, 1);
        $scope.list1.push(obj);
      }
      if(value.title === 'Slick Animation'){
        growl.addErrorMessage('<strong>Animation leveragin the power of the browser Is a benefit we get from <b>CSS3</b></strong>', {enableHtml: true, ttl: 3000});
        $scope.list4.splice(key, 1);
        $scope.list2.push(obj);
      }
    });
  };
})
.animation('.toggle', function(){
  return {
    leave: function(element, done){
      TweenMax.fromTo(element, 1, {opacity: 1}, {opacity: 0, onComplete: done});
    },
    enter: function(element, done){
      TweenMax.fromTo(element, 1, {opacity: 0}, {opacity: 1, onComplete: done});
    }
  };
});

