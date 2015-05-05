angular.module("Slider.services").

factory("ThumbsRender", function () {
    
    return {
        renderThumb: function (thumb, thumbsCount, thumbWidth, containerWidth) {
            var id = thumb.id;
            var position = id * thumbWidth;
            var numOfThumbs = thumbsCount;
            var thumbsWidth = thumbWidth * numOfThumbs;
            var startLeft = ~~((containerWidth - thumbsWidth) / 2); 
            var thumbLeft = startLeft + position;

            //        console.log("Position: " + position + " Count: " + numOfThumbs + " Width: " + thumbsWidth + " Start: " + startLeft);

            thumb.element.css("left", thumbLeft);
        }
    }
});