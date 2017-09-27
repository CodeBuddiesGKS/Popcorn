(function() {
    "use strict"
    
    angular.module("popcorn.services")
        .factory("movieService", ["$http", function($http) {
            var service = {
                getMovies: getMovies,
                getMovieById: getMovieById
            };
    
            function getMovies() {
                return $http.get("/assets/api/movies.json")
                    .then(function(res) {
                        return res.data;
                    });
            }
    
            function getMovieById(id) {
                return $http.get("/assets/api/movies.json")
                    .then(function(res) {
                        return res.data;
                    })
                    .then(function(res){
                        var movies = res.filter(function(movie) {
                            return movie.id === id;
                        });
                        return movies[0];
                    });
            }
    
            return service;
        }]);
}());