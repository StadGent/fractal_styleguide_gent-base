'use strict';

module.exports = {
  hidden: true,
  name: 'field-message',
  status: 'ready',
  default: 'field-message-error',
  handle: 'field-message',
  preview: '@preview-description-list',
  collated: 'true',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam.'
  },
  variants: [
    {
      name: 'field-message',
      preview: '@preview',
      context: {
        modifier: ''
      }
    },
    {
      name: 'field-message-error',
      preview: '@preview',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'field-message-success',
      preview: '@preview',
      context: {
        modifier: 'success'
      }
    }
  ]
};
