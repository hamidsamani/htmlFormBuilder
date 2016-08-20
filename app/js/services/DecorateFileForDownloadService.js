angular.module('builder').factory('DecorateFileForDownloadService', ['$http', function ($http) {
    var path = 'http://localhost:3000/templates';
    return {
        decorateWithOptions: function (html, js, options) {
            return $http.post(path, {
                template: 'layout',
                elements: {html: html.join(''), js: js.join('')},
                properties: {surounds: options}
            });
        }
    }
}]);