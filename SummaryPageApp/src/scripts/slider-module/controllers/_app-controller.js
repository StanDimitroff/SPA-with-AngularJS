angular.module("Slider.controllers").

controller("AppController", ["$scope", "SliderHelper", "ThumbsHelper", function ($scope, SliderHelper, ThumbsHelper) {
    $scope.SliderHelper = SliderHelper;
    $scope.ThumbsHelper = ThumbsHelper;
}]);