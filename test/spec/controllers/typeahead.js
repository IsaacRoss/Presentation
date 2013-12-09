'use strict';

describe('Controller: TypeaheadCtrl', function () {

  // load the controller's module
  beforeEach(module('taskstreamApp'));

  var TypeaheadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypeaheadCtrl = $controller('TypeaheadCtrl', {
      $scope: scope
    });
  }));
});
