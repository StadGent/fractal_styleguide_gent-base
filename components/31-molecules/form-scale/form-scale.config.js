'use strict';

module.exports = {
  context: {
    id: 'input-radio-scale',
    label: 'radio scale',
    field_description: 'You can add an optional field description here.',
    options: Array.from({length: 10}, (_, i) => ({
      label: String(i + 1), name: 'radiogroup-scale', id: `radio-scale-${i + 1}`
    }))
  },

  variants: [{
    name: 'with-error',
    context: {
      id: 'input-radio-scale--error',
      label: 'radio scale with error',
      modifier: 'error',
      field_description: 'You can add an optional field description here.',
      field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      options: Array.from({length: 10}, (_, i) => ({
        label: String(i + 1), name: 'radiogroup-scale-error', id: `radio-scale-error-${i + 1}`
      }))
    }
  },

  {
    name: 'with-success',
    context: {
      id: 'input-radio-scale--success',
      label: 'radio scale with success',
      modifier: 'success',
      field_description: 'You can add an optional field description here.',
      field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      options: Array.from({length: 10}, (_, i) => ({
        label: String(i + 1), name: 'radiogroup-scale-success', id: `radio-scale-success-${i + 1}`
      }))
    }
  },

  {
    name: 'disabled',
    context: {
      id: 'input-radio-scale--disabled',
      label: 'radio scale disabled',
      modifier: 'disabled',
      disabled: true,
      field_description: 'You can add an optional field description here.',
      field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      options: Array.from({length: 10}, (_, i) => ({
        label: String(i + 1),
        name: 'radiogroup-scale-disabled',
        id: `radio-scale-disabled-${i + 1}`,
        attributes: i === 3 ? 'checked="checked"' : ''
      }))
    }
  }]
};
