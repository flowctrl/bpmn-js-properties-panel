'use strict';

var nameEntryFactory = require('./implementation/Name'),
    is = require('bpmn-js/lib/util/ModelUtil').is;

module.exports = function(group, element) {

  if (!is(element, 'bpmn:Collaboration')) {

    if (window.pal.consumer == 'hwenc' && is(element, 'bpmn:Process')) {
      return;
    }

    var options;
    if (is(element, 'bpmn:TextAnnotation')) {
      options = { modelProperty: 'text' };
    }

    // name
    group.entries = group.entries.concat(nameEntryFactory(element, options));

  }

};
