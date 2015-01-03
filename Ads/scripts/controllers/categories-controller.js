'use strict';
(function () {
    app.controller('CategoriesController', function CategoriesController(rootUrl, $scope, adsData) {
        adsData.getAllCategories(rootUrl + 'categories')
            .then(function (data) {
                $scope.data = data;
            },
            function (error) {
                console.log(error);
            });
    });
}());
