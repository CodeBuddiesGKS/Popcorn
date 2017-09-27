(function(){
    "use strict";

    var app = angular.module("popcorn");

    function controller() {
        var model = this;
        var panels = [];

        model.selectPanel = function(panel) {
            for(var i in panels) {
                if (panel === panels[i]) {
                    panels[i].turnOn();
                } else {
                    panels[i].turnOff();
                }
            }
        };

        model.addPanel = function(panel) {
            panels.push(panel);
            if (panels.length > 0) {
                panels[0].turnOn();
            }
        };
    }

    app.component("accordian", {
        templateUrl: "components/accordian/accordian.component.html",
        controllerAs: "model",
        controller: controller,
        transclude: true
    });
}());