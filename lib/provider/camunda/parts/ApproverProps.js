'use strict';

var is = require('bpmn-js/lib/util/ModelUtil').is,
    entryFactory = require('../../../factory/EntryFactory');


module.exports = function(group, element) {
    if (is(element, 'camunda:Approver')) {

        // Assignee
        group.entries.push(entryFactory.textField({
            id: 'approver',
            description: 'Approver of the User Task',
            label: '전결권자',
            modelProperty: 'approver'
        }));
    }
};