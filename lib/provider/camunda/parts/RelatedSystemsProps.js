'use strict';

var getBusinessObject = require('bpmn-js/lib/util/ModelUtil').getBusinessObject,
    is = require('bpmn-js/lib/util/ModelUtil').is,
    entryFactory = require('../../../factory/EntryFactory'),
    cmdHelper = require('../../../helper/CmdHelper');


module.exports = function(group, element) {
    if (is(element, 'camunda:RelatedSystems')) {

        group.entries.push(entryFactory.checkbox({
            id: 'related-systems',
            description: '',
            label: '유관시스템',
            modelProperty: 'relatedSystems',

            get: function(element, node) {
                var bo = getBusinessObject(element);
                return { relatedSystems: !!bo.get('camunda:relatedSystems') };
            },

            set: function(element, values) {
                var bo = getBusinessObject(element);
                return cmdHelper.updateBusinessObject(element, bo, { 'camunda:relatedSystems': !!values.relatedSystems });
            }

        }));

    }
};