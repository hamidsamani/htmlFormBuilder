angular.module('builder').factory('HtmlVariableResolver', ['HtmlElementFinder', function (HtmlElementFinder) {
    return {
        getElementVars: function (element) {
            return HtmlElementFinder.findElementCategory(element)['vars'];
        }
    }
}]);