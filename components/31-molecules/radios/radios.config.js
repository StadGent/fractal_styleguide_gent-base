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
        id: 'input-radio--error',
        label: 'input radio with error',
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
        id: 'input-radio--success',
        label: 'input radio with success',
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
    },
    {
      name: 'disabled',
      context: {
        id: 'input-radio--disabled',
        label: 'input radio disabled',
        modifier: 'disabled',
        disabled: true,
        field_description: 'You can add an optional field description here.',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
        options: [
          {
            label: 'Radio option 1',
            name: 'radiogroup-disabled',
            id: 'radio-disabled-1'
          },
          {
            label: 'Radio option 2',
            name: 'radiogroup-disabled',
            id: 'radio-disabled-2',
            attributes: 'checked="checked"'
          }
        ]
      }
    }
  ]
};
