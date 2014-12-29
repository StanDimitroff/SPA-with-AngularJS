'use strict';

var targetUrl = 'http://softuni-ads.azurewebsites.net/api/ads';
app.controller('AdsController', function ($scope, adsData) {
    adsData.getAllAds(targetUrl)
        .then(function (data) {
            $scope.data = data;
        },
    function(error){
        console.log(error);
    });


});
