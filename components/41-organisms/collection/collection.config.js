'use strict';

module.exports = {
  name: 'Collections',
  status: 'alpha',
  handle: 'collection',
  default: 'grid-4',
  context: {
    teaser_image_src: 'https://via.placeholder.com/528x330&text=16:10+(528x330)',
    teaser_image_alt_text: 'alt text',
    teaser_paragraph_text: 'Teaser text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
    teaser_title: 'Title text ',
    teaser_uid: 'uid',
    teaser_link_text: 'read more',
    teaser_link_link: '#',
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
      name: 'with show more',
      context: {
        grid: 'grid-4'
      }
    }
  ]
};
