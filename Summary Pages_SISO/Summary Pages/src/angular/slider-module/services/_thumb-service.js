angular.module("Slider.services").

factory("Thumb", function () {
    return function () {
        return {
            id: null,
            element: null
        }
    }
});