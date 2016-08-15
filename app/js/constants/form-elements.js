angular.module('builder').constant('elements',
    {
        input: {
            element: 'input',
            vars: [],
            attributes: ['id', 'type', 'label', 'name', 'ng-model', 'class', 'placeholder',
                'required', 'ng-minlength', 'ng-maxlength', 'ng-pattern',
                'ng-trim', 'ng-change', 'ng-click'],
            defaults: {
                type: ['password',
                    'hidden',
                    'datetime',
                    'datetime-local',
                    'input'],
                required: [true, false]
            }
        },
        button: {
            element: 'button',
            vars: ['text'],
            attributes: ['id', 'type', 'class', 'ng-click'],
            defaults: {
                type: ['button', 'reset', 'submit']
            }
        },
        checkbox: {
            element: 'input',
            vars: [],
            attributes: ['id', 'type', 'name', 'ng-model', 'label',
                'ng-true-value', 'ng-false-value', 'ng-change'],
            defaults: {
                type: ['checkbox']
            }
        },
        textarea: {
            element: 'textarea',
            vars: [],
            attributes: [
                'id',
                'class',
                'label',
                'name',
                'rows',
                'required',
                'ng-model',
                'ng-minlength',
                'ng-maxlength',
                'ng-pattern',
                'ng-change',
                'ng-trim'],
            defaults: {
                required: [true, false]
            }
        }
    });