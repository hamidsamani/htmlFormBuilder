(function () {
    'use strict';
    angular.module('builder').controller('ModalInstanceController',
        ['$scope', 'element', 'HtmlAttributeResolver', '$uibModalInstance', function ($scope, element, HtmlAttributeResolver, $uibModalInstance) {
            $scope.element = element;
            $scope.resolvedAttrs = HtmlAttributeResolver.getAttributes(element);
            $scope.attributes = {};
            $scope.resolvedDafaults = HtmlAttributeResolver.getDefaultAttributeValues(element);

            $scope.ok = function () {
                console.log($scope.attributes);
                $uibModalInstance.close($scope.attributes);
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

        }]);
})();