'use strict';

module.exports = {
  label: 'Call To Action',
  context: {
    layout: 'image-none',
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis.',
    color: 'secondary'
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
      name: 'image left with optional information',
      context: {
        layout: 'image-left',
        src: 'https://via.placeholder.com/570x570&text=1:1+(570x570)',
        alt_text: 'Image alt text',
        links: [
          {
            text: 'An external link',
            url: 'https://stad.gent'
          }
        ]
      }
    },
    {
      name: 'image right with secondary action',
      context: {
        layout: 'image-right',
        src: 'https://via.placeholder.com/570x570&text=1:1+(570x570)',
        alt_text: 'Image alt text',
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
