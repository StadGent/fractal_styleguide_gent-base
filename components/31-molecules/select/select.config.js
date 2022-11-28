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
      name: 'disabled',
      context: {
        id: 'select--disabled',
        label: 'disabled',
        disabled: true
      }
    }
  ]
};
