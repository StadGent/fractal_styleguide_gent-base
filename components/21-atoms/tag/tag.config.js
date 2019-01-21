'use strict';

module.exports = {
  title: 'Tag',
  status: 'beta',
  handle: 'tag',
  order: 11,
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    tag_text: 'Inner city'
  },
  variants: [
    {
      name: 'default',
      preview: '@preview',
      handle: 'tag',
      context: {
        tag_text: 'Inner city',
        type: 'tag'
      }
    },
    {
      name: 'filter-tag',
      preview: '@preview',
      handle: 'filter-tag',
      context: {
        tag_text: 'Inner city',
        type: 'filter-tag'
      }
    },
    {
      name: 'span-tag',
      preview: '@preview',
      handle: 'span-tag',
      context: {
        tag_text: 'Inner city',
        type: 'span-tag'
      }
    }
  ]
};
