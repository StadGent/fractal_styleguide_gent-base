'use strict';

module.exports = {
  name: 'Figure',
  handle: 'figure',
  status: 'alpha',
  preview: '@preview',
  default: 'default',
  context: {
    figure_figcaption: 'Figure caption comes here.',
    figure_image_src: 'https://via.placeholder.com/704x440',
    figure_image_alt_text: 'Image alt text'
  },
  variants: [
    {
      name: 'default'
    },
    {
      name: 'hero',
      context: {
        figure_image_src: 'https://via.placeholder.com/1600x420',
        modifier: 'hero'
      }
    },
    {
      name: 'subsite',
      context: {
        figure_image_src: 'https://via.placeholder.com/1600x420',
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
