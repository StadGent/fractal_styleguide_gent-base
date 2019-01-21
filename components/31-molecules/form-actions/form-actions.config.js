'use strict';

module.exports = {
  title: 'Form actions',
  status: 'beta',
  handle: 'form-actions',
  preview: '@preview-description-list',
  collated: 'true',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default',
      preview: '@preview'
    },
    {
      name: 'editor',
      preview: '@preview'
    }
  ]
};
