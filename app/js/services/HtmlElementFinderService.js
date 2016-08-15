angular.module('builder').factory('HtmlElementFinder', ['elements', 'miscellaneous', 'uibootstrap',
    function (elements, miscellaneous, uibootstrap) {
        return {
            findElementCategory: function (element) {
                if (Object.keys(elements).indexOf(element) != -1) {
                    return elements[element];
                } else if (Object.keys(miscellaneous).indexOf(element) != -1) {
                    return miscellaneous[element];
                } else if (Object.keys(uibootstrap).indexOf(element) != -1) {
                    return uibootstrap[element];
                }

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

    }]);