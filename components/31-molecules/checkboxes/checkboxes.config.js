'use strict';

module.exports = {
  context: {
    id: 'input-checkbox',
    label: 'Checkboxes',
    field_description: 'You can add an optional field description here.',
    options: [
      {
        label: 'checkbox option 1',
        name: 'checkboxgroup-error',
        id: 'checkbox-error-1'
      },
      {
        label: 'checkbox option 2',
        name: 'checkboxgroup-error',
        id: 'checkbox-error-2'
      }
    ]
  },
  variants: [
    {
      name: 'with-error',
      context: {
        id: 'input_text--error',
        label: 'input-text',
        modifier: 'error',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'with-success',
      context: {
        id: 'input-text--success',
        label: 'input-text',
        modifier: 'success',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    }
  ]
};
