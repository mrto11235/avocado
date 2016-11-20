var app = angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {

        });
    })
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('playground', {
                url: '/playground',
                templateUrl: 'templates/playground.html',
                controller: 'a-controller'
            })
            .state('home', {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: "a-controller"
            });
    });
