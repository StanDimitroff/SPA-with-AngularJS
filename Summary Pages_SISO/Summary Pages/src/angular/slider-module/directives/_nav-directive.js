angular.module("Slider.directives").

directive("sliderNav", function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            var el = $(element);
            
            if (el.hasClass("prev")) {
                scope.SliderHelper.prevBtn = element;
                
                el.on("click", function () {
                    
                    if (!scope.SliderHelper.isTransitionRuning()) {
                        scope.ThumbsHelper.selectPrevThumb();
                    }
                });
            }
            
            if (el.hasClass("next")) {
                scope.SliderHelper.nextBtn = element;
                
                el.on("click", function () {
                    if (!scope.SliderHelper.isTransitionRuning()) {
                        scope.ThumbsHelper.selectNextThumb();
                    }
                });
            }
        }
    }
});