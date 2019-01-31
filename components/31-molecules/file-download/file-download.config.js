'use strict';

module.exports = {
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
      name: 'button',
      context: {
        modifier: 'button button-primary'
      }
    }
  ]
};
