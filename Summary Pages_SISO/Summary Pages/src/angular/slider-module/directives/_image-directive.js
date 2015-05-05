angular.module("Slider.directives").

directive("image", function () {
    return {
        restrct: "A",
        link: function(scope, element) {
            var el = $(element);
            
            if (el.hasClass("active")) {
                scope.SliderHelper.setActiveSlide(el);    
            }
            
            scope.SliderHelper.addSlide(el);
        }
    }
});