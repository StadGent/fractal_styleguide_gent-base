'use strict';

module.exports = {
  title: 'Input Select',
  status: 'beta',
  handle: 'input-select',
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
      name: 'default',
      preview: '@preview',
      handle: 'input-text'
    },
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
      preview: '@preview',
      context: {
        id: 'select_id--error',
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      preview: '@preview',
      context: {
        id: 'select_id--disabled',
        disabled: true
      }
    },
    {
      name: 'multiple--default',
      preview: '@preview',
      context: {
        multiple: true
      }
    },
    {
      name: 'multiple--success',
      preview: '@preview',
      context: {
        id: 'select_id--success',
        modifier: 'success',
        multiple: true
      }
    },
    {
      name: 'multiple--error',
      preview: '@preview',
      context: {
        id: 'select_id--error',
        modifier: 'error',
        multiple: true
      }
    },
    {
      name: 'multiple--disabled',
      preview: '@preview',
      context: {
        id: 'select_id--disabled',
        disabled: true,
        multiple: true
      }
    }
  ]
};
