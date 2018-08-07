'use strict';

module.exports = {
  name: 'Collections',
  status: 'alpha',
  handle: 'collection',
  default: 'default',
  context: {
    teaser_image_src: 'https://via.placeholder.com/528x330&text=16:10+(528x330)',
    teaser_image_alt_text: 'alt text',
    teaser_paragraph_text: 'Teaser text, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
    teaser_title: 'Title text ',
    teaser_uid: 'uid',
    teaser_link_text: 'read more',
    teaser_link_link: '#'
  },
  variants: [
    {
      name: 'default'
    },
    {
      name: 'with images'
    },
    {
      name: 'with show more'
    }
  ]
};
