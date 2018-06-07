'use strict';

module.exports = {
  title: 'Lists',
  status: 'ready',
  handle: 'list',
  default: 'unordered-list',
  collated: true,
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
      context: {
        type: 'ordered'
      }
    },
    {
      name: 'List with links',
      handle: 'links-list',
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
      context: {
        type: 'checkmark-list'
      }
    },
    {
      name: 'List with small checkmarks',
      handle: 'list-with-small-checkmarks',
      context: {
        type: 'checkmark-list-small'
      }
    },
    {
      name: 'List with icons',
      handle: 'list-with-icons',
      context: {
        type: 'icon-list'
      }
    },
    {
      name: 'Definition list',
      handle: 'definition-list',
      context: {
        type: 'definition'
      }
    }
  ]
};
