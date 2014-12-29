'use strict';

var targetUrl = 'http://softuni-ads.azurewebsites.net/api/categories';
app.controller('CategoriesController', function($scope, adsData){
    adsData.getAllCategories(targetUrl)
        .then(function (data) {
            $scope.data = data;
        },
        function(error){
            console.log(error);
        });
});
