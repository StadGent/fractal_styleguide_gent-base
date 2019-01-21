'use strict';

module.exports = {
  title: 'CTA block',
  status: 'alpha',
  handle: 'cta-block',
  collated: 'true',
  collator: function (markup, item) {
    return `<!-- Start: @${item.handle} -->\n<dt>${item.name}</dt><dd>${markup}</dd>\n<!-- End: @${item.handle} -->\n`;
  },
  preview: '@preview-description-list',
  context: {
    type: 'link',
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis.'
  },
  variants: [
    {
      name: 'default',
      label: 'Single',
      preview: '@preview',
      context: {
        description: false,
        links: [
          {
            text: 'When the weather is hot',
            url: '#'
          }
        ]
      }
    },
    {
      name: 'default with long title',
      preview: '@preview',
      context: {
        description: false,
        title: 'Dit is een titel. Liquorice chocolate ice cream cheesecake jelly beans marzipan chocolate.',
        links: [
          {
            text: 'When the weather is hot',
            url: '#'
          }
        ]
      }
    },
    {
      name: 'default with optional information',
      preview: '@preview',
      context: {
        links: [
          {
            text: 'An external link',
            url: 'https://stad.gent'
          }
        ]
      }
    },
    {
      name: 'with secondary action (link)',
      preview: '@preview',
      context: {
        links: [
          {
            text: 'In the summertime',
            url: '#'
          },
          {
            text: 'When the weather is hot',
            url: '#'
          }
        ]
      }
    },
    {
      name: 'with secondary action (download)',
      preview: '@preview',
      context: {
        links: [
          {
            text: 'In the summertime',
            url: '#'
          },
          {
            text: 'When the weather is hot',
            url: '#',
            document: 'document',
            size: '102kb'
          }
        ]
      }
    },
    {
      name: 'download',
      preview: '@preview',
      context: {
        type: 'download',
        links: [
          {
            text: 'When the weather is hot',
            url: '#',
            document: 'document',
            size: '102kb'
          }
        ]
      }
    },
    {
      name: 'download with secondary action (link)',
      preview: '@preview',
      context: {
        type: 'download',
        links: [
          {
            text: 'In the summertime',
            url: '#',
            document: 'document',
            size: '102kb'
          },
          {
            text: 'When the weather is hot',
            url: '#'
          }
        ]
      }
    },
    {
      name: 'download with secondary action (download)',
      preview: '@preview',
      context: {
        type: 'download',
        links: [
          {
            text: 'In the summertime',
            url: '#',
            document: 'document',
            size: '102kb'
          },
          {
            text: 'When the weather is hot',
            url: '#',
            document: 'document',
            size: '102kb'
          }
        ]
      }
    },
    {
      name: 'double',
      preview: '@preview',
      context: {
        double: true,
        items: [
          {
            type: 'download',
            links: [
              {
                text: 'In the summertime',
                url: '#',
                document: 'document',
                size: '102kb'
              },
              {
                text: 'When the weather is hot',
                url: '#',
                document: 'document',
                size: '102kb'
              }
            ]
          },
          {
            links: [
              {
                text: 'In the summertime',
                url: '#'
              },
              {
                text: 'When the weather is hot',
                url: '#',
                document: 'document',
                size: '102kb'
              }
            ]
          }
        ]

      }
    }
  ]
};
