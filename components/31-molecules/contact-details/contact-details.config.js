'use strict';

module.exports = {
  status: 'alpha',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [{
      name: 'inverted',
      context: {
        modifier: 'contact-details-inverted'
      }
    }
  ]
};
