'use strict';

module.exports = {
  title: 'Form item',
  status: 'beta',
  handle: 'form-item',
  preview: '@preview',
  collated: 'true',
  context: {
    label: 'Label email',
    for: 'email_id',
    label_optional: 'Optional',
    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    input_component: 'input-text'
  },
  variants: [
    {
      name: 'default'
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'with-success',
      context: {
        modifier: 'success'
      }
    },
    {
      name: 'date',
      context: {
        input_component: 'input-date'
      }
    },
    {
      name: 'email',
      context: {
        input_component: 'input-email'
      }
    },
    {
      name: 'number',
      context: {
        input_component: 'input-number'
      }
    },
    {
      name: 'password',
      context: {
        input_component: 'input-password'
      }
    },
    {
      name: 'tel',
      context: {
        input_component: 'input-tel'
      }
    }
  ]
};
