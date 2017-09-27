(function() {
    "use strict";

    angular.module("popcorn")
        .component("movieDetails", {
            templateUrl: "components/movie-details/movie-details.component.html",
            controllerAs: "model",
            controller: controller,
            $routeConfig: [
                { path: "/cast", component: "movieCast", name: "Cast" },
                { path: "/reviews", component: "movieReviews", name: "Reviews" },
                { path: "/videos", component: "movieVideos", name: "Videos" },
                { path: "/pictures", component: "moviePictures", name: "Pictures" },
                { path: "/info", component: "movieInfo", name: "Info" },
                { path: "/synopsis", component: "movieSynopsis", name: "Synopsis" },
                { path: "/trivia", component: "movieTrivia", name: "Trivia" },
                { path: "/bloopers", component: "movieBloopers", name: "Bloopers" },
                { path: "/quotes", component: "movieQuotes", name: "Quotes" },
                { path: "/faq", component: "movieFAQ", name: "FAQ" }
            ]
        })
        .component("movieCast", {
            template: "This is the Cast tab"
        })
        .component("movieReviews", {
            template: "This is the Review tab"
        })
        .component("movieVideos", {
            template: "This is the Video tab"
        })
        .component("moviePictures", {
            template: "This is the Picture tab"
        })
        .component("movieInfo", {
            template: "This is the Details tab"
        })
        .component("movieSynopsis", {
            template: "This is the Synopsis tab"
        })
        .component("movieTrivia", {
            template: "This is the Trivia tab"
        })
        .component("movieBloopers", {
            template: "This is the Bloopers tab"
        })
        .component("movieQuotes", {
            template: "This is the Quotes tab"
        })
        .component("movieFAQ", {
            template: "This is the FAQ tab"
        });

    controller.$inject = ["movieService"];

    function controller(movieService) {
        var model = this;

        model.$routerOnActivate = function(next, prev) {
            model.id = next.params.id;
            movieService.getMovieById(model.id).then(function(movie) {
                model.movie = movie;
            });
        };
    }
}());