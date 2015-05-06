"use strict";

var apiUrl = "https://api.video1st.com/Video1st/GetSummaryData";

angular.module("SummaryPage", [ "Page.controllers", "Page.factories", "Page.services", "Slider" ]), 
angular.module("Page.controllers", []), angular.module("Page.factories", []), angular.module("Page.services", []), 
angular.module("Slider", []), angular.module("Page.controllers").controller("SummaryController", [ "$scope", "Data", function($scope, Data) {
    $scope.loadSummaryData = function() {
        Data.summary.getData().then(function(data) {
            console.log(data);
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
} ]), !function(a, b, c) {
    var d = a.jQuery || a.Zepto || a.ender || a.elo;
    "undefined" != typeof module && module.exports ? module.exports = c(d) : a[b] = c(d);
}(this, "Response", function(a) {
    function b(a) {
        return a === +a;
    }
    function c(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }
    function d(a, b) {
        var c = this.call();
        return c >= (a || 0) && (!b || b >= c);
    }
    function e(a, b, c) {
        for (var d = [], e = a.length, f = 0; e > f; ) d[f] = b.call(c, a[f], f++, a);
        return d;
    }
    function f(a) {
        return a ? i("string" == typeof a ? a.split(" ") : a) : [];
    }
    function g(a, b, c) {
        if (null == a) return a;
        for (var d = a.length, e = 0; d > e; ) b.call(c || a[e], a[e], e++, a);
        return a;
    }
    function h(a, b, c) {
        null == b && (b = ""), null == c && (c = "");
        for (var d = [], e = a.length, f = 0; e > f; f++) null == a[f] || d.push(b + a[f] + c);
        return d;
    }
    function i(a, b, c) {
        var d, e, f, g = [], h = 0, i = 0, j = "function" == typeof b, k = !0 === c;
        for (e = a && a.length, c = k ? null : c; e > i; i++) f = a[i], d = j ? !b.call(c, f, i, a) : b ? typeof f !== b : !f, 
        d === k && (g[h++] = f);
        return g;
    }
    function j(a, c) {
        if (null == a || null == c) return a;
        if ("object" == typeof c && b(c.length)) _.apply(a, i(c, "undefined", !0)); else for (var d in c) cb.call(c, d) && void 0 !== c[d] && (a[d] = c[d]);
        return a;
    }
    function k(a, c, d) {
        return null == a ? a : ("object" == typeof a && !a.nodeType && b(a.length) ? g(a, c, d) : c.call(d || a, a), 
        a);
    }
    function l(a) {
        var b = T.devicePixelRatio;
        return null == a ? b || (l(2) ? 2 : l(1.5) ? 1.5 : l(1) ? 1 : 0) : isFinite(a) ? b && b > 0 ? b >= a : (a = "only all and (min--moz-device-pixel-ratio:" + a + ")", 
        zb(a) ? !0 : zb(a.replace("-moz-", ""))) : !1;
    }
    function m(a) {
        return a.replace(tb, "$1").replace(sb, function(a, b) {
            return b.toUpperCase();
        });
    }
    function n(a) {
        return "data-" + (a ? a.replace(tb, "$1").replace(rb, "$1-$2").toLowerCase() : a);
    }
    function o(a) {
        var b;
        return "string" == typeof a && a ? "false" === a ? !1 : "true" === a ? !0 : "null" === a ? null : "undefined" === a || (b = +a) || 0 === b || "NaN" === a ? b : a : a;
    }
    function p(a) {
        return !a || a.nodeType ? a : a[0];
    }
    function q(a, b, c) {
        var d, e, f, g, h;
        if (a.attributes) for (d = "boolean" == typeof c ? /^data-/ : d, g = 0, h = a.attributes.length; h > g; ) (f = a.attributes[g++]) && (e = "" + f.name, 
        d && d.test(e) !== c || null == f.value || b.call(a, f.value, e, f));
    }
    function r(a) {
        var b;
        return a && 1 === a.nodeType ? (b = Y && a.dataset) ? b : (b = {}, q(a, function(a, c) {
            b[m(c)] = "" + a;
        }, !0), b) : void 0;
    }
    function s(a, b, c) {
        for (var d in b) cb.call(b, d) && c(a, d, b[d]);
    }
    function t(a, b, c) {
        if (a = p(a), a && a.setAttribute) {
            if (void 0 === b && c === b) return r(a);
            var d = db(b) && n(b[0]);
            if ("object" != typeof b || d) {
                if (b = d || n(b), !b) return;
                return void 0 === c ? (b = a.getAttribute(b), null == b ? c : d ? o(b) : "" + b) : (a.setAttribute(b, c = "" + c), 
                c);
            }
            b && s(a, b, t);
        }
    }
    function u(a, b) {
        b = f(b), k(a, function(a) {
            g(b, function(b) {
                a.removeAttribute(n(b));
            });
        });
    }
    function v(a) {
        for (var b, c = [], d = 0, e = a.length; e > d; ) (b = a[d++]) && c.push("[" + n(b.replace(qb, "").replace(".", "\\.")) + "]");
        return c.join();
    }
    function w(b) {
        return a(v(f(b)));
    }
    function x() {
        return window.pageXOffset || V.scrollLeft;
    }
    function y() {
        return window.pageYOffset || V.scrollTop;
    }
    function z(a, b) {
        var c = a.getBoundingClientRect ? a.getBoundingClientRect() : {};
        return b = "number" == typeof b ? b || 0 : 0, {
            top: (c.top || 0) - b,
            left: (c.left || 0) - b,
            bottom: (c.bottom || 0) + b,
            right: (c.right || 0) + b
        };
    }
    function A(a, b) {
        var c = z(p(a), b);
        return !!c && c.right >= 0 && c.left <= Ab();
    }
    function B(a, b) {
        var c = z(p(a), b);
        return !!c && c.bottom >= 0 && c.top <= Bb();
    }
    function C(a, b) {
        var c = z(p(a), b);
        return !!c && c.bottom >= 0 && c.top <= Bb() && c.right >= 0 && c.left <= Ab();
    }
    function D(a) {
        var b = {
            img: 1,
            input: 1,
            source: 3,
            embed: 3,
            track: 3,
            iframe: 5,
            audio: 5,
            video: 5,
            script: 5
        }, c = b[a.nodeName.toLowerCase()] || -1;
        return 4 > c ? c : null != a.getAttribute("src") ? 5 : -5;
    }
    function E(a, b, c) {
        var d;
        if (!a || null == b) throw new TypeError("@store");
        return c = "string" == typeof c && c, k(a, function(a) {
            d = c ? a.getAttribute(c) : 0 < D(a) ? a.getAttribute("src") : a.innerHTML, null == d ? u(a, b) : t(a, b, d);
        }), N;
    }
    function F(a, b) {
        var c = [];
        return a && b && g(f(b), function(b) {
            c.push(t(a, b));
        }, a), c;
    }
    function G(a, b) {
        return "string" == typeof a && "function" == typeof b && (fb[a] = b, gb[a] = 1), 
        N;
    }
    function H(a) {
        return X.on("resize", a), N;
    }
    function I(a, b) {
        var c, d, e = wb.crossover;
        return "function" == typeof a && (c = b, b = a, a = c), d = a ? "" + a + e : e, 
        X.on(d, b), N;
    }
    function J(a) {
        return k(a, function(a) {
            W(a), H(a);
        }), N;
    }
    function K(a) {
        return k(a, function(a) {
            if ("object" != typeof a) throw new TypeError("@create");
            var b, c = ub(O).configure(a), d = c.verge, e = c.breakpoints, f = vb("scroll"), h = vb("resize");
            e.length && (b = e[0] || e[1] || !1, W(function() {
                function a() {
                    c.reset(), g(c.$e, function(a, b) {
                        c[b].decideValue().updateDOM();
                    }).trigger(i);
                }
                function e() {
                    g(c.$e, function(a, b) {
                        C(c[b].$e, d) && c[b].updateDOM();
                    });
                }
                var i = wb.allLoaded, j = !!c.lazy;
                g(c.target().$e, function(a, b) {
                    c[b] = ub(c).prepareData(a), (!j || C(c[b].$e, d)) && c[b].updateDOM();
                }), c.dynamic && (c.custom || lb > b) && H(a, h), j && (X.on(f, e), c.$e.one(i, function() {
                    X.off(f, e);
                }));
            }));
        }), N;
    }
    function L(a) {
        return P[Q] === N && (P[Q] = R), "function" == typeof a && a.call(P, N), N;
    }
    if ("function" != typeof a) try {
        return void console.warn("response.js aborted due to missing dependency");
    } catch (M) {}
    var N, O, P = this, Q = "Response", R = P[Q], S = "init" + Q, T = window, U = document, V = U.documentElement, W = a.domReady || a, X = a(T), Y = "undefined" != typeof DOMStringMap, Z = Array.prototype, $ = Object.prototype, _ = Z.push, ab = Z.concat, bb = $.toString, cb = $.hasOwnProperty, db = Array.isArray || function(a) {
        return "[object Array]" === bb.call(a);
    }, eb = {
        width: [ 0, 320, 481, 641, 961, 1025, 1281 ],
        height: [ 0, 481 ],
        ratio: [ 1, 1.5, 2 ]
    }, fb = {}, gb = {}, hb = {
        all: []
    }, ib = 1, jb = screen.width, kb = screen.height, lb = jb > kb ? jb : kb, mb = jb + kb - lb, nb = function() {
        return jb;
    }, ob = function() {
        return kb;
    }, pb = /[^a-z0-9_\-\.]/gi, qb = /^[\W\s]+|[\W\s]+$|/g, rb = /([a-z])([A-Z])/g, sb = /-(.)/g, tb = /^data-(.+)$/, ub = Object.create || function(a) {
        function b() {}
        return b.prototype = a, new b();
    }, vb = function(a, b) {
        return b = b || Q, a.replace(qb, "") + "." + b.replace(qb, "");
    }, wb = {
        allLoaded: vb("allLoaded"),
        crossover: vb("crossover")
    }, xb = T.matchMedia || T.msMatchMedia, yb = xb ? c(xb, T) : function() {
        return {};
    }, zb = xb ? function(a) {
        return !!xb.call(T, a).matches;
    } : function() {
        return !1;
    }, Ab = function() {
        var a = V.clientWidth, b = T.innerWidth;
        return b > a ? b : a;
    }, Bb = function() {
        var a = V.clientHeight, b = T.innerHeight;
        return b > a ? b : a;
    }, Cb = c(d, Ab), Db = c(d, Bb), Eb = {
        band: c(d, nb),
        wave: c(d, ob)
    };
    return O = function() {
        function b(a) {
            return "string" == typeof a ? a.toLowerCase().replace(pb, "") : "";
        }
        function c(a, b) {
            return a - b;
        }
        var d = wb.crossover, k = Math.min;
        return {
            $e: 0,
            mode: 0,
            breakpoints: null,
            prefix: null,
            prop: "width",
            keys: [],
            dynamic: null,
            custom: 0,
            values: [],
            fn: 0,
            verge: null,
            newValue: 0,
            currValue: 1,
            aka: null,
            lazy: null,
            i: 0,
            uid: null,
            reset: function() {
                for (var a = this.breakpoints, b = a.length, c = 0; !c && b--; ) this.fn(a[b]) && (c = b);
                return c !== this.i && (X.trigger(d).trigger(this.prop + d), this.i = c || 0), this;
            },
            configure: function(a) {
                j(this, a);
                var d, l, m, n, o, p = !0, q = this.prop;
                if (this.uid = ib++, null == this.verge && (this.verge = k(lb, 500)), !(this.fn = fb[q])) throw new TypeError("@create");
                if (null == this.dynamic && (this.dynamic = "device" !== q.slice(0, 6)), this.custom = gb[q], 
                m = this.prefix ? i(e(f(this.prefix), b)) : [ "min-" + q + "-" ], n = 1 < m.length ? m.slice(1) : 0, 
                this.prefix = m[0], l = this.breakpoints, db(l)) {
                    if (g(l, function(a) {
                        if (!a && 0 !== a) throw "invalid breakpoint";
                        p = p && isFinite(a);
                    }), p && l.sort(c), !l.length) throw new TypeError(".breakpoints");
                } else if (l = eb[q] || eb[q.split("-").pop()], !l) throw new TypeError(".prop");
                if (this.breakpoints = l, this.keys = h(this.breakpoints, this.prefix), this.aka = null, 
                n) {
                    for (o = [], d = n.length; d--; ) o.push(h(this.breakpoints, n[d]));
                    this.aka = o, this.keys = ab.apply(this.keys, o);
                }
                return hb.all = hb.all.concat(hb[this.uid] = this.keys), this;
            },
            target: function() {
                return this.$e = a(v(hb[this.uid])), E(this.$e, S), this.keys.push(S), this;
            },
            decideValue: function() {
                for (var a = null, b = this.breakpoints, c = b.length, d = c; null == a && d--; ) this.fn(b[d]) && (a = this.values[d]);
                return this.newValue = "string" == typeof a ? a : this.values[c], this;
            },
            prepareData: function(b) {
                if (this.$e = a(b), this.mode = D(b), this.values = F(this.$e, this.keys), this.aka) for (var c = this.aka.length; c--; ) this.values = j(this.values, F(this.$e, this.aka[c]));
                return this.decideValue();
            },
            updateDOM: function() {
                return this.currValue === this.newValue ? this : (this.currValue = this.newValue, 
                0 < this.mode ? this.$e[0].setAttribute("src", this.newValue) : null == this.newValue ? this.$e.empty && this.$e.empty() : this.$e.html ? this.$e.html(this.newValue) : (this.$e.empty && this.$e.empty(), 
                this.$e[0].innerHTML = this.newValue), this);
            }
        };
    }(), fb.width = Cb, fb.height = Db, fb["device-width"] = Eb.band, fb["device-height"] = Eb.wave, 
    fb["device-pixel-ratio"] = l, N = {
        deviceMin: function() {
            return mb;
        },
        deviceMax: function() {
            return lb;
        },
        noConflict: L,
        create: K,
        addTest: G,
        datatize: n,
        camelize: m,
        render: o,
        store: E,
        access: F,
        target: w,
        object: ub,
        crossover: I,
        action: J,
        resize: H,
        ready: W,
        affix: h,
        sift: i,
        dpr: l,
        deletes: u,
        scrollX: x,
        scrollY: y,
        deviceW: nb,
        deviceH: ob,
        device: Eb,
        inX: A,
        inY: B,
        route: k,
        merge: j,
        media: yb,
        mq: zb,
        wave: Db,
        band: Cb,
        map: e,
        each: g,
        inViewport: C,
        dataset: t,
        viewportH: Bb,
        viewportW: Ab
    }, W(function() {
        var b = t(U.body, "responsejs"), c = T.JSON && JSON.parse || a.parseJSON;
        b = b && c ? c(b) : b, b && b.create && K(b.create), V.className = V.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs ";
    }), N;
}), angular.module("Slider", [ "Slider.controllers", "Slider.directives", "Slider.services" ]), 
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
}), !function(a, b, c) {
    var d = a.jQuery || a.Zepto || a.ender || a.elo;
    "undefined" != typeof module && module.exports ? module.exports = c(d) : a[b] = c(d);
}(this, "Response", function(a) {
    function b(a) {
        return a === +a;
    }
    function c(a, b) {
        return function() {
            return a.apply(b, arguments);
        };
    }
    function d(a, b) {
        var c = this.call();
        return c >= (a || 0) && (!b || b >= c);
    }
    function e(a, b, c) {
        for (var d = [], e = a.length, f = 0; e > f; ) d[f] = b.call(c, a[f], f++, a);
        return d;
    }
    function f(a) {
        return a ? i("string" == typeof a ? a.split(" ") : a) : [];
    }
    function g(a, b, c) {
        if (null == a) return a;
        for (var d = a.length, e = 0; d > e; ) b.call(c || a[e], a[e], e++, a);
        return a;
    }
    function h(a, b, c) {
        null == b && (b = ""), null == c && (c = "");
        for (var d = [], e = a.length, f = 0; e > f; f++) null == a[f] || d.push(b + a[f] + c);
        return d;
    }
    function i(a, b, c) {
        var d, e, f, g = [], h = 0, i = 0, j = "function" == typeof b, k = !0 === c;
        for (e = a && a.length, c = k ? null : c; e > i; i++) f = a[i], d = j ? !b.call(c, f, i, a) : b ? typeof f !== b : !f, 
        d === k && (g[h++] = f);
        return g;
    }
    function j(a, c) {
        if (null == a || null == c) return a;
        if ("object" == typeof c && b(c.length)) _.apply(a, i(c, "undefined", !0)); else for (var d in c) cb.call(c, d) && void 0 !== c[d] && (a[d] = c[d]);
        return a;
    }
    function k(a, c, d) {
        return null == a ? a : ("object" == typeof a && !a.nodeType && b(a.length) ? g(a, c, d) : c.call(d || a, a), 
        a);
    }
    function l(a) {
        var b = T.devicePixelRatio;
        return null == a ? b || (l(2) ? 2 : l(1.5) ? 1.5 : l(1) ? 1 : 0) : isFinite(a) ? b && b > 0 ? b >= a : (a = "only all and (min--moz-device-pixel-ratio:" + a + ")", 
        zb(a) ? !0 : zb(a.replace("-moz-", ""))) : !1;
    }
    function m(a) {
        return a.replace(tb, "$1").replace(sb, function(a, b) {
            return b.toUpperCase();
        });
    }
    function n(a) {
        return "data-" + (a ? a.replace(tb, "$1").replace(rb, "$1-$2").toLowerCase() : a);
    }
    function o(a) {
        var b;
        return "string" == typeof a && a ? "false" === a ? !1 : "true" === a ? !0 : "null" === a ? null : "undefined" === a || (b = +a) || 0 === b || "NaN" === a ? b : a : a;
    }
    function p(a) {
        return !a || a.nodeType ? a : a[0];
    }
    function q(a, b, c) {
        var d, e, f, g, h;
        if (a.attributes) for (d = "boolean" == typeof c ? /^data-/ : d, g = 0, h = a.attributes.length; h > g; ) (f = a.attributes[g++]) && (e = "" + f.name, 
        d && d.test(e) !== c || null == f.value || b.call(a, f.value, e, f));
    }
    function r(a) {
        var b;
        return a && 1 === a.nodeType ? (b = Y && a.dataset) ? b : (b = {}, q(a, function(a, c) {
            b[m(c)] = "" + a;
        }, !0), b) : void 0;
    }
    function s(a, b, c) {
        for (var d in b) cb.call(b, d) && c(a, d, b[d]);
    }
    function t(a, b, c) {
        if (a = p(a), a && a.setAttribute) {
            if (void 0 === b && c === b) return r(a);
            var d = db(b) && n(b[0]);
            if ("object" != typeof b || d) {
                if (b = d || n(b), !b) return;
                return void 0 === c ? (b = a.getAttribute(b), null == b ? c : d ? o(b) : "" + b) : (a.setAttribute(b, c = "" + c), 
                c);
            }
            b && s(a, b, t);
        }
    }
    function u(a, b) {
        b = f(b), k(a, function(a) {
            g(b, function(b) {
                a.removeAttribute(n(b));
            });
        });
    }
    function v(a) {
        for (var b, c = [], d = 0, e = a.length; e > d; ) (b = a[d++]) && c.push("[" + n(b.replace(qb, "").replace(".", "\\.")) + "]");
        return c.join();
    }
    function w(b) {
        return a(v(f(b)));
    }
    function x() {
        return window.pageXOffset || V.scrollLeft;
    }
    function y() {
        return window.pageYOffset || V.scrollTop;
    }
    function z(a, b) {
        var c = a.getBoundingClientRect ? a.getBoundingClientRect() : {};
        return b = "number" == typeof b ? b || 0 : 0, {
            top: (c.top || 0) - b,
            left: (c.left || 0) - b,
            bottom: (c.bottom || 0) + b,
            right: (c.right || 0) + b
        };
    }
    function A(a, b) {
        var c = z(p(a), b);
        return !!c && c.right >= 0 && c.left <= Ab();
    }
    function B(a, b) {
        var c = z(p(a), b);
        return !!c && c.bottom >= 0 && c.top <= Bb();
    }
    function C(a, b) {
        var c = z(p(a), b);
        return !!c && c.bottom >= 0 && c.top <= Bb() && c.right >= 0 && c.left <= Ab();
    }
    function D(a) {
        var b = {
            img: 1,
            input: 1,
            source: 3,
            embed: 3,
            track: 3,
            iframe: 5,
            audio: 5,
            video: 5,
            script: 5
        }, c = b[a.nodeName.toLowerCase()] || -1;
        return 4 > c ? c : null != a.getAttribute("src") ? 5 : -5;
    }
    function E(a, b, c) {
        var d;
        if (!a || null == b) throw new TypeError("@store");
        return c = "string" == typeof c && c, k(a, function(a) {
            d = c ? a.getAttribute(c) : 0 < D(a) ? a.getAttribute("src") : a.innerHTML, null == d ? u(a, b) : t(a, b, d);
        }), N;
    }
    function F(a, b) {
        var c = [];
        return a && b && g(f(b), function(b) {
            c.push(t(a, b));
        }, a), c;
    }
    function G(a, b) {
        return "string" == typeof a && "function" == typeof b && (fb[a] = b, gb[a] = 1), 
        N;
    }
    function H(a) {
        return X.on("resize", a), N;
    }
    function I(a, b) {
        var c, d, e = wb.crossover;
        return "function" == typeof a && (c = b, b = a, a = c), d = a ? "" + a + e : e, 
        X.on(d, b), N;
    }
    function J(a) {
        return k(a, function(a) {
            W(a), H(a);
        }), N;
    }
    function K(a) {
        return k(a, function(a) {
            if ("object" != typeof a) throw new TypeError("@create");
            var b, c = ub(O).configure(a), d = c.verge, e = c.breakpoints, f = vb("scroll"), h = vb("resize");
            e.length && (b = e[0] || e[1] || !1, W(function() {
                function a() {
                    c.reset(), g(c.$e, function(a, b) {
                        c[b].decideValue().updateDOM();
                    }).trigger(i);
                }
                function e() {
                    g(c.$e, function(a, b) {
                        C(c[b].$e, d) && c[b].updateDOM();
                    });
                }
                var i = wb.allLoaded, j = !!c.lazy;
                g(c.target().$e, function(a, b) {
                    c[b] = ub(c).prepareData(a), (!j || C(c[b].$e, d)) && c[b].updateDOM();
                }), c.dynamic && (c.custom || lb > b) && H(a, h), j && (X.on(f, e), c.$e.one(i, function() {
                    X.off(f, e);
                }));
            }));
        }), N;
    }
    function L(a) {
        return P[Q] === N && (P[Q] = R), "function" == typeof a && a.call(P, N), N;
    }
    if ("function" != typeof a) try {
        return void console.warn("response.js aborted due to missing dependency");
    } catch (M) {}
    var N, O, P = this, Q = "Response", R = P[Q], S = "init" + Q, T = window, U = document, V = U.documentElement, W = a.domReady || a, X = a(T), Y = "undefined" != typeof DOMStringMap, Z = Array.prototype, $ = Object.prototype, _ = Z.push, ab = Z.concat, bb = $.toString, cb = $.hasOwnProperty, db = Array.isArray || function(a) {
        return "[object Array]" === bb.call(a);
    }, eb = {
        width: [ 0, 320, 481, 641, 961, 1025, 1281 ],
        height: [ 0, 481 ],
        ratio: [ 1, 1.5, 2 ]
    }, fb = {}, gb = {}, hb = {
        all: []
    }, ib = 1, jb = screen.width, kb = screen.height, lb = jb > kb ? jb : kb, mb = jb + kb - lb, nb = function() {
        return jb;
    }, ob = function() {
        return kb;
    }, pb = /[^a-z0-9_\-\.]/gi, qb = /^[\W\s]+|[\W\s]+$|/g, rb = /([a-z])([A-Z])/g, sb = /-(.)/g, tb = /^data-(.+)$/, ub = Object.create || function(a) {
        function b() {}
        return b.prototype = a, new b();
    }, vb = function(a, b) {
        return b = b || Q, a.replace(qb, "") + "." + b.replace(qb, "");
    }, wb = {
        allLoaded: vb("allLoaded"),
        crossover: vb("crossover")
    }, xb = T.matchMedia || T.msMatchMedia, yb = xb ? c(xb, T) : function() {
        return {};
    }, zb = xb ? function(a) {
        return !!xb.call(T, a).matches;
    } : function() {
        return !1;
    }, Ab = function() {
        var a = V.clientWidth, b = T.innerWidth;
        return b > a ? b : a;
    }, Bb = function() {
        var a = V.clientHeight, b = T.innerHeight;
        return b > a ? b : a;
    }, Cb = c(d, Ab), Db = c(d, Bb), Eb = {
        band: c(d, nb),
        wave: c(d, ob)
    };
    return O = function() {
        function b(a) {
            return "string" == typeof a ? a.toLowerCase().replace(pb, "") : "";
        }
        function c(a, b) {
            return a - b;
        }
        var d = wb.crossover, k = Math.min;
        return {
            $e: 0,
            mode: 0,
            breakpoints: null,
            prefix: null,
            prop: "width",
            keys: [],
            dynamic: null,
            custom: 0,
            values: [],
            fn: 0,
            verge: null,
            newValue: 0,
            currValue: 1,
            aka: null,
            lazy: null,
            i: 0,
            uid: null,
            reset: function() {
                for (var a = this.breakpoints, b = a.length, c = 0; !c && b--; ) this.fn(a[b]) && (c = b);
                return c !== this.i && (X.trigger(d).trigger(this.prop + d), this.i = c || 0), this;
            },
            configure: function(a) {
                j(this, a);
                var d, l, m, n, o, p = !0, q = this.prop;
                if (this.uid = ib++, null == this.verge && (this.verge = k(lb, 500)), !(this.fn = fb[q])) throw new TypeError("@create");
                if (null == this.dynamic && (this.dynamic = "device" !== q.slice(0, 6)), this.custom = gb[q], 
                m = this.prefix ? i(e(f(this.prefix), b)) : [ "min-" + q + "-" ], n = 1 < m.length ? m.slice(1) : 0, 
                this.prefix = m[0], l = this.breakpoints, db(l)) {
                    if (g(l, function(a) {
                        if (!a && 0 !== a) throw "invalid breakpoint";
                        p = p && isFinite(a);
                    }), p && l.sort(c), !l.length) throw new TypeError(".breakpoints");
                } else if (l = eb[q] || eb[q.split("-").pop()], !l) throw new TypeError(".prop");
                if (this.breakpoints = l, this.keys = h(this.breakpoints, this.prefix), this.aka = null, 
                n) {
                    for (o = [], d = n.length; d--; ) o.push(h(this.breakpoints, n[d]));
                    this.aka = o, this.keys = ab.apply(this.keys, o);
                }
                return hb.all = hb.all.concat(hb[this.uid] = this.keys), this;
            },
            target: function() {
                return this.$e = a(v(hb[this.uid])), E(this.$e, S), this.keys.push(S), this;
            },
            decideValue: function() {
                for (var a = null, b = this.breakpoints, c = b.length, d = c; null == a && d--; ) this.fn(b[d]) && (a = this.values[d]);
                return this.newValue = "string" == typeof a ? a : this.values[c], this;
            },
            prepareData: function(b) {
                if (this.$e = a(b), this.mode = D(b), this.values = F(this.$e, this.keys), this.aka) for (var c = this.aka.length; c--; ) this.values = j(this.values, F(this.$e, this.aka[c]));
                return this.decideValue();
            },
            updateDOM: function() {
                return this.currValue === this.newValue ? this : (this.currValue = this.newValue, 
                0 < this.mode ? this.$e[0].setAttribute("src", this.newValue) : null == this.newValue ? this.$e.empty && this.$e.empty() : this.$e.html ? this.$e.html(this.newValue) : (this.$e.empty && this.$e.empty(), 
                this.$e[0].innerHTML = this.newValue), this);
            }
        };
    }(), fb.width = Cb, fb.height = Db, fb["device-width"] = Eb.band, fb["device-height"] = Eb.wave, 
    fb["device-pixel-ratio"] = l, N = {
        deviceMin: function() {
            return mb;
        },
        deviceMax: function() {
            return lb;
        },
        noConflict: L,
        create: K,
        addTest: G,
        datatize: n,
        camelize: m,
        render: o,
        store: E,
        access: F,
        target: w,
        object: ub,
        crossover: I,
        action: J,
        resize: H,
        ready: W,
        affix: h,
        sift: i,
        dpr: l,
        deletes: u,
        scrollX: x,
        scrollY: y,
        deviceW: nb,
        deviceH: ob,
        device: Eb,
        inX: A,
        inY: B,
        route: k,
        merge: j,
        media: yb,
        mq: zb,
        wave: Db,
        band: Cb,
        map: e,
        each: g,
        inViewport: C,
        dataset: t,
        viewportH: Bb,
        viewportW: Ab
    }, W(function() {
        var b = t(U.body, "responsejs"), c = T.JSON && JSON.parse || a.parseJSON;
        b = b && c ? c(b) : b, b && b.create && K(b.create), V.className = V.className.replace(/(^|\s)(no-)?responsejs(\s|$)/, "$1$3") + " responsejs ";
    }), N;
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