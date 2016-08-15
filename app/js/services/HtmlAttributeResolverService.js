(function () {
    'use strict';
    angular.module('builder').factory('HtmlAttributeResolver', function (HtmlElementFinder) {
        return {
            getAttributes: function (element) {
                return HtmlElementFinder.findElementCategory(element)['attributes'];
            },
            getDefaultAttributeValues: function (element) {
                return HtmlElementFinder.findElementCategory(element)['defaults'];
            }
        }
    })
})();