(function() {
    "use strict";

    angular.module("popcorn.directives", []);
    angular.module("popcorn.filters", []);
    angular.module("popcorn.services", []);

    angular.module("popcorn", ["ngComponentRouter", "popcorn.directives", "popcorn.filters", "popcorn.services"])
        .value("$routerRootComponent",  "popcorn")
        .component("appAbout", {
            template: "This is the About Page!"
        });

    // app.config(function($routeProvider) {
    //     $routeProvider
    //         .when("/list", { template: "<movie-list></movie-list>" })
    //         .when("/about", { template: "<app-about></app-about>" })
    //         .otherwise({ redirectTo: "/list" });
    // });
}());