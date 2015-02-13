'use strict';

/**
 * @ngdoc directive
 * @name withAngularApp.directive:labelFor
 * @description
 * # labelFor
 */
angular.module('withAngularApp')
  .directive('labelFor', function ($document) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var inputName = attrs.labelFor,
          inputEl;
        
        if (!inputName) {
          throw new Error('nome dell\'input non definito');
        }
        
        inputEl = $document[0].querySelector('input[name="' + inputName + '"]');
        
        element.on('click', function () {
          inputEl.focus();
        });
      }
    };
  });
