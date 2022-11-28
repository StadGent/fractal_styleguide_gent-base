'use strict';

module.exports = {
  label: 'Input',
  context: {
    label: 'input-text',
    id: 'input_id',
    label_optional: 'Optional',
    field_description: null,
    field_message: null,
    input_component: 'input',
    type: 'text'
  },
  variants: [
    {
      name: 'default',
      context: {
        field_description: 'Optional field description.<br> --- <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eveniet illo porro quis sint.'
      }
    },
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
    },
    {
      name: 'date',
      context: {
        id: 'input-date',
        label: 'input-date',
        input_component: 'input',
        type: 'date'
      }
    },
    {
      name: 'email',
      context: {
        id: 'input-email',
        label: 'input-email',
        input_component: 'input',
        type: 'email'
      }
    },
    {
      name: 'number',
      context: {
        id: 'input-number',
        label: 'input-number',
        input_component: 'input',
        type: 'number'
      }
    },
    {
      name: 'password',
      context: {
        id: 'input-password',
        label: 'input-password',
        input_component: 'input',
        type: 'password'
      }
    },
    {
      name: 'tel',
      context: {
        id: 'input-tel',
        label: 'input-tel',
        input_component: 'input',
        type: 'tel'
      }
    },
    {
      name: 'disabled',
      context: {
        id: 'input--disabled',
        label: 'disabled',
        disabled: true
      }
    },
    {
      name: 'file',
      context: {
        id: 'input-file',
        label: 'input--file',
        input_component: 'file'
      }
    }
  ]
};
