'use strict';

module.exports = {
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
        id: 'input-textarea',
        label: 'input-textarea',
        input_component: 'input-textarea'
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
        id: 'input-select',
        label: 'select',
        input_component: 'input-select',
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
        id: 'input-multiselect',
        label: 'multiselect',
        input_component: 'input-select',
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
    },
    {
      name: 'radio',
      context: {
        id: 'input-radio',
        label: 'radio buttons',
        input_component: 'input',
        type: 'radio',
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
      name: 'checkbox',
      context: {
        id: 'input-checkbox',
        input_component: 'input',
        type: 'checkbox',
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
            id: 'checkbox-error-2'
          }
        ]
      }
    }
  ]
};
