angular.module('Page.services')

.factory('Utils.http', ['$http', function ($http) {
  var http = {};

  http.post = function (args) {
    var url = null,
    	data = arguments[1];

    if (typeof arguments[0] === "string") url = arguments[0];
    if (typeof arguments[0] === "object") {
        url = arguments[0].url;
        data = arguments[0].data;
    }

    if (url != null) {
        if (typeof(sessionTokenID) == "string") {
            data.TokenID = sessionTokenID;
        }
        return $http({
            url: url,
            dataType: "json",
            method: "POST",
            data: data,
            headers: {
                "Content-Type": "text/plain"
            },
            withCredentials: true
        }).
    	success(function (result, status, headers, config) {
    	    if (headers("Content-type") != "application/json; charset=utf-8" && typeof (sessionTokenID) != "string") {
    	        handleError(result, status, headers, config, "OK");
    	    }
    	}).
    	error(function (error, status, headers, config, statusText) {
    	    handleError(error, status, headers, config, statusText);
    	});
    }
    else {
        console.log("http.url can't be null");
    }
  }

  function handleError(error, status, headers, config, statusText) {
       var isJson = headers("Content-type") == "application/json; charset=utf-8";
       if (typeof (sessionTokenID) == "string") {
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
       }
       else if (status == 401 || status == 403) {
           console.log('Your session has timeout.')
           window.location.reload()
       }
       else if (status == 405) {
           if (isJson) {
               console.log(error);
           }
           else {
               console.log(statusText);
           }
       }
       else if (status != 406) {
           console.log(error ? error : statusText);
       }

      //  Error.openModal();
   }

  return http;
}]);
