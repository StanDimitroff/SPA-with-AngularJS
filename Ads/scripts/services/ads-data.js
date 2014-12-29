'use strict';

app.factory('adsData', function adsData($http, $q){
    function getAll(targetUrl){
        var defer = $q.defer();
        $http.get(targetUrl)
            .success(function(data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function(data, status, headers, config) {
                defer.reject(data);
            });

        return defer.promise;
    }

    return {
        getAllAds:getAll,
        getAllCategories:getAll,
        getAllTowns:getAll
    }
});
