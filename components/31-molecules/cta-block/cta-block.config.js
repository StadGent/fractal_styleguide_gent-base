'use strict';

module.exports = {
  title: 'CTA block',
  status: 'alpha',
  handle: 'cta-block',
  context: {
    title: 'This is a title',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
    type: 'link',
    links: [
      {
        text: 'In the summertime',
        url: 'mailto: info@stad.gent',
        modifier: 'standalone-link'
      },
      {
        text: 'When the weather is hot',
        url: '#',
        modifier: 'standalone-link'
      }
    ]
  }
};
