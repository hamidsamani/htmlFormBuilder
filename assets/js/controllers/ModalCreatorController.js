(function () {
    'use strict';
    angular.module('builder').controller('ModalCreatorController',
        ['$scope', 'HtmlAttributeResolver', '$uibModal', 'HtmlRendererService', '$sce', function ($scope,
                                                                                                  HtmlAttributeResolver,
                                                                                                  $uibModal,
                                                                                                  HtmlRendererService,
                                                                                                  $sce) {
            $scope.html = [];
            $scope.element = 'input'; //mock change it later
            $scope.open = function () {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: 'modalDialog.html',
                    controller: 'ModalInstanceController',
                    size: 'sm',
                    resolve: {
                        element: function () {
                            return $scope.element;
                        }
                    }
                });
                modalInstance.result.then(function (attributes) {
                    var element = {
                        element: $scope.element,
                        attributes: attributes
                    };
                    HtmlRendererService.renderHtmlForElement(element).then(onSuccess, angular.noop());
                    function onSuccess(data) {
                        $scope.html.push($sce.trustAsHtml(data.data));
                        updateRawCode();
                    }
                });

            };
            $scope.remove = function (index) {
                $scope.html.splice(index, 1);
                $scope.rawText = $scope.html.join('');
            };
            $scope.moveUp = function (index) {
                if (index > 0) {
                    var current = $scope.html.splice(index, 1);
                    $scope.html.splice(index - 1, 0, $sce.trustAsHtml(current.join('')));
                    updateRawCode();
                }
            };
            $scope.moveDown = function (index) {
                if (index < $scope.html.length) {
                    var current = $scope.html.splice(index, 1);
                    $scope.html.splice(index + 1, 0, $sce.trustAsHtml(current.join('')));
                    updateRawCode();
                }

            };
            function updateRawCode() {
                $scope.rawText = $scope.html.join('');
            }


        }
        ]);
})();