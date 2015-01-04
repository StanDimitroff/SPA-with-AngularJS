app.controller('LoginController', function (rootUrl, $scope, authData, messages, $location) {
    $scope.login = function (userData) {
        authData.login(rootUrl, userData)
            .then(function (data) {
                $location.path('/user/home');
            },
            function () {
                messages.errorMessage('Invalid login');
            })

    }

});
