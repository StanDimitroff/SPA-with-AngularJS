angular.module("Slider.directives").

directive("sliderTouch", function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            var el = $(element);
            
            el.swipe({
                
                swipeStatus:function(event, phase, direction, distance)
                {

                    if (phase == "end") {
                        if (!scope.SliderHelper.isTransitionRuning()) {
                            if (direction === "left") {
                                scope.ThumbsHelper.selectPrevThumb();
                            }

                            if (direction === "right") {
                                scope.ThumbsHelper.selectNextThumb();
                            }
                        }
                    }
                },
                triggerOnTouchEnd: false,
                triggerOnTouchLeave: true,
                threshold: 150
            });
        }
    }
});