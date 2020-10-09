'use strict';

module.exports = {
  context: {
    id: 'input-radio',
    label: 'radio buttons',
    options: [
      {
        label: 'Radio option 1',
        name: 'radiogroup',
        id: 'radio-1'
      },
      {
        label: 'Radio option 2',
        name: 'radiogroup',
        id: 'radio-2'
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
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
        options: [
          {
            label: 'Radio option 1',
            name: 'radiogroup-error',
            id: 'radio-error-1'
          },
          {
            label: 'Radio option 2',
            name: 'radiogroup-error',
            id: 'radio-error-2'
          }
        ]
      }
    },
    {
      name: 'with-success',
      context: {
        id: 'input-text--success',
        label: 'input-text',
        modifier: 'success',
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
        options: [
          {
            label: 'Radio option 1',
            name: 'radiogroup-success',
            id: 'radio-success-1'
          },
          {
            label: 'Radio option 2',
            name: 'radiogroup-success',
            id: 'radio-success-2'
          }
        ]
      }
    }
  ]
};
