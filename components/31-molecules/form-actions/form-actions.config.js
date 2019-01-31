'use strict';

module.exports = {
  status: 'beta',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  variants: [
    {
      name: 'editor'
    }
  ]
};
