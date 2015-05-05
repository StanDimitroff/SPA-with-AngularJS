"use strict";

var apiUrl = "https://api.devvideo1st.com/Video1st/GetSummaryData";

angular.module("SummaryPage", [ "Page.controllers", "Page.factories", "Page.services", "Slider" ]), 
angular.module("Page.controllers", []), angular.module("Page.factories", []), angular.module("Page.services", []), 
angular.module("Slider", []), angular.module("Page.controllers").controller("SummaryController", [ "$scope", "Data", function($scope, Data) {
    $scope.loadSummaryData = function() {
        Data.summary.getData().then(function(data) {
            console.log(data), $scope.summaryData = data, $scope.event = summaryData.Event, 
            $scope.advisor = summaryData.Advisor, $scope.VehicleRunningCosts = summaryData.VehicleRunningCosts, 
            $scope.comments = summaryData.Comments, $scope.vehicleDetails = summaryData.VehicleDetails, 
            $scope.ancillaryInfo = summaryData.AncillaryInformation, $scope.ownership = summaryData.Ownership, 
            $scope.consumption = summaryData.Consumption, $scope.photos = summaryData.Photos, 
            $scope.videos = summaryData.Videos, $scope.thumbnails = $scope.photos.concat($scope.videos);
        }, function(error) {
            console.log(error);
        });
    }, $scope.sendComment = function() {
        $("#comment").val();
        Data.summary.sendComment().then(function(data) {
            console.log(data);
        }, function(error) {
            console.log(error);
        });
    };
} ]), angular.module("Page.factories").factory("Data", [ "AjaxRequester", function(AjaxRequester) {
    function Data(apiUrlr) {
        this.summary = new Summary(apiUrl);
    }
    var Summary = function() {
        function Summary(apiUrl) {
            this._serviceUrl = apiUrl, this._ajaxRequester = AjaxRequester;
        }
        return Summary.prototype.getData = function() {
            var data = {
                Params: {
                    dealer: "demosite",
                    reference: "16wt-63",
                    u: 7858
                },
                TokenID: "1D96DF6C7E5471F66D6D45135EE5C517E5A562BC941CB5E7379F340B96FC490B"
            }, headers = {
                "Content-Type": "application/json"
            }, url = this._serviceUrl;
            return this._ajaxRequester.post(url, data, headers).then(function(result, status, headers, config) {
                return "application/json; charset=utf-8" != headers("Content-type") && "string" != typeof sessionTokenID ? result : void 0;
            }, function(error, status, headers, config, statusText) {});
        }, Summary.prototype.sendComment = function() {}, Summary;
    }();
    return new Data(apiUrl);
} ]), angular.module("Page.services").service("AjaxRequester", [ "$http", "$q", function($http, $q) {
    function AjaxRequester(_messages) {
        this.post = makePostRequest;
    }
    var makeRequest = function(url, method, data, headers) {
        var request = {
            method: method,
            url: url,
            headers: headers,
            data: data,
            withCredentials: !0
        }, defer = $q.defer();
        return $http(request).success(function(response) {
            defer.resolve(response);
        }).error(function(error, status, headers, config, statusText) {
            defer.reject(error);
        }), defer.promise;
    }, makePostRequest = function(url, data, headers) {
        return makeRequest(url, "POST", data, headers);
    };
    return new AjaxRequester();
} ]), angular.module("Slider", [ "Slider.controllers", "Slider.directives", "Slider.services" ]), 
angular.module("Slider.controllers", []), angular.module("Slider.directives", []), 
angular.module("Slider.services", []), angular.module("Slider.controllers").controller("AppController", [ "$scope", "SliderHelper", "ThumbsHelper", function($scope, SliderHelper, ThumbsHelper) {
    $scope.SliderHelper = SliderHelper, $scope.ThumbsHelper = ThumbsHelper;
} ]), angular.module("Slider.controllers").controller("ThumbnailCtrl", [ "$scope", "ThumbsHelper", "SliderHelper", function($scope, ThumbsHelper, SliderHelper) {
    $scope.ThumbsHelper = ThumbsHelper, $scope.activateThumb = function(event) {
        var thumbs = ThumbsHelper.getThumbs();
        SliderHelper.isTransitionRuning() || thumbs.forEach(function(thumb) {
            thumb.element.is($(event.currentTarget)) && (thumb.element.hasClass("active") || (ThumbsHelper.setSelectedID(thumb.id), 
            ThumbsHelper.getActiveThumb().removeClass("active"), thumb.element.addClass("active"), 
            ThumbsHelper.setActiveThumb(thumb.element), ThumbsHelper.selectThumb()));
        });
    };
} ]), angular.module("Slider.directives").directive("image", function() {
    return {
        restrct: "A",
        link: function(scope, element) {
            var el = $(element);
            el.hasClass("active") && scope.SliderHelper.setActiveSlide(el), scope.SliderHelper.addSlide(el);
        }
    };
}), angular.module("Slider.directives").directive("sliderNav", function() {
    return {
        restrict: "A",
        link: function(scope, element) {
            var el = $(element);
            el.hasClass("prev") && (scope.SliderHelper.prevBtn = element, el.on("click", function() {
                scope.SliderHelper.isTransitionRuning() || scope.ThumbsHelper.selectPrevThumb();
            })), el.hasClass("next") && (scope.SliderHelper.nextBtn = element, el.on("click", function() {
                scope.SliderHelper.isTransitionRuning() || scope.ThumbsHelper.selectNextThumb();
            }));
        }
    };
}), angular.module("Slider.directives").directive("sliderTouch", function() {
    return {
        restrict: "A",
        link: function(scope, element) {
            var el = $(element);
            el.swipe({
                swipeStatus: function(event, phase, direction, distance) {
                    "end" == phase && (scope.SliderHelper.isTransitionRuning() || ("left" === direction && scope.ThumbsHelper.selectPrevThumb(), 
                    "right" === direction && scope.ThumbsHelper.selectNextThumb()));
                },
                triggerOnTouchEnd: !1,
                triggerOnTouchLeave: !0,
                threshold: 150
            });
        }
    };
}), angular.module("Slider.directives").directive("thumb", function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            var id = null;
            0 == scope.ThumbsHelper.thumbCount ? (id = 0, scope.ThumbsHelper.addThumbWithId(id, element), 
            scope.ThumbsHelper.thumbCount++) : (id = scope.ThumbsHelper.thumbCount++, scope.ThumbsHelper.addThumbWithId(id, element)), 
            angular.isUndefined(attrs.isLast) || "true" !== attrs.isLast || scope.ThumbsHelper.setUp(), 
            element.hasClass("active") && (scope.ThumbsHelper.setSelectedID(id), scope.ThumbsHelper.setActiveThumb($(element)));
        }
    };
}), angular.module("Slider.directives").directive("video", function() {
    return {
        restrict: "A",
        link: function(scope, element) {
            var v = element.get(0);
            v.addEventListener("pause", function() {
                scope.SliderHelper.showNavButtons();
            }), v.addEventListener("playing", function() {
                scope.SliderHelper.hideNavButtons();
            }), v.addEventListener("ended", function() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
            });
        }
    };
}), angular.module("Slider.services").factory("SliderHelper", function() {
    function animateSlide() {
        var width = transitioningSlide.width(), tl = new TimelineLite({
            onComplete: onCompleteAnimation
        });
        tl.to(activeSlide, .65, {
            scale: 1.5,
            clearProps: "scale",
            ease: Power4.easeOut
        }, "active").from(transitioningSlide, .5, {
            left: width,
            opacity: .35
        }, {
            left: 0,
            opacity: 1,
            ease: Power2.easeOut
        }, "+=150"), isTransitioning = !0, tl.play();
    }
    function onCompleteAnimation() {
        activeSlide.css("transform", "none"), transitioningSlide.removeClass("transitioning").addClass("active"), 
        activeSlide.removeClass("active"), activeSlide = transitioningSlide, transitioningSlide = null, 
        isTransitioning = !1;
    }
    var slides = [], activeSlide = null, transitioningSlide = null, isTransitioning = !1;
    return {
        prevBtn: null,
        nextBtn: null,
        addSlide: function(element) {
            slides.push(element);
        },
        setActiveSlide: function(element) {
            activeSlide = element;
        },
        activateSlide: function(index) {
            var slide = slides[index];
            slide.addClass("transitioning"), transitioningSlide = slide, animateSlide();
        },
        isTransitionRuning: function() {
            return isTransitioning;
        },
        hideNavButtons: function() {
            var tl = new TimelineLite();
            tl.to(this.prevBtn, .35, {
                opacity: 0,
                ease: Power2.easeOut
            }, "prev").to(this.nextBtn, .35, {
                opacity: 0,
                ease: Power2.easeOut
            }, "prev"), tl.play();
        },
        showNavButtons: function() {
            var tl = new TimelineLite();
            tl.to(this.prevBtn, .35, {
                opacity: 1,
                ease: Power2.easeOut
            }, "prev").to(this.nextBtn, .35, {
                opacity: 1,
                ease: Power2.easeOut
            }, "prev"), tl.play();
        }
    };
}), angular.module("Slider.services").factory("Thumb", function() {
    return function() {
        return {
            id: null,
            element: null
        };
    };
}), angular.module("Slider.services").factory("ThumbsHelper", [ "Thumb", "ThumbsRender", "ThumbsInfiniteRender", "SliderHelper", function(Thumb, Render, InfiniteRender, SliderHelper) {
    function calculateSizes(firstThumb) {
        var el = null;
        el = angular.isUndefined(firstThumb) ? thumbs[0].element : firstThumb, containerWidth = container.outerWidth(!0), 
        containerCenter = parseInt(containerWidth / 2), halfContainer = containerCenter, 
        thumbWidth = el.outerWidth(!0), thumbLeftOffset = -1 * parseInt(thumbWidth / 2), 
        maxThumbs = Math.round(containerWidth / thumbWidth);
    }
    function makeRender() {
        if (thumbs.length > maxThumbs) InfiniteRender.render(thumbs, maxThumbs, selectedID, thumbWidth, containerWidth); else {
            thumbs.forEach(function(thumb) {
                Render.renderThumb(thumb, thumbs.length, thumbWidth, containerWidth);
            });
        }
    }
    var thumbWidth = 0, thumbLeftOffset = 0, container = null, containerWidth = 0, containerCenter = 0, halfContainer = 0, maxThumbs = 0, thumbs = [], selectedID = null, activeThumb = null;
    return {
        thumbCount: 0,
        setSelectedID: function(id) {
            selectedID = id;
        },
        setActiveThumb: function(thumbElement) {
            activeThumb = thumbElement;
        },
        getActiveThumb: function() {
            return activeThumb;
        },
        getThumbs: function() {
            return thumbs;
        },
        setUp: function() {
            var el = thumbs[0].element;
            container = el.closest("ul"), calculateSizes(el), makeRender(), Response.create({
                prop: "width",
                breakpoints: [ 1200, 992, 768 ]
            }), Response.crossover("width", function() {
                (Response.band(1200) || Response.band(992) || Response.band(768)) && (calculateSizes(), 
                makeRender());
            });
        },
        addThumbWithId: function(id, el) {
            var thumb = new Thumb();
            thumb.id = id, thumb.element = $(el), thumbs.push(thumb);
        },
        selectThumb: function() {
            InfiniteRender.selectThumbWithID(selectedID), SliderHelper.activateSlide(selectedID);
        },
        makeSelectionForNewID: function(newID) {
            this.getActiveThumb().removeClass("active");
            var newActiveThumb = thumbs[newID].element;
            newActiveThumb.addClass("active"), selectedID = newID, this.setActiveThumb(newActiveThumb), 
            this.selectThumb();
        },
        selectNextThumb: function() {
            var newID = selectedID + 1;
            newID > thumbs.length - 1 && (newID = 0), this.makeSelectionForNewID(newID);
        },
        selectPrevThumb: function() {
            var newID = selectedID - 1;
            0 > newID && (newID = thumbs.length - 1), this.makeSelectionForNewID(newID);
        }
    };
} ]), angular.module("Slider.services").factory("ThumbsInfiniteRender", function() {
    function getVisibleThumbs() {
        var thumbsClone = thumbs.slice(0), visibleThumbs = [];
        return visibleIDs.forEach(function(id) {
            var thumb = thumbs[id], index = thumbsClone.indexOf(thumb);
            thumbsClone.splice(index, 1), visibleThumbs.push(thumb);
        }), hideThumbs(thumbsClone), visibleThumbs;
    }
    function hideThumbs(thumbs) {
        var hideLeft = -1 * thumbWidth;
        thumbs.forEach(function(thumb) {
            thumb.element.css("left", hideLeft);
        });
    }
    function placeThumbs() {
        var visibleThumbs = getVisibleThumbs(), startX = getStartX(visibleThumbs.length);
        visibleThumbs.forEach(function(thumb, index) {
            var left = getLeftForVisibleThumb(startX, index);
            thumb.element.css("left", left);
        }), oldVisibleThumbs = visibleThumbs;
    }
    function getStartX(visibleThumbsCount) {
        return (containerWidth - visibleThumbsCount * thumbWidth) / 2;
    }
    function getLeftForVisibleThumb(startX, index) {
        return startX + thumbWidth * index;
    }
    function collectRightAndLeftIDs(selectedID) {
        for (var maxSideThumbs = Math.round(maxThumbs / 2), rightIDs = [], leftIDs = [], thumbsCount = thumbs.length, count = 1; maxSideThumbs >= count; count++) {
            var id = (selectedID + count) % thumbsCount;
            rightIDs.push(id), id = (selectedID - count) % thumbsCount, 0 > id && (id = thumbsCount + id), 
            leftIDs.push(id);
        }
        leftIDs.reverse().push(selectedID), visibleIDs = leftIDs.concat(rightIDs);
    }
    var thumbs = [], visibleIDs = [], containerWidth = 0, maxThumbs = 0, thumbWidth = 0;
    return {
        render: function(allThumbs, maxThumbsCount, selectedID, thWidth, cntWidth) {
            thumbs = allThumbs, thumbWidth = thWidth, containerWidth = cntWidth, maxThumbs = maxThumbsCount, 
            collectRightAndLeftIDs(selectedID), placeThumbs();
        },
        selectThumbWithID: function(selectedID) {
            collectRightAndLeftIDs(selectedID), placeThumbs();
        }
    };
}), angular.module("Slider.services").factory("ThumbsRender", function() {
    return {
        renderThumb: function(thumb, thumbsCount, thumbWidth, containerWidth) {
            var id = thumb.id, position = id * thumbWidth, numOfThumbs = thumbsCount, thumbsWidth = thumbWidth * numOfThumbs, startLeft = ~~((containerWidth - thumbsWidth) / 2), thumbLeft = startLeft + position;
            thumb.element.css("left", thumbLeft);
        }
    };
});
//# sourceMappingURL=main.js.map