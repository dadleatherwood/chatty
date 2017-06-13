'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    console.log("Hi")
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
      console.log($scope.messages)
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        var body = {
          message: message,
          username: $scope.username
        }
        messageService.addMessage(body).then(function ( response ) {
          $scope.messages = response.data.messages;
        });
      }
    };

    //myCode


    $scope.addUsername = function (username) {
      if (username) {
          $scope.username = username
      }
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
