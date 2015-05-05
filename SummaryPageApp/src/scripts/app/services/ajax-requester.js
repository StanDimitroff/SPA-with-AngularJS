'use strict';

angular.module('Page.services')

.service('AjaxRequester', ['$http', '$q', function($http, $q) {
    function AjaxRequester(_messages) {
        this.post = makePostRequest;
        //messages = _messages
    }

    var makeRequest = function(url, method, data, headers) {
        var request = {
                method: method,
                url: url,
                headers: headers,
                data: data,
                withCredentials: true
            }


        var defer = $q.defer();
        $http(request)
            .success(function(response) {
                defer.resolve(response);
            })
            .error(function(error, status, headers, config, statusText) {
                //handleError(error, status, headers, config, statusText);
                //   var errorMessage = 'The system experienced an unhandled exception (Server side).';
                //
                //   if (response == null) {
                //     errorMessage = 'Please check your network connection.'
                //   } else if (response.error_description) {
                //     errorMessage = response.error_description;
                //   } else if (response.modelState && response.modelState.status) {
                //     errorMessage = response.modelState.status;
                //   } else if (response.modelState && response.modelState[''].length > 0) {
                //     errorMessage = $("<ul/>");
                //     for (var e = 0; e < response.modelState[''].length; e++) {
                //       errorMessage.append($('<li>' + response.modelState[''][e] + '</li>'));
                //     }
                //     errorMessage = errorMessage.prop('outerHTML');
                //   }
                //   messages.errorMessage(errorMessage);
                defer.reject(error);
            });

        return defer.promise;
    }

    function handleError(error, status, headers, config, statusText) {
        var isJson = headers("Content-type") == "application/json; charset=utf-8";
        if (typeof(sessionTokenID) == "string") {
            isJson = true;
        }
        if (status == 200 && !isJson) {
            status = 302;
        }

        if (status >= 300 && status <= 310) {
            var location = headers("Location");
            if (location == null) {
                location = "/";
            }

            window.location.replace(location);
            return;
        } else if (status == 401 || status == 403) {
            console.log('Your session has timeout.')
            window.location.reload()
        } else if (status == 405) {
            if (isJson) {
                console.log(error);
            } else {
                console.log(statusText);
            }
        } else if (status != 406) {
            console.log(error ? error : statusText);
        }

        //  Error.openModal();
    }

    var makePostRequest = function(url, data, headers) {
        return makeRequest(url, 'POST', data, headers);
    }

    return new AjaxRequester();
}]);
