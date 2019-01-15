'use strict';

module.exports = {
  title: 'Teaser',
  status: 'ready',
  name: 'teaser',
  default: 'teaser',
  preview: '@preview-description-list',
  collated: true,
  collator: function (markup, item) {
    if (item.handle === 'teaser--teaser--wide') {
      return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%;"><ul style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else if (item.handle === 'teaser--teaser--inverted' || item.handle === 'teaser--teaser--inverted--variant'
    ) {
      return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%; background-color: #f0f9fd; padding: 1.2rem 1.2rem 0;" class="container"><ul class="grid-3">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else {
      return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%;"><ul class="grid-3" style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
  },
  context: {
    image_ratio: '8:5'
  },
  variants: [
    {
      name: 'teaser',
      context: {
        preview: '@preview',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'Teaser title text comes here.',
        published_date: 'Gepost op Zaterdag 7 januari 2019',
        link_text: 'read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text',
        tag: 'Optional tag',
        tag2: 'Optional tag 2',
        event_date: {
          text_1: 'From the 7th',
          datetime_1: '2019-01-07',
          text_2: 'untill the 13th of January 2019',
          datetime_2: '2019-01-13'
        },
        label_text: 'Optional label',
        telephone: '0123456789',
        opening_hours_service: '2690'
      }
    },
    {
      name: 'teaser--example',
      context: {
        preview: '@preview',
        modifier: 'teaser--underlined',
        image_ratio: '1:1',
        image_src: 'https://via.placeholder.com/280x280&text=1:1+(280x280)',
        image_alt_text: 'alt text',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'Teaser title text comes here.',
        published_date: 'Gepost op Zaterdag 7 januari 2019',
        link_text: 'read more',
        link: '#',
        tag: 'Optional tag',
        tag2: 'Optional tag 2',
        label_text: 'Optional label',
        telephone: '0123456789',
        opening_hours_service: '2690'
      }
    },
    {
      name: 'teaser--inverted',
      context: {
        preview: '@preview',
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
      name: 'teaser--wide',
      context: {
        preview: '@preview',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text',
        type: 'teaser--wide',
        paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        title: 'General article title text',
        link_text: 'read more',
        link: '#',
        tag: 'Just some tag',
        address_location: 'Lakenhalle',
        address: 'Botermarkt 18A, 9000 Gent',
        list: [
          'Nature',
          'Green with historical value',
          'Barbeque zone',
          'Street'
        ]
      }
    }
  ]
};
