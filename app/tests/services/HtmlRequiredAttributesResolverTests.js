describe('HtmlRequiredAttributesResolverService tests: ', function () {
    var service;
    beforeEach(module('builder'));
    beforeEach(inject(function (HttpRequiredAttributesResolver) {
        service = HttpRequiredAttributesResolver;
    }));

    it('service retrieve required attributes as expected', function () {
        expect(service.isRequiredAttribute('uiAlert', 'text')).toBeTruthy();
        expect(service.isRequiredAttribute('uiAlert', 'class')).toBeFalsy();
        expect(service.isRequiredAttribute('input', 'id')).toBeFalsy();
    })
});