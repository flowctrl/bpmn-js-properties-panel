'use strict';

var entryFactory = require('../../../../factory/EntryFactory'),
    is = require('bpmn-js/lib/util/ModelUtil').is;

/**
 * Create an entry to modify the name of an an element.
 *
 * @param  {djs.model.Base} element
 * @param  {Object} options
 * @param  {string} options.id the id of the entry
 * @param  {string} options.label the label of the entry
 *
 * @return {Array<Object>} return an array containing
 *                         the entry to modify the name
 */
module.exports = function(element, options) {

  var defaultName = '이름';
  if (window.pal.consumer == 'hwenc' && is(element, 'bpmn:Process')) {
    defaultName = '프로세스 이름';
  }

  options = options || {};
  var id = options.id || 'name',
      label = options.label || defaultName,
      modelProperty = options.modelProperty || 'name';

  var nameEntry = entryFactory.textArea({
    id: id,
    label: label,
    modelProperty: modelProperty,
    expandable: true,
    minRows: 1,
    maxRows: 3
  });

  return [ nameEntry ];

};
