(function () {
    'use strict';
    angular.module('builder').factory('HtmlAttributeResolver', function (elements, miscellaneous, uibootstrap) {
        function findElementCategory(element) {
            if (Object.keys(elements).indexOf(element) != -1) {
                return elements[element];
            } else if (Object.keys(miscellaneous).indexOf(element) != -1) {
                return miscellaneous[element];
            } else if (Object.keys(uibootstrap).indexOf(element) != -1) {
                return uibootstrap[element];
            }

        }

        return {
            getAttributes: function (element) {
                return findElementCategory(element)['attributes'];
            },
            getDefaultAttributeValues: function (element) {
                return findElementCategory(element)['defaults'];
            },
            getFormElements: function () {
                return Object.keys(elements);
            },
            getMiscellaneousElements: function () {
                return Object.keys(miscellaneous);
            },
            getUibootstrapElements: function () {
                return Object.keys(uibootstrap);
            }
        }
    })
})();