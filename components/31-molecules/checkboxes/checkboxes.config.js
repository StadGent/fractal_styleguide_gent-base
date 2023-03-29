'use strict';

module.exports = {
  context: {
    id: 'input-checkbox',
    label: 'Checkboxes',
    options: [
      {
        label: 'checkbox option 1',
        name: 'checkboxgroup-error',
        id: 'checkbox-error-1'
      },
      {
        label: 'checkbox option 2',
        name: 'checkboxgroup-error',
        id: 'checkbox-error-2',
        attributes: 'checked="checked"'
      }
    ]
  },
  variants: [
    {
      name: 'with-error',
      context: {
        id: 'input-checkbox--error',
        label: 'input-checkbox',
        modifier: 'error',
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'with-success',
      context: {
        id: 'input-checkbox--success',
        label: 'input-text',
        modifier: 'success',
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'disabled',
      context: {
        id: 'input-checkbox--disabled',
        label: 'input-text',
        modifier: 'disabled',
        disabled: true,
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    }
  ]
};
