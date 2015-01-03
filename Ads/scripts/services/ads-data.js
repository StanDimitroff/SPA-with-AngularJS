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

    function register(targetUrl, userData) {
        var defer = $q.defer();
        $http.post(targetUrl, userData)
            .success(function (data, status, headers, config) {
                console.log("Register");
                defer.resolve(data);

            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
            });

        return defer.promise;
    }

    function login(targetUrl, userData) {
        var defer = $q.defer();
        $http.post(targetUrl, userData)
            .success(function (data, status, headers, config) {
                console.log("Login");
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
        register: register,
        login: login
    }
});