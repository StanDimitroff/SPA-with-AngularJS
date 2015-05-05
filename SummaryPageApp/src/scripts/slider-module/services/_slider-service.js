angular.module("Slider.services").

factory("SliderHelper", function () {
    
    var slides = [],
        activeSlide = null,
        transitioningSlide = null,
        isTransitioning = false;
    
    function animateSlide() {
        var width = transitioningSlide.width(),
            tl = new TimelineLite({onComplete: onCompleteAnimation});
        
        tl.to(activeSlide, 0.650, { scale: 1.5, clearProps: "scale", ease: Power4.easeOut }, "active").
        from(transitioningSlide, 0.500, { left: width, opacity: 0.35 }, { left: 0, opacity: 1, ease: Power2.easeOut }, "+=150");
        
        isTransitioning = true;
        tl.play();
    }
    
    function onCompleteAnimation() {
        activeSlide.css("transform", "none");
        
        transitioningSlide.removeClass("transitioning").addClass("active");
        activeSlide.removeClass("active");
//        activeSlide.attr("style", "");
        
//        console.log(transitioningSlide, activeSlide);
        
        activeSlide = transitioningSlide;
        transitioningSlide = null;
        
        isTransitioning = false;
    }
    
    return {
        prevBtn: null,
        nextBtn: null,
        addSlide: function (element) {
            slides.push(element);
        },
        setActiveSlide: function (element) {
            activeSlide = element;
        },
        activateSlide: function (index) {
            var slide = slides[index];
            
            slide.addClass("transitioning");
            transitioningSlide = slide;
            
            animateSlide();
        },
        isTransitionRuning: function()  { 
            return isTransitioning;
        },
        hideNavButtons: function () {
            var tl = new TimelineLite();
            
            tl.to(this.prevBtn, 0.35, { opacity: 0, ease: Power2.easeOut }, "prev").
                to(this.nextBtn, 0.35, { opacity: 0, ease: Power2.easeOut }, "prev");
            
            tl.play();
        },
        showNavButtons: function () {
            var tl = new TimelineLite();

            tl.to(this.prevBtn, 0.35, { opacity: 1, ease: Power2.easeOut }, "prev").
            to(this.nextBtn, 0.35, { opacity: 1, ease: Power2.easeOut }, "prev");

            tl.play();
        }
    }
});