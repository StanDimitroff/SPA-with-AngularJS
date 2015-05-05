angular.module("Slider.directives").


directive("video", function () {
    return {
        restrict: "A",
        link: function (scope, element) {
            var v = element.get(0);
            
            v.addEventListener("pause", function () {
                scope.SliderHelper.showNavButtons();
            });
            v.addEventListener("playing", function () {
                scope.SliderHelper.hideNavButtons();
            });
            
            // Exit Full Screen on video ending.
            v.addEventListener("ended", function () {                
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            });
        }
    }
});