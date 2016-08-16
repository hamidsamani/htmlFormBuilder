angular.module('builder').factory('JsRendererService', function ($http) {
    var path = 'http://localhost:3000/scripts';
    return {
        renderJsForElement: function (element) {
            return $http.post(path, element);
        }
    }
});