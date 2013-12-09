'use strict';

describe('Controller: DragdropCtrl', function () {

  // load the controller's module
  beforeEach(module('taskstreamApp'));

  var DragdropCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $timeout) {
    scope = $rootScope.$new();
    var l = $timeout;
    DragdropCtrl = $controller('DragdropCtrl', {
      $scope: scope,
      $timeout: l
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
