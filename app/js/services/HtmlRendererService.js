(function () {
    angular.module('builder').factory('HtmlRendererService', ['$http', function ($http) {
        var path = 'http://localhost:3000/widgets';

        return {
            renderHtmlForElement: function (element) {
                return $http.post(path, element);
            }
        }
    }])

})();