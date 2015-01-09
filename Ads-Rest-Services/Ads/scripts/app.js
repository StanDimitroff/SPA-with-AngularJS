'use strict';

var app = angular
    .module('app', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: 'views/guest/home.html'
            })
            .when('/login',
            {
                templateUrl: 'views/guest/login.html'
            })
            .when('/register',
            {
                templateUrl: 'views/guest/registration.html'
            })
            .when('/user/home',
            {
                templateUrl: 'views/user/home.html'
            })
            .when('/user/ads',
            {
                templateUrl: 'views/user/ads.html'
            })
            .when('/user/ads/publish',
            {
                templateUrl: 'views/user/publish-ad.html'
            })
            .when('/user/ads/edit',
            {
                templateUrl: 'views/user/edit-ad.html'
            })
            .when('/user/ads/delete',
            {
                templateUrl: 'views/user/delete-ad.html'
            })
            .when('/user/profile',
            {
                templateUrl: 'views/user/edit-profile.html'
            })

            .otherwise({
                redirectTo: '/home'
            })
    })
    .constant(
    {
        'rootUrl': 'http://softuni-ads.azurewebsites.net/api/',
        'adsPerPage': 2,
        'maxPagerSize': 5
    });