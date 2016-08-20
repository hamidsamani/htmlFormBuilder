(function () {
    'use strict';
    angular.module('builder').controller('ModalCreatorController',
        ['$scope', 'HtmlElementFinder', 'DecorateFileForDownloadService',
            '$uibModal', 'HtmlRendererService', 'JsRendererService', '$sce', function ($scope,
                                                                                       HtmlElementFinder,
                                                                                       DecorateFileForDownloadService,
                                                                                       $uibModal,
                                                                                       HtmlRendererService,
                                                                                       JsRendererService,
                                                                                       $sce) {

            $scope.$watchCollection('html', function () {
                $scope.rawHtml = $scope.html.join('');
            });
            $scope.$watchCollection('js', function () {
                $scope.rawJs = $scope.html.join('');
            });

            $scope.formElements = HtmlElementFinder.getFormElements();
            $scope.miscellaneous = HtmlElementFinder.getMiscellaneousElements();
            $scope.uibootstrap = HtmlElementFinder.getUibootstrapElements();
            $scope.html = [];
            $scope.js = [];
            $scope.options = {
                doctype: true,
                html: true,
                head: true,
                body: true,
                form: true
            };

            $scope.open = function (elem) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'modalDialog.html',
                    controller: 'ModalInstanceController',
                    resolve: {
                        element: function () {
                            return elem;
                        }
                    }
                });
                modalInstance.result.then(function (element) {
                    HtmlRendererService.renderHtmlForElement(element).then(function (data) {
                        $scope.html.push($sce.trustAsHtml(data.data));
                    });
                    JsRendererService.renderJsForElement(element).then(function (data) {
                        $scope.js.push($sce.trustAsJs(data.data));

                    });
                });
            };

            $scope.downloadhtml = function (filename) {
                DecorateFileForDownloadService.decorateWithOptions($scope.html, $scope.js, $scope.options).then(function (data) {
                    saveAs(
                        new Blob(
                            [data.data]
                            , {type: "application/xhtml+xml;charset=" + document.characterSet}
                        )
                        , (filename || 'index') + ".html"
                    );
                });

            };
            $scope.remove = function (index) {
                $scope.html.splice(index, 1);
                $scope.rawHtml = $scope.html.join('');
            };
            $scope.moveUp = function (index) {
                if (index > 0) {
                    var current = $scope.html.splice(index, 1);
                    $scope.html.splice(index - 1, 0, $sce.trustAsHtml(current.join('')));
                }
            };
            $scope.moveDown = function (index) {
                if (index < $scope.html.length) {
                    var current = $scope.html.splice(index, 1);
                    $scope.html.splice(index + 1, 0, $sce.trustAsHtml(current.join('')));

                }

            };
        }]);
})();