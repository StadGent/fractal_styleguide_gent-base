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
            text: 'An internal link',
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
      name: 'with secondary action',
      context: {
        links: [
          {
            text: 'Internal link',
            url: '#'
          },
          {
            text: 'Internal link',
            url: '#'
          }
        ]
      }
    },
    {
      name: 'phone',
      context: {
        type: 'phone',
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        links: [
          {
            text: '09 123 123',
            url: 'tel:#'
          },
          {
            text: 'Check all contact details',
            url: '#'
          }
        ]
      }
    },
    {
      name: 'e-mail',
      context: {
        type: 'mail',
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        links: [
          {
            text: 'info@stad.gent',
            url: 'mailto:#'
          },
          {
            text: 'Check all contact details',
            url: '#'
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
            text: 'A download link',
            url: '#',
            document: 'document',
            size: '102kb'
          },
          {
            text: 'An internal link',
            url: '#'
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
                text: 'A download link',
                url: '#',
                document: 'document',
                size: '102kb'
              },
              {
                text: 'Another download link',
                url: '#',
                document: 'document',
                size: '102kb'
              }
            ]
          },
          {
            links: [
              {
                text: 'An internal link',
                url: '#'
              },
              {
                text: 'A download link',
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
