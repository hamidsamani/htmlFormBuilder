describe('HtmlVariableResolverTests', function () {
    var service;
    beforeEach(module('builder'));
    beforeEach(inject(function (_HtmlVariableResolver_) {
        service = _HtmlVariableResolver_;
    }));
    it('html vars retrieve as expected', function () {
        expect(service).toBeDefined();
        expect(service.getElementVars('input')).toEqual([]);
        expect(service.getElementVars('button')).toEqual(['text']);
    })

});