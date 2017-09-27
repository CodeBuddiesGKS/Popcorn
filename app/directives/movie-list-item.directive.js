(function() {
    "use strict"

    angular.module("popcorn.directives")
        .directive("movieListItem", function() {
            return {
                restrict: "E",
                controllerAs: "model",
                controller: controller,
                templateUrl: "/directives/movie-list-item.directive.html",
                scope: {
                    movie: "=",
                    downVote: "&",
                    upVote: "&",
                    setStars: "&",
                    goTo: "&"
                }
            }
        });

    function controller() {
        var model = this;
    }
}());