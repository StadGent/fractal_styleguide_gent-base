'use strict';

module.exports = {
  default: 'heading-1',
  variants: [
    {
      name: 'heading-1',
      context: {
        heading_text: 'Heading 1',
        type: 'h1'
      }
    },
    {
      name: 'heading-2',
      context: {
        heading_text: 'Heading 2',
        type: 'h2'
      }
    },
    {
      name: 'heading-3',
      context: {
        heading_text: 'Heading 3',
        type: 'h3'
      }
    },
    {
      name: 'heading-4',
      context: {
        heading_text: 'Heading 4',
        type: 'h4'
      }
    },
    {
      name: 'overview-title',
      context: {
        heading: 'h1',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'overview-title'
      }
    },
    {
      name: 'collection-title',
      context: {
        heading: 'h2',
        heading_text: 'Collection title',
        type: 'collection-title'
      }
    }
  ]
};
