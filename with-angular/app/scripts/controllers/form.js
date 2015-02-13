'use strict';

/**
 * @ngdoc function
 * @name withAngularApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the withAngularApp
 */
angular.module('withAngularApp')
  .controller('FormCtrl', function ($scope) {
    function resetForm () {
      $scope.nome = '';
      $scope.cognome = '';
      $scope.dataNascita = '';
    }
    
    $scope.add = function add () {
      $scope.$parent.$broadcast('formAdd', {
        nome: $scope.nome,
        cognome: $scope.cognome,
        dataNascita: $scope.dataNascita
      });
      
      resetForm();
    };
    
    resetForm();
  });
