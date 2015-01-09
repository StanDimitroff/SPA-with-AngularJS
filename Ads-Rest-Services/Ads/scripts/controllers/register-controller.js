app.controller('RegisterController', function (rootUrl, $scope, adsData, authData, messages, $location) {
    adsData.getAllTowns(rootUrl + 'towns')
        .then(function (data) {
            $scope.towns = data;
        });
    $scope.register = function (userData, registerForm) {
        if (registerForm.$valid) {
            authData.register(rootUrl, userData)
                .then(function (data) {
                    messages.successMessage('User account created. Please login');
                    console.log(data);
                    $location.path('/login');
                },
                function () {
                    messages.errorMessage('Registration unsuccessful. Try again');
                    $scope.loginForm.$setPristine();
                    $scope.user = null;
                })
        }

    }
});