angular.module('builder').factory('DecorateFileForDownloadService', ['$http', function ($http) {
    var path = 'http://localhost:3000/templates';
    return {
        decorateWithOptions: function (html, options) {
            return $http.post(path, {element: 'layout', elements: html.join(''), properties: {surounds: options}});
        }
    }
}]);