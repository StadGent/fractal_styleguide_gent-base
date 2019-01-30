'use strict';

module.exports = {
  name: 'Figure',
  handle: 'figure',
  status: 'alpha',
  default: 'default',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    figure_figcaption: 'Figure caption comes here.',
    figure_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
    figure_image_alt_text: 'Image alt text',
    figure_ratio: '8:5'
  },
  variants: [
    {
      name: 'default'
    },
    {
      name: 'hero',
      preview: '@preview',
      context: {
        figure_image_src: 'https://via.placeholder.com/1600x400&text=4:1+(1600x400)',
        figure_ratio: '4:1',
        modifier: 'hero'
      }
    },
    {
      name: 'subsite',
      context: {
        figure_image_src: 'https://via.placeholder.com/1600x400&text=4:1+(1600x400)',
        figure_ratio: '4:1',
        figure_logo_src_dark: '/styleguide/img/stock/digipolis-dark.svg',
        figure_logo_src_light: '/styleguide/img/stock/digipolis-light.svg',
        figure_logo_alt_text: 'Logo Digipolis',
        figure_title: '<span>ICT Supplier</span> Digipolis Gent',
        modifier: 'hero',
        subsite: true
      }
    }
  ]
};
