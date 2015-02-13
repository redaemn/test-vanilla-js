'use strict';

/**
 * @ngdoc function
 * @name withAngularApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the withAngularApp
 */
angular.module('withAngularApp')
  .controller('ListCtrl', function ($scope) {
    $scope.persons = [];
    
    $scope.$on('formAdd', function (event, data) {
      $scope.persons.push(data);
    });
  });
