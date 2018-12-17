'use strict';

module.exports = {
  title: 'Teaser',
  status: 'ready',
  name: 'teaser',
  default: 'article',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    if (
      item.handle === 'teaser--teaser-wide' ||
      item.handle === 'teaser--teaser-wide-with-address' ||
      item.handle === 'teaser--teaser-wide-with-image'
    ) {
      return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%;"><ul style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else {
      return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%;"><ul class="grid-3" style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
  },
  context: {
    teaser_image_ratio: '8:5'
  },
  variants: [
    {
      name: 'article',
      context: {
        preview: '@preview',
        type: 'teaser-article',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'General article title text',
        teaser_published_date: 'Gepost op Zaterdag 7 januari 2019',
        link_text: 'read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text',
        teaser_tag: 'Just some tag'
      }
    },
    {
      name: 'event',
      context: {
        preview: '@preview',
        type: 'teaser-news',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'Event title text',
        teaser_event_date: {
          text_1: 'From the 7th',
          datetime_1: '2019-01-07',
          text_2: 'untill the 13th of January 2019',
          datetime_2: '2019-01-13'
        },
        link_text: 'read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text',
        teaser_tag: 'I\'m another tag',
        teaser_label_text: 'Event'
      }
    },
    {
      name: 'teaser-contact',
      context: {
        preview: '@preview',
        type: 'teaser-contact',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        title: 'Title text',
        link_text: 'more info and opening hours',
        link: '#',
        telephone: '0123456789',
        opening_hours_service: '2690'
      }
    },
    {
      name: 'teaser-person',
      context: {
        preview: '@preview',
        type: 'teaser-person',
        paragraph_text: 'Function or job description comes here',
        title: 'Name and first name',
        link_text: 'read more',
        link: '#',
        teaser_image_ratio: '1:1',
        image_src: 'https://via.placeholder.com/280x280&text=1:1+(280x280)',
        image_alt_text: 'alt text',
        teaser_tag: 'Just some tag'
      }
    },
    {
      name: 'teaser-programme',
      context: {
        preview: '@preview',
        type: 'teaser-programme',
        modifier: 'teaser--inverted',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        title: 'Title text',
        link_text: 'read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text'
      }
    },
    {
      name: 'teaser-underlined',
      context: {
        preview: '@preview',
        type: 'teaser-underlined',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        title: 'Title text',
        link_text: 'read more',
        link: '#'
      }
    },
    {
      name: 'teaser-underlined-with-links',
      context: {
        preview: '@preview',
        type: 'teaser-underlined',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        title: 'Title text',
        link_text: 'read more',
        link: '#',
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
      name: 'teaser-underlined-with-images',
      context: {
        preview: '@preview',
        type: 'teaser-underlined',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, suscipit.',
        title: 'Title text',
        link_text: 'read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text'
      }
    },
    {
      name: 'teaser-wide',
      context: {
        preview: '@preview',
        type: 'teaser-wide',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'General article title text',
        link_text: 'read more',
        link: '#',
        teaser_tag: 'Just some tag'
      }
    },
    {
      name: 'teaser-wide-with-address',
      context: {
        preview: '@preview',
        type: 'teaser-wide',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'General article title text',
        link_text: 'read more',
        link: '#',
        teaser_tag: 'Just some tag',
        teaser_address_location: 'Lakenhalle',
        teaser_address: 'Botermarkt 18A, 9000 Gent'
      }
    },
    {
      name: 'teaser-wide-with-image',
      context: {
        preview: '@preview',
        type: 'teaser-wide',
        title: 'General article title text',
        link_text: 'read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text',
        teaser_location: 'Gent',
        teaser_list: [
          'Nature',
          'Green with historical value',
          'Barbeque zone',
          'Street'
        ]
      }
    }
  ]
};
