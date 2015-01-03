app.controller('RegisterController', function (rootUrl, $scope, adsData) {
    adsData.login(rootUrl + 'user/login')
        .then(function (data) {
            $scope.data = data;
        },
        function (error) {
            console.log(error);
        })
});

