app.controller('RegisterController', function (rootUrl, $scope, adsData) {
    adsData.register(rootUrl + 'user/register')
        .then(function (data) {
            $scope.data = data;
        },
        function (error) {
            console.log(error);
        })
});
