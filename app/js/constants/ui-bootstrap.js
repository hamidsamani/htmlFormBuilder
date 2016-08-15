angular.module('builder').constant('uibootstrap', {
    uiAlert: {
        element: 'uiAlert',
        attributes: ['class', 'ng-class', 'close', 'template-url'],
        vars: ['text'],
        required: ['text']
    },
    uiModal: {
        element: 'Modal Template',
        attributes: ['id'],
        vars: ['text'],
        required: ['id', 'text']
    }
});