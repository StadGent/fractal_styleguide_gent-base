'use strict';

module.exports = {
  hidden: true,
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    site_name: 'Stad.gent'
  },
  variants: [
    {
      name: 'subsite',
      context: {
        type: 'subsite',
        site_name: 'ICT supplier Digipolis Gent'
      }
    }
  ]
};
