'use strict';

module.exports = {
  preview: '@preview-description-list-without-padding',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd style="max-width: 100%; padding: 0;">${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  default: 'Title boxed',
  context: {
    modifier: 'primary dark-background',
    heading_text: 'This is the title of the page',
    speech_button: true,
    summary: false,
    summary_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed gravida posuere. Maecenas sit amet sapien aliquam, semper elit in, sodales massa.',
    popular_topics: false,
    image: false,
    date: false
  },
  variants: [
    {
      name: 'Title boxed with metadata in primary color',
      context: {
        modifier: 'primary dark-background',
        summary: true
      }
    },
    {
      name: 'Title boxed with metadata in primary color with image',
      context: {
        modifier: 'primary dark-background',
        summary: true,
        summary_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed gravida posuere. Maecenas sit amet sapien aliquam, semper elit in, sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed gravida posuere. Maecenas sit amet sapien aliquam, semper elit in, sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed gravida posuere. Maecenas sit amet sapien aliquam, semper elit in, sodales massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit ipsum sed gravida posuere.',
        image: true,
        date: true
      }
    },
    {
      name: 'Title boxed with metadata in secondary color with image',
      context: {
        modifier: 'secondary',
        summary: true,
        image: true
      }
    },
    {
      name: 'Title boxed with metadata in secondary color with image and event summary',
      context: {
        modifier: 'secondary',
        summary: true,
        event_summary: true,
        image: true
      }
    },
    {
      name: 'Title boxed with metadata in secondary color without image',
      context: {
        modifier: 'secondary',
        summary: true
      }
    },
    {
      name: 'Title boxed with metadata in secondary color with event summary without image',
      context: {
        modifier: 'secondary',
        summary: true
      }
    },
    {
      name: 'Title boxed with metadata and accolade design with image',
      context: {
        modifier: 'accolade-title',
        popular_topics: true,
        image: true
      }
    },
    {
      name: 'Title boxed with metadata and accolade design without image',
      context: {
        modifier: 'accolade-title',
        popular_topics: true
      }
    },
    {
      name: 'Title boxed without metadata and accolade design without image',
      context: {
        modifier: 'accolade-title breakout',
        speech_button: false,
        popular_topics: false,
        image: false
      }
    }
  ]
};
