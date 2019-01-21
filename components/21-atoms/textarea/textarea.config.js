'use strict';

module.exports = {
  title: 'Textarea',
  status: 'beta',
  handle: 'input-textarea',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    id: 'textarea_id',
    name: 'textarea_name',
    preview: '@preview'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-textarea',
      preview: '@preview'
    },
    {
      name: 'success',
      preview: '@preview',
      context: {
        id: 'textarea_id--success',
        modifier: 'success'
      }
    },
    {
      name: 'error',
      preview: '@preview',
      context: {
        id: 'textarea_id--error',
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      preview: '@preview',
      context: {
        id: 'textarea_id--disabled',
        disabled: true
      }
    }
  ]
};
