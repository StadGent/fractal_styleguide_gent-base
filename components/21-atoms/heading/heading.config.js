'use strict';

module.exports = {
  collator: function (markup, item) {
    if (item.handle.includes('-none')) {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem); background-color: #005ba9; padding: 1rem;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem);">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
    }
  },
  default: 'heading-1',
  variants: [
    {
      name: 'heading-1',
      context: {
        heading_text: 'Heading 1',
        heading: 'h1'
      }
    },
    {
      name: 'heading-2',
      context: {
        heading_text: 'Heading 2',
        heading: 'h2'
      }
    },
    {
      name: 'heading-3',
      context: {
        heading_text: 'Heading 3',
        heading: 'h3'
      }
    },
    {
      name: 'heading-4',
      context: {
        heading_text: 'Heading 4',
        heading: 'h4'
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
      name: 'heading-1-background-primary',
      context: {
        heading: 'h1',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-primary'
      }
    },
    {
      name: 'heading-2-background-primary',
      context: {
        heading: 'h2',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-primary'
      }
    },
    {
      name: 'heading-3-background-primary',
      context: {
        heading: 'h3',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-primary'
      }
    },
    {
      name: 'heading-4-background-primary',
      context: {
        heading: 'h4',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-primary'
      }
    },
    {
      name: 'heading-1-background-none',
      context: {
        heading: 'h1',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-none'
      }
    },
    {
      name: 'heading-2-background-none',
      context: {
        heading: 'h2',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-none'
      }
    },
    {
      name: 'heading-3-background-none',
      context: {
        heading: 'h3',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-none'
      }
    },
    {
      name: 'heading-4-background-none',
      context: {
        heading: 'h4',
        heading_text: 'Overview title lorem ipsum dolor set lorem ipsum dolor set',
        type: 'bg-none'
      }
    }
  ]
};
