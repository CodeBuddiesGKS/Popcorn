(function(){
    "use strict";

    var app = angular.module("popcorn");

    app.component("popcorn", {
        templateUrl: "/components/popcorn/popcorn.component.html",
        $routeConfig: [
            {
                path: "/list",
                component: "movieList",
                name: "List"
            },
            {
                path: "/detail/:id/...",
                component: "movieDetails",
                name: "Details"
            },
            {
                path: "/about",
                component: "appAbout",
                name: "About"
            },
            {
                path: "/**",
                redirectTo: ["List"]
            },
        ]
    });
}());