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
        figure_title: 'Subsite <span>Digipolis Gent</span>',
        modifier: 'hero'
      }
    }
  ]
};
