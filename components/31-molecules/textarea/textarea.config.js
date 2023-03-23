'use strict';

module.exports = {
  context: {
    id: 'textearea',
    input_component: 'input-textarea',
    label: 'Textarea'
  },
  variants: [
    {
      name: 'with error',
      context: {
        id: 'textarea--error',
        modifier: 'error',
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'with success',
      context: {
        id: 'textarea--success',
        modifier: 'success',
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'disabled',
      context: {
        id: 'textarea--disabled',
        disabled: true
      }
    }
  ]
};
