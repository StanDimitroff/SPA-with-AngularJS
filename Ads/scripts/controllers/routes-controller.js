app.controller('RoutesController', function ($scope, $location) {
    $scope.$watch(function () {
        return $location.path();
    }, function (path) {
        switch (path) {
            case'/home':
                $scope.headerText = 'Home';
                break;
            case'/register':
                $scope.headerText = 'Register';
                break;
            case'/login':
                $scope.headerText = 'Login';
                break;
            case'/user/home':
                $scope.headerText = 'Home';
                break;
            case'/user/ads':
                $scope.headerText = 'My Ads';
                break;
            case'/user/ads/publish':
                $scope.headerText = 'Publish New Ad';
                break;
            case'/user/ads/edit':
                $scope.headerText = 'Edit Ad';
                break;
            case'/user/ads/delete':
                $scope.headerText = 'Delete Ad';
                break;
            case'/user/profile':
                $scope.headerText = 'Edit User Profile';
                break;
        }
    });
});