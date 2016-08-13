(function () {
    'use strict';
    angular.module('builder').factory('HtmlAttributeResolver', function (elements) {
        return {
            getAttributes: function (element) {
                return elements[element]['attributes'];
            },
            getDefaultAttributeValues: function (element) {
                return elements[element]['defaults'];
            },
            getFormElements: function () {
                return Object.keys(elements);
            }
        }
    })
})();