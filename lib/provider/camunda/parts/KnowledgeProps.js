'use strict';

var getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject,
    is = require('bpmn-js/lib/util/ModelUtil').is,
    entryFactory = require('../../../factory/EntryFactory'),
    cmdHelper = require('../../../helper/CmdHelper');


module.exports = function(group, element, bpmnFactory) {
    var bo;

    bo = getBusinessObject(element);

    var entry = entryFactory.textField({
        id : 'knowledgeId',
        description : 'Knowledge Id of this User Task',
        label : '매뉴얼 아이디',
        modelProperty : 'knowledgeId',
        popModule : 'knowledge'
    });

    entry.get= function(element, propertyName) {
        var boKnowledgeId = bo.get('camunda:knowledgeId');

        return { knowledgeId : boKnowledgeId };
    };

    entry.set= function(element, values, containerElement) {
        return cmdHelper.updateProperties(element, {
            'camunda:knowledgeId': values.knowledgeId
        });
    };

    group.entries.push(entry);
};