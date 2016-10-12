var app = angular.module('sportNews', ['ngTouch', 'ngAnimate', 'ui.router', 'ngSanitize', 'sc.select', 'yaru22.angular-timeago']);

// set the routes

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // set html5 mode to avoid # symbol on url
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('main', {
        url: '/',
        controller: 'mainController',
        templateUrl: 'parts/main.html',

    })
    
    // on article state we define parameters for the article id and image url
    .state('article', {
        url: '/article/',
        templateUrl: 'parts/article.html',
        controller: 'articleController',
        params: {
            _id: null,
            img_url: null
        }
    })

});