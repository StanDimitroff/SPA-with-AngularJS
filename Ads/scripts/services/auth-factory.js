'use strict';

app.factory('authData', function($http, $q){
    function register(targetUrl, userData) {
        var defer = $q.defer();
        $http.post(targetUrl + 'user/register', userData)
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

    return{
        register: register,
        login : login
    }
});