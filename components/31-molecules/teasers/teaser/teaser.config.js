'use strict';

module.exports = {
  title: 'Teaser',
  status: 'ready',
  name: 'teaser',
  default: 'article',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%;"><ul class="grid-3" style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    teaser_image_ratio: '8:5'
  },
  variants: [
    {
      name: 'article',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-article',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        teaser_title: 'General article title text',
        teaser_published_date: 'Gepost op Zaterdag 7 januari 2019',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        teaser_image_alt_text: 'alt text',
        teaser_tag: 'Just some tag'
      }
    },
    {
      name: 'event',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-news',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        teaser_title: 'Event title text',
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
    },
    {
      name: 'teaser-contact',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-contact',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        teaser_title: 'Title text',
        teaser_link_text: 'more info and opening hours',
        teaser_link_link: '#',
        teaser_telephone: '0123456789',
        teaser_opening_hours_service: '2690'
      }
    },
    {
      name: 'teaser-person',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-person',
        teaser_paragraph_text: 'Function or job description comes here',
        teaser_title: 'Name and first name',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_ratio: '1:1',
        teaser_image_src: 'https://via.placeholder.com/280x280&text=1:1+(280x280)',
        teaser_image_alt_text: 'alt text',
        teaser_tag: 'Just some tag'
      }
    },
    {
      name: 'teaser-programme',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-programme',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        teaser_title: 'Title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        teaser_image_alt_text: 'alt text'
      }
    },
    {
      name: 'teaser-topic',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-topic',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        teaser_title: 'Title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#'
      }
    },
    {
      name: 'teaser-topic-with-links',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-topic',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        teaser_title: 'Title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
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
          },
          {
            text: 'Subtopic link 5',
            link: 'www.google.com'
          },
          {
            text: 'Subtopic link 6',
            link: 'www.google.com'
          }
        ]
      }
    },
    {
      name: 'teaser-topic-with-images',
      context: {
        teaser_uid: 'uid',
        teaser_type: 'teaser-topic',
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        teaser_title: 'Title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        teaser_image_alt_text: 'alt text'
      }
    }
  ]
};
