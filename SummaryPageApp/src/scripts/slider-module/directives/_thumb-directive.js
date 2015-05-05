angular.module("Slider.directives").

directive("thumb", function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            var id = null;
            
            if (scope.ThumbsHelper.thumbCount == 0) {
                id = 0;
                scope.ThumbsHelper.addThumbWithId(id, element);                
                scope.ThumbsHelper.thumbCount++;
            } else {
                id = scope.ThumbsHelper.thumbCount++;
                scope.ThumbsHelper.addThumbWithId(id, element);
            }
            
            // check for the last item
            if (!angular.isUndefined( attrs.isLast ) && attrs.isLast === "true" ) {
//                console.log("Last");
                scope.ThumbsHelper.setUp();
            }
            
            if (element.hasClass("active")) {
                scope.ThumbsHelper.setSelectedID(id);
                scope.ThumbsHelper.setActiveThumb($(element));
            }
        }
    }
});