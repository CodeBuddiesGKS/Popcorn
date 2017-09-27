(function() {
    "use strict"

    angular.module("popcorn")
        .component("movieList", {
            templateUrl: "components/movie-list/movie-list.component.html",
            controllerAs: "model",
            controller: controller,
            bindings: {
                "$router": "<"
            }
        });

    controller.$inject = ["movieService"];

    function controller(movieService) {
        var model = this;

        model.$onInit = $onInit;
        model.downVote = downVote;
        model.goTo = goTo;
        model.movies = [];
        model.setStars = setStars;
        model.upVote = upVote;

        function $onInit() {
            movieService.getMovies().then(function(movies) {
                model.movies = movies;
            });
        };

        function downVote(movie) {
            if (movie.stars > 1) {
                movie.stars--;
            }
        };

        function upVote(movie) {
            if (movie.stars < 10) {
                movie.stars++;
            }
        };

        function setStars(movie, value) {
            if (value > 0 && value <= 10) {
                movie.stars = value;
            }
        };

        function goTo(id) {
            model.$router.navigate(["Details", {id: id}, "Cast"]);
        };
    }
}());