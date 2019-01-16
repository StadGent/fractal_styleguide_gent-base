'use strict';

module.exports = {
  title: 'Display switcher',
  status: 'alpha',
  name: 'display-switcher',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  }
};
