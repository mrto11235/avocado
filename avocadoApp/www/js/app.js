var app = angular.module('starter', ['ionic', 'ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })

  // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
  .state('playground', {
    url: '/playground',
    templateUrl: 'templates/playground.html'
  });

});
