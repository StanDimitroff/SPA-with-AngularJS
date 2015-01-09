'use strict';

app.factory('adsData', function adsData($http, $q) {

    function getAllAdsPerPage(targetUrl, pageSize, startPage) {

        var defer = $q.defer();
        $http.get(targetUrl + '?pagesize=' + pageSize + '&startpage=' + startPage)
            .success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
            });

        return defer.promise;
    }

    function getAll(targetUrl) {
        var defer = $q.defer();
        $http.get(targetUrl)
            .success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
            });

        return defer.promise;
    }

    function getAdsByCategory(targetUrl, categoryId) {
        var defer = $q.defer();
        $http.get(targetUrl + '?categoryid=' + categoryId)
            .success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
            });
        return defer.promise;
    }

    return {
        getAllAdsPerPage: getAllAdsPerPage,
        getAllCategories: getAll,
        getAllTowns: getAll,
        getAdsByCategory: getAdsByCategory
    }
});