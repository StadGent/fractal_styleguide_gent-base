'use strict';

module.exports = {
  status: 'beta',
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
      name: 'success',
      context: {
        id: 'textarea_id--success',
        modifier: 'success'
      }
    },
    {
      name: 'error',
      context: {
        id: 'textarea_id--error',
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      context: {
        id: 'textarea_id--disabled',
        disabled: true
      }
    }
  ]
};
