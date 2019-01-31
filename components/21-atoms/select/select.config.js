'use strict';

module.exports = {
  status: 'beta',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    name: 'select_name',
    id: 'select_id',
    label: 'Input Select',
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
      name: 'success',
      preview: '@preview',
      context: {
        id: 'select_id--success',
        modifier: 'success'
      }
    },
    {
      name: 'error',
      context: {
        id: 'select_id--error',
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      context: {
        id: 'select_id--disabled',
        disabled: true
      }
    },
    {
      name: 'multiple--default',
      context: {
        id: 'select_id--multiple',
        multiple: true
      }
    },
    {
      name: 'multiple--success',
      context: {
        id: 'select_id--multiple--success',
        modifier: 'success',
        multiple: true
      }
    },
    {
      name: 'multiple--error',
      context: {
        id: 'select_id--multiple--error',
        modifier: 'error',
        multiple: true
      }
    },
    {
      name: 'multiple--disabled',
      context: {
        id: 'select_id--multiple--disabled',
        disabled: true,
        multiple: true
      }
    }
  ]
};
