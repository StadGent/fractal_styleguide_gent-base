'use strict';

module.exports = {
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width:40rem">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    caption: 'Figure caption comes here.',
    src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
    alt_text: 'Image alt text',
    ratio: '8:5'
  },

  variants: [
    {
      name: 'no-caption',
      context: {
        caption: false
      }
    },
    {
      name: 'placeholder',
      context: {
        src: false,
        caption: false
      }
    },
    {
      name: 'broken',
      context: {
        src: 'http://example.com/broken-url.jpg'
      }
    }
  ]
};
