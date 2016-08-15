(function () {
    'use strict';
    angular.module('builder').controller('ModalInstanceController',
        ['$scope', 'element', 'HtmlVariableResolver', 'HtmlAttributeResolver', 'HttpRequiredAttributesResolver', '$uibModalInstance', function ($scope, element, HtmlVariableResolver, HtmlAttributeResolver, HttpRequiredAttributesResolver, $uibModalInstance) {
            $scope.elementName = element;
            $scope.resolvedAttrs = HtmlAttributeResolver.getAttributes(element);
            $scope.resolvedDafaults = HtmlAttributeResolver.getDefaultAttributeValues(element);
            $scope.resolvedVars = HtmlVariableResolver.getElementVars(element);
            $scope.isRequired = function (attr) {
                return HttpRequiredAttributesResolver.isRequiredAttribute(element, attr);
            };
            $scope.attributes = {};

            $scope.element = {element: element};

            $scope.ok = function () {
                $uibModalInstance.close($scope.element);
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

        }]);
})();