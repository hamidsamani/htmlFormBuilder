describe('ModalCreatorController tests: ', function () {
    var scope;
    beforeEach(module('builder'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function () {
            return $controller('ModalCreatorController', {
                '$scope': scope
            })
        }
    }));
    it('elements retrievedas expected', function () {
        controller = createController();
        expect(scope.formElements).not.toBeNull(['input']);
    })
});