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
    },
    {
      name: 'Background Primary',
      handle: 'bg-primary',
      context: {
        heading_h1: 'h1',
        heading_h2: 'h2',
        heading_h3: 'h3',
        heading_h4: 'h4',
        heading_text_h1: 'Background Primary H1 title',
        heading_text_h2: 'Background Primary H2 title',
        heading_text_h3: 'Background Primary H3 title',
        heading_text_h4: 'Background Primary H4 title',
        type: 'bg-primary'
      }
    },
    {
      name: 'Background none',
      handle: 'bg-none',
      context: {
        heading_h1: 'h1',
        heading_h2: 'h2',
        heading_h3: 'h3',
        heading_h4: 'h4',
        heading_text_h1: 'Background None H1 title',
        heading_text_h2: 'Background None H2 title',
        heading_text_h3: 'Background None H3 title',
        heading_text_h4: 'Background None H4 title',
        type: 'bg-none'
      }
    }
  ]
};
