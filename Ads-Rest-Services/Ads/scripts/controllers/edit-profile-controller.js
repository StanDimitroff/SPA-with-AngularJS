app.controller('EditProfileController', function ($scope, Data, $routeParams, messages, $location, $http, $q) {
    $scope.getUser = function () {
        Data.user.getProfile($http, $q)
            .then(function (data) {
                console.log(data)
                $scope.user = data;
            })
    }

    Data.common.getAllTowns($http, $q)
                .then(function (data) {
                    $scope.towns = data;
                })

    $scope.editProfile = function (userData) {
        Data.user.editProfile(userData, $http, $q)
        .then(function (data) {
            console.log(data);
            messages.successMessage('Profile updated successfully');
        })
        console.log(userData)
    }

    $scope.changePassword = function (newPass) {
        Data.user.changePassword(newPass, $http, $q)
        .then(function (data) {
            messages.successMessage('Password changed successfully')
        })
    }

});