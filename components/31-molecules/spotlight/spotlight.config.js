'use strict';

module.exports = {
  label: 'In the spotlight',
  default: 'image left',
  context: {
    layout: 'image-left',
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis.',
    src: 'https://via.placeholder.com/570x570&text=1:1+(570x570)',
    alt_text: 'Image alt text',
    links: [
      {
        text: 'An external link',
        url: 'https://stad.gent'
      }
    ]
  },
  variants: [
    {
      name: 'image right',
      context: {
        layout: 'image-right',
        src: 'https://via.placeholder.com/570x570&text=1:1+(570x570)',
        alt_text: 'Image alt text',
        links: [
          {
            text: 'Internal link',
            url: '#'
          }
        ]
      }
    }
  ]
};
