describe('HttpAttributeResolverTests', function () {
    var service;
    beforeEach(module('builder'));
    beforeEach(inject(function (_HtmlAttributeResolver_) {
        service = _HtmlAttributeResolver_;
    }));
    it('default attribute values retrieve as expected', function () {
        expect(service.getDefaultAttributeValues('button')).toEqual({type: ['button', 'reset', 'submit']});
        expect(service.getDefaultAttributeValues('checkbox')).toEqual({type: ['checkbox']});
    });
    it('elements attributes retrieve as expected', function () {
        expect(service.getAttributes('table')).toEqual(['ng-repeat', 'columns']);
    })
});