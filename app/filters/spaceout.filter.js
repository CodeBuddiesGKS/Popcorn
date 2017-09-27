(function() {
    angular.module("popcorn.filters")
        .filter("spaceout", function() {
            return function(input) {
                var out = "";
                input ? input : "";

                for(var i=0; i<input.length; i++) {
                    out = out + input.charAt(i) + " ";
                }

                return out;
            };
        });
}());