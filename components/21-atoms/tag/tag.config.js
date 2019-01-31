'use strict';

module.exports = {
  status: 'beta',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    tag_text: 'Inner city',
    type: 'tag'
  },
  variants: [
    {
      name: 'filter-tag',
      context: {
        tag_text: 'Inner city',
        type: 'filter-tag'
      }
    },
    {
      name: 'span-tag',
      context: {
        tag_text: 'Inner city',
        type: 'span-tag'
      }
    }
  ]
};
