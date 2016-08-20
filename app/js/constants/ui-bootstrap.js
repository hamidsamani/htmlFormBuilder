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
        vars: ['text', 'controller'],
        required: ['id', 'text']
    },
    uiCollapse: {
        element: 'Collapse',
        attributes: ['uib-collapse'],
        vars: ['content'],
        required: ['uib-collapse']
    }
});