(function () {
    'use strict';
    angular.module('builder').factory('HtmlAttributeResolver', function () {
        var elements = {
            input: ['id', 'type', 'name', 'ng-model', 'ng-click', 'label'],
            button: []
        };
        return {
            getAttributes: function (element) {
                return elements[element];
            }
        }
    })
})();