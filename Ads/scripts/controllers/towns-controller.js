'use strict';

var targetUrl = 'http://softuni-ads.azurewebsites.net/api/towns';
app.controller('TownsController', function($scope, adsData){
    adsData.getAllTowns(targetUrl)
        .then(function (data) {
            $scope.data = data;
        },
        function(error){
            console.log(error);
        });
});

