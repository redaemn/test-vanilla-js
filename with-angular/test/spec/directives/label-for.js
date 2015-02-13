'use strict';

describe('Directive: labelFor', function () {

  // load the directive's module
  beforeEach(module('withAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<label-for></label-for>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the labelFor directive');
  }));
});
