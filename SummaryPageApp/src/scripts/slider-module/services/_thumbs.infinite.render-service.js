angular.module("Slider.services").

factory("ThumbsInfiniteRender", function () {
    // Private
    var thumbs = [],
        visibleIDs = [],
        containerWidth = 0,
        maxThumbs = 0,
        thumbsForCleaning = [],
        thumbWidth = 0;
    
    function getVisibleThumbs() {
        var thumbsClone = thumbs.slice(0);
        var visibleThumbs = [];

        visibleIDs.forEach(function (id) {            
            var thumb = thumbs[id];
            var index = thumbsClone.indexOf(thumb);

            thumbsClone.splice(index, 1);
            visibleThumbs.push(thumb);
        });
        
        hideThumbs(thumbsClone);
        
        return visibleThumbs;
    }
    function hideThumbs(thumbs) {
        var hideLeft = (thumbWidth) * -1;
        
        thumbs.forEach(function (thumb) {
            thumb.element.css("left", hideLeft);
        });
    }
    function placeThumbs() {
        var visibleThumbs = getVisibleThumbs(),
            startX = getStartX(visibleThumbs.length);
        
        visibleThumbs.forEach(function (thumb, index) {
            var left = getLeftForVisibleThumb(startX, index);
//            console.log(left);
                        
            thumb.element.css("left", left);
        });
        
        oldVisibleThumbs = visibleThumbs;
    }
    function getStartX(visibleThumbsCount) {
        return (containerWidth - visibleThumbsCount * thumbWidth) / 2
    }
    function getLeftForVisibleThumb(startX, index) {
        return startX + (thumbWidth * index);
    }
    function collectRightAndLeftIDs(selectedID) {
        var maxSideThumbs = Math.round(maxThumbs / 2),
            rightIDs = [],
            leftIDs = [],
            thumbsCount = thumbs.length;
        
        // collect right and left ID's 
        for (var count = 1; count <= maxSideThumbs; count++) {

            // right
            var id = (selectedID + count) % thumbsCount;
            rightIDs.push(id);

            // left
            id = (selectedID - count) % thumbsCount;
            if (id < 0) {
                id = thumbsCount + id;
            }

            leftIDs.push(id);
        }

        leftIDs.reverse().push(selectedID);
        visibleIDs = leftIDs.concat(rightIDs);
    }
    
    // Public
    return {
        render: function (allThumbs, maxThumbsCount, selectedID, thWidth, cntWidth) {
            thumbs = allThumbs;
            thumbWidth = thWidth;
            containerWidth = cntWidth;
            maxThumbs = maxThumbsCount;
            
            collectRightAndLeftIDs(selectedID);
            placeThumbs();
        },
        selectThumbWithID: function (selectedID) {
            collectRightAndLeftIDs(selectedID);
            
            placeThumbs();
        }
    }
});