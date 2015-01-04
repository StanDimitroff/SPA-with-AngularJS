app.controller('LoginController', function (rootUrl, $scope, authData, messages, $location) {
    $scope.login = function (userData, loginForm) {
        $scope.loginForm = loginForm;
        $scope.user = userData;

        if($scope.loginForm.$valid){
            authData.login(rootUrl, userData)
                .then(function (data) {
                    $location.path('/user/home');
                },
                function () {
                    messages.errorMessage('Invalid login');
                    $scope.loginForm.$setPristine();
                    $scope.user = null;
                })
        }
    }
});