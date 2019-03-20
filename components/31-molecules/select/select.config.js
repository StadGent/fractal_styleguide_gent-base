'use strict';

module.exports = {
  context: {
    id: 'select',
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
  },
  variants: [
    {
      name: 'multiselect',
      context: {
        id: 'multiselect',
        label: 'multiselect',
        input_component: 'input-select--multiple--default'
      }
    }
  ]
};
