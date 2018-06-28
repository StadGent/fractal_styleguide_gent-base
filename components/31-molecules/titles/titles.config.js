'use strict';

module.exports = {
  title: 'Titles',
  status: 'alpha',
  name: 'titles',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  preview: '@preview-description-list',
  default: 'overview-title',
  variants: [
    {
      name: 'overview-title',
      preview: '@preview',
      context: {
        heading: 'h1',
        heading_text: 'Overview title',
        type: 'overview-title'
      }
    },
    {
      name: 'collection-title',
      preview: '@preview',
      context: {
        heading: 'h2',
        heading_text: 'Collection title',
        type: 'collection-title'
      }
    }
  ]
};
