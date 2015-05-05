angular.module("Page", [ "Page.controllers", "Page.services" ]), angular.module("Page.controllers", []), 
angular.module("Page.services", []), angular.module("Page.controllers").controller("SummaryData", [ "$scope", "Utils.http", function($scope, http) {
    var data = {
        Params: {
            dealer: Dealer,
            reference: Reference,
            u: User
        }
    };
    http.post("https://api.devvideo1st.com/Video1st/GetSummaryData", data).success(function(data) {
        console.log(data);
    });
} ]), angular.module("Page.services").factory("Utils.http", [ "$http", function($http) {
    function handleError(error, status, headers, config, statusText) {
        var isJson = "application/json; charset=utf-8" == headers("Content-type");
        if ("string" == typeof sessionTokenID && (isJson = !0), 200 != status || isJson || (status = 302), 
        status >= 300 && 310 >= status) {
            var location = headers("Location");
            return null == location && (location = "/"), void window.location.replace(location);
        }
        401 == status || 403 == status ? (console.log("Your session has timeout."), window.location.reload()) : 405 == status ? console.log(isJson ? error : statusText) : 406 != status && console.log(error ? error : statusText);
    }
    var http = {};
    return http.post = function(args) {
        var url = null, data = arguments[1];
        return "string" == typeof arguments[0] && (url = arguments[0]), "object" == typeof arguments[0] && (url = arguments[0].url, 
        data = arguments[0].data), null != url ? ("string" == typeof sessionTokenID && (data.TokenID = sessionTokenID), 
        $http({
            url: url,
            dataType: "json",
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "text/plain"
            },
            withCredentials: !0
        }).success(function(result, status, headers, config) {
            "application/json; charset=utf-8" != headers("Content-type") && "string" != typeof sessionTokenID && handleError(result, status, headers, config, "OK");
        }).error(function(error, status, headers, config, statusText) {
            handleError(error, status, headers, config, statusText);
        })) : void console.log("http.url can't be null");
    }, http;
} ]);
//# sourceMappingURL=main.js.map