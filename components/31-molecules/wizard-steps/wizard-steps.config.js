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
      {text: 'first step', 'url': '#', completed: true},
      {text: 'second step', 'url': '#', completed: true},
      {text: 'third step', 'url': '#'},
      {text: 'fourth step with a long name', 'url': '#'},
      {text: 'inactive fifth step'},
      {text: 'inactive sixth step'},
      {text: 'inactive seventh step'},
    ],
    active: 3
  },
  variants: [
    {
      name: 'default',
      preview: '@preview'
    }
  ]
};
