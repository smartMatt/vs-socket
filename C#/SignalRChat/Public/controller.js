var socketApp = angular.module('socket', []);

socketApp.controller('MainCtrl', function ($scope, $http) {

  var chat = $.connection.chatHub;

  $scope.chatMessages = [];

  $.connection.hub.start().done(function () {});

  $scope.sendMessage = function (message, name) {

    chat.server.send(name, message);
    $scope.message = "";

  }

  $scope.boo = function () {
    chat.server.boo('boo');
  }



  chat.client.broadcastMessage = function (name, message) {
    $scope.$apply(function () {
      $scope.chatMessages.push({name:name, message:message})
    })
  };

  chat.client.broadcastBoo = function (boo) {
    $scope.$apply(function () {
      $scope.showBoo = boo;
    })
    console.dir(boo);

  }

})
