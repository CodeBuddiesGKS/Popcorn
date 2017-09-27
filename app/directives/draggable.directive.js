(function() {
    "use strict"

    angular.module("popcorn.directives")
        .directive("draggable", ["$document", function($document) {
            return {
                link: function(scope, element, attributes, controller) {
                    var startX = 0, startY = 0, x = 0, y = 0;

                    element.css({
                        position: 'relative',
                        border: '1px dashed red',
                        backgroundColor: 'yellow',
                        cursor: 'pointer'
                    });

                    element.on('mousedown', function(event) {
                        event.preventDefault();
                        startX = event.pageX - x;
                        startY = event.pageY - y;
                        $document.on('mousemove', mousemove);
                        $document.on('mouseup', mouseup);
                    });

                    function mousemove(event) {
                        x = event.pageX - startX;
                        y = event.pageY - startY;
                        element.css({
                            top: y + 'px',
                            left: x + 'px'
                        });
                    }

                    function mouseup() {
                        $document.off('mousemove', mousemove);
                        $document.off('mouseup', mouseup);
                    }
                }
            }
        }]);
}());