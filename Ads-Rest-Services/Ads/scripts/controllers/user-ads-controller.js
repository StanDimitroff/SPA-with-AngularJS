app.controller('UserAdsController', function ($scope, Data, messages, adsPerPage, maxPagerSize, $location, $http, $q) {
    $scope.currentPage = 1;
    $scope.adsPerPage = adsPerPage;
    $scope.maxSize = maxPagerSize;

    $scope.changePage = function () {
        Data.ads.getUserAll(-1, $scope.currentPage, $scope.adsPerPage, $http, $q)
            .then(function (data) {
                $scope.userAds = data;
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            });
    };

    $scope.editAd = function (adID) {
        $location.path('/user/ads/edit/' + adID);
    }

    $scope.deactivateAd = function (adId) {
        Data.ads.deactivate(adId, $http, $q)
        .then(function (data) {
            Data.ads.getUserAll(-1, $scope.currentPage, $scope.adsPerPage, $http, $q)
            .then(function (ads) {
                $scope.userAds = ads;
                $scope.totalItems = ads.numItems;
            })

        });
    }
    $scope.publishAgainAd = function (adId) {
        Data.ads.publishAgain(adId, $http, $q)
        .then(function (data) {
            Data.ads.getUserAll(-1, $scope.currentPage, $scope.adsPerPage, $http, $q)
            .then(function (ads) {
                $scope.userAds = ads;
                $scope.totalItems = ads.numItems;
            })
        });
    }

    Data.ads.getUserAll(-1, $scope.currentPage, $scope.adsPerPage, $http, $q)
    .then(function (data) {
        $scope.userAds = data;
        $scope.totalItems = data.numItems;
    })
});