(function () {
    app.controller('HomeController', function (rootUrl, adsPerPage, maxPagerSize, $scope, adsData) {
        $scope.currentPage = 1;
        $scope.adsPerPage = adsPerPage;
        $scope.maxSize = maxPagerSize;
        $scope.changePage = function () {
            adsData.getAllAdsPerPage(rootUrl + 'ads', $scope.adsPerPage, $scope.currentPage)
                .then(function (data) {
                    $scope.ads = data;
                    $scope.totalItems = data.numItems;
                })
        };

        $scope.filterAdsByCategory = function(categoryId){
          adsData.getAdsByCategory(rootUrl + 'ads', categoryId, $scope.adsPerPage, $scope.currentPage)
              .then(function(data){
                  $scope.ads = data;
                  $scope.totalItems = data.numItems;
              })
        };

//        $rootScope.getAllAds = function(){
//
//        };
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
            function(error){
                console.log(error);
            });
    })

}());