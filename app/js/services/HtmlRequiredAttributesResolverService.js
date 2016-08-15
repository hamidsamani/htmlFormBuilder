angular.module('builder').factory('HttpRequiredAttributesResolver', function (HtmlElementFinder) {
    return {
        isRequiredAttribute: function (element, attr) {
            return HtmlElementFinder.findElementCategory(element)['required'].indexOf(attr) !== -1;
        }
    }
});