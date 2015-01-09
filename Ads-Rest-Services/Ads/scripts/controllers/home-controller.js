(function () {
    app.controller('HomeController', function (rootUrl, adsPerPage, maxPagerSize, $scope, adsData, $anchorScroll, $location) {
        $scope.currentPage = 1;
        $scope.adsPerPage = adsPerPage;
        $scope.maxSize = maxPagerSize;
        $scope.changePage = function () {
            adsData.getAllAdsPerPage(rootUrl + 'ads', $scope.adsPerPage, $scope.currentPage)
                .then(function (data) {
                    $scope.ads = data;
                });
        };
        $scope.scroll = function () {
            $location.hash('top');

            // call $anchorScroll()
            $anchorScroll();
        }

        $scope.filterAdsByCategory = function (categoryId) {
            $scope.category = categoryId;
            adsData.getAdsByCategory(rootUrl + 'ads', categoryId)
                .then(function (data) {
                    $scope.ads = data;
                    $scope.totalItems = data.numItems;
                })
        };

        $scope.filterByTown = function (townId) {
            $scope.town = townId;

        };

        adsData.getAllAdsPerPage(rootUrl + 'ads', $scope.adsPerPage, $scope.currentPage)
            .then(function (data) {
                $scope.ads = data;
                $scope.totalItems = data.numItems;
            });

        adsData.getAllCategories(rootUrl + 'categories')
            .then(function (data) {
                $scope.categories = data;
            },
            function (error) {
                console.log(error);
            });

        adsData.getAllTowns(rootUrl + 'towns')
            .then(function (data) {
                $scope.towns = data;
            },
            function (error) {
                console.log(error);
            });
    })
}());