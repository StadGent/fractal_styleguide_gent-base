'use strict';

module.exports = {
  name: 'Opening Hours',
  status: 'alpha',
  preview: '@preview-description-list',
  default: 'week-month',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.name} -->\n<dt>${item.label || item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    serviceId: '2690',
    channels: ['2102']
  },

  variants: [
    {
      name: 'week-month',
      context: {
        type: 'week-month'
      }
    },
    {
      name: 'day',
      context: {
        type: 'day'
      }
    }
  ]
};
