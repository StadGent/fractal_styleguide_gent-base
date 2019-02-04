'use strict';

module.exports = {
  status: 'alpha',
  context: {
    title: 'Contact us',
    description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
    tel: '09 123 45 67',
    email: null,
    link: '#'
  },
  variants: [
    {
      name: 'contact-block-with-email',
      context: {
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        tel: null,
        email: 'info@stad.gent',
        link: '#'
      }
    },
    {
      name: 'contact-block-without-description',
      context: {
        title: 'Contact us',
        tel: '09 123 45 67',
        email: null,
        link: '#'
      }
    },
    {
      name: 'contact-block-without-link',
      context: {
        title: 'Contact us',
        description: 'Nulla nec eros lorem. Morbi at augue eu purus congue auctor. Sed id volutpat odio. Nunc congue diam vel diam venenatis, ut consequat urna dapibus. Vivamus at lobortis odio. Sed felis mauris, mattis eget purus at, pharetra ullamcorper risus.',
        tel: null,
        email: 'info@stad.gent'
      }
    }
  ]
};
