(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
  
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    // $('.slider').slider({full_width: true});
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});


var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function ($scope, $http){
  
  $http.get('http://api.randomuser.me/?results=24').success(function(data) {
    $scope.users = data.results;
  }).error(function(data, status) {
    alert('get data error!');
  });
  
  $scope.removeUser = function(user){
     $scope.users.splice($scope.users.indexOf(user),1);
  };
  
  $scope.modalDetails = function(user){
     $scope.user = user;
     $('#modalDetails').openModal();
  };
  
});
