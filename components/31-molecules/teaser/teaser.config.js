'use strict';

module.exports = {
  collator: function (markup, item) {
    if (item.handle === 'teaser--teaser--wide') {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem); padding: 0;"><ul style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else if (item.handle.includes('simple') || item.handle.includes('background')) {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem); background-color: #F0F1F2; padding: 1.2rem;" class="container"><ul class="grid-3">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
    else {
      return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: calc(100% - 1.2rem);"><ul class="grid-3" style="margin-bottom: 5rem;">${markup}${markup}${markup}</ul></dd>\n<!-- End: @${item.handle} -->\n`;
    }
  },
  context: {
    image_ratio: '8:5',
    paragraph_text: 'This is an example teaser. Other teasers are also possible but with fewer content for example.',
    title: 'Teaser title text comes here and can spread over multiple lines',
    published_date: '13/07/2023',
    link_text: 'Read more',
    link: '#',
    image_src: 'https://via.placeholder.com/800x500&text=8:5+(800x500)',
    image_alt_text: 'alt text',
    tags: ['Optional tag', 'Optional tag 2'],
    tags_position: 'bottom',
    event_date: {
      text_1: '13/07/2023',
      datetime_1: '2023-07-13',
      text_2: '- 15/07/2023',
      datetime_2: '2023-07-15'
    },
    label_text: 'Optional label',
    list: [
      'List item 1',
      'List item 2 is a bit longer',
      'List item 3'
    ]
  },
  variants: [
    {
      name: 'teaser--no-image',
      context: {
        modifier: 'no-image',
        title: 'Teasers have a title that looks like this and can be longer too',
        published_date: '13/07/2023',
        link_text: 'Read more',
        link: '#',
        label_text: null,
        image_src: null
      }
    },
    {
      name: 'teaser--background',
      context: {
        image_ratio: '8:5',
        modifier: 'teaser--background',
        title: 'Teasers have a title that looks like this',
        published_date: '13/07/2023',
        link_text: 'Read more',
        link: '#',
        tags: null,
        label_text: null,
        list: null
      }
    },
    {
      name: 'teaser--background--no-image',
      context: {
        image_ratio: '8:5',
        modifier: 'teaser--background no-image',
        title: 'Teasers have a title that looks like this',
        published_date: '13/07/2023',
        link_text: 'Read more',
        link: '#',
        tags: null,
        label_text: null,
        image_src: null,
        list: null
      }
    },
    {
      name: 'teaser--square',
      context: {
        image_ratio: '1:1',
        modifier: 'teaser--square',
        paragraph_text: '',
        title: 'Teasers have a title that looks like this',
        published_date: '13/07/2023',
        link_text: 'Read more',
        link: '#',
        list: null,
        label_text: 'Event',
        tags: ['Optional tag'],
        tags_position: 'top',
        image_src: 'https://via.placeholder.com/570x570&text=1:1+(570x570)'
      }
    },
    {
      name: 'teaser--simple',
      context: {
        modifier: 'teaser--simple',
        event_date: null,
        label_text: null,
        tags: null,
        published_date: null,
        title_icon: 'civil-affairs'
      }
    },
    {
      name: 'teaser--simple--no-image',
      context: {
        modifier: 'teaser--simple',
        event_date: null,
        label_text: null,
        tags: null,
        published_date: null,
        image_src: null,
        title_icon: 'civil-affairs'
      }
    },
    {
      name: 'teaser--simple--inverted',
      context: {
        modifier: 'teaser--simple teaser--inverted',
        event_date: null,
        label_text: null,
        tags: null,
        published_date: null,
        title_icon: 'civil-affairs'
      }
    },
    {
      name: 'teaser--wide',
      context: {
        image_ratio: '1:1',
        image_src: 'https://via.placeholder.com/570x570&text=1:1+(570x570)',
        image_alt_text: 'alt text',
        type: 'teaser--wide',
        paragraph_text: 'This is a wide teaser, usually used with the sidebar layout. It can contain multiple components and has an optional image.',
        title: 'This is a wide teaser, usually used with the sidebar layout',
        tags: ['Optional tag', 'More optional tags'],
        address_location: 'Lakenhalle',
        address: 'Botermarkt 18A, 9000 Gent'
      }
    }
  ]
};
