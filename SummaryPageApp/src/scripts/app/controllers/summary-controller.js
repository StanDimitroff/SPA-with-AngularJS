'use strict';

angular.module('Page.controllers')

.controller('SummaryController', ['$scope', 'Data', function($scope, Data) {
    $scope.loadSummaryData = function() {
        Data.summary.getData()
        .then(function(data){
            console.log(data);
            // $scope.summaryData = data;
            // $scope.event = summaryData.Event;
            // $scope.advisor = summaryData.Advisor;
            // $scope.VehicleRunningCosts = summaryData.VehicleRunningCosts;
            // $scope.comments = summaryData.Comments;
            // $scope.vehicleDetails = summaryData.VehicleDetails;
            // $scope.ancillaryInfo = summaryData.AncillaryInformation;
            // $scope.ownership = summaryData.Ownership;
            // $scope.consumption = summaryData.Consumption;
            // $scope.photos = summaryData.Photos;
            // $scope.videos = summaryData.Videos;
            // $scope.thumbnails = $scope.photos.concat($scope.videos);

        }, function(error){
            console.log(error)
        })
    }

    $scope.sendComment = function(){
        var comment = $('#comment').val();
        Data.summary.sendComment()
        .then(function(data){
            console.log(data);
        }, function(error){
            console.log(error);
        })

    }



}]);
