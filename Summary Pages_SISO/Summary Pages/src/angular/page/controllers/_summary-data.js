angular.module('Page.controllers')

.controller('SummaryData', ['$scope', 'Utils.http',
function ($scope, http) {

  var data = {
    "Params": {
      "dealer": Dealer,
      "reference": Reference,
      "u": User
    }
  };

  http.post("https://api.devvideo1st.com/Video1st/GetSummaryData", data)
  .success(function (data) {
    console.log(data);
  });

}]);
