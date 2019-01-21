'use strict';

module.exports = {
  name: 'Collections',
  status: 'alpha',
  handle: 'collection',
  default: 'grid-4',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    image_src: 'https://via.placeholder.com/528x330&text=16:10+(528x330)',
    image_alt_text: 'alt text',
    paragraph_text: 'Teaser text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
    title: 'Title text ',
    teaser_uid: 'uid',
    link_text: 'read more',
    link: '#',
    grid: 'grid-4'
  },
  variants: [
    {
      name: 'grid-4',
      preview: '@preview'
    },
    {
      name: 'grid-5',
      preview: '@preview',
      context: {
        grid: 'grid-5'
      }
    },
    {
      name: 'grid-3',
      preview: '@preview',
      context: {
        grid: 'grid-3'
      }
    },
    {
      name: 'grid-2',
      preview: '@preview',
      context: {
        grid: 'grid-2'
      }
    },
    {
      name: 'with show more',
      preview: '@preview',
      context: {
        grid: 'grid-4'
      }
    }
  ]
};
