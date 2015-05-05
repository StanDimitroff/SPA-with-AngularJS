// responsejs - www.responsejs.com
// -------------------
// @koala-append "../../response.js"

// Controllers
// -------------------
// @koala-append "controllers/_app-controller.js"
// @koala-append "controllers/_thumbnails-controller.js"

// Directives
// -------------------
// @koala-append "directives/_thumb-directive.js"
// @koala-append "directives/_image-directive.js"
// @koala-append "directives/_nav-directive.js"
// @koala-append "directives/_slider.touch-directive.js"
// @koala-append "directives/_video-directive.js"

// Services
// -------------------
// @koala-append "services/_thumbs.helper-service.js"
// @koala-append "services/_thumb-service.js"
// @koala-append "services/_thumbs.render-service.js"
// @koala-append "services/_thumbs.infinite.render-service.js"
// @koala-append "services/_slider-service.js"

angular.module("Slider", ["Slider.controllers", "Slider.directives", "Slider.services"]);

// Controllers module
angular.module("Slider.controllers", []);

// Directives module
angular.module("Slider.directives", []);

// Sevices module
angular.module("Slider.services", []);
