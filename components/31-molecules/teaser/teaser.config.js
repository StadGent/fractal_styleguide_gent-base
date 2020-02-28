'use strict';

module.exports = {
  collator: function (markup, item) {
    if (item.handle === 'teaser--teaser--wide') {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem); padding: 0;"><ul style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else if (item.handle === 'teaser--teaser--inverted' || item.handle === 'teaser--teaser--inverted--variant'
    ) {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem); background-color: #f0f9fd; padding: 1.2rem;" class="container"><ul class="grid-3">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem);"><ul class="grid-3" style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
  },
  context: {
    image_ratio: '8:5',
    paragraph_text: 'This is an example teaser. Other teasers are also possible but with fewer content for example.',
    title: 'Teaser title text comes here.',
    published_date: 'Gepost op Zaterdag 7 januari 2019',
    link_text: 'Read more',
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
  },
  variants: [
    {
      name: 'teaser--underlined',
      context: {
        modifier: 'teaser--underlined',
        paragraph_text: 'This is another example teaser. Other teasers are also possible but with more or fewer content for example.',
        title: 'Teasers can also be underlined',
        published_date: 'Gepost op Zaterdag 7 januari 2019',
        link_text: 'Read more',
        link: '#',
        telephone: '0123456789',
        opening_hours_service: '2690'
      }
    },
    {
      name: 'teaser--simple',
      hidden: true,
      context: {
        event_date: null,
        tag: null,
        tag2: null,
        telephone: null,
        label_text: null
      }
    },
    {
      name: 'teaser--inverted',
      context: {
        modifier: 'teaser--inverted',
        paragraph_text: 'This is an example teaser but on a background. These kind of teasers need some padding on their content otherwise the content would visually stick to the sides.',
        title: 'Teaser with inverted styling',
        link_text: 'Read more',
        link: '#',
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text'
      }
    },
    {
      name: 'teaser--wide',
      context: {
        image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
        image_alt_text: 'alt text',
        type: 'teaser--wide',
        paragraph_text: 'This is a wide teaser, usually used with the sidebar layout. It can contain multiple components and has an optional image.',
        title: 'This is a wide teaser, usually used with the sidebar layout',
        link_text: 'Read more',
        link: '#',
        tag: 'Optional tag',
        tag2: 'More optional tags',
        address_location: 'Lakenhalle',
        address: 'Botermarkt 18A, 9000 Gent',
        list: [
          'List item 1',
          'List item 2 is a bit longer',
          'List item 3',
          'List item 4'
        ]
      }
    }
  ]
};
