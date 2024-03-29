'use strict';

module.exports = {
  default: 'grid-4',
  context: {
    image_src: 'https://via.placeholder.com/528x330&text=16:10+(528x330)',
    image_alt_text: 'alt text',
    paragraph_text: 'Teaser text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
    title: 'Title text ',
    teaser_uid: 'uid',
    link_text: 'Read more',
    link: '#',
    grid: 'grid-4'
  },
  variants: [
    {
      name: 'grid-4'
    },
    {
      name: 'grid-5',
      context: {
        grid: 'grid-5'
      }
    },
    {
      name: 'grid-3',
      context: {
        grid: 'grid-3'
      }
    },
    {
      name: 'grid-2',
      context: {
        grid: 'grid-2'
      }
    },
    {
      name: 'grid-2-1',
      context: {
        grid: 'grid-2-1'
      }
    },
    {
      name: 'with show more',
      context: {
        grid: 'grid-4'
      }
    }
  ]
};
