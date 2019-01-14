'use strict';

module.exports = {
  title: 'Input Multiselect',
  status: 'beta',
  handle: 'input-multiselect',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    label: 'Multiselect',
    name: 'multiselect_name',
    id: 'multiselect_id',
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
      name: 'default',
      preview: '@preview',
      handle: 'input-multiselect'
    },
    {
      name: 'success',
      preview: '@preview',
      context: {
        id: 'multiselect_id--success',
        modifier: 'success'
      }
    },
    {
      name: 'error',
      preview: '@preview',
      context: {
        id: 'multiselect_id--error',
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      preview: '@preview',
      context: {
        id: 'multiselect_id--disabled',
        disabled: true
      }
    }
  ]
};
