(function() {
    angular.module("popcorn.directives")
        .directive("polkadotify", function(colorGeneratorService) {
            return {
                restrict: "A",
                compile: function(element, attributes) {
                    var text = element[0].innerText;
                    var html = '<div>';

                    for(var i=0; i<text.length; i++) {
                        var letter = text.charAt(i);
                        var color = colorGeneratorService();
                        var bc = 'background-color:rgb(' + color.r + ',' + color.g + ',' + color.b + ');';
                        var c = 'color:rgb(' + (255-color.r) + ',' + (255-color.g) + ',' + (255-color.b) + ');';

                        html += '<span class="inline-block text-center polkadot" style="' + bc + c + '">' + letter + '</span>'
                    };
                    
                    html += '</div>';
                    element[0].innerHTML = html;
                }
            }
        });
}());

/*
(function() {
    angular.module("popcorn.directives")
        .directive("polkadotify", function($interpolate, colorGeneratorService) {
            return {
                restrict: "A",
                link: function(scope, element, attributes, controller) {
                    var text = $interpolate(element[0].innerText)(scope);
                    var html = '<div>';

                    for(var i=0; i<text.length; i++) {
                        var letter = text.charAt(i);
                        var color = colorGeneratorService();
                        var bc = 'background-color:rgb(' + color.r + ',' + color.g + ',' + color.b + ');';
                        var c = 'color:rgb(' + (255-color.r) + ',' + (255-color.g) + ',' + (255-color.b) + ');';

                        html += '<span class="inline-block text-center polkadot" style="' + bc + c + '">' + letter + '</span>'
                    };
                    
                    html += '</div>';
                    element[0].innerHTML = html;
                }
            }
        });
}());
*/