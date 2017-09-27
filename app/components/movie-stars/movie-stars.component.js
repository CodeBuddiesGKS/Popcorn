(function(){
    "use strict";

    var app = angular.module("popcorn");

    function controller() {
        var model = this;
        model.starHovered = -1;

        model.$onInit = function() {
            model.stars = new Array(model.max);
        };

        model.starClass = function(index) {
            if (model.starHovered > 0 && model.starHovered <= 10 && index <= model.starHovered) {
                return {'star-hovered': true};
            } else if (index < model.value) {
                return {'star-gold': true};
            } else if (index >= model.value) {
                return {'star-outline': true};
            } else {
                return {};
            }
            //return {'star-gold': ($index < model.value), 'star-outline': ($index >= model.value)}
        }
    }

    app.component("movieStars", {
        templateUrl: "components/movie-stars/movie-stars.component.html",
        bindings: {
            value: "<",
            max: "<",
            setStars: "&"
        },
        controllerAs: "model",
        controller: [controller]
    })
}());