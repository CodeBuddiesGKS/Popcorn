(function(){
    "use strict";

    var app = angular.module("popcorn");

    function controller() {
        var model = this;
        model.selected = false;

        model.$onInit = function() {
            model.parent.addPanel(model);
        };

        model.turnOff = function() {
            model.selected = false;
        };

        model.turnOn = function() {
            model.selected = true;
        };

        model.select = function() {
            model.parent.selectPanel(model);
        };
    }
    
    app.component("accordianPanel", {
        templateUrl: "components/accordian/accordian-panel/accordian-panel.component.html",
        controllerAs: "model",
        controller: controller,
        require: {
            "parent": "^accordian"
        },
        transclude: true,
        bindings: {
            heading: "@"
        }
    });
}());