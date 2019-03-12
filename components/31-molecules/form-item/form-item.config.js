'use strict';

module.exports = {
  label: 'Input',
  status: 'beta',
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
      name: 'textarea',
      context: {
        id: 'textarea',
        label: 'textarea',
        input_component: 'textarea'
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
      name: 'select',
      context: {
        id: 'select',
        label: 'select',
        input_component: 'select',
        options: [
          {
            label: 'Option 1'
          },
          {
            label: 'Option 2'
          },
          {
            optgroup: true,
            label: 'Option group',
            optgroupoptions: [
              {
                label: 'Option 3'
              },
              {
                label: 'Option 4'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'multiselect',
      context: {
        id: 'multiselect',
        label: 'multiselect',
        input_component: 'select',
        multiple: true,
        options: [
          {
            label: 'Option 1'
          },
          {
            label: 'Option 2'
          },
          {
            optgroup: true,
            label: 'Option group',
            optgroupoptions: [
              {
                label: 'Option 3'
              },
              {
                label: 'Option 4'
              }
            ]
          }
        ]
      }
    },
    {
      name: 'file',
      context: {
        id: 'input-file',
        label: 'input--file',
        input_component: 'input',
        type: 'file'
      }
    }
  ]
};
