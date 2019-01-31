'use strict';

module.exports = {
  default: 'unordered-list',
  context: {
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
      '<i class="icon-home" aria-hidden="true"></i> item 2',
      '<i class="icon-external-link" aria-hidden="true"></i> <a href="https://stad.gent">item 2 - external link</a>',
      '<i class="icon-arrow-right" aria-hidden="true"></i> <a href="#" class="standalone-link">item 3 - standalone link</a>',
      '<i class="icon-download" aria-hidden="true"></i> <a href="#" download>item 4 - download link</a>',
      '<i class="icon-phone" aria-hidden="true"></i> <a href="tel: +32 473 58 48 30">item 5 - tel link</a>',
      '<i class="icon-envelope" aria-hidden="true"></i> <a href="mailto:info@stad.gent">item 6 - mail link</a>'
    ]
  },
  variants: [
    {
      name: 'unordered-list',
      context: {
        type: 'unordered'
      }
    },
    {
      name: 'Ordered list',
      handle: 'ordered-list',
      context: {
        type: 'ordered'
      }
    },
    {
      name: 'Inline list',
      handle: 'inline-list',
      context: {
        type: 'inline'
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
      name: 'List with icons inline',
      handle: 'list-with-icons-inline',
      context: {
        type: 'icon-list',
        modifier: 'inline',
        icon_items: [
          '<i class="icon-home" aria-hidden="true"></i> item 1',
          '<i class="icon-home" aria-hidden="true"></i> item 2',
          '<i class="icon-external-link" aria-hidden="true"></i> <a href="https://stad.gent">item 2 - external link</a>'
        ]
      }
    },
    {
      name: 'Definition list',
      handle: 'definition-list',
      context: {
        type: 'definition'
      }
    },
    {
      name: 'Dash-separated list',
      handle: 'dash-separated-list',
      context: {
        type: 'dash-separated-list',
        items: [
          'item 1',
          'item 2',
          'item 3',
          'item 4',
          'item 5',
          'item 6'
        ]
      }
    }
  ]
};
