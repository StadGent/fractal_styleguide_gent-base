'use strict';

module.exports = {
  name: 'Logo',
  status: 'ready',
  default: 'default',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'default',
      preview: '@preview',
      context: {
        type: '',
        site_name: 'Stad.Gent'
      }
    },
    {
      name: 'subsite',
      preview: '@preview',
      context: {
        type: 'subsite',
        site_name: 'ICT supplier Digipolis Gent'
      }
    }
  ]
};
