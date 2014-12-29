'use strict';

var app = angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/home',
            {
                templateUrl:'views/guest/home.html'
            })
            .when('/login',
            {
                templateUrl:'views/guest/login.html'
            })
            .when('/register',
            {
                templateUrl:'views/guest/registration.html'
            })
            .otherwise({
                redirectTo:'/home'
            })


    });
