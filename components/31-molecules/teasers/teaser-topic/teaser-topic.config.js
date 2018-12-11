'use strict';

module.exports = {
  title: 'Topic teaser',
  status: 'ready',
  name: 'teaser-topic',
  hidden: true,
  context: {
    teaser_uid: 'uid',
    teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
    teaser_title: 'Title text',
    teaser_link_text: 'read more',
    teaser_link_link: '#',
    teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
    teaser_image_alt_text: 'alt text',
    teaser_topic_links: [
      {
        text: 'Subtopic link 1',
        link: 'www.google.com'
      },
      {
        text: 'Subtopic link 2',
        link: 'www.google.com'
      },
      {
        text: 'Subtopic link 3',
        link: 'www.google.com'
      },
      {
        text: 'Subtopic link 4',
        link: 'www.google.com'
      }
    ]
  }
};
