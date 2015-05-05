'use strict';

angular.module('Page.factories')

.factory('Data', ['AjaxRequester', function(AjaxRequester) {
    function Data(apiUrlr) {
        //this.credentials = new credentials();
        this.summary = new Summary(apiUrl);
    }

    var Summary = (function() {
        function Summary(apiUrl) {
            this._serviceUrl = apiUrl;
            this._ajaxRequester = AjaxRequester;
            //this._headers = globalCredentials.getHeaders;
        }

        Summary.prototype.getData = function() {
            var data = {
                "Params": {
                    "dealer": "demosite",
                    "reference": "16wt-63",
                    "u": 7858
                },
                "TokenID": "1D96DF6C7E5471F66D6D45135EE5C517E5A562BC941CB5E7379F340B96FC490B"
            };

            var headers = {
                "Content-Type": 'application/json',


            }
            var url = this._serviceUrl;
            return this._ajaxRequester.post(url, data, headers)
                .
            then(function(result, status, headers, config) {
                if (headers("Content-type") != "application/json; charset=utf-8" && typeof(sessionTokenID) != "string") {
                    //handleError(result, status, headers, config, "OK");
                    return result;
                }
            }, function(error, status, headers, config, statusText) {
                //handleError(error, status, headers, config, statusText);
            });

            // .then(function(data) {
            //     return data;
            // }, function(error) {
            //     return error;
            // });
        }


        Summary.prototype.sendComment = function(){

        }
        
        return Summary;
    }());


    return new Data(apiUrl);
}]);
