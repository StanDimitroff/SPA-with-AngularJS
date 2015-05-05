angular.module("Slider.services").

factory("ThumbsHelper", ["Thumb", "ThumbsRender", "ThumbsInfiniteRender", "SliderHelper", function (Thumb, Render, InfiniteRender, SliderHelper) {
    // Private
    var thumbWidth = 0,
        thumbLeftOffset = 0,
        container = null,
        containerWidth = 0,
        containerCenter = 0,
        halfContainer = 0,
        maxThumbs = 0,
        thumbs = [],
        selectedID = null,
        activeThumb = null;
    
    function calculateSizes(firstThumb) {
        var el = null;
        
        if ( angular.isUndefined(firstThumb) ) {
            el = thumbs[0].element;
        } else {
            el = firstThumb;
        }
        
        containerWidth = container.outerWidth(true);
        containerCenter = parseInt(containerWidth / 2);
        halfContainer = containerCenter;
        thumbWidth = el.outerWidth(true);
        thumbLeftOffset = parseInt(thumbWidth / 2) * -1;
        maxThumbs = Math.round(containerWidth / thumbWidth);        
    }
    function makeRender() {
        if (thumbs.length > maxThumbs) {
            InfiniteRender.render(thumbs, maxThumbs, selectedID, thumbWidth, containerWidth);            
        } else {
            var self = this;
            thumbs.forEach(function (thumb) {
                Render.renderThumb(thumb, thumbs.length, thumbWidth, containerWidth);
            });            
        }        
    }

    // Public
    return {
        thumbCount: 0,
            
        // methods
        setSelectedID: function (id) {
            selectedID = id;
        },
        setActiveThumb: function (thumbElement) {
            activeThumb = thumbElement;
        },
        getActiveThumb: function () {
            return activeThumb;
        },
        getThumbs: function () {
            return thumbs;
        },
        setUp: function () {
            // get first thumb element
            var el = thumbs[0].element;

            container = el.closest("ul");
            
            calculateSizes(el);
            makeRender();
            
//            container.on("resize", function () {
//                console.log("Basi Mamata");
//            });
            
            Response.create({
                prop: "width",
                breakpoints: [1200, 992, 768]
            });
            
            Response.crossover("width", function () {
                if (Response.band(1200) || Response.band(992) || Response.band(768)) {
                    calculateSizes();
                    makeRender();
                }
            });
        },
        addThumbWithId: function (id, el) {
            var thumb = new Thumb();
            
            thumb.id = id;
            thumb.element = $(el);
            
            thumbs.push(thumb);             
        },
        selectThumb: function () {
            InfiniteRender.selectThumbWithID(selectedID);
            SliderHelper.activateSlide(selectedID);
        },
        makeSelectionForNewID: function (newID) {            
            this.getActiveThumb().removeClass("active");
            var newActiveThumb = thumbs[newID].element;
            newActiveThumb.addClass("active");
            selectedID = newID;

            this.setActiveThumb(newActiveThumb);
            this.selectThumb(); 
        },
        selectNextThumb: function () {
            var newID = selectedID + 1;
            
            if (newID > (thumbs.length - 1)) {
                newID = 0;
            }
            
            this.makeSelectionForNewID(newID);       
        },
        selectPrevThumb: function () {
            var newID = selectedID - 1;
            
            if (newID < 0) {
                newID = thumbs.length - 1;
            }
            
            this.makeSelectionForNewID(newID);
        }
    }
}]);