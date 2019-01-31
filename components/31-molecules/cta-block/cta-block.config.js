'use strict';

module.exports = {
  status: 'alpha',
  context: {
    type: 'link',
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis.'
  },
  variants: [
    {
      name: 'default',
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
