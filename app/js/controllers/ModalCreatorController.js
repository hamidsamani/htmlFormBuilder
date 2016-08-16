(function () {
    'use strict';
    angular.module('builder').controller('ModalCreatorController',
        ['$scope', 'HtmlElementFinder', 'HtmlFileDownloaderService',
            '$uibModal', 'HtmlRendererService', 'JsRendererService', '$sce',
            function ($scope,
                      HtmlElementFinder,
                      HtmlFileDownloaderService,
                      $uibModal,
                      HtmlRendererService,
                      JsRendererService,
                      $sce) {

                $scope.$watchCollection('html', function () {
                    $scope.rawText = $scope.html.join('');
                });
                $scope.formElements = HtmlElementFinder.getFormElements();
                $scope.miscellaneous = HtmlElementFinder.getMiscellaneousElements();
                $scope.uibootstrap = HtmlElementFinder.getUibootstrapElements();
                $scope.html = [];
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
                        console.log(element);
                        HtmlRendererService.renderHtmlForElement(element).then(function (data) {
                            $scope.html.push($sce.trustAsHtml(data.data));
                        });
                        JsRendererService.renderJsForElement(element).then(function (data) {
                            $scope.jsText = $sce.trustAsJs(data.data);

                        });
                    });
                };

                $scope.download = function () {
                    HtmlFileDownloaderService.downloadAsHtmlFile($scope.rawText);
                };

                $scope.remove = function (index) {
                    $scope.html.splice(index, 1);
                    $scope.rawText = $scope.html.join('');
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