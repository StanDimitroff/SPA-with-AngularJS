'use strict';
(function(){
    app.controller('TownsController', function TownsController(rootUrl, $scope, adsData){
        adsData.getAllTowns(rootUrl + 'towns')
            .then(function (data) {
                $scope.data = data;
            },
            function(error){
                console.log(error);
            });
    });
}());