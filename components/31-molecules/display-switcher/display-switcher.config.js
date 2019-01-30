'use strict';

module.exports = {
  title: 'Display switcher',
  status: 'alpha',
  name: 'display-switcher',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  }
};
