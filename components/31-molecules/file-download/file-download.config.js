'use strict';

module.exports = {
  name: 'File download',
  status: 'ready',
  preview: '@preview-description-list',
  default: 'default',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    link: '#',
    text: 'When the weather is hot',
    file: {
      size: '102 kb',
      type: 'pdf'
    }
  },
  variants: [
    {
      name: 'default',
      preview: '@preview'
    },
    {
      name: 'button',
      preview: '@preview',
      context: {
        modifier: 'button button-primary'
      }
    }
  ]
};
