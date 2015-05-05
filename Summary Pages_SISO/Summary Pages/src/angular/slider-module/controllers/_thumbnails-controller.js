angular.module("Slider.controllers").

controller("ThumbnailCtrl", ["$scope", "ThumbsHelper", "SliderHelper", function ($scope, ThumbsHelper, SliderHelper) {
    
//    ThumbsHelper.setContainer( $(".gallery-thumbs ul") );
    
    $scope.ThumbsHelper = ThumbsHelper;
//    console.log($scope.$parent);
    
    $scope.activateThumb = function (event) {
        var thumbs = ThumbsHelper.getThumbs();
        
//        console.log(SliderHelper.isTransitionRuning());
        
        if (!SliderHelper.isTransitionRuning()) {
            thumbs.forEach(function (thumb) {
                if (thumb.element.is($(event.currentTarget))) {
                    if (!thumb.element.hasClass("active")) {
                        ThumbsHelper.setSelectedID(thumb.id);
                        ThumbsHelper.getActiveThumb().removeClass("active")
                        thumb.element.addClass("active");
                        ThumbsHelper.setActiveThumb(thumb.element);
                        ThumbsHelper.selectThumb();
                    }
                }
            });
        }
    }

}]);