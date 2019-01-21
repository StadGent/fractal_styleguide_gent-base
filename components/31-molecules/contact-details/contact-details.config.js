'use strict';

module.exports = {
  title: 'Contact details',
  status: 'alpha',
  handle: 'contact-details',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default',
      preview: '@preview'
    },
    {
      name: 'inverted',
      preview: '@preview',
      context: {
        modifier: 'contact-details-inverted'
      }
    }
  ]
};
