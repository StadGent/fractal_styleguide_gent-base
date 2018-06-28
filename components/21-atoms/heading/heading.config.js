'use strict';

module.exports = {
  title: 'Headings',
  status: 'alpha',
  name: 'heading',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  preview: '@preview-description-list',
  default: 'heading-1',
  variants: [
    {
      name: 'heading-1',
      preview: '@preview',
      context: {
        heading_text: 'Heading 1',
        type: 'h1'
      }
    },
    {
      name: 'heading-2',
      preview: '@preview',
      context: {
        heading_text: 'Heading 2',
        type: 'h2'
      }
    },
    {
      name: 'heading-3',
      preview: '@preview',
      context: {
        heading_text: 'Heading 3',
        type: 'h3'
      }
    },
    {
      name: 'heading-4',
      preview: '@preview',
      context: {
        heading_text: 'Heading 4',
        type: 'h4'
      }
    },
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
