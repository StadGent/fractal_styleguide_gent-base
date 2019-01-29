'use strict';

module.exports = {
  status: 'alpha',
  preview: '@preview-description-list',
  collated: 'true',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    steps: [
      {text: 'first step', url: '#'},
      {text: 'second step', url: '#'},
      {text: 'third step', url: '#'},
      {text: 'fourth step with a long name', url: '#'},
      {text: 'inactive fifth step'},
      {text: 'inactive sixth step'},
      {text: 'inactive seventh step'}
    ],
    active: 3
  },
  variants: [
    {
      name: 'default',
      preview: '@preview'
    },
    {
      name: 'first',
      preview: '@preview',
      context: {
        steps: [
          {text: 'first step', url: '#'},
          {text: 'second step', url: '#'},
          {text: 'third step', url: '#'},
          {text: 'fourth step with a long name', url: '#'},
          {text: 'inactive fifth step'},
          {text: 'inactive sixth step'}
        ],
        active: 1
      }
    },
    {
      name: 'second',
      preview: '@preview',
      context: {
        steps: [
          {text: 'first step', url: '#'},
          {text: 'second step', url: '#'},
          {text: 'third step', url: '#'},
          {text: 'fourth step with a long name', url: '#'},
          {text: 'inactive fifth step'},
          {text: 'inactive sixth step'}
        ],
        active: 2
      }
    },
    {
      name: 'second to last',
      preview: '@preview',
      context: {
        steps: [
          {text: 'first step', url: '#'},
          {text: 'second step', url: '#'},
          {text: 'third step', url: '#'},
          {text: 'fourth step with a long name', url: '#'},
          {text: 'inactive fifth step', url: '#'},
          {text: 'inactive sixth step', url: '#'}
        ],
        active: 5
      }
    },
    {
      name: 'last',
      preview: '@preview',
      context: {
        steps: [
          {text: 'first step', url: '#'},
          {text: 'second step', url: '#'},
          {text: 'third step', url: '#'},
          {text: 'fourth step with a long name', url: '#'},
          {text: 'inactive fifth step', url: '#'},
          {text: 'inactive sixth step', url: '#'}
        ],
        active: 6
      }
    }
  ]
};
