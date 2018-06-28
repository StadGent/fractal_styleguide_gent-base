'use strict';

module.exports = {
  title: 'Lists',
  status: 'ready',
  handle: 'list',
  default: 'unordered-list',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    type: 'unordered',
    items: [
      'item 1',
      'item 2'
    ],
    definitions: [
      'description 1',
      'description 2'
    ],
    icon_items: [
      '<i class="icon-home" aria-hidden="true"></i> item 1',
      '<i class="icon-home" aria-hidden="true"></i> item 2'
    ]
  },
  variants: [
    {
      name: 'Ordered list',
      handle: 'ordered-list',
      preview: '@preview',
      context: {
        type: 'ordered'
      }
    },
    {
      name: 'List with links',
      handle: 'links-list',
      preview: '@preview',
      context: {
        type: 'links',
        items: [
          '<a href="#">item 1</a>',
          '<a href="#">item 2</a>'
        ]
      }
    },
    {
      name: 'List with checkmarks',
      handle: 'list-with-checkmarks',
      preview: '@preview',
      context: {
        type: 'checkmark-list'
      }
    },
    {
      name: 'List with small checkmarks',
      handle: 'list-with-small-checkmarks',
      preview: '@preview',
      context: {
        type: 'checkmark-list-small'
      }
    },
    {
      name: 'List with icons',
      handle: 'list-with-icons',
      preview: '@preview',
      context: {
        type: 'icon-list'
      }
    },
    {
      name: 'Definition list',
      handle: 'definition-list',
      preview: '@preview',
      context: {
        type: 'definition'
      }
    }
  ]
};
