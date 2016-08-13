(function () {
    'use strict';
    angular.module('builder').controller('ModalInstanceController',
        ['$scope', 'element', 'HtmlAttributeResolver', '$uibModalInstance', function ($scope, element, HtmlAttributeResolver, $uibModalInstance) {
            $scope.element = element;
            $scope.resolvedAttrs = HtmlAttributeResolver.getAttributes(element);
            $scope.attributes = {};

            $scope.ok = function () {
                $uibModalInstance.close($scope.attributes);
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

        }]);
})();