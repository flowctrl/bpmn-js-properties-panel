'use strict';

var is = require('bpmn-js/lib/util/ModelUtil').is,
    entryFactory = require('../../../factory/EntryFactory');


module.exports = function(group, element) {
  if (is(element, 'camunda:CallActivity')) {

    group.entries.push(entryFactory.textField({
      id: 'calledElement',
      description: 'Called Element of the Call Activity',
      label: '하위 프로세스 아이디',
      modelProperty: 'calledElement'
    }));
  }
};