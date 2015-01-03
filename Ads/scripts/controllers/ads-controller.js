(function () {
    app.controller('AdsController', function (rootUrl, adsPerPage, maxPagerSize, $rootScope, $scope, adsData) {
        $scope.currentPage = 1;
        $scope.adsPerPage = adsPerPage;
        $scope.maxSize = maxPagerSize;
        $scope.changePage = function () {
            adsData.getAllAdsPerPage(rootUrl + 'ads', $scope.adsPerPage, $scope.currentPage)
                .then(function (data) {
                    $scope.data = data;
                    $scope.totalItems = data.numItems;
                })
        };

        adsData.getAllAdsPerPage(rootUrl + 'ads', $scope.adsPerPage, $scope.currentPage)
            .then(function (data) {
                $scope.data = data;
                $scope.totalItems = data.numItems;
            })
    })

}());