'use strict';

module.exports = {
  title: 'Article teaser',
  status: 'ready',
  name: 'teaser-article',
  hidden: true,
  context: {
    teaser_uid: 'uid',
    teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
    teaser_title: 'General article title text',
    teaser_published_date: 'Gepost op Zaterdag 7 januari 2019',
    teaser_link_text: 'read more',
    teaser_link_link: '#',
    teaser_image_src: 'https://via.placeholder.com/800x500',
    teaser_image_alt_text: 'alt text',
    teaser_tag: 'Just some tag'
  },
  variants: [
    {
      name: 'event',
      context: {
        teaser_uid: 'uid',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        teaser_title: 'News article title text',
        teaser_event_date: 'Saturday 7th of January 2019',
        teaser_event_datetime: '2019-01-07',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://via.placeholder.com/800x500',
        teaser_image_alt_text: 'alt text',
        teaser_tag: 'I\'m another tag'
      }
    }
  ]
};
