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
    teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
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
        teaser_event_date: {
          text_1: 'From the 7th',
          datetime_1: '2019-01-07',
          text_2: 'untill the 13th of January 2019',
          datetime_2: '2019-01-13'
        },
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        teaser_image_alt_text: 'alt text',
        teaser_tag: 'I\'m another tag',
        teaser_label_text: 'Event'
      }
    }
  ]
};
