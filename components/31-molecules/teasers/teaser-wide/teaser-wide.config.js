'use strict';

module.exports = {
  title: 'Teaser wide',
  status: 'ready',
  name: 'teaser-wide',
  default: 'teaser-wide',
  collated: true,
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt><h2>${item.name}</h2></dt><dd style="max-width: 100%;"><ul style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
  },
  context: {
    teaser_image_ratio: '8:5',
    teaser_uid: 'uid',
    teaser_type: 'teaser-wide'
  },
  variants: [
    {
      name: 'teaser-wide',
      context: {
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        teaser_title: 'General article title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_tag: 'Just some tag'
      }
    },
    {
      name: 'teaser-wide-with-address',
      context: {
        teaser_paragraph_text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis cumque debitis eligendi harum iste laborum quibusdam ut, vitae voluptate?',
        teaser_title: 'General article title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_tag: 'Just some tag',
        teaser_address_location: 'Lakenhalle',
        teaser_address: 'Botermarkt 18A, 9000 Gent',
      }
    },
    {
      name: 'teaser-wide-with-image',
      context: {
        teaser_title: 'General article title text',
        teaser_link_text: 'read more',
        teaser_link_link: '#',
        teaser_image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        teaser_image_alt_text: 'alt text',
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
