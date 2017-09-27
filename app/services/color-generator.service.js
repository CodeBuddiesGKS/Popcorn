(function() {
    "use strict"

    angular.module("popcorn.services")
        .factory("colorGeneratorService", function() {
            return function() {
                var randomColor = {
                    r: getRandomColor(),
                    g: getRandomColor(),
                    b: getRandomColor()
                };

                function getRandomColor() {
                    return Math.floor(Math.random() * 256);
                }

                return randomColor;
            }
        });
}());