angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 0 },
    { title: 'Chill', id: 1 },
    { title: 'Dubstep', id: 2 },
    { title: 'Indie', id: 3 },
    { title: 'Rap', id: 4 },
    { title: 'Cowbell', id: 5 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.playlistSet = [
    [
      { track: '1', artist: 'Whoever'},
      { track: '2', artist: 'Whatever'},
      { track: '3', artist: 'Whenever'},
      { track: '4', artist: 'Whomever'}
    ],
    [
      { track: '1', artist: 'Whoever'},
      { track: '2', artist: 'Whatever'},
      { track: '3', artist: 'Whenever'},
      { track: '4', artist: 'Whomever'}
    ],
    [
      { track: '1', artist: 'Whoever'},
      { track: '2', artist: 'Whatever'},
      { track: '3', artist: 'Whenever'},
      { track: '4', artist: 'Whomever'}
    ],
    [
      { track: '1', artist: 'Whoever'},
      { track: '2', artist: 'Whatever'},
      { track: '3', artist: 'Whenever'},
      { track: '4', artist: 'Whomever'}
    ],
    [   
      { track: '1', artist: 'Whoever'},
      { track: '2', artist: 'Whatever'},
      { track: '3', artist: 'Whenever'},
      { track: '4', artist: 'Whomever'}
    ],
    [
      { track: 'Honky Tonk Women', artist: 'The Rolling Stones'},
      { track: 'Were an American Band', artist: 'Grand Funk Railroad'},
      { track: 'Dont Fear the Reaper', artist: 'Blue Oyster Cult'},
      { track: 'Hair of the Dog', artist: 'Nazareth'},
    ]
  ];

  $scope.id = $stateParams.playlistId;
});
