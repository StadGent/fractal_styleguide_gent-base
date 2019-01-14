'use strict';

module.exports = {
  title: 'Form item',
  status: 'beta',
  handle: 'form-item',
  preview: '@preview-form-item',
  collated: 'true',
  context: {
    label: 'input-text',
    id: 'input_id',
    label_optional: 'Optional',
    field_description: null,
    field_message: null,
    input_component: 'input-text'
  },
  variants: [
    {
      name: 'default',
      context: {
        field_description: 'Optional field description.<br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.'
      }
    },
    {
      name: 'with-error',
      context: {
        label: 'input-text',
        modifier: 'error',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'with-success',
      context: {
        label: 'input-text',
        modifier: 'success',
        field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.'
      }
    },
    {
      name: 'textarea',
      context: {
        label: 'input-textarea',
        input_component: 'input-textarea'
      }
    },
    {
      name: 'date',
      context: {
        label: 'input-date',
        input_component: 'input-date'
      }
    },
    {
      name: 'email',
      context: {
        label: 'input-email',
        input_component: 'input-email'
      }
    },
    {
      name: 'number',
      context: {
        label: 'input-number',
        input_component: 'input-number'
      }
    },
    {
      name: 'password',
      context: {
        label: 'input-password',
        input_component: 'input-password'
      }
    },
    {
      name: 'tel',
      context: {
        label: 'input-tel',
        input_component: 'input-tel'
      }
    },
    {
      name: 'select',
      context: {
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
        label: 'multiselect',
        input_component: 'input-multiselect',
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
        label: 'input-file',
        input_component: 'input-file'
      }
    },
    {
      name: 'radio',
      context: {
        label: 'radio buttons',
        input_component: 'input-radio',
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
        input_component: 'input-checkbox',
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
