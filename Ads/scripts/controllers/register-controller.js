
app.controller('RegisterController', function (rootUrl, $scope, adsData, authData) {
    adsData.getAllTowns(rootUrl + 'towns')
        .then(function(data){
            $scope.towns = data;
        });
    $scope.register = function(userData){
        authData.register(rootUrl, userData)

    }
});
